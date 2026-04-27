import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Bell, Search, Loader2, ArrowUpRight, 
  Activity, Zap, TrendingUp, Shield, 
  Brain, Target, PieChart 
} from 'lucide-react';
import { motion as Motion } from 'framer-motion';
import Sidebar from '../components/Sidebar';
import StatCard from '../components/StatCard';
import { formatINR } from '../utils';
import { useUserData } from '../context/UserDataContext';

export default function Dashboard() {
  const { userData, loading } = useUserData();

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="animate-spin text-primary w-12 h-12" />
          <p className="text-[10px] uppercase font-bold tracking-[0.4em] text-primary animate-pulse">Syncing Protocol...</p>
        </div>
      </div>
    );
  }

  // Derive metrics from context data
  const healthScore = userData.health.score || 0;
  const income = userData.financial.income || 0;
  const subscriptions = userData.waste.subscriptions || [];
  const processedSubs = subscriptions.map(sub => {
    const monthlyCost = (sub.cycle === 'Yearly' || sub.cycle === 'Annual') ? sub.cost / 12 : sub.cost;
    const isWaste = sub.usage ? (sub.usage === 'Rarely' || sub.usage === 'Never') : (sub.cost > 500); 
    return { ...sub, monthlyCost, isWaste };
  });
  const wasteSubs = processedSubs.filter(sub => sub.isWaste);
  const wasteTotal = Math.round(wasteSubs.reduce((acc, sub) => acc + sub.monthlyCost, 0));

  const healthBand = healthScore > 75 ? 'Sovereign' : (healthScore > 50 ? 'Tactical' : (healthScore > 0 ? 'Exposed' : 'Awaiting Audit'));
  const velocity = income > 0 ? ((income - wasteTotal) / income).toFixed(2) : "0.00";
  const goalActive = userData.goal?.target > 0;
  const status = userData.behavioral?.completed ? 'Synchronized' : 'Standby';

  // Calculate behavioral logic
  const now = new Date();
  const currentMonthStr = `${now.getFullYear()}-${now.getMonth()}`;
  const lastTakeMonthStr = userData.behavioral?.lastTakeMonthStr;
  const takesThisMonth = lastTakeMonthStr === currentMonthStr ? (userData.behavioral?.takesThisMonth || 0) : 0;
  const limitReached = takesThisMonth >= 3;

  return (
    <div className="min-h-screen bg-black text-white flex font-body selection:bg-primary/30 relative overflow-hidden">
      <div className="noise-overlay" />

      {/* Background Ambient Orbs */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <Sidebar />

      <main className="flex-1 ml-24 p-8 lg:p-12 space-y-12 relative z-10">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">Live Workspace</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight">Intelligence <span className="text-white/40">Dashboard.</span></h1>
            <p className="text-[10px] font-medium text-white/20 uppercase tracking-[0.2em]">Authorized: {userData.displayName || userData.email} / Node: Alpha-Z</p>
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative flex-1 md:flex-none lg:w-80 group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-primary transition-colors" size={16} />
              <input 
                className="w-full bg-[#0A0A0A] border border-white/5 rounded-2xl pl-12 pr-4 py-3 outline-none focus:border-primary/30 focus:bg-white/[0.05] transition-all text-sm font-medium text-white"
                placeholder="Audit financial metrics..."
              />
            </div>
            <Link to="/notifications" className="w-12 h-12 rounded-2xl bg-[#0A0A0A] border border-white/5 flex items-center justify-center text-white/20 hover:text-white transition-all"><Bell size={20} /></Link>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard 
            label="Health Score" 
            value={healthScore > 0 ? healthScore.toFixed(1) : "N/A"} 
            trend={healthScore > 0 ? "+1.2%" : null}
            progress={0}
            sub={healthScore > 0 ? "Trajectory: Alpha" : "Audit Required"} 
          />
          <StatCard 
            label="Wealth Velocity" 
            value={velocity !== "0.00" ? `${velocity}v` : "0.00v"} 
            progress={0}
            sub={velocity !== "0.00" ? "Efficiency: Optimized" : "Awaiting Data"} 
          />
          <StatCard 
            label="Budget Leakage" 
            value={`₹${formatINR(wasteTotal)}`} 
            color={wasteTotal > 2000 ? "red" : "primary"}
            progress={0}
            sub={wasteTotal > 0 ? "Identified Items" : "Protocol: Secured"} 
          />
          <div className="p-6 flex flex-col justify-between border border-white/5 bg-[#0A0A0A] rounded-[1.5rem] group hover:border-primary/20 transition-all">
            <div className="flex justify-between items-center">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20">System Uplink</p>
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
            </div>
            <div>
                <h3 className="text-xl font-black italic text-white tracking-widest uppercase">{status}</h3>
                <p className="text-[8px] text-white/20 uppercase tracking-[0.1em] font-black">FinSight AI Protocol v3.4.1</p>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="py-4" />

        <div className="grid grid-cols-12 gap-8">
            {/* Health Intelligence Card */}
            <div className="col-span-12 lg:col-span-6 group">
                <div className="p-8 h-full space-y-8 bg-[#0A0A0A] border border-white/5 rounded-[2.5rem] relative overflow-hidden backdrop-blur-xl hover:border-primary/30 transition-all duration-500">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 blur-[60px]" />
                    <div className="flex justify-between items-start relative z-10">
                        <div className="space-y-1">
                            <h3 className="text-xl font-bold text-white">Health Intelligence</h3>
                            <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/40">Behavioral Score & Bands</p>
                        </div>
                        <Activity className="text-primary" size={20} />
                    </div>
                    
                    <div className="flex items-center gap-8 relative z-10">
                        <div className="relative flex items-center justify-center">
                            <svg className="w-28 h-28 transform -rotate-90 overflow-visible" viewBox="0 0 96 96">
                                <circle cx="48" cy="48" r="42" stroke="currentColor" strokeWidth="4" fill="transparent" className="text-white/5" />
                                <Motion.circle 
                                    cx="48" cy="48" r="42" 
                                    stroke="currentColor" 
                                    strokeWidth="8" 
                                    fill="transparent" 
                                    strokeDasharray={264} 
                                    initial={{ strokeDashoffset: 264 }}
                                    animate={{ strokeDashoffset: 264 - (264 * (healthScore || 0)) / 100 }}
                                    transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
                                    className="text-primary drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                                    strokeLinecap="round"
                                />
                            </svg>
                            <span className="absolute inset-0 flex items-center justify-center text-3xl font-black italic">{healthScore > 0 ? healthScore.toFixed(1) : 0}</span>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <p className="text-[10px] uppercase font-bold text-white/30">Current Band</p>
                                <p className="text-2xl font-bold text-primary italic">{healthBand}</p>
                            </div>
                            <div className="flex gap-2">
                                <span className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-[8px] font-bold text-primary uppercase">Stable</span>
                                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[8px] font-bold text-white/40 uppercase">V-Ready</span>
                            </div>
                        </div>
                    </div>

                    <div className="pt-6 border-t border-white/5 grid grid-cols-2 gap-4 relative z-10">
                        <div className="bg-white/5 p-4 rounded-2xl">
                            <p className="text-[8px] uppercase font-bold text-white/30 mb-1">Interpretation</p>
                            <p className="text-xs font-medium text-white/80">{healthScore > 0 ? "Highly disciplined habits detected across sectors." : "Run audit to initialize behavioral mapping."}</p>
                        </div>
                        <div className="bg-white/5 p-4 rounded-2xl">
                            <p className="text-[8px] uppercase font-bold text-white/30 mb-1">Trajectory</p>
                            <p className="text-xs font-medium text-white/80">{healthScore > 0 ? "Projected: +4.2 points / 30d" : "Pending health intelligence scan."}</p>
                        </div>
                    </div>

                    <div className="pt-2 relative z-10 w-full mt-2">
                        {limitReached ? (
                          <div className="w-full text-center py-3 bg-white/5 text-white/40 text-[9px] uppercase tracking-[0.2em] font-black rounded-2xl border border-white/5 cursor-not-allowed">
                            Limit Reached (3/3 this month)
                          </div>
                        ) : (
                          <Link to="/onboarding/step1" className="block w-full text-center py-3 bg-primary/10 text-primary text-[9px] uppercase tracking-[0.2em] font-black rounded-2xl border border-primary/20 hover:bg-primary hover:text-black transition-all">
                            Retake Behavioral Profile ({3 - takesThisMonth} left this month)
                          </Link>
                        )}
                    </div>
                </div>
            </div>

            {/* Waste Analysis Card */}
            <div className="col-span-12 lg:col-span-6 group">
                <div className="p-8 h-full space-y-8 bg-[#0A0A0A] border border-white/5 rounded-[2.5rem] relative overflow-hidden backdrop-blur-xl hover:border-red-500/20 transition-all duration-500">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-red-500/10 blur-[60px]" />
                    <div className="flex justify-between items-start relative z-10">
                        <div className="space-y-1">
                            <h3 className="text-xl font-bold text-white">Waste Analysis</h3>
                            <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/40">Leakage & Subscriptions</p>
                        </div>
                        <Zap className="text-red-500" size={20} />
                    </div>

                    <div className="space-y-5 relative z-10">
                        <div className="flex items-end gap-3 font-display">
                            <span className="text-4xl font-bold text-red-500">₹{formatINR(wasteTotal)}</span>
                            <span className="text-xs text-white/30 mb-1.5 uppercase font-bold">Monthly Leakage</span>
                        </div>
                        
                        <div className="space-y-2">
                            {wasteSubs.length > 0 ? wasteSubs.slice(0, 2).map((s, i) => (
                                <div key={i} className="flex justify-between items-center bg-white/[0.03] p-3 rounded-xl border border-white/5 group-hover:border-red-500/10 transition-all">
                                    <div className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                                        <span className="text-xs font-bold text-white/80 italic">{s.name}</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="text-[9px] uppercase font-black text-red-500/60 tracking-tighter">Active</span>
                                        <span className="text-xs font-bold text-white/60 italic">₹{formatINR(Math.round(s.monthlyCost))}<span className="text-[9px] not-italic text-white/30">/mo</span></span>
                                    </div>
                                </div>
                            )) : (
                                <p className="text-[10px] uppercase font-black text-white/10 tracking-[0.3em] py-4">No leakage items identified.</p>
                            )}
                        </div>
                    </div>

                    <div className="pt-2">
                        <Link to="/waste" className="block w-full py-3 bg-red-500/10 border border-red-500/20 text-red-500 text-center rounded-2xl text-[9px] font-black uppercase tracking-[0.2em] hover:bg-red-500 hover:text-white transition-all">Recover Waste</Link>
                    </div>
                </div>
            </div>

            {/* Goal Trajectory Card */}
            <div className="col-span-12 lg:col-span-8 group">
                <div className="p-8 h-full space-y-12 bg-[#0A0A0A] border border-white/5 rounded-[2.5rem] relative overflow-hidden backdrop-blur-xl hover:border-primary/20 transition-all duration-500">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px]" />
                    <div className="flex justify-between items-end relative z-10">
                        <div className="space-y-1">
                            <h3 className="text-2xl font-bold text-white italic">Goal Trajectory <span className="text-white/20">/ Prediction</span></h3>
                            <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/40">Success Probability Modeling</p>
                        </div>
                        <div className="bg-primary/20 p-2 rounded-xl border border-primary/30">
                            <Target className="text-primary" size={20} />
                        </div>
                    </div>

                    {goalActive ? (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 py-6">
                            <div className="col-span-2 space-y-6">
                                <div className="h-4 w-full bg-white/5 rounded-full overflow-hidden border border-white/5 p-1">
                                    <Motion.div 
                                        initial={{ width: 0 }}
                                        animate={{ width: '0%' }}
                                        transition={{ duration: 1.5, ease: 'circOut' }}
                                        className="h-full bg-gradient-to-r from-primary/40 via-primary to-white rounded-full shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                                    />
                                </div>
                                <div className="flex justify-between text-[10px] font-black uppercase tracking-widest italic">
                                    <span className="text-white/30 tracking-[0.3em]">Status: Initializing Analysis...</span>
                                </div>
                            </div>
                            <div className="bg-white/5 p-6 rounded-[2rem] border border-white/5 flex flex-col justify-center items-center gap-1">
                                <p className="text-[9px] font-black uppercase text-white/30">Est. Date</p>
                                <p className="text-xl font-bold italic text-white">Aug 2026</p>
                            </div>
                        </div>
                    ) : (
                        <div className="py-12 flex flex-col items-center justify-center border border-dashed border-white/5 rounded-[2rem] space-y-4">
                            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">Awaiting Goal Directive...</p>
                            <Link to="/goals" className="px-6 py-2 bg-primary/10 border border-primary/20 text-primary text-[8px] font-black uppercase tracking-widest rounded-full hover:bg-primary hover:text-black transition-all">Set a Goal</Link>
                        </div>
                    )}
                </div>
            </div>

            {/* AI Advisor Card */}
            <div className="col-span-12 lg:col-span-4 group">
                <div className="p-8 h-full space-y-8 bg-[#0A0A0A] border border-primary/20 rounded-[2.5rem] relative overflow-hidden backdrop-blur-xl">
                    <div className="absolute top-0 left-0 w-32 h-32 bg-primary/10 blur-[40px]" />
                    <div className="flex items-center gap-4 relative z-10">
                        <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center border border-primary/30 shadow-[0_0_20px_rgba(16,185,129,0.1)]">
                            <Brain className="text-primary" size={24} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold italic tracking-tight text-white">AI Advisor</h3>
                            <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-primary">Insight Stream</p>
                        </div>
                    </div>

                    <div className="space-y-4 relative z-10 flex-1">
                        <div className="bg-white/5 p-4 rounded-2xl space-y-2 border border-white/5 hover:border-primary/20 hover:bg-white/10 transition-all cursor-pointer group">
                            <span className="text-[9px] uppercase font-black text-red-400 tracking-widest">Anomaly</span>
                            <p className="text-xs text-white/70 leading-relaxed font-medium">Duplicate subscription detected. Audit recommended.</p>
                        </div>
                        <div className="bg-white/5 p-4 rounded-2xl space-y-2 border border-white/5 hover:border-primary/20 hover:bg-white/10 transition-all cursor-pointer group">
                            <span className="text-[9px] uppercase font-black text-primary tracking-widest">Opportunity</span>
                            <p className="text-xs text-white/70 leading-relaxed font-medium">Shift 5% of monthly waste to your goal to save 3 months.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </main>
    </div>
  );
}
