# Firebase Integration Guide

## Overview
FinSight AI now uses Firebase for authentication and data storage, replacing the previous FastAPI JWT authentication and localStorage approach.

## Firebase Project Details
- **Project ID**: `finsight-ai-app`
- **Project Name**: FinSight AI
- **Web App ID**: `1:129937315361:web:73d387351d4d335bdb3560`

## Services Enabled
1. **Firebase Authentication** - Email/Password authentication
2. **Cloud Firestore** - NoSQL database for user data
3. **Firebase Hosting** - (Optional) For deploying the frontend

## Setup Instructions

### 1. Install Firebase SDK
```bash
npm install firebase
```

### 2. Firebase Configuration
The Firebase configuration is already set up in `ui/firebase/config.js`:
- API Key: `AIzaSyDCj8YE3IF3ZY9xkJtbaMXqRNDKTA3ufKw`
- Auth Domain: `finsight-ai-app.firebaseapp.com`
- Project ID: `finsight-ai-app`

### 3. Enable Authentication
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select project: **finsight-ai-app**
3. Navigate to **Authentication** → **Sign-in method**
4. Enable **Email/Password** provider
5. Click **Save**

### 4. Deploy Firestore Rules
```bash
firebase deploy --only firestore:rules
```

## File Structure

```
ui/
├── firebase/
│   ├── config.js ............... Firebase initialization
│   ├── auth.js ................. Authentication functions
│   └── firestore.js ............ Database operations
├── pages/
│   ├── Login.jsx ............... Updated to use Firebase Auth
│   ├── Signup.jsx .............. Updated to use Firebase Auth
│   └── OnboardingStep4.jsx ..... Saves to Firestore
└── services/
    └── behavioralService.js .... Still calls FastAPI for Gemini scoring

Root:
├── firebase.json ............... Firebase project configuration
├── firestore.rules ............. Security rules
└── firestore.indexes.json ...... Database indexes
```

## Authentication Flow

### Signup
1. User fills signup form
2. `signupWithEmail()` creates Firebase user
3. `initializeUserDocument()` creates Firestore document
4. User redirected to onboarding

### Login
1. User enters credentials
2. `loginWithEmail()` authenticates with Firebase
3. `isBehavioralCompleted()` checks Firestore
4. Redirect to dashboard or onboarding

### Logout
1. `logout()` signs out from Firebase
2. User redirected to login page

## Data Structure

### Firestore Collection: `users`

```javascript
users/{userId} {
  // Basic Info
  email: "user@example.com",
  displayName: "John Doe",
  age: 25,
  createdAt: Timestamp,
  updatedAt: Timestamp,
  
  // Behavioral Assessment
  behavioral: {
    answers: {
      payday: "save",
      weekend: "more",
      subs: "yes",
      impulse: "sometimes",
      goal: "often",
      stress: "cut",
      social: "no",
      emergency: "yes",
      future: "yes",
      learning: "regularly"
    },
    scores: {
      payday_behavior_score: 7.5,
      weekend_spend_score: 6.0,
      subscription_awareness_score: 8.0,
      impulse_control_score: 5.5,
      goal_history_score: 7.0,
      stress_response_score: 6.5,
      social_comparison_score: 4.0,
      emergency_preparedness_score: 8.5,
      future_planning_score: 7.0,
      learning_orientation_score: 6.0
    },
    completed: true,
    completedAt: Timestamp
  },
  
  // Financial Data
  financial: {
    income: 50000,
    emi: 10000,
    updatedAt: Timestamp
  },
  
  // Health Score (optional)
  health: {
    score: 75.5,
    explanation: "...",
    updatedAt: Timestamp
  },
  
  // Waste Analysis (optional)
  waste: {
    subscriptions: [...],
    analysis: {...},
    updatedAt: Timestamp
  },
  
  // Goal Data (optional)
  goal: {
    description: "Emergency Fund",
    target: 100000,
    saved: 25000,
    monthlySavings: 5000,
    timeline: 15,
    score: 8.5,
    updatedAt: Timestamp
  }
}
```

## Security Rules

### Current Rules (firestore.rules)
- Users can only read/write their own data
- Authentication required for all operations
- Document deletion is disabled
- All other access is denied by default

### Rule Breakdown
```javascript
// Users can read their own document
allow read: if isOwner(userId);

// Users can create their own document on signup
allow create: if isAuthenticated() && request.auth.uid == userId;

// Users can update their own document
allow update: if isOwner(userId);

// Prevent deletion
allow delete: if false;
```

## API Integration

### Hybrid Approach
- **Firebase**: Authentication + Data Storage
- **FastAPI**: ML predictions + Gemini AI scoring

