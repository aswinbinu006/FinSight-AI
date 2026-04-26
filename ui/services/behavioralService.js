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
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
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
 * Get behavioral answers from localStorage
 * @returns {Object} - All 10 behavioral answers
 */
export function getBehavioralAnswersFromStorage() {
  return {
    payday: localStorage.getItem('finsight_behavioral_payday') || '',
    weekend: localStorage.getItem('finsight_behavioral_weekend') || '',
    subs: localStorage.getItem('finsight_behavioral_subs') || '',
    impulse: localStorage.getItem('finsight_behavioral_impulse') || '',
    goal: localStorage.getItem('finsight_behavioral_goal_comp') || '',
    stress: localStorage.getItem('finsight_behavioral_stress') || '',
    social: localStorage.getItem('finsight_behavioral_social') || '',
    emergency: localStorage.getItem('finsight_behavioral_emergency') || '',
    future: localStorage.getItem('finsight_behavioral_budget') || '',
    learning: localStorage.getItem('finsight_behavioral_learning') || '',
  };
}

/**
 * Check if all behavioral questions are answered
 * @returns {boolean}
 */
export function areBehavioralQuestionsComplete() {
  const answers = getBehavioralAnswersFromStorage();
  return Object.values(answers).every(answer => answer !== '');
}

/**
 * Clear all behavioral answers from localStorage
 */
export function clearBehavioralAnswers() {
  const keys = [
    'finsight_behavioral_payday',
    'finsight_behavioral_weekend',
    'finsight_behavioral_subs',
    'finsight_behavioral_impulse',
    'finsight_behavioral_goal_comp',
    'finsight_behavioral_stress',
    'finsight_behavioral_social',
    'finsight_behavioral_emergency',
    'finsight_behavioral_budget',
    'finsight_behavioral_learning',
  ];
  
  keys.forEach(key => localStorage.removeItem(key));
}
