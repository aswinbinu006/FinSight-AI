import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion as Motion } from 'framer-motion';
import { ArrowRight, Brain, AlertCircle, ShieldAlert, Globe, Crosshair } from 'lucide-react';

export default function Error404() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white selection:bg-primary/30 flex flex-col items-center justify-center relative overflow-hidden font-body p-6">
      <div className="noise-overlay" />
      
      {/* Background Ambient Orbs */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none animate-pulse" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none animate-pulse" />

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />

      {/* Decorative Background Text with Glitch effect */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.05] pointer-events-none select-none">
        <h1 className="text-[30rem] lg:text-[40rem] font-black italic tracking-tighter leading-none text-primary blur-sm">404</h1>
      </div>

      <main className="relative z-10 text-center space-y-16 max-w-2xl px-10 py-20 bg-[#0A0A0A]/40 border border-white/5 rounded-[4rem] backdrop-blur-3xl shadow-2xl">
        
        {/* Status Indicator */}
        <Motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <div className="flex items-center justify-center gap-4 text-primary uppercase text-[10px] font-black tracking-[0.8em]">
             <Crosshair size={16} className="animate-spin-slow" />
             NODE_NOT_RESOLVED
          </div>
          
          <h1 className="text-7xl md:text-8xl font-black italic tracking-tighter leading-none mt-4 drop-shadow-[0_0_30px_rgba(16,185,129,0.2)]">
            Vector <span className="text-white/20">Lost.</span>
          </h1>
          
          <p className="text-[11px] font-black text-white/40 max-w-md mx-auto uppercase tracking-[0.4em] leading-relaxed italic">
            You have entered a null vector within the FinSight coordinate system. The requested intelligence node is offline or missing.
          </p>
        </Motion.div>

        {/* Diagnostic Grid */}
        <div className="grid grid-cols-2 gap-px bg-white/5 rounded-3xl overflow-hidden border border-white/5">
            <div className="bg-black/40 p-6 flex flex-col items-center gap-2">
                <p className="text-[8px] font-black uppercase tracking-widest text-white/20">Sector</p>
                <span className="text-[10px] font-black text-white italic">0x404_NULL</span>
            </div>
            <div className="bg-black/40 p-6 flex flex-col items-center gap-2">
                <p className="text-[8px] font-black uppercase tracking-widest text-white/20">Divergence</p>
                <span className="text-[10px] font-black text-red-500 italic">CRITICAL</span>
            </div>
        </div>

        {/* Primary Action */}
        <Motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center gap-8 pt-4"
        >
          <button 
            onClick={() => navigate('/dashboard')}
            className="group relative px-14 py-6 bg-white text-black rounded-[2rem] font-black text-[12px] uppercase tracking-[0.4em] overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(16,185,129,0.1)] flex items-center gap-4"
          >
            Reconnect to Grid 
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <div className="flex items-center gap-6 opacity-20">
             <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest italic">
                <Globe size={12} />
                Network Uplink
             </div>
             <div className="w-1 h-1 bg-white/40 rounded-full" />
             <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest italic">
                <ShieldAlert size={12} />
                Enforce Safety
             </div>
          </div>
        </Motion.div>
      </main>

      {/* Security Branding */}
      <footer className="absolute bottom-12 w-full text-center">
         <p className="text-[9px] font-black uppercase tracking-[0.6em] text-white/10 italic">
            © 2026 FINSIGHT AI / Sovereign Intelligence Ecosystem
         </p>
      </footer>
    </div>
  );
}

