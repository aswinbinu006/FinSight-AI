/**
 * AI Co-Pilot Service
 * =====================
 * Handles natural language chat with Gemini, providing full model context.
 */

import { API_BASE_URL } from '../utils/config';

/**
 * Chat with the AI Co-Pilot
 * @param {string} message - User input text
 * @param {Object} context - Financial context (health, waste, goal data)
 * @param {string} authToken - Firebase ID token
 * @returns {Promise<string>} - Gemini's response
 */
export async function chatWithCopilot(message, context, authToken) {
  try {
    const response = await fetch(`${API_BASE_URL}/chat/copilot`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`
      },
      body: JSON.stringify({ message, context })
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ detail: 'Chat service unavailable' }));
      throw new Error(error.detail || `Server error: ${response.status}`);
    }

    const data = await response.json();
    return data.response;
  } catch (error) {
    console.error('Copilot service error:', error);
    throw error;
  }
}
