import { Link } from 'react-router-dom';
import './CopilotIntro.css';

export default function CopilotIntro() {


  return (
    <>

{/*  SideNavBar: Rail Implementation (Structural match to SCREEN_15)  */}
<input className="hidden peer" id="sidebar-toggle" type="checkbox"/>
<aside className="fixed left-4 top-4 bottom-4 w-20 rounded-3xl z-50 dark:bg-teal-950/80 backdrop-blur-xl shadow-[0_4px_12px_rgba(15,23,42,0.03),0_2px_4px_rgba(15,23,42,0.02)] flex flex-col items-center py-8 justify-between overflow-hidden transition-all duration-300 bg-surface-container/95">
<div className="flex flex-col items-center gap-4 w-full">
<div className="flex flex-col items-center gap-1">
<div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-white shadow-lg">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>architecture</span>
</div>
<span className="text-teal-800 font-semibold tracking-tighter text-[10px] mt-2 uppercase italic">Architect</span>
</div>
<label className="w-10 h-10 flex items-center justify-center text-teal-600/60 hover:text-teal-800 bg-teal-100/30 rounded-xl cursor-pointer transition-colors" htmlFor="sidebar-toggle">
<span className="material-symbols-outlined expand-icon transition-transform duration-300">chevron_right</span>
</label>
</div>
<nav className="flex flex-col gap-3 items-center w-full">
<button className="nav-item w-12 h-12 flex items-center justify-center rounded-2xl transition-all duration-300" title="Dashboard">
<span className="material-symbols-outlined">dashboard</span>
<span className="nav-label font-medium text-sm">Dashboard</span>
</button>
<button className="nav-item w-12 h-12 flex items-center justify-center text-teal-600/60 hover:text-teal-800 hover:bg-teal-100/50 rounded-2xl transition-all duration-300" title="Financial Health">
<span className="material-symbols-outlined">monitor_heart</span>
<span className="nav-label font-medium text-sm">Financial Health</span>
</button>
<button className="nav-item w-12 h-12 flex items-center justify-center text-teal-600/60 hover:text-teal-800 hover:bg-teal-100/50 rounded-2xl transition-all duration-300" title="Waste Recovery">
<span className="material-symbols-outlined">delete_outline</span>
<span className="nav-label font-medium text-sm">Waste Recovery</span>
</button>
<button className="nav-item w-12 h-12 flex items-center justify-center text-teal-600/60 hover:text-teal-800 hover:bg-teal-100/50 rounded-2xl transition-all duration-300" title="Goal Intelligence">
<span className="material-symbols-outlined">ads_click</span>
<span className="nav-label font-medium text-sm">Goal Intelligence</span>
</button>
<button className="nav-item active w-12 h-12 flex items-center justify-center rounded-2xl transition-all duration-300" title="AI Co-Pilot">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>psychology</span>
<span className="nav-label font-medium text-sm">AI Co-Pilot</span>
</button>
<button className="nav-item w-12 h-12 flex items-center justify-center text-teal-600/60 hover:text-teal-800 hover:bg-teal-100/50 rounded-2xl transition-all duration-300" title="Subscription">
<span className="material-symbols-outlined">payments</span>
<span className="nav-label font-medium text-sm">Subscription</span>
</button>
</nav>
<div className="flex flex-col gap-2 items-center w-full">
<button className="nav-item w-12 h-12 flex items-center justify-center text-teal-600/60 hover:text-teal-800 hover:bg-teal-100/50 rounded-2xl transition-all duration-300" title="Settings">
<span className="material-symbols-outlined">settings</span>
<span className="nav-label font-medium text-sm">Settings</span>
</button>
</div>
</aside>
{/*  Main Content Canvas  */}
<main className="flex-1 ml-24 min-h-screen relative flex flex-col transition-all duration-300">
{/*  TopNavBar Cluster (Consistent with SCREEN_15 but modified per request)  */}
<header className="w-full h-16 flex items-center px-8 mt-8 justify-end">
<div className="flex items-center gap-6">
<div className="flex items-center gap-3">
<button className="p-2 text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="p-2 text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors">
<span className="material-symbols-outlined">help_outline</span>
</button>
<div className="h-10 w-10 rounded-full bg-surface-container-highest overflow-hidden ml-2 shadow-sm border border-outline-variant/10">
<img alt="User Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkwsQQmnSZb7KCWk7jycz5bErIpotJIEl8vvU0KuWhZXWWtrsz-UcyZM36ayMhnAmT6FFW-wHX1S5wjGrFDgru0RDk__pHEmST9wn-eBLyXu4t2adSw_aQmm18zFGm8ZDQdzotZRH8D8Hn4iWLvtfgAqYEZ5SrNL7LDQms9-GUMe-dlbT8GEdQHx3uiAOMXoSq8x_vf9XE5DcTMcw3RvlckR0iqBaqFG84VrqVnMiAU1JCHHnDwV3W6b_2NwMVbQPND4wlzYgw7hBK"/>
</div>
</div>
</div>
</header>
{/*  Dashboard Content Area with Architectural Background Blur  */}
<div className="flex-1 p-8 relative">
{/*  The Background Layer  */}
<div className="absolute inset-0 z-0 bg-architectural brightness-90"></div>
<div className="absolute inset-0 z-10 backdrop-blur-md bg-white/40"></div>
{/*  Dashboard Content Simulation (Blurred behind modal)  */}
<div className="relative z-20 max-w-[1440px] mx-auto w-full space-y-8 opacity-40 blur-[4px]">
<section className="intelligence-ray bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/10">
<div className="flex items-start gap-4">
<div className="p-2 bg-error-container/30 rounded-lg">
<span className="material-symbols-outlined text-error" style={{"fontVariationSettings":"'FILL' 1"}}>warning</span>
</div>
<div>
<h2 className="text-[11px] font-bold uppercase tracking-widest text-on-surface-variant mb-1">AI Diagnostics</h2>
<p className="text-lg font-semibold text-on-surface">Financial health warning identified regarding subscription overhead.</p>
</div>
</div>
</section>
<div className="grid grid-cols-12 gap-8">
<div className="col-span-8 space-y-8">
<div className="bg-surface-container-lowest p-8 rounded-xl h-64 shadow-sm"></div>
<div className="grid grid-cols-3 gap-6">
<div className="bg-surface-container-lowest h-32 rounded-xl"></div>
<div className="bg-surface-container-lowest h-32 rounded-xl"></div>
<div className="bg-surface-container-lowest h-32 rounded-xl"></div>
</div>
</div>
<div className="col-span-4 h-full">
<div className="bg-surface-container-lowest rounded-xl h-[500px]"></div>
</div>
</div>
</div>
{/*  Central Unlock Co-Pilot Modal (Focal Point)  */}
<div className="absolute inset-0 z-30 flex items-center justify-center p-8">
<div className="max-w-lg w-full glass-panel p-12 rounded-[2.5rem] shadow-[0_32px_80px_rgba(0,0,0,0.15)] border border-white/50 flex flex-col items-center text-center animate-in fade-in zoom-in duration-500">
<div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-container rounded-3xl flex items-center justify-center text-white mb-8 shadow-2xl shadow-primary/30">
<span className="material-symbols-outlined text-[40px]" style={{"fontVariationSettings":"'FILL' 1"}}>lock</span>
</div>
<h3 className="text-4xl font-bold text-on-surface mb-4 tracking-tight font-headline">Unlock Co-Pilot</h3>
<p className="text-on-surface-variant text-lg leading-relaxed mb-10 max-w-sm">
                    Get a personalized financial action plan and see the exact steps to rescue your goals. 
                    AI-driven insights to optimize your cash flow.
                </p>
<button className="w-full bg-gradient-to-r from-primary to-primary-container hover:from-primary-container hover:to-primary text-white font-bold py-5 px-10 rounded-2xl shadow-xl shadow-primary/20 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] text-lg">
                    Upgrade to Pro
                </button>
<p className="mt-8 text-[11px] font-bold uppercase tracking-[0.2em] text-on-surface-variant/50">
                    Grade Security Guaranteed
                </p>
</div>
</div>
</div>
</main>
{/*  Floating Quick Status (Subtle Detail)  */}
<div className="fixed bottom-10 right-10 z-40">
<div className="bg-surface-container-lowest/90 backdrop-blur-md px-6 py-3 rounded-full shadow-2xl border border-outline-variant/10 flex items-center gap-4">
<div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></div>
<span className="text-[11px] font-bold text-on-surface uppercase tracking-widest">Co-Pilot scanning for leaks...</span>
</div>
</div>

    </>
  );
}
