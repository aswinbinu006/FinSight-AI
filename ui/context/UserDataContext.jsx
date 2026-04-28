/**
 * UserDataContext — Centralized Cloud State Management
 * =====================================================
 * Replaces ALL localStorage usage across the entire FinSight AI application.
 * All user data (behavioral answers, health scores, goals, waste, subscriptions)
 * is persisted to Firebase Firestore and served via React Context.
 *
 * Every component that previously called localStorage.getItem/setItem
 * now calls useUserData() to read/write from this single source of truth.
 */

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { onAuthChange } from '../firebase/auth';
import { getUserProfile, saveUserProfile } from '../firebase/firestore';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase/config';

const UserDataContext = createContext(null);

// Default empty state shape — mirrors Firestore document structure
const DEFAULT_STATE = {
  // Auth
  uid: null,
  email: '',
  displayName: '',

  // Behavioral Assessment (10 questions)
  behavioral: {
    completed: false,
    answers: {
      payday: '',
      weekend: '',
      subs: '',
      impulse: '',
      goal: '',
      stress: '',
      social: '',
      emergency: '',
      future: '',
      learning: '',
    },
    scores: null, // { payday_behavior_score: 5.0, ... }
  },

  // Financial Profile
  financial: {
    income: 0,
    emi: 0,
  },

  // Health Model Output
  health: {
    score: 0,
    explanation: '',
  },

  // Waste Model / Subscriptions
  waste: {
    subscriptions: [],
    analysis: null,
  },

  // Goal Intelligence
  goal: {
    active: false,
    description: '',
    target: 0,
    monthlySavings: 0,
    timeframeId: '3m',
    score: null,
  },
};

export function UserDataProvider({ children }) {
  const [userData, setUserData] = useState(DEFAULT_STATE);
  const [loading, setLoading] = useState(true);
  const [authUser, setAuthUser] = useState(null);
  const [error, setError] = useState(null);

  // ─── Auth listener: when user logs in, hydrate state from Firestore ────
  useEffect(() => {
    const unsubAuth = onAuthChange(async (firebaseUser) => {
      if (!firebaseUser) {
        setUserData(DEFAULT_STATE);
        setAuthUser(null);
        setLoading(false);
        setError(null);
        return;
      }

      setAuthUser(firebaseUser);
      setError(null);

      try {
        const profile = await getUserProfile(firebaseUser.uid);
        if (profile) {
          setUserData(prev => mergeProfile(prev, profile, firebaseUser));
        } else {
          // First-time user — set basics and initialize document
          const initialData = {
            uid: firebaseUser.uid,
            email: firebaseUser.email || '',
            displayName: firebaseUser.displayName || '',
          };
          setUserData(prev => ({ ...prev, ...initialData }));
          
          // Initialize Firestore document for new user
          try {
            await saveUserProfile(firebaseUser.uid, {
              email: firebaseUser.email,
              displayName: firebaseUser.displayName,
              behavioral: { completed: false }
            });
          } catch (initErr) {
            console.warn('[UserDataContext] Failed to initialize user document:', initErr);
          }
        }
      } catch (err) {
        console.error('[UserDataContext] Hydration error:', err);
        setError(err.message || 'Failed to load user data');
        // Still set uid so navigation works
        setUserData(prev => ({
          ...prev,
          uid: firebaseUser.uid,
          email: firebaseUser.email || '',
          displayName: firebaseUser.displayName || '',
        }));
      } finally {
        setLoading(false);
      }
    });

    return () => unsubAuth();
  }, []);

  // ─── Real-time Firestore listener for live sync ────
  useEffect(() => {
    if (!authUser?.uid) return;

    const unsub = onSnapshot(doc(db, 'users', authUser.uid), (snap) => {
      if (snap.exists()) {
        const profile = snap.data();
        setUserData(prev => mergeProfile(prev, profile, authUser));
      }
    }, (err) => {
      console.warn('[UserDataContext] Snapshot listener error:', err);
    });

    return () => unsub();
  }, [authUser?.uid]);

  // ─── Write helper: update local state + persist to Firestore ────
  const updateUserData = useCallback(async (path, value) => {
    if (!authUser?.uid) {
      console.warn('[UserDataContext] Cannot update — no authenticated user');
      return;
    }

    // Build nested update object from dot-path (e.g. "goal.target" → { goal: { target: value } })
    const keys = path.split('.');
    const updateObj = {};
    let cursor = updateObj;
    for (let i = 0; i < keys.length - 1; i++) {
      cursor[keys[i]] = {};
      cursor = cursor[keys[i]];
    }
    cursor[keys[keys.length - 1]] = value;

    // Optimistic local update
    setUserData(prev => deepMerge(prev, updateObj));

    // Persist to Firestore
    try {
      await saveUserProfile(authUser.uid, updateObj);
    } catch (err) {
      console.error('[UserDataContext] Firestore write failed:', err);
    }
  }, [authUser?.uid]);

  // ─── Batch write helper: update multiple fields at once ────
  const updateUserDataBatch = useCallback(async (updates) => {
    if (!authUser?.uid) return;

    // Optimistic local update
    setUserData(prev => deepMerge(prev, updates));

    // Persist to Firestore
    try {
      await saveUserProfile(authUser.uid, updates);
    } catch (err) {
      console.error('[UserDataContext] Firestore batch write failed:', err);
    }
  }, [authUser?.uid]);

  const value = {
    userData,
    loading,
    authUser,
    error,
    updateUserData,
    updateUserDataBatch,
  };

  // Show error screen if critical error occurs
  if (error && !loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
        <div className="max-w-md text-center space-y-4">
          <div className="w-16 h-16 mx-auto rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center">
            <span className="text-2xl">⚠️</span>
          </div>
          <h2 className="text-xl font-bold">Connection Error</h2>
          <p className="text-sm text-white/60">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-6 py-3 bg-primary text-black rounded-xl font-bold text-sm hover:scale-105 transition-transform"
          >
            Retry Connection
          </button>
        </div>
      </div>
    );
  }

  return (
    <UserDataContext.Provider value={value}>
      {children}
    </UserDataContext.Provider>
  );
}

