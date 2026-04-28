# 🚀 Quick Fix Reference - FinSight AI

## ⚡ Deploy Now

```bash
# Frontend
npm install
npm run build
firebase deploy --only hosting

# Backend (auto-deploys from GitHub)
git add .
git commit -m "fix: post-login crashes and backend issues"
git push
```

---

## 🔍 Verify Deployment

### Backend Health
```bash
curl https://finsight-ai-backend-bkbm.onrender.com/health
# Should return: {"status":"operational",...}
```

### Frontend
Visit: https://finsight-ai-app.web.app
- Should load without errors
- Login should work
- Dashboard should display after login

---

## 🐛 Common Issues & Quick Fixes

### Issue: White Screen After Login
**Fix**: 
1. Open browser console (F12)
2. Check for Firebase errors
3. Verify `.env` has all Firebase variables
4. Clear browser cache: Ctrl+Shift+Delete

### Issue: Backend 500 Errors
**Fix**:
1. Check Render logs: https://dashboard.render.com/
2. Verify environment variables in Render dashboard
3. Wait 2-3 minutes for model training on first startup

### Issue: CORS Errors
**Fix**:
1. Verify frontend URL in `src/main.py` CORS origins
2. Check browser network tab for actual error
3. Ensure request includes Authorization header

### Issue: Firebase Permission Denied
**Fix**:
1. Check Firestore security rules in Firebase console
2. Verify user is authenticated (check auth state)
3. Check Firebase quota limits

---

## 📋 Environment Variables Checklist

### Frontend (.env) - 7 variables
- [ ] `VITE_API_URL`
- [ ] `VITE_FIREBASE_API_KEY`
- [ ] `VITE_FIREBASE_AUTH_DOMAIN`
- [ ] `VITE_FIREBASE_PROJECT_ID`
- [ ] `VITE_FIREBASE_STORAGE_BUCKET`
- [ ] `VITE_FIREBASE_MESSAGING_SENDER_ID`
- [ ] `VITE_FIREBASE_APP_ID`

### Backend (Render Dashboard) - 5 variables
- [ ] `GEMINI_API_KEY`
- [ ] `JWT_SECRET`
- [ ] `PORT` (8000)
- [ ] `LOG_LEVEL` (INFO)
- [ ] `TRAIN_MODELS_ON_STARTUP` (true)

---

## 🧪 Quick Test Flow

1. **Login Test**
   - Go to `/login`
   - Enter credentials
   - Should redirect to `/dashboard`

2. **Dashboard Test**
   - Should show user data
   - No console errors
   - Network status banner hidden (if online)

3. **Behavioral Test**
   - Go to `/onboarding/step1`
   - Fill 3 questions
   - Click "Next Step"
   - Should save to Firestore

4. **API Test**
   - Complete all 4 onboarding steps
   - Should call backend API
   - Should show scores or use fallback

---

## 🔧 Files Changed (Summary)

### Critical Fixes
- `ui/context/UserDataContext.jsx` - Error handling + retry logic
- `src/main.py` - CORS fix + health endpoint
- `ui/firebase/config.js` - Config validation
- `ui/firebase/firestore.js` - Retry logic

### New Files
- `ui/components/ErrorBoundary.jsx` - Error catching
- `ui/utils/apiClient.js` - API retry logic
- `ui/hooks/useNetworkStatus.js` - Network monitoring
- `ui/components/NetworkStatusBanner.jsx` - Status UI

---

## 📞 Emergency Rollback

If deployment breaks everything:

```bash
# Frontend
firebase hosting:rollback

# Backend
# Go to Render dashboard → Manual Deploy → Select previous commit
```

---

## ✅ Success Indicators

- [ ] Backend `/health` returns 200 OK
- [ ] Frontend loads without errors
- [ ] Login redirects to dashboard
- [ ] Dashboard shows user data
- [ ] No console errors
- [ ] Network banner hidden when online
- [ ] Behavioral assessment saves data

---

## 📚 Full Documentation

- **Detailed Guide**: `DEPLOYMENT_FIX_GUIDE.md`
- **All Fixes**: `FIXES_APPLIED.md`
- **README**: `README.md`

---

**Need Help?**
1. Check browser console (F12)
2. Check Render logs
3. Check Firebase console
4. Review error messages carefully
