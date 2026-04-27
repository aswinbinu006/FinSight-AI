import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { Target, TrendingUp, TrendingDown, AlertCircle, Brain, Sparkles, Download, ArrowRight, ShieldAlert, BarChart3, Zap } from 'lucide-react';
import { motion as Motion } from 'framer-motion';
import { formatINR } from '../utils';
import { useUserData } from '../context/UserDataContext';

export default function GoalResult() {
  const { userData } = useUserData();
  
  const target = userData.goal.target || 500000;
  const monthlySaving = userData.goal.monthlySavings || 80000;
  const tf = userData.goal.timeframeId || '3m';
  let months = 3;
  if (tf === '1m') months = 1;
  else if (tf === '3m') months = 3;
  else if (tf === '6m') months = 6;

  const projected = monthlySaving * months;
  const rawProb = target > 0 ? (projected / target) * 100 : 0;
  const successProb = Math.min(100, Math.max(0, rawProb));
  const successProbFormatted = successProb.toFixed(1);
  const shortfall = Math.max(0, target - projected);
  const additionalSavingsNeeded = shortfall > 0 ? shortfall / months : 0;
  const lagPercent = (100 - successProb).toFixed(1);

  let band = 'On Track';
  let riskExplanation = 'Low risk. Your projection perfectly covers the required path. Maintain current financial discipline.';
  
  if (successProb < 20) {
      band = 'Critical Risk';
      riskExplanation = 'Extreme risk of missing the target. Immediate and aggressive strategy adjustments are required.';
  } else if (successProb < 40) {
      band = 'High Risk';
      riskExplanation = 'High probability of falling significantly short. A substantial increase in savings or timeframe extension is necessary.';
  } else if (successProb < 60) {
      band = 'Uncertain';
      riskExplanation = 'Moderate risk. You are roughly halfway on track, but minor unexpected expenses could derail progress.';
  } else if (successProb < 80) {
      band = 'Likely';
      riskExplanation = 'Manageable risk. You are closing in on the target. Minor optimizations to monthly savings will guarantee success.';
  }

  // Dynamic Chart Calculations
  const maxY = Math.max(target, projected) * 1.2 || 1;
  const padding = 40;
  const svgHeight = 300;
  
  const pointsExpected = Array.from({ length: months + 1 }).map((_, m) => {
    const x = (m / months) * 800;
    const yVal = (target / months) * m;
    const y = svgHeight - padding - (yVal / maxY) * (svgHeight - padding * 2);
    return `${x},${y}`;
  }).join(' ');

  const pointsActual = Array.from({ length: months + 1 }).map((_, m) => {
    const x = (m / months) * 800;
    const yVal = monthlySaving * m;
    const y = svgHeight - padding - (yVal / maxY) * (svgHeight - padding * 2);
    return `${x},${y}`;
  }).join(' ');

  // Dynamic Risk & Potential Generation
  const dynamicRisks = [];
  if (shortfall > 0) {
      dynamicRisks.push({
          title: 'Projected Savings Deficit',
          desc: `Current savings of ₹${formatINR(monthlySaving)}/mo leaves you ₹${formatINR(shortfall)} short.`,
          impact: 'High',
          color: 'text-red-500'
      });
  } else {
       dynamicRisks.push({
          title: 'Inflation Erosion',
          desc: 'Holding large uninvested cash reduces true purchasing power over time.',
          impact: 'Low',
          color: 'text-amber-500'
      });
  }

  if (successProb < 50) {
       dynamicRisks.push({
          title: 'Timeline Stress',
          desc: `Hitting ₹${formatINR(target)} in ${months} months requires aggressive capital reallocation.`,
          impact: 'Critical',
          color: 'text-red-500'
      });
  } else if (successProb >= 80) {
       dynamicRisks.push({
          title: 'Complacency Risk',
          desc: 'High probability of success may tempt unnecessary discretionary spending.',
          impact: 'Low',
          color: 'text-primary'
      });
  }

  const dynamicPotentials = [];
  if (additionalSavingsNeeded > 0 && additionalSavingsNeeded < monthlySaving) {
       dynamicPotentials.push({
           title: 'Micro-Increments',
           impact: 'High Impact',
           desc: `Saving just ₹${formatINR(Math.ceil(additionalSavingsNeeded))} more per month unlocks this goal completely.`,
           width: '85%'
       });
  } else if (successProb >= 100) {
       dynamicPotentials.push({
           title: 'Surplus Accumulation',
           impact: 'Maximum Impact',
           desc: `You are projected to exceed your goal by an incredible ₹${formatINR(projected - target)}.`,
           width: '100%'
       });
  } else {
       dynamicPotentials.push({
           title: 'Timeline Extension',
           impact: 'Stress Relief',
           desc: `Adding 1-2 more months to the horizon significantly lowers monthly burden.`,
           width: '60%'
       });
  }

  dynamicPotentials.push({
      title: 'Resource Auditing',
      impact: 'Yield Generator',
      desc: 'Liquidating shadow nodes & cutting inactive subscriptions frees up hidden capital directly to goals.',
      width: '75%'
  });

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
                    <div className="bg-[#0A0A0A] border border-white/5 p-8 rounded-[2rem] flex flex-col shadow-xl">
                        <span className="text-[10px] font-black uppercase tracking-widest text-white/20 mb-4">Success Probability</span>
                        <div className="space-y-1 mb-6">
                            <h3 className="text-4xl font-black italic tracking-tighter">{successProbFormatted}%</h3>
                            <div className={`flex items-center gap-1 ${successProb >= 80 ? 'text-primary' : 'text-red-500'} text-[10px] font-black`}>
                                {successProb >= 80 ? <TrendingUp size={12} /> : <TrendingDown size={12} />} 
                                {successProb >= 80 ? 'Target Achievable' : 'Deficit Detected'}
                            </div>
                        </div>
                        <p className="text-xs text-white/50 leading-relaxed mt-auto pt-4 border-t border-white/5">
                            Based on your current commitment of <strong>₹{formatINR(monthlySaving)}/mo</strong>, this is the mathematical likelihood of reaching your <strong>₹{formatINR(target)}</strong> target in {months} months.
                        </p>
                    </div>

                    <div className="bg-[#0A0A0A] border border-white/5 p-8 rounded-[2rem] flex flex-col shadow-xl">
                        <span className="text-[10px] font-black uppercase tracking-widest text-white/20 mb-4">Risk Factor</span>
                        <div className="space-y-2 mb-6">
                            <span className={`px-3 py-1 ${successProb > 60 ? 'bg-primary/10 text-primary border-primary/20' : 'bg-amber-500/10 text-amber-500 border-amber-500/20'} rounded-full text-[10px] font-black uppercase tracking-[0.2em] border inline-block`}>
                                {band}
                            </span>
                        </div>
                        <p className="text-xs text-white/50 leading-relaxed mt-auto pt-4 border-t border-white/5">
                            {riskExplanation}
                        </p>
                    </div>

                    <div className="bg-primary/5 border border-primary/20 p-8 rounded-[2rem] flex flex-col shadow-xl">
                        <span className="text-[10px] font-black uppercase tracking-widest text-primary/40 mb-4">Action Synthesis</span>
                        <p className="text-sm font-medium leading-relaxed italic text-white/80 mb-6">
                            {successProb >= 100 ? (
                                <span>Savings path is <span className="text-primary">perfectly aligned</span>. Continue trajectory.</span>
                            ) : (
                                <span>Savings path falls short by <span className="text-red-500">{lagPercent}%</span>. Adjustment required.</span>
                            )}
                        </p>
                        <p className="text-xs text-white/50 leading-relaxed mt-auto pt-4 border-t border-white/5">
                            {successProb >= 100 
                                ? "The AI confirms your current strategy is fully sufficient. No further changes are required to hit the objective safely." 
                                : `To eliminate the ${lagPercent}% deficit, you must execute the AI-generated Strategic Directives listed below or extend your target timeframe.`}
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

                    <div className="h-80 w-full bg-white/[0.02] rounded-[2rem] border border-white/5 relative flex flex-col hover:border-white/10 transition-all group/chart">
                        {/* Dynamic SVG Chart */}
                        <div className="absolute inset-0 pt-8 px-4 opacity-80 group-hover/chart:opacity-100 transition-opacity">
                            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 800 300">
                                {/* Grid lines */}
                                {[1, 2, 3].map(i => (
                                   <line key={i} x1="0" y1={(svgHeight/4)*i} x2="800" y2={(svgHeight/4)*i} stroke="#ffffff" strokeOpacity="0.05" strokeWidth="1" />
                                ))}
                                
                                {/* Expected Trajectory (Dashed) */}
                                <polyline 
                                    points={pointsExpected} 
                                    fill="none" 
                                    stroke="rgba(255,255,255,0.4)" 
                                    strokeWidth="2" 
                                    strokeDasharray="8 6" 
                                />
                                
                                {/* Actual Trajectory (Solid Primary) */}
                                <polyline 
                                    points={pointsActual} 
                                    fill="none" 
                                    stroke="#10B981" 
                                    strokeWidth="4" 
                                    strokeLinecap="round"
                                    strokeLinejoin="round" 
                                />

                                {/* End Goal Nodes */}
                                <circle cx="800" cy={svgHeight - padding - (target / maxY) * (svgHeight - padding * 2)} r="6" fill="rgba(255,255,255,0.4)" />
                                <circle cx="800" cy={svgHeight - padding - (projected / maxY) * (svgHeight - padding * 2)} r="8" fill="#10B981" />
                            </svg>
                        </div>

                        {/* Chart Overlay Text */}
                        <div className="relative z-10 w-full flex justify-between p-8 pointer-events-none opacity-0 group-hover/chart:opacity-100 transition-opacity duration-500">
                            <div className="bg-black/50 backdrop-blur-md px-4 py-2 rounded-xl border border-white/5 space-y-1 inline-block">
                                <p className="text-sm font-black italic">Live Sync Output</p>
                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">Expected: ₹{formatINR(target)}</p>
                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Projected: ₹{formatINR(projected)}</p>
                            </div>
                            
                            {projected < target && (
                                <div className="bg-red-500/10 backdrop-blur-md px-4 py-3 rounded-xl border border-red-500/20 text-right self-end mt-48">
                                    <p className="text-red-500 font-black italic text-lg">- ₹{formatINR(target - projected)}</p>
                                    <p className="text-[8px] font-bold uppercase tracking-widest text-red-500/60">Projected Shortfall</p>
                                </div>
                            )}
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
                            {dynamicRisks.map((risk, i) => (
                                <div key={i} className="flex flex-col border-b border-white/5 pb-4 space-y-2">
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm font-medium text-white/80">{risk.title}</span>
                                        <span className={`text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded bg-white/5 ${risk.color}`}>
                                            Risk: {risk.impact}
                                        </span>
                                    </div>
                                    <p className="text-xs text-white/40 italic">{risk.desc}</p>
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
                            {dynamicPotentials.map((pot, i) => (
                                <div key={i} className="space-y-3 border-b border-white/5 pb-4">
                                    <div className="flex flex-col space-y-2">
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm font-medium text-white/80">{pot.title}</span>
                                            <span className="text-[9px] font-black uppercase text-primary tracking-widest">{pot.impact}</span>
                                        </div>
                                        <p className="text-xs text-white/40 italic">{pot.desc}</p>
                                    </div>
                                    <div className="h-1 bg-white/5 rounded-full overflow-hidden mt-2">
                                        <div className="h-full bg-primary" style={{width: pot.width}} />
                                    </div>
                                </div>
                            ))}
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
                            <div className="bg-[#0A0A0A] border border-white/5 p-6 rounded-[2rem] space-y-4 hover:border-white/20 transition-all group cursor-pointer shadow-xl">
                                <div className="flex justify-between items-center">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-primary italic">Savings Directive</span>
                                    <span className="text-[8px] font-black px-2 py-0.5 rounded bg-white/5 text-red-500">CRITICAL</span>
                                </div>
                                <p className="text-sm font-bold leading-relaxed">Increase monthly savings by ₹{formatINR(Math.ceil(additionalSavingsNeeded))} to reach your target by the deadline.</p>
                                <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-tighter text-white/20 hover:text-white transition-all">
                                    Apply Directive <ArrowRight size={12} />
                                </button>
                            </div>
                        )}
                        {[
                            { title: 'Portfolio Rebalance', msg: 'Moving 5% of savings to stable liquid funds will reduce your volatility risk.', priority: 'HIGH', color: 'text-primary', type: 'Investment Action' },
                            { title: 'Waste Reduction', msg: `We detected unused expenses in your profile. Cut them to fund your goal faster.`, priority: 'MED', color: 'text-amber-500', type: 'Cost Efficiency' }
                        ].map((actionObj, i) => (
                            <div key={i} className="bg-[#0A0A0A] border border-white/5 p-6 rounded-[2rem] space-y-4 hover:border-white/20 transition-all group cursor-pointer shadow-xl">
                                <div className="flex justify-between items-center">
                                    <span className={`text-[10px] font-black uppercase tracking-widest italic ${actionObj.color}`}>{actionObj.type}</span>
                                    <span className="text-[8px] font-black px-2 py-0.5 rounded bg-white/5 text-white/50">{actionObj.priority}</span>
                                </div>
                                <p className="text-sm font-bold leading-relaxed">{actionObj.msg}</p>
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
                        <Link to="/waste" className="w-full py-5 bg-primary text-black font-black text-[10px] uppercase tracking-[0.3em] rounded-2xl shadow-xl shadow-primary/20 hover:scale-105 transition-all flex items-center justify-center gap-2">
                            <Zap size={16} /> Execute Directives (Cut Waste)
                        </Link>
                    </div>
                </div>
            </div>
        </div>
      </main>
    </div>
  );
}
