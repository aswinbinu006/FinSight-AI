import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { Brain, Sparkles, Send, MoreVertical, ShieldCheck, Zap, TrendingUp, AlertCircle, Search } from 'lucide-react';
import { motion as Motion } from 'framer-motion';

export default function CopilotDashboard() {
  const [messages, setMessages] = useState([
    { type: 'bot', text: "Hello! I've analyzed your spending over the last 30 days. Your wealth velocity has slowed by 14% due to subscription bloat.", time: '10:04 AM' },
    { type: 'user', text: "How much can I save if I cancel everything except internet?", time: '10:05 AM' },
    { type: 'bot', text: "Total recovery would be ₹2,480/month. Over a year, that's nearly ₹30,000—enough to fully fund your emergency deposit for Q3.", time: '10:05 AM' }
  ]);

  return (
    <div className="min-h-screen bg-black text-white flex font-body selection:bg-primary/30">
      <Sidebar activePage="copilot" />

      <main className="flex-1 ml-24 p-10 max-w-7xl mx-auto space-y-12 pb-24">
        {/* Header */}
        <header className="flex justify-between items-end mb-8 border-b border-white/5 pb-12">
            <div className="space-y-2">
                <div className="flex items-center gap-3 text-primary uppercase text-[10px] font-black tracking-[0.4em]">
                    <ShieldCheck size={12} className="animate-pulse" />
                    Neural Audit Active
                </div>
                <h1 className="text-5xl font-black italic tracking-tighter">AI <span className="text-white/20">Co-Pilot.</span></h1>
            </div>
            <div className="text-right">
                 <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20">System Status</div>
                 <div className="text-xs font-mono text-primary">THINKING_ENGINE-V3</div>
            </div>
        </header>

        <div className="grid grid-cols-12 gap-12">
            {/* Analytics Sidebar for Context */}
            <div className="col-span-12 lg:col-span-8 space-y-10">
                {/* Critical Diagnosis Card */}
                <section className="bg-[#0A0A0A] border border-primary/20 rounded-[3rem] p-12 relative overflow-hidden group shadow-2xl">
                    <div className="relative z-10 space-y-6">
                        <div className="flex items-center gap-2 text-primary">
                            <Zap size={16} fill="currentColor" />
                            <span className="text-[10px] font-black uppercase tracking-[0.4em]">Critical Directive</span>
                        </div>
                        <h2 className="text-4xl font-black italic tracking-tighter leading-tight">
                            Subscription waste is directly killing your <span className="text-primary italic">savings goals.</span>
                        </h2>
                        <p className="text-white/40 text-sm max-w-xl font-medium leading-relaxed uppercase tracking-widest">
                            Executing recovery protocol on 4 flagged nodes will increase liquidity by <span className="text-white font-black italic">₹1,945/month</span>.
                        </p>
                    </div>
                    <div className="absolute -right-20 -top-20 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px]" />
                </section>

                {/* Priority Intel Grid */}
                <div className="grid grid-cols-3 gap-6">
                    {[
                        { label: 'Health Score', val: '58', trend: '-4 pts', color: 'text-red-500', icon: AlertCircle },
                        { label: 'Waste Node', val: '₹1,945', trend: 'Active', color: 'text-white', icon: Search },
                        { label: 'Goal Velocity', val: '34%', trend: '+2.1%', color: 'text-primary', icon: TrendingUp }
                    ].map((stat, i) => (
                        <div key={i} className="bg-[#0A0A0A] border border-white/5 p-8 rounded-[2rem] space-y-3 hover:border-white/10 transition-all group">
                            <div className="flex justify-between items-center">
                                <stat.icon size={16} className="text-white/20 group-hover:text-primary transition-colors" />
                                <span className={`text-[9px] font-black uppercase tracking-tighter ${stat.color}`}>{stat.trend}</span>
                            </div>
                            <div className="space-y-1">
                                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-white/20">{stat.label}</p>
                                <h3 className="text-2xl font-black italic">{stat.val}</h3>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Actionable Insights */}
                <section className="space-y-6">
                    <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 italic">Optimization Nodes</h3>
                    <div className="grid grid-cols-2 gap-8">
                        {[
                            { title: 'Cancel Spotify + Gym', impact: '₹1,619/mo', effect: '34% → 61%', type: 'Waste' },
                            { title: 'Rebalance Assets', impact: '-12% Volatility', effect: '+8 Health pts', type: 'Health' }
                        ].map((action, i) => (
                            <div key={i} className="bg-[#0A0A0A] border border-white/5 p-10 rounded-[2.5rem] flex flex-col justify-between group hover:border-primary/20 transition-all">
                                <div className="space-y-4">
                                    <span className="text-[9px] font-black uppercase tracking-widest text-primary/40 group-hover:text-primary transition-colors">{action.type} Protocol</span>
                                    <h4 className="text-xl font-black italic tracking-tight">{action.title}</h4>
                                    <div className="space-y-2 pt-4">
                                        <div className="flex justify-between text-[10px] font-black uppercase text-white/20 tracking-tighter">
                                            <span>Projected Impact</span>
                                            <span className="text-white">{action.impact}</span>
                                        </div>
                                        <div className="flex justify-between text-[10px] font-black uppercase text-white/20 tracking-tighter">
                                            <span>Goal Shift</span>
                                            <span className="text-primary">{action.effect}</span>
                                        </div>
                                    </div>
                                </div>
                                <button className="mt-8 py-4 bg-white/5 hover:bg-primary hover:text-black border border-white/5 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all">Execute via Co-Pilot</button>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            {/* AI Co-Pilot Chat Interface */}
            <div className="col-span-12 lg:col-span-4 sticky top-10 self-start h-[calc(100vh-10rem)]">
                <div className="bg-[#0A0A0A] border border-white/10 rounded-[3rem] h-full flex flex-col overflow-hidden shadow-2xl">
                    {/* Chat Header */}
                    <div className="p-8 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center border border-primary/30">
                                <Brain className="text-primary" size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-black italic tracking-tighter">Neural Link</h3>
                                <span className="text-[10px] text-primary font-black flex items-center gap-2 tracking-widest">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                                    ACTIVE ANALYST
                                </span>
                            </div>
                        </div>
                        <button className="text-white/20 hover:text-white transition-all"><MoreVertical size={20} /></button>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 overflow-y-auto p-8 space-y-8 no-scrollbar">
                        {messages.map((msg, i) => (
                            <Motion.div 
                              key={i} 
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className={`flex flex-col gap-2 ${msg.type === 'user' ? 'items-end' : 'items-start'}`}
                            >
                                <div className={`p-6 rounded-[2rem] max-w-[90%] text-sm font-medium leading-relaxed shadow-lg ${
                                    msg.type === 'user' 
                                    ? 'bg-primary text-black rounded-tr-none' 
                                    : 'bg-white/5 text-white/80 rounded-tl-none border border-white/5'
                                }`}>
                                    {msg.text}
                                </div>
                                <span className={`text-[9px] font-black uppercase text-white/20 tracking-tighter ${msg.type === 'user' ? 'mr-2' : 'ml-2'}`}>
                                    {msg.type === 'user' ? 'You' : 'Co-Pilot'} • {msg.time}
                                </span>
                            </Motion.div>
                        ))}
                    </div>

                    {/* Chat Input */}
                    <div className="p-8 border-t border-white/5 bg-white/[0.01]">
                        <div className="relative group">
                            <input 
                              type="text" 
                              placeholder="Ask anything about your finances..." 
                              className="w-full bg-white/5 border border-white/5 rounded-[2rem] py-5 pl-8 pr-16 text-sm font-medium focus:outline-none focus:border-primary/40 focus:bg-white/10 transition-all placeholder:text-white/10"
                            />
                            <button className="absolute right-3 top-1/2 -translate-y-1/2 w-12 h-12 bg-primary text-black rounded-full flex items-center justify-center hover:scale-105 transition-all shadow-xl shadow-primary/20 group-hover:shadow-primary/40 active:scale-95">
                                <Send size={18} />
                            </button>
                        </div>
                        <div className="mt-6 flex flex-wrap gap-3">
                            {["Analyze Waste", "Simulate Savings"].map((btn, i) => (
                                <button key={i} className="text-[9px] font-black uppercase tracking-widest text-white/20 bg-white/5 px-4 py-2 rounded-xl hover:bg-white/10 hover:text-white transition-all border border-white/5 italic">
                                    "{btn}"
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </main>
    </div>
  );
}
