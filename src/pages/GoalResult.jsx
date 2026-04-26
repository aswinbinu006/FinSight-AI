import { Link } from 'react-router-dom';
import './GoalResult.css';

export default function GoalResult() {


  return (
    <>

{/*  SideNavBar: Rail Implementation from SCREEN_111  */}
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
{/*  Functionally positioned Toggle Arrow below brand logo  */}
<label className="w-10 h-10 flex items-center justify-center text-teal-600/60 hover:text-teal-800 bg-teal-100/30 rounded-xl cursor-pointer transition-colors" htmlFor="sidebar-toggle" title="Toggle Sidebar">
<span className="material-symbols-outlined expand-icon transition-transform duration-300">chevron_right</span>
</label>
</div>
{/*  Navigation Tabs  */}
<nav className="flex flex-col gap-3 items-center w-full">
<button className="nav-item w-12 h-12 flex items-center justify-center text-teal-600/60 hover:text-teal-800 hover:bg-teal-100/50 rounded-2xl transition-all duration-300 active:scale-95 group relative" title="Dashboard">
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
<button className="nav-item active w-12 h-12 flex items-center justify-center rounded-2xl transition-all duration-300" title="Goal Intelligence">
<span className="material-symbols-outlined">ads_click</span>
<span className="nav-label font-medium text-sm">Goal Intelligence</span>
</button>
<button className="nav-item w-12 h-12 flex items-center justify-center text-teal-600/60 hover:text-teal-800 hover:bg-teal-100/50 rounded-2xl transition-all duration-300 active:scale-95" title="AI Co-Pilot">
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
{/*  Main Content Area  */}
<main className="flex-1 ml-24 p-8 transition-all duration-300">
{/*  TopNavBar: Mirrored from SCREEN_111 without search  */}
<header className="w-full h-16 flex justify-between items-center mb-8">
<div className="flex items-center gap-8">
<h1 className="text-2xl font-bold tracking-tight text-on-surface">Goal Intelligence</h1>
</div>
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
{/*  Content Integration into High-Density Grid System  */}
<div className="grid grid-cols-12 gap-8">
{/*  Main Content Area (Left 8 columns)  */}
<div className="col-span-12 lg:col-span-8 flex flex-col gap-8">
{/*  Summary Row  */}
<div className="grid grid-cols-3 gap-6">
{/*  Probability Card  */}
<div className="bg-surface-container-lowest p-6 rounded-xl shadow-[0_4px_12px_rgba(15,23,42,0.03)] border border-outline-variant/5 intelligence-ray">
<div className="flex justify-between items-start mb-4">
<span className="text-[10px] font-medium uppercase tracking-widest text-on-surface-variant">Success Probability</span>
</div>
<div className="text-4xl font-extrabold text-on-surface tracking-tighter">42%</div>
<div className="mt-2 flex items-center gap-1">
<span className="material-symbols-outlined text-sm text-error">trending_down</span>
<span className="text-xs font-semibold text-error">-8% vs last week</span>
</div>
</div>
{/*  Risk Level Card  */}
<div className="bg-surface-container-lowest p-6 rounded-xl shadow-[0_4px_12px_rgba(15,23,42,0.03)] border border-outline-variant/5">
<div className="flex justify-between items-start mb-4">
<span className="text-[10px] font-medium uppercase tracking-widest text-on-surface-variant">Risk Level</span>
</div>
<div className="flex flex-col gap-2">
<span className="inline-flex w-fit px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-xs font-bold">Medium</span>
<span className="text-[11px] text-on-surface-variant italic leading-tight">Standard volatility range</span>
</div>
</div>
{/*  Synthesis Card  */}
<div className="bg-surface-container-lowest p-6 rounded-xl shadow-[0_4px_12px_rgba(15,23,42,0.03)] border border-outline-variant/5">
<div className="flex justify-between items-start mb-4">
<span className="text-[10px] font-medium uppercase tracking-widest text-on-surface-variant">Synthesis</span>
</div>
<p className="text-[11px] text-on-surface-variant leading-relaxed">
                        Current capital allocation speed lags behind target by 12.4%. Strategy adjustment required to recover trajectory before Q4.
                    </p>
</div>
</div>
{/*  Capital Trajectory Card (Centerpiece)  */}
<div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_4px_12px_rgba(15,23,42,0.03)] border border-outline-variant/5">
<div className="flex justify-between items-end mb-8">
<div>
<h2 className="text-xl font-bold tracking-tight text-on-surface">Capital Trajectory</h2>
<p className="text-sm text-on-surface-variant mt-1">Expected vs. Actual performance analysis</p>
</div>
<div className="flex gap-4">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-primary-container"></div>
<span className="text-[10px] font-medium text-on-surface-variant">Expected</span>
</div>
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-primary"></div>
<span className="text-[10px] font-medium text-on-surface-variant">Actual</span>
</div>
</div>
</div>
{/*  Graph Visual Integration  */}
<div className="h-80 w-full bg-surface-container-low rounded-xl relative overflow-hidden flex flex-col justify-center items-center group">
<div className="absolute inset-0 opacity-40">
<svg className="w-full h-full" preserveaspectratio="none" viewbox="0 0 800 300">
<path d="M0 250 Q 200 240, 400 150 T 800 50" fill="none" stroke="#14b8a6" strokeWidth="2"></path>
<path d="M0 250 Q 200 260, 400 220 T 700 180" fill="none" stroke="#006b5f" strokeDasharray="8 4" strokeWidth="3"></path>
</svg>
</div>
<div className="text-center z-10 p-6 glass-panel rounded-xl border border-white/20 shadow-sm">
<span className="material-symbols-outlined text-primary text-3xl mb-2" data-icon="query_stats">query_stats</span>
<p className="text-sm font-semibold text-on-surface">Predictive Analysis Active</p>
<p className="text-[10px] text-on-surface-variant mt-1 font-medium">Premium models updated 4m ago</p>
</div>
</div>
</div>
{/*  Bottom Row: Risks and Potential  */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
{/*  Primary Risks  */}
<div className="bg-surface-container-lowest p-6 rounded-xl shadow-[0_4px_12px_rgba(15,23,42,0.03)] border-l-4 border-error/50">
<h3 className="text-sm font-bold text-on-surface mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-error text-xl">warning</span>
                        PRIMARY RISKS
                    </h3>
<ul className="space-y-5">
<li className="flex justify-between items-center group cursor-default border-b border-outline-variant/5 pb-2">
<span className="text-xs font-medium text-on-surface-variant group-hover:text-on-surface transition-colors">Irregular savings rhythm</span>
<span className="text-[9px] font-bold text-error uppercase px-2 py-0.5 bg-error-container rounded">High</span>
</li>
<li className="flex justify-between items-center group cursor-default border-b border-outline-variant/5 pb-2">
<span className="text-xs font-medium text-on-surface-variant group-hover:text-on-surface transition-colors">Exceeding spending ceiling</span>
<span className="text-[9px] font-bold text-on-secondary-container uppercase px-2 py-0.5 bg-secondary-container rounded">Med</span>
</li>
</ul>
</div>
{/*  Success Potential  */}
<div className="bg-surface-container-lowest p-6 rounded-xl shadow-[0_4px_12px_rgba(15,23,42,0.03)] border-l-4 border-primary-container/50">
<h3 className="text-sm font-bold text-on-surface mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-primary-container text-xl">auto_awesome</span>
                        SUCCESS POTENTIAL
                    </h3>
<div className="space-y-4">
<div className="group">
<div className="flex justify-between text-xs font-medium mb-2">
<span className="text-on-surface-variant">Tax Efficiency</span>
<span className="text-primary font-bold">+14% Impact</span>
</div>
<div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
<div className="bg-primary-container h-full w-[75%] rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</div>
{/*  Right Panel: Strategy & Feed  */}
<div className="col-span-12 lg:col-span-4 flex flex-col gap-8">
<div className="bg-surface-container-high/40 p-6 rounded-2xl backdrop-blur-sm sticky top-24 border border-outline-variant/5 flex flex-col h-full">
<div className="flex items-center gap-2 mb-6">
<span className="material-symbols-outlined text-primary-container" style={{"fontVariationSettings":"'FILL' 1"}}>psychology</span>
<h2 className="text-xl font-bold tracking-tight text-on-surface">Improvement Strategy</h2>
</div>
<div className="space-y-4 flex-1">
{/*  Action Item 1  */}
<div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm intelligence-ray group hover:translate-x-1 transition-transform cursor-pointer">
<div className="flex items-start gap-3">
<div className="w-8 h-8 rounded-lg bg-primary-container/10 text-primary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-lg">savings</span>
</div>
<div>
<p className="text-sm font-bold text-on-surface">Increase monthly savings</p>
<p className="text-[11px] text-on-surface-variant mt-1 leading-relaxed">Adjust automated transfers to $1,200/mo to offset last month's deficit.</p>
<div className="mt-3 flex items-center gap-2">
<span className="text-[9px] font-bold bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded uppercase">Finance</span>
<span className="text-[9px] text-on-surface-variant font-medium italic">Priority: Critical</span>
</div>
</div>
</div>
</div>
{/*  Action Item 2  */}
<div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm intelligence-ray group hover:translate-x-1 transition-transform cursor-pointer">
<div className="flex items-start gap-3">
<div className="w-8 h-8 rounded-lg bg-primary-container/10 text-primary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-lg">rebase_edit</span>
</div>
<div>
<p className="text-sm font-bold text-on-surface">Rebalance Aggressive Assets</p>
<p className="text-[11px] text-on-surface-variant mt-1 leading-relaxed">System suggests moving 5% of tech equity into index funds to lower risk score.</p>
<div className="mt-3 flex items-center gap-2">
<span className="text-[9px] font-bold bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded uppercase">Portfolio</span>
<span className="text-[9px] text-on-surface-variant font-medium italic">Priority: High</span>
</div>
</div>
</div>
</div>
{/*  Action Item 3  */}
<div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm intelligence-ray group hover:translate-x-1 transition-transform cursor-pointer">
<div className="flex items-start gap-3">
<div className="w-8 h-8 rounded-lg bg-primary-container/10 text-primary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-lg">receipt_long</span>
</div>
<div>
<p className="text-sm font-bold text-on-surface">Audit Recurring Expenses</p>
<p className="text-[11px] text-on-surface-variant mt-1 leading-relaxed">4 inactive subscriptions detected totaling $184/month.</p>
<div className="mt-3 flex items-center gap-2">
<span className="text-[9px] font-bold bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded uppercase">Audit</span>
<span className="text-[9px] text-on-surface-variant font-medium italic">Priority: Medium</span>
</div>
</div>
</div>
</div>
</div>
<div className="mt-8">
<button className="w-full py-4 border border-outline/20 text-on-surface-variant text-xs font-bold rounded-xl bg-surface-container-lowest hover:bg-surface-container transition-colors shadow-sm uppercase tracking-wider">
                        Export Intelligence Report
                    </button>
<button className="w-full mt-4 py-4 px-6 rounded-xl bg-gradient-to-r from-primary to-primary-container text-white font-bold text-sm shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform active:scale-95 flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-lg">auto_awesome</span>
                        Ask Co-Pilot
                    </button>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
