import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import { ShieldCheck, ShoppingBag, Landmark, Brain, Activity, TrendingUp, AlertTriangle, Sparkles } from 'lucide-react';
import { useUserData } from '../context/UserDataContext';

const HealthDashboard = () => {
  const { userData } = useUserData();
  const [healthData, setHealthData] = useState({
    score: 0,
    status: 'Analyzing...',
    peerPercentile: 0,
    stability: 'Consistent',
    discretionary: 'Checking...',
    portfolio: 'Balanced',
    aiInsight: 'Preparing your summary...'
  });

  useEffect(() => {
    const healthScore = userData.health.score || 0;
    
    let band = healthScore > 75 ? 'Sovereign' : (healthScore > 50 ? 'Tactical' : (healthScore > 0 ? 'Exposed' : 'Awaiting Audit'));
    if (healthScore === 0) band = 'Pending Audit';

    setHealthData({
      score: healthScore > 0 ? healthScore.toFixed(1) : "0.0",
      status: band,
      peerPercentile: healthScore > 0 ? 92 : 0,
      stability: healthScore > 0 ? 'Solid Income' : 'Awaiting Data',
      discretionary: healthScore > 0 ? 'High Weekend Spending' : 'Awaiting Data',
      portfolio: healthScore > 0 ? 'Too Much Tech (14%)' : 'Awaiting Data',
      aiInsight: healthScore > 0 
        ? `"Your financial baseline is ${band.toLowerCase()}. We noticed you're spending more on non-essentials than usual. Tip: Cancel duplicate subscriptions to save money."`
        : "Complete your behavioral profile to unlock AI-driven financial health insights."
    });
  }, [userData.health.score]);

  return (
    <div className="min-h-screen bg-black text-white flex font-body">
      <Sidebar activePage="health" />

      <main className="flex-1 ml-24 p-8 lg:p-12 space-y-12 pb-24">
        {/* Header */}
        <header className="flex justify-between items-end mb-8 border-b border-white/5 pb-8">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">Core Diagnostic</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight">Health <span className="text-white/40">Check.</span></h1>
          </div>
          <div className="text-right hidden sm:block">
             <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20">Session Identity</div>
             <div className="text-xs font-mono text-primary mt-1">HX-CORE-PROTOCOL</div>
          </div>
        </header>

        {/* Hero Resilience Score */}
        <section className="relative overflow-hidden group">
          <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 pointer-events-none" />
          <div className="bg-[#0A0A0A] border border-white/5 rounded-[2.5rem] p-12 md:p-16 flex flex-col items-center justify-center text-center space-y-8 relative z-10">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Financial Resilience Index</span>
              
              <div className="relative">
                <div className="absolute inset-0 bg-primary/10 blur-[60px] animate-pulse rounded-full" />
                <div className="text-7xl md:text-9xl font-black italic tracking-tighter leading-none relative">
                    {healthData.score}
                    <span className="text-2xl md:text-3xl absolute top-0 -right-16 md:-right-20 text-white/10 not-italic">/100</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-6 mt-4">
                  <div className="px-8 py-3 bg-primary text-black rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-[0_10px_30px_rgba(16,185,129,0.2)]">
                      {healthData.status}
                  </div>
                  {userData.health.score > 0 && (
                    <div className="text-sm font-medium text-white/40 italic">
                      Percentile Rank: <span className="text-white font-bold">{healthData.peerPercentile}%</span>
                    </div>
                  )}
              </div>
          </div>
        </section>

        {/* Diagnostic Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, label: 'Monthly Income', value: healthData.stability, desc: 'Your income is consistent and reliable.', trend: '+12%', color: 'text-primary' },
              { icon: ShoppingBag, label: 'Spending Drift', value: healthData.discretionary, desc: 'You are spending more than planned on weekends.', trend: '-4.2%', color: 'text-red-500' },
              { icon: Landmark, label: 'Investments', value: healthData.portfolio, desc: 'Your investments are heavily concentrated in Tech.', trend: '+0.8%', color: 'text-blue-500' }
            ].map((metric, i) => (
              <div key={i} className="bg-[#0A0A0A] border border-white/5 rounded-[3rem] p-10 space-y-8 hover:border-white/10 transition-all group overflow-hidden relative">
                <div className="flex justify-between items-start">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-white/30 group-hover:bg-primary group-hover:text-black transition-all">
                        <metric.icon size={28} />
                    </div>
                    <div className={`text-2xl font-black px-5 py-2 rounded-full bg-white/5 ${metric.color}`}>
                        {metric.trend}
                    </div>
                </div>
                <div className="pt-2">
                   <h3 className="text-xs font-bold uppercase tracking-widest text-white/50 mb-3">{metric.label}</h3>
                   <div className="text-2xl lg:text-3xl font-black italic">{metric.value}</div>
                   <p className="text-sm text-white/50 mt-5 font-medium leading-relaxed">{metric.desc}</p>
                </div>
              </div>
            ))}
        </section>

        {/* AI Insight Engine */}
        <section className="bg-[#0A0A0A] border-2 border-primary/20 rounded-[4rem] p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12">
                <Brain className="text-primary/20" size={120} />
            </div>
            
            <div className="max-w-4xl relative z-10">
                <div className="flex items-center gap-3 text-primary text-xs font-bold uppercase tracking-widest mb-8">
                    <Sparkles size={20} />
                    AI Financial Feedback
                </div>
                
                <h2 className="text-4xl md:text-5xl font-black italic tracking-tight mb-10">Your AI Report</h2>
                
                <div className="space-y-12">
                    <div>
                        <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/40 block mb-6">Summary</span>
                        <p className="text-3xl text-white leading-relaxed italic font-bold">
                           {healthData.aiInsight}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10 border-t border-white/10">
                        <div className="space-y-4">
                            <span className="text-xs font-black uppercase tracking-widest text-primary block mb-3">Action Item 1</span>
                            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 text-base font-medium leading-relaxed text-white/80">
                                Cancel duplicate subscriptions in your account to save exactly <span className="text-primary font-black text-lg ml-1">₹140/mo.</span>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <span className="text-xs font-black uppercase tracking-widest text-primary block mb-3">Action Item 2</span>
                            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 text-base font-medium leading-relaxed text-white/80">
                                Move 12% of your idle cash into <span className="text-white font-bold">safer bonds</span> to protect it against market drops.
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
