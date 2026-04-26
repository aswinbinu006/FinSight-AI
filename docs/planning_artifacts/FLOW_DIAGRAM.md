# Behavioral Assessment Flow Diagram

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         USER JOURNEY FLOW                                │
└─────────────────────────────────────────────────────────────────────────┘

NEW USER PATH:
═══════════════

    ┌──────────┐
    │  Signup  │
    │  Page    │
    └────┬─────┘
         │
         ▼
    ┌──────────────────┐
    │ Create Account   │
    │ + Auto Login     │
    └────┬─────────────┘
         │
         ▼
    ┌──────────────────┐
    │ Onboarding       │
    │ Step 1           │
    │ (3 Questions)    │
    └────┬─────────────┘
         │
         ▼
    ┌──────────────────┐
    │ Onboarding       │
    │ Step 2           │
    │ (3 Questions)    │
    └────┬─────────────┘
         │
         ▼
    ┌──────────────────┐
    │ Onboarding       │
    │ Step 3           │
    │ (4 Questions)    │
    └────┬─────────────┘
         │
         ▼
    ┌──────────────────┐
    │ Onboarding       │
    │ Step 4           │
    │ (Income + EMI)   │
    └────┬─────────────┘
         │
         ▼
    ┌──────────────────┐
    │ Click "Initialize│
    │ Terminal" Button │
    └────┬─────────────┘
         │
         ▼
    ┌──────────────────────────────────────┐
    │ BACKEND PROCESSING                   │
    │ ────────────────────────────────     │
    │ 1. Collect 10 answers from storage   │
    │ 2. POST /predict/behavioral-scores   │
    │ 3. Gemini AI converts text → numbers │
    │ 4. Return 10 scores (1.0 - 10.0)     │
    └────┬─────────────────────────────────┘
         │
         ▼
    ┌──────────────────┐
    │ Store Scores in  │
    │ localStorage     │
    │ + Set completed  │
    └────┬─────────────┘
         │
         ▼
    ┌──────────────────┐
    │   Dashboard      │
    │ (Profile Ready)  │
    └──────────────────┘


EXISTING USER PATH:
═══════════════════

    ┌──────────┐
    │  Login   │
    │  Page    │
    └────┬─────┘
         │
         ▼
    ┌──────────────────────────┐
    │ Check localStorage:      │
    │ finsight_behavioral_     │
    │ completed === "true"?    │
    └────┬─────────────────────┘
         │
         ├─── YES ──────────────┐
         │                      │
         │                      ▼
         │              ┌──────────────┐
         │              │  Dashboard   │
         │              │ (Skip Onb.)  │
         │              └──────────────┘
         │
         └─── NO ───────────────┐
                                │
                                ▼
                        ┌──────────────┐
                        │ Onboarding   │
                        │ Step 1       │
                        │ (Continue    │
                        │  flow above) │
                        └──────────────┘


DATA FLOW:
══════════

┌─────────────────────────────────────────────────────────────────────┐
│                         FRONTEND                                     │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  Step 1-3: Store answers in localStorage                            │
│  ┌────────────────────────────────────────────────────────┐        │
│  │ finsight_behavioral_payday: "save"                     │        │
│  │ finsight_behavioral_weekend: "more"                    │        │
│  │ finsight_behavioral_subs: "yes"                        │        │
│  │ finsight_behavioral_impulse: "sometimes"               │        │
│  │ finsight_behavioral_goal_comp: "often"                 │        │
│  │ finsight_behavioral_stress: "cut"                      │        │
│  │ finsight_behavioral_social: "no"                       │        │
│  │ finsight_behavioral_emergency: "yes"                   │        │
│  │ finsight_behavioral_budget: "yes"                      │        │
│  │ finsight_behavioral_learning: "regularly"              │        │
│  └────────────────────────────────────────────────────────┘        │
│                                                                      │
│  Step 4: Collect all answers + Send to backend                      │
│  ┌────────────────────────────────────────────────────────┐        │
│  │ behavioralService.scoreBehavioralAnswers(answers)      │        │
│  └────────────────────────────────────────────────────────┘        │
│                           │                                          │
└───────────────────────────┼──────────────────────────────────────────┘
                            │
                            ▼ HTTP POST
┌─────────────────────────────────────────────────────────────────────┐
│                         BACKEND                                      │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  Endpoint: POST /predict/behavioral-scores                          │
│  ┌────────────────────────────────────────────────────────┐        │
│  │ Input: {"answers": {payday, weekend, subs, ...}}      │        │
│  └────────────────────────────────────────────────────────┘        │
│                           │                                          │
│                           ▼                                          │
│  ┌────────────────────────────────────────────────────────┐        │
│  │ behavioral_scoring.score_behavioral_answers()          │        │
│  │ ─────────────────────────────────────────────────      │        │
│  │ • Formats prompt for Gemini AI                         │        │
│  │ • Sends to gemini-2.0-flash model                      │        │
│  │ • Parses JSON response                                 │        │
│  │ • Validates scores (1.0 - 10.0)                        │        │
│  └────────────────────────────────────────────────────────┘        │
│                           │                                          │
│                           ▼                                          │
│  ┌────────────────────────────────────────────────────────┐        │
│  │ Output: {                                              │        │
│  │   "payday_behavior_score": 7.5,                        │        │
│  │   "weekend_spend_score": 6.0,                          │        │
│  │   "subscription_awareness_score": 8.0,                 │        │
│  │   "impulse_control_score": 5.5,                        │        │
│  │   "goal_history_score": 7.0,                           │        │
│  │   "stress_response_score": 6.5,                        │        │
│  │   "social_comparison_score": 4.0,                      │        │
│  │   "emergency_preparedness_score": 8.5,                 │        │
│  │   "future_planning_score": 7.0,                        │        │
│  │   "learning_orientation_score": 6.0                    │        │
│  │ }                                                       │        │
│  └────────────────────────────────────────────────────────┘        │
│                           │                                          │
└───────────────────────────┼──────────────────────────────────────────┘
                            │
                            ▼ HTTP Response
