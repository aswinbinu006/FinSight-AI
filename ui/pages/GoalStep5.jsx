import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ChevronLeft, 
  CheckCircle2, 
  X, 
  HelpCircle, 
  Target,
  Sparkles,
  Zap,
  Info,
  ShieldCheck,
  Activity,
  Flame,
  ArrowRight
} from 'lucide-react';

export default function GoalStep5() {
  const navigate = useNavigate();

  const disciplineLevels = [
    { id: 'well', title: 'Very Disciplined', desc: 'I rarely overspend and stick to my budget.', icon: <ShieldCheck size={24} className="text-primary" /> },
    { id: 'sometimes', title: 'Average Control', desc: 'I sometimes overspend but usually stay on track.', icon: <Activity size={24} className="text-primary" /> },
    { id: 'not_really', title: 'Needs Improvement', desc: 'I often find myself spending more than I planned.', icon: <Flame size={24} className="text-primary" /> }
  ];

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
                    <p className="text-[10px] font-black uppercase tracking-widest text-white/20 italic">Phase 05 / 05</p>
                    <h3 className="text-sm font-black italic uppercase tracking-tight">Financial Discipline</h3>
                </div>
                <span className="text-[10px] font-mono text-primary animate-pulse tracking-widest">STEP 5</span>
             </div>
             <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-primary w-full shadow-[0_0_15px_rgba(16,185,129,0.5)] transition-all duration-700" />
             </div>
        </div>

        {/* Question Cluster */}
        <div className="text-center space-y-4 mb-12 max-w-2xl relative z-10">
            <h1 className="text-5xl font-black italic tracking-tighter leading-tight uppercase">Evaluate your <span className="text-white/20">Control.</span></h1>
            <p className="text-xs font-medium italic text-white/40 uppercase tracking-widest leading-relaxed">
                Tell us how disciplined you are with your cash so we can be realistic.
            </p>
        </div>

        {/* Option Matrix */}
        <div className="w-full max-w-xl space-y-4 relative z-10">
            {disciplineLevels.map((lvl) => (
                <div 
                    key={lvl.id}
                    onClick={() => navigate('/goals/result')}
                    className="bg-[#0A0A0A] border border-white/5 p-8 rounded-[2rem] flex items-center gap-8 cursor-pointer hover:bg-white/[0.03] hover:border-primary/20 transition-all group"
                >
                    <div className="w-14 h-14 bg-white/5 border border-white/5 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        {lvl.icon}
                    </div>
                    <div className="flex-1 space-y-1">
                        <h4 className="text-lg font-black italic uppercase tracking-tight group-hover:text-primary transition-colors">{lvl.title}</h4>
                        <p className="text-[10px] font-black uppercase tracking-widest text-white/20 italic">{lvl.desc}</p>
                    </div>
                    <CheckCircle2 size={20} className="text-white/5 group-hover:text-primary transition-all" />
                </div>
            ))}
        </div>

        {/* AI Insight */}
        <div className="mt-12 w-full max-w-xl p-8 bg-primary/5 border border-primary/10 rounded-[2.5rem] flex gap-6 items-center">
            <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center flex-shrink-0 shadow-xl border border-white/5">
                <Sparkles size={16} className="text-primary" />
            </div>
            <p className="text-[10px] font-black uppercase tracking-widest italic text-white/40 leading-relaxed">
                <span className="text-primary">Almost done:</span> We have gathered your details and are ready to create your personalized wealth plan!
            </p>
        </div>
      </main>

      {/* Control Surface */}
      <footer className="h-24 border-t border-white/5 px-12 flex justify-between items-center bg-black/80 backdrop-blur-xl relative z-50">
        <button 
             onClick={() => navigate('/goals/step4')}
             className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-white/20 hover:text-white transition-colors group"
        >
             <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Go Back
        </button>
        <button 
            onClick={() => {
              // Final Action
              navigate('/goals/result');
            }}
            className="px-10 py-4 bg-primary text-black text-[12px] font-black uppercase tracking-[0.3em] rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-primary/20 flex items-center gap-3"
        >
            See Your Plan <ArrowRight size={16} />
        </button>
      </footer>
    </div>
  );
}
