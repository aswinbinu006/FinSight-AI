import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LayoutGrid, HeartPulse, Trash2, Target, Brain, Settings, LogOut, Search, Bell, Loader2 } from 'lucide-react';
import api from '../api';

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    health: '94.2',
    goals: '88%',
    waste: '$1,240'
  });

  useEffect(() => {
    const initDashboard = async () => {
      try {
        const userData = await api.authenticatedFetch('/user/me');
        setUser(userData);
        
        // In a real app, we would fetch historical scores here
        // For now we keep the high-fidelity placeholders but verify the connection
        console.log("Authenticated as:", userData.username);
        
      } catch (err) {
        console.error("Session invalid", err);
        navigate('/login');
      } finally {
        setLoading(false);
      }
    };

    initDashboard();
  }, [navigate]);

  const handleLogout = () => {
    api.logout();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <Loader2 className="text-[#10B981] animate-spin" size={48} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#000000] text-white flex font-sans">
      {/* Sidebar */}
      <aside className="fixed left-6 top-6 bottom-6 w-24 rounded-[3rem] bg-[#0A0A0A] border border-white/[0.08] flex flex-col items-center py-10 justify-between z-50">
        <div className="flex flex-col items-center gap-12 w-full">
          <Link to="/" className="w-12 h-12 rounded-2xl bg-[#FFFFFF] flex items-center justify-center text-black shadow-lg shadow-white/5">
            <span className="text-[12px] font-black tracking-tighter">F</span>
          </Link>
          <nav className="flex flex-col gap-8 items-center w-full">
            <Link to="/dashboard" className="text-[#10B981]"><LayoutGrid size={24} /></Link>
            <Link to="/health" className="text-white/40 hover:text-white transition-colors"><HeartPulse size={24} /></Link>
            <Link to="/waste" className="text-white/40 hover:text-white transition-colors"><Trash2 size={24} /></Link>
            <Link to="/goals" className="text-white/40 hover:text-white transition-colors"><Target size={24} /></Link>
            <Link to="/copilot" className="text-white/40 hover:text-white transition-colors"><Brain size={24} /></Link>
            <Link to="/settings" className="text-white/40 hover:text-white transition-colors"><Settings size={24} /></Link>
          </nav>
        </div>
        <button onClick={handleLogout} className="text-white/20 hover:text-red-500 transition-colors">
          <LogOut size={20} />
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-32 p-10">
        <header className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-3xl font-black italic tracking-tight uppercase">Control Center</h1>
            <p className="text-[10px] font-black text-[#10B981] uppercase tracking-[0.4em] mt-1">
              Active Session: {user?.username || 'Protocol Alpha'}
            </p>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
              <input className="bg-white/5 border border-white/10 rounded-2xl pl-12 pr-6 py-3 w-64 outline-none focus:border-[#10B981]/50 transition-all font-medium text-sm" placeholder="Search systems..." />
            </div>
            <div className="flex gap-4">
              <button className="w-11 h-11 rounded-2xl bg-white/5 flex items-center justify-center text-white/40 hover:text-white transition-colors"><Bell size={20} /></button>
              <div className="w-11 h-11 rounded-2xl border-2 border-[#10B981]/30 overflow-hidden bg-[#0A0A0A] flex items-center justify-center">
                <span className="text-[10px] font-black uppercase">{user?.username?.[0] || 'A'}</span>
              </div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-8 space-y-8">
            <div className="grid grid-cols-3 gap-6">
              {[
                { label: 'Health Score', val: stats.health, color: '#10B981', trend: '+2.4%' },
                { label: 'Goal Status', val: stats.goals, color: '#6366F1', sub: 'On Track' },
                { label: 'Waste Recovery', val: stats.waste, color: '#EF4444', sub: 'Leakage Found' }
              ].map((card, i) => (
                <div key={i} className="bg-[#0A0A0A] p-7 rounded-[2.5rem] border border-white/5 shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-1 h-full opacity-50 group-hover:opacity-100 transition-opacity" style={{backgroundColor: card.color}} />
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 mb-5">{card.label}</p>
                  <div className="text-4xl font-black italic tracking-tighter mb-2">{card.val}</div>
                  <div className="text-[10px] font-bold opacity-60" style={{color: card.color}}>{card.trend || card.sub}</div>
                </div>
              ))}
            </div>

            <div className="bg-[#0A0A0A] p-10 rounded-[4rem] border border-white/5 shadow-2xl">
              <div className="flex justify-between items-end mb-10">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight mb-1 uppercase italic">Intelligence Feed</h2>
                  <p className="text-xs text-white/30 uppercase tracking-[0.2em] font-bold">Real-time Node Telemetry</p>
                </div>
                <div className="flex gap-2 p-1 bg-white/5 rounded-xl">
                  <button className="px-5 py-2 bg-white/10 rounded-lg text-[10px] font-black uppercase">Month</button>
                  <button className="px-5 py-2 text-white/30 hover:text-white rounded-lg text-[10px] font-black uppercase transition-colors">Year</button>
                </div>
              </div>
              <div className="h-64 flex items-end gap-3 px-2 border-b border-white/5 pb-10">
                {[40, 55, 48, 65, 72, 85, 60, 50, 45, 55].map((h, i) => (
                  <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 1, delay: i * 0.05 }}
                    key={i} 
                    className={`flex-1 rounded-t-xl transition-all duration-500 ${i === 5 ? 'bg-[#10B981] shadow-[0_0_30px_rgba(16,185,129,0.3)]' : 'bg-white/5 hover:bg-white/10'}`} 
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="col-span-4 flex flex-col gap-8">
            <div className="bg-[#0A0A0A] p-8 rounded-[3.5rem] border border-white/5 shadow-2xl flex-1">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 rounded-2xl bg-[#10B981]/10 flex items-center justify-center text-[#10B981]">
                  <Brain size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold italic uppercase">AI Synthesis</h3>
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20">Active Node Audit</p>
                </div>
              </div>
              <div className="space-y-6">
                {[
                  { tag: 'Anomaly Detected', msg: 'Subscription drift identified in Node 04.', color: '#EF4444' },
                  { tag: 'Optimization', msg: 'Yield Max Vault offering 5.2% APY.', color: '#10B981' },
                  { tag: 'Scheduled Review', msg: 'Quarterly goals are 92% complete.', color: '#6366F1' }
                ].map((item, i) => (
                  <div key={i} className="bg-white/[0.03] p-6 rounded-3xl border border-white/5 hover:border-white/10 transition-colors group">
                    <span className="text-[9px] font-black uppercase tracking-[0.4em] mb-2 block" style={{color: item.color}}>{item.tag}</span>
                    <p className="text-sm font-medium text-white/80 leading-relaxed">{item.msg}</p>
                  </div>
                ))}
              </div>
              <button className="w-full mt-10 py-5 rounded-2xl bg-white text-black text-[11px] font-black uppercase tracking-[0.3em] shadow-xl hover:scale-[1.02] active:scale-95 transition-all">
                Ask Co-Pilot
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
