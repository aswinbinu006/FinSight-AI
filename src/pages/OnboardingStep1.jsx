import { Link } from 'react-router-dom';
import './OnboardingStep1.css';

export default function OnboardingStep1() {


  return (
    <>

{/*  Top Navigation Anchor  */}
<header className="w-full top-0 sticky z-50 bg-[#F5FBFA]/90 dark:bg-[#171D1C]/90 backdrop-blur-md">
<div className="flex justify-between items-center px-6 py-4 max-w-2xl mx-auto">
<div className="text-lg font-semibold text-[#171D1C] dark:text-[#F5FBFA]">
                Onboarding
            </div>
<div className="flex items-center gap-4">
<button className="text-[#3C4947] dark:text-[#BBCAC6] hover:bg-[#EFF5F4] dark:hover:bg-[#3C4947] transition-colors p-2 rounded-lg active:scale-95 transition-transform">
<span className="material-symbols-outlined" data-icon="help">help</span>
</button>
</div>
</div>
{/*  Separation Line  */}
<div className="bg-[#E9EFEE] dark:bg-[#3C4947] h-px max-w-2xl mx-auto"></div>
</header>
<main className="flex-grow flex flex-col items-center px-6 max-w-2xl mx-auto w-full pt-4 pb-12 md:pt-6 md:pb-16">
{/*  Step Indicator  */}
<div className="w-full mb-6">
<div className="flex items-center justify-between mb-3">
<span className="text-[10px] font-bold uppercase tracking-[0.15em] text-on-surface-variant">Step 1 of 4</span>
<span className="text-[10px] font-bold uppercase tracking-[0.15em] text-primary">Income Assessment</span>
</div>
<div className="h-1.5 w-full bg-surface-container-high rounded-full overflow-hidden">
<div className="h-full bg-primary w-1/4 rounded-full"></div>
</div>
</div>
{/*  Main Question Card Area - Slightly smaller and refined  */}
<div className="w-full card-area-tint rounded-2xl p-6 md:p-10 shadow-sm space-y-8">
{/*  Hero Content / Question  */}
<div className="text-center space-y-4">
<h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-on-surface leading-tight">
                    How much do you usually earn monthly?
                </h1>
<p className="text-on-surface-variant text-sm md:text-base max-w-md mx-auto leading-relaxed">
                    This helps us tailor your financial roadmap and identify potential growth opportunities in your portfolio.
                </p>
</div>
{/*  Main Input Section  */}
<div className="w-full max-w-sm mx-auto space-y-8">
<div className="relative group">
<div className="absolute left-6 top-1/2 -translate-y-1/2 text-xl font-semibold text-on-surface-variant group-focus-within:text-primary transition-colors">
                        $
                    </div>
<input className="w-full bg-surface-container-highest border-none rounded-xl py-6 pl-14 pr-6 text-3xl font-semibold text-on-surface focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all placeholder:text-outline-variant text-center" placeholder="0.00" type="text"/>
</div>
{/*  Intelligence Ray Feature  */}
<div className="intelligence-ray bg-surface-container-low/50 p-5 rounded-lg flex items-start gap-4 shadow-sm">
<span className="material-symbols-outlined text-primary text-xl" data-icon="lightbulb">lightbulb</span>
<div className="space-y-1">
<p className="text-[0.625rem] font-bold uppercase tracking-[0.1em] text-primary">AI Insights</p>
<p className="text-xs text-on-surface-variant leading-relaxed">
                            Users in your region with similar profiles typically report an average of <span className="text-on-surface font-bold">$5,200</span> monthly.
                        </p>
</div>
</div>
</div>
</div>
{/*  Reduced spacer for compact feel  */}
<div className="h-32 w-full"></div>
</main>
{/*  Bottom Navigation Shell  */}
<nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl flex justify-between items-center pb-6 pt-3 px-6 bg-gradient-to-t from-background via-background/95 to-transparent z-40">
{/*  Inactive Tab (Back)  */}
<button className="flex items-center justify-center text-[#3C4947] dark:text-[#BBCAC6] px-6 py-3 hover:bg-surface-container-low rounded-xl transition-all active:scale-95 font-['Inter'] text-xs font-bold tracking-wide uppercase">
<span className="material-symbols-outlined mr-2 text-lg" data-icon="arrow_back">arrow_back</span>
            Back
        </button>
{/*  Active Tab (Continue)  */}
<button className="flex items-center justify-center bg-gradient-to-r from-[#006B5F] to-[#14B8A6] text-white rounded-xl px-8 py-3 shadow-lg shadow-primary/20 hover:shadow-xl hover:brightness-105 transition-all active:scale-95 font-['Inter'] text-xs font-bold tracking-wide uppercase">
            Continue
            <span className="material-symbols-outlined ml-2 text-lg" data-icon="arrow_forward">arrow_forward</span>
</button>
</nav>
{/*  Decorative Canvas Layers  */}
<div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none opacity-40">
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]"></div>
<div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px]"></div>
</div>

    </>
  );
}
