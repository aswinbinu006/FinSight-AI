import React from 'react';
import Sidebar from '../components/Sidebar';
import { Target, TrendingUp, TrendingDown, AlertCircle, Brain, Sparkles, Download, ArrowRight, ShieldAlert, BarChart3 } from 'lucide-react';
import { motion as Motion } from 'framer-motion';
import { formatINR } from '../utils';

export default function GoalResult() {
  const storedTarget = localStorage.getItem('finsight_targetAmount');
  let target = 500000;
  let monthlySaving = 80000;
  let months = 6;

  if (storedTarget) {
     target = parseFloat(storedTarget) || 0;
     monthlySaving = parseFloat(localStorage.getItem('finsight_monthlySavings')) || 0;
     const tf = localStorage.getItem('finsight_timeframeId');
     if(tf === '1m') months = 1;
     else if(tf === '3m') months = 3;
     else if(tf === '6m') months = 6;
  }

  const projected = monthlySaving * months;
  const rawProb = target > 0 ? (projected / target) * 100 : 0;
  const successProb = Math.min(100, Math.max(0, rawProb));
  const successProbFormatted = successProb.toFixed(1);
  const shortfall = Math.max(0, target - projected);
  const additionalSavingsNeeded = shortfall > 0 ? shortfall / months : 0;
  const lagPercent = (100 - successProb).toFixed(1);

  let band = 'On Track';
  if (successProb < 20) band = 'Critical Risk';
  else if (successProb < 40) band = 'High Risk';
  else if (successProb < 60) band = 'Uncertain';
  else if (successProb < 80) band = 'Likely';

  return (
    <div className="min-h-screen bg-black text-white flex font-body selection:bg-primary/30">
      <Sidebar activePage="goal" />

      <main className="flex-1 ml-24 p-8 lg:p-12 space-y-12 pb-24 relative z-10">
        {/* Header */}
        <header className="flex justify-between items-end mb-8 border-b border-white/5 pb-12">
            <div className="space-y-2">
                <div className="flex items-center gap-3 text-primary uppercase text-[10px] font-black tracking-[0.4em]">
                    <Target size={12} className="animate-pulse" />
                    Strategic Objective Active
                </div>
                <h1 className="text-5xl font-black italic tracking-tighter">Goal <span className="text-white/20">Intelligence.</span></h1>
            </div>
            <div className="text-right">
                 <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20">Trajectory Status</div>
                 <div className={`text-xs font-mono ${successProb > 60 ? 'text-primary' : 'text-amber-500'}`}>{successProb > 60 ? 'STABLE' : 'DEVIATION_DETECTED'}</div>
            </div>
        </header>

        <div className="grid grid-cols-12 gap-12">
            <div className="col-span-12 lg:col-span-8 space-y-12">
                {/* Summary Grid */}
                <div className="grid grid-cols-3 gap-8">
                    <div className="bg-[#0A0A0A] border border-white/5 p-8 rounded-[2rem] space-y-4 shadow-xl">
                        <span className="text-[10px] font-black uppercase tracking-widest text-white/20">Success Probability</span>
                        <div className="space-y-1">
                            <h3 className="text-4xl font-black italic tracking-tighter">{successProbFormatted}%</h3>
                            <div className={`flex items-center gap-1 ${successProb >= 80 ? 'text-primary' : 'text-red-500'} text-[10px] font-black`}>
                                {successProb >= 80 ? <TrendingUp size={12} /> : <TrendingDown size={12} />} 
                                {successProb >= 80 ? 'Target Achievable' : 'Deficit Detected'}
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#0A0A0A] border border-white/5 p-8 rounded-[2rem] space-y-4 shadow-xl">
                        <span className="text-[10px] font-black uppercase tracking-widest text-white/20">Risk Factor</span>
                        <div className="space-y-2">
                            <span className={`px-3 py-1 ${successProb > 60 ? 'bg-primary/10 text-primary border-primary/20' : 'bg-amber-500/10 text-amber-500 border-amber-500/20'} rounded-full text-[10px] font-black uppercase tracking-[0.2em] border`}>
                                {band}
                            </span>
                            <p className="text-[10px] text-white/40 uppercase font-medium italic">Standard Volatility Range</p>
                        </div>
                    </div>
                    <div className="bg-primary/5 border border-primary/20 p-8 rounded-[2rem] space-y-4 shadow-xl">
                        <span className="text-[10px] font-black uppercase tracking-widest text-primary/40">Neural Synthesis</span>
                        <p className="text-xs font-medium leading-relaxed italic text-white/60">
                            {successProb >= 100 ? (
                                <span>Savings path is <span className="text-primary">perfectly aligned</span>. Continue current trajectory to comfortably hit the goal.</span>
                            ) : (
                                <span>Current savings path falls short by <span className="text-red-500">{lagPercent}%</span>. Strategy adjustment required to reach the target amount.</span>
                            )}
                        </p>
                    </div>
                </div>

                {/* Main Trajectory Card */}
                <section className="bg-[#0A0A0A] border border-white/5 rounded-[3rem] p-12 relative overflow-hidden group">
                    <div className="flex justify-between items-end mb-12 relative z-10">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-black italic tracking-tight">Capital Trajectory</h2>
                            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 italic">Predictive vs Actual Performance</p>
                        </div>
                        <div className="flex gap-6">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-white/10" />
                                <span className="text-[9px] font-black uppercase tracking-widest text-white/20">Expected</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                                <span className="text-[9px] font-black uppercase tracking-widest text-primary">Actual</span>
                            </div>
                        </div>
                    </div>

                    <div className="h-80 w-full bg-white/[0.02] rounded-[2rem] border border-white/5 relative overflow-hidden flex flex-col items-center justify-center group-hover:border-white/10 transition-all">
                        <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 800 300">
                                <path d="M0 250 Q 200 240, 400 150 T 800 50" fill="none" stroke="#10B981" strokeWidth="2" />
                                <path d="M0 250 Q 200 260, 400 220 T 700 180" fill="none" stroke="#FFFFFF" strokeDasharray="8 4" strokeWidth="1" opacity="0.3" />
                            </svg>
                        </div>
                        <div className="text-center z-10 space-y-4">
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto border border-primary/20 shadow-2xl">
                                <BarChart3 size={32} className="text-primary" />
                            </div>
                            <div className="space-y-1">
                                <p className="text-sm font-black italic">Predictive Analysis Active</p>
                                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-white/20">Live Sync: Node Alpha-4</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Risks & Potential */}
                <div className="grid grid-cols-2 gap-8">
                    <div className="bg-[#0A0A0A] border border-red-500/10 p-10 rounded-[3rem] space-y-8 border-l-8 border-l-red-500/30">
                        <div className="flex items-center gap-3 text-red-500">
                            <ShieldAlert size={20} />
                            <h3 className="text-[10px] font-black uppercase tracking-[0.4em]">Primary Risks</h3>
                        </div>
                        <div className="space-y-6">
                            {[
                                { title: 'Irregular savings rhythm', impact: 'High', color: 'text-red-500' },
                                { title: 'Exceeding spending ceiling', impact: 'Med', color: 'text-amber-500' }
                            ].map((risk, i) => (
                                <div key={i} className="flex justify-between items-center border-b border-white/5 pb-4">
                                    <span className="text-sm font-medium text-white/60">{risk.title}</span>
                                    <span className={`text-[9px] font-black uppercase tracking-widest ${risk.color}`}>{risk.impact}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-[#0A0A0A] border border-primary/10 p-10 rounded-[3rem] space-y-8 border-l-8 border-l-primary/30">
                        <div className="flex items-center gap-3 text-primary">
                            <Sparkles size={20} />
                            <h3 className="text-[10px] font-black uppercase tracking-[0.4em]">Success Potential</h3>
                        </div>
                        <div className="space-y-6">
                            <div className="space-y-3">
                                <div className="flex justify-between items-center">
                                    <span className="text-xs font-medium text-white/60">Tax Efficiency</span>
                                    <span className="text-[10px] font-black uppercase text-primary tracking-widest">+14% Impact</span>
                                </div>
                                <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                                    <div className="h-full bg-primary" style={{width: '75%'}} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Improvement Strategy Sidebar */}
            <div className="col-span-12 lg:col-span-4 space-y-8">
                <div className="bg-[#0A0A0A] border border-white/5 rounded-[4rem] p-10 sticky top-10 space-y-12">
                    <div className="flex items-center gap-3">
                        <Brain className="text-primary" size={24} />
                        <h2 className="text-2xl font-black italic tracking-tighter">Strategy.</h2>
                    </div>

                    <div className="space-y-6">
                        {additionalSavingsNeeded > 0 && (
                            <div className="bg-white/[0.02] border border-white/5 p-6 rounded-[2rem] space-y-4 hover:border-white/20 transition-all group cursor-pointer">
                                <div className="flex justify-between items-center">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-primary italic">Finance Node</span>
                                    <span className="text-[8px] font-black px-2 py-0.5 rounded bg-white/5 text-red-500">CRITICAL</span>
                                </div>
                                <p className="text-sm font-bold leading-relaxed">Increase monthly savings by ₹{formatINR(Math.ceil(additionalSavingsNeeded))} to reach your target by the deadline.</p>
                                <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-tighter text-white/20 hover:text-white transition-all">
                                    Apply Directive <ArrowRight size={12} />
                                </button>
                            </div>
                        )}
                        {[
                            { title: 'Portfolio Rebalance', msg: 'Move 5% of tech equity to lower volatility.', priority: 'HIGH', color: 'text-primary', type: 'Portfolio' },
                            { title: 'Resource Audit', msg: `4 inactive shadow nodes detected (₹${formatINR(184)}/mo).`, priority: 'MED', color: 'text-amber-500', type: 'Audit' }
                        ].map((node, i) => (
                           <div key={i} className="bg-white/[0.02] border border-white/5 p-6 rounded-[2rem] space-y-4 hover:border-white/20 transition-all group cursor-pointer">
                                <div className="flex justify-between items-center">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-primary italic">{node.type} Node</span>
                                    <span className={`text-[8px] font-black px-2 py-0.5 rounded bg-white/5 ${node.color}`}>{node.priority}</span>
                                </div>
                                <p className="text-sm font-bold leading-relaxed">{node.msg}</p>
                                <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-tighter text-white/20 hover:text-white transition-all">
                                    Apply Directive <ArrowRight size={12} />
                                </button>
                           </div>
                        ))}
                    </div>

                    <div className="space-y-4 pt-8">
                        <button className="w-full py-4 text-[10px] font-black uppercase tracking-widest text-white/20 hover:text-white transition-all flex items-center justify-center gap-2 border border-white/5 rounded-2xl">
                             <Download size={14} /> EXPORT_STRATEGY.pdf
                        </button>
                        <button className="w-full py-5 bg-primary text-black font-black text-[10px] uppercase tracking-[0.3em] rounded-2xl shadow-xl shadow-primary/20 hover:scale-105 transition-all flex items-center justify-center gap-2">
                            <Brain size={16} /> Command Co-Pilot
                        </button>
                    </div>
                </div>
            </div>
        </div>
      </main>
    </div>
  );
}
