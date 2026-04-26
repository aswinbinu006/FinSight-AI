import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, ArrowLeft, Wallet, Calendar, Zap, CreditCard } from 'lucide-react';

export default function OnboardingStep1() {
  const navigate = useNavigate();
  const [payday, setPayday] = useState(localStorage.getItem('finsight_behavioral_payday') || '');
  const [weekend, setWeekend] = useState(localStorage.getItem('finsight_behavioral_weekend') || '');
  const [subs, setSubs] = useState(localStorage.getItem('finsight_behavioral_subs') || '');

  const isComplete = payday && weekend && subs;

  const handleContinue = () => {
    if (!isComplete) return;
    localStorage.setItem('finsight_behavioral_payday', payday);
    localStorage.setItem('finsight_behavioral_weekend', weekend);
    localStorage.setItem('finsight_behavioral_subs', subs);
    navigate('/onboarding/step2');
  };

  const QuestionCard = ({ title, options, current, setter, icon: Icon }) => (
    <div className="space-y-6">
      <div className="flex items-center gap-4 px-4">
        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary border border-primary/20">
          <Icon size={20} />
        </div>
        <h3 className="text-xl font-black italic tracking-tight uppercase">{title}</h3>
      </div>
      <div className="grid grid-cols-2 gap-4 px-4">
        {options.map((opt) => (
          <button
            key={opt.val}
            onClick={() => setter(opt.val)}
            className={`p-6 rounded-[2rem] border transition-all text-left group relative overflow-hidden ${
              current === opt.val 
                ? 'bg-primary/10 border-primary shadow-[0_0_30px_rgba(16,185,129,0.1)]' 
                : 'bg-white/[0.02] border-white/5 hover:border-white/20'
            }`}
          >
            <div className="relative z-10 space-y-1">
              <div className={`text-[10px] font-black uppercase tracking-widest transition-colors ${current === opt.val ? 'text-primary' : 'text-white/40'}`}>Option</div>
              <div className="text-sm font-bold leading-tight">{opt.label}</div>
            </div>
            {current === opt.val && (
              <div className="absolute right-4 top-1/2 -translate-y-1/2">
                <ChevronRight size={16} className="text-primary" />
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-12 font-body selection:bg-primary/30 flex flex-col items-center">
      <div className="w-full max-w-4xl space-y-12 pb-24">
        {/* Header Identity */}
        <header className="flex justify-between items-center w-full">
            <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary">Behavioral Profiling // Node 01</span>
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20">Step 01 / 04</span>
        </header>

        <div className="space-y-4 text-center">
            <h1 className="text-5xl font-black italic tracking-tighter leading-none">Decode your <span className="text-white/20">Spending DNA.</span></h1>
            <p className="text-xs font-medium text-white/40 uppercase tracking-[0.3em] italic">All models require this baseline identity to calibrate accurately.</p>
        </div>

        <div className="space-y-16">
          <QuestionCard 
            title="When salary arrives, what do you do FIRST?"
            icon={Wallet}
            options={[
              { label: 'Save It First', val: 'save' },
              { label: 'Pay Bills', val: 'bills' },
              { label: 'Spend on Myself', val: 'spend' },
              { label: 'Send to Family', val: 'family' }
            ]}
            current={payday}
            setter={setPayday}
          />

          <QuestionCard 
            title="Weekend vs. Weekday spending?"
            icon={Calendar}
            options={[
              { label: 'Spend A Lot More', val: 'more' },
              { label: 'Roughly The Same', val: 'same' },
              { label: 'Less Than Weekdays', val: 'less' }
            ]}
            current={weekend}
            setter={setWeekend}
          />

          <QuestionCard 
            title="Do you track all subscriptions?"
            icon={CreditCard}
            options={[
              { label: 'Yes, I Review Them', val: 'yes' },
              { label: 'No, I Forget Them', val: 'no' },
              { label: 'Sometimes', val: 'sometimes' }
            ]}
            current={subs}
            setter={setSubs}
          />
        </div>

        <div className="flex justify-between items-center pt-10 border-t border-white/5">
            <button 
                onClick={() => navigate('/dashboard')}
                className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-white/20 hover:text-white transition-all group"
            >
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Exit Protocol
            </button>
            <button 
                onClick={handleContinue}
                disabled={!isComplete}
                className="group relative px-16 py-5 bg-white text-black rounded-2xl font-black text-[12px] uppercase tracking-[0.3em] overflow-hidden transition-all hover:scale-105 active:scale-95 disabled:opacity-30 disabled:grayscale"
            >
                Continue Phase <Zap className="inline-block ml-3 mb-1" size={16} />
            </button>
        </div>
      </div>
    </div>
  );
}

