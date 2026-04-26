import { Link } from 'react-router-dom';
import './GoalStep5.css';

export default function GoalStep5() {


  return (
    <>

{/*  TopAppBar  */}
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
<span className="text-[0.6875rem] font-medium uppercase tracking-[0.05em] text-on-surface-variant">Step 5 of 5</span>
<span className="text-[0.6875rem] font-medium uppercase tracking-[0.05em] text-primary">100% Complete</span>
</div>
<div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
<div className="h-full bg-primary-container w-full rounded-full"></div>
</div>
</div>
{/*  Headline Section  */}
<div className="text-center mb-10 max-w-2xl">
<h1 className="text-[2rem] font-semibold tracking-tight text-on-surface leading-tight mb-4">How well do you control your spending?</h1>
<p className="text-on-surface-variant body-md leading-relaxed">Understanding your financial discipline helps us calibrate your savings velocity.</p>
</div>
{/*  Centered White Card  */}
<div className="w-full max-w-xl bg-surface-container-lowest rounded-xl shadow-[0_4px_12px_rgba(15,23,42,0.03),0_2px_4px_rgba(15,23,42,0.02)] p-6 md:p-8 space-y-4">
{/*  Option 1: Very well  */}
<div className="group cursor-pointer flex items-center p-5 rounded-lg border border-transparent hover:border-primary/20 hover:bg-surface-container-low transition-all duration-200">
<div className="w-12 h-12 flex items-center justify-center rounded-lg bg-secondary-container text-on-secondary-container mr-5 group-hover:bg-primary-container group-hover:text-white transition-colors">
<span className="material-symbols-outlined" data-icon="check_circle">check_circle</span>
</div>
<div className="flex-grow">
<h3 className="font-semibold text-on-surface">Very well</h3>
<p className="text-sm text-on-surface-variant">Strict adherence to budgets and financial plans.</p>
</div>
<div className="opacity-0 group-hover:opacity-100 transition-opacity text-primary">
<span className="material-symbols-outlined" data-icon="radio_button_checked">radio_button_checked</span>
</div>
</div>
{/*  Option 2: Sometimes  */}
<div className="group cursor-pointer flex items-center p-5 rounded-lg border border-transparent hover:border-primary/20 hover:bg-surface-container-low transition-all duration-200">
<div className="w-12 h-12 flex items-center justify-center rounded-lg bg-secondary-container text-on-secondary-container mr-5 group-hover:bg-primary-container group-hover:text-white transition-colors">
<span className="material-symbols-outlined" data-icon="balance">balance</span>
</div>
<div className="flex-grow">
<h3 className="font-semibold text-on-surface">Sometimes</h3>
<p className="text-sm text-on-surface-variant">Occasional deviations but generally on track.</p>
</div>
<div className="opacity-0 group-hover:opacity-100 transition-opacity text-primary">
<span className="material-symbols-outlined" data-icon="radio_button_checked">radio_button_checked</span>
</div>
</div>
{/*  Option 3: Not really  */}
<div className="group cursor-pointer flex items-center p-5 rounded-lg border border-transparent hover:border-primary/20 hover:bg-surface-container-low transition-all duration-200">
<div className="w-12 h-12 flex items-center justify-center rounded-lg bg-secondary-container text-on-secondary-container mr-5 group-hover:bg-primary-container group-hover:text-white transition-colors">
<span className="material-symbols-outlined" data-icon="warning">warning</span>
</div>
<div className="flex-grow">
<h3 className="font-semibold text-on-surface">Not really</h3>
<p className="text-sm text-on-surface-variant">Difficulty maintaining consistent spending limits.</p>
</div>
<div className="opacity-0 group-hover:opacity-100 transition-opacity text-primary">
<span className="material-symbols-outlined" data-icon="radio_button_checked">radio_button_checked</span>
</div>
</div>
</div>
{/*  AI Intelligence Ray  */}
<div className="mt-8 flex items-center gap-3 p-4 bg-surface-container-low rounded-lg max-w-xl w-full border-l-2 border-primary-container">
<span className="material-symbols-outlined text-primary-container" data-icon="auto_awesome">auto_awesome</span>
<p className="text-xs text-on-surface-variant leading-relaxed">
<span className="font-semibold text-on-surface">AI Suggestion:</span> This is the final step! Based on your previous answers, we're ready to build your custom architect plan.
        </p>
</div>
</main>
{/*  BottomNavBar  */}
<footer className="fixed bottom-0 left-0 w-full flex justify-between items-center px-8 py-4 pb-safe bg-[#FFFFFF]/85 backdrop-blur-xl border-t border-[#BBCAC6]/20 z-50 rounded-t-2xl shadow-[0_-4px_12px_rgba(15,23,42,0.03)]">
{/*  Back Button  */}
<button className="flex items-center justify-center text-[#3C4947] px-6 py-2 rounded-lg hover:bg-[#EFF5F4] active:scale-95 transition-all group">
<span className="material-symbols-outlined mr-2 group-hover:-translate-x-1 transition-transform" data-icon="arrow_back">arrow_back</span>
<span className="font-['Inter'] text-[0.6875rem] font-medium uppercase tracking-[0.05em]">Back</span>
</button>
{/*  Next Button (Complete Setup)  */}
<button className="flex items-center justify-center bg-gradient-to-r from-[#006B5F] to-[#14B8A6] text-white rounded-lg px-8 py-2 active:scale-95 transition-all shadow-md hover:shadow-lg">
<span className="font-['Inter'] text-[0.6875rem] font-medium uppercase tracking-[0.05em] mr-2">Complete Setup</span>
<span className="material-symbols-outlined" data-icon="task_alt">task_alt</span>
</button>
</footer>
{/*  Bottom Spacing for fixed Nav  */}
<div className="h-24 md:h-20"></div>

    </>
  );
}
