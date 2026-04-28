import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { lazy, Suspense, useEffect, useCallback } from 'react';
import { Loader2 } from 'lucide-react';
import { UserDataProvider, useUserData } from './context/UserDataContext';
import ErrorBoundary from './components/ErrorBoundary';
import BackendConnectionPopup from './components/BackendConnectionPopup';
import PrivateRoute from './components/PrivateRoute';
import { auth } from './firebase/config';
import { logout } from './firebase/auth';

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

/**
 * SessionGuard — 24-hour auto-logout
 * ====================================
 * Checks the Firebase auth_time claim every 60 seconds.
 * If the user's session is older than 24 hours, automatically logs out
 * and redirects to /login.
 * 
 * This lives inside BrowserRouter so it has access to useNavigate.
 */
const SESSION_MAX_AGE_MS = 24 * 60 * 60 * 1000; // 24 hours

function SessionGuard() {
  const navigate = useNavigate();

  const checkSession = useCallback(async () => {
    const user = auth.currentUser;
    if (!user) return;

    try {
      const tokenResult = await user.getIdTokenResult();
      const authTime = new Date(tokenResult.claims.auth_time * 1000);
      const now = Date.now();
      const sessionAge = now - authTime.getTime();

      if (sessionAge > SESSION_MAX_AGE_MS) {
        console.warn('[SessionGuard] 24h session expired, logging out...');
        await logout();
        navigate('/login', { replace: true });
      }
    } catch (err) {
      // Token might not have auth_time, or user is signed out — ignore
      console.warn('[SessionGuard] Check failed:', err.message);
    }
  }, [navigate]);

  useEffect(() => {
    // Check immediately on mount
    checkSession();

    // Check every 60 seconds
    const interval = setInterval(checkSession, 60000);

    // Also check when the tab becomes visible (user returns from background)
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        checkSession();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      clearInterval(interval);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [checkSession]);

  return null;
}

/**
 * P — shorthand wrapper for PrivateRoute
 * Keeps the JSX below clean and readable.
 */
const P = ({ children }) => <PrivateRoute>{children}</PrivateRoute>;

function App() {
  return (
    <ErrorBoundary>
      <UserDataProvider>
        <BrowserRouter>
          <BackendConnectionPopup />
          <SessionGuard />
          <ScrollManager />
          <Suspense fallback={<LoadingScreen />}>
            <Routes>
          {/* ─── Public Pages (no auth required) ─── */}
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* ─── Protected Pages (require Firebase auth) ─── */}

          {/* Onboarding Flow */}
          <Route path="/onboarding/step1" element={<P><OnboardingStep1 /></P>} />
          <Route path="/onboarding/step2" element={<P><OnboardingStep2 /></P>} />
          <Route path="/onboarding/step3" element={<P><OnboardingStep3 /></P>} />
          <Route path="/onboarding/step4" element={<P><OnboardingStep4 /></P>} />

          {/* Dashboard */}
          <Route path="/dashboard" element={<P><Dashboard /></P>} />

          {/* Financial Health */}
          <Route path="/health" element={<P><HealthIntro /></P>} />
          <Route path="/health/dashboard" element={<P><HealthDashboard /></P>} />

          {/* Waste Recovery */}
          <Route path="/waste" element={<P><WasteIntro /></P>} />
          <Route path="/waste/monthly" element={<P><WasteMonthly /></P>} />
          <Route path="/waste/yearly" element={<P><WasteYearly /></P>} />

          {/* Subscriptions */}
          <Route path="/subscriptions/add" element={<P><SubscriptionInput /></P>} />
          <Route path="/subscriptions/plans" element={<P><SubscriptionPlans /></P>} />

          {/* Goal Intelligence */}
          <Route path="/goals" element={<P><GoalIntro /></P>} />
          <Route path="/goals/step1" element={<P><GoalStep1 /></P>} />
          <Route path="/goals/step2" element={<P><GoalStep2 /></P>} />
          <Route path="/goals/step3" element={<P><GoalStep3 /></P>} />
          <Route path="/goals/step4" element={<P><GoalStep4 /></P>} />
          <Route path="/goals/step5" element={<P><GoalStep5 /></P>} />
          <Route path="/goals/result" element={<P><GoalResult /></P>} />

          {/* AI Co-Pilot */}
          <Route path="/copilot" element={<P><CopilotIntro /></P>} />
          <Route path="/copilot/dashboard" element={<P><CopilotDashboard /></P>} />

          {/* Profile & Settings */}
          <Route path="/profile" element={<P><Profile /></P>} />
          <Route path="/settings" element={<P><Settings /></P>} />
          <Route path="/help" element={<P><Help /></P>} />
          <Route path="/notifications" element={<P><Notifications /></P>} />
          <Route path="/notifications/popup" element={<P><NotificationPopup /></P>} />

          {/* Error Pages (public) */}
          <Route path="/error/500" element={<Error500 />} />
          <Route path="/error/network" element={<NetworkError />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
    </UserDataProvider>
    </ErrorBoundary>
  );
}

export default App;
