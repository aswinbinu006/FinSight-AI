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
    const healthScore = userData.health.score || 84.5;
    
    let band = 'Excellent';
    if (healthScore < 30) band = 'Critical';
    else if (healthScore < 50) band = 'High Risk';
    else if (healthScore < 65) band = 'Average';
    else if (healthScore < 80) band = 'Good';

    setHealthData({
      score: healthScore.toFixed(1),
      status: band,
      peerPercentile: 92,
      stability: 'Solid Income',
      discretionary: 'High Weekend Spending',
      portfolio: 'Too Much Tech (14%)',
      aiInsight: `"Your financial baseline is ${band.toLowerCase()}. We noticed you're spending more on non-essentials than usual. Tip: Cancel duplicate subscriptions to save money."`
    });
  }, [userData.health.score]);

  return (
    <div className="min-h-screen bg-black text-white flex font-body">
      <Sidebar activePage="health" />

      <main className="flex-1 ml-24 p-10 space-y-12 pb-24">
        {/* Header */}
        <header className="flex justify-between items-end mb-8 border-b border-white/5 pb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-primary uppercase text-xs font-black tracking-[0.3em]">
              <Activity size={16} className="animate-pulse" />
              Real-time Summary
            </div>
            <h1 className="text-6xl md:text-7xl font-black italic tracking-tighter">Health <span className="text-white/20">Check.</span></h1>
          </div>
          <div className="text-right hidden sm:block">
             <div className="text-xs font-bold uppercase tracking-[0.3em] text-white/30">User Session</div>
             <div className="text-sm font-mono text-primary mt-1">HX-240721-BETA</div>
          </div>
        </header>

        {/* Hero Resilience Score */}
        <section className="relative overflow-hidden group">
          <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 pointer-events-none" />
          <div className="bg-[#0A0A0A] border border-white/5 rounded-[4rem] p-16 lg:p-24 flex flex-col items-center justify-center text-center space-y-12 relative z-10">
              <span className="text-sm font-black uppercase tracking-widest text-primary">Overall Health Score</span>
              
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-[80px] animate-pulse rounded-full" />
                <div className="text-[8rem] md:text-[10rem] font-black italic tracking-tighter leading-none relative">
                    {healthData.score}
                    <span className="text-3xl md:text-4xl absolute top-0 -right-20 md:-right-24 text-primary opacity-50 not-italic">/ 100</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-6 mt-8">
                  <div className="px-10 py-4 bg-primary text-black rounded-full font-black text-sm uppercase tracking-widest shadow-[0_20px_50px_rgba(16,185,129,0.3)]">
                      {healthData.status}
                  </div>
                  <div className="text-lg font-medium text-white/60 italic">
                    You are in the top <span className="text-white font-bold">{healthData.peerPercentile}%</span> of your age group.
                  </div>
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
