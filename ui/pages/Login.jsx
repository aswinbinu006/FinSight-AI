import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Landmark, Mail, ArrowRight, ShieldAlert, Eye, EyeOff } from 'lucide-react';
import { loginWithEmail } from '../firebase/auth';
import { isBehavioralCompleted } from '../firebase/firestore';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const user = await loginWithEmail(email, password);
      
      // Check if behavioral onboarding is complete in Firestore
      const isOnboarded = await isBehavioralCompleted(user.uid);
      
      if (isOnboarded) {
        navigate('/dashboard');
      } else {
        navigate('/onboarding/step1');
      }
    } catch (err) {
      setError(err.message || 'Identity Verification Failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center py-12 px-6 md:p-8 font-body selection:bg-[#14B8A6] selection:text-black">
      
      {/* Background Textures - Fixed behind the scrolling page */}
      <div className="fixed inset-0 bg-[#0A0A0A] pointer-events-none z-0">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="absolute top-[20%] right-[-10%] w-[60rem] h-[60rem] bg-[#004D40]/20 rounded-full blur-[160px] animate-pulse"></div>
        <div className="absolute bottom-[10%] left-[-10%] w-[40rem] h-[40rem] bg-[#14B8A6]/10 rounded-full blur-[140px]"></div>
      </div>

      {/* Main Console Frame: TV Shape, fits content height enabling native page scroll */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-[1000px] bg-[#111111]/90 backdrop-blur-3xl rounded-[2.5rem] shadow-[0_40px_100px_rgba(0,0,0,0.8)] border border-white/[0.04] flex flex-col md:flex-row overflow-hidden relative z-10"
      >
        
        {/* Left Side: Information Taking Part (More Space) */}
        <div className="w-full md:w-[60%] p-8 md:p-14 border-r border-white/[0.04]">
          <Link to="/" className="flex items-center gap-4 group mb-12 w-fit">
            <div className="w-10 h-10 rounded-xl bg-[#14B8A6] flex items-center justify-center group-hover:scale-105 transition-all">
                <Landmark className="text-black" size={20} />
            </div>
            <h1 className="font-accent font-black uppercase text-sm tracking-[0.4em] text-white">FinSight.AI</h1>
          </Link>

          <div className="max-w-[420px] mx-auto md:mx-0">
            <h2 className="font-display text-5xl md:text-6xl text-white italic leading-tight mb-4 tracking-tighter">Welcome Back.</h2>
            <p className="text-white/40 text-[13px] font-medium leading-relaxed mb-10">
              Enter your credentials to establish a secure link with the predictive wealth backend.
            </p>

            {error && (
              <div className="mb-8 p-4 bg-red-500/5 border border-red-500/20 rounded-2xl flex items-center gap-4">
                <ShieldAlert size={16} className="text-red-500" />
                <p className="text-red-400 text-[11px] font-bold tracking-wide">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Email Address */}
              <div className="space-y-3 group">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 ml-2 group-focus-within:text-[#14B8A6] transition-colors">Email Address</label>
                <div className="relative">
                    <input 
                    type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-6 py-4 bg-white/[0.02] border border-white/5 rounded-2xl outline-none focus:border-[#14B8A6]/50 focus:bg-white/[0.04] transition-all text-sm font-semibold text-white placeholder:text-white/10"
                    />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-3 group">
                <div className="flex justify-between items-center px-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 group-focus-within:text-[#14B8A6] transition-colors">Password</label>
                  <button type="button" className="text-[9px] font-black uppercase tracking-[0.3em] text-[#14B8A6] hover:text-white transition-colors">Recover</button>
                </div>
                <div className="relative">
                  <input 
                    type={showPassword ? "text" : "password"} required value={password} onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full px-6 py-4 pr-12 bg-white/[0.02] border border-white/5 rounded-2xl outline-none focus:border-[#14B8A6]/50 focus:bg-white/[0.04] transition-all text-sm font-semibold text-white tracking-widest placeholder:text-white/10"
                  />
                  <button 
                    type="button" 
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-6 top-1/2 -translate-y-1/2 text-white/20 hover:text-[#14B8A6] transition-colors"
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button 
                  type="submit" disabled={loading}
                  className="w-full py-5 bg-white text-black rounded-2xl font-black uppercase tracking-[0.2em] text-[12px] hover:bg-[#14B8A6] active:scale-[0.98] transition-all flex items-center justify-center gap-4 disabled:opacity-50 group/btn shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(20,184,166,0.3)]"
                >
                  <span className="relative z-10">{loading ? "Authenticating..." : "Sign In"}</span>
                  {!loading && <ArrowRight size={16} className="group-hover/btn:translate-x-2 transition-transform duration-500" />}
                </button>
              </div>
            </form>

            <div className="mt-8 text-center md:text-left">
              <p className="text-white/30 text-[11px] font-black uppercase tracking-[0.2em]">
                Don't have an instance? 
                <Link to="/signup" className="text-white hover:text-[#14B8A6] transition-colors ml-3 border-b border-white/20 hover:border-[#14B8A6]/50 pb-1">Create Account</Link>
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Reduced Image Display Side (Less Space) */}
        <div className="hidden md:flex md:w-[40%] bg-[#080808] relative items-center justify-center overflow-hidden h-64 md:h-auto">
           <motion.img 
              initial={{ scale: 1.05, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.6 }}
              transition={{ duration: 2, ease: "easeOut" }}
              src="/premium_login_side_image_1777135504855.png" 
              alt="Predictive Engine" 
              className="absolute inset-0 w-full h-full object-cover mix-blend-screen opacity-50"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/50"></div>
           
           <div className="relative z-10 p-10 text-center">
              <h3 className="text-white font-display text-4xl italic tracking-tight mb-2">Architected for <br/> financial clarity.</h3>
           </div>
        </div>
      </motion.div>
    </div>
  );
}
