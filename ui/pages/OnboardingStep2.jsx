import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserData } from '../context/UserDataContext';
import {
  ChevronLeft,
  ChevronRight,
  ShoppingBag,
  Target,
  HeartPulse,
  Sparkles,
  Loader2
} from 'lucide-react';

export default function OnboardingStep2() {
  const navigate = useNavigate();
  const { userData, updateUserData, loading: contextLoading, authUser } = useUserData();

  // Redirect if not logged in and not loading
  React.useEffect(() => {
    if (!contextLoading && !authUser) {
      navigate('/login');
    }
  }, [contextLoading, authUser, navigate]);

  const [impulse, setImpulse] = useState('');
  const [goalComp, setGoalComp] = useState('');
  const [stress, setStress] = useState('');

  // Scroll to top on mount
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Sync with context once loaded
  React.useEffect(() => {
    if (!contextLoading && userData.behavioral?.answers) {
      setImpulse(userData.behavioral.answers.impulse || '');
      setGoalComp(userData.behavioral.answers.goal || '');
      setStress(userData.behavioral.answers.stress || '');
    }
  }, [contextLoading, userData.behavioral?.answers]);

  if (contextLoading || !authUser) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="animate-spin text-primary w-12 h-12" />
          <p className="text-[10px] uppercase font-bold tracking-[0.4em] text-primary animate-pulse">Syncing Psychology...</p>
        </div>
      </div>
    );
  }

  const handleNext = async () => {
    await updateUserData('behavioral.answers.impulse', impulse);
    await updateUserData('behavioral.answers.goal', goalComp);
    await updateUserData('behavioral.answers.stress', stress);
    navigate('/onboarding/step3');
  };

  const questions = [
    { label: 'How often do you buy things without planning beforehand?', val: impulse, set: setImpulse, icon: <ShoppingBag size={18} className="text-primary" />, placeholder: 'e.g. Often impulsively, sometimes, almost never...' },
    { label: 'Have you ever set a savings goal and actually completed it?', val: goalComp, set: setGoalComp, icon: <Target size={18} className="text-primary" />, placeholder: 'e.g. Yes many times, once, tried but failed, never...' },
    { label: 'When you feel stressed about money, what do you do?', val: stress, set: setStress, icon: <HeartPulse size={18} className="text-primary" />, placeholder: 'e.g. Spend to feel better, cut back, ask for help...' }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-body flex flex-col selection:bg-primary/30">
      <header className="h-20 border-b border-white/5 flex items-center justify-between px-10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Sparkles size={16} className="text-black" />
          </div>
          <span className="text-[10px] font-black uppercase tracking-[0.4em] italic">Behavioral Profile</span>
        </div>
        <span className="text-[10px] font-mono text-primary animate-pulse tracking-widest">STEP 2 / 4</span>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center p-10">
        <div className="w-full max-w-xl mb-10 space-y-4">
          <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
            <div className="h-full bg-primary w-2/4 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
          </div>
        </div>

        <div className="text-center space-y-3 mb-12 max-w-2xl">
          <h1 className="text-4xl font-black italic tracking-tighter uppercase">Spending <span className="text-white/20">Psychology.</span></h1>
          <p className="text-xs font-medium text-white/40 italic uppercase tracking-widest">These answers help the AI understand your spending triggers.</p>
        </div>

        <div className="w-full max-w-xl space-y-6">
          {questions.map((q, i) => (
            <div key={i} className="bg-[#0A0A0A] border border-white/5 p-6 rounded-[2rem] space-y-3 hover:border-primary/20 transition-all">
              <div className="flex items-center gap-3">
                {q.icon}
                <label className="text-sm font-bold">{q.label}</label>
              </div>
              <textarea
                value={q.val}
                onChange={(e) => q.set(e.target.value)}
                placeholder={q.placeholder}
                rows={2}
                className="w-full bg-white/[0.03] border border-white/5 rounded-xl px-5 py-4 text-sm font-medium focus:outline-none focus:border-primary/30 transition-all placeholder:text-white/10 resize-none"
              />
            </div>
          ))}
        </div>
      </main>

      <footer className="h-24 border-t border-white/5 px-12 flex justify-between items-center bg-black/80 backdrop-blur-xl">
        <button onClick={() => navigate('/onboarding/step1')} className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-white/20 hover:text-white transition-colors group">
          <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Go Back
        </button>
        <button
          onClick={handleNext}
          disabled={!impulse || !goalComp || !stress}
          className="px-10 py-4 bg-primary text-black text-[12px] font-black uppercase tracking-[0.3em] rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-primary/20 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          Next Step <ChevronRight size={16} className="inline ml-1" />
        </button>
      </footer>
    </div>
  );
}
