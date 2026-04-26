import { Link } from 'react-router-dom';
import './SubscriptionInput.css';

export default function SubscriptionInput() {


  return (
    <>

{/*  Header Section  */}
<header className="w-full max-w-2xl text-center mb-16">
<h1 className="text-4xl font-bold text-on-surface tracking-tight mb-3">Add your subscriptions</h1>
<p className="text-on-surface-variant text-lg font-normal opacity-80">Track and optimize your recurring expenses with AI-driven precision.</p>
</header>
{/*  Main Content Canvas  */}
<main className="w-full max-w-2xl space-y-12">
{/*  Optimized Input Form  */}
<section className="surface-container-low p-8 rounded-2xl border border-white/40 premium-shadow">
<div className="flex items-center gap-2 mb-6">
<span className="material-symbols-outlined text-primary text-[20px]" data-icon="add_circle">add_circle</span>
<span className="text-[11px] font-bold uppercase tracking-[0.15em] text-on-surface">New Entry</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-6 gap-6 items-end">
<div className="md:col-span-2">
<label className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-2 ml-0.5">Service Name</label>
<input className="w-full bg-white border border-surface-container-highest rounded-lg px-4 py-3 text-sm focus:ring-1 focus:ring-primary/20 focus:border-primary transition-all outline-none input-focus-ring" placeholder="e.g. Netflix" type="text"/>
</div>
<div className="md:col-span-1">
<label className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-2 ml-0.5">Cost (₹)</label>
<input className="w-full bg-white border border-surface-container-highest rounded-lg px-4 py-3 text-sm focus:ring-1 focus:ring-primary/20 focus:border-primary transition-all outline-none input-focus-ring" placeholder="499" type="number"/>
</div>
<div className="md:col-span-2">
<label className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-2 ml-0.5">Billing Cycle</label>
<select className="w-full bg-white border border-surface-container-highest rounded-lg px-4 py-3 text-sm focus:ring-1 focus:ring-primary/20 focus:border-primary transition-all outline-none appearance-none cursor-pointer">
<option>Monthly Billing</option>
<option>Yearly Billing</option>
</select>
</div>
<div className="md:col-span-1">
<button className="w-full h-[46px] bg-primary text-on-primary rounded-lg font-semibold text-sm hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-md">
<span className="material-symbols-outlined text-[18px]" data-icon="add">add</span>
</button>
</div>
</div>
</section>
{/*  Subscription List  */}
<div className="space-y-4">
<div className="flex justify-between items-center px-1">
<h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-on-surface-variant">Current Active Subscriptions</h2>
<span className="text-[10px] text-on-surface-variant font-medium opacity-60">Last updated: Today, 10:45 AM</span>
</div>
{/*  Cards  */}
{/*  Netflix  */}
<div className="group surface-container-lowest p-6 rounded-2xl premium-shadow border border-transparent hover:border-primary/10 flex items-center justify-between transition-all card-hover">
<div className="flex items-center gap-5">
<div className="w-12 h-12 bg-surface-container-high rounded-xl flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[24px]" data-icon="movie">movie</span>
</div>
<div>
<h3 className="text-[15px] font-bold text-on-surface mb-0.5">Netflix</h3>
<p className="text-[11px] text-on-surface-variant font-medium uppercase tracking-wider opacity-70">Premium UHD Plan</p>
</div>
</div>
<div className="text-right flex items-center gap-10">
<div>
<div className="text-lg font-bold text-on-surface">₹649</div>
<div className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest">Monthly</div>
</div>
<button className="opacity-0 group-hover:opacity-100 transition-opacity p-2 text-on-surface-variant hover:text-error rounded-full hover:bg-error/5">
<span className="material-symbols-outlined text-[22px]" data-icon="delete">delete</span>
</button>
</div>
</div>
{/*  Spotify  */}
<div className="group surface-container-lowest p-6 rounded-2xl premium-shadow border border-transparent hover:border-primary/10 flex items-center justify-between transition-all card-hover">
<div className="flex items-center gap-5">
<div className="w-12 h-12 bg-surface-container-high rounded-xl flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[24px]" data-icon="audio_file">audio_file</span>
</div>
<div>
<h3 className="text-[15px] font-bold text-on-surface mb-0.5">Spotify</h3>
<p className="text-[11px] text-on-surface-variant font-medium uppercase tracking-wider opacity-70">Family Premium</p>
</div>
</div>
<div className="text-right flex items-center gap-10">
<div>
<div className="text-lg font-bold text-on-surface">₹199</div>
<div className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest">Monthly</div>
</div>
<button className="opacity-0 group-hover:opacity-100 transition-opacity p-2 text-on-surface-variant hover:text-error rounded-full hover:bg-error/5">
<span className="material-symbols-outlined text-[22px]" data-icon="delete">delete</span>
</button>
</div>
</div>
{/*  AWS  */}
<div className="group surface-container-lowest p-6 rounded-2xl premium-shadow border border-transparent hover:border-primary/10 flex items-center justify-between transition-all card-hover">
<div className="flex items-center gap-5">
<div className="w-12 h-12 bg-surface-container-high rounded-xl flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[24px]" data-icon="dns">dns</span>
</div>
<div>
<h3 className="text-[15px] font-bold text-on-surface mb-0.5">Amazon Web Services</h3>
<p className="text-[11px] text-on-surface-variant font-medium uppercase tracking-wider opacity-70">Infrastructure</p>
</div>
</div>
<div className="text-right flex items-center gap-10">
<div>
<div className="text-lg font-bold text-on-surface">₹2,401</div>
<div className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest">Monthly</div>
</div>
<button className="opacity-0 group-hover:opacity-100 transition-opacity p-2 text-on-surface-variant hover:text-error rounded-full hover:bg-error/5">
<span className="material-symbols-outlined text-[22px]" data-icon="delete">delete</span>
</button>
</div>
</div>
</div>
{/*  Enhanced CTA Section  */}
<footer className="pt-12 flex flex-col items-center gap-6">
<button className="w-full py-5 rounded-2xl bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold text-base tracking-wider premium-shadow hover:brightness-105 active:scale-[0.99] transition-all flex items-center justify-center gap-4 group">
<span className="material-symbols-outlined group-hover:translate-x-1 transition-transform" data-icon="insights" style={{"fontVariationSettings":"'FILL' 1"}}>insights</span>
                Analyze My Spending
            </button>
<p className="text-[11px] text-on-surface-variant font-medium opacity-60 flex items-center gap-1.5 uppercase tracking-widest">
<span className="material-symbols-outlined text-[14px]" data-icon="verified_user">verified_user</span>
                Bank-grade encryption • Premium Privacy
            </p>
</footer>
</main>
{/*  Shared Footer Component  */}
<footer className="mt-32 w-full max-w-7xl mx-auto px-8 py-10 flex flex-col md:flex-row justify-center items-center gap-8 text-slate-500 font-inter text-[10px] tracking-[0.2em] uppercase opacity-60">
<div className="font-bold">© 2024 Premium Architect</div>
<div className="flex items-center gap-8">
<a className="hover:text-primary transition-colors" href="#">Privacy Protocol</a>
<a className="hover:text-primary transition-colors" href="#">Legal Terms</a>
<a className="hover:text-primary transition-colors" href="#">Support Desk</a>
</div>
</footer>

    </>
  );
}
