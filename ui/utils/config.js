/**
 * Shared Configuration — Single Source of Truth
 * ==============================================
 * All modules import API_BASE_URL and other config from here.
 * Eliminates duplicate declarations across apiClient.js, behavioralService.js, etc.
 */

export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

/**
 * Returns true if the app is running in production (built & deployed).
 */
export const IS_PRODUCTION = import.meta.env.PROD;

/**
 * Returns true if the app is running in development (vite dev server).
 */
export const IS_DEV = import.meta.env.DEV;
