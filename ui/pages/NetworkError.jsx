import React from 'react';
import { motion as Motion } from 'framer-motion';
import { WifiOff, RefreshCcw, Activity, Globe } from 'lucide-react';

export default function NetworkError() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-primary/30 flex flex-col items-center justify-center relative overflow-hidden font-body">
      <div className="noise-overlay" />
      
      {/* Background Ambient Orbs */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Decorative Background Text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
         <WifiOff size={400} className="italic" />
      </div>

      <main className="relative z-10 text-center space-y-12 px-6">
        {/* Status Indicator */}
        <Motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div className="flex items-center justify-center gap-3 text-primary uppercase text-[10px] font-black tracking-[0.6em] animate-pulse">
            <Activity size={14} />
            Link Severed / Signal Null
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter leading-none mt-4">
            Offline <span className="text-white/20">Protocol.</span>
          </h1>
          
          <p className="text-xs font-medium text-white/40 max-w-sm mx-auto uppercase tracking-[0.3em] leading-relaxed italic">
            Connection to the intelligence grid has been lost. Syncing is suspended until a stable uplink is established.
          </p>
        </Motion.div>

        {/* Action Zone */}
        <Motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center gap-8"
        >
          <button 
            onClick={() => window.location.reload()}
            className="group relative px-12 py-5 bg-white text-black rounded-2xl font-black text-[11px] uppercase tracking-[0.3em] overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.1)] flex items-center gap-4"
          >
            Attempt Re-Uplink 
            <RefreshCcw size={18} className="group-hover:rotate-180 transition-transform duration-700" />
          </button>
          
          {/* Diagnostic Metrics */}
          <div className="flex border border-white/5 bg-white/[0.02] p-4 rounded-2xl backdrop-blur-xl gap-8">
            <div className="text-center px-4 border-r border-white/10">
              <p className="text-[8px] font-black uppercase tracking-widest text-white/20 mb-1">Grid Status</p>
              <div className="flex items-center gap-2">
                <Globe size={12} className="text-white/40" />
                <span className="text-[10px] font-bold text-white/60 uppercase">Searching...</span>
              </div>
            </div>
            <div className="text-center px-4">
              <p className="text-[8px] font-black uppercase tracking-widest text-white/20 mb-1">Latency</p>
              <span className="text-[10px] font-bold text-primary italic font-serif">Infinite</span>
            </div>
          </div>
        </Motion.div>
      </main>

      {/* Persistent Footer */}
      <footer className="absolute bottom-12 w-full text-center">
         <p className="text-[9px] font-black uppercase tracking-[0.5em] text-white/10 italic">
            © 2026 FINSIGHT AI Premium INTELLIGENCE / UPLINK_LOST
         </p>
      </footer>
    </div>
  );
}
