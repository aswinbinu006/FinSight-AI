import React from 'react';
import { Link } from 'react-router-dom';
import { motion as Motion } from 'framer-motion';
import { ServerCrash, RefreshCw, AlertTriangle, Cpu } from 'lucide-react';

export default function Error500() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-primary/30 flex flex-col items-center justify-center relative overflow-hidden font-body">
      <div className="noise-overlay" />
      
      {/* Background Ambient Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-red-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Decorative Background Text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
        <span className="text-[35rem] font-black tracking-tighter italic lg:block hidden">500</span>
      </div>

      <main className="relative z-10 text-center space-y-12 px-6">
        {/* Status Indicator */}
        <Motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div className="flex items-center justify-center gap-3 text-red-500 uppercase text-[10px] font-black tracking-[0.6em] animate-pulse">
            <ServerCrash size={14} />
            System Fault / Logic Leak
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter leading-none mt-4">
            Internal <span className="text-red-500/40">Failure.</span>
          </h1>
          
          <p className="text-xs font-medium text-white/40 max-w-sm mx-auto uppercase tracking-[0.3em] leading-relaxed italic">
            A critical interruption occurred within the central intelligence core. We are attempting to stabilize the node.
          </p>
        </Motion.div>

        {/* Action Zone */}
        <Motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center gap-8"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => window.location.reload()}
              className="group relative px-12 py-5 bg-white text-black rounded-2xl font-black text-[11px] uppercase tracking-[0.3em] overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.1)] flex items-center gap-4"
            >
              Reboot Instance 
              <RefreshCw size={18} className="group-hover:rotate-180 transition-transform duration-700" />
            </button>
            
            <Link 
              to="/dashboard" 
              className="px-12 py-5 bg-white/5 border border-white/10 rounded-2xl font-black text-[11px] uppercase tracking-[0.3em] hover:bg-white/10 transition-all text-white/60 hover:text-white"
            >
              Return to Base
            </Link>
          </div>
          
          {/* Diagnostic Metrics */}
          <div className="flex border border-white/5 bg-white/[0.02] p-4 rounded-2xl backdrop-blur-xl gap-8">
            <div className="text-center px-4 border-r border-white/10">
              <p className="text-[8px] font-black uppercase tracking-widest text-white/20 mb-1">Stack Trace</p>
              <div className="flex items-center gap-2">
                <Cpu size={12} className="text-red-500" />
                <span className="text-[10px] font-bold text-white/60 uppercase">E-CODE: FS_500IX</span>
              </div>
            </div>
            <div className="text-center px-4">
              <p className="text-[8px] font-black uppercase tracking-widest text-white/20 mb-1">Vulnerability</p>
              <span className="text-[10px] font-bold text-red-500 italic font-serif">High Severity</span>
            </div>
          </div>
        </Motion.div>
      </main>

      {/* Persistent Footer */}
      <footer className="absolute bottom-12 w-full text-center">
         <div className="flex items-center justify-center gap-2 mb-4 opacity-20">
            <AlertTriangle size={14} className="text-red-500" />
            <span className="w-8 h-[1px] bg-white/20" />
            <ServerCrash size={14} className="text-white" />
         </div>
         <p className="text-[9px] font-black uppercase tracking-[0.5em] text-white/10 italic">
            ERR_LOC: CENTRAL_SYNC_V4 / REF: {Math.random().toString(36).substring(7).toUpperCase()}
         </p>
      </footer>
    </div>
  );
}
