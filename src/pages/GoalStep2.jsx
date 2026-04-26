import { Link } from 'react-router-dom';
import './GoalStep2.css';

export default function GoalStep2() {


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
<span className="text-[0.6875rem] font-medium uppercase tracking-[0.05em] text-on-surface-variant">Step 2 of 5</span>
<span className="text-[0.6875rem] font-medium uppercase tracking-[0.05em] text-primary">40% Complete</span>
</div>
<div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
<div className="h-full bg-primary-container w-[40%] rounded-full transition-all duration-500"></div>
</div>
</div>
{/*  Headline Section  */}
<div className="text-center mb-10 max-w-2xl">
<h1 className="text-[2rem] font-semibold tracking-tight text-on-surface leading-tight mb-4">How much do you want to achieve?</h1>
<p className="text-on-surface-variant body-md leading-relaxed">Define the target capital for your financial milestone.</p>
</div>
{/*  Centered White Card  */}
<div className="w-full max-w-xl bg-surface-container-lowest rounded-xl shadow-[0_4px_12px_rgba(15,23,42,0.03),0_2px_4px_rgba(15,23,42,0.02)] p-8 md:p-10 space-y-6">
<div className="space-y-4">
<label className="block text-[0.6875rem] font-bold uppercase tracking-[0.05em] text-on-surface-variant ml-1">Target Amount</label>
<div className="relative">
<input className="w-full bg-surface-container-low border-none rounded-lg px-6 py-5 text-xl font-semibold text-on-surface placeholder:text-outline/50 focus:ring-2 focus:ring-primary/20 transition-all outline-none" placeholder="Enter amount (₹)" type="number"/>
</div>
</div>
</div>
{/*  AI Intelligence Ray (Architect's Insight)  */}
<div className="mt-8 flex items-center gap-3 p-4 bg-surface-container-low rounded-lg max-w-xl w-full border-l-2 border-primary-container">
<span className="material-symbols-outlined text-primary-container" data-icon="lightbulb">lightbulb</span>
<p className="text-xs text-on-surface-variant leading-relaxed">
<span className="font-semibold text-on-surface">Architect's Insight:</span> Users aiming for early retirement typically target 25x-30x of their annual expenses to ensure long-term sustainability.
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
{/*  Continue Button  */}
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
