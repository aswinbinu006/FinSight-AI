import { Link } from 'react-router-dom';
import './Help.css';

export default function Help() {


  return (
    <>

{/*  SideNavBar: Rail Implementation  */}
<input className="hidden peer" id="sidebar-toggle" type="checkbox"/>
<aside className="fixed left-4 top-4 bottom-4 w-20 rounded-3xl z-50 dark:bg-teal-950/80 backdrop-blur-xl shadow-[0_4px_12px_rgba(15,23,42,0.03),0_2px_4px_rgba(15,23,42,0.02)] flex flex-col items-center py-8 justify-between overflow-hidden transition-all duration-300 bg-surface-container/95">
{/*  Brand Branding & Toggle  */}
<div className="flex flex-col items-center gap-4 w-full">
{/*  Goal Architect Logo moved to top of rail  */}
<div className="flex flex-col items-center gap-1 mb-2">
<div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-white shadow-lg">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>architecture</span>
</div>
<span className="text-teal-800 font-semibold tracking-tighter text-[10px] uppercase italic">Architect</span>
</div>
{/*  Functionally positioned Toggle Arrow  */}
<label className="w-10 h-10 flex items-center justify-center text-teal-600/60 hover:text-teal-800 bg-teal-100/30 rounded-xl cursor-pointer transition-colors" htmlFor="sidebar-toggle" title="Toggle Sidebar">
<span className="material-symbols-outlined expand-icon transition-transform duration-300">chevron_right</span>
</label>
</div>
{/*  Navigation Tabs  */}
<nav className="flex flex-col gap-3 items-center w-full">
<button className="nav-item w-12 h-12 flex items-center justify-center text-teal-600/60 hover:text-teal-800 hover:bg-teal-100/50 rounded-2xl transition-all duration-300 active:scale-95" title="Dashboard">
<span className="material-symbols-outlined">dashboard</span>
<span className="nav-label font-medium text-sm">Dashboard</span>
</button>
<button className="nav-item w-12 h-12 flex items-center justify-center text-teal-600/60 hover:text-teal-800 hover:bg-teal-100/50 rounded-2xl transition-all duration-300 active:scale-95" title="Health">
<span className="material-symbols-outlined">monitor_heart</span>
<span className="nav-label font-medium text-sm">Health</span>
</button>
<button className="nav-item w-12 h-12 flex items-center justify-center text-teal-600/60 hover:text-teal-800 hover:bg-teal-100/50 rounded-2xl transition-all duration-300 active:scale-95" title="Waste">
<span className="material-symbols-outlined">delete_outline</span>
<span className="nav-label font-medium text-sm">Waste</span>
</button>
<button className="nav-item w-12 h-12 flex items-center justify-center text-teal-600/60 hover:text-teal-800 hover:bg-teal-100/50 rounded-2xl transition-all duration-300 active:scale-95" title="Goals">
<span className="material-symbols-outlined">ads_click</span>
<span className="nav-label font-medium text-sm">Goals</span>
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
{/*  Main Content Canvas  */}
<main className="flex-1 ml-24 p-8 transition-all duration-300">
{/*  TopNavBar Cluster  */}
<header className="w-full h-16 flex justify-between items-center mb-12">
{/*  Branding removed from header  */}
<div></div>
<div className="flex items-center gap-6">
<div className="flex items-center gap-3">
<button className="p-2 text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="p-2 bg-primary text-white rounded-lg transition-colors shadow-sm">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>help_outline</span>
</button>
<div className="h-10 w-10 rounded-full bg-surface-container-highest overflow-hidden ml-2 shadow-sm border border-outline-variant/20">
<img alt="User Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkwsQQmnSZb7KCWk7jycz5bErIpotJIEl8vvU0KuWhZXWWtrsz-UcyZM36ayMhnAmT6FFW-wHX1S5wjGrFDgru0RDk__pHEmST9wn-eBLyXu4t2adSw_aQmm18zFGm8ZDQdzotZRH8D8Hn4iWLvtfgAqYEZ5SrNL7LDQms9-GUMe-dlbT8GEdQHx3uiAOMXoSq8x_vf9XE5DcTMcw3RvlckR0iqBaqFG84VrqVnMiAU1JCHHnDwV3W6b_2NwMVbQPND4wlzYgw7hBK"/>
</div>
</div>
</div>
</header>
{/*  Page Content Container  */}
<div className="max-w-7xl mx-auto space-y-12">
{/*  Header Section  */}
<section className="max-w-2xl">
<h2 className="text-4xl font-bold tracking-tight text-on-surface mb-3">Help &amp; Insights</h2>
<p className="text-on-surface-variant text-lg leading-relaxed">Understand how FinSight AI works and how your insights are generated.</p>
</section>
{/*  Section 1: How It Works  */}
<section>
<div className="flex items-center gap-2 mb-6">
<span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary-container/20 px-2 py-1 rounded">Methodology</span>
<h3 className="text-xl font-bold text-on-surface">How It Works</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-surface-container-lowest p-8 rounded-2xl intelligence-ray shadow-[0_4px_12px_rgba(15,23,42,0.03)] border border-outline-variant/10 group hover:translate-y-[-2px] transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-surface-container-low flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-3xl">monitor_heart</span>
</div>
<h4 className="text-lg font-bold text-on-surface mb-3">Financial Health</h4>
<p className="text-on-surface-variant text-sm leading-relaxed">We analyze your income, spending, and savings behavior to generate your health score.</p>
</div>
<div className="bg-surface-container-lowest p-8 rounded-2xl intelligence-ray shadow-[0_4px_12px_rgba(15,23,42,0.03)] border border-outline-variant/10 group hover:translate-y-[-2px] transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-surface-container-low flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-3xl">delete_outline</span>
</div>
<h4 className="text-lg font-bold text-on-surface mb-3">Waste Recovery</h4>
<p className="text-on-surface-variant text-sm leading-relaxed">We compare cost vs usage to identify unnecessary expenses and subscription leaks.</p>
</div>
<div className="bg-surface-container-lowest p-8 rounded-2xl intelligence-ray shadow-[0_4px_12px_rgba(15,23,42,0.03)] border border-outline-variant/10 group hover:translate-y-[-2px] transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-surface-container-low flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-3xl">psychology</span>
</div>
<h4 className="text-lg font-bold text-on-surface mb-3">Goal Intelligence</h4>
<p className="text-on-surface-variant text-sm leading-relaxed">We predict your chances of reaching your goal based on your habits and market data.</p>
</div>
</div>
</section>
{/*  Section 2 & 3  */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
{/*  Section 2: Understand Your Score  */}
<section className="lg:col-span-2 space-y-6">
<div className="flex items-center gap-2">
<span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary-container/20 px-2 py-1 rounded">Deep Dive</span>
<h3 className="text-xl font-bold text-on-surface">Understand Your Score</h3>
</div>
<div className="space-y-4">
<details className="group bg-surface-container-low rounded-2xl overflow-hidden transition-all duration-300 border border-transparent open:border-outline-variant/20 open:bg-surface-container-lowest">
<summary className="list-none flex justify-between items-center p-5 cursor-pointer font-bold text-on-surface">
<span>How is my health score calculated?</span>
<span className="material-symbols-outlined group-open:rotate-180 transition-transform text-primary">expand_more</span>
</summary>
<div className="px-5 pb-5 text-on-surface-variant text-sm leading-relaxed">
                            Our algorithm looks at four main pillars: Liquidity (cash flow), Stability (reserve funds), Efficiency (spending optimization), and Growth (investment consistency). It translates complex ratios into a human-readable 1-100 score.
                        </div>
</details>
<details className="group bg-surface-container-low rounded-2xl overflow-hidden transition-all duration-300 border border-transparent open:border-outline-variant/20 open:bg-surface-container-lowest">
<summary className="list-none flex justify-between items-center p-5 cursor-pointer font-bold text-on-surface">
<span>Why is my goal success low?</span>
<span className="material-symbols-outlined group-open:rotate-180 transition-transform text-primary">expand_more</span>
</summary>
<div className="px-5 pb-5 text-on-surface-variant text-sm leading-relaxed">
                            Low success probability usually indicates a mismatch between your current saving velocity and your target deadline. We also factor in behavioral volatility—how often you dip into savings—to provide a realistic projection.
                        </div>
</details>
<details className="group bg-surface-container-low rounded-2xl overflow-hidden transition-all duration-300 border border-transparent open:border-outline-variant/20 open:bg-surface-container-lowest">
<summary className="list-none flex justify-between items-center p-5 cursor-pointer font-bold text-on-surface">
<span>What does 'waste' mean?</span>
<span className="material-symbols-outlined group-open:rotate-180 transition-transform text-primary">expand_more</span>
</summary>
<div className="px-5 pb-5 text-on-surface-variant text-sm leading-relaxed">
                            Waste is defined as financial output that provides no utility. This includes forgotten subscriptions, excessive service fees, and interest paid on debts that could be consolidated.
                        </div>
</details>
</div>
</section>
{/*  Section 3: Common Questions  */}
<section className="space-y-6">
<div className="flex items-center gap-2">
<span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary-container/20 px-2 py-1 rounded">Privacy &amp; FAQ</span>
<h3 className="text-xl font-bold text-on-surface">Common Questions</h3>
</div>
<div className="bg-surface-container-lowest rounded-2xl p-6 shadow-[0_4px_12px_rgba(15,23,42,0.03)] border border-outline-variant/10">
<ul className="space-y-5">
<li className="flex items-start gap-3 group cursor-pointer">
<span className="material-symbols-outlined text-primary-container text-xl group-hover:scale-110 transition-transform">help</span>
<span className="text-sm font-bold text-on-surface hover:text-primary transition-colors">Why do I need to answer questions?</span>
</li>
<li className="flex items-start gap-3 group cursor-pointer">
<span className="material-symbols-outlined text-primary-container text-xl group-hover:scale-110 transition-transform">shield_with_heart</span>
<span className="text-sm font-bold text-on-surface hover:text-primary transition-colors">Is my data safe?</span>
</li>
<li className="flex items-start gap-3 group cursor-pointer">
<span className="material-symbols-outlined text-primary-container text-xl group-hover:scale-110 transition-transform">account_balance</span>
<span className="text-sm font-bold text-on-surface hover:text-primary transition-colors">Do you access my bank account?</span>
</li>
</ul>
</div>
<div className="bg-primary/5 rounded-2xl p-6 border border-primary-container/20">
<p className="text-[10px] font-bold uppercase tracking-[0.05em] text-primary mb-2">Need direct support?</p>
<p className="text-sm text-on-surface-variant mb-4 leading-relaxed">Our Premium experts are available 24/7 for premium tier members.</p>
<button className="w-full py-2.5 bg-primary text-white rounded-xl text-sm font-bold shadow-sm hover:opacity-90 active:scale-95 transition-all">Contact Specialist</button>
</div>
</section>
</div>
{/*  Section 4: Quick Action Help & CTA  */}
<section className="bg-surface-container p-10 rounded-2xl relative overflow-hidden">
<div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
<div className="max-w-md">
<h3 className="text-2xl font-bold text-on-surface mb-3">Still have questions?</h3>
<p className="text-on-surface-variant leading-relaxed">Experience our AI Co-Pilot for a personalized tour of your financial architecture and tailored optimization tips.</p>
</div>
<div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
<div className="bg-surface-container-lowest p-4 rounded-xl flex items-center gap-3 shadow-sm border border-outline-variant/10 cursor-pointer hover:bg-white transition-colors">
<div className="w-10 h-10 rounded bg-secondary-container flex items-center justify-center text-on-secondary-container">
<span className="material-symbols-outlined text-lg">payments</span>
</div>
<div>
<p className="text-xs font-bold text-on-surface">Financial Health</p>
<p className="text-[10px] text-on-surface-variant">View details</p>
</div>
</div>
<div className="bg-surface-container-lowest p-4 rounded-xl flex items-center gap-3 shadow-sm border border-outline-variant/10 cursor-pointer hover:bg-white transition-colors">
<div className="w-10 h-10 rounded bg-secondary-container flex items-center justify-center text-on-secondary-container">
<span className="material-symbols-outlined text-lg">event_repeat</span>
</div>
<div>
<p className="text-xs font-bold text-on-surface">Subscriptions</p>
<p className="text-[10px] text-on-surface-variant">Manage recurring</p>
</div>
</div>
<button className="bg-gradient-to-r from-primary to-primary-container text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:translate-y-[-2px] active:scale-95 transition-all">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>smart_toy</span>
                        Ask Co-Pilot
                    </button>
</div>
</div>
{/*  Decorative background elements  */}
<div className="absolute top-[-50px] right-[-50px] w-64 h-64 bg-primary-container/10 rounded-full blur-3xl"></div>
<div className="absolute bottom-[-50px] left-[-20px] w-48 h-48 bg-secondary-container/20 rounded-full blur-3xl"></div>
</section>
</div>
{/*  Footer  */}
<footer className="mt-20 border-t border-outline-variant/10 py-8">
<div className="flex flex-col md:flex-row justify-between items-center gap-4 opacity-60">
<p className="text-[11px] font-medium tracking-wide">© 2024 Premium Intelligence Platform. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-[10px] font-bold uppercase tracking-widest hover:text-primary transition-colors" href="#">Privacy</a>
<a className="text-[10px] font-bold uppercase tracking-widest hover:text-primary transition-colors" href="#">Terms</a>
<a className="text-[10px] font-bold uppercase tracking-widest hover:text-primary transition-colors" href="#">Security</a>
</div>
</div>
</footer>
</main>

    </>
  );
}
