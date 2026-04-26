# Testing Checklist - Behavioral Questions Flow

## Pre-Testing Setup

### ✅ Environment Check
- [ ] `.env` file exists with valid `GEMINI_API_KEY`
- [ ] Backend dependencies installed (`pip install -r requirements.txt`)
- [ ] Frontend dependencies installed (`npm install`)
- [ ] Python version 3.8+ (`python --version`)
- [ ] Node.js version 16+ (`node --version`)

### ✅ Start Services
- [ ] Backend running on `http://localhost:8000`
  ```bash
  cd src
  python main.py
  ```
- [ ] Frontend running on `http://localhost:5173`
  ```bash
  npm run dev
  ```
- [ ] No startup errors in either terminal

## Test 1: New User Signup Flow

### Step 1: Signup
- [ ] Navigate to `http://localhost:5173/signup`
- [ ] Fill in all fields:
  - [ ] Full Name: "Test User"
  - [ ] Age: "25"
  - [ ] Email: "test@example.com"
  - [ ] Password: "test123"
  - [ ] Confirm Password: "test123"
- [ ] Check "Terms & Conditions" checkbox
- [ ] Click "Create Account" button
- [ ] No errors in console
- [ ] Automatically redirected to `/onboarding/step1`

### Step 2: Onboarding Step 1 (3 Questions)
- [ ] Page loads correctly with futuristic theme
- [ ] Header shows "Step 01 / 04"
- [ ] All 3 questions visible:
  - [ ] Question 1: Payday behavior
  - [ ] Question 2: Weekend spending
  - [ ] Question 3: Subscription tracking
- [ ] Can select answers (cards highlight in green)
- [ ] "Continue Phase" button disabled until all answered
- [ ] Answer all 3 questions
- [ ] "Continue Phase" button becomes enabled
- [ ] Click "Continue Phase"
- [ ] Redirected to `/onboarding/step2`

### Step 3: Onboarding Step 2 (3 Questions)
- [ ] Page loads correctly
- [ ] Header shows "Step 02 / 04"
- [ ] All 3 questions visible:
  - [ ] Question 4: Impulse buying
  - [ ] Question 5: Goal completion
  - [ ] Question 6: Stress response
- [ ] Can select answers
- [ ] "Previous Node" button works (goes back to Step 1)
- [ ] Answer all 3 questions
- [ ] Click "Next Phase"
- [ ] Redirected to `/onboarding/step3`

### Step 4: Onboarding Step 3 (4 Questions)
- [ ] Page loads correctly
- [ ] Header shows "Step 03 / 04"
- [ ] All 4 questions visible:
  - [ ] Question 7: Social pressure
  - [ ] Question 8: Emergency fund
  - [ ] Question 9: Budget planning
  - [ ] Question 10: Financial learning
- [ ] Can select answers
- [ ] "Previous Node" button works
- [ ] Answer all 4 questions
- [ ] Click "Final Phase"
- [ ] Redirected to `/onboarding/step4`

### Step 5: Onboarding Step 4 (Income + Processing)
- [ ] Page loads correctly
- [ ] Header shows "Step 04 / 04"
- [ ] Income input field visible
- [ ] EMI input field visible
- [ ] Enter income: "50000"
- [ ] Enter EMI: "10000" (optional)
- [ ] "Initialize Terminal" button enabled
- [ ] Click "Initialize Terminal"
- [ ] Loading animation appears
- [ ] Loading text: "Analyzing Your Profile"
- [ ] No errors in console
- [ ] Check Network tab:
  - [ ] POST request to `/predict/behavioral-scores`
  - [ ] Status: 200 OK
  - [ ] Response contains 10 scores
- [ ] After ~2-3 seconds, redirected to `/dashboard`