// ─── Hook for consuming components ────
export function useUserData() {
  const context = useContext(UserDataContext);
  if (!context) {
    throw new Error('useUserData must be used within a UserDataProvider');
  }
  return context;
}

// ─── Utility: merge Firestore profile into local state ────
function mergeProfile(prev, profile, firebaseUser) {
  return {
    ...prev,
    uid: firebaseUser.uid,
    email: firebaseUser.email || profile.email || '',
    displayName: firebaseUser.displayName || profile.displayName || '',
    behavioral: {
      completed: profile.behavioral?.completed || false,
      answers: {
        payday: profile.behavioral?.answers?.payday || '',
        weekend: profile.behavioral?.answers?.weekend || '',
        subs: profile.behavioral?.answers?.subs || '',
        impulse: profile.behavioral?.answers?.impulse || '',
        goal: profile.behavioral?.answers?.goal || '',
        stress: profile.behavioral?.answers?.stress || '',
        social: profile.behavioral?.answers?.social || '',
        emergency: profile.behavioral?.answers?.emergency || '',
        future: profile.behavioral?.answers?.future || '',
        learning: profile.behavioral?.answers?.learning || '',
      },
      scores: profile.behavioral?.scores || null,
    },
    financial: {
      income: profile.financial?.income || 0,
      emi: profile.financial?.emi || 0,
    },
    health: {
      score: profile.health?.score || 0,
      explanation: profile.health?.explanation || '',
    },
    waste: {
      subscriptions: profile.waste?.subscriptions || [],
      analysis: profile.waste?.analysis || null,
    },
    goal: {
      active: profile.goal?.active || false,
      description: profile.goal?.description || '',
      target: profile.goal?.target || 0,
      monthlySavings: profile.goal?.monthlySavings || 0,
      timeframeId: profile.goal?.timeframeId || '3m',
      score: profile.goal?.score || null,
    },
  };
}

// ─── Utility: deep merge two objects ────
function deepMerge(target, source) {
  const result = { ...target };
  for (const key of Object.keys(source)) {
    if (
      source[key] &&
      typeof source[key] === 'object' &&
      !Array.isArray(source[key]) &&
      target[key] &&
      typeof target[key] === 'object'
    ) {
      result[key] = deepMerge(target[key], source[key]);
    } else {
      result[key] = source[key];
    }
  }
  return result;
}
