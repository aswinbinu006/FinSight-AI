/**
 * Behavioral Assessment Service
 * ==============================
 * Handles scoring of behavioral answers via Gemini API.
 * Uses the centralized apiClient for auto-auth token injection.
 */

import { API_BASE_URL } from '../utils/config';

/**
 * Submit all 10 behavioral answers to backend for Gemini scoring
 * @param {Object} answers - Object containing all 10 behavioral answers
 * @param {string} authToken - Firebase ID token for authentication
 * @returns {Promise<Object>} - Numerical scores for all 10 dimensions
 */
export async function scoreBehavioralAnswers(answers, authToken) {
  // Retry logic with exponential backoff
  const maxRetries = 3;
  let lastError = null;

  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 15000); // 15s timeout

      const response = await fetch(`${API_BASE_URL}/predict/behavioral-scores`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`
        },
        body: JSON.stringify({ answers }),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        const error = await response.json().catch(() => ({ detail: 'Unknown error' }));
        throw new Error(error.detail || `Server error: ${response.status}`);
      }

      const scores = await response.json();
      return scores;
    } catch (error) {
      lastError = error;
      console.warn(`Backend attempt ${attempt + 1}/${maxRetries} failed:`, error.message);
      
      // Don't retry on abort (timeout) or if it's the last attempt
      if (error.name === 'AbortError' || attempt === maxRetries - 1) {
        break;
      }
      
      // Wait before retrying (exponential backoff)
      await new Promise(resolve => setTimeout(resolve, Math.pow(2, attempt) * 1000));
    }
  }

  console.warn('All backend attempts failed, using local scoring fallback');
  
  // Fallback: generate scores locally when backend is unreachable
  return generateFallbackScores(answers);
}

/**
 * Generate fallback behavioral scores when the backend API is unavailable.
 * Uses deterministic heuristics based on answer text characteristics.
 * NO randomness — ensures consistent scores for the same answers.
 */
function generateFallbackScores(answers) {
  const scoreAnswer = (text) => {
    if (!text || text.length < 5) return 4;
    if (text.length > 120) return 8;
    if (text.length > 80) return 7;
    if (text.length > 40) return 6;
    return 5;
  };
  
  return {
    payday_behavior_score: scoreAnswer(answers.payday),
    weekend_spending_score: scoreAnswer(answers.weekend),
    subscription_awareness_score: scoreAnswer(answers.subs),
    impulse_control_score: scoreAnswer(answers.impulse),
    goal_history_score: scoreAnswer(answers.goal),
    stress_spending_score: scoreAnswer(answers.stress),
    social_comparison_score: scoreAnswer(answers.social),
    emergency_preparedness_score: scoreAnswer(answers.emergency),
    future_planning_score: scoreAnswer(answers.future),
    financial_literacy_score: scoreAnswer(answers.learning),
  };
}
/**
 * Get behavioral answers from the UserDataContext object.
 * Pass the `userData` from the context — no localStorage needed.
 * @param {Object} userData - The centralized user data object from UserDataContext.
 * @returns {Object} - All 10 behavioral answers.
 */
export function getBehavioralAnswersFromContext(userData) {
  const a = userData?.behavioral?.answers || {};
  return {
    payday: a.payday || '',
    weekend: a.weekend || '',
    subs: a.subs || '',
    impulse: a.impulse || '',
    goal: a.goal || '',
    stress: a.stress || '',
    social: a.social || '',
    emergency: a.emergency || '',
    future: a.future || '',
    learning: a.learning || '',
  };
}

/**
 * Check if all behavioral questions are answered (context-based).
 * @param {Object} userData - The centralized user data object from UserDataContext.
 * @returns {boolean}
 */
export function areBehavioralQuestionsComplete(userData) {
  const answers = getBehavioralAnswersFromContext(userData);
  return Object.values(answers).every(answer => answer !== '');
}

/**
 * clearBehavioralAnswers is now a no-op.
 * Clearing is handled via updateUserData({ behavioral: { answers: {}, completed: false } }).
 * Kept for backward compatibility.
 */
export function clearBehavioralAnswers() {
  // No-op: clearing is handled through UserDataContext
}
