import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Loader2 } from 'lucide-react';
import { UserDataProvider } from './context/UserDataContext';

// Loading fallback
const LoadingScreen = () => (
  <div className="min-h-screen bg-black flex items-center justify-center">
    <div className="flex flex-col items-center gap-4">
      <Loader2 className="animate-spin text-primary w-10 h-10" />
      <p className="text-[10px] uppercase font-bold tracking-[0.4em] text-primary/60 animate-pulse">Loading Module...</p>
    </div>
  </div>
);

// Public Pages (eagerly loaded for fast first paint)
import Landing from './pages/Landing';
import Login from './pages/Login';
import Signup from './pages/Signup';

// Lazy-loaded routes for code splitting
const OnboardingStep1 = lazy(() => import('./pages/OnboardingStep1'));
const OnboardingStep2 = lazy(() => import('./pages/OnboardingStep2'));
const OnboardingStep3 = lazy(() => import('./pages/OnboardingStep3'));
const OnboardingStep4 = lazy(() => import('./pages/OnboardingStep4'));

const Dashboard = lazy(() => import('./pages/Dashboard'));

const HealthIntro = lazy(() => import('./pages/HealthIntro'));
const HealthDashboard = lazy(() => import('./pages/HealthDashboard'));

const WasteIntro = lazy(() => import('./pages/WasteIntro'));
const WasteMonthly = lazy(() => import('./pages/WasteMonthly'));
const WasteYearly = lazy(() => import('./pages/WasteYearly'));

const SubscriptionInput = lazy(() => import('./pages/SubscriptionInput'));
const SubscriptionPlans = lazy(() => import('./pages/SubscriptionPlans'));

const GoalIntro = lazy(() => import('./pages/GoalIntro'));
const GoalStep1 = lazy(() => import('./pages/GoalStep1'));
const GoalStep2 = lazy(() => import('./pages/GoalStep2'));
const GoalStep3 = lazy(() => import('./pages/GoalStep3'));
const GoalStep4 = lazy(() => import('./pages/GoalStep4'));
const GoalStep5 = lazy(() => import('./pages/GoalStep5'));
const GoalResult = lazy(() => import('./pages/GoalResult'));

const CopilotIntro = lazy(() => import('./pages/CopilotIntro'));
const CopilotDashboard = lazy(() => import('./pages/CopilotDashboard'));

const Profile = lazy(() => import('./pages/Profile'));
const Settings = lazy(() => import('./pages/Settings'));
const Help = lazy(() => import('./pages/Help'));
const Notifications = lazy(() => import('./pages/Notifications'));
const NotificationPopup = lazy(() => import('./pages/NotificationPopup'));

const Error404 = lazy(() => import('./pages/Error404'));
const Error500 = lazy(() => import('./pages/Error500'));
const NetworkError = lazy(() => import('./pages/NetworkError'));

import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function ScrollManager() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.2,
      touchMultiplier: 2.2,
      lerp: 0.07,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const raf = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(raf);
    };
  }, []);

  return null;
}

function App() {
  return (
    <UserDataProvider>
    <BrowserRouter>
      <ScrollManager />
      <Suspense fallback={<LoadingScreen />}>
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
      </Suspense>
    </BrowserRouter>
    </UserDataProvider>
  );
}

export default App;
