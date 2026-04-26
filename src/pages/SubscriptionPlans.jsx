import { Link } from 'react-router-dom';
import './SubscriptionPlans.css';

export default function SubscriptionPlans() {


  return (
    <>

{/*  SideNavBar: Rail Implementation  */}
<input className="hidden peer" id="sidebar-toggle" type="checkbox"/>
<aside className="fixed left-4 top-4 bottom-4 w-20 rounded-3xl z-50 flex flex-col items-center py-8 justify-between overflow-hidden transition-all duration-300 bg-surface-container/95 backdrop-blur-xl shadow-[0_4px_12px_rgba(15,23,42,0.03),0_2px_4px_rgba(15,23,42,0.02)]">
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
<button className="nav-item w-12 h-12 flex items-center justify-center rounded-2xl transition-all duration-300 group relative text-teal-600/60 hover:text-teal-800 hover:bg-teal-100/50" title="Dashboard">
<span className="material-symbols-outlined">dashboard</span>
<span className="nav-label font-medium text-sm">Dashboard</span>
</button>
<button className="nav-item w-12 h-12 flex items-center justify-center text-teal-600/60 hover:text-teal-800 hover:bg-teal-100/50 rounded-2xl transition-all duration-300 active:scale-95" title="Financial Health">
<span className="material-symbols-outlined">monitor_heart</span>
<span className="nav-label font-medium text-sm">Financial Health</span>
</button>
<button className="nav-item w-12 h-12 flex items-center justify-center text-teal-600/60 hover:text-teal-800 hover:bg-teal-100/50 rounded-2xl transition-all duration-300 active:scale-95" title="Waste Recovery">
<span className="material-symbols-outlined">delete_outline</span>
<span className="nav-label font-medium text-sm">Waste Recovery</span>
</button>
<button className="nav-item w-12 h-12 flex items-center justify-center text-teal-600/60 hover:text-teal-800 hover:bg-teal-100/50 rounded-2xl transition-all duration-300 active:scale-95" title="Goal Intelligence">
<span className="material-symbols-outlined">ads_click</span>
<span className="nav-label font-medium text-sm">Goal Intelligence</span>
</button>
<button className="nav-item w-12 h-12 flex items-center justify-center text-teal-600/60 hover:text-teal-800 hover:bg-teal-100/50 rounded-2xl transition-all duration-300 active:scale-95" title="AI Co-Pilot">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>psychology</span>
<span className="nav-label font-medium text-sm">AI Co-Pilot</span>
</button>
<button className="nav-item active w-12 h-12 flex items-center justify-center rounded-2xl transition-all duration-300 active:scale-95" title="Subscription">
<span className="material-symbols-outlined">payments</span>
<span className="nav-label font-medium text-sm">Subscription</span>
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
<main className="flex-1 ml-24 p-8 transition-all duration-300 min-h-screen flex flex-col">
{/*  TopNavBar  */}
<header className="w-full h-16 flex justify-end items-center mb-12">
<div className="flex items-center gap-6">
<div className="flex items-center gap-3">
<button className="p-2 text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="p-2 text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors">
<span className="material-symbols-outlined">help_outline</span>
</button>
<div className="h-10 w-10 rounded-full bg-surface-container-highest overflow-hidden ml-2 shadow-sm">
<img alt="User Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkwsQQmnSZb7KCWk7jycz5bErIpotJIEl8vvU0KuWhZXWWtrsz-UcyZM36ayMhnAmT6FFW-wHX1S5wjGrFDgru0RDk__pHEmST9wn-eBLyXu4t2adSw_aQmm18zFGm8ZDQdzotZRH8D8Hn4iWLvtfgAqYEZ5SrNL7LDQms9-GUMe-dlbT8GEdQHx3uiAOMXoSq8x_vf9XE5DcTMcw3RvlckR0iqBaqFG84VrqVnMiAU1JCHHnDwV3W6b_2NwMVbQPND4wlzYgw7hBK"/>
</div>
</div>
</div>
</header>
{/*  Content Area  */}
<div className="flex-grow flex flex-col items-center">
<div className="max-w-4xl w-full text-center mb-16">
<h2 className="text-4xl md:text-5xl font-extrabold text-on-surface tracking-tight mb-4">Choose your plan</h2>
<p className="text-lg text-on-surface-variant max-w-lg mx-auto">Unlock smarter financial decisions with our advanced wealth intelligence tools.</p>
</div>
<div className="max-w-5xl w-full grid md:grid-cols-2 gap-10 items-stretch px-4">
{/*  FREE PLAN  */}
<div className="bg-surface-container-lowest rounded-2xl p-10 flex flex-col border border-outline-variant/10 shadow-[0_4px_24px_rgba(15,23,42,0.03)] transition-all duration-300 hover:shadow-md">
<div className="mb-10">
<span className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant mb-3 block">Entry Tier</span>
<h3 className="text-3xl font-bold text-on-surface mb-2">Free</h3>
<div className="flex items-baseline gap-1">
<span className="text-5xl font-black text-on-surface">₹0</span>
</div>
</div>
<div className="flex-grow space-y-6 mb-12">
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary text-xl" data-icon="check_circle">check_circle</span>
<span className="text-on-surface-variant text-sm font-medium">Financial Health Score (full)</span>
</div>
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary text-xl" data-icon="check_circle">check_circle</span>
<span className="text-on-surface-variant text-sm font-medium">Waste labels only</span>
</div>
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary text-xl" data-icon="check_circle">check_circle</span>
<span className="text-on-surface-variant text-sm font-medium">1 Goal (no prediction)</span>
</div>
<div className="flex items-start gap-3 opacity-30">
<span className="material-symbols-outlined text-on-surface-variant text-xl" data-icon="lock">lock</span>
<span className="text-on-surface-variant text-sm font-medium">AI Co-Pilot (locked)</span>
</div>
</div>
<button className="w-full py-4 px-6 rounded-xl bg-surface-container-high text-on-surface font-bold text-sm transition-colors hover:bg-surface-dim uppercase tracking-wider">
                    Current Plan
                </button>
</div>
{/*  PRO PLAN  */}
<div className="relative bg-surface-container-lowest rounded-2xl p-10 flex flex-col border-2 border-primary/20 shadow-[0_24px_48px_-12px_rgba(0,107,95,0.15)] transform md:scale-105 z-10">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1.5 rounded-full shadow-lg">
<span className="text-[10px] font-bold uppercase tracking-widest">Recommended</span>
</div>
<div className="mb-10">
<span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-3 block">Premium Tier</span>
<h3 className="text-3xl font-bold text-on-surface mb-2">Pro</h3>
<div className="flex items-baseline gap-1">
<span className="text-5xl font-black text-on-surface">₹999</span>
<span className="text-on-surface-variant font-semibold text-sm">/month</span>
</div>
</div>
<div className="flex-grow space-y-6 mb-12">
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary text-xl" style={{"fontVariationSettings":"'FILL' 1"}}>check_circle</span>
<span className="text-on-surface font-semibold text-sm">Full Waste Recovery (actions + graph)</span>
</div>
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary text-xl" style={{"fontVariationSettings":"'FILL' 1"}}>check_circle</span>
<span className="text-on-surface font-semibold text-sm">Unlimited goals + prediction</span>
</div>
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary text-xl" style={{"fontVariationSettings":"'FILL' 1"}}>check_circle</span>
<span className="text-on-surface font-semibold text-sm">AI Co-Pilot (full access)</span>
</div>
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary text-xl" style={{"fontVariationSettings":"'FILL' 1"}}>check_circle</span>
<span className="text-on-surface font-semibold text-sm">Priority Premium Support</span>
</div>
</div>
<button className="w-full py-5 px-6 rounded-xl bg-gradient-to-r from-primary to-primary-container text-white font-black text-sm shadow-xl shadow-primary/20 hover:scale-[1.02] transition-all duration-300 uppercase tracking-widest">
                    Upgrade to Pro
                </button>
</div>
</div>
{/*  Coming Soon Section  */}
<div className="max-w-4xl w-full mt-32 text-center pb-20">
<div className="flex items-center justify-center gap-6 mb-8 opacity-20">
<div className="h-[1px] w-12 bg-on-surface-variant"></div>
<p className="text-[10px] uppercase tracking-[0.4em] font-bold text-on-surface-variant">Secure Protocols</p>
<div className="h-[1px] w-12 bg-on-surface-variant"></div>
</div>
<div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-20">
<span className="text-sm font-bold tracking-[0.25em] text-on-surface-variant/40">COMING SOON: ADVANCED WEALTH FEATURES</span>
<span className="hidden md:block w-1 h-1 rounded-full bg-on-surface-variant/20"></span>
<span className="text-sm font-bold tracking-[0.25em] text-on-surface-variant/40">PRIVATE WEALTH PROTOCOLS</span>
</div>
</div>
</div>
{/*  Footer  */}
<footer className="w-full py-12 mt-auto border-t border-outline-variant/10">
<div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface-variant/60">
                © 2024 FINSIGHT AI. PREMIUM WEALTH INTELLIGENCE.
            </div>
<div className="flex gap-8">
<a className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant/60 hover:text-primary transition-colors" href="#">Privacy</a>
<a className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant/60 hover:text-primary transition-colors" href="#">Terms</a>
<a className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant/60 hover:text-primary transition-colors" href="#">Security</a>
<a className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant/60 hover:text-primary transition-colors" href="#">Support</a>
</div>
</div>
</footer>
</main>

    </>
  );
}
