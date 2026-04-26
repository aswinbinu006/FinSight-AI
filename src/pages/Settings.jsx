import { Link } from 'react-router-dom';
import './Settings.css';

export default function Settings() {


  return (
    <>

{/*  SideNavBar: Rail Implementation  */}
<input className="hidden peer" id="sidebar-toggle" type="checkbox" />
<aside className="fixed left-4 top-4 bottom-4 w-20 rounded-3xl z-50 bg-surface-container/95 backdrop-blur-xl shadow-[0_4px_12px_rgba(15,23,42,0.03),0_2px_4px_rgba(15,23,42,0.02)] flex flex-col items-center py-8 justify-between overflow-hidden transition-all duration-300">
{/*  Brand Logo & Toggle  */}
<div className="flex flex-col items-center gap-4 w-full">
<div className="flex flex-col items-center gap-1">
<div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-white shadow-lg">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"&quot"}}>architecture</span>
</div>
<span className="text-teal-800 font-semibold tracking-tighter text-[10px] mt-2 uppercase italic" style={{}}>Architect</span>
</div>
<label className="w-10 h-10 flex items-center justify-center text-teal-600/60 hover:text-teal-800 bg-teal-100/30 rounded-xl cursor-pointer transition-colors" htmlFor="sidebar-toggle" title="Toggle Sidebar" style={{}}>
<span className="material-symbols-outlined expand-icon transition-transform duration-300" style={{}}>chevron_right</span>
</label>
</div>
{/*  Navigation Tabs  */}
<nav className="flex flex-col gap-3 items-center w-full">
<button className="nav-item w-12 h-12 flex items-center justify-center rounded-2xl transition-all duration-300 group relative text-teal-600/60 hover:text-teal-800 hover:bg-teal-100/50" title="Dashboard" style={{}}>
<span className="material-symbols-outlined" style={{}}>dashboard</span>
<span className="nav-label font-medium text-sm" style={{}}>Dashboard</span>
</button>
<button className="nav-item w-12 h-12 flex items-center justify-center text-teal-600/60 hover:text-teal-800 hover:bg-teal-100/50 rounded-2xl transition-all duration-300 active:scale-95" title="Financial Health" style={{}}>
<span className="material-symbols-outlined" style={{}}>monitor_heart</span>
<span className="nav-label font-medium text-sm" style={{}}>Financial Health</span>
</button>
<button className="nav-item w-12 h-12 flex items-center justify-center text-teal-600/60 hover:text-teal-800 hover:bg-teal-100/50 rounded-2xl transition-all duration-300 active:scale-95" title="Waste Recovery" style={{}}>
<span className="material-symbols-outlined" style={{}}>delete_outline</span>
<span className="nav-label font-medium text-sm" style={{}}>Waste Recovery</span>
</button>
<button className="nav-item w-12 h-12 flex items-center justify-center text-teal-600/60 hover:text-teal-800 hover:bg-teal-100/50 rounded-2xl transition-all duration-300 active:scale-95" title="Goal Intelligence" style={{}}>
<span className="material-symbols-outlined" style={{}}>ads_click</span>
<span className="nav-label font-medium text-sm" style={{}}>Goal Intelligence</span>
</button>
<button className="nav-item w-12 h-12 flex items-center justify-center text-teal-600/60 hover:text-teal-800 hover:bg-teal-100/50 rounded-2xl transition-all duration-300 active:scale-95" title="AI Co-Pilot" style={{}}>
<span className="material-symbols-outlined" style={{}}>psychology</span>
<span className="nav-label font-medium text-sm" style={{}}>AI Co-Pilot</span>
</button>
<button className="nav-item w-12 h-12 flex items-center justify-center text-teal-600/60 hover:text-teal-800 hover:bg-teal-100/50 rounded-2xl transition-all duration-300 active:scale-95" title="Subscription" style={{}}>
<span className="material-symbols-outlined" style={{}}>payments</span>
<span className="nav-label font-medium text-sm" style={{}}>Subscription</span>
</button>
</nav>
{/*  Footer Actions  */}
<div className="flex flex-col gap-2 items-center w-full">
<button className="nav-item active w-12 h-12 flex items-center justify-center rounded-2xl transition-all duration-300" title="Settings" style={{}}>
<span className="material-symbols-outlined" style={{}}>settings</span>
<span className="nav-label font-medium text-sm" style={{}}>Settings</span>
</button>
</div>
</aside>
{/*  Main Content Area  */}
<main className="flex-1 ml-24 p-8 transition-all duration-300">
{/*  TopNavBar Header  */}
<header className="w-full h-16 flex justify-between items-center mb-8">
<div className="flex items-center gap-4">
<span className="text-xs font-medium text-on-surface-variant/40 pt-1" style={{}}><br /></span>
</div>
<div className="flex items-center gap-6">
<div className="flex items-center gap-3">
<button className="p-2 text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" style={{}}>
<span className="material-symbols-outlined" style={{}}>notifications</span>
</button>
<button className="p-2 text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" style={{}}>
<span className="material-symbols-outlined" style={{}}>help_outline</span>
</button>
<div className="h-10 w-10 rounded-full bg-surface-container-highest flex items-center justify-center ml-2 shadow-sm border border-outline-variant/10 text-on-surface-variant"><span className="material-symbols-outlined" style={{}}>account_circle</span></div>
</div>
</div>
</header>
{/*  Settings Content  */}
<div className="max-w-4xl mx-auto space-y-8">
{/*  Page Title & Description  */}
<div className="relative pl-6 intelligence-ray">
<h3 className="text-2xl font-bold tracking-tight text-on-surface" style={{}}>System Configuration</h3>
<p className="text-on-surface-variant text-sm mt-1" style={{}}>Manage your Premium-grade AI environment and security protocols.</p>
</div>
{/*  Identity & Access Section  */}
<section className="bg-surface-container-lowest rounded-2xl p-8 shadow-[0_4px_12px_rgba(15,23,42,0.03)] border border-outline-variant/10">
<div className="flex items-center gap-3 mb-8">
<span className="material-symbols-outlined text-primary" data-icon="person" style={{}}>person</span>
<h4 className="text-lg font-bold tracking-tight" style={{}}>Identity &amp; Access</h4>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-[11px] font-bold uppercase tracking-wider text-on-surface-variant" style={{}}>Full Legal Name</label>
<input className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 text-sm text-on-surface focus:ring-1 focus:ring-primary/40 transition-all" type="text" value="Alex Sterling" />
</div>
<div className="space-y-2">
<label className="text-[11px] font-bold uppercase tracking-wider text-on-surface-variant" style={{}}>Premium Email</label>
<input className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 text-sm text-on-surface focus:ring-1 focus:ring-primary/40 transition-all" type="email" value="alex.sterling@Premium-arch.com" />
</div>
</div>
<div className="mt-8 flex justify-end">
<button className="px-6 py-3 bg-gradient-to-r from-primary to-primary-container text-white text-sm font-bold rounded-xl shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform active:scale-95" style={{}}>
                        Update Identity
                    </button>
</div>
</section>
{/*  Interface Preferences Section  */}
<section className="bg-surface-container-lowest rounded-2xl p-8 shadow-[0_4px_12px_rgba(15,23,42,0.03)] border border-outline-variant/10">
<div className="flex items-center gap-3 mb-8">
<span className="material-symbols-outlined text-primary" data-icon="tune" style={{}}>tune</span>
<h4 className="text-lg font-bold tracking-tight" style={{}}>Interface Preferences</h4>
</div>
<div className="space-y-8">
{/*  Intelligence Alerts Toggle  */}
<div className="flex items-center justify-between">
<div>
<p className="text-sm font-bold text-on-surface" style={{}}>Intelligence Alerts</p>
<p className="text-xs text-on-surface-variant" style={{}}>Real-time notifications for anomalous market movements.</p>
</div>
<button className="w-12 h-6 bg-primary rounded-full relative p-1 transition-colors" style={{}}>
<span className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></span>
</button>
</div>
{/*  Theme Selection Cards  */}
<div className="space-y-4">
<label className="text-[11px] font-bold uppercase tracking-wider text-on-surface-variant" style={{}}>Visual Environment</label>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<button className="flex items-center justify-between p-4 bg-teal-50 border border-primary/20 rounded-xl transition-all group" style={{}}>
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary" style={{}}>light_mode</span>
<span className="text-sm font-bold text-primary" style={{}}>Light Mode</span>
</div>
<span className="material-symbols-outlined text-primary text-sm" style={{"fontVariationSettings":"&quot"}}>check_circle</span>
</button>
<button className="flex items-center justify-between p-4 bg-surface-container-low hover:bg-surface-container rounded-xl transition-all group" style={{}}>
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-on-surface-variant group-hover:text-on-surface transition-colors" style={{}}>dark_mode</span>
<span className="text-sm font-medium text-on-surface-variant group-hover:text-on-surface transition-colors" style={{}}>Dark Mode</span>
</div>
</button>
</div>
</div>
</div>
</section>
{/*  Data Governance Bento  */}
<div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
{/*  Data Management Section  */}
<section className="lg:col-span-3 bg-surface-container-lowest rounded-2xl p-8 shadow-[0_4px_12px_rgba(15,23,42,0.03)] border border-outline-variant/10">
<div className="flex items-center gap-3 mb-6">
<span className="material-symbols-outlined text-primary" style={{}}>database</span>
<h4 className="text-lg font-bold tracking-tight" style={{}}>Data Governance</h4>
</div>
<p className="text-xs text-on-surface-variant mb-8 leading-relaxed" style={{}}>
                        Manage your historical analysis and data residency. Resetting data is permanent and will clear all AI learning associated with this profile.
                    </p>
<div className="flex flex-wrap gap-4">
<button className="px-5 py-2.5 bg-surface-container-low text-on-surface text-xs font-bold rounded-xl hover:bg-error/5 hover:text-error transition-all flex items-center gap-2" style={{}}>
<span className="material-symbols-outlined text-sm" style={{}}>history</span>
                            Clear History
                        </button>
<button className="px-5 py-2.5 bg-surface-container-low text-on-surface text-xs font-bold rounded-xl hover:bg-error/10 hover:text-error transition-all flex items-center gap-2" style={{}}>
<span className="material-symbols-outlined text-sm" style={{}}>delete_sweep</span>
                            Reset All Data
                        </button>
</div>
</section>
{/*  Privacy Guarantee Block  */}
<section className="lg:col-span-2 bg-gradient-to-br from-[#003d36] to-[#00201c] rounded-2xl p-8 shadow-xl relative overflow-hidden flex flex-col justify-between">
<div className="absolute top-0 right-0 p-4 opacity-5 translate-x-4 -translate-y-4">
<span className="material-symbols-outlined text-white text-[120px]" style={{"fontVariationSettings":"&quot"}}>shield</span>
</div>
<div className="relative z-10">
<div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-primary-fixed" style={{"fontVariationSettings":"&quot"}}>lock</span>
</div>
<h4 className="text-white text-lg font-bold leading-tight mb-4" style={{}}>Zero-Access Privacy Guarantee</h4>
<p className="text-teal-100/60 text-xs leading-relaxed" style={{}}>
                            Our "Premium Isolation" protocol ensures that we do not access or store your raw bank credentials.
                        </p>
</div>
<div className="mt-8 relative z-10">
<a className="text-[10px] font-bold text-primary-fixed uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all" href="#" style={{}}>
                            View Privacy Policy
                            <span className="material-symbols-outlined text-xs" style={{}}>arrow_forward</span>
</a>
</div>
</section>
</div>
{/*  System Footer Info  */}
<div className="pt-8 border-t border-outline-variant/10 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="text-[10px] text-on-surface-variant/60 font-medium" style={{}}>
                    NODE IDENTITY: <span className="font-mono text-primary/70" style={{}}>IA-882-99-X</span>
</div>
</div>
</div>
</main>

    </>
  );
}
