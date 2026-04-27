import React from 'react';
import Sidebar from '../components/Sidebar';
import { 
  Bell, 
  Trash2, 
  ChevronRight, 
  ShieldAlert, 
  Zap, 
  Activity, 
  Fingerprint, 
  Clock,
  X,
  History,
  TrendingDown
} from 'lucide-react';

export default function Notifications() {
  const alerts = [];

  return (
    <div className="min-h-screen bg-black text-white flex font-body selection:bg-primary/30">
      <Sidebar activePage="notifications" />

      <main className="flex-1 ml-24 p-10 space-y-12 pb-24">
        {/* Header Section */}
        <header className="flex justify-between items-end mb-8 border-b border-white/5 pb-12">
          <div className="space-y-2">
            <div className="flex items-center gap-3 text-white/40 uppercase text-[10px] font-black tracking-[0.4em]">
                <Bell size={12} />
                Intelligence Feed
            </div>
            <h1 className="text-5xl font-black italic tracking-tighter">Alert <span className="text-white/20">Protocol.</span></h1>
          </div>
          <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-red-500 hover:text-white transition-colors border border-red-500/20 px-6 py-3 rounded-xl bg-red-500/5 hover:bg-red-500">
             <Trash2 size={12} /> Clear Operational Cache
          </button>
        </header>

        <div className="space-y-4">
             {alerts.length > 0 ? alerts.map((alert) => (
                <article 
                    key={alert.id} 
                    className={`bg-[#0A0A0A] border border-white/5 rounded-[2.5rem] p-8 flex items-start gap-8 hover:bg-white/[0.04] hover:border-white/10 transition-all group ${alert.archived ? 'opacity-40 grayscale' : ''}`}
                >
                    <div className={`w-14 h-14 ${alert.bgColor} rounded-2xl flex-shrink-0 flex items-center justify-center border border-white/5`}>
                        {alert.icon}
                    </div>
                    
                    <div className="flex-1 space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <span className={`text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-white/5 ${alert.archived ? 'text-white/20' : 'text-primary'}`}>
                                    {alert.tag}
                                </span>
                                <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-white/20 italic">
                                    <Clock size={10} />
                                    {alert.time}
                                </div>
                            </div>
                            <button className="text-white/10 hover:text-red-500 transition-colors">
                                <X size={18} />
                            </button>
                        </div>

                        <div className="space-y-1">
                             <h3 className="text-xl font-black italic tracking-tight uppercase group-hover:text-primary transition-colors">{alert.title}</h3>
                             <p className="text-xs font-medium text-white/40 leading-relaxed italic max-w-2xl">{alert.desc}</p>
                        </div>

                        {!alert.archived && (
                            <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary hover:gap-4 transition-all">
                                View Intelligence Report <ChevronRight size={14} />
                            </button>
                        )}
                    </div>
                </article>
             )) : (
                <div className="py-24 text-center space-y-4 bg-[#0A0A0A] border border-dashed border-white/10 rounded-[3rem]">
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">No active intelligence alerts.</p>
                    <p className="text-xs text-white/10 max-w-xs mx-auto">Your neural link is active. We will notify you of any trajectory anomalies or capital leakage.</p>
                </div>
             )}
        </div>

        {/* Floating System Summary */}
        <section className="bg-primary/5 border border-primary/20 rounded-[3rem] p-10 flex items-center justify-between">
             <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center shadow-xl">
                    <Zap className="text-primary" size={20} fill="currentColor" />
                </div>
                <div className="space-y-1">
                    <h4 className="text-sm font-black italic uppercase">System Integrity Nominal</h4>
                    <p className="text-[10px] font-black uppercase tracking-widest text-white/40 italic">All monitoring nodes are communicating within threshold.</p>
                </div>
             </div>
             <div className="text-right">
                 <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20">Operational Status</div>
                 <div className="text-xs font-mono text-primary animate-pulse">STEADY-STATE_01</div>
             </div>
        </section>
      </main>
    </div>
  );
}
