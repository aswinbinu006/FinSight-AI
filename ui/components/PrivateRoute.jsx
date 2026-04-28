/**
 * PrivateRoute — Route Guard Component
 * ======================================
 * Wraps protected routes to enforce Firebase authentication.
 * If the user is not logged in, they are redirected to /login.
 * If auth state is still loading, shows a premium loading spinner.
 *
 * Usage in App.jsx:
 *   <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
 */

import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import { useUserData } from '../context/UserDataContext';

export default function PrivateRoute({ children }) {
  const { authUser, loading } = useUserData();
  const location = useLocation();

  // Still checking auth state — show loading spinner
  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="animate-spin text-primary w-10 h-10" />
          <p className="text-[10px] uppercase font-bold tracking-[0.4em] text-primary/60 animate-pulse">
            Verifying Session...
          </p>
        </div>
      </div>
    );
  }

  // Not authenticated — redirect to login, preserving the intended destination
  if (!authUser) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  // Authenticated — render the protected page
  return children;
}
