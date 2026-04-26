import { Link } from 'react-router-dom';
import './GoalStep1.css';

export default function GoalStep1() {


  return (
    <>

{/*  TopAppBar (Based on Shared Components JSON)  */}
<header className="flex justify-between items-center px-6 h-16 w-full docked full-width top-0 bg-gradient-to-b from-[#E9EFEE] to-[#F5FBFA] z-40">
<div className="text-lg font-bold text-[#006B5F] tracking-tight">Goal Architect</div>
<div className="flex items-center gap-4">
<button className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-[#3C4947] hover:bg-[#EFF5F4] transition-all duration-200 ease-in-out font-medium">
<span className="material-symbols-outlined text-sm" data-icon="close">close</span>
<span>Exit</span>
</button>
<div className="p-2 text-[#006B5F] hover:bg-[#EFF5F4] rounded-full cursor-pointer transition-all">
<span className="material-symbols-outlined" data-icon="help_outline">help_outline</span>
</div>
</div>
</header>
{/*  Main Content Area  */}
<main className="flex-grow flex flex-col items-center justify-center px-6 py-12 bg-gradient-to-b from-background to-surface-container-low">
{/*  Progress Indicator  */}
<div className="w-full max-w-md mb-12">
<div className="flex justify-between items-end mb-3">
<span className="text-[0.6875rem] font-medium uppercase tracking-[0.05em] text-on-surface-variant">Step 1 of 5</span>
<span className="text-[0.6875rem] font-medium uppercase tracking-[0.05em] text-primary">20% Complete</span>
</div>
<div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
<div className="h-full bg-primary-container w-[20%] rounded-full"></div>
</div>
</div>
{/*  Headline Section  */}
<div className="text-center mb-10 max-w-2xl">
<h1 className="text-[2rem] font-semibold tracking-tight text-on-surface leading-tight mb-4">What are you trying to achieve?</h1>
<p className="text-on-surface-variant body-md leading-relaxed">Help us tailor the FinSight AI engine to your specific Premium objectives.</p>
</div>
{/*  Centered White Card (The Nesting Rule)  */}
<div className="w-full max-w-xl bg-surface-container-lowest rounded-xl shadow-[0_4px_12px_rgba(15,23,42,0.03),0_2px_4px_rgba(15,23,42,0.02)] p-6 md:p-8 space-y-4">
{/*  Option 1: Save money  */}
<div className="group cursor-pointer flex items-center p-5 rounded-lg border border-transparent hover:border-primary/20 hover:bg-surface-container-low transition-all duration-200">
<div className="w-12 h-12 flex items-center justify-center rounded-lg bg-secondary-container text-on-secondary-container mr-5 group-hover:bg-primary-container group-hover:text-white transition-colors">
<span className="material-symbols-outlined" data-icon="savings">savings</span>
</div>
<div className="flex-grow">
<h3 className="font-semibold text-on-surface">Save money</h3>
<p className="text-sm text-on-surface-variant">Optimize capital allocation and reserves.</p>
</div>
<div className="opacity-0 group-hover:opacity-100 transition-opacity text-primary">
<span className="material-symbols-outlined" data-icon="check_circle">check_circle</span>
</div>
</div>
{/*  Option 2: Reduce expenses  */}
<div className="group cursor-pointer flex items-center p-5 rounded-lg border border-transparent hover:border-primary/20 hover:bg-surface-container-low transition-all duration-200">
<div className="w-12 h-12 flex items-center justify-center rounded-lg bg-secondary-container text-on-secondary-container mr-5 group-hover:bg-primary-container group-hover:text-white transition-colors">
<span className="material-symbols-outlined" data-icon="trending_down">trending_down</span>
</div>
<div className="flex-grow">
<h3 className="font-semibold text-on-surface">Reduce expenses</h3>
<p className="text-sm text-on-surface-variant">Identify and eliminate operational inefficiencies.</p>
</div>
<div className="opacity-0 group-hover:opacity-100 transition-opacity text-primary">
<span className="material-symbols-outlined" data-icon="check_circle">check_circle</span>
</div>
</div>
{/*  Option 3: Build a savings habit  */}
<div className="group cursor-pointer flex items-center p-5 rounded-lg border border-transparent hover:border-primary/20 hover:bg-surface-container-low transition-all duration-200">
<div className="w-12 h-12 flex items-center justify-center rounded-lg bg-secondary-container text-on-secondary-container mr-5 group-hover:bg-primary-container group-hover:text-white transition-colors">
<span className="material-symbols-outlined" data-icon="auto_mode">auto_mode</span>
</div>
<div className="flex-grow">
<h3 className="font-semibold text-on-surface">Build a savings habit</h3>
<p className="text-sm text-on-surface-variant">Automate recurring contributions to growth funds.</p>
</div>
<div className="opacity-0 group-hover:opacity-100 transition-opacity text-primary">
<span className="material-symbols-outlined" data-icon="check_circle">check_circle</span>
</div>
</div>
</div>
{/*  AI Intelligence Ray (Design System Specialized Component)  */}
<div className="mt-8 flex items-center gap-3 p-4 bg-surface-container-low rounded-lg max-w-xl w-full border-l-2 border-primary-container">
<span className="material-symbols-outlined text-primary-container" data-icon="auto_awesome">auto_awesome</span>
<p className="text-xs text-on-surface-variant leading-relaxed">
<span className="font-semibold text-on-surface">AI Suggestion:</span> Most Premium clients begin by optimizing reserves to build a 6-month operational buffer.
            </p>
</div>
</main>
{/*  BottomNavBar (Based on Shared Components JSON)  */}
<footer className="fixed bottom-0 left-0 w-full flex justify-between items-center px-8 py-4 pb-safe bg-[#FFFFFF]/85 backdrop-blur-xl border-t border-[#BBCAC6]/20 z-50 rounded-t-2xl shadow-[0_-4px_12px_rgba(15,23,42,0.03)]">
{/*  Back Button (Inactive state from JSON)  */}
<button className="flex items-center justify-center text-[#3C4947] px-6 py-2 rounded-lg hover:bg-[#EFF5F4] active:scale-95 transition-all group">
<span className="material-symbols-outlined mr-2 group-hover:-translate-x-1 transition-transform" data-icon="arrow_back">arrow_back</span>
<span className="font-['Inter'] text-[0.6875rem] font-medium uppercase tracking-[0.05em]">Back</span>
</button>
{/*  Next Button (Active state from JSON)  */}
<button className="flex items-center justify-center bg-gradient-to-r from-[#006B5F] to-[#14B8A6] text-white rounded-lg px-8 py-2 active:scale-95 transition-all shadow-md hover:shadow-lg">
<span className="font-['Inter'] text-[0.6875rem] font-medium uppercase tracking-[0.05em] mr-2">Continue</span>
<span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
</button>
</footer>
{/*  Bottom Spacing for fixed Nav  */}
<div className="h-24 md:h-20"></div>

    </>
  );
}
