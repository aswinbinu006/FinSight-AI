import { Link } from 'react-router-dom';
import './OnboardingStep4.css';

export default function OnboardingStep4() {


  return (
    <>

{/*  Top Navigation (Shell Implementation)  */}
<nav className="w-full top-0 sticky bg-background/95 backdrop-blur-sm z-50">
<div className="flex justify-between items-center px-6 py-4 max-w-3xl mx-auto">
<div className="text-base font-semibold text-on-surface">Onboarding</div>
<div className="flex items-center gap-4">
<button className="material-symbols-outlined text-on-surface-variant hover:bg-surface-container-low p-1.5 rounded-full transition-colors active:scale-95 text-[20px]">
          help
        </button>
</div>
</div>
<div className="bg-surface-container-high h-px w-full max-w-3xl mx-auto"></div>
</nav>
{/*  Main Canvas Content - Reduced vertical padding to make it more compact  */}
<main className="flex-grow flex flex-col items-center px-6 py-12 md:py-20 max-w-3xl mx-auto w-full">
{/*  Progress Indicator  */}
<div className="text-center w-full max-w-[240px] mx-auto mb-6">
<span className="font-label text-[10px] font-bold tracking-[0.15em] uppercase text-on-surface-variant block mb-3">Step 4 of 4</span>
<div className="h-1 w-full bg-surface-container-highest rounded-full overflow-hidden">
<div className="h-full w-full bg-primary rounded-full transition-all duration-700"></div>
</div>
</div>
{/*  Hero Question - Slightly smaller font  */}
<div className="text-center">
<h1 className="font-headline text-2xl md:text-4xl font-semibold tracking-tight text-on-surface mb-4">What are you trying to achieve?</h1>
<p className="text-on-surface-variant text-sm md:text-base max-w-md mx-auto leading-relaxed">Select your primary financial objective to help us tailor your Premium dashboard.</p>
</div>
{/*  Main Question Card Area with subtle teal tint and refined padding  */}
<div className="w-full question-card-bg rounded-[1.5rem] p-4 md:p-8 border border-outline-variant/20 shadow-sm">
{/*  Selection Grid  */}
<div className="w-full grid gap-4">
{/*  Option 1: Save money  */}
<button className="group relative flex items-center text-left p-4 md:p-6 rounded-xl border border-transparent hover:bg-surface-container-lowest hover:border-primary/20 ambient-shadow transition-all duration-300 bg-surface-container-lowest focus:ring-2 focus:ring-primary/40 focus:outline-none intelligence-ray">
<div className="bg-surface-container-highest p-3 rounded-lg mr-5 group-hover:bg-primary/10 transition-colors">
<span className="material-symbols-outlined text-primary text-[22px]" data-icon="savings">savings</span>
</div>
<div className="flex-grow">
<h3 className="font-headline font-semibold text-on-surface text-base">Save money</h3>
<p className="text-on-surface-variant text-xs mt-0.5">Build a robust safety net and grow your long-term capital.</p>
</div>
<span className="material-symbols-outlined opacity-0 group-hover:opacity-100 text-primary transition-opacity text-[20px]" data-icon="check_circle">check_circle</span>
</button>
{/*  Option 2: Reduce expenses (Selected State)  */}
<button className="group relative flex items-center text-left p-4 md:p-6 rounded-xl border-2 border-primary ambient-shadow transition-all duration-300 bg-surface-container-lowest focus:ring-2 focus:ring-primary/40 focus:outline-none intelligence-ray shadow-lg shadow-primary/5">
<div className="bg-primary/10 p-3 rounded-lg mr-5">
<span className="material-symbols-outlined text-primary text-[22px]" data-icon="account_balance_wallet" style={{"fontVariationSettings":"'FILL' 1"}}>account_balance_wallet</span>
</div>
<div className="flex-grow">
<h3 className="font-headline font-semibold text-on-surface text-base">Reduce expenses</h3>
<p className="text-on-surface-variant text-xs mt-0.5">Identify inefficiencies and optimize your recurring overhead.</p>
</div>
<span className="material-symbols-outlined text-primary text-[20px]" data-icon="check_circle" style={{"fontVariationSettings":"'FILL' 1"}}>check_circle</span>
</button>
{/*  Option 3: Manage spending better  */}
<button className="group relative flex items-center text-left p-4 md:p-6 rounded-xl border border-transparent hover:bg-surface-container-lowest hover:border-primary/20 ambient-shadow transition-all duration-300 bg-surface-container-lowest focus:ring-2 focus:ring-primary/40 focus:outline-none intelligence-ray">
<div className="bg-surface-container-highest p-3 rounded-lg mr-5 group-hover:bg-primary/10 transition-colors">
<span className="material-symbols-outlined text-primary text-[22px]" data-icon="insights">insights</span>
</div>
<div className="flex-grow">
<h3 className="font-headline font-semibold text-on-surface text-base">Manage spending better</h3>
<p className="text-on-surface-variant text-xs mt-0.5">Gain granular control over daily cash flow and budgeting.</p>
</div>
<span className="material-symbols-outlined opacity-0 group-hover:opacity-100 text-primary transition-opacity text-[20px]" data-icon="check_circle">check_circle</span>
</button>
</div>
</div>
{/*  Reduced bottom spacer for more professional vertical rhythm  */}
<div className="h-24 w-full"></div>
</main>
{/*  Bottom Navigation (Shell Implementation)  */}
<footer className="fixed bottom-0 left-0 w-full py-6 px-6 bg-gradient-to-t from-background via-background/90 to-transparent z-50">
<div className="w-full max-w-3xl mx-auto flex justify-between items-center">
{/*  Back Action  */}
<button className="flex items-center justify-center text-on-surface-variant px-4 py-2 font-body text-xs font-semibold tracking-wide uppercase hover:text-primary transition-colors active:translate-y-0.5">
<span className="material-symbols-outlined mr-2 text-[18px]" data-icon="arrow_back">arrow_back</span>
        Back
      </button>
{/*  Primary Action: Complete Analysis  */}
<button className="flex items-center justify-center bg-gradient-to-r from-[#006B5F] to-[#14B8A6] text-white rounded-lg px-8 py-3.5 shadow-md shadow-primary/20 font-body text-xs font-bold tracking-widest uppercase hover:brightness-110 transition-all active:scale-[0.98]">
        Complete Analysis
        <span className="material-symbols-outlined ml-2 text-[18px]" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
</footer>

    </>
  );
}
