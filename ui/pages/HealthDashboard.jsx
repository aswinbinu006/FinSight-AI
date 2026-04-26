import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import { ShieldCheck, ShoppingBag, Landmark, Brain, Activity, TrendingUp, AlertTriangle, Sparkles } from 'lucide-react';

const HealthDashboard = () => {
  const [healthData, setHealthData] = useState({
    score: 0,
    status: 'Analyzing...',
    peerPercentile: 0,
    stability: 'Optimal',
    discretionary: 'Monitor',
    portfolio: 'Balanced',
    aiInsight: 'Initializing diagnostic protocol...'
  });

  useEffect(() => {
    const healthScore = parseFloat(localStorage.getItem('finsight_health_score')) || 84.5;
    
    let band = 'Excellent';
    if (healthScore < 30) band = 'Critical';
    else if (healthScore < 50) band = 'High Risk';
    else if (healthScore < 65) band = 'Average';
    else if (healthScore < 80) band = 'Good';

    setHealthData({
      score: healthScore.toFixed(1),
      status: band,
      peerPercentile: 92,
      stability: 'Institutional Grade',
      discretionary: 'Weekend Drift Detected',
      portfolio: 'Heavy Tech Weight (14%)',
      aiInsight: `"Structural resilience is ${band.toLowerCase()}. Internal burn rate from non-essential nodes has increased. Recommendation: Liquidate duplicate subscription nodes."`
    });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex font-body">
      <Sidebar activePage="health" />

      <main className="flex-1 ml-24 p-10 max-w-7xl mx-auto space-y-12 pb-24">
        {/* Header */}
        <header className="flex justify-between items-end mb-8 border-b border-white/5 pb-12">
          <div className="space-y-2">
            <div className="flex items-center gap-3 text-primary uppercase text-[10px] font-black tracking-[0.4em]">
              <Activity size={12} className="animate-pulse" />
              Real-time Diagnostic
            </div>
            <h1 className="text-5xl font-black italic tracking-tighter">Health <span className="text-white/20">Audit.</span></h1>
          </div>
          <div className="text-right">
             <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20">Session Intel</div>
             <div className="text-xs font-mono text-primary">HX-240721-BETA</div>
          </div>
        </header>

        {/* Hero Resilience Score */}
        <section className="relative overflow-hidden group">
          <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 pointer-events-none" />
          <div className="bg-[#0A0A0A] border border-white/5 rounded-[4rem] p-16 flex flex-col items-center justify-center text-center space-y-8 relative z-10">
              <span className="text-[11px] font-black uppercase tracking-[0.6em] text-primary">Resilience Index</span>
              
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-[60px] animate-pulse rounded-full" />
                <div className="text-[10rem] font-black italic tracking-tighter leading-none relative">
                    {healthData.score}
                    <span className="text-2xl absolute -top-4 -right-12 text-primary opacity-50 not-italic">/ 100</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                  <div className="px-8 py-3 bg-primary text-black rounded-full font-black text-xs uppercase tracking-widest shadow-[0_20px_50px_rgba(16,185,129,0.3)]">
                      {healthData.status}
                  </div>
                  <div className="text-sm font-bold text-white/40 italic">
                    Top <span className="text-white">{healthData.peerPercentile}%</span> of demographic percentile
                  </div>
              </div>
          </div>
        </section>

        {/* Diagnostic Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, label: 'Stability', value: healthData.stability, desc: 'Revenue consistency nodes.', trend: '+12%', color: 'text-primary' },
              { icon: ShoppingBag, label: 'Burn Rate', value: healthData.discretionary, desc: 'Non-strategic spending drift.', trend: '-4.2%', color: 'text-red-500' },
              { icon: Landmark, label: 'Portfolio', value: healthData.portfolio, desc: 'Asset distribution nodes.', trend: '+0.8%', color: 'text-blue-500' }
            ].map((metric, i) => (
              <div key={i} className="bg-[#0A0A0A] border border-white/5 rounded-[3rem] p-10 space-y-6 hover:border-white/10 transition-all group overflow-hidden relative">
                <div className="flex justify-between items-start">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-white/20 group-hover:bg-primary group-hover:text-black transition-all">
                        <metric.icon size={24} />
                    </div>
                    <div className={`text-[10px] font-black px-3 py-1 rounded-full bg-white/5 ${metric.color}`}>
                        {metric.trend}
                    </div>
                </div>
                <div>
                   <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 mb-2">{metric.label}</h3>
                   <div className="text-xl font-bold italic">{metric.value}</div>
                   <p className="text-[11px] text-white/40 mt-3 font-medium uppercase tracking-wider">{metric.desc}</p>
                </div>
              </div>
            ))}
        </section>

        {/* AI Insight Engine */}
        <section className="bg-[#0A0A0A] border-2 border-primary/20 rounded-[4rem] p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12">
                <Brain className="text-primary/20" size={120} />
            </div>
            
            <div className="max-w-3xl relative z-10">
                <div className="flex items-center gap-3 text-primary text-[10px] font-black uppercase tracking-widest mb-8">
                    <Sparkles size={16} />
                    Neural Intelligence Feedback
                </div>
                
                <h2 className="text-3xl font-black italic tracking-tight mb-8">System Report</h2>
                
                <div className="space-y-12">
                    <div>
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 block mb-4">Diagnostics</span>
                        <p className="text-2xl text-white/80 leading-relaxed italic font-medium">
                           {healthData.aiInsight}
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5">
                        <div className="space-y-4">
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary block mb-2">Prescription Node A</span>
                            <div className="bg-white/5 p-6 rounded-3xl border border-white/5 text-xs font-bold leading-relaxed text-white/60">
                                Liquidate duplicate subscription nodes in <span className="text-white">Portfolio Beta</span> to recover <span className="text-primary font-black">₹140/mo.</span>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary block mb-2">Prescription Node B</span>
                            <div className="bg-white/5 p-6 rounded-3xl border border-white/5 text-xs font-bold leading-relaxed text-white/60">
                                Rebalance 12% of cash nodes into the <span className="text-white">Institutional Bond Fund</span> for yield protection.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

      </main>
    </div>
  );
};

export default HealthDashboard;
