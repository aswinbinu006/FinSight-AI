import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { Trash2, AlertTriangle, TrendingDown, ArrowRight, Download, Brain, Sparkles, ShieldAlert, CreditCard } from 'lucide-react';
import { formatINR } from '../utils';

export default function WasteMonthly() {
  const [subscriptions] = useState(() => {
    const saved = localStorage.getItem('finsight_subscriptions');
    return saved ? JSON.parse(saved) : [];
  });

  const processedSubs = subscriptions.map(sub => {
      // Calculate normalized monthly cost
      const monthlyCost = (sub.cycle === 'Yearly' || sub.cycle === 'Annual') ? sub.cost / 12 : sub.cost;
      // Evaluate if it's considered waste based on USAGE, falling back to cost if usage is missing 
      const isWaste = sub.usage ? (sub.usage === 'Rarely' || sub.usage === 'Never') : (sub.cost > 500); 
      return { ...sub, monthlyCost, isWaste };
  });

  // ONLY sum up subscriptions that are flagged as waste
  const wasteScore = processedSubs.reduce((acc, sub) => {
      return sub.isWaste ? acc + sub.monthlyCost : acc;
  }, 0);
  
  const yearlyRecovery = wasteScore * 12;

  let wasteBand = 'Optimized';
  if (wasteScore > 5000) wasteBand = 'Critical Waste';
  else if (wasteScore > 2000) wasteBand = 'High Waste';
  else if (wasteScore > 1000) wasteBand = 'Moderate Waste';
  else if (wasteScore > 500) wasteBand = 'Controlled';

  const utilityData = subscriptions.slice(0, 3).map((sub, i) => ({
      name: sub.name,
      match: i === 0 ? 92 : i === 1 ? 45 : 12,
      color: i === 0 ? 'bg-primary' : i === 1 ? 'bg-white/20' : 'bg-red-500',
      textClass: i === 0 ? 'text-primary italic' : i === 1 ? 'text-white/40 italic' : 'text-red-500 italic'
  }));

  if (utilityData.length === 0) {
      utilityData.push({ name: 'Awaiting Nodes', match: 0, color: 'bg-white/5', textClass: 'text-white/20' });
  }

  const generatedInsights = processedSubs.slice(0, 2).map((sub, i) => {
      const annualCost = sub.monthlyCost * 12;
      const isDormant = sub.usage === 'Rarely' || sub.usage === 'Never';
      
      if (isDormant) {
          return {
              title: 'Cancel Suggested',
              msg: `You ${sub.usage.toLowerCase()} use ${sub.name}. Cancel this immediately to save money.`,
              save: `₹${formatINR(Math.round(annualCost))}/yr`,
              color: 'text-red-500'
          };
      } else {
          return {
              title: 'Save Money',
              msg: `${sub.name} is used frequently. Switch to annual billing to cut long-term costs.`,
              save: `₹${formatINR(Math.round(annualCost * 0.2))}/yr`,
              color: 'text-primary'
          };
      }
  });

  if (generatedInsights.length === 0) {
      generatedInsights.push({
          title: 'Audit Required',
          msg: 'Add more subscriptions to generate advice.',
          save: '---',
          color: 'text-white/40'
      });
  }

  return (
    <div className="min-h-screen bg-black text-white flex font-body">
      <Sidebar activePage="waste" />

      <main className="flex-1 ml-24 p-8 lg:p-12 space-y-12 pb-24 relative z-10">
        {/* Header Section */}
        <header className="flex justify-between items-end mb-8 border-b border-white/5 pb-12">
          <div className="space-y-2">
            <div className="flex items-center gap-3 text-red-500 uppercase text-[10px] font-black tracking-[0.4em]">
              <AlertTriangle size={12} className="animate-pulse" />
              Leakage Detection Active
            </div>
            <h1 className="text-5xl font-black italic tracking-tighter">Waste <span className="text-white/20">Recovery.</span></h1>
          </div>
          <div className="flex gap-4">
             <button className="px-6 py-3 border border-primary/20 bg-primary/5 text-[10px] font-black uppercase tracking-widest rounded-xl text-primary">
                Monthly Review
             </button>
             <Link 
                to="/waste/yearly" 
                className="px-6 py-3 border border-white/5 bg-white/[0.02] text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-white/5 transition-all text-white/40"
             >
                Yearly Audit
             </Link>
             <Link 
                to="/subscriptions/add" 
                className="px-6 py-3 border border-white/10 bg-white/5 text-[10px] font-black uppercase tracking-widest rounded-xl text-white hover:bg-white/10 transition-all flex items-center gap-2"
             >
                Manage Inventory
             </Link>
          </div>
        </header>

        <div className="grid grid-cols-12 gap-12">
            <div className="col-span-12 lg:col-span-8 space-y-12">
                {/* Hero Leakage Card */}
                <section className="bg-gradient-to-br from-red-500 to-red-900 rounded-[3rem] p-16 relative overflow-hidden shadow-2xl">
                    <div className="relative z-10 space-y-6">
                        <div className="flex items-center gap-2 text-white/60">
                            <ShieldAlert size={16} />
                            <span className="text-[10px] font-black uppercase tracking-[0.4em]">Waste Report</span>
                        </div>
                        <h2 className="text-5xl font-black italic tracking-tighter">You are wasting ₹{formatINR(wasteScore)}/month</h2>
                        <p className="text-white/60 text-sm max-w-md font-medium leading-relaxed uppercase tracking-wider">
                            Identifying unneeded subscriptions and cutting waste will save you <span className="text-white font-black italic">₹{formatINR(yearlyRecovery)} annually.</span>
                        </p>
                    </div>
                    <div className="absolute -right-20 -bottom-20 w-[400px] h-[400px] bg-black/20 rounded-full blur-[80px]" />
                </section>

                {/* Subscriptions Audit */}
                <section className="space-y-6">
                    <div className="flex justify-between items-center px-4">
                        <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20 italic">Your Subscriptions</h3>
                        <span className="text-[10px] font-black uppercase text-primary">Live Monitoring</span>
                    </div>
                    <div className="space-y-4">
                        {processedSubs.map((sub, i) => {
                            const isWaste = sub.isWaste;
                            return (
                               <div key={i} className={`p-8 rounded-[2rem] border transition-all flex items-center justify-between group ${isWaste ? 'bg-red-500/5 border-red-500/20 hover:border-red-500/40' : 'bg-[#0A0A0A] border-white/5 hover:border-white/10'}`}>
                                    <div className="flex items-center gap-6">
                                        <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-white/20">
                                            <CreditCard size={28} />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 mb-1">
                                                <h4 className="font-bold text-lg">{sub.name}</h4>
                                                <span className="text-[9px] font-black bg-white/5 px-2 py-1 rounded text-white/40 uppercase tracking-tighter">{sub.cycle}</span>
                                            </div>
                                            <p className="text-xs text-white/40 font-medium uppercase tracking-widest">Active Monitoring • Verified Node</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-8">
                                         <div className="text-right">
                                             <div className="text-xl font-black italic">₹{formatINR(Math.round(sub.monthlyCost))} <span className="text-[10px] text-white/20 not-italic tracking-widest uppercase">/mo</span></div>
                                             <div className={`text-[10px] font-black uppercase tracking-tighter ${isWaste ? 'text-red-500' : 'text-primary'}`}>{isWaste ? 'Money Wasted' : 'Good Value'}</div>
                                         </div>
                                         <button className={`px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all ${isWaste ? 'bg-red-500 text-white' : 'bg-white/5 text-white/40 hover:bg-white/10'}`}>
                                             {isWaste ? 'Cancel' : 'Audit'}
                                         </button>
                                    </div>
                               </div>
                            );
                        })}
                    </div>
                </section>

                {/* Meta Grid */}
                <section className="grid grid-cols-2 gap-8">
                    <div className="bg-[#0A0A0A] border border-white/5 rounded-[3rem] p-10 space-y-6">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">Utility Distribution</h4>
                        <div className="space-y-6">
                            {utilityData.map((item, i) => (
                               <div key={i} className="space-y-2">
                                   <div className="flex justify-between text-[9px] font-black uppercase text-white/40 tracking-widest">
                                       <span>{item.name}</span>
                                       <span className={item.textClass}>{item.match}% Match</span>
                                   </div>
                                   <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                                       <div className={`h-full ${item.color}`} style={{width: `${item.match}%`}} />
                                   </div>
                               </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-primary/5 border-2 border-primary/20 rounded-[3rem] p-10 flex flex-col justify-between group">
                        <div className="space-y-4">
                            <Brain className="text-primary" size={32} />
                            <h4 className="text-xl font-black italic tracking-tight">Co-Pilot Node Integration</h4>
                            <p className="text-xs font-medium text-white/40 leading-relaxed uppercase tracking-wider">
                                Execute an automated review to identify provider alternatives and recover max liquidity.
                            </p>
                        </div>
                        <button className="w-full py-4 bg-primary text-black font-black text-[10px] uppercase tracking-[0.3em] rounded-2xl hover:scale-105 transition-all">
                            Initialize Audit
                        </button>
                    </div>
                </section>
            </div>

            {/* Intelligence Side Feed */}
            <div className="col-span-12 lg:col-span-4 space-y-8">
                <div className="bg-[#0A0A0A] border border-white/5 rounded-[4rem] p-10 sticky top-10 space-y-12">
                    <div className="flex items-center gap-3">
                        <Sparkles className="text-primary" size={24} />
                        <h2 className="text-2xl font-black italic tracking-tighter">Intelligence.</h2>
                    </div>

                    <div className="space-y-6">
                        {generatedInsights.map((node, i) => (
                           <div key={i} className="bg-white/[0.02] border border-white/5 p-6 rounded-3xl space-y-4 hover:border-white/20 transition-all cursor-pointer group">
                                <span className={`text-[9px] font-black uppercase tracking-widest ${node.color}`}>{node.title}</span>
                                <p className="text-sm font-bold leading-relaxed">{node.msg}</p>
                                <div className="flex justify-between items-center pt-4 border-t border-white/5">
                                    <span className="text-[10px] font-black uppercase text-white/20 tracking-tighter">Est. Recovery</span>
                                    <span className="text-xs font-black italic text-white">{node.save}</span>
                                </div>
                           </div>
                        ))}
                    </div>

                    <div className="bg-gradient-to-br from-primary to-primary-dark p-8 rounded-[2rem] text-black space-y-6 relative overflow-hidden group">
                        <div className="relative z-10 space-y-4">
                            <span className="text-[10px] font-black uppercase tracking-widest text-black/60">Premium Directive</span>
                            <p className="text-lg font-black leading-tight italic">Detect dual-linked shadow nodes across accounts.</p>
                            <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] border-b-2 border-black/20 pb-1">
                                Command Co-Pilot <ArrowRight size={14} />
                            </button>
                        </div>
                    </div>

                    <button className="w-full py-4 text-[10px] font-black uppercase tracking-widest text-white/20 hover:text-white transition-all flex items-center justify-center gap-2 border border-white/5 rounded-2xl">
                         <Download size={14} /> DOWNLOAD AUDIT.pdf
                    </button>
                </div>
            </div>
        </div>
      </main>
    </div>
  );
}
