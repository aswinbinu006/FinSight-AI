import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { Settings as SettingsIcon, User, ShieldCheck, Database, Lock, ArrowRight, Zap, Cpu } from 'lucide-react';
import { getCurrentUser } from '../firebase/auth';
import { getUserProfile, saveUserProfile } from '../firebase/firestore';

export default function Settings() {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState(true);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const user = getCurrentUser();
    if (!user) {
      navigate('/login');
      return;
    }
    setEmail(user.email || '');
    setFullName(user.displayName || '');
    
    // Load from Firestore for extended profile
    getUserProfile(user.uid).then(profile => {
      if (profile?.displayName) setFullName(profile.displayName);
    }).catch(() => {});
  }, [navigate]);

  const handleUpdate = async () => {
    const user = getCurrentUser();
    if (!user) return;
    setSaving(true);
    try {
      await saveUserProfile(user.uid, { displayName: fullName });
    } catch (err) {
      console.error('Update failed:', err);
    } finally {
      setSaving(false);
    }
  };

  const handlePurgeCache = () => {
    if (window.confirm('This will refresh all locally cached intelligence data from the cloud. Continue?')) {
      window.location.reload();
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex font-body selection:bg-primary/30">
      <Sidebar />

      <main className="flex-1 ml-24 p-10 space-y-12 pb-24">
        {/* Header */}
        <header className="flex justify-between items-end mb-8 border-b border-white/5 pb-12">
            <div className="space-y-2">
                <div className="flex items-center gap-3 text-white/40 uppercase text-[10px] font-black tracking-[0.4em]">
                    <SettingsIcon size={12} />
                    System Configuration
                </div>
                <h1 className="text-5xl font-black italic tracking-tighter">Settings <span className="text-white/20">Protocol.</span></h1>
            </div>
            <div className="text-right">
                 <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20">Auth Layer</div>
                 <div className="text-xs font-mono text-primary">FIREBASE-SECURE</div>
            </div>
        </header>

        <div className="space-y-12">
            {/* Identity Section */}
            <section className="bg-[#0A0A0A] border border-white/5 rounded-[3rem] p-12 space-y-10 shadow-xl relative overflow-hidden group">
                <div className="flex items-center gap-4 relative z-10">
                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20">
                        <User className="text-primary" size={24} />
                    </div>
                    <div>
                        <h3 className="text-xl font-black italic tracking-tight">Identity & Access</h3>
                        <p className="text-[10px] uppercase font-black tracking-[0.2em] text-white/20 italic">Node Ownership Records</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-8 relative z-10">
                    <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-widest text-white/20">Full Name</label>
                        <input 
                            type="text" 
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            className="w-full bg-white/[0.02] border border-white/5 rounded-2xl px-6 py-4 text-sm font-medium focus:outline-none focus:border-primary/40 focus:bg-white/5 transition-all"
                        />
                    </div>
                    <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-widest text-white/20">Secure Email</label>
                        <input 
                            type="email" 
                            value={email}
                            className="w-full bg-white/[0.02] border border-white/5 rounded-2xl px-6 py-4 text-sm font-medium focus:outline-none focus:border-primary/40 focus:bg-white/5 transition-all text-white/40"
                            disabled
                        />
                    </div>
                </div>

                <div className="flex justify-end pt-4 relative z-10">
                    <button 
                      onClick={handleUpdate}
                      disabled={saving}
                      className="px-8 py-4 bg-primary text-black font-black text-[10px] uppercase tracking-[0.2em] rounded-2xl hover:scale-105 transition-all shadow-xl shadow-primary/20 disabled:opacity-50"
                    >
                      {saving ? 'Updating...' : 'Update Records'}
                    </button>
                </div>
                <div className="absolute -right-20 -bottom-20 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px]" />
            </section>

            {/* Interface Preferences */}
            <section className="bg-[#0A0A0A] border border-white/5 rounded-[3rem] p-12 space-y-10 shadow-xl">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20">
                        <Cpu className="text-primary" size={24} />
                    </div>
                    <div>
                        <h3 className="text-xl font-black italic tracking-tight">Interface Preferences</h3>
                        <p className="text-[10px] uppercase font-black tracking-[0.2em] text-white/20 italic">UX Optimization Nodes</p>
                    </div>
                </div>

                <div className="space-y-8">
                    <div className="flex items-center justify-between p-6 bg-white/[0.02] border border-white/5 rounded-[2rem]">
                        <div className="space-y-1">
                            <p className="text-sm font-bold">Neural Intelligence Alerts</p>
                            <p className="text-[10px] text-white/40 font-medium uppercase tracking-wider">Predictive drift and anomaly detection</p>
                        </div>
                        <button 
                            onClick={() => setNotifications(!notifications)}
                            className={`w-14 h-8 rounded-full relative transition-all duration-500 ${notifications ? 'bg-primary' : 'bg-white/10'}`}
                        >
                            <div className={`absolute top-1 w-6 h-6 rounded-full bg-black transition-all duration-500 ${notifications ? 'right-1' : 'left-1'}`} />
                        </button>
                    </div>

                    <div className="space-y-4">
                        <label className="text-[10px] font-black uppercase tracking-widest text-white/20 px-4">Environment Theme</label>
                        <div className="grid grid-cols-2 gap-6">
                            <button className="p-6 bg-white/5 border border-primary/40 rounded-[2rem] flex items-center justify-between group transition-all">
                                <div className="flex items-center gap-3">
                                    <ShieldCheck className="text-primary font-black" size={18} />
                                    <span className="text-xs font-black uppercase tracking-widest text-primary italic">Deep Dark (Default)</span>
                                </div>
                                <div className="w-4 h-4 rounded-full bg-primary" />
                            </button>
                            <button className="p-6 bg-white/[0.02] border border-white/5 rounded-[2rem] flex items-center justify-between group opacity-40 cursor-not-allowed">
                                <div className="flex items-center gap-3">
                                    <Zap className="text-white/20" size={18} />
                                    <span className="text-xs font-black uppercase tracking-widest text-white/20 italic">High contrast</span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Governance & Privacy */}
            <div className="grid grid-cols-12 gap-8">
                <section className="col-span-12 lg:col-span-7 bg-[#0A0A0A] border border-white/5 rounded-[3rem] p-10 space-y-8">
                    <div className="flex items-center gap-3 text-primary">
                        <Database size={20} />
                        <h3 className="text-[10px] font-black uppercase tracking-[0.4em]">Data Governance</h3>
                    </div>
                    <p className="text-xs font-medium leading-relaxed italic text-white/40 max-w-md">
                        Manage your historical trajectory and data residency. Liquidation is permanent and non-recoverable.
                    </p>
                    <div className="flex gap-4">
                        <button 
                          onClick={handlePurgeCache}
                          className="px-6 py-3 bg-white/5 hover:bg-red-500/10 hover:text-red-500 border border-white/5 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all"
                        >
                            Purge Intelligence Cache
                        </button>
                    </div>
                </section>

                <section className="col-span-12 lg:col-span-5 bg-primary/5 border border-primary/20 rounded-[3rem] p-10 flex flex-col justify-between group relative overflow-hidden">
                    <div className="relative z-10 space-y-6">
                        <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center shadow-2xl">
                            <Lock className="text-primary" size={20} />
                        </div>
                        <div className="space-y-2">
                             <h4 className="text-lg font-black italic tracking-tighter">Zero-Access Guarantee</h4>
                             <p className="text-[10px] font-medium leading-relaxed text-white/40 uppercase tracking-widest">
                                Premium isolation protocols ensure we never store your raw credentials.
                             </p>
                        </div>
                    </div>
                    <button className="relative z-10 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-primary hover:text-white transition-all pt-8">
                        View Privacy Directive <ArrowRight size={14} />
                    </button>
                    <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/10 blur-[50px] rounded-full" />
                </section>
            </div>
        </div>

        {/* System Footer Info */}
        <footer className="pt-12 border-t border-white/5 flex justify-between items-center opacity-20">
            <span className="text-[10px] font-black uppercase tracking-[0.4em]">Node_Alpha-Z88</span>
            <span className="text-[10px] font-mono">v1.0.0-PRODUCTION</span>
        </footer>
      </main>
    </div>
  );
}
