import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { 
  Plus, 
  Trash2, 
  ChevronRight, 
  CreditCard, 
  ArrowLeft,
  Sparkles,
  Zap,
  Edit2,
  Check,
  Package,
  Activity
} from 'lucide-react';

export default function SubscriptionInput() {
  const navigate = useNavigate();
  const [subscriptions, setSubscriptions] = useState(() => {
    const saved = localStorage.getItem('finsight_subscriptions');
    return saved ? JSON.parse(saved) : [];
  });

  const [newName, setNewName] = useState('');
  const [newCost, setNewCost] = useState('');
  const [newCycle, setNewCycle] = useState('');
  const [newUsage, setNewUsage] = useState('');
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    localStorage.setItem('finsight_subscriptions', JSON.stringify(subscriptions));
  }, [subscriptions]);

  const addSubscription = () => {
    if (!newName || !newCost || !newCycle || !newUsage) return;
    
    if (editingId) {
      setSubscriptions(subscriptions.map(s => 
        s.id === editingId ? { ...s, name: newName, cost: parseFloat(newCost), cycle: newCycle, usage: newUsage } : s
      ));
      setEditingId(null);
    } else {
      const newEntry = {
        id: Date.now(),
        name: newName,
        cost: parseFloat(newCost),
        cycle: newCycle,
        usage: newUsage
      };
      setSubscriptions([...subscriptions, newEntry]);
    }
    
    setNewName('');
    setNewCost('');
    setNewCycle('');
    setNewUsage('');
  };

  const editSubscription = (sub) => {
    setEditingId(sub.id);
    setNewName(sub.name);
    setNewCost(sub.cost);
    setNewCycle(sub.cycle);
    setNewUsage(sub.usage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const removeSubscription = (id) => {
    setSubscriptions(subscriptions.filter(s => s.id !== id));
  };

  const formatINR = (val) => new Intl.NumberFormat('en-IN').format(val);

  return (
    <div className="min-h-screen bg-black text-white flex font-body selection:bg-primary/30">
      <Sidebar activePage="waste" />

      <main className="flex-1 ml-24 p-8 lg:p-12 space-y-12 pb-24 relative z-10 lg:pl-12">
        {/* Header Section */}
        <header className="flex justify-between items-end mb-8 border-b border-white/5 pb-8">
          <div className="space-y-2">
            <div className="flex items-center gap-3 text-primary uppercase text-[10px] font-black tracking-[0.4em]">
                <Package size={12} className="animate-pulse" />
                Track Waste
            </div>
            <h1 className="text-5xl lg:text-6xl font-black italic tracking-tighter">Recurring <span className="text-white/20">Subscriptions.</span></h1>
          </div>
          <div className="flex gap-4">
             <button 
                onClick={() => navigate('/waste/monthly')}
                className="px-6 py-3 border border-white/5 bg-white/[0.02] text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-white/5 transition-all text-white/40 flex items-center gap-2 group"
             >
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Dashboard
             </button>
             <button className="px-6 py-3 border border-primary/20 bg-primary/5 text-[10px] font-black uppercase tracking-widest rounded-xl text-primary flex items-center gap-2 hidden sm:flex">
                <Activity size={14} /> Your Subscriptions
             </button>
          </div>
        </header>

        <div className="grid grid-cols-12 gap-8 lg:gap-12">
            {/* Input Phase - Left Column */}
            <div className="col-span-12 lg:col-span-8 space-y-10">
                <section className="bg-[#0A0A0A] border border-white/5 rounded-[3rem] p-8 md:p-12 space-y-10 shadow-2xl relative overflow-hidden">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary border border-primary/20 shadow-[0_0_20px_rgba(16,185,129,0.1)]">
                            {editingId ? <Check size={24} /> : <Plus size={24} />}
                        </div>
                        <div>
                            <h3 className="text-2xl font-black italic tracking-tight uppercase">
                                {editingId ? 'Update Subscription' : 'Add New Subscription'}
                            </h3>
                            <p className="text-[10px] font-black uppercase tracking-widest text-white/20 italic mt-1">
                                Track another recurring payment
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
                        <div className="space-y-3">
                            <label className="text-[10px] font-black uppercase tracking-widest text-white/20 ml-2">Service Name</label>
                            <input 
                                value={newName}
                                onChange={(e) => setNewName(e.target.value)}
                                className="w-full bg-white/[0.02] border border-white/5 rounded-2xl px-6 py-5 text-base font-bold italic outline-none focus:border-primary/40 focus:bg-white/5 transition-all"
                                placeholder="e.g. Adobe Cloud"
                            />
                        </div>
                        <div className="space-y-3">
                            <label className="text-[10px] font-black uppercase tracking-widest text-white/20 ml-2">Cost (₹)</label>
                            <div className="relative">
                                <span className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20 font-bold italic">₹</span>
                                <input 
                                    type="number"
                                    value={newCost}
                                    onChange={(e) => setNewCost(e.target.value)}
                                    className="w-full bg-white/[0.02] border border-white/5 rounded-2xl px-6 py-5 text-base font-bold italic outline-none focus:border-primary/40 focus:bg-white/5 transition-all pl-10"
                                    placeholder="000"
                                />
                            </div>
                        </div>
                        <div className="space-y-3">
                            <label className="text-[10px] font-black uppercase tracking-widest text-white/20 ml-2">Cycle</label>
                            <select 
                                value={newCycle}
                                onChange={(e) => setNewCycle(e.target.value)}
                                className={`w-full bg-white/[0.02] border border-white/5 rounded-2xl px-6 py-5 text-base font-bold italic outline-none focus:border-primary/40 focus:bg-white/5 transition-all appearance-none cursor-pointer ${!newCycle ? 'text-white/40' : ''}`}
                            >
                                <option value="" disabled className="bg-[#0A0A0A] text-white/40">Select Cycle</option>
                                <option className="bg-[#0A0A0A] text-white" value="Monthly">Monthly</option>
                                <option className="bg-[#0A0A0A] text-white" value="Yearly">Yearly</option>
                            </select>
                        </div>
                        <div className="space-y-3">
                            <label className="text-[10px] font-black uppercase tracking-widest text-white/20 ml-2">Usage Tracker</label>
                            <select 
                                value={newUsage}
                                onChange={(e) => setNewUsage(e.target.value)}
                                className={`w-full bg-white/[0.02] border border-white/5 rounded-2xl px-6 py-5 text-base font-bold italic outline-none focus:border-primary/40 focus:bg-white/5 transition-all appearance-none cursor-pointer ${!newUsage ? 'text-white/40' : 'text-primary'}`}
                            >
                                <option value="" disabled className="bg-[#0A0A0A] text-white/40">Select Usage</option>
                                <option className="bg-[#0A0A0A] text-white" value="Daily">Daily Use</option>
                                <option className="bg-[#0A0A0A] text-white" value="Weekly">Weekly Use</option>
                                <option className="bg-[#0A0A0A] text-white" value="Rarely">Rarely Use</option>
                                <option className="bg-[#0A0A0A] text-white" value="Never">Never Use</option>
                            </select>
                        </div>
                    </div>
                    
                    <button 
                        onClick={addSubscription}
                        disabled={!newName || !newCost || !newCycle || !newUsage}
                        className={`w-full h-[60px] md:h-[68px] mt-6 rounded-2xl flex items-center justify-center font-black text-xs md:text-sm uppercase tracking-[0.4em] hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-20 disabled:grayscale ${editingId ? 'bg-white text-black shadow-[0_10px_30px_rgba(255,255,255,0.2)]' : 'bg-primary text-black shadow-[0_10px_30px_rgba(16,185,129,0.2)]'}`}
                    >
                        {editingId ? 'Confirm Update' : 'Add Subscription'}
                    </button>
                    
                     <div className="hidden md:flex mt-4 border-t border-white/5 pt-8 items-center justify-between">
                         <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-white/20">
                             <Zap size={14} className="text-primary hidden md:block" />
                             See how much you can save
                         </div>
                         <button 
                            onClick={() => navigate('/waste/monthly')}
                            disabled={subscriptions.length === 0}
                            className="group relative px-8 py-4 bg-white/5 text-white border border-white/10 rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] transition-all hover:bg-white hover:text-black hover:border-transparent disabled:opacity-20"
                        >
                            <span className="flex items-center justify-center gap-2">
                                Find My Waste <ChevronRight size={14}/>
                            </span>
                        </button>
                    </div>
                </section>
                
                {/* Mobile Analyze Trigger Box */}
                <div className="flex md:hidden w-full">
                    <button 
                         onClick={() => navigate('/waste/monthly')}
                         disabled={subscriptions.length === 0}
                         className="w-full relative px-8 py-5 bg-white/5 text-white border border-white/10 rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] transition-all hover:bg-white hover:text-black hover:border-transparent disabled:opacity-20"
                     >
                         <span className="flex items-center justify-center gap-2">
                             Find My Waste <ChevronRight size={14}/>
                         </span>
                     </button>
                </div>
            </div>

            {/* List Phase - Right Column */}
            <div className="col-span-12 lg:col-span-4 space-y-8">
                <section className="bg-[#0A0A0A] border border-white/5 rounded-[3rem] p-8 space-y-8 lg:sticky lg:top-10 shadow-2xl">
                    <div className="space-y-4 pb-6 border-b border-white/5">
                        <div className="flex justify-between items-center">
                            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary italic flex items-center gap-2">
                                <Sparkles size={12} />
                                Active Subs
                            </h2>
                            <span className="text-[9px] font-mono font-bold text-white/40 bg-white/5 px-2 py-1 rounded">
                                {subscriptions.length} SUBS
                            </span>
                        </div>
                        <h3 className="text-2xl font-black italic tracking-tighter uppercase text-white/80">
                            Tracked Items.
                        </h3>
                    </div>

                    <div className="grid gap-4 max-h-[600px] overflow-y-auto pr-2 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-track]:bg-transparent">
                        {subscriptions.length === 0 ? (
                          <div className="p-8 border border-dashed border-white/5 rounded-[2rem] text-center text-white/20 text-[10px] font-bold uppercase tracking-widest italic my-4">
                            No active subscriptions detected.<br/>Add a subscription to begin tracking.
                          </div>
                        ) : (
                          subscriptions.map((sub) => (
                            <div key={sub.id} className="group bg-white/[0.02] border border-white/5 p-5 rounded-[1.5rem] hover:border-primary/20 transition-all hover:bg-white/[0.04]">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center border border-white/5 text-white/40 group-hover:text-primary transition-colors">
                                            <CreditCard size={18} />
                                        </div>
                                        <div className="space-y-0.5">
                                            <h3 className="text-sm font-black italic tracking-tight uppercase">{sub.name}</h3>
                                            <div className="flex items-center gap-2">
                                                <span className="text-[8px] uppercase font-black tracking-[0.2em] text-white/20 border border-white/5 px-1.5 py-0.5 rounded">
                                                    {sub.cycle}
                                                </span>
                                                {sub.usage && (
                                                   <span className={`text-[8px] uppercase font-black tracking-[0.2em] italic ${sub.usage.includes('Rare') || sub.usage.includes('Never') ? 'text-red-500' : 'text-primary'}`}>
                                                      {sub.usage}
                                                   </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-base font-black italic tracking-tighter text-white/90">₹{formatINR(sub.cost)}</div>
                                    </div>
                                </div>
                                
                                <div className="flex items-center gap-2 pt-4 border-t border-white/5">
                                    <button 
                                        onClick={() => editSubscription(sub)}
                                        className="flex-1 flex justify-center items-center gap-2 py-2 bg-white/5 text-[9px] font-black uppercase tracking-widest text-white/40 hover:text-white hover:bg-white/10 rounded-xl transition-all"
                                    >
                                        <Edit2 size={12} /> Edit
                                    </button>
                                    <button 
                                        onClick={() => removeSubscription(sub.id)}
                                        className="flex-1 flex justify-center items-center gap-2 py-2 bg-white/5 text-[9px] font-black uppercase tracking-widest text-white/40 hover:text-red-500 hover:bg-red-500/10 rounded-xl transition-all"
                                    >
                                        <Trash2 size={12} /> Remove
                                    </button>
                                </div>
                            </div>
                          ))
                        )}
                    </div>
                </section>
            </div>
            
        </div>
      </main>
    </div>
  );
}

