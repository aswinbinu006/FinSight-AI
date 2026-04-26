import { Link } from 'react-router-dom';
import './WasteIntro.css';

export default function WasteIntro() {


  return (
    <>

{/*  SideNavBar: Rail Implementation  */}
<input className="hidden peer" id="sidebar-toggle" type="checkbox"/>
<aside className="fixed left-4 top-4 bottom-4 w-20 rounded-3xl z-50 backdrop-blur-xl shadow-[0_4px_12px_rgba(15,23,42,0.03),0_2px_4px_rgba(15,23,42,0.02)] flex flex-col items-center py-8 justify-between overflow-hidden transition-all duration-300 bg-surface-container/95">
{/*  Brand Logo & Toggle  */}
<div className="flex flex-col items-center gap-4 w-full">
<div className="flex flex-col items-center gap-1">
<div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-white shadow-lg">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>architecture</span>
</div>
<span className="text-teal-800 font-semibold tracking-tighter text-[10px] mt-2 uppercase italic">Architect</span>
</div>
<label className="w-10 h-10 flex items-center justify-center text-teal-600/60 hover:text-teal-800 bg-teal-100/30 rounded-xl cursor-pointer transition-colors" htmlFor="sidebar-toggle" title="Toggle Sidebar">
<span className="material-symbols-outlined expand-icon transition-transform duration-300">chevron_right</span>
</label>
</div>
{/*  Navigation Tabs  */}
<nav className="flex flex-col gap-3 items-center w-full">
<button className="nav-item w-12 h-12 flex items-center justify-center text-teal-600/60 hover:text-teal-800 hover:bg-teal-100/50 rounded-2xl transition-all duration-300 group" title="Dashboard">
<span className="material-symbols-outlined">dashboard</span>
<span className="nav-label font-medium text-sm">Dashboard</span>
</button>
<button className="nav-item w-12 h-12 flex items-center justify-center text-teal-600/60 hover:text-teal-800 hover:bg-teal-100/50 rounded-2xl transition-all duration-300" title="Financial Health">
<span className="material-symbols-outlined">monitor_heart</span>
<span className="nav-label font-medium text-sm">Financial Health</span>
</button>
<button className="nav-item active w-12 h-12 flex items-center justify-center rounded-2xl transition-all duration-300 group relative" title="Waste Recovery">
<span className="material-symbols-outlined">delete_outline</span>
<span className="nav-label font-medium text-sm">Waste Recovery</span>
</button>
<button className="nav-item w-12 h-12 flex items-center justify-center text-teal-600/60 hover:text-teal-800 hover:bg-teal-100/50 rounded-2xl transition-all duration-300" title="Goal Intelligence">
<span className="material-symbols-outlined">ads_click</span>
<span className="nav-label font-medium text-sm">Goal Intelligence</span>
</button>
<button className="nav-item w-12 h-12 flex items-center justify-center text-teal-600/60 hover:text-teal-800 hover:bg-teal-100/50 rounded-2xl transition-all duration-300" title="AI Co-Pilot">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>psychology</span>
<span className="nav-label font-medium text-sm">AI Co-Pilot</span>
</button>
</nav>
{/*  Footer Actions  */}
<div className="flex flex-col gap-2 items-center w-full">
<button className="nav-item w-12 h-12 flex items-center justify-center text-teal-600/60 hover:text-teal-800 hover:bg-teal-100/50 rounded-2xl transition-all duration-300" title="Settings">
<span className="material-symbols-outlined">settings</span>
<span className="nav-label font-medium text-sm">Settings</span>
</button>
</div>
</aside>
{/*  Main Content Canvas  */}
<main className="flex-1 ml-24 p-8 transition-all duration-300 flex flex-col">
{/*  TopNavBar  */}
<header className="w-full h-16 flex justify-between items-center mb-8">
<div className="flex items-center gap-4">
</div>
<div className="flex items-center gap-6">
<div className="flex items-center gap-3">
<button className="p-2 text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="p-2 text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors">
<span className="material-symbols-outlined">help_outline</span>
</button>
<div className="h-10 w-10 rounded-full bg-surface-container-highest overflow-hidden ml-2 shadow-sm border border-outline-variant/20">
<img alt="User Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkwsQQmnSZb7KCWk7jycz5bErIpotJIEl8vvU0KuWhZXWWtrsz-UcyZM36ayMhnAmT6FFW-wHX1S5wjGrFDgru0RDk__pHEmST9wn-eBLyXu4t2adSw_aQmm18zFGm8ZDQdzotZRH8D8Hn4iWLvtfgAqYEZ5SrNL7LDQms9-GUMe-dlbT8GEdQHx3uiAOMXoSq8x_vf9XE5DcTMcw3RvlckR0iqBaqFG84VrqVnMiAU1JCHHnDwV3W6b_2NwMVbQPND4wlzYgw7hBK"/>
</div>
</div>
</div>
</header>
{/*  Centered Content Card  */}
<div className="flex-1 flex items-center justify-center pb-16">
<div className="bg-surface-container-lowest p-12 rounded-[16px] shadow-[0_4px_12px_rgba(15,23,42,0.03)] border border-outline-variant/10 max-w-2xl w-full relative overflow-hidden">
{/*  Background Decorative Element  */}
<div className="absolute right-0 top-0 w-64 h-64 opacity-5 pointer-events-none">
<svg viewbox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
<circle cx="150" cy="50" fill="#14b8a6" r="100"></circle>
</svg>
</div>
<div className="relative z-10 flex flex-col items-center text-center">
<span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-4">
                    Waste Recovery
                </span>
<h1 className="text-3xl font-bold tracking-tight text-on-surface mb-6 leading-tight">
                    Identify and reduce unnecessary expenses
                </h1>
<p className="text-sm text-on-surface-variant max-w-md mb-10 leading-relaxed">
                    Add your subscriptions and see where you might be wasting money. Our AI-driven intelligence maps your recurring costs effortlessly.
                </p>
<div className="w-full max-w-sm flex flex-col gap-4 mb-12">
<div className="intelligence-ray bg-surface-container-low/50 p-4 rounded-xl flex items-center gap-4 text-left transition-all hover:translate-x-1 border border-outline-variant/5">
<span className="material-symbols-outlined text-primary" data-icon="visibility">visibility</span>
<span className="text-sm font-semibold text-on-surface">Clear view of your subscriptions</span>
</div>
<div className="intelligence-ray bg-surface-container-low/50 p-4 rounded-xl flex items-center gap-4 text-left transition-all hover:translate-x-1 border border-outline-variant/5">
<span className="material-symbols-outlined text-primary" data-icon="rule">rule</span>
<span className="text-sm font-semibold text-on-surface">Identify unnecessary expenses</span>
</div>
<div className="intelligence-ray bg-surface-container-low/50 p-4 rounded-xl flex items-center gap-4 text-left transition-all hover:translate-x-1 border border-outline-variant/5">
<span className="material-symbols-outlined text-primary" data-icon="savings">savings</span>
<span className="text-sm font-semibold text-on-surface">See how much you can save</span>
</div>
</div>
<div className="flex flex-col items-center gap-3">
<button className="px-12 py-4 bg-gradient-to-r from-primary to-primary-container text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:scale-[1.02] transition-all active:scale-95 flex items-center gap-2">
                        Add Subscriptions
                    </button>
<span className="text-[11px] font-medium text-on-surface-variant italic">
                        Takes less than a minute
                    </span>
</div>
</div>
</div>
</div>
{/*  Footer Decoration  */}
</main>

    </>
  );
}
