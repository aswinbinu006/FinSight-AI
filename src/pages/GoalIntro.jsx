import { Link } from 'react-router-dom';
import './GoalIntro.css';

export default function GoalIntro() {


  return (
    <>

{/*  SideNavBar: Rail Implementation from SCREEN_75  */}
<input className="hidden peer" id="sidebar-toggle" type="checkbox"/>
<aside className="fixed left-4 top-4 bottom-4 w-20 rounded-3xl z-50 dark:bg-teal-950/80 backdrop-blur-xl shadow-[0_4px_12px_rgba(15,23,42,0.03),0_2px_4px_rgba(15,23,42,0.02)] flex flex-col items-center py-8 justify-between overflow-hidden transition-all duration-300 bg-surface-container/95">
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
<button className="nav-item active w-12 h-12 flex items-center justify-center rounded-2xl transition-all duration-300 active:scale-95" title="Goal Intelligence">
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
<div className="flex flex-col gap-2 items-center w-full">
<button className="nav-item w-12 h-12 flex items-center justify-center text-teal-600/60 hover:text-teal-800 hover:bg-teal-100/50 rounded-2xl transition-all duration-300" title="Settings">
<span className="material-symbols-outlined">settings</span>
<span className="nav-label font-medium text-sm">Settings</span>
</button>
</div>
</aside>
{/*  Main Content Canvas  */}
<main className="flex-1 ml-24 p-8 transition-all duration-300 flex flex-col">
{/*  TopNavBar Cluster from SCREEN_75  */}
<header className="w-full h-16 flex justify-end items-center mb-8">
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
{/*  Central Content: Intro Card  */}
<div className="flex-1 flex flex-col items-center justify-center">
<div className="w-full max-w-4xl bg-surface-container-lowest rounded-2xl shadow-[0_4px_24px_rgba(15,23,42,0.04)] border border-outline-variant/10 overflow-hidden">
<div className="p-8 md:p-16 text-center space-y-12">
{/*  Header Content  */}
<header className="space-y-4">
<h1 className="text-[28px] font-semibold text-on-surface tracking-tight leading-tight">
                        Know if you will reach your <br className="hidden md:block"/> financial goal
                    </h1>
<p className="text-on-surface-variant text-[16px] max-w-2xl mx-auto mt-6">AI-driven trajectory analysis to secure your future.</p>
</header>
{/*  Core Features Section  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-4">
<div className="group p-6 rounded-2xl bg-surface-container-low border border-outline-variant/5 hover:border-primary/20 hover:bg-white hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 flex flex-col items-center text-center">
<div className="w-14 h-14 rounded-2xl bg-primary-fixed-dim/20 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
<span className="material-symbols-outlined text-3xl">timeline</span>
</div>
<h3 className="text-[18px] font-medium text-on-surface mb-2">Trajectory Analysis</h3>
<p className="text-[15px] text-on-surface-variant leading-relaxed">Modeling your unique financial path with precision AI.</p>
</div>
<div className="group p-6 rounded-2xl bg-surface-container-low border border-outline-variant/5 hover:border-primary/20 hover:bg-white hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 flex flex-col items-center text-center">
<div className="w-14 h-14 rounded-2xl bg-primary-fixed-dim/20 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
<span className="material-symbols-outlined text-3xl">analytics</span>
</div>
<h3 className="text-[18px] font-medium text-on-surface mb-2">Probability Scoring</h3>
<p className="text-[15px] text-on-surface-variant leading-relaxed">Calculating real-time success chances for every goal.</p>
</div>
<div className="group p-6 rounded-2xl bg-surface-container-low border border-outline-variant/5 hover:border-primary/20 hover:bg-white hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 flex flex-col items-center text-center">
<div className="w-14 h-14 rounded-2xl bg-primary-fixed-dim/20 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
<span className="material-symbols-outlined text-3xl">security_update_good</span>
</div>
<h3 className="text-[18px] font-medium text-on-surface mb-2">Risk Mitigation</h3>
<p className="text-[15px] text-on-surface-variant leading-relaxed">Identifying and navigating potential financial hurdles.</p>
</div>
</div>
{/*  Call to Action Section  */}
<footer className="flex flex-col items-center gap-4 pt-4">
<button className="px-10 py-4 bg-gradient-to-r from-primary to-primary-container text-on-primary font-semibold text-[16px] rounded-xl shadow-lg hover:shadow-xl hover:translate-y-[-2px] active:scale-[0.98] transition-all duration-200">
                        Set Your Goal
                    </button>
<span className="text-xs font-medium uppercase tracking-wider text-on-surface-variant/60">
                        Takes less than a minute
                    </span>
</footer>
</div>
</div>
{/*  Secondary Insights  */}
<section className="mt-12 w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6 pb-12">
<div className="bg-surface-container/40 p-6 rounded-xl border border-outline-variant/10 backdrop-blur-sm flex items-start gap-4">
<span className="material-symbols-outlined text-primary mt-1">verified_user</span>
<div>
<h4 className="font-semibold text-[16px] mb-1">Premium Grade Security</h4>
<p className="text-[15px] text-on-surface-variant leading-relaxed">Your financial data is encrypted and processed using private-cloud AI protocols.</p>
</div>
</div>
<div className="bg-surface-container/40 p-6 rounded-xl border border-outline-variant/10 backdrop-blur-sm flex items-start gap-4">
<span className="material-symbols-outlined text-primary mt-1">auto_awesome</span>
<div>
<h4 className="font-semibold text-[16px] mb-1">Continuous Monitoring</h4>
<p className="text-[15px] text-on-surface-variant leading-relaxed">Intelligence updates as frequently as your transactions, ensuring 24/7 accuracy.</p>
</div>
</div>
</section>
</div>
</main>

    </>
  );
}
