import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ChevronLeft, 
  ArrowRight, 
  X, 
  HelpCircle, 
  Calendar, 
  Clock, 
  Zap,
  Sparkles,
  Target,
  Timer
} from 'lucide-react';
import { useUserData } from '../context/UserDataContext';

export default function GoalStep3() {
  const navigate = useNavigate();
  const { userData, updateUserData } = useUserData();
  const [selectedTimeframe, setSelectedTimeframe] = useState(userData.goal.timeframeId || '3m');

  const handleNext = async () => {
    await updateUserData('goal.timeframeId', selectedTimeframe);
    navigate('/goals/step4');
  };
  
  const handleSelect = async (id) => {
    setSelectedTimeframe(id);
    await updateUserData('goal.timeframeId', id);
    navigate('/goals/step4');
  };

  const timeframes = [
    { id: '1m', title: '1 Month', desc: 'Fast turnaround for small and short-term goals.', icon: <Timer size={24} className="text-primary" />, status: 'FAST' },
    { id: '3m', title: '3 Months', desc: 'The sweet spot for building a solid savings habit.', icon: <Clock size={24} className="text-primary" />, status: 'RECOMMENDED', active: true },
    { id: '6m', title: '6 Months', desc: 'A steady pace for building a larger financial cushion.', icon: <Calendar size={24} className="text-primary" />, status: 'STEADY' }
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
                    <p className="text-[10px] font-black uppercase tracking-widest text-white/20 italic">Phase 03 / 05</p>
                    <h3 className="text-sm font-black italic uppercase tracking-tight">Timeframe</h3>
                </div>
                <span className="text-[10px] font-mono text-primary animate-pulse tracking-widest">STEP 3</span>
             </div>
             <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-primary w-3/5 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)] transition-all duration-700" />
             </div>
        </div>

        {/* Question Cluster */}
        <div className="text-center space-y-4 mb-12 max-w-2xl relative z-10">
            <h1 className="text-5xl font-black italic tracking-tighter leading-tight uppercase">Set a <span className="text-white/20">Deadline.</span></h1>
            <p className="text-xs font-medium italic text-white/40 uppercase tracking-widest leading-relaxed">
                Choose a realistic timeframe that matches your income schedule.
            </p>
        </div>

        {/* Option Matrix */}
        <div className="w-full max-w-xl space-y-4 relative z-10">
            {timeframes.map((time) => (
                <div 
                    key={time.id}
                    onClick={() => handleSelect(time.id)}
                    className={`bg-[#0A0A0A] border p-8 rounded-[2rem] flex items-center gap-8 cursor-pointer transition-all group ${selectedTimeframe === time.id ? 'border-primary/40 bg-primary/5 shadow-2xl shadow-primary/5' : 'border-white/5 hover:border-white/10 hover:bg-white/[0.03]'}`}
                >
                    <div className={`w-14 h-14 ${selectedTimeframe === time.id ? 'bg-primary/20' : 'bg-white/5'} border border-white/5 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        {time.icon}
                    </div>
                    <div className="flex-1 space-y-2">
                         <div className="flex items-center gap-3">
                             <h4 className={`text-lg font-black italic uppercase tracking-tight ${selectedTimeframe === time.id ? 'text-primary' : 'group-hover:text-primary'} transition-colors`}>{time.title}</h4>
                             <span className={`text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full ${selectedTimeframe === time.id ? 'bg-primary text-black' : 'bg-white/5 text-white/40'}`}>{time.status}</span>
                        </div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-white/20 italic leading-snug">{time.desc}</p>
                    </div>
                </div>
            ))}
        </div>

        {/* AI Insight */}
        <div className="mt-12 w-full max-w-xl p-8 bg-primary/5 border border-primary/10 rounded-[2.5rem] flex gap-6 items-center">
            <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center flex-shrink-0 shadow-xl border border-white/5">
                <Sparkles size={16} className="text-primary" />
            </div>
            <p className="text-[10px] font-black uppercase tracking-widest italic text-white/40 leading-relaxed">
                <span className="text-primary">Suggestion:</span> Studies show that setting a realistic deadline increases your chances of hitting a savings goal by <span className="text-primary">42.8%</span>.
            </p>
        </div>
      </main>

      {/* Control Surface */}
      <footer className="h-24 border-t border-white/5 px-12 flex justify-between items-center bg-black/80 backdrop-blur-xl relative z-50">
        <button 
             onClick={() => navigate('/goals/step2')}
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
