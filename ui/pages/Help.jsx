import React from 'react';
import Sidebar from '../components/Sidebar';
import { 
  HelpCircle, 
  BookOpen, 
  ShieldCheck, 
  Activity, 
  Trash2, 
  Target, 
  ChevronRight, 
  Search, 
  MessageSquare,
  Lock,
  Cpu,
  ArrowUpRight,
  Info,
  Fingerprint
} from 'lucide-react';

export default function Help() {
  const faqs = [
    {
      q: "How is my health score calculated?",
      a: "Our algorithm looks at four main pillars: Liquidity (cash flow), Stability (reserve funds), Efficiency (spending optimization), and Growth (investment consistency). It translates complex ratios into a human-readable 1-100 score."
    },
    {
      q: "Why is my goal success probability low?",
      a: "Low success probability usually indicates a mismatch between your current saving velocity and your target deadline. We also factor in behavioral volatility—how often you dip into savings—to provide a realistic projection."
    },
    {
      q: "What does 'capital waste' strictly define?",
      a: "Waste is defined as financial output that provides zero or negative utility. This includes forgotten subscriptions, excessive service fees, and interest paid on debts that could be consolidated using our recommended pathways."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white flex font-body selection:bg-primary/30">
      <Sidebar activePage="help" />

      <main className="flex-1 ml-24 p-10 max-w-6xl mx-auto space-y-16 pb-24">
        {/* Header Section */}
        <header className="flex justify-between items-end mb-8 border-b border-white/5 pb-12">
          <div className="space-y-2">
            <div className="flex items-center gap-3 text-white/40 uppercase text-[10px] font-black tracking-[0.4em]">
                <HelpCircle size={12} />
                Knowledge Base
            </div>
            <h1 className="text-5xl font-black italic tracking-tighter">Support <span className="text-white/20">Protocols.</span></h1>
          </div>
          <div className="flex items-center gap-4 bg-white/[0.02] border border-white/5 px-6 py-3 rounded-2xl">
              <Search size={14} className="text-white/20" />
              <input type="text" placeholder="Search directives..." className="bg-transparent border-none focus:outline-none text-[10px] font-black uppercase tracking-widest placeholder:text-white/10 w-48" />
          </div>
        </header>

        {/* Methodology Bento */}
        <section className="space-y-8">
            <div className="flex items-center gap-3 text-primary">
                <Cpu size={18} />
                <h3 className="text-[10px] font-black uppercase tracking-[0.4em]">Proprietary Methodology</h3>
            </div>
            <div className="grid grid-cols-3 gap-8">
                {[
                    { title: 'Health Scoring', desc: 'Real-time resilience quantification via behavioral analysis.', icon: <Activity className="text-primary" size={24} /> },
                    { title: 'Waste Recovery', desc: 'Institutional cost-utility mapping and leakage detection.', icon: <Trash2 className="text-white/20" size={24} /> },
                    { title: 'Goal Projection', desc: 'Neural trajectory modeling for long-term target securing.', icon: <Target className="text-white/20" size={24} /> }
                ].map((item, i) => (
                    <div key={i} className="bg-[#0A0A0A] border border-white/5 p-10 rounded-[3rem] space-y-6 group hover:border-primary/20 transition-all shadow-xl">
                        <div className="w-14 h-14 bg-white/5 border border-white/5 rounded-2xl flex items-center justify-center p-3 group-hover:scale-110 transition-transform">
                            {item.icon}
                        </div>
                        <div className="space-y-1">
                             <h4 className="text-xl font-black italic tracking-tight">{item.title}</h4>
                             <p className="text-[10px] uppercase font-black tracking-widest text-white/20">Active protocol</p>
                        </div>
                        <p className="text-xs font-medium leading-relaxed italic text-white/40">{item.desc}</p>
                    </div>
                ))}
            </div>
        </section>

        {/* Deep Dive F.A.Q */}
        <div className="grid grid-cols-12 gap-12">
            <section className="col-span-12 lg:col-span-7 space-y-8">
                <div className="flex items-center gap-3 text-white/40">
                    <BookOpen size={18} />
                    <h3 className="text-[10px] font-black uppercase tracking-[0.4em]">Directive Deep Dive</h3>
                </div>
                <div className="space-y-4">
                    {faqs.map((faq, f) => (
                        <details key={f} className="group bg-[#0A0A0A] border border-white/5 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:border-white/10">
                            <summary className="list-none flex justify-between items-center p-8 cursor-pointer group-open:bg-white/[0.02] transition-all">
                                <span className="text-sm font-black italic uppercase tracking-tight text-white/80 group-open:text-primary transition-colors">{faq.q}</span>
                                <ChevronRight className="group-open:rotate-90 transition-transform text-white/20 group-hover:text-primary" size={18} />
                            </summary>
                            <div className="px-12 pb-10 text-[11px] font-medium leading-relaxed italic text-white/40 uppercase tracking-widest border-t border-white/5 pt-6">
                                {faq.a}
                            </div>
                        </details>
                    ))}
                </div>
            </section>

            {/* Privacy & Guarantee */}
            <section className="col-span-12 lg:col-span-5 space-y-8">
                 <div className="flex items-center gap-3 text-white/40">
                    <ShieldCheck size={18} />
                    <h3 className="text-[10px] font-black uppercase tracking-[0.4em]">Audit Governance</h3>
                </div>
                <div className="bg-[#0A0A0A] border border-white/5 rounded-[3rem] p-10 space-y-8">
                     <div className="space-y-4">
                         {[
                            { label: 'Identity Protection', icon: <Fingerprint size={16} className="text-primary" /> },
                            { label: 'E2E Encryption', icon: <Lock size={16} className="text-white/20" /> },
                            { label: 'Zero-Access Node', icon: <Info size={16} className="text-white/20" /> }
                         ].map((gov, g) => (
                            <div key={g} className="flex items-center justify-between p-4 bg-white/[0.02] border border-white/5 rounded-2xl">
                                <div className="flex items-center gap-4">
                                     {gov.icon}
                                     <span className="text-[11px] font-black uppercase tracking-widest italic">{gov.label}</span>
                                </div>
                                <span className="text-[9px] font-mono text-primary/40">VERIFIED</span>
                            </div>
                         ))}
                     </div>
                     <div className="bg-primary/5 border border-primary/20 p-8 rounded-[2rem] space-y-4">
                         <div className="text-[9px] font-black uppercase tracking-widest text-primary">Need direct uplink?</div>
                         <p className="text-xs font-medium italic text-white/40 leading-relaxed">Enterprise tier specialists are available 24/7 for high-stakes modeling assistance.</p>
                         <button className="w-full py-4 bg-primary text-black text-[10px] font-black uppercase tracking-[0.2em] rounded-xl hover:scale-105 transition-all">Contact Intelligence Desk</button>
                     </div>
                </div>
            </section>
        </div>

        {/* Global CTA */}
        <section className="bg-primary border border-primary text-black p-12 rounded-[4rem] flex items-center justify-between relative overflow-hidden group shadow-2xl shadow-primary/20">
             <div className="relative z-10 space-y-4">
                <h3 className="text-4xl font-black italic tracking-tighter leading-none">Still have queries?</h3>
                <p className="text-sm font-black italic max-w-md opacity-60">
                    Engage the AI Co-Pilot for a personalized tour of your financial architecture and tailored optimization directives.
                </p>
             </div>
             <Link to="/copilot" className="relative z-10 px-10 py-5 bg-black text-white text-[12px] font-black uppercase tracking-[0.3em] rounded-2xl hover:scale-105 transition-all flex items-center gap-3 group-hover:shadow-[0_0_50px_rgba(0,0,0,0.3)]">
                 Initialize Co-Pilot <ArrowUpRight size={18} />
             </Link>
             <div className="absolute top-0 right-0 p-8 opacity-5">
                 <Cpu size={200} />
             </div>
        </section>

        {/* Footer Meta */}
        <footer className="pt-12 border-t border-white/5 flex justify-between items-center opacity-10 font-black italic text-[9px] uppercase tracking-[0.5em]">
            <span>© 2024 Finsight Platform</span>
            <div className="flex gap-8">
                <a href="#">Privacy Directive</a>
                <a href="#">Security Protocol</a>
                <a href="#">Legal T&C</a>
            </div>
        </footer>
      </main>
    </div>
  );
}
