import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { 
  Lock, 
  BrainCircuit, 
  ChevronRight, 
  ShieldCheck, 
  Zap, 
  Activity,
  Cpu,
  Sparkles
} from 'lucide-react';

export default function CopilotIntro() {
  return (
    <div className="min-h-screen bg-black text-white flex font-body selection:bg-primary/30">
      <Sidebar activePage="copilot" />

      <main className="flex-1 ml-24 relative flex flex-col items-center justify-center p-10 overflow-hidden">
        {/* Background Neural Network Simulation */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/20 rounded-full blur-[150px]" />
            <div className="grid grid-cols-12 gap-1 h-full w-full opacity-20">
                {Array.from({ length: 144 }).map((_, i) => (
                    <div key={i} className="border-[0.5px] border-white/5" />
                ))}
            </div>
        </div>

        {/* Central Upgrade Interface */}
        <div className="w-full max-w-4xl relative z-10 space-y-16">
            
            {/* Lock Identity */}
            <div className="flex flex-col items-center text-center space-y-8">
                <div className="w-24 h-24 bg-primary/10 border border-primary/20 rounded-[2.5rem] flex items-center justify-center shadow-2xl group overflow-hidden">
                    <Lock className="text-primary group-hover:scale-110 transition-transform" size={40} />
                </div>
                <div className="space-y-4">
                    <div className="flex items-center justify-center gap-3 text-primary uppercase text-[10px] font-black tracking-[0.5em] animate-pulse">
                        <BrainCircuit size={14} />
                        Intelligence Required
                    </div>
                    <h1 className="text-7xl font-black italic tracking-tighter leading-none">
                        Unlock <span className="text-white/20">Protocols.</span>
                    </h1>
                    <p className="text-lg font-medium text-white/40 max-w-xl mx-auto italic">
                        Access personalized financial action plans and institutional-grade audits through our Neural Intelligence layer.
                    </p>
                </div>
            </div>

            {/* Premium Features Grid */}
            <div className="grid grid-cols-3 gap-6">
                 {[
                    { label: 'Neural Audit', desc: 'Step-by-step capital recovery strategy.', icon: <Cpu size={20} /> },
                    { label: 'Drift Analysis', desc: 'Predictive spending anomaly detection.', icon: <Activity size={20} /> },
                    { label: 'Private Compute', desc: 'Dedicated AI processing instance.', icon: <ShieldCheck size={20} /> }
                 ].map((feat, f) => (
                    <div key={f} className="bg-white/[0.02] border border-white/5 p-6 rounded-[2rem] space-y-3">
                        <div className="text-primary">{feat.icon}</div>
                        <h4 className="text-sm font-black italic uppercase leading-tight">{feat.label}</h4>
                        <p className="text-[10px] font-medium text-white/30 uppercase tracking-widest leading-relaxed">{feat.desc}</p>
                    </div>
                 ))}
            </div>

            {/* Action Zone */}
            <div className="flex flex-col items-center gap-8">
                <Link to="/copilot/dashboard" className="group relative px-24 py-6 bg-primary text-black rounded-[2rem] font-black text-[12px] uppercase tracking-[0.3em] overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-primary/20 shadow-[0_0_60px_rgba(16,185,129,0.1)]">
                    <span className="relative z-10 flex items-center gap-3">
                        Unlock Neural Co-Pilot <ChevronRight size={20}/>
                    </span>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </Link>
                <div className="flex items-center gap-2 text-white/20 text-[9px] font-black uppercase tracking-[0.3em] italic">
                    <Sparkles size={12} className="text-primary" />
                    Pinnacle Tier Membership
                </div>
            </div>
        </div>

        {/* Status Toast */}
        <div className="fixed bottom-12 right-12 z-50">
             <div className="bg-[#0A0A0A] border border-white/5 backdrop-blur-xl px-8 py-4 rounded-[2rem] shadow-2xl flex items-center gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full animate-ping" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/60">Co-Pilot scanning node...</span>
             </div>
        </div>
      </main>
    </div>
  );
}
