import { Link } from 'react-router-dom';
import './OnboardingStep2.css';

export default function OnboardingStep2() {


  return (
    <>

{/*  Header / Context  */}
<header className="w-full max-w-xl mx-auto px-6 pt-8 pb-4">
<div className="flex justify-between items-center mb-6">
<span className="text-[11px] font-bold tracking-[0.15em] uppercase text-on-surface-variant/70">Onboarding</span>
<button className="text-on-surface-variant/60 hover:text-primary transition-colors">
<span className="material-symbols-outlined text-xl" data-icon="help">help</span>
</button>
</div>
{/*  Progress Indicator  */}
<div className="w-full">
<div className="flex justify-between items-end mb-2.5">
<span className="text-[10px] font-semibold uppercase tracking-wider text-primary">Step 2 of 4</span>
<span className="text-[10px] font-semibold text-on-surface-variant/50">50% Complete</span>
</div>
<div className="h-1.5 w-full bg-black/5 rounded-full overflow-hidden">
<div className="h-full bg-primary w-1/2 rounded-full transition-all duration-700 ease-out"></div>
</div>
</div>
</header>
<main className="flex-grow flex flex-col items-center px-6 max-w-xl mx-auto w-full pt-4 pb-32">
{/*  Premium Question Card  */}
<div className="w-full bg-surface rounded-premium shadow-premium p-8 md:p-10 border border-white">
{/*  Header Section  */}
<div className="mb-10 text-center">
<h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-on-surface mb-3">
                    Do you often spend more than planned?
                </h1>
<p className="text-on-surface-variant text-sm leading-relaxed max-w-sm mx-auto">
                    Understanding your spontaneous habits helps us curate a financial plan that actually works for your lifestyle.
                </p>
</div>
{/*  Selection Options  */}
<div className="space-y-4">
{/*  Option: Rarely  */}
<button className="option-card group w-full text-left p-5 rounded-xl border border-outline-variant/30 hover:border-primary/40 hover:bg-primary/[0.02] transition-all duration-200">
<div className="flex items-center space-x-4">
<div className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-primary/70 group-hover:text-primary transition-colors">
<span className="material-symbols-outlined text-xl" data-icon="savings">savings</span>
</div>
<div className="flex-grow">
<h3 className="font-semibold text-sm text-on-surface">Rarely</h3>
<p className="text-xs text-on-surface-variant/80">I stick to my budget 90% of the time.</p>
</div>
<div className="w-5 h-5 rounded-full border-2 border-outline-variant/40 group-hover:border-primary/40 flex items-center justify-center">
<div className="w-2 h-2 rounded-full bg-primary opacity-0 group-active:opacity-100 transition-opacity"></div>
</div>
</div>
</button>
{/*  Option: Sometimes (Highlighted)  */}
<button className="option-card active w-full text-left p-5 rounded-xl border-2 border-primary shadow-sm relative transition-all duration-200">
<div className="absolute -top-3 left-6 px-3 py-1 bg-primary text-white text-[9px] font-bold uppercase tracking-widest rounded-full shadow-sm">
                        Most Common
                    </div>
<div className="flex items-center space-x-4">
<div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-xl" data-icon="shopping_bag" style={{"fontVariationSettings":"'FILL' 1"}}>shopping_bag</span>
</div>
<div className="flex-grow">
<h3 className="font-semibold text-sm text-on-surface">Sometimes</h3>
<p className="text-xs text-on-surface-variant/80">Occasional treats or unplanned needs occur.</p>
</div>
<div className="w-5 h-5 rounded-full border-2 border-primary flex items-center justify-center">
<div className="w-2.5 h-2.5 rounded-full bg-primary"></div>
</div>
</div>
</button>
{/*  Option: Often  */}
<button className="option-card group w-full text-left p-5 rounded-xl border border-outline-variant/30 hover:border-primary/40 hover:bg-primary/[0.02] transition-all duration-200">
<div className="flex items-center space-x-4">
<div className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-primary/70 group-hover:text-primary transition-colors">
<span className="material-symbols-outlined text-xl" data-icon="trending_up">trending_up</span>
</div>
<div className="flex-grow">
<h3 className="font-semibold text-sm text-on-surface">Often</h3>
<p className="text-xs text-on-surface-variant/80">I find it difficult to track daily small spends.</p>
</div>
<div className="w-5 h-5 rounded-full border-2 border-outline-variant/40 group-hover:border-primary/40 flex items-center justify-center">
<div className="w-2 h-2 rounded-full bg-primary opacity-0 group-active:opacity-100 transition-opacity"></div>
</div>
</div>
</button>
</div>
{/*  Premium Insight  */}
<div className="mt-10 flex items-start space-x-4 p-5 rounded-xl bg-background/50 border border-primary/5">
<span className="material-symbols-outlined text-primary text-xl mt-0.5" data-icon="verified_user">verified_user</span>
<div>
<p className="text-[11px] font-bold text-primary uppercase tracking-wider mb-1">Our Intelligence Engine</p>
<p className="text-xs text-on-surface-variant leading-relaxed">
                        We use this to calibrate your "Flex Fund"—a personalized buffer that helps you stay solvent even when occasional overspending happens.
                    </p>
</div>
</div>
</div>
</main>
{/*  Navigation Footer  */}
<footer className="fixed bottom-0 left-0 w-full bg-white/60 backdrop-blur-xl border-t border-black/5 z-50">
<div className="max-w-xl mx-auto px-6 py-6 flex justify-between items-center">
<button className="flex items-center text-on-surface-variant hover:text-on-surface transition-colors py-3 px-4 -ml-4">
<span className="material-symbols-outlined text-lg mr-2" data-icon="chevron_left">chevron_left</span>
<span className="text-xs font-bold uppercase tracking-widest">Back</span>
</button>
<button className="bg-primary text-white px-10 py-3.5 rounded-full shadow-lg shadow-primary/25 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center group">
<span className="text-xs font-bold uppercase tracking-widest mr-2">Continue</span>
<span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1" data-icon="chevron_right">chevron_right</span>
</button>
</div>
</footer>

    </>
  );
}
