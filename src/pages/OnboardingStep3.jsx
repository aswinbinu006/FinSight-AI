import { Link } from 'react-router-dom';
import './OnboardingStep3.css';

export default function OnboardingStep3() {


  return (
    <>

{/*  TopNavBar  */}
<header className="w-full top-0 sticky bg-background/80 backdrop-blur-md z-50">
<div className="flex justify-between items-center px-6 py-4 max-w-xl mx-auto">
<div className="text-base font-semibold text-on-surface font-headline tracking-tight">Onboarding</div>
<div className="flex items-center gap-4">
<button className="material-symbols-outlined text-primary hover:bg-surface-container-low p-1.5 rounded-full transition-all active:scale-95" data-icon="help">help</button>
</div>
</div>
<div className="bg-outline-variant/20 h-px max-w-xl mx-auto"></div>
</header>
{/*  Main Content  */}
<main className="flex-grow flex flex-col items-center px-6 max-w-xl mx-auto w-full pt-4 pb-12 md:pt-6 md:pb-16">
{/*  Progress Indicator  */}
<div className="w-full mb-6">
<div className="flex justify-end mb-2.5">
<span className="text-[0.625rem] font-bold uppercase tracking-[0.15em] text-primary">Step 3 of 4</span>
</div>
<div className="h-1.5 w-full bg-surface-container-high rounded-full overflow-hidden">
<div className="h-full bg-primary w-[75%] rounded-full transition-all duration-700 ease-out shadow-[0_0_8px_rgba(0,107,95,0.3)]"></div>
</div>
</div>
{/*  Question Section & Option Cards Container  */}
<div className="w-full">
<div className="text-center mb-6">
<h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-on-surface mb-4 leading-snug">Do you save money regularly?</h1>
<p className="text-on-surface-variant text-sm md:text-base max-w-md mx-auto leading-relaxed">This helps us tailor your Premium-grade financial projections and wealth optimization strategies.</p>
</div>
{/*  Option Cards Area - Subtle Teal Tint  */}
<div className="bg-accent-surface rounded-2xl p-5 md:p-6 space-y-3 border border-primary/5">
{/*  Option 1  */}
<button className="group relative flex items-center justify-between w-full p-4 bg-surface-container-lowest hover:bg-surface-container-low border-transparent border-2 hover:border-primary/20 rounded-xl transition-all duration-300 text-left shadow-[0_2px_8px_rgba(15,23,42,0.02)] active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-primary/20">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
<span className="material-symbols-outlined text-xl" style={{"fontVariationSettings":"'FILL' 1"}}>verified</span>
</div>
<div>
<h3 className="text-base font-semibold text-on-surface">Yes, consistently</h3>
<p className="text-xs text-on-surface-variant">I have a structured monthly savings plan.</p>
</div>
</div>
<div className="w-5 h-5 rounded-full border-2 border-outline-variant group-hover:border-primary flex items-center justify-center transition-colors">
<div className="w-2 h-2 rounded-full bg-primary scale-0 group-focus:scale-100 transition-transform"></div>
</div>
</button>
{/*  Option 2  */}
<button className="group relative flex items-center justify-between w-full p-4 bg-surface-container-lowest hover:bg-surface-container-low border-transparent border-2 hover:border-primary/20 rounded-xl transition-all duration-300 text-left shadow-[0_2px_8px_rgba(15,23,42,0.02)] active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-primary/20">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-secondary-container/30 flex items-center justify-center text-secondary group-hover:scale-105 transition-transform">
<span className="material-symbols-outlined text-xl">calendar_today</span>
</div>
<div>
<h3 className="text-base font-semibold text-on-surface">Occasionally</h3>
<p className="text-xs text-on-surface-variant">I save when I have extra funds available.</p>
</div>
</div>
<div className="w-5 h-5 rounded-full border-2 border-outline-variant group-hover:border-primary flex items-center justify-center transition-colors">
<div className="w-2 h-2 rounded-full bg-primary scale-0 group-focus:scale-100 transition-transform"></div>
</div>
</button>
{/*  Option 3  */}
<button className="group relative flex items-center justify-between w-full p-4 bg-surface-container-lowest hover:bg-surface-container-low border-transparent border-2 hover:border-primary/20 rounded-xl transition-all duration-300 text-left shadow-[0_2px_8px_rgba(15,23,42,0.02)] active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-primary/20">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-on-surface-variant group-hover:scale-105 transition-transform">
<span className="material-symbols-outlined text-xl">history</span>
</div>
<div>
<h3 className="text-base font-semibold text-on-surface">Rarely</h3>
<p className="text-xs text-on-surface-variant">I find it difficult to save at this moment.</p>
</div>
</div>
<div className="w-5 h-5 rounded-full border-2 border-outline-variant group-hover:border-primary flex items-center justify-center transition-colors">
<div className="w-2 h-2 rounded-full bg-primary scale-0 group-focus:scale-100 transition-transform"></div>
</div>
</button>
</div>
</div>
</main>
{/*  BottomNavBar  */}
<nav className="fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-lg border-t border-outline-variant/10 z-50">
<div className="max-w-xl mx-auto w-full flex justify-between items-center py-4 px-6">
<button className="flex items-center justify-center text-on-surface-variant px-4 py-2 font-semibold text-[0.625rem] tracking-widest uppercase hover:text-primary transition-colors active:translate-y-0.5">
<span className="material-symbols-outlined mr-2 text-base" data-icon="arrow_back">arrow_back</span>
            Back
        </button>
<button className="flex items-center justify-center bg-gradient-to-r from-[#006B5F] to-[#14B8A6] text-white rounded-full px-8 py-2.5 shadow-md shadow-primary/20 font-semibold text-[0.625rem] tracking-widest uppercase hover:brightness-110 transition-all active:scale-[0.98]">
            Continue
            <span className="material-symbols-outlined ml-2 text-base" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
</nav>

    </>
  );
}
