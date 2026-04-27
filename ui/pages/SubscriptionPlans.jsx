import React from 'react';
import Sidebar from '../components/Sidebar';
import { 
  ShieldCheck, 
  CheckCircle2, 
  Lock, 
  Sparkles, 
  Zap, 
  Cpu, 
  TrendingUp,
  Activity,
  ArrowRight
} from 'lucide-react';

export default function SubscriptionPlans() {
  return (
    <div className="min-h-screen bg-black text-white flex font-body selection:bg-primary/30">
      <Sidebar activePage="subscription" />

      <main className="flex-1 ml-24 p-10 space-y-16 pb-24 flex flex-col">
        {/* Header Section */}
        <header className="text-center space-y-4 max-w-2xl mx-auto border-b border-white/5 pb-16">
          <div className="flex items-center justify-center gap-3 text-primary uppercase text-[10px] font-black tracking-[0.5em]">
              <Sparkles size={14} />
              Tier Selection
          </div>
          <h1 className="text-6xl font-black italic tracking-tighter leading-none">Intelligence <span className="text-white/20">Access.</span></h1>
          <p className="text-xs font-medium italic text-white/40 uppercase tracking-widest leading-relaxed">
            Scalable financial modeling protocols designed for institutional precision and personal wealth securing.
          </p>
        </header>

        {/* Plans Grid */}
        <div className="grid grid-cols-12 gap-10 items-stretch">
            {/* FREE TIER */}
            <section className="col-span-12 lg:col-span-5 bg-[#0A0A0A] border border-white/5 p-12 rounded-[3.5rem] flex flex-col space-y-10 group hover:border-white/10 transition-all opacity-80">
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                         <span className="text-[10px] font-black uppercase tracking-widest text-white/20">Operational Tier</span>
                         <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[8px] font-black uppercase tracking-widest text-white/40 italic">Active</span>
                    </div>
                    <div className="space-y-1">
                        <h3 className="text-3xl font-black italic tracking-tight uppercase">Base Cloud</h3>
                        <div className="flex items-baseline gap-2">
                            <span className="text-5xl font-black italic tracking-tighter text-white/60 leading-none">₹0</span>
                            <span className="text-[10px] font-black uppercase tracking-widest text-white/20">Standard Access</span>
                        </div>
                    </div>
                </div>

                <div className="flex-grow space-y-6">
                    {[
                        { label: 'Health Score Protocol', access: true },
                        { label: 'Waste Identification Labels', access: true },
                        { label: 'Single Goal Node', access: true },
                        { label: 'Neural AI Co-Pilot', access: false },
                        { label: 'Trajectory Prediction', access: false }
                    ].map((feature, i) => (
                        <div key={i} className={`flex items-center gap-4 ${feature.access ? 'text-white/60' : 'text-white/10'}`}>
                            {feature.access ? <CheckCircle2 size={16} className="text-primary" /> : <Lock size={16} />}
                            <span className="text-[11px] font-black uppercase tracking-widest italic">{feature.label}</span>
                        </div>
                    ))}
                </div>

                <button disabled className="w-full py-5 bg-white/5 border border-white/10 text-white/20 text-[11px] font-black uppercase tracking-[0.3em] rounded-2xl cursor-not-allowed">
                    Current Directive
                </button>
            </section>

            {/* PREMIUM TIER */}
            <section className="col-span-12 lg:col-span-7 bg-primary text-black p-12 rounded-[4rem] flex flex-col space-y-10 relative overflow-hidden shadow-2xl shadow-primary/20 group">
                <div className="absolute top-8 right-12 z-20">
                     <span className="px-5 py-2 bg-black text-white rounded-full text-[10px] font-black uppercase tracking-widest italic animate-pulse">Recommended</span>
                </div>

                <div className="space-y-4 relative z-10">
                    <span className="text-[10px] font-black uppercase tracking-widest text-black/40">Sovereign Tier</span>
                    <div className="space-y-1">
                        <h3 className="text-5xl font-black italic tracking-tighter leading-none">Enterprise Pro</h3>
                        <div className="flex items-baseline gap-2">
                            <span className="text-7xl font-black italic tracking-tighter leading-none">₹999</span>
                            <span className="text-[12px] font-black uppercase tracking-widest text-black/40">/ Institutional Cycle</span>
                        </div>
                    </div>
                </div>

                <div className="flex-grow grid grid-cols-2 gap-y-8 gap-x-8 relative z-10">
                    {[
                        { label: 'Neural Co-Pilot (Unrestricted)', icon: <Cpu size={18} /> },
                        { label: 'Predictive Trajectory Modeling', icon: <TrendingUp size={18} /> },
                        { label: 'Automated Capital Recovery', icon: <Activity size={18} /> },
                        { label: 'Unlimited Wealth Goals', icon: <ShieldCheck size={18} /> }
                    ].map((feature, i) => (
                        <div key={i} className="flex items-center gap-4 text-black group/item">
                            <div className="w-10 h-10 bg-black/10 rounded-xl flex items-center justify-center group-hover/item:scale-110 transition-transform">
                                {feature.icon}
                            </div>
                            <span className="text-[11px] font-black uppercase tracking-tight italic leading-tight">{feature.label}</span>
                        </div>
                    ))}
                </div>

                <button className="w-full py-6 bg-black text-white text-[14px] font-black uppercase tracking-[0.4em] rounded-[2rem] hover:scale-[1.02] active:scale-95 transition-all shadow-xl flex items-center justify-center gap-4 relative z-10">
                    Execute Provisioning <ArrowRight size={20} />
                </button>

                {/* Decorative background nodes */}
                <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-black/5 rounded-full blur-3xl" />
                <div className="absolute top-20 left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
            </section>
        </div>

        {/* Trust Meta */}
        <section className="flex justify-center items-center gap-16 py-12 border-t border-white/5 opacity-20 filter grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
            <div className="flex items-center gap-3">
                 <ShieldCheck size={18} />
                 <span className="text-[10px] font-black uppercase tracking-[0.5em]">PCI-DSS Secure</span>
            </div>
            <div className="flex items-center gap-3">
                 <ShieldCheck size={18} />
                 <span className="text-[10px] font-black uppercase tracking-[0.5em]">256-Bit SSL</span>
            </div>
            <div className="flex items-center gap-3">
                <ShieldCheck size={18} />
                <span className="text-[10px] font-black uppercase tracking-[0.5em]">Zero-Knowledge Path</span>
            </div>
        </section>

        {/* Global Footer Meta */}
        <footer className="mt-auto pt-12 border-t border-white/5 flex justify-between items-center opacity-10 italic font-black text-[9px] uppercase tracking-[0.5em]">
            <span>© 2024 Finsight AI Systems</span>
            <div className="flex gap-8">
                <a href="#">Audit Protocols</a>
                <a href="#">Compliance</a>
                <a href="#">Support Node</a>
            </div>
        </footer>
      </main>
    </div>
  );
}
