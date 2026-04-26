import { Link } from 'react-router-dom';
import './CopilotDashboard.css';

export default function CopilotDashboard() {


  return (
    <>

{/*  Precision Architect Sidebar (Rail Implementation)  */}
<input className="hidden peer" id="sidebar-toggle" type="checkbox"/>
<aside className="fixed left-4 top-4 bottom-4 w-20 rounded-3xl z-50 dark:bg-teal-950/80 backdrop-blur-xl shadow-[0_4px_12px_rgba(15,23,42,0.03),0_2px_4px_rgba(15,23,42,0.02)] flex flex-col items-center py-8 justify-between overflow-hidden transition-all duration-300 bg-surface-container/95">
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
<button className="nav-item w-12 h-12 flex items-center justify-center text-teal-600/60 hover:text-teal-800 hover:bg-teal-100/50 rounded-2xl transition-all duration-300 group relative" title="Dashboard">
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
<button className="nav-item active w-12 h-12 flex items-center justify-center rounded-2xl transition-all duration-300 group relative" title="AI Co-Pilot">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>psychology</span>
<span className="nav-label font-medium text-sm">AI Co-Pilot</span>
</button>
<button className="nav-item w-12 h-12 flex items-center justify-center text-teal-600/60 hover:text-teal-800 hover:bg-teal-100/50 rounded-2xl transition-all duration-300 active:scale-95" title="Subscription">
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
<main className="flex-1 ml-24 p-8 transition-all duration-300">
{/*  TopNavBar  */}
<header className="w-full h-16 flex items-center mb-8 justify-end">
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
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
{/*  Left Column: Main Analytics  */}
<div className="lg:col-span-8 space-y-8">
{/*  Diagnosis Section  */}
<section className="intelligence-ray bg-surface-container-lowest p-8 rounded-xl shadow-sm">
<div className="flex items-start justify-between mb-3">
<span className="text-[10px] font-bold uppercase tracking-widest text-primary px-2 py-1 bg-primary-container/20 rounded">Critical Diagnosis</span>
<span className="text-xs text-on-surface-variant italic">Refreshed: Today, 09:12 AM</span>
</div>
<h1 className="text-diagnosis-hero text-on-surface tracking-tight">
                    Your financial health is deteriorating — subscription waste is directly killing your savings goal.
                </h1>
</section>
{/*  Key Metrics Row  */}
<section className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-surface-container-low p-6 rounded-xl flex items-center justify-between border border-transparent hover:border-outline-variant/20 transition-all">
<div>
<p className="text-[11px] font-medium uppercase tracking-wider text-on-surface-variant mb-1">Health Score</p>
<h2 className="text-3xl font-bold text-error">58</h2>
</div>
<div className="text-error flex flex-col items-end">
<span className="material-symbols-outlined text-3xl">south_east</span>
<span className="text-xs font-semibold">-4 pts</span>
</div>
</div>
<div className="bg-surface-container-low p-6 rounded-xl flex items-center justify-between border border-transparent hover:border-outline-variant/20 transition-all">
<div>
<p className="text-[11px] font-medium uppercase tracking-wider text-on-surface-variant mb-1">Monthly Waste</p>
<h2 className="text-3xl font-bold text-on-surface">₹1,945</h2>
</div>
<div className="w-10 h-10 rounded-full bg-error/10 flex items-center justify-center text-error">
<span className="material-symbols-outlined">leak_remove</span>
</div>
</div>
<div className="bg-surface-container-low p-6 rounded-xl flex items-center justify-between border border-transparent hover:border-outline-variant/20 transition-all">
<div>
<p className="text-[11px] font-medium uppercase tracking-wider text-on-surface-variant mb-1">Goal Success</p>
<h2 className="text-3xl font-bold text-primary">34%</h2>
</div>
<div className="w-16 h-2 bg-surface-container-highest rounded-full overflow-hidden">
<div className="bg-primary h-full w-[34%]"></div>
</div>
</div>
</section>
{/*  Actions Grid  */}
<section className="space-y-4">
<h3 className="text-card-title text-on-surface flex items-center gap-2">
<span className="material-symbols-outlined text-primary" style={{"fontVariationSettings":"'FILL' 1"}}>bolt</span>
                    Priority Actions
                </h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
{/*  Action 1  */}
<div className="bg-surface-container-lowest p-5 rounded-xl border border-transparent hover:shadow-md transition-all flex flex-col h-full">
<div className="flex justify-between items-start mb-4">
<span className="bg-error/10 text-error text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">Waste</span>
<span className="material-symbols-outlined text-on-surface-variant/40">cancel</span>
</div>
<h4 className="font-bold text-on-surface mb-2 text-body-standard">Cancel Spotify + Gym</h4>
<div className="space-y-2 mb-6">
<p className="text-sm text-on-surface-variant flex justify-between">Impact: <span className="text-on-surface font-semibold">₹1,619/mo</span></p>
<p className="text-sm text-on-surface-variant flex justify-between">Effect: <span className="text-primary font-bold">34% → 61%</span></p>
</div>
<button className="mt-auto w-full py-2 bg-surface-container-highest text-on-surface font-semibold text-xs rounded-lg hover:bg-primary hover:text-white transition-all">Execute via Co-Pilot</button>
</div>
{/*  Action 2  */}
<div className="bg-surface-container-lowest p-5 rounded-xl border border-transparent hover:shadow-md transition-all flex flex-col h-full">
<div className="flex justify-between items-start mb-4">
<span className="bg-secondary-container text-on-secondary-container text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">Health</span>
<span className="material-symbols-outlined text-on-surface-variant/40">rebase</span>
</div>
<h4 className="font-bold text-on-surface mb-2 text-body-standard">Rebalance Assets</h4>
<div className="space-y-2 mb-6">
<p className="text-sm text-on-surface-variant flex justify-between">Impact: <span className="text-on-surface font-semibold">-12% Volatility</span></p>
<p className="text-sm text-on-surface-variant flex justify-between">Effect: <span className="text-primary font-bold">+8 Health pts</span></p>
</div>
<button className="mt-auto w-full py-2 bg-surface-container-highest text-on-surface font-semibold text-xs rounded-lg hover:bg-primary hover:text-white transition-all">View Allocation</button>
</div>
{/*  Action 3  */}
<div className="bg-surface-container-lowest p-5 rounded-xl border border-transparent hover:shadow-md transition-all flex flex-col h-full">
<div className="flex justify-between items-start mb-4">
<span className="bg-primary-container/20 text-on-primary-container text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">Goal</span>
<span className="material-symbols-outlined text-on-surface-variant/40">auto_mode</span>
</div>
<h4 className="font-bold text-on-surface mb-2 text-body-standard">Automate Deposit</h4>
<div className="space-y-2 mb-6">
<p className="text-sm text-on-surface-variant flex justify-between">Impact: <span className="text-on-surface font-semibold">Consistency</span></p>
<p className="text-sm text-on-surface-variant flex justify-between">Effect: <span className="text-primary font-bold">61% → 71%</span></p>
</div>
<button className="mt-auto w-full py-2 bg-surface-container-highest text-on-surface font-semibold text-xs rounded-lg hover:bg-primary hover:text-white transition-all">Set Schedule</button>
</div>
</div>
</section>
{/*  Warning Banner  */}
<div className="py-3 px-6 bg-error/5 border-l-4 border-error text-error text-[15px] font-medium rounded-r-xl">
                Do not ignore Waste Recovery alerts — each unused subscription delays your goal by ~12 days.
            </div>
{/*  Impact Projection Chart Area  */}
<section className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/10 shadow-sm">
<h3 className="text-card-title text-on-surface mb-8">Quarterly Impact Projection</h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-end">
<div className="space-y-4">
<p className="text-[11px] font-bold uppercase tracking-widest text-on-surface-variant">Health Progression</p>
<div className="relative h-40 w-full flex items-end gap-2">
<div className="w-1/2 bg-surface-container-highest rounded-t-lg h-[58%]"></div>
<div className="w-1/2 bg-primary rounded-t-lg h-[74%] relative">
<span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-primary">74</span>
</div>
</div>
<div className="flex justify-between text-[10px] font-bold text-on-surface-variant">
<span>CURRENT (58)</span>
<span>PROJECTED</span>
</div>
</div>
<div className="space-y-4">
<p className="text-[11px] font-bold uppercase tracking-widest text-on-surface-variant">Goal Alignment</p>
<div className="relative h-40 w-full flex items-end gap-2">
<div className="w-1/2 bg-surface-container-highest rounded-t-lg h-[34%]"></div>
<div className="w-1/2 bg-primary-container rounded-t-lg h-[71%] relative">
<span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-on-primary-container">71%</span>
</div>
</div>
<div className="flex justify-between text-[10px] font-bold text-on-surface-variant">
<span>CURRENT (34%)</span>
<span>PROJECTED</span>
</div>
</div>
<div className="space-y-4">
<p className="text-[11px] font-bold uppercase tracking-widest text-on-surface-variant">Efficiency Gain</p>
<div className="relative h-40 w-full flex items-end gap-2">
<div className="w-1/2 bg-error/20 rounded-t-lg h-[90%] relative">
<span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-error">₹1,945</span>
</div>
<div className="w-1/2 bg-surface-container-highest rounded-t-lg h-[20%]"></div>
</div>
<div className="flex justify-between text-[10px] font-bold text-on-surface-variant">
<span>WASTE</span>
<span>MINIMIZED</span>
</div>
</div>
</div>
</section>
</div>
{/*  Right Column: Chat Assistant  */}
<aside className="lg:col-span-4 sticky top-24 self-start h-[calc(100vh-8rem)]">
<div className="bg-surface-container-lowest rounded-xl shadow-lg h-full flex flex-col border border-outline-variant/10">
<div className="p-6 border-b border-surface-container-highest flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>smart_toy</span>
</div>
<div>
<h3 className="text-body-standard font-bold text-on-surface">AI Co-Pilot</h3>
<span className="text-[10px] text-primary font-bold flex items-center gap-1">
<span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
                                ACTIVE ANALYST
                            </span>
</div>
</div>
<button className="text-on-surface-variant hover:text-on-surface"><span className="material-symbols-outlined">more_vert</span></button>
</div>
<div className="flex-1 overflow-y-auto p-6 space-y-6">
<div className="flex flex-col gap-2 max-w-[85%]">
<div className="bg-surface-container-low p-4 rounded-xl rounded-tl-none text-body-standard text-on-surface leading-relaxed">
                            Hello! I've analyzed your spending over the last 30 days. Your wealth velocity has slowed by 14% due to subscription bloat.
                        </div>
<span className="text-[10px] text-on-surface-variant/60 ml-2">Co-Pilot • 10:04 AM</span>
</div>
<div className="flex flex-col items-end gap-2 ml-auto max-w-[85%]">
<div className="bg-primary text-white p-4 rounded-xl rounded-tr-none text-body-standard shadow-md">
                            How much can I save if I cancel everything except internet?
                        </div>
<span className="text-[10px] text-on-surface-variant/60 mr-2">You • 10:05 AM</span>
</div>
<div className="flex flex-col gap-2 max-w-[85%]">
<div className="bg-surface-container-low p-4 rounded-xl rounded-tl-none text-body-standard text-on-surface leading-relaxed">
                            Total recovery would be <strong className="text-primary font-bold">₹2,480/month</strong>. Over a year, that's nearly ₹30,000—enough to fully fund your emergency deposit for Q3.
                        </div>
<span className="text-[10px] text-on-surface-variant/60 ml-2">Co-Pilot • 10:05 AM</span>
</div>
</div>
<div className="p-6 border-t border-surface-container-highest">
<div className="relative">
<input className="w-full bg-surface-container-low border-none rounded-xl py-4 pl-4 pr-12 text-body-standard focus:ring-2 focus:ring-primary/20 placeholder:text-on-surface-variant/50 text-on-surface" placeholder="Ask anything about your finances..." type="text"/>
<button className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-primary text-white rounded-lg flex items-center justify-center shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
<span className="material-symbols-outlined text-sm">send</span>
</button>
</div>
<div className="mt-4 flex flex-wrap gap-2">
<button className="text-[10px] font-bold text-on-surface-variant bg-surface-container-high px-2 py-1 rounded-md hover:bg-outline-variant/30 transition-colors">"Analyze Waste"</button>
<button className="text-[10px] font-bold text-on-surface-variant bg-surface-container-high px-2 py-1 rounded-md hover:bg-outline-variant/30 transition-colors">"Simulate Savings"</button>
</div>
</div>
</div>
</aside>
</div>
</main>
{/*  Visual Polish: Decorative Gradients  */}
<div className="fixed top-0 right-0 -z-10 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2"></div>
<div className="fixed bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-tertiary-container/5 rounded-full blur-3xl opacity-50 -translate-x-1/2 translate-y-1/2"></div>

    </>
  );
}
