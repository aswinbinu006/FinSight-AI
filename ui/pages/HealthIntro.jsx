import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { useUserData } from '../context/UserDataContext';
import { 
  HeartPulse, 
  Trash2, 
  Target, 
  ChevronRight, 
  Clock, 
  ShieldCheck, 
  Activity,
  Zap,
  Fingerprint
} from 'lucide-react';

export default function HealthIntro() {
  const navigate = useNavigate();
  const { userData } = useUserData();
  const isOnboarded = userData.behavioral.completed;

  // Auto-redirect if already onboarded
  React.useEffect(() => {
    if (isOnboarded) {
      navigate('/health/dashboard');
    }
  }, [isOnboarded, navigate]);

  return (
    <div className="min-h-screen bg-black text-white flex font-body selection:bg-primary/30">
      <Sidebar activePage="health" />

      <main className="flex-1 ml-24 flex items-center justify-center p-8 lg:p-12">
        <div className="w-full max-w-4xl space-y-12 pb-24">
            
            {/* Header Identity */}
            <div className="text-center space-y-4">
                <div className="flex items-center justify-center gap-3 text-primary uppercase text-[10px] font-black tracking-[0.5em] animate-pulse">
                    <Activity size={14} />
                    System Audit Protocol
                </div>
                <h1 className="text-6xl font-black italic tracking-tighter leading-none">
                    Quantify Your <br/><span className="text-white/20">Resilience.</span>
                </h1>
                <p className="text-lg font-medium text-white/40 max-w-xl mx-auto italic">
                    Our AI engine will analyze your behavioral patterns to generate a multidimensional health score and predictive wealth trajectory.
                </p>
            </div>

            {/* Feature Bento Grid */}
            <div className="grid grid-cols-3 gap-8">
                {[
                    { label: 'Score Generation', desc: 'Real-time resilience quantification based on liquidity and leverage.', icon: <HeartPulse className="text-primary" size={24}/>, color: 'primary' },
                    { label: 'Habit Mapping', desc: 'Identify spending leakages and behavioral drift automatically.', icon: <Fingerprint className="text-white/20" size={24}/>, color: 'white/10' },
                    { label: 'Future Casting', desc: 'Institutional-grade predictive wealth snapshots and risk modeling.', icon: <Target className="text-white/20" size={24}/>, color: 'white/10' }
                ].map((item, i) => (
                    <div key={i} className="bg-[#0A0A0A] border border-white/5 p-8 rounded-[2.5rem] space-y-5 group hover:border-primary/20 transition-all shadow-2xl relative overflow-hidden">
                        <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/5 group-hover:scale-110 transition-transform">
                            {item.icon}
                        </div>
                        <div className="space-y-1 relative z-10">
                            <h3 className="text-lg font-black italic tracking-tight uppercase leading-none">{item.label}</h3>
                            <p className="text-[9px] uppercase font-black tracking-[0.2em] text-white/20">Module Control</p>
                        </div>
                        <p className="text-xs font-medium leading-relaxed text-white/40 italic relative z-10 transition-colors group-hover:text-white/60">
                            {item.desc}
                        </p>
                        <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-primary/5 blur-[40px] rounded-full group-hover:bg-primary/10 transition-all opacity-0 group-hover:opacity-100" />
                    </div>
                ))}
            </div>

            {/* Action Zone */}
            <div className="flex flex-col items-center gap-6 pt-4">
                <Link to={isOnboarded ? "/health/dashboard" : "/onboarding/step1"} className="group relative px-14 py-5 bg-white text-black rounded-[1.5rem] font-black text-[12px] uppercase tracking-[0.3em] overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_60px_rgba(255,255,255,0.05)] border-4 border-transparent hover:border-primary/20">
                    <span className="relative z-10 flex items-center gap-3">
                        {isOnboarded ? 'Access Diagnostic Dashboard' : 'Initialize Diagnostic'} <ChevronRight size={20}/>
                    </span>
                </Link>
                <div className="flex items-center gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-white/20">
                    <div className="flex items-center gap-2 italic">
                        <Clock size={12} className="text-primary" />
                        Audit Time: 60s
                    </div>
                    <div className="w-1 h-1 bg-white/10 rounded-full" />
                    <div className="flex items-center gap-2 italic">
                        <ShieldCheck size={12} className="text-primary" />
                        Pinnacle Encryption
                    </div>
                </div>
            </div>
        </div>

        {/* Floating System Specs */}
        <section className="absolute bottom-10 left-36 right-10 flex justify-between px-10 border-t border-white/5 pt-10 opacity-20">
             <div className="flex items-center gap-4">
                <div className="text-[10px] font-black uppercase tracking-widest text-primary">Identity</div>
                <div className="text-[10px] font-mono">FIN-HEALTH-PROTOCOL_v3</div>
             </div>
             <div className="flex items-center gap-4 italic font-black uppercase tracking-[0.3em] text-[10px]">
                Secured by Finsight AI Enterprise
             </div>
        </section>
      </main>
    </div>
  );
}