### Step 6: Verify Data Storage
Open Browser DevTools → Console, run:
```javascript
// Check all answers are stored
console.log('Payday:', localStorage.getItem('finsight_behavioral_payday'));
console.log('Weekend:', localStorage.getItem('finsight_behavioral_weekend'));
console.log('Subs:', localStorage.getItem('finsight_behavioral_subs'));
console.log('Impulse:', localStorage.getItem('finsight_behavioral_impulse'));
console.log('Goal:', localStorage.getItem('finsight_behavioral_goal_comp'));
console.log('Stress:', localStorage.getItem('finsight_behavioral_stress'));
console.log('Social:', localStorage.getItem('finsight_behavioral_social'));
console.log('Emergency:', localStorage.getItem('finsight_behavioral_emergency'));
console.log('Budget:', localStorage.getItem('finsight_behavioral_budget'));
console.log('Learning:', localStorage.getItem('finsight_behavioral_learning'));

// Check scores are stored
console.log('Scores:', JSON.parse(localStorage.getItem('finsight_behavioral_scores')));

// Check completion flags
console.log('Completed:', localStorage.getItem('finsight_behavioral_completed'));
console.log('Onboarded:', localStorage.getItem('finsight_onboarded'));

// Check financial data
console.log('Income:', localStorage.getItem('finsight_income'));
console.log('EMI:', localStorage.getItem('finsight_emi'));
```

Expected Results:
- [ ] All 10 answers are stored (not empty)
- [ ] Scores object has 10 keys with numerical values (1-10)
- [ ] `finsight_behavioral_completed` = "true"
- [ ] `finsight_onboarded` = "true"
- [ ] Income and EMI are stored

## Test 2: Existing User Login Flow

### Step 1: Logout
- [ ] Click logout button (if available) or clear token manually:
  ```javascript
  localStorage.removeItem('token');
  ```
- [ ] Navigate to `/login`

### Step 2: Login
- [ ] Enter email: "test@example.com"
- [ ] Enter password: "test123"
- [ ] Click "Sign In"
- [ ] No errors in console
- [ ] Automatically redirected to `/dashboard` (NOT onboarding)
- [ ] Verify behavioral profile is still complete

## Test 3: Backend API Testing

