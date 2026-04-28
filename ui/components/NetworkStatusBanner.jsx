import { WifiOff, ServerOff } from 'lucide-react';
import { useNetworkStatus } from '../hooks/useNetworkStatus';

export default function NetworkStatusBanner() {
  const { isOnline, backendHealthy } = useNetworkStatus();

  if (isOnline && backendHealthy) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-red-500/90 backdrop-blur-sm text-white py-3 px-6 flex items-center justify-center gap-3 text-sm font-bold">
      {!isOnline ? (
        <>
          <WifiOff size={18} />
          <span>No internet connection. Please check your network.</span>
        </>
      ) : !backendHealthy ? (
        <>
          <ServerOff size={18} />
          <span>Backend service unavailable. Using offline mode.</span>
        </>
      ) : null}
    </div>
  );
}
