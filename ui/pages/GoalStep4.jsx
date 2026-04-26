import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ChevronLeft, 
  ArrowRight, 
  X, 
  HelpCircle, 
  Target,
  Sparkles,
  Zap,
  Info,
  Scale
} from 'lucide-react';

export default function GoalStep4() {
  const navigate = useNavigate();
  const [savings, setSavings] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('finsight_monthlySavings');
    if (saved) setSavings(saved);
  }, []);

  const handleNext = () => {
    if (savings) {
      localStorage.setItem('finsight_monthlySavings', savings);
    }
    navigate('/goals/step5');
  };

  return (
    <div className="min-h-screen bg-black text-white font-body selection:bg-primary/30 flex flex-col overflow-hidden">
      {/* Immersive Header */}
      <header className="h-20 border-b border-white/5 flex items-center justify-between px-10 relative z-50">
        <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Target size={16} className="text-black" />
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] italic">Goal Architect</span>
        </div>
        
        <div className="flex items-center gap-6">
            <button className="text-white/20 hover:text-white transition-colors">
                <HelpCircle size={18} />
            </button>
            <button onClick={() => navigate('/dashboard')} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/40 hover:text-red-500 transition-colors">
                <X size={16} /> Exit Protocol
            </button>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center p-10 relative">
        {/* Background Neural Decal */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
             <Target size={600} />
        </div>

        {/* Progress Matrix */}
        <div className="w-full max-w-xl mb-12 space-y-4">
             <div className="flex justify-between items-end">
                <div className="space-y-1">
                    <p className="text-[10px] font-black uppercase tracking-widest text-white/20 italic">Phase 04 / 05</p>
                    <h3 className="text-sm font-black italic uppercase tracking-tight">Monthly Savings</h3>
                </div>
                <span className="text-[10px] font-mono text-primary animate-pulse tracking-widest">STEP 4</span>
             </div>
             <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-primary w-4/5 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)] transition-all duration-700" />
             </div>
        </div>

        {/* Question Cluster */}
        <div className="text-center space-y-4 mb-12 max-w-2xl relative z-10">
            <h1 className="text-5xl font-black italic tracking-tighter leading-tight uppercase">How much can you <span className="text-white/20">save?</span></h1>
            <p className="text-xs font-medium italic text-white/40 uppercase tracking-widest leading-relaxed">
                Enter the amount you can comfortably save each month.
            </p>
        </div>

        {/* Input Card */}
        <div className="w-full max-w-xl bg-[#0A0A0A] border border-white/5 p-12 rounded-[3rem] shadow-2xl relative z-10 space-y-8 group hover:border-primary/20 transition-all">
            <div className="space-y-4">
                 <label className="text-[10px] font-black uppercase tracking-widest text-white/20 italic ml-2">Monthly Savings (INR)</label>
                 <div className="relative">
                    <input 
                        type="number" 
                        value={savings}
                        onChange={(e) => setSavings(e.target.value)}
                        placeholder="Enter amount (₹)" 
                        className="w-full bg-white/[0.02] border border-white/5 rounded-[2rem] px-10 py-8 text-4xl font-black italic text-primary placeholder:text-white/5 focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all"
                    />
                    <div className="absolute right-8 top-1/2 -translate-y-1/2 text-white/10 font-black italic text-2xl uppercase tracking-tighter pointer-events-none">INR</div>
                 </div>
            </div>
            
            <div className="flex items-center gap-4 text-white/20 text-[9px] font-black uppercase tracking-widest italic ml-2">
                <Scale size={12} className="text-primary" />
                Enter the amount after paying all your basic bills.
            </div>
        </div>

        {/* AI Insight */}
        <div className="mt-12 w-full max-w-xl p-8 bg-primary/5 border border-primary/10 rounded-[2.5rem] flex gap-6 items-center">
            <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center flex-shrink-0 shadow-xl border border-white/5">
                <Sparkles size={16} className="text-primary" />
            </div>
            <p className="text-[10px] font-black uppercase tracking-widest italic text-white/40 leading-relaxed">
                <span className="text-primary">Suggestion:</span> A common guideline is the 50/30/20 rule, which suggests aiming to save <span className="text-primary">20% of your income</span>.
            </p>
        </div>
      </main>

      {/* Control Surface */}
      <footer className="h-24 border-t border-white/5 px-12 flex justify-between items-center bg-black/80 backdrop-blur-xl relative z-50">
        <button 
             onClick={() => navigate('/goals/step3')}
             className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-white/20 hover:text-white transition-colors group"
        >
             <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Go Back
        </button>
        <button 
            onClick={handleNext}
            className="px-10 py-4 bg-primary text-black text-[12px] font-black uppercase tracking-[0.3em] rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-primary/20"
        >
            Next Step
        </button>
      </footer>
    </div>
  );
}