### Test Endpoint Directly
```bash
# Get auth token first
curl -X POST http://localhost:8000/auth/login \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "username=test@example.com&password=test123"

# Copy the access_token from response, then:
curl -X POST http://localhost:8000/predict/behavioral-scores \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN_HERE" \
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

Expected Response:
- [ ] Status: 200 OK
- [ ] Response contains 10 scores
- [ ] All scores are between 1.0 and 10.0
- [ ] Keys match expected format:
  - `payday_behavior_score`
  - `weekend_spend_score`
  - `subscription_awareness_score`
  - `impulse_control_score`
  - `goal_history_score`
  - `stress_response_score`
  - `social_comparison_score`
  - `emergency_preparedness_score`
  - `future_planning_score`
  - `learning_orientation_score`

## Test 4: Error Handling

### Test 1: Invalid API Key
- [ ] Temporarily change `GEMINI_API_KEY` in `.env` to invalid value
- [ ] Restart backend
- [ ] Complete onboarding
- [ ] Verify error message appears
- [ ] Restore valid API key

### Test 2: Network Error
- [ ] Stop backend server
- [ ] Try to complete onboarding Step 4
- [ ] Verify error message appears
- [ ] Restart backend

### Test 3: Incomplete Answers
- [ ] Start onboarding
- [ ] Skip some questions
- [ ] Verify "Continue" button stays disabled
- [ ] Answer all questions
- [ ] Verify button becomes enabled

### Test 4: Invalid Income
- [ ] Go to onboarding Step 4
- [ ] Leave income field empty
- [ ] Verify "Initialize Terminal" button is disabled
- [ ] Enter income
- [ ] Verify button becomes enabled

## Test 5: UI/UX Testing

### Visual Design
- [ ] Theme is consistent (black background, green primary)
- [ ] Typography is bold, italic, uppercase
- [ ] Cards have rounded corners
- [ ] Hover effects work on buttons
- [ ] Selected answers highlight in green
- [ ] Loading animation is smooth
- [ ] Progress indicators show correct step

### Responsiveness
- [ ] Test on desktop (1920x1080)
- [ ] Test on tablet (768x1024)
- [ ] Test on mobile (375x667)
- [ ] All elements are readable
- [ ] No horizontal scrolling
- [ ] Buttons are clickable

### Accessibility
- [ ] Can navigate with keyboard (Tab key)
- [ ] Can select answers with Enter key
- [ ] Form inputs have labels
- [ ] Error messages are visible
- [ ] Loading states are announced

## Test 6: Edge Cases

### Test 1: Refresh During Onboarding
- [ ] Start onboarding
- [ ] Answer some questions
- [ ] Refresh page (F5)
- [ ] Verify answers are preserved
- [ ] Continue from where you left off

### Test 2: Back Button
- [ ] Complete onboarding Step 1
- [ ] Click browser back button
- [ ] Verify you can go back
- [ ] Click forward button
- [ ] Verify you can continue

### Test 3: Multiple Accounts
- [ ] Create first account
- [ ] Complete onboarding
- [ ] Logout
- [ ] Create second account
- [ ] Verify onboarding starts fresh
- [ ] Complete onboarding
- [ ] Logout and login to first account
- [ ] Verify first account's data is preserved

### Test 4: Long Answers
- [ ] In onboarding, try to enter very long text answers
- [ ] Verify they are handled correctly
- [ ] Verify Gemini API can process them

## Test 7: Performance Testing

### Load Time
- [ ] Measure page load time for each onboarding step
- [ ] Should be < 1 second
- [ ] No layout shifts

### API Response Time
- [ ] Measure `/predict/behavioral-scores` response time
- [ ] Should be < 5 seconds (Gemini API call)
- [ ] Loading state should be visible

### Memory Usage
- [ ] Open DevTools → Performance
- [ ] Record during onboarding
- [ ] Check for memory leaks
- [ ] Verify no excessive re-renders

## Test 8: Browser Compatibility

### Chrome
- [ ] All features work
- [ ] No console errors
- [ ] UI renders correctly

### Firefox
- [ ] All features work
- [ ] No console errors
- [ ] UI renders correctly

### Safari
- [ ] All features work
- [ ] No console errors
- [ ] UI renders correctly

### Edge
- [ ] All features work
- [ ] No console errors
- [ ] UI renders correctly

## Test 9: Security Testing

### Authentication
- [ ] Cannot access `/predict/behavioral-scores` without token
- [ ] Token is stored securely in localStorage
- [ ] Token expires after logout
- [ ] Cannot access dashboard without login

### Data Privacy
- [ ] Behavioral answers are not exposed in URL
- [ ] API responses don't leak sensitive data
- [ ] localStorage data is scoped to domain

## Test 10: Integration Testing

### Health Model
- [ ] After onboarding, go to Health page
- [ ] Verify behavioral scores are used
- [ ] Verify predictions work

### Waste Model
- [ ] After onboarding, go to Waste page
- [ ] Verify behavioral scores are used
- [ ] Verify predictions work

### Goal Model
- [ ] After onboarding, go to Goals page
- [ ] Verify behavioral scores are used
- [ ] Verify predictions work

## Final Checklist

### Code Quality
- [ ] No console errors
- [ ] No console warnings
- [ ] No TypeScript/ESLint errors
- [ ] Code is properly formatted
- [ ] Comments are clear

### Documentation
- [ ] README is updated
- [ ] API documentation is clear
- [ ] Code comments are helpful
- [ ] Testing guide is complete

### Deployment Ready
- [ ] Environment variables are documented
- [ ] Dependencies are listed
- [ ] Build process works
- [ ] No hardcoded values

## Bug Report Template

If you find any issues, report them using this format:

```
**Bug Title**: [Short description]

**Steps to Reproduce**:
1. Go to...
2. Click on...
3. See error...

**Expected Behavior**:
[What should happen]

**Actual Behavior**:
[What actually happens]

**Screenshots**:
[If applicable]

**Environment**:
- Browser: [Chrome/Firefox/Safari/Edge]
- OS: [Windows/Mac/Linux]
- Frontend URL: [http://localhost:5173]
- Backend URL: [http://localhost:8000]

**Console Errors**:
[Copy any errors from browser console]

**Network Errors**:
[Copy any failed API calls from Network tab]
```

---

## Summary

Total Tests: 10 categories, 100+ individual checks

**Status**: Ready for comprehensive testing! 🚀

**Estimated Testing Time**: 2-3 hours for complete coverage

**Priority Tests**:
1. Test 1: New User Signup Flow (CRITICAL)
2. Test 2: Existing User Login Flow (CRITICAL)
3. Test 3: Backend API Testing (CRITICAL)
4. Test 4: Error Handling (HIGH)
5. Test 5: UI/UX Testing (MEDIUM)

Start with the priority tests first, then move to edge cases and integration tests.
