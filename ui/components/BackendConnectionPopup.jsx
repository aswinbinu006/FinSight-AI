import React, { useState, useEffect } from 'react';
import { WifiOff, ServerOff, RefreshCw, X, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { useNetworkStatus } from '../hooks/useNetworkStatus';
import { API_BASE_URL } from '../utils/config';

/**
 * BackendConnectionPopup
 * =====================
 * A premium, non-intrusive modal popup that only appears when the
 * backend is unreachable. Disappears automatically when connection
 * is restored. Includes manual retry and auto-retry countdown.
 */
export default function BackendConnectionPopup() {
  const { isOnline, backendHealthy } = useNetworkStatus();
  const [dismissed, setDismissed] = useState(false);
  const [isRetrying, setIsRetrying] = useState(false);
  const [retryCountdown, setRetryCountdown] = useState(0);
  const [justReconnected, setJustReconnected] = useState(false);
  const [wasDisconnected, setWasDisconnected] = useState(false);

  const isDisconnected = !isOnline || !backendHealthy;

  // Track when connection was lost and restored
  useEffect(() => {
    if (isDisconnected) {
      setWasDisconnected(true);
      setDismissed(false);
      setJustReconnected(false);
    } else if (wasDisconnected && !isDisconnected) {
      // Just reconnected!
      setJustReconnected(true);
      setWasDisconnected(false);
      // Auto-hide the "reconnected" toast after 3 seconds
      const timer = setTimeout(() => {
        setJustReconnected(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isDisconnected, wasDisconnected]);

  // Auto-retry countdown
  useEffect(() => {
    if (!isDisconnected || dismissed) return;

    const startCountdown = () => {
      setRetryCountdown(15);
    };

    startCountdown();

    const interval = setInterval(() => {
      setRetryCountdown((prev) => {
        if (prev <= 1) {
          // Auto-retry by triggering a re-check
          handleRetry();
          return 15;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isDisconnected, dismissed]);

  const handleRetry = async () => {
    setIsRetrying(true);
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000);
      await fetch(`${API_BASE_URL}/health`, { 
        method: 'GET', 
        signal: controller.signal 
      });
      clearTimeout(timeoutId);
    } catch (e) {
      // Will be caught by the hook's periodic check
    }
    setTimeout(() => setIsRetrying(false), 1000);
  };

  // Reconnected toast
  if (justReconnected) {
    return (
      <div className="fixed bottom-6 right-6 z-[9999] animate-slide-up">
        <div className="bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-xl rounded-2xl px-6 py-4 flex items-center gap-3 shadow-2xl shadow-emerald-500/10">
          <CheckCircle2 size={20} className="text-emerald-400 shrink-0" />
          <span className="text-sm font-bold text-emerald-300">Connection restored</span>
        </div>
      </div>
    );
  }

  // Nothing to show
  if (!isDisconnected || dismissed) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-[9998] bg-black/60 backdrop-blur-sm" />

      {/* Popup */}
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-6">
        <div className="relative w-full max-w-md bg-[#0A0A0A] border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
          
          {/* Glow effect */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-red-500/10 blur-[80px] rounded-full pointer-events-none" />
          
          {/* Dismiss button */}
          <button
            onClick={() => setDismissed(true)}
            className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/30 hover:text-white hover:bg-white/10 transition-all z-10"
          >
            <X size={14} />
          </button>

          {/* Content */}
          <div className="relative p-8 pt-10 text-center space-y-6">
            {/* Icon */}
            <div className="flex justify-center">
              <div className="w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                {!isOnline ? (
                  <WifiOff size={28} className="text-red-400" />
                ) : (
                  <ServerOff size={28} className="text-red-400" />
                )}
              </div>
            </div>

            {/* Title */}
            <div className="space-y-2">
              <h2 className="text-xl font-black tracking-tight">
                {!isOnline ? 'No Internet Connection' : 'Backend Unavailable'}
              </h2>
              <p className="text-sm text-white/40 leading-relaxed max-w-xs mx-auto">
                {!isOnline 
                  ? 'Please check your internet connection and try again.'
                  : 'Our servers are temporarily unreachable. Your data is safe — we\'ll reconnect automatically.'
                }
              </p>
            </div>

            {/* Status indicator */}
            <div className="flex items-center justify-center gap-2 py-3">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-red-400">
                {isRetrying ? 'Retrying...' : `Auto-retry in ${retryCountdown}s`}
              </span>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3">
              <button
                onClick={handleRetry}
                disabled={isRetrying}
                className="w-full py-4 rounded-2xl bg-white/5 border border-white/10 text-sm font-bold uppercase tracking-widest hover:bg-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
              >
                <RefreshCw size={16} className={isRetrying ? 'animate-spin' : ''} />
                {isRetrying ? 'Checking...' : 'Retry Now'}
              </button>

              <button
                onClick={() => setDismissed(true)}
                className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20 hover:text-white/40 transition-colors py-2"
              >
                Continue in Offline Mode
              </button>
            </div>
          </div>

          {/* Bottom accent */}
          <div className="h-1 bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
}
