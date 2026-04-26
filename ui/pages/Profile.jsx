import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { 
  User, 
  ShieldCheck, 
  ChevronRight, 
  LogOut, 
  Mail, 
  History, 
  Target, 
  Sparkles,
  Lock,
  Smartphone,
  Fingerprint
} from 'lucide-react';
import { getCurrentUser } from '../firebase/auth';
import { logout } from '../firebase/auth';

export default function Profile() {
  const navigate = useNavigate();
  const [firebaseUser, setFirebaseUser] = useState(null);

  useEffect(() => {
    const u = getCurrentUser();
    if (!u) { navigate('/login'); return; }
    setFirebaseUser(u);
  }, [navigate]);

  const user = {
    name: firebaseUser?.displayName || firebaseUser?.email?.split('@')[0] || "User",
    email: firebaseUser?.email || "",
    tier: "Pro Tier",
    role: "Wealth Architect",
    id: `FIN-${(firebaseUser?.uid || '').substring(0, 8).toUpperCase()}`,
    avatar: firebaseUser?.photoURL || `https://api.dicebear.com/7.x/initials/svg?seed=${firebaseUser?.email || 'U'}&backgroundColor=10B981`
  };

  const handleLogout = async () => {
    await logout();
    localStorage.clear();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-black text-white flex font-body selection:bg-primary/30">
      <Sidebar activePage="profile" />

      <main className="flex-1 ml-24 p-10 max-w-6xl mx-auto space-y-12">
        {/* Header Profile Section */}
        <header className="flex flex-col md:flex-row items-center gap-10 bg-[#0A0A0A] border border-white/5 p-12 rounded-[3.5rem] shadow-2xl relative overflow-hidden">
            <div className="relative">
                <div className="w-40 h-40 rounded-[2.5rem] overflow-hidden border-4 border-white/5 shadow-2xl relative z-10">
                    <img src={user.avatar} alt={user.name} className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700" />
                </div>
                <div className="absolute -right-2 -bottom-2 w-10 h-10 bg-primary rounded-2xl flex items-center justify-center border-4 border-black z-20 shadow-xl">
                    <ShieldCheck size={18} className="text-black" />
                </div>
                <div className="absolute -inset-4 bg-primary/10 rounded-full blur-[40px] opacity-20" />
            </div>

            <div className="text-center md:text-left space-y-4">
                <div className="space-y-1">
                    <h1 className="text-5xl font-black italic tracking-tighter leading-none">{user.name}</h1>
                    <p className="flex items-center justify-center md:justify-start gap-2 text-white/40 text-[10px] font-black uppercase tracking-[0.2em] italic">
                        <Mail size={12} className="text-primary" />
                        {user.email}
                    </p>
                </div>
                <div className="flex gap-4">
                    <span className="px-4 py-1.5 bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest rounded-full italic">{user.tier}</span>
                    <span className="px-4 py-1.5 bg-white/5 border border-white/10 text-white/40 text-[10px] font-black uppercase tracking-widest rounded-full italic">{user.role}</span>
                </div>
            </div>
            {/* Decorative node id */}
            <div className="absolute top-10 right-12 text-right opacity-20">
                <div className="text-[10px] font-black uppercase tracking-widest text-primary">Identity Node</div>
                <div className="text-[10px] font-mono">{user.id}</div>
            </div>
        </header>

        <div className="grid grid-cols-12 gap-8">
            {/* Left: Info Matrix */}
            <div className="col-span-12 lg:col-span-8 space-y-8">
                <section className="bg-[#0A0A0A] border border-white/5 rounded-[3rem] p-12 space-y-10 shadow-xl">
                    <div className="flex justify-between items-end border-b border-white/5 pb-8">
                         <div className="space-y-1">
                            <h3 className="text-2xl font-black italic tracking-tight">Identity Matrix</h3>
                            <p className="text-[10px] uppercase font-black tracking-[0.3em] text-white/20">Institutional Metadata</p>
                         </div>
                         <button className="text-[10px] font-black uppercase tracking-widest text-primary hover:text-white transition-colors italic">Modify Access</button>
                    </div>

                    <div className="grid grid-cols-2 gap-y-12 gap-x-8">
                        {[
                            { label: 'System Pseudonym', val: user.name },
                            { label: 'Secure Broadcast', val: user.email },
                            { label: 'Access Hash', val: '0x882A...S88' },
                            { label: 'Temporal Sync', val: 'EST (UTC -5)' }
                        ].map((item, i) => (
                            <div key={i} className="space-y-2">
                                <p className="text-[10px] font-black uppercase tracking-widest text-white/20">{item.label}</p>
                                <p className="text-base font-bold italic text-white/60">{item.val}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Plan Banner */}
                <section className="bg-primary border border-primary text-black p-10 rounded-[3rem] flex items-center justify-between shadow-2xl shadow-primary/20 relative overflow-hidden group">
                     <div className="relative z-10 space-y-4">
                        <div className="flex items-center gap-3 text-black/60 uppercase text-[10px] font-black tracking-[0.4em]">
                             <Sparkles size={14} />
                             Intelligence Tier
                        </div>
                        <h3 className="text-4xl font-black italic tracking-tighter leading-none">Unlimited Analysis.</h3>
                        <p className="text-sm font-black italic max-w-xs leading-snug opacity-60">
                            Enterprise access active. Priority GPU allocation and institutional reporting unlocked.
                        </p>
                     </div>
                     <div className="flex flex-col gap-4 relative z-10">
                        <button className="px-8 py-4 bg-black text-white text-[10px] font-black uppercase tracking-widest rounded-2xl hover:scale-105 transition-all">Trajectory Control</button>
                        <button className="px-8 py-4 bg-transparent border-2 border-black/20 text-black text-[10px] font-black uppercase tracking-widest rounded-2xl hover:bg-black/5 transition-all">Tier Details</button>
                     </div>
                     <div className="absolute -right-20 -top-20 w-80 h-80 bg-white/20 rounded-full blur-[80px]" />
                </section>
            </div>

            {/* Right: Security & Monitoring */}
            <div className="col-span-12 lg:col-span-4 space-y-8">
                <section className="bg-[#0A0A0A] border border-white/5 rounded-[3rem] p-10 space-y-8 shadow-xl">
                    <div className="space-y-1">
                        <h3 className="text-xl font-black italic tracking-tight uppercase">Audit Logs</h3>
                        <p className="text-[10px] uppercase font-black tracking-[0.3em] text-white/20">Operational Pulse</p>
                    </div>
                    <div className="space-y-6">
                        {[
                            { icon: <History size={18} />, label: 'Last Analysis', val: 'Oct 24, 2026' },
                            { icon: <Target size={18} />, label: 'Active Targets', val: '5 Strategic Nodes' },
                            { icon: <Lock size={18} />, label: 'Encryption Stance', val: 'AES-256 Protocol' }
                        ].map((stat, s) => (
                             <div key={s} className="flex items-center gap-5 group">
                                <div className="w-12 h-12 bg-white/5 border border-white/5 rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                    {stat.icon}
                                </div>
                                <div className="space-y-0.5">
                                    <p className="text-[9px] font-black uppercase tracking-widest text-white/20">{stat.label}</p>
                                    <p className="text-sm font-bold italic">{stat.val}</p>
                                </div>
                             </div>
                        ))}
                    </div>
                </section>

                <section className="bg-[#0A0A0A] border border-white/5 rounded-[3rem] p-8 space-y-6 shadow-xl">
                    <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 px-4">Governance</h3>
                    <div className="space-y-2">
                        {[
                            { icon: <Fingerprint size={16} />, label: 'Access Keys', status: 'Secured' },
                            { icon: <Smartphone size={16} />, label: 'Device ID Sync', status: '2 Nodes' },
                            { icon: <Lock size={16} />, label: '2FA Protocol', status: 'Bypassed', error: true }
                        ].map((item, i) => (
                            <div key={i} className="flex items-center justify-between p-4 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/5 transition-all cursor-pointer group">
                                <div className="flex items-center gap-4">
                                     <div className="text-white/20 group-hover:text-primary transition-colors">{item.icon}</div>
                                     <span className="text-xs font-bold italic">{item.label}</span>
                                </div>
                                <span className={`text-[10px] font-black uppercase tracking-widest ${item.error ? 'text-red-500' : 'text-primary'}`}>{item.status}</span>
                            </div>
                        ))}
                    </div>
                </section>

                <button onClick={handleLogout} className="w-full p-8 bg-red-500/5 hover:bg-red-500 border border-red-500/20 text-red-500 hover:text-black rounded-[2.5rem] flex items-center justify-between transition-all group shadow-xl">
                    <div className="flex items-center gap-4">
                        <LogOut size={20} />
                        <div className="text-left space-y-0.5">
                            <h4 className="text-sm font-black italic uppercase">Terminate Session</h4>
                            <p className="text-[9px] font-black uppercase tracking-widest opacity-40">System Liquidation</p>
                        </div>
                    </div>
                    <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </div>

        {/* Global Footer Meta */}
        <footer className="pt-12 border-t border-white/5 flex justify-between items-center opacity-10">
            <span className="text-[9px] font-black uppercase tracking-[0.5em]">Finsight Intel v3.1</span>
            <span className="text-[9px] font-mono">STATUS: OPERATIONAL_NODE_SYNCED</span>
        </footer>
      </main>
    </div>
  );
}
