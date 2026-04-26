import { Link } from 'react-router-dom';
import './Notifications.css';

export default function Notifications() {


  return (
    <>

{/*  Floating Side Rail Navigation (Replica of SCREEN_313)  */}
<aside className="fixed left-6 top-6 bottom-6 w-20 rounded-[2.5rem] z-50 bg-[#F0F5F4] border border-white/40 shadow-[20px_0_40px_rgba(0,0,0,0.02)] flex flex-col items-center py-10 justify-between">
<div className="flex flex-col items-center gap-10 w-full">
{/*  Brand  */}
<div className="flex flex-col items-center gap-2">
<div className="w-12 h-12 rounded-2xl bg-[#006b5f] flex items-center justify-center text-white shadow-lg">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>architecture</span>
</div>
<span className="text-[#006b5f] font-bold tracking-widest text-[8px] uppercase">Architect</span>
</div>
{/*  Toggle  */}
<button className="w-10 h-10 flex items-center justify-center text-[#006b5f]/40 hover:text-[#006b5f] bg-white/50 rounded-xl transition-colors">
<span className="material-symbols-outlined">chevron_right</span>
</button>
{/*  Navigation Tabs  */}
<nav className="flex flex-col gap-6 items-center w-full mt-4">
<button className="w-12 h-12 flex items-center justify-center rounded-2xl text-[#006b5f]/50 hover:text-[#006b5f] hover:bg-white transition-all bg-[#006b5f] text-white shadow-xl shadow-[#006b5f]/20">
<span className="material-symbols-outlined">dashboard</span>
</button>
<button className="w-12 h-12 flex items-center justify-center text-[#006b5f]/50 hover:text-[#006b5f] hover:bg-white rounded-2xl transition-all">
<span className="material-symbols-outlined">monitor_heart</span>
</button>
<button className="w-12 h-12 flex items-center justify-center text-[#006b5f]/50 hover:text-[#006b5f] hover:bg-white rounded-2xl transition-all">
<span className="material-symbols-outlined">delete_outline</span>
</button>
<button className="w-12 h-12 flex items-center justify-center text-[#006b5f]/50 hover:text-[#006b5f] hover:bg-white rounded-2xl transition-all">
<span className="material-symbols-outlined">psychology</span>
</button>
<button className="w-12 h-12 flex items-center justify-center text-[#006b5f]/50 hover:text-[#006b5f] hover:bg-white rounded-2xl transition-all">
<span className="material-symbols-outlined">payments</span>
</button>
</nav>
</div>
{/*  Footer Settings  */}
<button className="w-12 h-12 flex items-center justify-center text-[#006b5f]/50 hover:text-[#006b5f] hover:bg-white rounded-2xl transition-all">
<span className="material-symbols-outlined">settings</span>
</button>
</aside>
{/*  Main Content Canvas  */}
<main className="flex-1 ml-32 p-10 transition-all duration-500 relative">
{/*  Match Header from SCREEN_313  */}
<header className="w-full h-16 flex justify-end items-center mb-12 relative z-[75]">
<div className="flex items-center gap-4 relative">
<button className="relative p-2 text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors cursor-pointer">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>notifications</span>
<span className="absolute top-2.5 right-2.5 w-2 h-2 bg-error rounded-full border-2 border-white"></span>
</button>
<button className="p-2 text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors">
<span className="material-symbols-outlined">help_outline</span>
</button>
<div className="h-10 w-10 rounded-full bg-surface-container-highest overflow-hidden ml-2 ring-4 ring-white shadow-sm">
<img alt="Alex Sterling" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQOW72b0wA0kB-zYprokTM-Ws-fQA8XvLmDBq5iCD2lqL0fc_X7dgpaYctEC8zxM27j_D3Trs2K2ZdfflTYKTXJJ-CMycBH93DapS-D4RBDqLeUDGRd6nnEWln47F1pSzQ_IXi0wfO3ROrwOXjJTNkoagPT_0TdgbKV1k0zVYBnLKtLwE7k4yrAmbPtykRegvwxFiB6UdD9HCmkKmg5dw2BLZ6QJGscl5Sdb1Usg3jNHESUh1vr4DUr_KprMyp6J5qDtkX3Hn5E4B4"/>
</div>
</div>
</header>
{/*  Notification Content in Structured Grid  */}
<div className="max-w-5xl mx-auto space-y-10" id="dashboard-content">
<div className="flex items-end justify-between px-2">
<div>
<h2 className="text-4xl font-extrabold tracking-tight text-on-surface">Notification History</h2>
<p className="text-sm text-on-surface-variant/60 mt-2">Manage your intelligent alerts and financial activity logs for Goal Architect.</p>
</div>
<button className="flex items-center gap-2 px-5 py-2.5 text-xs font-black uppercase tracking-widest text-error hover:bg-error-container/20 transition-all rounded-xl border border-error/10">
<span className="material-symbols-outlined text-lg">delete_sweep</span>
                    Clear All
                </button>
</div>
{/*  Notification List as High Density Grid Cards  */}
<div className="space-y-4">
{/*  Health Card  */}
<article className="intelligence-ray bg-white p-6 rounded-2xl shadow-sm border border-outline-variant/10 flex items-start gap-6 hover:translate-x-1 transition-all group">
<div className="w-12 h-12 rounded-xl bg-primary/10 flex-shrink-0 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-2xl">health_and_safety</span>
</div>
<div className="flex-1">
<div className="flex items-center justify-between mb-2">
<span className="text-[9px] font-black uppercase tracking-widest text-primary px-2.5 py-1 rounded-full bg-primary/5">Health</span>
<button className="text-on-surface-variant/30 hover:text-error transition-colors">
<span className="material-symbols-outlined text-xl">close</span>
</button>
</div>
<h3 className="text-lg font-bold text-on-surface group-hover:text-primary transition-colors">High Spending Detected</h3>
<p className="text-on-surface-variant/70 text-sm mt-1 leading-relaxed">AI analysis identifies a 24% increase in discretionary spending compared to your 3-month rolling average in the 'Dining &amp; Luxury' sector.</p>
<time className="text-[10px] font-bold text-on-surface-variant/40 mt-4 block uppercase tracking-wide">2 minutes ago</time>
</div>
</article>
{/*  Waste Card  */}
<article className="bg-white p-6 rounded-2xl shadow-sm border border-outline-variant/10 flex items-start gap-6 hover:translate-x-1 transition-all group">
<div className="w-12 h-12 rounded-xl bg-secondary-container/50 flex-shrink-0 flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-2xl">leak_remove</span>
</div>
<div className="flex-1">
<div className="flex items-center justify-between mb-2">
<span className="text-[9px] font-black uppercase tracking-widest text-on-secondary-container px-2.5 py-1 rounded-full bg-secondary-container">Waste</span>
<button className="text-on-surface-variant/30 hover:text-error transition-colors">
<span className="material-symbols-outlined text-xl">close</span>
</button>
</div>
<h3 className="text-lg font-bold text-on-surface">Subscription Waste Found</h3>
<p className="text-on-surface-variant/70 text-sm mt-1 leading-relaxed">Detected 3 overlapping premium data subscriptions with identical feature sets. Consolidating these could save $1,420/year.</p>
<time className="text-[10px] font-bold text-on-surface-variant/40 mt-4 block uppercase tracking-wide">1 hour ago</time>
</div>
</article>
{/*  Goal Card  */}
<article className="intelligence-ray bg-white p-6 rounded-2xl shadow-sm border border-outline-variant/10 flex items-start gap-6 hover:translate-x-1 transition-all group">
<div className="w-12 h-12 rounded-xl bg-error-container/30 flex-shrink-0 flex items-center justify-center text-error">
<span className="material-symbols-outlined text-2xl" style={{"fontVariationSettings":"'FILL' 1"}}>warning</span>
</div>
<div className="flex-1">
<div className="flex items-center justify-between mb-2">
<span className="text-[9px] font-black uppercase tracking-widest text-error px-2.5 py-1 rounded-full bg-error-container/40">Goal Risk</span>
<button className="text-on-surface-variant/30 hover:text-error transition-colors">
<span className="material-symbols-outlined text-xl">close</span>
</button>
</div>
<h3 className="text-lg font-bold text-on-surface">Goal at Risk</h3>
<p className="text-on-surface-variant/70 text-sm mt-1 leading-relaxed">Your 'Q4 Liquidity Reserve' target of $2.5M is currently 12% behind schedule due to market volatility in Treasury-linked assets.</p>
<time className="text-[10px] font-bold text-on-surface-variant/40 mt-4 block uppercase tracking-wide">5 hours ago</time>
</div>
</article>
{/*  Intelligence Card  */}
<article className="bg-white p-6 rounded-2xl shadow-sm border border-outline-variant/10 flex items-start gap-6 hover:translate-x-1 transition-all group">
<div className="w-12 h-12 rounded-xl bg-tertiary-container/20 flex-shrink-0 flex items-center justify-center text-tertiary">
<span className="material-symbols-outlined text-2xl">newspaper</span>
</div>
<div className="flex-1">
<div className="flex items-center justify-between mb-2">
<span className="text-[9px] font-black uppercase tracking-widest text-on-tertiary-container px-2.5 py-1 rounded-full bg-tertiary-container/30">Intelligence</span>
<button className="text-on-surface-variant/30 hover:text-error transition-colors">
<span className="material-symbols-outlined text-xl">close</span>
</button>
</div>
<h3 className="text-lg font-bold text-on-surface">Weekly Briefing Ready</h3>
<p className="text-on-surface-variant/70 text-sm mt-1 leading-relaxed">Your Premium summary for the week of Oct 12-18 is compiled. Highlights include optimized tax-loss harvesting opportunities.</p>
<time className="text-[10px] font-bold text-on-surface-variant/40 mt-4 block uppercase tracking-wide">Yesterday</time>
</div>
</article>
{/*  Health (Archived)  */}
<article className="bg-[#F0F5F4]/40 p-6 rounded-2xl border border-white flex items-start gap-6 group grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
<div className="w-12 h-12 rounded-xl bg-slate-200 flex-shrink-0 flex items-center justify-center text-slate-500">
<span className="material-symbols-outlined text-2xl">monitor_heart</span>
</div>
<div className="flex-1">
<div className="flex items-center justify-between mb-2">
<span className="text-[9px] font-black uppercase tracking-widest text-slate-500 px-2.5 py-1 rounded-full bg-slate-200">History</span>
<button className="text-on-surface-variant/30 hover:text-error transition-colors">
<span className="material-symbols-outlined text-xl">close</span>
</button>
</div>
<h3 className="text-lg font-bold text-slate-700">Portfolio Rebalancing Completed</h3>
<p className="text-on-surface-variant/70 text-sm mt-1 leading-relaxed">The AI has finished executing 12 trades to realign your Premium growth fund with the target risk profile of 7.2.</p>
<time className="text-[10px] font-bold text-on-surface-variant/40 mt-4 block uppercase tracking-wide">2 days ago</time>
</div>
</article>
</div>
</div>
</main>

    </>
  );
}
