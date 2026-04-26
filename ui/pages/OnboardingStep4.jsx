import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, ArrowLeft, Wand2, Calculator, IndianRupee, Loader2, CheckCircle2 } from 'lucide-react';
import { scoreBehavioralAnswers, getBehavioralAnswersFromStorage } from '../services/behavioralService';
import { getCurrentUser } from '../firebase/auth';
import { saveBehavioralData, saveFinancialData } from '../firebase/firestore';

export default function OnboardingStep4() {
  const navigate = useNavigate();
  const [income, setIncome] = useState(localStorage.getItem('finsight_income') || '');
  const [emi, setEmi] = useState(localStorage.getItem('finsight_emi') || '');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const formatINR = (val) => {
    if (!val) return '';
    return new Intl.NumberFormat('en-IN').format(val);
  };

  const handleComplete = async () => {
    if (!income) return;
    
    setLoading(true);
    setError('');
    
    try {
      const user = getCurrentUser();
      if (!user) {
        throw new Error('User not authenticated');
      }
      
      // Save income and EMI to localStorage (for backward compatibility)
      localStorage.setItem('finsight_income', income);
      localStorage.setItem('finsight_emi', emi || '0');
      
      // Get all behavioral answers
      const answers = getBehavioralAnswersFromStorage();
      
      // Send to backend for Gemini scoring
      const scores = await scoreBehavioralAnswers(answers);
      
      // Store scores in localStorage (for backward compatibility)
      localStorage.setItem('finsight_behavioral_scores', JSON.stringify(scores));
      localStorage.setItem('finsight_behavioral_completed', 'true');
      localStorage.setItem('finsight_onboarded', 'true');
      
      // Save to Firestore
      await saveBehavioralData(user.uid, { answers, scores });
      await saveFinancialData(user.uid, { income, emi: emi || '0' });
      
      // Navigate to dashboard
      setTimeout(() => {
        navigate('/dashboard');
      }, 1000);
      
    } catch (err) {
      console.error('Error completing onboarding:', err);
      setError('Failed to process your profile. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-12 font-body selection:bg-primary/30 flex flex-col items-center">
      <div className="w-full max-w-4xl space-y-12 pb-24">
        {/* Header Identity */}
        <header className="flex justify-between items-center w-full">
            <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary">Quantitative Core // Node 04</span>
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20">Step 04 / 04</span>
        </header>

        <div className="space-y-4 text-center">
            <h1 className="text-5xl font-black italic tracking-tighter leading-none">Initialize <span className="text-white/20">Terminal.</span></h1>
            <p className="text-xs font-medium text-white/40 uppercase tracking-[0.3em] italic">Finalizing the hard metrics for your financial health simulation.</p>
        </div>

        <div className="space-y-20">
          <div className="space-y-8">
            <div className="flex items-center gap-4 px-4">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary border border-primary/20">
                <IndianRupee size={20} />
              </div>
              <h3 className="text-2xl font-black italic tracking-tighter uppercase">Monthly Income Velocity</h3>
            </div>
            <div className="relative group px-4">
                <span className="absolute left-12 top-1/2 -translate-y-1/2 text-4xl font-bold text-white/10 group-focus-within:text-primary transition-colors italic">₹</span>
                <input 
                    type="number"
                    value={income}
                    onChange={(e) => setIncome(e.target.value)}
                    disabled={loading}
                    className="w-full bg-white/[0.02] border border-white/5 rounded-[2.5rem] py-12 pl-24 pr-12 text-6xl font-black italic outline-none focus:border-primary/30 focus:bg-white/5 transition-all text-center tracking-tighter disabled:opacity-50"
                    placeholder="00,000"
                />
                <div className="mt-4 text-center">
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">Current Baseline: {formatINR(income)}</span>
                </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex items-center gap-4 px-4">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary border border-primary/20">
                <Calculator size={20} />
              </div>
              <h3 className="text-2xl font-black italic tracking-tighter uppercase">Total EMI Burden</h3>
            </div>
            <div className="relative group px-4">
                <span className="absolute left-12 top-1/2 -translate-y-1/2 text-2xl font-bold text-white/10 group-focus-within:text-primary transition-colors italic">₹</span>
                <input 
                    type="number"
                    value={emi}
                    onChange={(e) => setEmi(e.target.value)}
                    disabled={loading}
                    className="w-full bg-white/[0.02] border border-white/5 rounded-[2rem] py-8 pl-20 pr-8 text-4xl font-black italic outline-none focus:border-primary/30 focus:bg-white/5 transition-all text-center tracking-tighter disabled:opacity-50"
                    placeholder="0,000"
                />
                <p className="mt-4 text-center text-[10px] font-bold text-white/20 uppercase tracking-widest">Include all loans, credit cards, and fixed monthly obligations.</p>
            </div>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="px-4">
            <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-6 text-center">
              <p className="text-sm text-red-400">{error}</p>
            </div>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="px-4">
            <div className="bg-primary/5 border border-primary/10 rounded-[2.5rem] p-12 text-center space-y-6">
              <div className="flex justify-center">
                <Loader2 size={48} className="text-primary animate-spin" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-black italic uppercase tracking-tight">Analyzing Your Profile</h3>
                <p className="text-[10px] font-black uppercase tracking-widest text-white/40 italic">
                  Processing behavioral patterns through AI engine...
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-between items-center pt-10 border-t border-white/5">
            <button 
                onClick={() => navigate('/onboarding/step3')}
                disabled={loading}
                className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-white/20 hover:text-white transition-all group disabled:opacity-30"
            >
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Previous Node
            </button>
            <button 
                onClick={handleComplete}
                disabled={!income || loading}
                className="group relative px-20 py-6 bg-primary text-black rounded-3xl font-black text-[14px] uppercase tracking-[0.4em] overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_20px_60px_rgba(16,185,129,0.3)] disabled:opacity-30 disabled:grayscale disabled:cursor-not-allowed"
            >
                {loading ? (
                  <>
                    <Loader2 className="inline-block mr-4 mb-1 animate-spin" size={18} />
                    Processing...
                  </>
                ) : (
                  <>
                    Initialize Terminal <Wand2 className="inline-block ml-4 mb-1" size={18} />
                  </>
                )}
            </button>
        </div>
      </div>
    </div>
  );
}

