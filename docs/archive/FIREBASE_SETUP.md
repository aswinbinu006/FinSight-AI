# Firebase Setup - Quick Start

## 🚀 Quick Setup (5 minutes)

### Step 1: Install Firebase SDK
```bash
npm install firebase
```

### Step 2: Enable Authentication
1. Go to [Firebase Console](https://console.firebase.google.com/project/finsight-ai-app/authentication/providers)
2. Click on **Email/Password**
3. Toggle **Enable**
4. Click **Save**

### Step 3: Deploy Firestore Rules
```bash
firebase deploy --only firestore:rules
```

### Step 4: Test the Application
```bash
# Terminal 1 - Backend (still needed for Gemini AI)
cd src
python main.py

# Terminal 2 - Frontend
npm run dev
```

### Step 5: Create Test Account
1. Open `http://localhost:5173/signup`
2. Create account with:
   - Email: test@example.com
   - Password: test123
   - Full Name: Test User
3. Complete onboarding
4. Check Firestore Console to see your data!

## ✅ What's Integrated

### Firebase Services
- ✅ **Authentication** - Email/Password sign-in
- ✅ **Firestore** - User data storage
- ✅ **Security Rules** - Protect user data

### Application Features
- ✅ **Signup** - Creates Firebase user + Firestore document
- ✅ **Login** - Authenticates with Firebase
- ✅ **Onboarding** - Saves behavioral data to Firestore
- ✅ **Data Sync** - Real-time sync across devices
- ✅ **Security** - Users can only access their own data

## 📊 Data Flow

```
┌─────────────┐
│   Signup    │
└──────┬──────┘
       │
       ▼
┌─────────────────────┐
│ Firebase Auth       │
│ (Create User)       │
└──────┬──────────────┘
       │
       ▼
┌─────────────────────┐
│ Firestore           │
│ (Create Document)   │
└──────┬──────────────┘
       │
       ▼
┌─────────────────────┐
│ Onboarding          │
│ (10 Questions)      │
└──────┬──────────────┘
       │
       ▼
┌─────────────────────┐
│ FastAPI Backend     │
│ (Gemini Scoring)    │
└──────┬──────────────┘
       │
       ▼
┌─────────────────────┐
│ Firestore           │
│ (Save Scores)       │
└──────┬──────────────┘
       │
       ▼
┌─────────────────────┐
│   Dashboard         │
└─────────────────────┘
```

## 🔍 Verify Integration

### Check Firebase Console
1. **Authentication**: [View Users](https://console.firebase.google.com/project/finsight-ai-app/authentication/users)
2. **Firestore**: [View Data](https://console.firebase.google.com/project/finsight-ai-app/firestore/data)

### Check Browser Console
```javascript
// Get current user
import { getCurrentUser } from './firebase/auth';
const user = getCurrentUser();
console.log('User:', user);

// Get user profile from Firestore
import { getUserProfile } from './firebase/firestore';
const profile = await getUserProfile(user.uid);
console.log('Profile:', profile);
```

## 🎯 Testing Checklist

- [ ] Install Firebase SDK (`npm install firebase`)
- [ ] Enable Email/Password auth in Firebase Console
- [ ] Deploy Firestore rules
- [ ] Start backend server
- [ ] Start frontend server
- [ ] Create test account
- [ ] Complete onboarding
- [ ] Check Firestore for user data
- [ ] Logout and login again
- [ ] Verify data persists

## 🔐 Security

### Firestore Rules
```javascript
// Users can only access their own data
match /users/{userId} {
  allow read, write: if request.auth.uid == userId;
}
```

### API Key Security
- Firebase API key is public (safe for frontend)
- Restricted by domain in Firebase Console
- Firestore rules protect data access

## 🐛 Common Issues

### Issue: "Firebase not initialized"
**Solution**: Make sure `npm install firebase` completed successfully

### Issue: "Permission denied"
**Solution**: Deploy Firestore rules with `firebase deploy --only firestore:rules`

### Issue: "User not authenticated"
**Solution**: Check if user is logged in with `getCurrentUser()`

### Issue: "Network error"
**Solution**: Check internet connection and Firebase Console status

## 📝 Files Created

```
ui/firebase/
├── config.js ........... Firebase initialization
├── auth.js ............. Authentication functions
└── firestore.js ........ Database operations

Root:
├── firebase.json ....... Firebase project config
├── firestore.rules ..... Security rules
└── firestore.indexes.json .. Database indexes
```

## 📝 Files Modified

```
ui/pages/
├── Login.jsx ........... Uses Firebase Auth
├── Signup.jsx .......... Uses Firebase Auth
└── OnboardingStep4.jsx . Saves to Firestore

package.json ............ Added firebase dependency
```

## 🎉 Success Criteria

✅ Firebase SDK installed
✅ Authentication enabled in console
✅ Firestore rules deployed
✅ User can signup
✅ User can login
✅ Onboarding saves to Firestore
✅ Data visible in Firebase Console
✅ Security rules working

## 🚀 Next Steps

### Immediate
1. Run `npm install firebase`
2. Enable Email/Password auth
3. Deploy Firestore rules
4. Test the flow

### Optional Enhancements
- Add email verification
- Add password reset
- Add social auth (Google, GitHub)
- Add profile picture upload
- Add real-time data sync
- Deploy to Firebase Hosting

## 📚 Resources

- [Firebase Console](https://console.firebase.google.com/project/finsight-ai-app)
- [Firebase Docs](https://firebase.google.com/docs)
- [Firestore Docs](https://firebase.google.com/docs/firestore)
- [Auth Docs](https://firebase.google.com/docs/auth)

---

**Ready to go!** Just run `npm install firebase` and enable authentication in the console. 🎉
