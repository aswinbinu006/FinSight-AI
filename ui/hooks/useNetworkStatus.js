import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../utils/config';

/**
 * Hook to monitor network connectivity and backend health.
 * Uses the shared API_BASE_URL from config.
 */
export function useNetworkStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [backendHealthy, setBackendHealthy] = useState(true);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Check backend health periodically
  useEffect(() => {
    const checkBackend = async () => {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000);

        const response = await fetch(`${API_BASE_URL}/health`, {
          method: 'GET',
          signal: controller.signal
        });

        clearTimeout(timeoutId);
        setBackendHealthy(response.ok);
      } catch (error) {
        setBackendHealthy(false);
      }
    };

    // Check immediately
    checkBackend();

    // Check every 30 seconds
    const interval = setInterval(checkBackend, 30000);

    return () => clearInterval(interval);
  }, []);

  return { isOnline, backendHealthy };
}
