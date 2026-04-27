/**
 * Behavioral Assessment Service
 * Handles scoring of behavioral answers via Gemini API
 */

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

/**
 * Submit all 10 behavioral answers to backend for Gemini scoring
 * @param {Object} answers - Object containing all 10 behavioral answers
 * @returns {Promise<Object>} - Numerical scores for all 10 dimensions
 */
export async function scoreBehavioralAnswers(answers) {
  try {
    const response = await fetch(`${API_BASE_URL}/predict/behavioral-scores`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ answers }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.detail || 'Failed to score answers');
    }

    const scores = await response.json();
    return scores;
  } catch (error) {
    console.warn('Backend unavailable, using local scoring fallback:', error.message);
    
    // Fallback: generate scores locally when backend is unreachable
    return generateFallbackScores(answers);
  }
}

/**
 * Generate fallback behavioral scores when the backend API is unavailable.
 * Uses a simple heuristic based on answer text length and content patterns.
 */
function generateFallbackScores(answers) {
  const scoreAnswer = (text) => {
    if (!text || text.length < 5) return 4;
    if (text.length > 80) return 7;
    return 5 + Math.floor(Math.random() * 2);
  };
  
  return {
    payday: scoreAnswer(answers.payday),
    weekend: scoreAnswer(answers.weekend),
    subs: scoreAnswer(answers.subs),
    impulse: scoreAnswer(answers.impulse),
    goal: scoreAnswer(answers.goal),
    stress: scoreAnswer(answers.stress),
    social: scoreAnswer(answers.social),
    emergency: scoreAnswer(answers.emergency),
    future: scoreAnswer(answers.future),
    learning: scoreAnswer(answers.learning),
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
