# FinSight AI - Quick Start Guide

## 🚀 Start the Application

### 1. Start Backend (Terminal 1)
```bash
cd src
python main.py
```
Backend will run on: `http://localhost:8000`

### 2. Start Frontend (Terminal 2)
```bash
npm run dev
```
Frontend will run on: `http://localhost:5173`

## 🧪 Test the Behavioral Flow

### Option 1: New User Journey
1. Open browser: `http://localhost:5173`
2. Click "Create Account" or go to `/signup`
3. Fill in signup form:
   - Full Name: Test User
   - Age: 25
   - Email: test@example.com
   - Password: test123
4. After signup → Automatically redirected to `/onboarding/step1`
5. Complete all 4 onboarding steps:
   - Step 1: Answer 3 questions about spending habits
   - Step 2: Answer 3 questions about impulse control
   - Step 3: Answer 4 questions about planning
   - Step 4: Enter income and EMI, click "Initialize Terminal"
6. Watch the loading animation while Gemini AI processes your answers
7. Redirected to `/dashboard` with behavioral profile complete

### Option 2: Existing User Journey
1. Go to `/login`
2. Login with existing credentials
3. If behavioral profile is complete → Dashboard
4. If not complete → Redirected to onboarding

## 🔍 Verify Integration

### Check localStorage (Browser DevTools)
After completing onboarding, verify these keys exist:
```javascript
localStorage.getItem('finsight_behavioral_completed') // "true"
localStorage.getItem('finsight_behavioral_scores')    // JSON object with 10 scores
localStorage.getItem('finsight_income')               // Your income value
localStorage.getItem('finsight_emi')                  // Your EMI value
```

### Check Backend Logs
You should see:
```
INFO:finsight.api:FinSight AI Engine is 100% Operational.
INFO:     Application startup complete.
```

### Check Network Tab (Browser DevTools)
During Step 4 completion, you should see:
```
POST /predict/behavioral-scores
Status: 200 OK
Response: {
  "payday_behavior_score": 7.5,
  "weekend_spend_score": 6.0,
  ...
}
```

## 🎯 What Happens Behind the Scenes

1. **User answers 10 questions** → Stored in localStorage
2. **Click "Initialize Terminal"** → Triggers API call
3. **Backend receives answers** → Sends to Gemini AI
4. **Gemini AI analyzes** → Converts text to numerical scores (1-10)
5. **Scores returned** → Stored in localStorage
6. **User redirected** → Dashboard with complete profile

## 🔑 Environment Variables

Make sure `.env` file exists with:
```env
GEMINI_API_KEY=YOUR_GEMINI_API_KEY_HERE
PORT=8000
JWT_SECRET=1b6f3a0ea4eb03456405bc37c1854be607c158f106b2aa73bc6c8d9dd1efd579
```

## 📊 The 10 Behavioral Questions

1. **Payday Behavior** - What do you do when salary arrives?
2. **Weekend Spending** - How do you spend on weekends vs weekdays?
3. **Subscription Awareness** - Do you track all subscriptions?
4. **Impulse Control** - How often do you buy things impulsively?
5. **Goal History** - Have you completed a savings goal before?
6. **Stress Response** - How do you handle financial stress?
7. **Social Comparison** - Do you feel pressure to spend?
8. **Emergency Preparedness** - Do you have emergency savings?
9. **Future Planning** - Do you have a 6-month budget?
10. **Learning Orientation** - Do you read about finance?

## 🎨 UI Theme

The onboarding pages use the existing FinSight theme:
- Black background (`#0A0A0A`)
- Primary green (`#14B8A6`)
- Bold italic uppercase typography
- Rounded cards with subtle borders
- Futuristic/tech aesthetic

## ⚠️ Troubleshooting

### Backend not starting?
```bash
# Install dependencies
pip install -r requirements.txt

# Check Python version (3.8+)
python --version
```

### Frontend not starting?
```bash
# Install dependencies
npm install

# Clear cache
rm -rf node_modules package-lock.json
npm install
```

### Gemini API not working?
- Check `.env` file has valid `GEMINI_API_KEY`
- Verify API key is active in Google AI Studio
- Check backend logs for error messages

### Scores not saving?
- Check browser console for errors
- Verify localStorage is enabled
- Check Network tab for failed API calls

## 📝 Next Steps

After testing the basic flow:
1. Test with different answer combinations
2. Verify scores are reasonable (1-10 range)
3. Test logout and login again
4. Check that returning users skip onboarding
5. Test error handling (invalid API key, network errors)

## 🎉 Success Criteria

✅ New users complete onboarding after signup
✅ Existing users skip onboarding if already completed
✅ All 10 questions are answered
✅ Gemini API successfully scores answers
✅ Scores are stored in localStorage
✅ User is redirected to dashboard
✅ No console errors
✅ No backend errors

---

**Status:** Ready for testing! 🚀
