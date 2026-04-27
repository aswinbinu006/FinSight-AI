import { 
  doc, 
  setDoc, 
  getDoc, 
  updateDoc,
  collection,
  query,
  where,
  getDocs,
  serverTimestamp
} from 'firebase/firestore';
import { db } from './config';

/**
 * Save user profile data to Firestore
 */
export async function saveUserProfile(userId, profileData) {
  try {
    const userRef = doc(db, 'users', userId);
    await setDoc(userRef, {
      ...profileData,
      updatedAt: serverTimestamp()
    }, { merge: true });
  } catch (error) {
    console.error('Error saving user profile:', error);
    throw error;
  }
}

/**
 * Get user profile data from Firestore
 */
export async function getUserProfile(userId) {
  try {
    const userRef = doc(db, 'users', userId);
    const userSnap = await getDoc(userRef);
    
    if (userSnap.exists()) {
      return userSnap.data();
    }
    return null;
  } catch (error) {
    console.error('Error getting user profile:', error);
    throw error;
  }
}

/**
 * Save behavioral assessment data
 */
export async function saveBehavioralData(userId, behavioralData) {
  try {
    const profile = await getUserProfile(userId);
    const now = new Date();
    const currentMonthStr = `${now.getFullYear()}-${now.getMonth()}`;
    let takesThisMonth = profile?.behavioral?.takesThisMonth || 0;
    let lastTakeMonthStr = profile?.behavioral?.lastTakeMonthStr || currentMonthStr;
    
    if (lastTakeMonthStr !== currentMonthStr) {
      takesThisMonth = 1;
    } else {
      takesThisMonth += 1;
    }

    const userRef = doc(db, 'users', userId);
    await updateDoc(userRef, {
      behavioral: {
        answers: behavioralData.answers,
        scores: behavioralData.scores,
        completed: true,
        completedAt: serverTimestamp(),
        lastTakeMonthStr: currentMonthStr,
        takesThisMonth: takesThisMonth
      },
      updatedAt: serverTimestamp()
    });
  } catch (error) {
    console.error('Error saving behavioral data:', error);
    throw error;
  }
}

/**
 * Save financial data (income, EMI)
 */
export async function saveFinancialData(userId, financialData) {
  try {
    const userRef = doc(db, 'users', userId);
    await updateDoc(userRef, {
      financial: {
        income: financialData.income,
        emi: financialData.emi || 0,
        updatedAt: serverTimestamp()
      },
      updatedAt: serverTimestamp()
    });
  } catch (error) {
    console.error('Error saving financial data:', error);
    throw error;
  }
}

/**
 * Check if user has completed behavioral assessment
 */
export async function isBehavioralCompleted(userId) {
  try {
    const profile = await getUserProfile(userId);
    return profile?.behavioral?.completed || false;
  } catch (error) {
    console.error('Error checking behavioral completion:', error);
    return false;
  }
}

/**
 * Check if the user is allowed to retake the behavioral assessment (limit 3 per month)
 */
export async function canRetakeBehavioral(userId) {
  try {
    const profile = await getUserProfile(userId);
    const behavioral = profile?.behavioral;
    if (!behavioral || !behavioral.completed) return true; // never taken
    
    const now = new Date();
    const currentMonthStr = `${now.getFullYear()}-${now.getMonth()}`;
    const lastTakeMonthStr = behavioral.lastTakeMonthStr;
    const takesThisMonth = behavioral.takesThisMonth || 0;
    
    if (lastTakeMonthStr !== currentMonthStr) {
      return true; // new month
    }
    
    return takesThisMonth < 3;
  } catch (error) {
    console.error('Error checking retake limit:', error);
    return false;
  }
}


/**
 * Save health score data
 */
export async function saveHealthScore(userId, healthData) {
  try {
    const userRef = doc(db, 'users', userId);
    await updateDoc(userRef, {
      health: {
        score: healthData.score,
        explanation: healthData.explanation,
        updatedAt: serverTimestamp()
      },
      updatedAt: serverTimestamp()
    });
  } catch (error) {
    console.error('Error saving health score:', error);
    throw error;
  }
}

/**
 * Save waste analysis data
 */
export async function saveWasteAnalysis(userId, wasteData) {
  try {
    const userRef = doc(db, 'users', userId);
    await updateDoc(userRef, {
      waste: {
        subscriptions: wasteData.subscriptions,
        analysis: wasteData.analysis,
        updatedAt: serverTimestamp()
      },
      updatedAt: serverTimestamp()
    });
  } catch (error) {
    console.error('Error saving waste analysis:', error);
    throw error;
  }
}

/**
 * Save goal data
 */
export async function saveGoalData(userId, goalData) {
  try {
    const userRef = doc(db, 'users', userId);
    await updateDoc(userRef, {
      goal: {
        description: goalData.description,
        target: goalData.target,
        saved: goalData.saved,
        monthlySavings: goalData.monthlySavings,
        timeline: goalData.timeline,
        score: goalData.score,
        updatedAt: serverTimestamp()
      },
      updatedAt: serverTimestamp()
    });
  } catch (error) {
    console.error('Error saving goal data:', error);
    throw error;
  }
}

/**
 * Initialize user document on first signup
 */
export async function initializeUserDocument(userId, userData) {
  try {
    const userRef = doc(db, 'users', userId);
    await setDoc(userRef, {
      email: userData.email,
      displayName: userData.displayName,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
      behavioral: {
        completed: false
      }
    });
  } catch (error) {
    console.error('Error initializing user document:', error);
    throw error;
  }
}
