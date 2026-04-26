import { Link } from 'react-router-dom';
import './NotificationPopup.css';

export default function NotificationPopup() {


  return (
    <>

{/*  Overlay for Dimming/Blur  */}
<input className="hidden peer" id="notification-toggle" type="checkbox"/>
<div className="fixed inset-0 bg-black/10 backdrop-blur-[1px] z-[60] hidden pointer-events-auto" id="notification-overlay" onClick="document.getElementById('notification-toggle').checked = false"></div>
{/*  Floating Side Rail Navigation  */}
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
<button className="w-12 h-12 flex items-center justify-center rounded-2xl bg-[#006b5f] text-white shadow-xl shadow-[#006b5f]/20">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>dashboard</span>
</button>
<button className="w-12 h-12 flex items-center justify-center text-[#006b5f]/50 hover:text-[#006b5f] hover:bg-white rounded-2xl transition-all">
<span className="material-symbols-outlined">monitor_heart</span>
</button>
<button className="w-12 h-12 flex items-center justify-center text-[#006b5f]/50 hover:text-[#006b5f] hover:bg-white rounded-2xl transition-all">
<span className="material-symbols-outlined">delete_outline</span>
</button>
<button className="w-12 h-12 flex items-center justify-center text-[#006b5f]/50 hover:text-[#006b5f] hover:bg-white rounded-2xl transition-all">
<span className="material-symbols-outlined">ads_click</span>
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
<main className="flex-1 ml-24 p-10 transition-all duration-500 relative">
{/*  Streamlined Header  */}
<header className="w-full h-16 flex justify-between items-center mb-12 relative z-[75]">
<div className="relative w-full max-w-xl">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant/40">search</span>
<input className="w-full h-12 pl-12 pr-4 bg-[#F0F5F4] rounded-xl border-none focus:ring-1 focus:ring-primary/20 text-sm font-medium text-on-surface placeholder:text-on-surface-variant/40" placeholder="Search portfolios, assets, or intelligence..." type="text"/>
</div>
<div className="flex items-center gap-4 relative">
<label className="relative p-2 text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors cursor-pointer notification-badge" htmlFor="notification-toggle">
<span className="material-symbols-outlined">notifications</span>
</label>
<button className="p-2 text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors">
<span className="material-symbols-outlined">help_outline</span>
</button>
<div className="h-10 w-10 rounded-full bg-surface-container-highest overflow-hidden ml-2 ring-4 ring-white shadow-sm">
<img alt="User" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkwsQQmnSZb7KCWk7jycz5bErIpotJIEl8vvU0KuWhZXWWtrsz-UcyZM36ayMhnAmT6FFW-wHX1S5wjGrFDgru0RDk__pHEmST9wn-eBLyXu4t2adSw_aQmm18zFGm8ZDQdzotZRH8D8Hn4iWLvtfgAqYEZ5SrNL7LDQms9-GUMe-dlbT8GEdQHx3uiAOMXoSq8x_vf9XE5DcTMcw3RvlckR0iqBaqFG84VrqVnMiAU1JCHHnDwV3W6b_2NwMVbQPND4wlzYgw7hBK"/>
</div>
{/*  Notification Popover - Nested for Positioning  */}
<div className="absolute right-0 top-14 w-96 bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] z-[80] opacity-0 invisible transition-all duration-300 transform -translate-y-4 scale-95 border border-outline-variant/10 overflow-hidden" id="notification-popover">
<div className="p-6 border-b border-outline-variant/5 flex justify-between items-center">
<h3 className="font-bold text-on-surface text-base">Intelligence Alerts</h3>
<button className="text-xs font-bold text-primary hover:underline">Mark all as read</button>
</div>
<div className="max-h-[400px] overflow-y-auto">
{/*  Health Alert  */}
<div className="p-4 hover:bg-surface-container-lowest transition-colors flex gap-4 border-b border-outline-variant/5">
<div className="w-10 h-10 rounded-full bg-error/10 flex items-center justify-center flex-shrink-0">
<span className="material-symbols-outlined text-error text-xl">warning</span>
</div>
<div className="flex-1">
<p className="text-sm font-semibold text-on-surface leading-tight">Spending increased by 14% this week</p>
<p className="text-xs text-on-surface-variant mt-1">Health Score may be affected by atypical outflow in operations.</p>
<p className="text-[10px] text-on-surface-variant/60 mt-2 font-medium">Just now</p>
</div>
<div className="flex flex-col gap-2">
<button className="px-3 py-1 bg-surface text-[10px] font-bold rounded-lg border border-outline-variant/10 hover:bg-surface-container">Review</button>
</div>
</div>
{/*  Waste Alert  */}
<div className="p-4 hover:bg-surface-container-lowest transition-colors flex gap-4 border-b border-outline-variant/5">
<div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
<span className="material-symbols-outlined text-primary text-xl">info</span>
</div>
<div className="flex-1">
<p className="text-sm font-semibold text-on-surface leading-tight">Interest rate threshold reached in Portfolio B</p>
<p className="text-xs text-on-surface-variant mt-1">Target yield met. Consider rebalancing to capture gains.</p>
<p className="text-[10px] text-on-surface-variant/60 mt-2 font-medium">15 minutes ago</p>
</div>
<div className="flex flex-col gap-2">
<button className="px-3 py-1 bg-primary text-white text-[10px] font-bold rounded-lg hover:bg-primary/90">Action</button>
</div>
</div>
{/*  Goal Risk Alert  */}
<div className="p-4 hover:bg-surface-container-lowest transition-colors flex gap-4">
<div className="w-10 h-10 rounded-full bg-error/10 flex items-center justify-center flex-shrink-0">
<span className="material-symbols-outlined text-error text-xl">warning_amber</span>
</div>
<div className="flex-1">
<p className="text-sm font-semibold text-on-surface leading-tight">Goal Success Probability dropped to 38%</p>
<p className="text-xs text-on-surface-variant mt-1">Premium portfolio 'Alpha' volatility risk detected.</p>
<p className="text-[10px] text-on-surface-variant/60 mt-2 font-medium">1 hour ago</p>
</div>
</div>
</div>
<div className="p-4 bg-surface-container-lowest text-center">
<button className="text-xs font-bold text-on-surface-variant hover:text-on-surface">View all notification history</button>
</div>
</div>
</div>
</header>
{/*  Dashboard Content Wrapper for Blur Effect  */}
<div className="grid grid-cols-12 gap-10 transition-all duration-500" id="dashboard-content">
{/*  Main Stats & Charts  */}
<div className="col-span-12 lg:col-span-8 space-y-10">
{/*  Top Summary Cards  */}
<div className="grid grid-cols-3 gap-6">
<div className="bg-white p-8 rounded-[2rem] shadow-sm border border-outline-variant/10">
<div className="flex justify-between items-center mb-6">
<span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Health Score</span>
<span className="material-symbols-outlined text-[#006b5f]">favorite</span>
</div>
<div className="text-4xl font-extrabold tracking-tight text-on-surface">94.2</div>
<div className="mt-3 flex items-center gap-1 text-[#006b5f]">
<span className="material-symbols-outlined text-sm">trending_up</span>
<span className="text-xs font-bold">+2.4% vs last mo</span>
</div>
</div>
<div className="bg-white p-8 rounded-[2rem] shadow-sm border border-outline-variant/10">
<div className="flex justify-between items-center mb-6">
<span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Goal Status</span>
<span className="material-symbols-outlined text-[#505f76]">flag</span>
</div>
<div className="text-4xl font-extrabold tracking-tight text-on-surface">88%</div>
<div className="mt-4 w-full bg-[#F0F5F4] h-1.5 rounded-full overflow-hidden">
<div className="bg-[#95a5be] h-full w-[88%]"></div>
</div>
</div>
<div className="bg-white p-8 rounded-[2rem] shadow-sm border border-outline-variant/10">
<div className="flex justify-between items-center mb-6">
<span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Waste Recovery</span>
<span className="material-symbols-outlined text-error">savings</span>
</div>
<div className="text-4xl font-extrabold tracking-tight text-on-surface">₹1,240</div>
<div className="mt-3 text-xs font-bold text-on-surface-variant/60">Potential leakage identified</div>
</div>
</div>
{/*  Performance Graph  */}
<div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-outline-variant/10">
<div className="flex justify-between items-end mb-12">
<div>
<h2 className="text-2xl font-extrabold tracking-tight text-on-surface">30-Day Financial Performance</h2>
<p className="text-sm text-on-surface-variant/60 mt-1">Consolidated view across Premium portfolios</p>
</div>
<div className="bg-[#F0F5F4] p-1 rounded-xl flex gap-1">
<button className="px-4 py-2 text-xs font-bold bg-white text-on-surface rounded-lg shadow-sm">Month</button>
<button className="px-4 py-2 text-xs font-bold text-on-surface-variant/60 hover:text-on-surface">Quarter</button>
</div>
</div>
<div className="h-64 relative flex items-end gap-3 px-4 border-b border-outline-variant/10 pb-2">
<div className="flex-1 bg-[#E1EDEB] rounded-t-xl h-[40%]"></div>
<div className="flex-1 bg-[#E1EDEB] rounded-t-xl h-[55%]"></div>
<div className="flex-1 bg-[#E1EDEB] rounded-t-xl h-[48%]"></div>
<div className="flex-1 bg-[#E1EDEB] rounded-t-xl h-[65%]"></div>
<div className="flex-1 bg-[#E1EDEB] rounded-t-xl h-[72%]"></div>
<div className="flex-1 bg-[#006b5f] rounded-t-xl h-[85%] relative shadow-lg shadow-[#006b5f]/20">
<div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-on-background text-white text-[10px] font-bold px-3 py-1.5 rounded-lg">₹1.42L</div>
</div>
<div className="flex-1 bg-[#E1EDEB] rounded-t-xl h-[60%]"></div>
<div className="flex-1 bg-[#E1EDEB] rounded-t-xl h-[50%]"></div>
<div className="flex-1 bg-[#E1EDEB] rounded-t-xl h-[45%]"></div>
<div className="flex-1 bg-[#E1EDEB] rounded-t-xl h-[55%]"></div>
</div>
<div className="flex justify-between mt-6 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/40">
<span>May 01</span>
<span>May 07</span>
<span>May 14</span>
<span>May 21</span>
<span>May 30</span>
</div>
</div>
{/*  Bottom Patterns Row  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="bg-white p-8 rounded-[2rem] border border-outline-variant/10 shadow-sm">
<div className="flex items-center gap-3 mb-6">
<span className="material-symbols-outlined text-primary">pie_chart</span>
<h3 className="text-xs font-black text-on-surface uppercase tracking-[0.2em]">Spending</h3>
</div>
<div className="space-y-5">
<div className="group">
<div className="flex justify-between text-[11px] font-bold mb-2 uppercase tracking-wide">
<span className="text-on-surface-variant">Operations</span>
<span className="text-on-surface">42%</span>
</div>
<div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
<div className="bg-primary h-full w-[42%]"></div>
</div>
</div>
<div className="group">
<div className="flex justify-between text-[11px] font-bold mb-2 uppercase tracking-wide">
<span className="text-on-surface-variant">Logistics</span>
<span className="text-on-surface">28%</span>
</div>
<div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
<div className="bg-[#dae2fd] h-full w-[28%]"></div>
</div>
</div>
</div>
</div>
<div className="bg-white p-8 rounded-[2rem] border border-outline-variant/10 shadow-sm flex flex-col items-center">
<div className="flex items-center gap-3 mb-6 w-full">
<span className="material-symbols-outlined text-teal-600">bolt</span>
<h3 className="text-xs font-black text-on-surface uppercase tracking-[0.2em]">Streak</h3>
</div>
<div className="relative w-24 h-24 mb-4">
<svg className="w-full h-full -rotate-90">
<circle className="text-[#F0F5F4]" cx="48" cy="48" fill="none" r="42" stroke="currentColor" strokeWidth="8"></circle>
<circle className="text-primary" cx="48" cy="48" fill="none" r="42" stroke="currentColor" strokeDasharray="264" strokeDashoffset="21" strokeLinecap="round" strokeWidth="8"></circle>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="text-2xl font-black text-on-surface">92%</span>
</div>
</div>
<span className="text-[10px] font-black text-primary uppercase">12 Day Streak</span>
</div>
<div className="bg-white p-8 rounded-[2rem] border border-outline-variant/10 shadow-sm">
<div className="flex items-center gap-3 mb-6">
<span className="material-symbols-outlined text-secondary">analytics</span>
<h3 className="text-xs font-black text-on-surface uppercase tracking-[0.2em]">Market</h3>
</div>
<div className="bg-[#F0F5F4] p-4 rounded-2xl mb-4">
<p className="text-[11px] font-bold text-on-surface leading-snug">S&amp;P 500 Variance is currently <span className="text-primary">+0.82%</span></p>
</div>
<button className="text-[10px] font-black text-secondary uppercase hover:underline flex items-center gap-1">Full Report <span className="material-symbols-outlined text-[12px]">open_in_new</span></button>
</div>
</div>
</div>
{/*  Right Intelligence Sidebar  */}
<div className="col-span-12 lg:col-span-4">
<div className="bg-[#F0F5F4]/50 p-8 rounded-[2.5rem] sticky top-24 border border-white/50 backdrop-blur-xl">
<div className="flex items-center gap-3 mb-8">
<span className="material-symbols-outlined text-primary-container" style={{"fontVariationSettings":"'FILL' 1"}}>psychology</span>
<h2 className="text-xl font-extrabold tracking-tight text-on-surface">Intelligence</h2>
</div>
<div className="space-y-6">
<div className="bg-white p-6 rounded-3xl shadow-sm intelligence-ray hover:translate-x-1 transition-transform cursor-pointer border border-outline-variant/5">
<span className="text-[9px] font-black uppercase tracking-widest text-primary mb-2 block">Anomaly Detected</span>
<p className="text-sm font-bold text-on-surface leading-tight">Subscriptions up 12%</p>
<p className="text-xs text-on-surface-variant/70 mt-2 leading-relaxed">System identified 3 duplicate recurring payments.</p>
</div>
<div className="bg-white p-6 rounded-3xl shadow-sm intelligence-ray hover:translate-x-1 transition-transform cursor-pointer border border-outline-variant/5">
<span className="text-[9px] font-black uppercase tracking-widest text-[#505f76] mb-2 block">Optimization</span>
<p className="text-sm font-bold text-on-surface leading-tight">Yield Max Potential</p>
<p className="text-xs text-on-surface-variant/70 mt-2 leading-relaxed">Shift ₹50,000 for an extra 1.2% APY in Portfolio B.</p>
</div>
{/*  Visual Asset Map  */}
<div className="mt-8 rounded-3xl overflow-hidden h-40 relative group border border-white">
<img alt="Map" className="w-full h-full object-cover grayscale opacity-30 group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXR2FNBRs18-8gO582EghnpvYLXf0IUuBmamsXqT9Lv1hpIeKbVenPK5w5a3Vv7vhvMB22RsRATNiPkQR6l6K3WDfl9cOkkJnm0Pow3_el4dNukCjOCxZNjx6defel3Zqiz6oGUpqxxRlptylU93EVJOPqcabUMdc1BsTHLPU_quYX-Fg4_mF-wVj-rcx7FJryUa1_PaImXmQCUxzUw0IL9t45QtxmpvSCAMnmMFB9dFfvPgwBYLHpeHLEHzAQJ4dptq4MyTztoFqR"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#006b5f]/90 to-transparent flex flex-col justify-end p-6">
<span className="text-[10px] font-black text-white/70 uppercase tracking-widest mb-1">Global Assets</span>
<div className="flex justify-between items-center">
<span className="text-lg font-bold text-white">4 Regions Active</span>
<span className="material-symbols-outlined text-white">public</span>
</div>
</div>
</div>
</div>
<button className="w-full mt-10 py-5 px-8 rounded-3xl bg-[#006b5f] text-white font-bold text-sm shadow-2xl shadow-[#006b5f]/30 hover:shadow-[#006b5f]/40 hover:-translate-y-1 transition-all flex items-center justify-center gap-3">
<span className="material-symbols-outlined">auto_awesome</span>
                    Ask Co-Pilot
                </button>
</div>
</div>
</div>
</main>

    </>
  );
}
