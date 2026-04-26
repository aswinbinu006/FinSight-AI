import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, Mail, User, Calendar, ArrowRight, ShieldAlert, Eye, EyeOff } from 'lucide-react';
import { signupWithEmail } from '../firebase/auth';
import { initializeUserDocument } from '../firebase/firestore';

export default function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
        setError('Passwords do not match.');
        return;
    }
    if (!acceptedTerms) {
        setError('You must accept the terms & conditions.');
        return;
    }
    setLoading(true);
    setError('');

    try {
      const user = await signupWithEmail(formData.email, formData.password, formData.fullName);
      
      // Initialize user document in Firestore
      await initializeUserDocument(user.uid, {
        email: user.email,
        displayName: formData.fullName,
        age: formData.age
      });
      
      // New users need to complete behavioral onboarding
      navigate('/onboarding/step1');
    } catch (err) {
      setError(err.message || 'Account creation failed. Please try again.');
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
        className="w-full max-w-[1100px] bg-[#111111]/90 backdrop-blur-3xl rounded-[2.5rem] shadow-[0_40px_100px_rgba(0,0,0,0.8)] border border-white/[0.04] flex flex-col md:flex-row overflow-hidden relative z-10"
      >
        
        {/* Left Side: Information Taking Part (More Space) */}
        <div className="w-full md:w-[65%] p-8 md:p-14 border-r border-white/[0.04]">
          <Link to="/" className="flex items-center gap-4 group mb-10 w-fit">
            <div className="w-10 h-10 rounded-xl bg-[#14B8A6] flex items-center justify-center group-hover:scale-105 transition-all">
                <Sparkles className="text-black" size={20} />
            </div>
            <h1 className="font-accent font-black uppercase text-sm tracking-[0.4em] text-white">FinSight.AI</h1>
          </Link>

          <div className="max-w-[500px]">
            <h2 className="font-display text-5xl md:text-6xl text-white italic leading-tight mb-4 tracking-tighter">Create Account.</h2>
            <p className="text-white/40 text-[13px] font-medium leading-relaxed mb-10">
              Establish your profile to initiate deep behavioral forecasting and automated insights.
            </p>

            {error && (
              <div className="mb-8 p-4 bg-red-500/5 border border-red-500/20 rounded-2xl flex items-center gap-4">
                <ShieldAlert size={16} className="text-red-500" />
                <p className="text-red-400 text-[11px] font-bold tracking-wide">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="space-y-3 group">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 ml-2 group-focus-within:text-[#14B8A6] transition-colors">Full Name</label>
                    <div className="relative">
                        <input 
                        type="text" required value={formData.fullName} onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                        placeholder="Enter your full name"
                        className="w-full px-6 py-4 bg-white/[0.02] border border-white/5 rounded-2xl outline-none focus:border-[#14B8A6]/50 focus:bg-white/[0.04] transition-all text-sm font-semibold text-white placeholder:text-white/10"
                        />
                    </div>
                  </div>

                  {/* Age */}
                  <div className="space-y-3 group">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 ml-2 group-focus-within:text-[#14B8A6] transition-colors">Age</label>
                    <div className="relative">
                        <input 
                        type="number" required min="18" max="120" value={formData.age} onChange={(e) => setFormData({...formData, age: e.target.value})}
                        placeholder="Enter your age"
                        className="w-full px-6 py-4 bg-white/[0.02] border border-white/5 rounded-2xl outline-none focus:border-[#14B8A6]/50 focus:bg-white/[0.04] transition-all text-sm font-semibold text-white placeholder:text-white/10"
                        />
                    </div>
                  </div>
              </div>

              {/* Email Address */}
              <div className="space-y-3 group">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 ml-2 group-focus-within:text-[#14B8A6] transition-colors">Email Address</label>
                <div className="relative">
                    <input 
                    type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="Enter your email address"
                    className="w-full px-6 py-4 bg-white/[0.02] border border-white/5 rounded-2xl outline-none focus:border-[#14B8A6]/50 focus:bg-white/[0.04] transition-all text-sm font-semibold text-white placeholder:text-white/10"
                    />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Password */}
                <div className="space-y-3 group">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 ml-2 group-focus-within:text-[#14B8A6] transition-colors">Password</label>
                  <div className="relative">
                    <input 
                      type={showPassword ? "text" : "password"} required value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})}
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

                {/* Confirm Password */}
                <div className="space-y-3 group">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 ml-2 group-focus-within:text-[#14B8A6] transition-colors">Confirm Password</label>
                  <div className="relative">
                    <input 
                      type={showConfirmPassword ? "text" : "password"} required value={formData.confirmPassword} onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                      placeholder="Confirm your password"
                      className="w-full px-6 py-4 pr-12 bg-white/[0.02] border border-white/5 rounded-2xl outline-none focus:border-[#14B8A6]/50 focus:bg-white/[0.04] transition-all text-sm font-semibold text-white tracking-widest placeholder:text-white/10"
                    />
                    <button 
                      type="button" 
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-6 top-1/2 -translate-y-1/2 text-white/20 hover:text-[#14B8A6] transition-colors"
                    >
                      {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </div>
              </div>

              {/* Terms Checkbox */}
              <div className="pt-4 flex items-start gap-4 cursor-pointer group" onClick={() => setAcceptedTerms(!acceptedTerms)}>
                  <div className={`w-5 h-5 mt-0.5 rounded flex-shrink-0 border flex items-center justify-center transition-all ${acceptedTerms ? 'bg-[#14B8A6] border-[#14B8A6]' : 'bg-transparent border-white/20 group-hover:border-[#14B8A6]/50'}`}>
                      {acceptedTerms && <div className="w-2 h-2 bg-black rounded-sm"></div>}
                  </div>
                  <p className="text-white/40 text-[11px] leading-relaxed">
                      I agree to the <span className="text-white hover:text-[#14B8A6] transition-colors cursor-pointer">Terms & Conditions</span>. I understand that my data will be processed to deliver financial predictions.
                  </p>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button 
                  type="submit" disabled={loading}
                  className="w-full py-5 bg-white text-black rounded-2xl font-black uppercase tracking-[0.2em] text-[12px] hover:bg-[#14B8A6] active:scale-[0.98] transition-all flex items-center justify-center gap-4 disabled:opacity-50 group/btn shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(20,184,166,0.3)]"
                >
                  <span className="relative z-10">{loading ? "Processing..." : "Create Account"}</span>
                  {!loading && <ArrowRight size={16} className="group-hover/btn:translate-x-2 transition-transform duration-500" />}
                </button>
              </div>
            </form>

            <div className="mt-8 text-center md:text-left">
              <p className="text-white/30 text-[11px] font-black uppercase tracking-[0.2em]">
                Already registered? 
                <Link to="/login" className="text-white hover:text-[#14B8A6] transition-colors ml-3 border-b border-white/20 hover:border-[#14B8A6]/50 pb-1">Sign In</Link>
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Reduced Image Display Side (Less Space) */}
        <div className="hidden md:flex md:w-[35%] bg-[#080808] relative items-center justify-center overflow-hidden h-64 md:h-auto">
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
              <h3 className="text-white font-display text-3xl italic tracking-tight mb-2">Connect your wealth.</h3>
              <p className="text-white/40 text-xs">Automated financial insights.</p>
           </div>
        </div>
      </motion.div>
    </div>
  );
}
