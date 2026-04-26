import { Link } from 'react-router-dom';
import './NetworkError.css';

export default function NetworkError() {


  return (
    <>

{/*  Large Faint Background Element  */}
<div className="fixed inset-0 flex items-center justify-center text-watermark opacity-[0.03] overflow-hidden">
<span className="material-symbols-outlined scale-[15] select-none" data-icon="cloud_off">cloud_off</span>
</div>
{/*  Main Content Container  */}
<main className="relative z-10 w-full max-w-md flex flex-col items-center text-center">
{/*  Visual Icon Section  */}
<div className="relative mb-12">
{/*  Glow Effect  */}
<div className="absolute inset-0 bg-primary-container/20 blur-[100px] rounded-full scale-150"></div>
<div className="relative flex items-center justify-center w-32 h-32 rounded-full bg-surface-container-lowest glass-card shadow-[0_8px_32px_rgba(0,107,95,0.08)]">
<span className="material-symbols-outlined text-primary text-6xl" data-icon="wifi_off">wifi_off</span>
</div>
{/*  Minimal connectivity accent  */}
<div className="absolute -right-2 top-0 w-3 h-3 rounded-full bg-error animate-pulse opacity-40"></div>
</div>
{/*  Typography Content  */}
<div className="space-y-4 mb-10">
<h1 className="text-3xl font-semibold text-on-surface tracking-tight">
                You're offline
            </h1>
<p className="text-base text-on-surface-variant max-w-[280px] mx-auto leading-relaxed">
                Check your internet connection and try again.
            </p>
</div>
{/*  Action Section  */}
<div className="w-full flex flex-col items-center gap-12">
<button className="px-12 py-3.5 bg-primary hover:bg-on-primary-fixed-variant text-on-primary font-semibold rounded-full shadow-lg shadow-primary/20 transition-all duration-300 active:scale-95" onClick="window.location.reload()">
                Retry
            </button>
{/*  Very subtle branding at the far bottom  */}
<div className="opacity-30">
<p className="text-[10px] font-medium uppercase tracking-[0.2em] text-outline">
                    Premium Intelligence
                </p>
</div>
</div>
</main>
{/*  Visual Texture Element  */}
<div className="fixed bottom-0 right-0 p-16 opacity-[0.07] pointer-events-none hidden lg:block">
<svg fill="none" height="300" viewbox="0 0 200 200" width="300" xmlns="http://www.w3.org/2000/svg">
<circle className="text-primary" cx="100" cy="100" r="99.5" stroke="currentColor" strokeDasharray="8 8"></circle>
</svg>
</div>

    </>
  );
}