### Why Hybrid?
1. Firebase handles user management and data persistence
2. FastAPI handles complex ML computations
3. Gemini API calls remain on backend for security
4. Best of both worlds: Firebase scalability + Custom ML models

### Data Flow
```
User Action
    ↓
Firebase Auth (Login/Signup)
    ↓
Firestore (Check behavioral completion)
    ↓
Onboarding (If needed)
    ↓
FastAPI (Gemini scoring)
    ↓
Firestore (Save scores)
    ↓
Dashboard
```

## Functions Reference

### Authentication (ui/firebase/auth.js)
```javascript
signupWithEmail(email, password, fullName)
loginWithEmail(email, password)
logout()
getCurrentUser()
onAuthChange(callback)
```

### Firestore (ui/firebase/firestore.js)
```javascript
saveUserProfile(userId, profileData)
getUserProfile(userId)
saveBehavioralData(userId, behavioralData)
saveFinancialData(userId, financialData)
isBehavioralCompleted(userId)
saveHealthScore(userId, healthData)
saveWasteAnalysis(userId, wasteData)
saveGoalData(userId, goalData)
initializeUserDocument(userId, userData)
```

## Testing

### 1. Test Authentication
```javascript
// In browser console
import { signupWithEmail, loginWithEmail } from './firebase/auth';

// Signup
await signupWithEmail('test@example.com', 'test123', 'Test User');

// Login
await loginWithEmail('test@example.com', 'test123');
```

### 2. Test Firestore
```javascript
import { getCurrentUser } from './firebase/auth';
import { getUserProfile } from './firebase/firestore';

const user = getCurrentUser();
const profile = await getUserProfile(user.uid);
console.log(profile);
```

### 3. Test Complete Flow
1. Signup → Should create user in Firebase Auth
2. Check Firestore → Should have user document
3. Complete onboarding → Should save behavioral data
4. Logout and login → Should skip onboarding
5. Check Firestore → Should have complete profile

## Deployment

### Deploy Firestore Rules
```bash
firebase deploy --only firestore:rules
```

### Deploy to Firebase Hosting (Optional)
```bash
# Build the app
npm run build

# Deploy
firebase deploy --only hosting
```

## Migration from Old System

### What Changed
- ✅ Authentication: FastAPI JWT → Firebase Auth
- ✅ Data Storage: localStorage → Firestore
- ✅ User Management: SQLite/PostgreSQL → Firebase Auth
- ⚠️ ML Predictions: Still using FastAPI (no change)

### Backward Compatibility
- localStorage is still used as a fallback
- Old API endpoints still work
- Gradual migration possible

### Migration Steps
1. Install Firebase SDK: `npm install firebase`
2. Enable Firebase Authentication in console
3. Deploy Firestore rules
4. Test signup/login flow
5. Verify data is saved to Firestore
6. (Optional) Migrate existing users

## Troubleshooting

### Firebase not initialized
- Check `ui/firebase/config.js` is imported
- Verify Firebase SDK is installed
- Check browser console for errors

### Authentication errors
- Enable Email/Password in Firebase Console
- Check API key is correct
- Verify network connectivity

### Firestore permission denied
- Deploy security rules: `firebase deploy --only firestore:rules`
- Check user is authenticated
- Verify userId matches auth.uid

### Data not saving
- Check browser console for errors
- Verify Firestore rules are deployed
- Check user is authenticated
- Verify document structure matches schema

## Environment Variables

### Frontend (.env)
```env
# No Firebase env vars needed - config is in code
# API key is public and restricted by domain
```

### Backend (.env)
```env
GEMINI_API_KEY=AIzaSyD3Oi6hDjKIe0kC0rukgMk2eXYkFrUFUR8
PORT=8000
JWT_SECRET=1b6f3a0ea4eb03456405bc37c1854be607c158f106b2aa73bc6c8d9dd1efd579
```

## Next Steps

1. ✅ Install Firebase SDK: `npm install firebase`
2. ✅ Enable Email/Password authentication in Firebase Console
3. ✅ Deploy Firestore security rules
4. ✅ Test signup and login
5. ✅ Complete onboarding flow
6. ✅ Verify data in Firestore
7. ⏳ (Optional) Add social auth providers
8. ⏳ (Optional) Add email verification
9. ⏳ (Optional) Add password reset
10. ⏳ (Optional) Deploy to Firebase Hosting

## Resources

- [Firebase Console](https://console.firebase.google.com/)
- [Firebase Documentation](https://firebase.google.com/docs)
- [Firestore Documentation](https://firebase.google.com/docs/firestore)
- [Firebase Auth Documentation](https://firebase.google.com/docs/auth)

---

**Status**: Firebase integration complete! Ready for testing.