┌─────────────────────────────────────────────────────────────────────┐
│                         FRONTEND                                     │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  Store scores in localStorage                                        │
│  ┌────────────────────────────────────────────────────────┐        │
│  │ finsight_behavioral_scores: {JSON object}              │        │
│  │ finsight_behavioral_completed: "true"                  │        │
│  │ finsight_onboarded: "true"                             │        │
│  └────────────────────────────────────────────────────────┘        │
│                                                                      │
│  Navigate to /dashboard                                              │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘


GEMINI AI PROCESSING:
═════════════════════

Input Prompt:
┌────────────────────────────────────────────────────────────┐
│ You are a financial behavior analyst.                      │
│ Rate each behavior from 1.0 (very poor) to 10.0 (excellent)│
│                                                             │
│ Q1 (payday): "save it first"                               │
│ Q2 (weekend): "spend more"                                 │
│ Q3 (subs): "yes I track them"                              │
│ ...                                                         │
│                                                             │
│ Return ONLY valid JSON with these keys:                    │
│ {"payday": 0.0, "weekend": 0.0, ...}                       │
└────────────────────────────────────────────────────────────┘
                            │
                            ▼
                    ┌───────────────┐
                    │  Gemini AI    │
                    │  2.0 Flash    │
                    └───────┬───────┘
                            │
                            ▼
Output JSON:
┌────────────────────────────────────────────────────────────┐
│ {                                                           │
│   "payday": 8.5,    // Excellent - saves first            │
│   "weekend": 4.0,   // Poor - spends more                 │
│   "subs": 9.0,      // Excellent - tracks subscriptions   │
│   "impulse": 6.0,   // Moderate - sometimes impulsive     │
│   "goal": 8.0,      // Good - completed goals before      │
│   "stress": 7.5,    // Good - cuts back expenses          │
│   "social": 9.0,    // Excellent - no social pressure     │
│   "emergency": 9.5, // Excellent - has emergency fund     │
│   "future": 8.0,    // Good - has budget plan             │
│   "learning": 8.5   // Excellent - reads regularly        │
│ }                                                           │
└────────────────────────────────────────────────────────────┘


STORAGE STRUCTURE:
══════════════════

localStorage Keys:
┌────────────────────────────────────────────────────────────┐
│ Authentication:                                             │
│ • token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."         │
│                                                             │
│ Behavioral Answers (Raw):                                   │
│ • finsight_behavioral_payday: "save"                        │
│ • finsight_behavioral_weekend: "more"                       │
│ • finsight_behavioral_subs: "yes"                           │
│ • finsight_behavioral_impulse: "sometimes"                  │
│ • finsight_behavioral_goal_comp: "often"                    │
│ • finsight_behavioral_stress: "cut"                         │
│ • finsight_behavioral_social: "no"                          │
│ • finsight_behavioral_emergency: "yes"                      │
│ • finsight_behavioral_budget: "yes"                         │
│ • finsight_behavioral_learning: "regularly"                 │
│                                                             │
│ Behavioral Scores (Processed):                              │
│ • finsight_behavioral_scores: "{...JSON object...}"         │
│                                                             │
│ Financial Data:                                             │
│ • finsight_income: "50000"                                  │
│ • finsight_emi: "10000"                                     │
│                                                             │
│ Status Flags:                                               │
│ • finsight_behavioral_completed: "true"                     │
│ • finsight_onboarded: "true"                                │
└────────────────────────────────────────────────────────────┘


FILES INVOLVED:
═══════════════

Frontend:
├── ui/pages/Login.jsx ..................... Login + redirect logic
├── ui/pages/Signup.jsx .................... Signup + redirect to onboarding
├── ui/pages/OnboardingStep1.jsx ........... Questions 1-3
├── ui/pages/OnboardingStep2.jsx ........... Questions 4-6
├── ui/pages/OnboardingStep3.jsx ........... Questions 7-10
├── ui/pages/OnboardingStep4.jsx ........... Income + API call + processing
├── ui/services/behavioralService.js ....... API service functions
├── ui/api.js .............................. Auth + API wrapper
└── ui/App.jsx ............................. Routing configuration

Backend:
├── src/main.py ............................ FastAPI endpoints
├── src/finsight_models_production/
│   └── behavioral_scoring.py .............. Gemini AI integration
└── .env ................................... Environment variables


API ENDPOINTS:
══════════════

POST /auth/signup
├── Input: {username, password, full_name}
└── Output: {msg: "Identity Provisioned"}

POST /auth/login
├── Input: {username, password} (form-data)
└── Output: {access_token, token_type}

POST /predict/behavioral-scores (🔒 Authenticated)
├── Input: {answers: {payday, weekend, subs, ...}}
└── Output: {payday_behavior_score, weekend_spend_score, ...}

POST /predict/health (🔒 Authenticated)
├── Input: {behavioral_scores, context: {emi_burden, income_bracket}}
└── Output: {health_score, explanation, ...}

POST /predict/waste (🔒 Authenticated)
├── Input: {subscriptions: [...]}
└── Output: {waste_analysis, explanation, ...}

POST /predict/goal (🔒 Authenticated)
├── Input: {behavioral_scores, goal_description, target_amount, ...}
└── Output: {goal_score, explanation, ...}
```

---

**Legend:**
- 🔒 = Requires authentication token
- ═══ = Major section
- ─── = Subsection
- ▼ = Flow direction
- │ = Connection
- ├── = Tree structure
