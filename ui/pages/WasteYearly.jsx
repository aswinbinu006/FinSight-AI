import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { 
  TrendingDown, 
  Trash2, 
  ArrowUpRight, 
  Activity, 
  ShieldAlert, 
  Zap, 
  ChevronRight, 
  Box, 
  CloudLightning,
  AlertCircle,
  FileText,
  Download
} from 'lucide-react';
import { useUserData } from '../context/UserDataContext';

export default function WasteYearly() {
  const { userData } = useUserData();
  const rawSubs = userData.waste.subscriptions || [];
  const subscriptions = rawSubs.map(sub => {
     const isWaste = sub.usage ? (sub.usage === 'Rarely' || sub.usage === 'Never') : (sub.cost > 1000);
     const yearlyCost = sub.cycle === 'Yearly' || sub.cycle === 'Annual' ? sub.cost : sub.cost * 12;
     return {
         ...sub,
         isWaste,
         yearlyCost,
         type: sub.cycle || "Monthly",
         status: isWaste ? "At Risk" : "Active",
         utility: isWaste ? "Low Utility" : "High Utility",
         utilityColor: isWaste ? "text-red-500" : "text-primary",
         risk: isWaste ? "Abandoned" : "Stable",
         icon: isWaste ? <Trash2 className="text-red-500" size={20} /> : <Zap className="text-primary" size={20} />
     };
  });

  const annualWasteScore = subscriptions.reduce((acc, sub) => {
      return sub.isWaste ? acc + sub.yearlyCost : acc;
  }, 0);
  
  const potentialRecovery = annualWasteScore * 3;

  const utilityData = subscriptions.slice(0, 3).map((sub, i) => ({
      name: sub.name,
      match: i === 0 ? 92 : i === 1 ? 45 : 12,
      color: i === 0 ? 'bg-primary' : i === 1 ? 'bg-white/20' : 'bg-red-500',
      textClass: i === 0 ? 'text-primary italic' : i === 1 ? 'text-white/40 italic' : 'text-red-500 italic'
  }));

  if (utilityData.length === 0) {
      utilityData.push({ name: 'Awaiting Nodes', match: 0, color: 'bg-white/5', textClass: 'text-white/20' });
  }

  const generatedInsights = subscriptions.slice(0, 2).map((sub, i) => {
      const annualCost = sub.cycle === 'Yearly' || sub.cycle === 'Annual' ? sub.cost : sub.cost * 12;
      const isDormant = sub.usage === 'Rarely' || sub.usage === 'Never';
      
      if (isDormant) {
          return {
              title: `${sub.name} Termination`,
              type: 'Cancel Suggested',
              desc: `You ${sub.usage.toLowerCase()} use this. Cancel to save money.`,
              impact: `₹${new Intl.NumberFormat('en-IN').format(annualCost)} Recovered /yr`
          };
      } else {
          return {
              title: `${sub.name} Downgrade`,
              type: 'Save Money',
              desc: `Downgrade ${sub.name} to save money.`,
              impact: `₹${new Intl.NumberFormat('en-IN').format(annualCost * 0.2)} Saved /yr`
          };
      }
  });

  if (generatedInsights.length === 0) {
      generatedInsights.push({
          title: 'Audit Required',
          type: 'System Notice',
          desc: 'Add more subscriptions to generate advice.',
          impact: '---'
      });
  }

  return (
    <div className="min-h-screen bg-black text-white flex font-body selection:bg-primary/30">
      <Sidebar activePage="waste" />

      <main className="flex-1 ml-24 p-8 lg:p-12 space-y-12 pb-24 relative z-10">
        {/* Header Section */}
        <header className="flex justify-between items-end mb-8 border-b border-white/5 pb-12">
          <div className="space-y-2">
            <div className="flex items-center gap-3 text-white/40 uppercase text-[10px] font-black tracking-[0.4em]">
                <Trash2 size={12} />
                Waste Recovery
            </div>
            <h1 className="text-5xl font-black italic tracking-tighter">Yearly <span className="text-white/20">Waste.</span></h1>
          </div>
          <div className="flex gap-4">
             <Link 
                to="/waste/monthly" 
                className="px-6 py-3 border border-white/5 bg-white/[0.02] text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-white/5 transition-all text-white/40"
             >
                Monthly Review
             </Link>
             <button className="px-6 py-3 border border-primary/20 bg-primary/5 text-[10px] font-black uppercase tracking-widest rounded-xl text-primary">
                Yearly Audit
             </button>
             <Link 
                to="/subscriptions/add" 
                className="px-6 py-3 border border-white/10 bg-white/5 text-[10px] font-black uppercase tracking-widest rounded-xl text-white hover:bg-white/10 transition-all flex items-center gap-2"
             >
                Manage Inventory
             </Link>
          </div>
        </header>

        <div className="grid grid-cols-12 gap-8">
            {/* Primary Analysis Column */}
            <div className="col-span-12 lg:col-span-8 space-y-10">
                
                {/* Hero Summary Card */}
                <section className="bg-gradient-to-br from-red-500/10 to-transparent border border-red-500/20 rounded-[3rem] p-12 relative overflow-hidden group">
                    <div className="relative z-10 flex justify-between items-start">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-red-500 font-black uppercase text-[10px] tracking-widest">
                                <ShieldAlert size={14} />
                                Yearly Waste Detected
                            </div>
                            <h2 className="text-6xl font-black italic tracking-tighter leading-none">
                                ₹{new Intl.NumberFormat('en-IN').format(annualWasteScore)} <span className="text-white/20">/Year</span>
                            </h2>
                            <p className="text-sm font-medium text-white/40 max-w-sm italic">
                                Total wasted money from unused subscriptions and expensive plans.
                            </p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 text-right backdrop-blur-xl">
                            <div className="text-[10px] font-black uppercase tracking-widest text-white/20 mb-1">3-Year Savings</div>
                            <div className="text-3xl font-black italic tracking-tighter text-primary">₹{new Intl.NumberFormat('en-IN').format(potentialRecovery)}</div>
                        </div>
                    </div>
                    {/* Decorative Elements */}
                    <div className="absolute -right-20 -bottom-20 w-[400px] h-[400px] bg-red-500/5 rounded-full blur-[100px]" />
                </section>

                {/* Active Subscriptions Protocol */}
                <section className="bg-[#0A0A0A] border border-white/5 rounded-[3rem] p-10 space-y-8 shadow-2xl relative">
                    <div className="flex justify-between items-end px-4">
                        <div className="space-y-1">
                            <h3 className="text-xl font-black italic tracking-tight uppercase">Your Subscriptions</h3>
                            <p className="text-[10px] uppercase font-black tracking-widest text-white/20">Tracked Subs</p>
                        </div>
                        <span className="text-[9px] font-mono text-white/20">{subscriptions.length} ACTIVE BILLS</span>
                    </div>

                    <div className="space-y-3">
                        {subscriptions.map((sub, idx) => (
                            <div key={idx} className="flex items-center justify-between p-6 bg-white/[0.02] border border-white/5 rounded-[2rem] hover:bg-white/[0.05] hover:border-white/10 transition-all group">
                                <div className="flex items-center gap-6">
                                    <div className="w-14 h-14 bg-black border border-white/10 rounded-2xl flex items-center justify-center p-3 shadow-2xl">
                                        {sub.logo ? (
                                            <img src={sub.logo} alt={sub.name} className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all opacity-40 group-hover:opacity-100" />
                                        ) : (
                                            sub.icon
                                        )}
                                    </div>
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-3">
                                            <h4 className="text-sm font-black italic">{sub.name}</h4>
                                            <span className="text-[9px] px-2 py-0.5 bg-white/5 text-white/40 rounded font-black uppercase tracking-tighter">{sub.type}</span>
                                        </div>
                                        <div className="flex items-center gap-4">
                                             <p className="text-[10px] font-medium text-white/40 uppercase tracking-widest">{sub.status}</p>
                                             <div className="w-1 h-1 bg-white/10 rounded-full" />
                                             <p className={`text-[10px] font-black uppercase tracking-widest ${sub.utilityColor}`}>{sub.utility}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-8">
                                    <div className="text-right space-y-1">
                                        <p className="text-lg font-black italic tracking-tighter">₹{new Intl.NumberFormat('en-IN').format(Math.round(sub.yearlyCost))} <span className="text-[10px] text-white/20 not-italic tracking-widest uppercase">/yr</span></p>
                                        <p className="text-[9px] font-black uppercase text-white/20 tracking-widest">Trajectory: {sub.risk}</p>
                                    </div>
                                    <button className="p-4 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all group-hover:scale-110">
                                        <ChevronRight size={16} className="text-white/40 group-hover:text-primary transition-colors" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Analytical Bento Grid */}
                <div className="grid grid-cols-2 gap-8">
                    {/* Cost Utility Matrix */}
                    <div className="bg-[#0A0A0A] border border-white/5 rounded-[3rem] p-10 space-y-8">
                        <div className="flex items-center gap-3 text-primary">
                            <Activity size={18} />
                            <h4 className="text-[10px] font-black uppercase tracking-[0.4em]">Usage Breakdown</h4>
                        </div>
                             {utilityData.map((item, i) => (
                                <div key={i} className="space-y-2">
                                    <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                                        <span className="text-white/40">{item.name}</span>
                                        <span className={item.textClass}>{item.match}% MATCH</span>
                                    </div>
                                    <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
                                        <div className={`h-full ${item.color} transition-all duration-1000`} style={{ width: `${item.match}%` }} />
                                    </div>
                                </div>
                             ))}
                    </div>

                    {/* AI Insights Promo */}
                    <div className="bg-primary/5 border border-primary/10 rounded-[3rem] p-10 flex flex-col justify-between group">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-primary">
                                <Zap size={18} fill="currentColor" />
                                <h4 className="text-[10px] font-black uppercase tracking-[0.4em]">Co-Pilot Insights</h4>
                            </div>
                            <p className="text-sm font-black italic tracking-tight leading-relaxed">
                                Cut ₹{new Intl.NumberFormat('en-IN').format(annualWasteScore * 0.2)} in waste per year by switching plans.
                            </p>
                        </div>
                        <Link to="/copilot" className="w-full flex items-center justify-center gap-2 py-4 bg-primary text-black text-[10px] font-black uppercase tracking-widest rounded-2xl hover:scale-105 transition-all shadow-xl shadow-primary/10">
                            Start Deep Audit <ArrowUpRight size={14} />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Right Panel: Intelligence Feed */}
            <div className="col-span-12 lg:col-span-4 space-y-8">
                <section className="bg-[#0A0A0A] border border-white/5 rounded-[3rem] p-8 space-y-8 divide-y divide-white/5 sticky top-10 shadow-2xl">
                    <div className="pb-8 space-y-2">
                        <div className="flex items-center gap-3 text-white/40">
                            <TrendingDown size={18} />
                            <h2 className="text-[10px] font-black uppercase tracking-[0.4em]">Action Plan</h2>
                        </div>
                        <h3 className="text-2xl font-black italic tracking-tighter uppercase text-white/80">Suggested Actions</h3>
                    </div>

                    <div className="space-y-6 pt-8">
                        {generatedInsights.map((node, n) => (
                           <div key={n} className="p-6 bg-white/[0.02] border border-white/5 rounded-[2rem] space-y-4 group cursor-pointer hover:bg-white/5 transition-all">
                              <div className="space-y-1">
                                <span className="text-[9px] font-black uppercase tracking-widest text-primary italic">{node.type}</span>
                                <h4 className="text-sm font-black italic group-hover:text-primary transition-colors">{node.title}</h4>
                              </div>
                              <p className="text-[10px] font-medium leading-relaxed text-white/40 uppercase tracking-widest">
                                {node.desc}
                              </p>
                              <div className="pt-2 flex items-center justify-between">
                                  <span className="text-[10px] font-black uppercase text-primary tracking-widest">{node.impact}</span>
                                  <ChevronRight size={14} className="text-white/20 group-hover:translate-x-1 transition-all" />
                              </div>
                           </div>
                        ))}
                    </div>

                    <div className="pt-8 space-y-4">
                        <div className="p-6 bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-[2rem] space-y-4">
                             <div className="flex items-center gap-2 text-primary font-black uppercase text-[9px] tracking-widest">
                                <AlertCircle size={10} />
                                Upload Statement
                             </div>
                             <p className="text-[10px] font-medium leading-relaxed italic text-white/40 uppercase tracking-widest">
                                Upload your bank statement to find hidden subscriptions.
                             </p>
                             <button className="w-full py-3 bg-white/5 text-white/80 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                                <FileText size={12} /> Upload Statement
                             </button>
                        </div>
                        
                        <button className="w-full flex items-center justify-center gap-2 py-4 text-white/20 text-[10px] font-black uppercase tracking-widest hover:text-white transition-colors">
                            <Download size={14} /> Export Waste Report (v1.0)
                        </button>
                    </div>
                </section>
            </div>
        </div>
      </main>
    </div>
  );
}
