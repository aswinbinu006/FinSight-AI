import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import { ShieldCheck, ShoppingBag, Landmark, Brain, Activity, TrendingUp, AlertTriangle, Sparkles, Loader2 } from 'lucide-react';
import { useUserData } from '../context/UserDataContext';
import { formatINR } from '../utils';

const HealthDashboard = () => {
  const { userData, loading } = useUserData();
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
    window.scrollTo(0, 0);
  }, []);

  if (loading || !userData) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <Loader2 className="animate-spin text-primary w-12 h-12" />
      </div>
    );
  }

  useEffect(() => {
    const healthScore = userData.health.score || 0;
    
    let band = healthScore > 75 ? 'Sovereign' : (healthScore > 50 ? 'Tactical' : (healthScore > 0 ? 'Exposed' : 'Awaiting Audit'));
    if (healthScore === 0) band = 'Pending Audit';

    const riskLevel = userData.behavioral?.scores?.impulse_behavior_score > 5 ? 'High' : 'Conservative';
    const primaryWaste = userData.waste?.subscriptions?.filter(s => s.isWaste)?.length > 0;

    setHealthData({
      score: healthScore > 0 ? healthScore.toFixed(1) : "0.0",
      status: band,
      peerPercentile: healthScore > 0 ? (healthScore > 80 ? 94 : 86) : 0,
      stability: healthScore > 0 ? (userData.financial?.income ? 'Active Profile' : 'Partial Data') : 'Awaiting Data',
      discretionary: healthScore > 0 ? (primaryWaste ? 'Waste Identified' : 'Optimized') : 'Awaiting Data',
      portfolio: healthScore > 0 ? `Risk: ${riskLevel}` : 'Awaiting Data',
      aiInsight: healthScore > 0 
        ? userData.health.explanation || `"Your financial baseline is ${band.toLowerCase()}. We recommend focusing on ${primaryWaste ? 'identifying leaking subscriptions' : 'automating your savings trajectory'}.`
        : "Complete your behavioral profile to unlock AI-driven financial health insights."
    });
  }, [userData]);

  return (
    <div className="min-h-screen bg-black text-white flex font-body selection:bg-primary/30">
      <Sidebar />

      <main className="flex-1 ml-24 p-6 lg:p-10 xl:p-12 space-y-10 pb-24">
        {/* Header */}
        <header className="flex justify-between items-end border-b border-white/5 pb-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-primary">Core Diagnostic</span>
            </div>
            <h1 className="text-2xl font-bold tracking-tight">Health <span className="text-white/40">Check.</span></h1>
          </div>
          <div className="text-right hidden sm:block">
             <div className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/20">Session Identity</div>
             <div className="text-[10px] font-mono text-primary mt-1">HX-CORE-PROTOCOL</div>
          </div>
        </header>

        {/* Hero Resilience Score */}
        <section className="relative overflow-hidden group">
          <div className="absolute inset-0 bg-primary/5 blur-[100px] rounded-full -translate-y-1/2 pointer-events-none" />
          <div className="bg-[#0A0A0A] border border-white/5 rounded-[1.5rem] p-6 md:p-8 flex flex-col items-center justify-center text-center space-y-3 relative z-10">
              <span className="text-[8px] font-black uppercase tracking-[0.4em] text-primary">Financial Resilience Index</span>
              
              <div className="relative">
                <div className="absolute inset-0 bg-primary/10 blur-[40px] animate-pulse rounded-full" />
                <div className="text-4xl md:text-5xl font-black italic tracking-tighter leading-none relative">
                    {healthData.score}
                    <span className="text-base md:text-lg absolute top-0 -right-10 md:-right-12 text-white/10 not-italic">/100</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
                  <div className="px-4 py-1.5 bg-primary text-black rounded-lg font-black text-[8px] uppercase tracking-widest shadow-lg">
                      {healthData.status}
                  </div>
                  {userData.health.score > 0 && (
                    <div className="text-[10px] font-medium text-white/40 italic uppercase tracking-wider">
                      Percentile Rank: <span className="text-white font-bold">{healthData.peerPercentile}%</span>
                    </div>
                  )}
              </div>
          </div>
        </section>

        {/* Diagnostic Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                icon: ShieldCheck, 
                label: 'Income Stability', 
                value: healthData.stability, 
                desc: userData.financial?.income ? `Monthly income of ₹${formatINR(userData.financial.income)} detected.` : 'No income data registered yet.', 
                trend: userData.financial?.income ? 'STABLE' : '--', 
                color: 'text-primary' 
              },
              { 
                icon: ShoppingBag, 
                label: 'Obligations', 
                value: userData.financial?.emi ? `₹${formatINR(userData.financial.emi)}/mo` : '₹0/mo', 
                desc: 'Fixed monthly EMI and debt burdens.', 
                trend: 'FIXED', 
                color: 'text-blue-500' 
              },
              { 
                icon: Landmark, 
                label: 'Waste Leakage', 
                value: userData.waste?.subscriptions?.filter(s => s.isWaste)?.length > 0 ? `₹${formatINR(userData.waste.totalWaste || 0)}` : '₹0', 
                desc: 'Identified leaking subscriptions and unused resources.', 
                trend: 'RATIO', 
                color: 'text-red-500' 
              }
            ].map((metric, i) => (
              <div key={i} className="bg-[#0A0A0A] border border-white/5 rounded-2xl p-6 space-y-4 hover:border-white/10 transition-all group overflow-hidden relative">
                <div className="flex justify-between items-start">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/30 group-hover:bg-primary group-hover:text-black transition-all">
                        <metric.icon size={16} />
                    </div>
                    <div className={`text-[8px] font-black px-2 py-0.5 rounded-full bg-white/5 uppercase tracking-tighter ${metric.color}`}>
                        {metric.trend}
                    </div>
                </div>
                <div className="pt-1">
                   <h3 className="text-[9px] font-bold uppercase tracking-widest text-white/50 mb-1">{metric.label}</h3>
                   <div className="text-lg font-black italic">{metric.value}</div>
                   <p className="text-[10px] text-white/40 mt-3 font-medium leading-relaxed italic line-clamp-2">{metric.desc}</p>
                </div>
              </div>
            ))}
        </section>

        {/* AI Insight Engine */}
        <section className="bg-[#0A0A0A] border border-primary/20 rounded-2xl p-6 md:p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6">
                <Brain className="text-primary/5" size={60} />
            </div>
            
            <div className="max-w-4xl relative z-10">
                <div className="flex items-center gap-2 text-primary text-[9px] font-bold uppercase tracking-widest mb-4">
                    <Sparkles size={14} />
                    AI Financial Feedback
                </div>
                
                <h2 className="text-xl md:text-2xl font-black italic tracking-tight mb-4">Your AI Report</h2>
                
                <div className="space-y-6">
                    <div>
                        <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-white/30 block mb-2">Summary</span>
                        <p className="text-lg text-white/90 leading-relaxed italic font-bold">
                           {healthData.aiInsight}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-white/10">
                        {userData.health.score > 0 ? (
                          <>
                            <div className="space-y-2">
                                <span className="text-[9px] font-black uppercase tracking-widest text-primary block mb-1">Action Item 1</span>
                                <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-xs font-medium leading-relaxed text-white/70 italic">
                                    {userData.financial?.income 
                                      ? `Optimize your savings rate. Based on ₹${formatINR(userData.financial.income)}, you should target at least ₹${formatINR((userData.financial.income * 0.2).toFixed(0))} in primary savings.`
                                      : "Register your monthly income to get personalized saving targets."}
                                </div>
                            </div>
                            <div className="space-y-2">
                                <span className="text-[9px] font-black uppercase tracking-widest text-primary block mb-1">Action Item 2</span>
                                <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-xs font-medium leading-relaxed text-white/70 italic">
                                    {userData.behavioral?.scores?.future_behavior_score > 7 
                                      ? "Leverage your high future-orientation by diversifying into long-term equity indices."
                                      : "Focus on capital preservation by increasing your debt allocation until stability improves."}
                                </div>
                            </div>
                          </>
                        ) : (
                          <div className="col-span-2 py-4 text-center">
                            <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest italic">Audit your profile to generate action items.</p>
                          </div>
                        )}
                    </div>
                </div>
            </div>
        </section>

      </main>
    </div>
  );
};

export default HealthDashboard;
