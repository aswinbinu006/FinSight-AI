import { Link } from 'react-router-dom';
import './WasteMonthly.css';

export default function WasteMonthly() {


  return (
    <>

<input className="hidden peer" id="sidebar-toggle" type="checkbox"/>
<aside className="fixed left-4 top-4 bottom-4 w-20 rounded-3xl z-50 backdrop-blur-xl shadow-[0_4px_12px_rgba(15,23,42,0.03)] flex flex-col items-center py-8 justify-between overflow-hidden transition-all duration-300 bg-surface-container/95">
<div className="flex flex-col items-center gap-4 w-full">
<div className="flex flex-col items-center gap-1">
<div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-white shadow-lg">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>insights</span>
</div>
<span className="text-teal-800 font-semibold tracking-tighter text-[10px] mt-2 uppercase italic">FinSight</span>
</div>
<label className="w-10 h-10 flex items-center justify-center text-teal-600/60 hover:text-teal-800 bg-teal-100/30 rounded-xl cursor-pointer transition-colors" htmlFor="sidebar-toggle" title="Toggle Sidebar">
<span className="material-symbols-outlined expand-icon transition-transform duration-300">chevron_right</span>
</label>
</div>
<nav className="flex flex-col gap-3 items-center w-full">
<button className="nav-item w-12 h-12 flex items-center justify-center text-teal-600/60 hover:text-teal-800 hover:bg-teal-100/50 rounded-2xl transition-all duration-300 group relative" title="Dashboard">
<span className="material-symbols-outlined">dashboard</span>
<span className="nav-label font-medium text-sm">Dashboard</span>
</button>
<button className="nav-item active w-12 h-12 flex items-center justify-center rounded-2xl transition-all duration-300 group relative" title="Recovery">
<span className="material-symbols-outlined">recycling</span>
<span className="nav-label font-medium text-sm">Waste Recovery</span>
</button>
<button className="nav-item w-12 h-12 flex items-center justify-center text-teal-600/60 hover:text-teal-800 hover:bg-teal-100/50 rounded-2xl transition-all duration-300 active:scale-95" title="Portfolio">
<span className="material-symbols-outlined">account_balance</span>
<span className="nav-label font-medium text-sm">Portfolio</span>
</button>
<button className="nav-item w-12 h-12 flex items-center justify-center text-teal-600/60 hover:text-teal-800 hover:bg-teal-100/50 rounded-2xl transition-all duration-300 active:scale-95" title="Analytics">
<span className="material-symbols-outlined">equalizer</span>
<span className="nav-label font-medium text-sm">Analytics</span>
</button>
</nav>
<div className="flex flex-col gap-2 items-center w-full">
<button className="nav-item w-12 h-12 flex items-center justify-center text-teal-600/60 hover:text-teal-800 hover:bg-teal-100/50 rounded-2xl transition-all duration-300" title="Settings">
<span className="material-symbols-outlined">settings</span>
<span className="nav-label font-medium text-sm">Settings</span>
</button>
</div>
</aside>
<main className="flex-1 ml-24 p-8 transition-all duration-300">
<header className="w-full h-16 flex justify-between items-center mb-8">
<div className="flex items-center gap-8 flex-1 max-w-2xl">
<h1 className="text-2xl font-bold tracking-tight text-on-surface">Waste Recovery Analysis</h1>
</div>
<div className="flex items-center gap-6">
<div className="flex items-center gap-3">
<button className="p-2 text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors">
<span className="material-symbols-outlined">notifications</span>
</button>
<div className="h-10 w-10 rounded-full bg-surface-container-highest overflow-hidden ml-2 shadow-sm">
<img alt="User Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkwsQQmnSZb7KCWk7jycz5bErIpotJIEl8vvU0KuWhZXWWtrsz-UcyZM36ayMhnAmT6FFW-wHX1S5wjGrFDgru0RDk__pHEmST9wn-eBLyXu4t2adSw_aQmm18zFGm8ZDQdzotZRH8D8Hn4iWLvtfgAqYEZ5SrNL7LDQms9-GUMe-dlbT8GEdQHx3uiAOMXoSq8x_vf9XE5DcTMcw3RvlckR0iqBaqFG84VrqVnMiAU1JCHHnDwV3W6b_2NwMVbQPND4wlzYgw7hBK"/>
</div>
</div>
</div>
</header>
{/*  Tabs Navigation  */}
<div className="flex border-b border-outline-variant/30 mb-8">
<button className="px-6 py-3 text-sm font-bold uppercase tracking-widest tab-active transition-all">Monthly Wastage</button>
<button className="px-6 py-3 text-sm font-bold uppercase tracking-widest text-on-surface-variant hover:text-on-surface transition-all">Yearly Wastage</button>
</div>
<div className="grid grid-cols-12 gap-8">
<div className="col-span-12 lg:col-span-8 flex flex-col gap-8">
{/*  Hero Summary  */}
<div className="bg-gradient-to-br from-primary to-[#005048] rounded-2xl p-8 text-white relative overflow-hidden shadow-lg">
<div className="relative z-10 flex justify-between items-center">
<div>
<div className="flex items-center gap-2 mb-2 opacity-80">
<span className="material-symbols-outlined text-sm">info</span>
<span className="text-[10px] uppercase tracking-widest font-bold">Monthly Leakage Report</span>
</div>
<h3 className="text-4xl font-bold tracking-tight mb-3">You are wasting ₹1,200/month</h3>
<p className="text-primary-fixed/80 text-sm font-medium max-w-md">Yearly subscriptions are converted to monthly for comparison to identify immediate liquidity recovery opportunities.</p>
</div>
<div className="hidden md:block bg-white/10 p-6 rounded-2xl backdrop-blur-md">
<span className="text-[10px] uppercase font-bold text-primary-fixed block mb-1">Total Recovery Forecast</span>
<div className="text-3xl font-bold">₹14,400<span className="text-xs font-normal opacity-60 ml-1">/yr</span></div>
</div>
</div>
<div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
</div>
{/*  Subscription Management  */}
<div className="bg-surface-container-lowest p-8 rounded-2xl shadow-[0_4px_12px_rgba(15,23,42,0.03)] border border-outline-variant/5">
<div className="flex justify-between items-center mb-6">
<h4 className="text-sm font-bold uppercase tracking-wider text-on-surface">Active Subscriptions</h4>
<span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-tighter">Showing 4 high-impact recurring items</span>
</div>
<div className="space-y-4">
{/*  Netflix  */}
<div className="flex items-center justify-between p-4 rounded-xl hover:bg-surface-container-low transition-colors border border-outline-variant/10">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center">
<img alt="Netflix" className="w-6 h-6 rounded" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIiyWm2tjeR5k_gmsCQQNY3BcE8Wz6ykBXiZL5LHpx3s56JG722_NDP6zxIsvLEvJ9d_LyFkOtgampg3v19cDP8tugzKC6wEEzJT0wOUcsahox5I2-EsBKhCsMTIUy03WndexSbqrjEsJT4cBvWncQFHMs1GKDpvHqKBx3M0p-EFeDE2eqhjAcgmalLaY8fpezbzQXiDZdJtdgeCdiK0Mjq1wfEIuvQbO5kIgeRi8bUFoZlRdE2l77uSeUkxBWzeck-51T2PgBsdza"/>
</div>
<div>
<div className="flex items-center gap-2">
<p className="font-bold text-on-surface text-sm">Netflix Premium</p>
<span className="text-[9px] px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant font-bold uppercase tracking-tighter">Monthly</span>
</div>
<p className="text-[10px] text-on-surface-variant">Standard Plan • Active</p>
</div>
</div>
<div className="flex items-center gap-6">
<div className="text-right">
<p className="font-bold text-on-surface text-sm">₹649/mo</p>
<span className="text-[9px] text-primary font-bold uppercase">High Utility</span>
</div>
<button className="px-4 py-2 text-xs font-bold text-on-surface hover:bg-surface-container rounded-lg transition-colors border border-outline-variant/20">Review</button>
</div>
</div>
{/*  Spotify  */}
<div className="flex items-center justify-between p-4 rounded-xl hover:bg-surface-container-low transition-colors border border-outline-variant/10">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center">
<img alt="Spotify" className="w-6 h-6 rounded" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAP2-eFqLaU88DVMeV47WTk2dmkvks9dnW5HR4tjsEYXmkS9FKKGJBwQhCXwEWvH0coI0l3d5y4aSvFNaSjO0b0D3MSVZXiiN31vw58WHZhCSTv3_ErfSxhbqM-C29yO9tT18oWBdn1ZFBjxcI-N5q8M3WSXNGFF6oSm35eHUoGz1hW8rzfm9unnPK_inI038p6EEYs4wQyzM7RIBunXn9mptw_hhndL9qtDU3cvkHGndx7rM0E4cvFJjUoPR3NXuGLrqW9Mmjlb_CA"/>
</div>
<div>
<div className="flex items-center gap-2">
<p className="font-bold text-on-surface text-sm">Spotify Family</p>
<span className="text-[9px] px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant font-bold uppercase tracking-tighter">Monthly</span>
</div>
<p className="text-[10px] text-on-surface-variant">Shared Plan • At Risk</p>
</div>
</div>
<div className="flex items-center gap-6">
<div className="text-right">
<p className="font-bold text-on-surface text-sm">₹179/mo</p>
<span className="text-[9px] text-amber-600 font-bold uppercase">Fair Utility</span>
</div>
<button className="px-4 py-2 text-xs font-bold text-on-surface hover:bg-surface-container rounded-lg transition-colors border border-outline-variant/20">Review</button>
</div>
</div>
{/*  Adobe  */}
<div className="flex items-center justify-between p-4 rounded-xl bg-error/5 border border-error/20">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-error-container/20 flex items-center justify-center">
<span className="material-symbols-outlined text-error text-xl">description</span>
</div>
<div>
<div className="flex items-center gap-2">
<p className="font-bold text-on-surface text-sm">Adobe Stock Portfolio</p>
<span className="text-[9px] px-1.5 py-0.5 rounded bg-error-container text-error font-bold uppercase tracking-tighter">Yearly</span>
</div>
<p className="text-[10px] text-on-surface-variant">Inactive since Oct '23</p>
</div>
</div>
<div className="flex items-center gap-6">
<div className="text-right">
<p className="font-bold text-on-surface text-sm">₹800/mo <span className="text-[8px] font-normal opacity-50 italic">avg</span></p>
<span className="text-[9px] text-error font-bold uppercase">Critical Waste</span>
</div>
<button className="px-4 py-2 text-xs font-bold text-error bg-error/10 hover:bg-error/20 rounded-lg transition-colors">Cancel</button>
</div>
</div>
{/*  Cloud  */}
<div className="flex items-center justify-between p-4 rounded-xl bg-error/5 border border-error/20">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-error-container/20 flex items-center justify-center">
<span className="material-symbols-outlined text-error text-xl">cloud_sync</span>
</div>
<div>
<div className="flex items-center gap-2">
<p className="font-bold text-on-surface text-sm">Cloud Storage Pro</p>
<span className="text-[9px] px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant font-bold uppercase tracking-tighter">Monthly</span>
</div>
<p className="text-[10px] text-on-surface-variant">Low Activity Usage</p>
</div>
</div>
<div className="flex items-center gap-6">
<div className="text-right">
<p className="font-bold text-on-surface text-sm">₹400/mo</p>
<span className="text-[9px] text-error font-bold uppercase">Low Utility</span>
</div>
<button className="px-4 py-2 text-xs font-bold text-error bg-error/10 hover:bg-error/20 rounded-lg transition-colors">Cancel</button>
</div>
</div>
</div>
</div>
{/*  Analytical Grid  */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
{/*  Cost vs Value  */}
<div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/10 shadow-sm">
<div className="flex items-center gap-2 mb-4">
<span className="material-symbols-outlined text-primary text-xl">analytics</span>
<h3 className="text-[10px] font-bold text-on-surface uppercase tracking-widest">Cost vs. Utility Value</h3>
</div>
<div className="space-y-4">
<div>
<div className="flex justify-between text-[10px] font-bold mb-1">
<span className="text-on-surface-variant uppercase tracking-tighter">Netflix</span>
<span className="text-primary uppercase tracking-tighter">92% Match</span>
</div>
<div className="h-1.5 w-full bg-surface-container rounded-full overflow-hidden">
<div className="h-full bg-primary" style={{"width":"92%"}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-[10px] font-bold mb-1">
<span className="text-on-surface-variant uppercase tracking-tighter">Spotify</span>
<span className="text-primary-container uppercase tracking-tighter">45% Match</span>
</div>
<div className="h-1.5 w-full bg-surface-container rounded-full overflow-hidden">
<div className="h-full bg-primary-container" style={{"width":"45%"}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-[10px] font-bold mb-1">
<span className="text-on-surface-variant uppercase tracking-tighter">Adobe Stock</span>
<span className="text-error uppercase tracking-tighter">12% Match</span>
</div>
<div className="h-1.5 w-full bg-surface-container rounded-full overflow-hidden">
<div className="h-full bg-error" style={{"width":"12%"}}></div>
</div>
</div>
</div>
</div>
{/*  Co-Pilot Promo  */}
<div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/10 shadow-sm flex flex-col justify-between">
<div>
<div className="flex items-center gap-2 mb-4">
<span className="material-symbols-outlined text-primary-container text-xl" style={{"fontVariationSettings":"'FILL' 1"}}>psychology</span>
<h3 className="text-[10px] font-bold text-on-surface uppercase tracking-widest">Co-Pilot Insight</h3>
</div>
<p className="text-xs font-medium text-on-surface leading-snug">Get a detailed review with AI Co-Pilot for an in-depth explanation of your wasteful spending and alternative providers.</p>
</div>
<button className="mt-4 py-2 px-4 rounded-lg bg-surface text-primary border border-primary/20 text-[10px] font-bold uppercase tracking-widest hover:bg-primary/5 transition-colors flex items-center justify-center gap-2">
                        Start Audit <span className="material-symbols-outlined text-xs">arrow_forward</span>
</button>
</div>
</div>
</div>
{/*  Right Panel: Intelligence Feed  */}
<div className="col-span-12 lg:col-span-4 flex flex-col gap-8">
<div className="bg-surface-container-high/40 p-6 rounded-2xl backdrop-blur-sm sticky top-24 border border-outline-variant/5">
<div className="flex items-center gap-2 mb-6">
<span className="material-symbols-outlined text-primary-container" style={{"fontVariationSettings":"'FILL' 1"}}>auto_awesome</span>
<h2 className="text-xl font-bold tracking-tight text-on-surface">Intelligence Feed</h2>
</div>
<div className="space-y-4">
<div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm intelligence-ray group hover:translate-x-1 transition-transform cursor-pointer">
<span className="text-[9px] font-bold uppercase tracking-widest text-primary mb-1 block">Optimization</span>
<p className="text-sm font-medium text-on-surface">Switch Adobe to Monthly</p>
<p className="text-xs text-on-surface-variant mt-2 leading-relaxed">Since usage is low, switching from yearly to monthly allows for seasonal cancellations, saving ₹3,200 annually.</p>
<button className="mt-3 text-xs font-bold text-primary flex items-center gap-1">
                            Apply Suggestion <span className="material-symbols-outlined text-xs">arrow_forward</span>
</button>
</div>
<div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm intelligence-ray group hover:translate-x-1 transition-transform cursor-pointer">
<span className="text-[9px] font-bold uppercase tracking-widest text-on-surface-variant mb-1 block">Usage Alert</span>
<p className="text-sm font-medium text-on-surface">Spotify Family Underutilized</p>
<p className="text-xs text-on-surface-variant mt-2 leading-relaxed">Only 2 of 6 slots are currently active. Consider switching to a Duo plan to save ₹30/month.</p>
</div>
<div className="mt-6 p-5 bg-gradient-to-br from-primary-container to-primary rounded-xl text-white relative overflow-hidden group">
<div className="relative z-10">
<span className="text-[9px] font-bold uppercase tracking-widest opacity-80 mb-2 block">Premium Analysis</span>
<p className="text-sm font-bold leading-tight mb-4">Identify shadow IT and duplicate subscriptions across all linked accounts.</p>
<button className="w-full py-2.5 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-lg text-xs font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-sm">psychology</span>
                                Ask Co-Pilot
                            </button>
</div>
<span className="material-symbols-outlined absolute -right-4 -bottom-4 text-8xl text-white/10 select-none">savings</span>
</div>
</div>
<div className="mt-8 pt-6 border-t border-outline-variant/10">
<button className="w-full py-4 text-sm font-bold text-on-surface-variant hover:text-primary transition-colors flex items-center justify-center gap-2">
<span className="material-symbols-outlined">download</span>
                        Export Detailed Audit Report
                    </button>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
