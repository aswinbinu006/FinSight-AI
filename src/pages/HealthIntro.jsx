import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutGrid, HeartPulse, Trash2, Target, Brain, Settings, LogOut, ChevronRight, PlayCircle, Clock } from 'lucide-react';

const HealthIntro = () => {
  return (
    <div className="min-h-screen bg-[#000000] text-white flex font-sans">
      {/* Sidebar */}
      <aside className="fixed left-6 top-6 bottom-6 w-24 rounded-[3rem] bg-[#0A0A0A] border border-white/[0.08] flex flex-col items-center py-10 justify-between z-50">
        <div className="flex flex-col items-center gap-12 w-full">
          <Link to="/" className="w-12 h-12 rounded-2xl bg-[#FFFFFF] flex items-center justify-center text-black shadow-lg">
            <span className="text-[12px] font-black tracking-tighter">F</span>
          </Link>
          <nav className="flex flex-col gap-8 items-center w-full">
            <Link to="/dashboard" className="text-white/40 hover:text-white transition-colors"><LayoutGrid size={24} /></Link>
            <Link to="/health" className="text-[#10B981]"><HeartPulse size={24} /></Link>
            <Link to="/waste" className="text-white/40 hover:text-white transition-colors"><Trash2 size={24} /></Link>
            <Link to="/goals" className="text-white/40 hover:text-white transition-colors"><Target size={24} /></Link>
            <Link to="/copilot" className="text-white/40 hover:text-white transition-colors"><Brain size={24} /></Link>
            <Link to="/settings" className="text-white/40 hover:text-white transition-colors"><Settings size={24} /></Link>
          </nav>
        </div>
        <button className="text-white/20 hover:text-red-500 transition-colors">
          <LogOut size={20} />
        </button>
      </aside>

      <main className="flex-1 ml-32 flex items-center justify-center p-10">
        <div className="w-full max-w-4xl bg-[#0A0A0A] p-20 rounded-[5rem] border border-white/5 shadow-2xl relative overflow-hidden text-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#10B981]/5 rounded-full blur-[120px] pointer-events-none" />
            
            <span className="text-[11px] font-black uppercase tracking-[0.6em] text-[#10B981] mb-8 block italic">Intelligence Protocol Alpha</span>
            
            <h1 className="text-5xl md:text-6xl font-black italic tracking-tighter text-white mb-8 leading-none">
              Quantify Your <br/> Financial Resilience
            </h1>
            
            <p className="text-xl text-white/40 font-medium max-w-2xl mx-auto leading-relaxed mb-16">
              Our AI engine will analyze your behavioral patterns to generate a multidimensional health score and predictive trajectory.
            </p>

            <div className="grid grid-cols-3 gap-8 mb-20">
                {[
                    { label: 'Score Generation', desc: 'Real-time resilience quantification.', icon: <HeartPulse className="text-[#10B981]" size={24}/> },
                    { label: 'Habit Mapping', desc: 'Identify spending leakages automatically.', icon: <Trash2 className="text-[#6366F1]" size={24}/> },
                    { label: 'Future Casting', desc: 'Predictive wealth snapshots.', icon: <Target className="text-[#EF4444]" size={24}/> }
                ].map((item, i) => (
                    <div key={i} className="text-left bg-white/[0.02] p-8 rounded-[2.5rem] border border-white/5 hover:border-white/10 transition-all">
                        <div className="mb-6">{item.icon}</div>
                        <h3 className="text-sm font-bold mb-2 uppercase tracking-wider">{item.label}</h3>
                        <p className="text-xs text-white/30 leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>

            <div className="flex flex-col items-center gap-6">
                <Link to="/onboarding" className="group relative px-16 py-6 bg-white text-black rounded-3xl font-black text-sm uppercase tracking-[0.3em] overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.1)]">
                    <span className="relative z-10 flex items-center gap-3">
                        Initialize Audit <ChevronRight size={20}/>
                    </span>
                </Link>
                <div className="flex items-center gap-2 text-white/20">
                    <Clock size={14}/>
                    <span className="text-[10px] font-bold uppercase tracking-widest">Protocol duration: 60s</span>
                </div>
            </div>
        </div>
      </main>
    </div>
  );
};

export default HealthIntro;
