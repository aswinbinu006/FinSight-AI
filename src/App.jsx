import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Public Pages
import Landing from './pages/Landing';
import Login from './pages/Login';
import Signup from './pages/Signup';

// Onboarding
import OnboardingStep1 from './pages/OnboardingStep1';
import OnboardingStep2 from './pages/OnboardingStep2';
import OnboardingStep3 from './pages/OnboardingStep3';
import OnboardingStep4 from './pages/OnboardingStep4';

// Main Dashboard
import Dashboard from './pages/Dashboard';

// Health
import HealthIntro from './pages/HealthIntro';
import HealthDashboard from './pages/HealthDashboard';

// Waste Recovery
import WasteIntro from './pages/WasteIntro';
import WasteMonthly from './pages/WasteMonthly';
import WasteYearly from './pages/WasteYearly';

// Subscriptions
import SubscriptionInput from './pages/SubscriptionInput';
import SubscriptionPlans from './pages/SubscriptionPlans';

// Goals
import GoalIntro from './pages/GoalIntro';
import GoalStep1 from './pages/GoalStep1';
import GoalStep2 from './pages/GoalStep2';
import GoalStep3 from './pages/GoalStep3';
import GoalStep4 from './pages/GoalStep4';
import GoalStep5 from './pages/GoalStep5';
import GoalResult from './pages/GoalResult';

// AI Co-Pilot
import CopilotIntro from './pages/CopilotIntro';
import CopilotDashboard from './pages/CopilotDashboard';

// Profile & Settings
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Help from './pages/Help';
import Notifications from './pages/Notifications';
import NotificationPopup from './pages/NotificationPopup';

// Error Pages
import Error404 from './pages/Error404';
import Error500 from './pages/Error500';
import NetworkError from './pages/NetworkError';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Onboarding Flow */}
        <Route path="/onboarding/step1" element={<OnboardingStep1 />} />
        <Route path="/onboarding/step2" element={<OnboardingStep2 />} />
        <Route path="/onboarding/step3" element={<OnboardingStep3 />} />
        <Route path="/onboarding/step4" element={<OnboardingStep4 />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Financial Health */}
        <Route path="/health" element={<HealthIntro />} />
        <Route path="/health/dashboard" element={<HealthDashboard />} />

        {/* Waste Recovery */}
        <Route path="/waste" element={<WasteIntro />} />
        <Route path="/waste/monthly" element={<WasteMonthly />} />
        <Route path="/waste/yearly" element={<WasteYearly />} />

        {/* Subscriptions */}
        <Route path="/subscriptions/add" element={<SubscriptionInput />} />
        <Route path="/subscriptions/plans" element={<SubscriptionPlans />} />

        {/* Goal Intelligence */}
        <Route path="/goals" element={<GoalIntro />} />
        <Route path="/goals/step1" element={<GoalStep1 />} />
        <Route path="/goals/step2" element={<GoalStep2 />} />
        <Route path="/goals/step3" element={<GoalStep3 />} />
        <Route path="/goals/step4" element={<GoalStep4 />} />
        <Route path="/goals/step5" element={<GoalStep5 />} />
        <Route path="/goals/result" element={<GoalResult />} />

        {/* AI Co-Pilot */}
        <Route path="/copilot" element={<CopilotIntro />} />
        <Route path="/copilot/dashboard" element={<CopilotDashboard />} />

        {/* Profile & Settings */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/help" element={<Help />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/notifications/popup" element={<NotificationPopup />} />

        {/* Error Pages */}
        <Route path="/error/500" element={<Error500 />} />
        <Route path="/error/network" element={<NetworkError />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
