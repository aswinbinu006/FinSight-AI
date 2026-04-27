import React, { useState, useEffect, useRef } from 'react';
import Sidebar from '../components/Sidebar';
import { Brain, Sparkles, Send, MoreVertical, ShieldCheck, Zap, TrendingUp, AlertCircle, Search, Loader2 } from 'lucide-react';
import { motion as Motion } from 'framer-motion';
import { formatINR } from '../utils';
import { useUserData } from '../context/UserDataContext';

export default function CopilotDashboard() {
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const { userData } = useUserData();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Derive metrics from centralized context (Firestore-backed)
  const metrics = {
    healthScore: userData.health.score || 0,
    targetAmount: userData.goal.target || 0,
    monthlySavings: userData.goal.monthlySavings || 0,
    wasteAmount: userData.waste.totalWaste || 0,
    income: userData.financial.income || 0,
    behavioralCompleted: userData.behavioral.completed,
    goalActive: userData.goal.active,
  };

  const [messages, setMessages] = useState([
    { type: 'bot', text: "Hello! I am your FinSight Co-Pilot. I have full access to your health, goals, and waste models. Ask me anything about your current financial trajectory, and I'll explain it in plain English.", time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) }
  ]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (overrideText = null) => {
      const textToProcess = overrideText || inputText;
      if (!textToProcess.trim()) return;

      const newMsg = { type: 'user', text: textToProcess, time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) };
      setMessages(prev => [...prev, newMsg]);
      setInputText("");
      setIsTyping(true);

      // Semantic Heuristic Engine (Dynamic logic)
      setTimeout(() => {
          let replyText = "I see. Based on your current profile models, taking action on this will stabilize your long-term capital trajectory.";
          const lowerTxt = textToProcess.toLowerCase();

          if (lowerTxt.includes("goal") || lowerTxt.includes("target")) {
              if (metrics.targetAmount > 0) {
                  replyText = `Your current primary goal is set to ₹${formatINR(metrics.targetAmount)}. With your current monthly saving of ₹${formatINR(metrics.monthlySavings)}, the AI model calculates you need consistency to hit the deadline. Would you like me to simulate increasing that monthly saving by 10%?`;
              } else {
                  replyText = "You haven't initialized a Goal trajectory yet. You can build a saving goal in the Goals module, and I'll analyze the exact math needed to get you there.";
              }
          } else if (lowerTxt.includes("health") || lowerTxt.includes("score")) {
              if (metrics.healthScore > 75) {
                  replyText = `The Health model gave you a score of ${metrics.healthScore}/100. That is excellent. It means your behavioral spending patterns and emergency safety nets are highly optimized against sudden market shocks.`;
              } else {
                  replyText = `Your current health score from the core model is ${metrics.healthScore}/100. The primary reason for this percentage is high outgoing liquidity compared to asset accumulation. We need to cut unnecessary expenses to raise it.`;
              }
          } else if (lowerTxt.includes("waste") || lowerTxt.includes("cut") || lowerTxt.includes("expense") || lowerTxt.includes("subscription")) {
              if (metrics.wasteAmount > 0) {
                  replyText = `The Waste model has identified ₹${formatINR(metrics.wasteAmount)} in annual leakage across your subscriptions. By cutting these, that excess capital doesn't disappear—it gets automatically rerouted directly into funding your savings goal.`;
              } else {
                  replyText = `I don't see any critical subscription waste in your current profile. Your outgoing commitments look lean and optimized.`;
              }
          }

          setMessages(prev => [...prev, { type: 'bot', text: replyText, time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) }]);
          setIsTyping(false);
      }, 1500);
  };


  return (
    <div className="min-h-screen bg-black text-white flex font-body selection:bg-primary/30">
      <Sidebar activePage="copilot" />

      <main className="flex-1 ml-24 p-6 lg:p-10 space-y-12 pb-24">
        {/* Header */}
        <header className="flex justify-between items-end border-b border-white/5 pb-10">
            <div className="space-y-2">
                <div className="flex items-center gap-3 text-primary uppercase text-[10px] font-black tracking-[0.4em]">
                    <ShieldCheck size={12} className="animate-pulse" />
                    Neural Audit Active
                </div>
                <h1 className="text-4xl lg:text-5xl font-black italic tracking-tighter">AI <span className="text-white/20">Co-Pilot.</span></h1>
            </div>
            <div className="text-right hidden sm:block">
                 <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20">System Status</div>
                 <div className="text-xs font-mono text-primary">CORE-ANALYS-V3</div>
            </div>
        </header>

        <div className="grid grid-cols-12 gap-8 lg:gap-12">
            {/* Analytics Sidebar for Context */}
            <div className="col-span-12 lg:col-span-8 space-y-10">
                {userData.waste?.subscriptions?.some(s => s.isWaste) ? (
                <section className="bg-[#0A0A0A] border border-primary/20 rounded-[2.5rem] p-8 lg:p-12 relative overflow-hidden group shadow-2xl">
                    <div className="relative z-10 space-y-6">
                        <div className="flex items-center gap-2 text-primary">
                            <Zap size={16} fill="currentColor" />
                            <span className="text-[10px] font-black uppercase tracking-[0.4em]">Critical Directive</span>
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-black italic tracking-tighter leading-tight">
                            Subscription waste is directly hurting your <span className="text-primary italic">savings goals.</span>
                        </h2>
                        <p className="text-white/40 text-[11px] lg:text-xs max-w-xl font-medium leading-relaxed uppercase tracking-widest">
                            Executing recovery protocol on flagged nodes will increase liquidity by <span className="text-white font-black italic">₹{formatINR(userData.waste.totalWaste)}/month</span>.
                        </p>
                    </div>
                    <div className="absolute -right-20 -top-20 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px]" />
                </section>
                ) : (
                  <section className="bg-[#0A0A0A] border border-white/5 rounded-[2.5rem] p-8 lg:p-12 relative overflow-hidden group">
                        <div className="relative z-10 space-y-6">
                            <div className="flex items-center gap-2 text-white/40">
                                <Activity size={16} />
                                <span className="text-[10px] font-black uppercase tracking-[0.4em]">Trajectory Optimized</span>
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-black italic tracking-tighter leading-tight">
                                {metrics.goalActive ? `Your ₹${formatINR(metrics.targetAmount)} goal is on a high-velocity path.` : "Your financial trajectory is balanced and ready for new targets."}
                            </h2>
                            <p className="text-white/40 text-[11px] lg:text-xs max-w-xl font-medium leading-relaxed uppercase tracking-widest">
                                No critical leakage detected. Maintaining current savings rate will ensure completion according to protocol.
                            </p>
                        </div>
                    </section>
                )}

                {/* Priority Intel Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {[
                        { label: 'Health Score', val: metrics.healthScore || 'N/A', trend: 'Active', color: metrics.healthScore > 75 ? 'text-primary' : 'text-amber-500', icon: AlertCircle },
                        { label: 'Goal Target', val: metrics.targetAmount ? `₹${formatINR(metrics.targetAmount)}` : 'None', trend: 'Target', color: 'text-white', icon: TrendingUp },
                        { label: 'Monthly Savings', val: metrics.monthlySavings ? `₹${formatINR(metrics.monthlySavings)}` : '₹0', trend: 'Flow', color: 'text-primary', icon: Search }
                    ].map((stat, i) => (
                        <div key={i} className="bg-[#0A0A0A] border border-white/5 p-6 lg:p-8 rounded-2xl space-y-3 hover:border-white/10 transition-all group">
                            <div className="flex justify-between items-center">
                                <stat.icon size={16} className="text-white/20 group-hover:text-primary transition-colors" />
                                <span className={`text-[9px] font-black uppercase tracking-tighter ${stat.color}`}>{stat.trend}</span>
                            </div>
                            <div className="space-y-1">
                                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-white/20">{stat.label}</p>
                                <h3 className="text-xl lg:text-2xl font-black italic">{stat.val}</h3>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Actionable Insights */}
                <section className="space-y-6">
                    <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 italic">Action Directives</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                        {[
                            { title: 'Cancel Flagged Subscriptions', impact: 'Boosts Liquidity', effect: 'Accelerates Trajectory', type: 'Waste' },
                            { title: 'Increase Savings Ratio', impact: '+12% Stability', effect: '+8 Health pts', type: 'Health' }
                        ].map((action, i) => (
                            <div key={i} className="bg-[#0A0A0A] border border-white/5 p-8 lg:p-10 rounded-[2rem] flex flex-col justify-between group hover:border-primary/20 transition-all shadow-xl">
                                <div className="space-y-4">
                                    <span className="text-[9px] font-black uppercase tracking-widest text-primary/40 group-hover:text-primary transition-colors">{action.type} Directive</span>
                                    <h4 className="text-xl font-black italic tracking-tight">{action.title}</h4>
                                    <div className="space-y-2 pt-4">
                                        <div className="flex justify-between text-[10px] font-black uppercase text-white/20 tracking-tighter">
                                            <span>Projected Impact</span>
                                            <span className="text-white">{action.impact}</span>
                                        </div>
                                        <div className="flex justify-between text-[10px] font-black uppercase text-white/20 tracking-tighter">
                                            <span>Result</span>
                                            <span className="text-primary">{action.effect}</span>
                                        </div>
                                    </div>
                                </div>
                                <button className="mt-8 py-4 bg-white/5 hover:bg-primary hover:text-black border border-white/5 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all">Analyze via Co-Pilot</button>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            {/* AI Co-Pilot Chat Interface */}
            <div className="col-span-12 lg:col-span-4 sticky top-10 self-start h-[calc(100vh-10rem)]">
                <div className="bg-[#0A0A0A] border border-white/10 rounded-[2.5rem] h-full flex flex-col overflow-hidden shadow-2xl">
                    {/* Chat Header */}
                    <div className="p-6 lg:p-8 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-primary/20 rounded-2xl flex items-center justify-center border border-primary/30">
                                <Brain className="text-primary" size={20} />
                            </div>
                            <div>
                                <h3 className="text-base lg:text-lg font-black italic tracking-tighter">Neural Link</h3>
                                <span className="text-[9px] text-primary font-black flex items-center gap-2 tracking-widest">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                                    ACTIVE
                                </span>
                            </div>
                        </div>
                        <button className="text-white/20 hover:text-white transition-all"><MoreVertical size={20} /></button>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 overflow-y-auto p-6 lg:p-8 space-y-8 no-scrollbar">
                        {messages.map((msg, i) => (
                            <Motion.div 
                              key={i} 
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className={`flex flex-col gap-2 ${msg.type === 'user' ? 'items-end' : 'items-start'}`}
                            >
                                <div className={`p-5 rounded-[1.5rem] max-w-[90%] text-xs font-medium leading-relaxed shadow-lg ${
                                    msg.type === 'user' 
                                    ? 'bg-primary text-black rounded-tr-none' 
                                    : 'bg-white/5 text-white/80 rounded-tl-none border border-white/5'
                                }`}>
                                    {msg.text}
                                </div>
                                <span className={`text-[9px] font-black uppercase tracking-tighter ${msg.type === 'user' ? 'mr-2 text-primary/60' : 'ml-2 text-white/20'}`}>
                                    {msg.type === 'user' ? 'You' : 'Co-Pilot Engine'} • {msg.time}
                                </span>
                            </Motion.div>
                        ))}
                        {isTyping && (
                             <Motion.div 
                               initial={{ opacity: 0, y: 10 }}
                               animate={{ opacity: 1, y: 0 }}
                               className="flex flex-col gap-2 items-start"
                             >
                                 <div className="p-4 rounded-[1.5rem] bg-white/5 rounded-tl-none border border-white/5 flex items-center gap-3 w-32">
                                     <Loader2 className="animate-spin text-primary w-3 h-3" />
                                     <span className="text-[9px] font-black uppercase tracking-widest text-white/40">Thinking</span>
                                 </div>
                             </Motion.div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Chat Input */}
                    <div className="p-6 lg:p-8 border-t border-white/5 bg-white/[0.01]">
                        <div className="relative group">
                            <input 
                              type="text" 
                              value={inputText}
                              onChange={(e) => setInputText(e.target.value)}
                              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                              placeholder="Ask anything..." 
                              className="w-full bg-white/5 border border-white/5 rounded-2xl py-4 pl-6 pr-14 text-xs font-medium focus:outline-none focus:border-primary/40 focus:bg-white/10 transition-all placeholder:text-white/10"
                            />
                            <button 
                              onClick={() => handleSend()}
                              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-primary text-black rounded-xl flex items-center justify-center hover:scale-105 transition-all shadow-xl shadow-primary/20 group-hover:shadow-primary/40 active:scale-95">
                                <Send size={16} />
                            </button>
                        </div>
                        <div className="mt-4 flex flex-wrap gap-2">
                            {["Explain Health Score", "Why at risk?", "Cut expenses?"].map((btn, i) => (
                                <button 
                                  key={i} 
                                  onClick={() => handleSend(btn)}
                                  className="text-[8px] font-black uppercase tracking-widest text-white/40 bg-white/5 px-3 py-2 rounded-lg border border-white/5 hover:border-primary/30 hover:text-primary transition-all cursor-pointer">
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
