import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserData } from '../context/UserDataContext';
import {
  ChevronLeft,
  ChevronRight,
  Users,
  Shield,
  BookOpen,
  TrendingUp,
  Sparkles
} from 'lucide-react';

export default function OnboardingStep3() {
  const navigate = useNavigate();
  const { userData, updateUserData } = useUserData();

  const [social, setSocial] = useState(userData.behavioral.answers.social || '');
  const [emergency, setEmergency] = useState(userData.behavioral.answers.emergency || '');
  const [budget, setBudget] = useState(userData.behavioral.answers.future || '');
  const [learning, setLearning] = useState(userData.behavioral.answers.learning || '');

  const handleNext = async () => {
    await updateUserData('behavioral.answers.social', social);
    await updateUserData('behavioral.answers.emergency', emergency);
    await updateUserData('behavioral.answers.future', budget);
    await updateUserData('behavioral.answers.learning', learning);
    navigate('/onboarding/step4');
  };

  const questions = [
    { label: 'Do you spend more to keep up with friends or social media?', val: social, set: setSocial, icon: <Users size={18} className="text-primary" />, placeholder: 'e.g. Yes I feel pressure, sometimes, no I don\'t care...' },
    { label: 'Do you have emergency savings to cover 3+ months of expenses?', val: emergency, set: setEmergency, icon: <Shield size={18} className="text-primary" />, placeholder: 'e.g. Yes, partially, no, working on it...' },
    { label: 'Do you have a budget or financial plan for the next 6 months?', val: budget, set: setBudget, icon: <TrendingUp size={18} className="text-primary" />, placeholder: 'e.g. Yes detailed, rough idea, no plan at all...' },
    { label: 'Do you read about saving, investing, or financial tips?', val: learning, set: setLearning, icon: <BookOpen size={18} className="text-primary" />, placeholder: 'e.g. Yes regularly, sometimes, no...' }
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
        <span className="text-[10px] font-mono text-primary animate-pulse tracking-widest">STEP 3 / 4</span>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center p-10">
        <div className="w-full max-w-xl mb-10 space-y-4">
          <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
            <div className="h-full bg-primary w-3/4 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
          </div>
        </div>

        <div className="text-center space-y-3 mb-12 max-w-2xl">
          <h1 className="text-4xl font-black italic tracking-tighter uppercase">Preparedness <span className="text-white/20">& Growth.</span></h1>
          <p className="text-xs font-medium text-white/40 italic uppercase tracking-widest">Final behavioral layer — your financial resilience and learning habits.</p>
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
        <button onClick={() => navigate('/onboarding/step2')} className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-white/20 hover:text-white transition-colors group">
          <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Go Back
        </button>
        <button
          onClick={handleNext}
          disabled={!social || !emergency || !budget || !learning}
          className="px-10 py-4 bg-primary text-black text-[12px] font-black uppercase tracking-[0.3em] rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-primary/20 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          Next Step <ChevronRight size={16} className="inline ml-1" />
        </button>
      </footer>
    </div>
  );
}
