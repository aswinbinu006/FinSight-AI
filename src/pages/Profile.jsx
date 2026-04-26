import { Link } from 'react-router-dom';
import './Profile.css';

export default function Profile() {


  return (
    <>

{/*  SideNavBar: Rail Implementation (Synced with Dashboard/Screen 129)  */}
<input className="hidden peer" id="sidebar-toggle" type="checkbox"/>
<aside className="fixed left-4 top-4 bottom-4 w-20 rounded-3xl z-50 dark:bg-teal-950/80 backdrop-blur-xl shadow-[0_4px_12px_rgba(15,23,42,0.03),0_2px_4px_rgba(15,23,42,0.02)] flex flex-col items-center py-8 justify-between overflow-hidden transition-all duration-300 bg-surface-container/95">
{/*  Brand Logo & Toggle  */}
<div className="flex flex-col items-center gap-4 w-full">
<div className="flex flex-col items-center gap-1">
<div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-white shadow-lg">
<span className="material-symbols-outlined" style='font-variation-settings: "FILL" 1;'>architecture</span>
</div>
<span className="text-teal-800 font-semibold tracking-tighter text-[10px] mt-2 uppercase italic" style={{}}>Architect</span>
</div>
{/*  Functionally positioned Toggle Arrow  */}
<label className="w-10 h-10 flex items-center justify-center text-teal-600/60 hover:text-teal-800 bg-teal-100/30 rounded-xl cursor-pointer transition-colors" htmlFor="sidebar-toggle" style={{}} title="Toggle Sidebar">
<span className="material-symbols-outlined expand-icon transition-transform duration-300" style={{}}>chevron_right</span>
</label>
</div>
{/*  Navigation Tabs (No active states for Profile context)  */}
<nav className="flex flex-col gap-3 items-center w-full">
<button className="nav-item w-12 h-12 flex items-center justify-center text-teal-600/60 hover:text-teal-800 hover:bg-teal-100/50 rounded-2xl transition-all duration-300 active:scale-95" style={{}} title="Dashboard">
<span className="material-symbols-outlined" style={{}}>dashboard</span>
<span className="nav-label font-medium text-sm" style={{}}>Dashboard</span>
</button>
<button className="nav-item w-12 h-12 flex items-center justify-center text-teal-600/60 hover:text-teal-800 hover:bg-teal-100/50 rounded-2xl transition-all duration-300 active:scale-95" style={{}} title="Financial Health">
<span className="material-symbols-outlined" style={{}}>monitor_heart</span>
<span className="nav-label font-medium text-sm" style={{}}>Financial Health</span>
</button>
<button className="nav-item w-12 h-12 flex items-center justify-center text-teal-600/60 hover:text-teal-800 hover:bg-teal-100/50 rounded-2xl transition-all duration-300 active:scale-95" style={{}} title="Waste Recovery">
<span className="material-symbols-outlined" style={{}}>delete_outline</span>
<span className="nav-label font-medium text-sm" style={{}}>Waste Recovery</span>
</button>
<button className="nav-item w-12 h-12 flex items-center justify-center text-teal-600/60 hover:text-teal-800 hover:bg-teal-100/50 rounded-2xl transition-all duration-300 active:scale-95" style={{}} title="Goal Intelligence">
<span className="material-symbols-outlined" style={{}}>ads_click</span>
<span className="nav-label font-medium text-sm" style={{}}>Goal Intelligence</span>
</button>
<button className="nav-item w-12 h-12 flex items-center justify-center text-teal-600/60 hover:text-teal-800 hover:bg-teal-100/50 rounded-2xl transition-all duration-300 active:scale-95" style={{}} title="AI Co-Pilot">
<span className="material-symbols-outlined" style='font-variation-settings: "FILL" 1;'>psychology</span>
<span className="nav-label font-medium text-sm" style={{}}>AI Co-Pilot</span>
</button>
<button className="nav-item w-12 h-12 flex items-center justify-center text-teal-600/60 hover:text-teal-800 hover:bg-teal-100/50 rounded-2xl transition-all duration-300 active:scale-95" style={{}} title="Subscription">
<span className="material-symbols-outlined" style={{}}>payments</span>
<span className="nav-label font-medium text-sm" style={{}}>Subscription</span>
</button>
</nav>
{/*  Footer Actions  */}
<div className="flex flex-col gap-2 items-center w-full">
<button className="nav-item w-12 h-12 flex items-center justify-center text-teal-600/60 hover:text-teal-800 hover:bg-teal-100/50 rounded-2xl transition-all duration-300" style={{}} title="Settings">
<span className="material-symbols-outlined" style={{}}>settings</span>
<span className="nav-label font-medium text-sm" style={{}}>Settings</span>
</button>
</div>
</aside>
{/*  Main Content Canvas  */}
<main className="flex-1 ml-24 p-8 transition-all duration-300">
{/*  TopNavBar Cluster (Synced with Dashboard)  */}
<header className="w-full h-16 flex justify-between items-center mb-8">
<div className="flex items-center">
<h1 className="text-on-surface-variant font-medium text-sm tracking-tight" style={{}}><br/></h1>
</div>
<div className="flex items-center gap-6">
<div className="flex items-center gap-3">
<button className="p-2 text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" style={{}}>
<span className="material-symbols-outlined" style={{}}>notifications</span>
</button>
<button className="p-2 text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" style={{}}>
<span className="material-symbols-outlined" style={{}}>help_outline</span>
</button>
<a className="h-10 w-10 rounded-full bg-surface-container-highest overflow-hidden ml-2 shadow-sm border border-outline-variant/10 ring-2 ring-primary ring-offset-2 transition-all" href="#" style={{}} title="User Profile">
<img alt="User Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHQ_LpocVTYo3I3qvVDvOsONOJ00YrWJMY5LMZBSVTJSL93tcC-mH12_CLc8nrmTYbZO9aS5donHLENMY3RoOg3kj9ouvaoUNY9fS8Pcvn55IWRDvCsFWTy9lSrHhm5IyHq1TS4eIJVpUflbiq1j3ZzeQ4wh686IKFSg0TPxzRBl98zODOWF0txzQd9LhKRHkJbDl16NasyEvy72GZVnbxJVotF1K4WeywJzUqUfzBgKtxh5sC0YpaWOE_SmlE7ILrR6f-qCy661mr" style={{}}/>
</a>
</div>
</div>
</header>
{/*  Profile Grid Layout  */}
<div className="max-w-6xl mx-auto space-y-8">
{/*  Header Profile Section  */}
<section className="flex flex-col md:flex-row items-center gap-8 bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/10 shadow-[0_4px_12px_rgba(15,23,42,0.03)]">
<div className="relative">
<div className="w-32 h-32 rounded-3xl overflow-hidden shadow-xl border-4 border-white">
<img className="w-full h-full object-cover" data-alt="Alex Sterling headshot" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHQ_LpocVTYo3I3qvVDvOsONOJ00YrWJMY5LMZBSVTJSL93tcC-mH12_CLc8nrmTYbZO9aS5donHLENMY3RoOg3kj9ouvaoUNY9fS8Pcvn55IWRDvCsFWTy9lSrHhm5IyHq1TS4eIJVpUflbiq1j3ZzeQ4wh686IKFSg0TPxzRBl98zODOWF0txzQd9LhKRHkJbDl16NasyEvy72GZVnbxJVotF1K4WeywJzUqUfzBgKtxh5sC0YpaWOE_SmlE7ILrR6f-qCy661mr" style={{}}/>
</div>
<div className="absolute -bottom-2 -right-2 bg-primary text-white p-1.5 rounded-xl shadow-lg border-2 border-white">
<span className="material-symbols-outlined text-[14px]" style='font-variation-settings: "FILL" 1;'>verified</span>
</div>
</div>
<div className="text-center md:text-left">
<h2 className="text-3xl font-extrabold text-on-surface tracking-tight" style={{}}>Alex Sterling</h2>
<div className="flex items-center justify-center md:justify-start gap-2 mt-2 text-on-surface-variant font-medium text-sm" style={{}}>
<span className="material-symbols-outlined text-sm" style={{}}>mail</span>
                    alex.sterling@institution.com
                </div>
<div className="flex gap-3 mt-5 justify-center md:justify-start">
<span className="bg-surface-container text-on-surface-variant px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase" style={{}}>Premium Tier</span>
<span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase border border-primary/10" style={{}}>Managing Director</span>
</div>
</div>
</section>
{/*  Main Bento Content  */}
<div className="grid grid-cols-12 gap-8">
{/*  Account Info (8 cols)  */}
<div className="col-span-12 lg:col-span-8 bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/10 shadow-[0_4px_12px_rgba(15,23,42,0.03)] intelligence-ray">
<div className="flex justify-between items-center mb-10">
<h3 className="text-lg font-bold text-on-surface" style={{}}>Account Information</h3>
<button className="text-primary text-xs font-bold hover:underline tracking-tight uppercase" style={{}}>Edit Details</button>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-8">
<div>
<p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-2" style={{}}>Full Name</p>
<p className="text-on-surface font-semibold text-base" style={{}}>Alex Sterling</p>
</div>
<div>
<p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-2" style={{}}>Professional Email</p>
<p className="text-on-surface font-semibold text-base" style={{}}>alex.sterling@institution.com</p>
</div>
<div>
<p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-2" style={{}}>Account Reference</p>
<p className="text-on-surface font-semibold text-base" style={{}}>INST-9928-AXS</p>
</div>
<div>
<p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-2" style={{}}>Time Zone</p>
<p className="text-on-surface font-semibold text-base" style={{}}>EST (UTC -5)</p>
</div>
</div>
</div>
{/*  Activity Summary (4 cols)  */}
<div className="col-span-12 lg:col-span-4 bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/10 shadow-[0_4px_12px_rgba(15,23,42,0.03)]">
<h3 className="text-lg font-bold text-on-surface mb-8" style={{}}>Activity Summary</h3>
<div className="space-y-6">
<div className="flex items-center gap-4 group">
<div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary/10 transition-colors">
<span className="material-symbols-outlined" style={{}}>history</span>
</div>
<div>
<p className="text-[9px] font-bold uppercase tracking-widest text-on-surface-variant" style={{}}>Last Analysis</p>
<p className="text-on-surface font-bold text-sm" style={{}}>Oct 24, 2026</p>
</div>
</div>
<div className="flex items-center gap-4 group">
<div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary/10 transition-colors">
<span className="material-symbols-outlined" style={{}}>flag</span>
</div>
<div>
<p className="text-[9px] font-bold uppercase tracking-widest text-on-surface-variant" style={{}}>Active Goals</p>
<p className="text-on-surface font-bold text-sm" style={{}}>5 Strategic Targets</p>
</div>
</div>
<div className="flex items-center gap-4 group">
<div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary/10 transition-colors">
<span className="material-symbols-outlined" style={{}}>security</span>
</div>
<div>
<p className="text-[9px] font-bold uppercase tracking-widest text-on-surface-variant" style={{}}>Session Integrity</p>
<p className="text-on-surface font-bold text-sm" style={{}}>Encrypted (AES-256)</p>
</div>
</div>
</div>
</div>
{/*  Plan Banner (Full Width)  */}
<div className="col-span-12 bg-gradient-to-r from-primary to-primary-container p-8 rounded-2xl shadow-xl flex flex-col md:flex-row justify-between items-center gap-8 relative overflow-hidden">
<div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white to-transparent"></div>
<div className="relative z-10 text-center md:text-left">
<div className="flex items-center justify-center md:justify-start gap-3 mb-2">
<span className="material-symbols-outlined text-white text-lg" style={{}}>auto_awesome</span>
<span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/90" style={{}}>Intelligence Tier</span>
</div>
<h3 className="text-2xl font-extrabold tracking-tight text-white" style={{}}>Current Plan: Pro</h3>
<p className="text-white/80 text-sm mt-1 max-w-md" style={{}}>Unlimited AI-driven market analysis, priority GPU allocation, and full Premium reporting access.</p>
</div>
<div className="flex gap-4 relative z-10 shrink-0">
<button className="bg-white text-primary px-6 py-2.5 rounded-xl text-xs font-bold shadow-lg hover:scale-[1.02] transition-transform active:scale-95" style={{}}>
                        Manage Subscription
                    </button>
<button className="bg-primary/20 backdrop-blur-md text-white border border-white/20 px-6 py-2.5 rounded-xl text-xs font-bold shadow-lg hover:scale-[1.02] transition-transform active:scale-95" style={{}}>
                        Upgrade
                    </button>
</div>
</div>
{/*  Security List (Full Width)  */}
<div className="col-span-12 bg-surface-container-lowest rounded-2xl border border-outline-variant/10 shadow-[0_4px_12px_rgba(15,23,42,0.03)] overflow-hidden">
<div className="p-6 border-b border-surface-container-low">
<h4 className="text-sm font-bold text-on-surface uppercase tracking-wider" style={{}}>Security &amp; Governance</h4>
</div>
<div className="divide-y divide-surface-container-low">
<div className="p-5 flex items-center justify-between hover:bg-surface-container-low transition-colors cursor-pointer group">
<div className="flex items-center gap-5">
<span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors" style={{}}>password</span>
<div>
<p className="text-sm font-bold text-on-surface" style={{}}>Change Password</p>
<p className="text-[11px] text-on-surface-variant/70" style={{}}>Last updated 4 months ago</p>
</div>
</div>
<span className="material-symbols-outlined text-on-surface-variant group-hover:translate-x-1 transition-transform" style={{}}>chevron_right</span>
</div>
<div className="p-5 flex items-center justify-between hover:bg-surface-container-low transition-colors cursor-pointer group">
<div className="flex items-center gap-5">
<span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors" style={{}}>devices</span>
<div>
<p className="text-sm font-bold text-on-surface" style={{}}>Active Sessions</p>
<p className="text-[11px] text-on-surface-variant/70" style={{}}>Currently 2 devices active</p>
</div>
</div>
<span className="material-symbols-outlined text-on-surface-variant group-hover:translate-x-1 transition-transform" style={{}}>chevron_right</span>
</div>
<div className="p-5 flex items-center justify-between hover:bg-surface-container-low transition-colors cursor-pointer group">
<div className="flex items-center gap-5">
<span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors" style={{}}>admin_panel_settings</span>
<div>
<p className="text-sm font-bold text-on-surface" style={{}}>Two-Factor Authentication</p>
<p className="text-[11px] text-error font-bold" style={{}}>Disabled - Highly Recommended</p>
</div>
</div>
<span className="material-symbols-outlined text-on-surface-variant group-hover:translate-x-1 transition-transform" style={{}}>chevron_right</span>
</div>
</div>
</div><div className="col-span-12 bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/10 shadow-[0_4px_12px_rgba(15,23,42,0.03)] flex flex-col md:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-xl bg-error/5 flex items-center justify-center text-error">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 0"}}>logout</span>
</div>
<div>
<h4 className="text-base font-bold text-on-surface">Session Control</h4>
<p className="text-xs text-on-surface-variant/70 font-medium">Securely terminate your current Premium Architect session</p>
</div>
</div>
<button className="w-full md:w-auto px-8 py-3 bg-white text-error border border-error/20 rounded-xl text-sm font-bold shadow-sm hover:bg-error hover:text-white transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 group">
<span>Log Out of Profile</span>
<span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
</button>
</div>
</div>
</div>
</main>

    </>
  );
}
