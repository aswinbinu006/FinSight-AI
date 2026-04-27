# Behavioral Questions Flow - Testing Guide

## Overview
The behavioral assessment flow is now fully integrated. Users complete a one-time 10-question assessment after signup/login, and their answers are scored by Gemini AI.

## Complete Flow

### 1. New User Signup
- User signs up at `/signup`
- After successful signup → Redirected to `/onboarding/step1`

### 2. Existing User Login
- User logs in at `/login`
- System checks `localStorage.getItem('finsight_behavioral_completed')`
- If `true` → Dashboard
- If not completed → `/onboarding/step1`

### 3. Onboarding Steps (4 Pages)

#### Step 1 - `/onboarding/step1` (3 Questions)
1. When salary arrives, what do you do FIRST?
2. Weekend vs. Weekday spending?
3. Do you track all subscriptions?

Stores in localStorage:
- `finsight_behavioral_payday`
- `finsight_behavioral_weekend`
- `finsight_behavioral_subs`

#### Step 2 - `/onboarding/step2` (3 Questions)
4. How often do you buy things impulsively?
5. Have you completed a savings goal before?
6. How do you handle financial stress?

Stores in localStorage:
- `finsight_behavioral_impulse`
- `finsight_behavioral_goal_comp`
- `finsight_behavioral_stress`

#### Step 3 - `/onboarding/step3` (4 Questions)
7. Do you feel social pressure to spend?
8. Emergency Fund Status (3+ months)?
9. Have a detailed 6-month budget?
10. How often do you read financial content?

Stores in localStorage:
- `finsight_behavioral_social`
- `finsight_behavioral_emergency`
- `finsight_behavioral_budget`
- `finsight_behavioral_learning`

#### Step 4 - `/onboarding/step4` (Income + Processing)
- User enters monthly income (required)
- User enters total EMI burden (optional)
- Click "Initialize Terminal" button

**Backend Processing:**
1. Collects all 10 answers from localStorage
2. Sends to `/predict/behavioral-scores` endpoint
3. Gemini AI converts natural language → numerical scores (0-10)
4. Stores scores in `localStorage.getItem('finsight_behavioral_scores')`
5. Sets `finsight_behavioral_completed = 'true'`
6. Redirects to `/dashboard`

## API Integration

### Frontend Service
**File:** `ui/services/behavioralService.js`

```javascript
scoreBehavioralAnswers(answers) → POST /predict/behavioral-scores
getBehavioralAnswersFromStorage() → Collects all 10 answers
areBehavioralQuestionsComplete() → Validation check
```

### Backend Endpoint
**File:** `src/main.py`

```python
POST /predict/behavioral-scores
Input: {"answers": {payday, weekend, subs, impulse, goal, stress, social, emergency, future, learning}}
Output: {
  "payday_behavior_score": 7.5,
  "weekend_spend_score": 6.0,
  "subscription_awareness_score": 8.0,
  "impulse_control_score": 5.5,
  "goal_history_score": 7.0,
  "stress_response_score": 6.5,
  "social_comparison_score": 4.0,
  "emergency_preparedness_score": 8.5,
  "future_planning_score": 7.0,
  "learning_orientation_score": 6.0
}
```

### Gemini AI Scoring
**File:** `src/finsight_models_production/behavioral_scoring.py`

- Uses `gemini-2.0-flash` model
- Converts natural language answers to 1.0-10.0 scores
- API Key from `.env`: `GEMINI_API_KEY`

## Testing Checklist

### Manual Testing
1. ✅ Start backend: `cd src && python main.py`
2. ✅ Start frontend: `npm run dev`
3. ✅ Test new user signup → Should redirect to onboarding
4. ✅ Complete all 4 onboarding steps
5. ✅ Verify Gemini API call in Step 4
6. ✅ Check localStorage for scores
7. ✅ Verify redirect to dashboard
8. ✅ Logout and login again → Should go directly to dashboard

### Backend Testing
```bash
# Test the endpoint directly
curl -X POST http://localhost:8000/predict/behavioral-scores \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "answers": {
      "payday": "save it first",
      "weekend": "spend more",
      "subs": "yes I track them",
      "impulse": "sometimes",
      "goal": "yes many times",
      "stress": "cut back expenses",
      "social": "no I dont care",
      "emergency": "yes fully funded",
      "future": "yes detailed plan",
      "learning": "yes regularly"
    }
  }'
```

## Environment Variables
**File:** `.env`
```
GEMINI_API_KEY=YOUR_GEMINI_API_KEY_HERE
PORT=8000
JWT_SECRET=1b6f3a0ea4eb03456405bc37c1854be607c158f106b2aa73bc6c8d9dd1efd579
```

## Files Modified

### Frontend
- ✅ `ui/pages/Login.jsx` - Added behavioral completion check
- ✅ `ui/pages/Signup.jsx` - Redirect to onboarding after signup
- ✅ `ui/pages/OnboardingStep4.jsx` - Added Gemini API integration
- ✅ `ui/services/behavioralService.js` - Created service for API calls

### Backend
- ✅ `src/main.py` - Endpoint already exists
- ✅ `src/finsight_models_production/behavioral_scoring.py` - Gemini integration already exists

### Existing (No Changes Needed)
- `ui/pages/OnboardingStep1.jsx` - Already has 3 questions
- `ui/pages/OnboardingStep2.jsx` - Already has 3 questions
- `ui/pages/OnboardingStep3.jsx` - Already has 4 questions
- `ui/App.jsx` - Routes already configured

## Next Steps (Optional Enhancements)

1. **Firebase Integration** (if needed)
   - Store behavioral scores in Firestore
   - Sync across devices
   - Add user profile collection

2. **Protected Routes**
   - Add route guard to check authentication
   - Redirect unauthenticated users to login

3. **Error Handling**
   - Add retry logic for API failures
   - Offline mode support
   - Better error messages

4. **Analytics**
   - Track completion rates
   - Monitor drop-off points
   - A/B test question wording

## Status: ✅ READY FOR TESTING

All components are integrated and ready for end-to-end testing. The flow is complete from signup → onboarding → Gemini scoring → dashboard.
