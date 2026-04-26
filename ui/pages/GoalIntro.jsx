import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { 
  Target, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  TrendingUp, 
  ChevronRight,
  BrainCircuit,
  PieChart,
  Activity
} from 'lucide-react';

export default function GoalIntro() {
  return (
    <div className="min-h-screen bg-black text-white flex font-body selection:bg-primary/30">
      <Sidebar activePage="goal" />

      <main className="flex-1 ml-24 p-8 flex flex-col justify-center items-center">
        {/* Central Content Canvas */}
        <div className="w-full max-w-4xl space-y-10 pb-24">
            
            {/* Header Identity */}
            <div className="text-center space-y-4">
                <div className="flex items-center justify-center gap-3 text-primary uppercase text-[10px] font-black tracking-[0.5em] animate-pulse">
                    <BrainCircuit size={14} />
                    Neural Goal Engine
                </div>
                <h1 className="text-6xl font-black italic tracking-tighter leading-none">
                    Reach your <span className="text-white/20">Future.</span>
                </h1>
                <p className="text-lg font-medium text-white/40 max-w-xl mx-auto italic">
                    AI-driven trajectory analysis to secure and model your unique financial path with institutional precision.
                </p>
            </div>

            {/* Feature Bento Grid */}
            <div className="grid grid-cols-3 gap-8">
                <div className="bg-[#0A0A0A] border border-white/5 p-8 rounded-[2.5rem] space-y-5 group hover:border-primary/20 transition-all shadow-2xl relative overflow-hidden">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20 group-hover:scale-110 transition-transform">
                        <TrendingUp className="text-primary" size={24} />
                    </div>
                    <div className="space-y-2 relative z-10">
                        <h3 className="text-lg font-black italic tracking-tight">Trajectory Analysis</h3>
                        <p className="text-[10px] uppercase font-black tracking-[0.2em] text-white/20">Sophisticated Path Modeling</p>
                    </div>
                    <p className="text-xs font-medium leading-relaxed text-white/40 italic relative z-10">
                        Modeling your unique financial path with precision AI that accounts for market volatility and spending drift.
                    </p>
                    <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-primary/5 blur-[40px] rounded-full group-hover:bg-primary/10 transition-all" />
                </div>

                <div className="bg-[#0A0A0A] border border-white/5 p-8 rounded-[2.5rem] space-y-5 group hover:border-primary/20 transition-all shadow-2xl relative overflow-hidden">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20 group-hover:scale-110 transition-transform">
                        <PieChart className="text-primary" size={24} />
                    </div>
                    <div className="space-y-2 relative z-10">
                        <h3 className="text-lg font-black italic tracking-tight">Probability Scoring</h3>
                        <p className="text-[10px] uppercase font-black tracking-[0.2em] text-white/20">High-Precision Success Rate</p>
                    </div>
                    <p className="text-xs font-medium leading-relaxed text-white/40 italic relative z-10">
                        Calculating real-time success chances for every goal, updating as frequently as your transactions occur.
                    </p>
                    <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-primary/5 blur-[40px] rounded-full group-hover:bg-primary/10 transition-all" />
                </div>

                <div className="bg-[#0A0A0A] border border-white/5 p-8 rounded-[2.5rem] space-y-5 group hover:border-primary/20 transition-all shadow-2xl relative overflow-hidden">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20 group-hover:scale-110 transition-transform">
                        <ShieldCheck className="text-primary" size={24} />
                    </div>
                    <div className="space-y-2 relative z-10">
                        <h3 className="text-lg font-black italic tracking-tight">Risk Mitigation</h3>
                        <p className="text-[10px] uppercase font-black tracking-[0.2em] text-white/20">Anomalous Drift Detection</p>
                    </div>
                    <p className="text-xs font-medium leading-relaxed text-white/40 italic relative z-10">
                        Identifying and navigating potential financial hurdles before they impact your primary capital trajectory.
                    </p>
                    <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-primary/5 blur-[40px] rounded-full group-hover:bg-primary/10 transition-all" />
                </div>
            </div>

            {/* CTA Section */}
            <div className="flex flex-col items-center gap-6 pt-4">
                <Link to="/goals/step1" className="px-12 py-4 bg-primary text-black font-black text-[12px] uppercase tracking-[0.3em] rounded-2xl hover:scale-105 transition-all shadow-2xl shadow-primary/20 flex items-center gap-3">
                    Initialize Configuration <ChevronRight size={18} />
                </Link>
                <div className="flex items-center gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-white/20">
                    <div className="flex items-center gap-2 italic">
                        <Activity size={12} className="text-primary" />
                        Live Processing
                    </div>
                    <div className="w-1 h-1 bg-white/10 rounded-full" />
                    <div className="flex items-center gap-2 italic">
                        <ShieldCheck size={12} className="text-primary" />
                        E2E Encrypted
                    </div>
                </div>
            </div>
        </div>

        {/* Floating Secondary Insights */}
        <section className="absolute bottom-10 left-36 right-10 flex justify-between px-10 border-t border-white/5 pt-10 opacity-30">
             <div className="flex items-center gap-4">
                <div className="text-[10px] font-black uppercase tracking-widest text-primary">Status</div>
                <div className="text-[10px] font-mono">NODE_ACTIVE</div>
             </div>
             <div className="flex items-center gap-4">
                <div className="text-[10px] font-black uppercase tracking-widest text-white/40">Latency</div>
                <div className="text-[10px] font-mono shadow-inner shadow-primary/20">0.04ms</div>
             </div>
        </section>
      </main>
    </div>
  );
}
