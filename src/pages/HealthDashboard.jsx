import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LayoutGrid, HeartPulse, Trash2, Target, Brain, Settings, LogOut, ShieldCheck, ShoppingBag, Landmark } from 'lucide-react';

const HealthDashboard = () => {
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

      <main className="flex-1 ml-32 p-10 max-w-6xl mx-auto">
        <header className="flex justify-between items-center mb-16">
          <div>
            <h1 className="text-4xl font-black italic tracking-tight mb-2">FinHealth Audit</h1>
            <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/20">Session ID: AI-HEALTH-ALPHA</p>
          </div>
          <div className="h-12 w-12 rounded-2xl border-2 border-[#10B981]/30 overflow-hidden">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmt7VFtHG55UMbMNm-MqfRpwYnDOgjFu2pJGNnT7z2kcfRKF0QemFteO9V5yEc9F0mJQ2dvYNjA9WvwawiY7pgL4zuv4aX4OTtlHzV1e5HANFE5y98f75tLmZfwB5VCRGQQMcVQDWx9jzIXXznlQ5My-rfjmQPnp8K5KhEgjofn1ywPIvFvPSszzzZdltDBqh-Ir628igwbc5Jzk5DCch0yXlbGvAW3L8PCF_oxhXINV6eKMD2PSriJm5BGjgaDNq2C6QHhE4XFR6n" alt="Avatar" className="w-full h-full object-cover" />
          </div>
        </header>

        {/* Hero Score */}
        <section className="mb-16">
          <div className="bg-[#0A0A0A] p-16 rounded-[4rem] border border-white/5 shadow-2xl relative overflow-hidden text-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#10B981]/5 rounded-full blur-[100px] pointer-events-none" />
            <span className="text-[11px] font-black uppercase tracking-[0.6em] text-[#10B981] mb-6 block">Resilience Index</span>
            <div className="flex items-center justify-center gap-6 mb-8">
              <span className="text-8xl font-black italic tracking-tighter">84</span>
              <div className="px-6 py-2 bg-[#10B981] text-black rounded-full font-black text-xs uppercase tracking-widest shadow-[0_0_20px_rgba(16,185,129,0.4)]">Stable</div>
            </div>
            <p className="text-xl text-white/60 font-medium max-w-2xl mx-auto leading-relaxed">
              You are currently <span className="text-white font-bold italic underline decoration-[#10B981]/40 decoration-4">outperforming 92%</span> of your demographic peers in liquidity management.
            </p>
          </div>
        </section>

        {/* Detailed Metrics */}
        <section className="grid grid-cols-3 gap-8 mb-16">
          {[
            { icon: <ShieldCheck size={28} />, label: 'Stability', msg: 'Institutional grade revenue consistency.', status: 'OPTIMAL', color: '#10B981' },
            { icon: <ShoppingBag size={28} />, label: 'Discretionary', msg: 'Weekend spending drift detected (22%).', status: 'MONITOR', color: '#EF4444' },
            { icon: <Landmark size={28} />, label: 'Portfolio', msg: 'Asset distribution is 14% heavy on tech.', status: 'STABLE', color: '#6366F1' }
          ].map((item, i) => (
            <div key={i} className="bg-[#0A0A0A] p-10 rounded-[3rem] border border-white/5 hover:border-white/10 transition-all group">
              <div className="text-white/20 group-hover:text-white transition-colors mb-8">{item.icon}</div>
              <h3 className="text-lg font-bold mb-2">{item.label}</h3>
              <p className="text-sm text-white/40 leading-relaxed mb-8">{item.msg}</p>
              <div className="text-[10px] font-black tracking-widest uppercase" style={{color: item.color}}>{item.status}</div>
            </div>
          ))}
        </section>

        {/* AI Commentary Panel */}
        <section className="bg-white/[0.03] p-12 rounded-[4rem] border border-white/5">
          <div className="flex items-center gap-6 mb-12">
            <div className="w-14 h-14 rounded-3xl bg-[#10B981]/10 flex items-center justify-center text-[#10B981]">
              <Brain size={32} />
            </div>
            <h2 className="text-2xl font-bold tracking-tight">Financial Doctor Insights</h2>
          </div>
          <div className="grid grid-cols-2 gap-12">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20 mb-6 block italic">Diagnostic Summary</span>
              <p className="text-lg text-white/80 leading-loose italic">
                "Structural resilience is high, but the internal burn rate from non-essential nodes has increased. If left unoptimized, this will delay Phase 2 asset goals by approx. 14 days."
              </p>
            </div>
            <div className="space-y-6">
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20 mb-2 block italic">Recommendations</span>
              <div className="bg-white/5 p-6 rounded-3xl border border-white/5">
                <p className="text-sm font-medium leading-relaxed">Liquidate duplicate subscription nodes in Portfolio Beta to recover approx. $140/mo.</p>
              </div>
              <div className="bg-white/5 p-6 rounded-3xl border border-white/5">
                <p className="text-sm font-medium leading-relaxed">Rebalance 12% of cash nodes into the Institutional Bond Fund for yield protection.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HealthDashboard;
