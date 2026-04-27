import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserData } from '../context/UserDataContext';
import {
  ChevronLeft,
  ChevronRight,
  HeartPulse,
  Calendar,
  CreditCard,
  Sparkles
} from 'lucide-react';

export default function OnboardingStep1() {
  const navigate = useNavigate();
  const { userData, updateUserData } = useUserData();

  const [payday, setPayday] = useState(userData.behavioral.answers.payday || '');
  const [weekend, setWeekend] = useState(userData.behavioral.answers.weekend || '');
  const [subs, setSubs] = useState(userData.behavioral.answers.subs || '');

  const handleNext = async () => {
    await updateUserData('behavioral.answers.payday', payday);
    await updateUserData('behavioral.answers.weekend', weekend);
    await updateUserData('behavioral.answers.subs', subs);
    navigate('/onboarding/step2');
  };

  const questions = [
    { label: 'When your salary arrives, what do you do FIRST?', val: payday, set: setPayday, icon: <HeartPulse size={18} className="text-primary" />, placeholder: 'e.g. Save a portion, pay bills, treat myself...' },
    { label: 'How do you spend on weekends compared to weekdays?', val: weekend, set: setWeekend, icon: <Calendar size={18} className="text-primary" />, placeholder: 'e.g. I spend a lot more, about the same, less...' },
    { label: 'Do you track all your apps/subscriptions and what they cost?', val: subs, set: setSubs, icon: <CreditCard size={18} className="text-primary" />, placeholder: 'e.g. Yes I review them, no I forget, sometimes...' }
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
        <span className="text-[10px] font-mono text-primary animate-pulse tracking-widest">STEP 1 / 4</span>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center p-10">
        <div className="w-full max-w-xl mb-10 space-y-4">
          <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
            <div className="h-full bg-primary w-1/4 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
          </div>
        </div>

        <div className="text-center space-y-3 mb-12 max-w-2xl">
          <h1 className="text-4xl font-black italic tracking-tighter uppercase">Your Money <span className="text-white/20">Habits.</span></h1>
          <p className="text-xs font-medium text-white/40 italic uppercase tracking-widest">Answer honestly — this shapes your entire financial AI profile.</p>
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
        <button onClick={() => navigate('/dashboard')} className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-white/20 hover:text-white transition-colors group">
          <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Dashboard
        </button>
        <button
          onClick={handleNext}
          disabled={!payday || !weekend || !subs}
          className="px-10 py-4 bg-primary text-black text-[12px] font-black uppercase tracking-[0.3em] rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-primary/20 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          Next Step <ChevronRight size={16} className="inline ml-1" />
        </button>
      </footer>
    </div>
  );
}
