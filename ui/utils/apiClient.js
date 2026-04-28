/**
 * API Client — Centralized HTTP Client with Auto-Auth
 * =====================================================
 * Every API call automatically attaches the Firebase ID token.
 * No page needs to manually call getIdToken() or set Authorization headers.
 *
 * Usage:
 *   import { apiRequest } from '../utils/apiClient';
 *   const data = await apiRequest('/predict/health', { method: 'POST', body: JSON.stringify(payload) });
 */

import { auth } from '../firebase/config';
import { API_BASE_URL } from './config';

/**
 * Get the current user's Firebase ID token.
 * Returns null if no user is logged in.
 */
async function getFirebaseToken() {
  const user = auth.currentUser;
  if (!user) return null;
  try {
    return await user.getIdToken();
  } catch (err) {
    console.warn('[apiClient] Failed to get Firebase token:', err.message);
    return null;
  }
}

/**
 * Check if backend is reachable (no auth required).
 */
export async function checkBackendHealth() {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    const response = await fetch(`${API_BASE_URL}/status`, {
      method: 'GET',
      signal: controller.signal
    });

    clearTimeout(timeoutId);
    return response.ok;
  } catch (error) {
    console.warn('Backend health check failed:', error.message);
    return false;
  }
}

/**
 * Make an authenticated API request with retry logic.
 * Automatically attaches the Firebase ID token to every request.
 *
 * @param {string} endpoint - API endpoint path (e.g., '/predict/health')
 * @param {Object} options  - Fetch options (method, body, etc.)
 * @param {number} maxRetries - Number of retry attempts (default: 3)
 * @returns {Promise<Object>} - Parsed JSON response
 */
export async function apiRequest(endpoint, options = {}, maxRetries = 3) {
  const url = `${API_BASE_URL}${endpoint}`;
  let lastError = null;

  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      // Auto-attach Firebase token on every attempt (token may have refreshed)
      const token = await getFirebaseToken();
      const headers = {
        'Content-Type': 'application/json',
        ...options.headers,
      };

      // Only add Authorization if we have a token
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000); // 30s timeout

      const response = await fetch(url, {
        ...options,
        signal: controller.signal,
        headers,
      });

      clearTimeout(timeoutId);

      if (response.status === 401) {
        // Token expired or invalid — don't retry, redirect to login
        console.warn('[apiClient] 401 Unauthorized — session may have expired');
        throw new Error('Session expired. Please log in again.');
      }

      if (!response.ok) {
        const error = await response.json().catch(() => ({ detail: 'Unknown error' }));
        throw new Error(error.detail || `HTTP ${response.status}: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      lastError = error;
      console.warn(`API request attempt ${attempt + 1}/${maxRetries} failed:`, error.message);

      // Don't retry on abort, auth errors, or if it's the last attempt
      if (error.name === 'AbortError' || error.message.includes('Session expired') || attempt === maxRetries - 1) {
        break;
      }

      // Exponential backoff: 1s, 2s, 4s
      await new Promise(resolve => setTimeout(resolve, Math.pow(2, attempt) * 1000));
    }
  }

  throw lastError || new Error('API request failed');
}

/**
 * Legacy export for backward compatibility.
 */
export async function getAuthToken(user) {
  if (!user) {
    throw new Error('No authenticated user');
  }
  return await user.getIdToken();
}
