import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, ArrowLeft, Zap, Users, Shield, FileText, BookOpen } from 'lucide-react';

export default function OnboardingStep3() {
  const navigate = useNavigate();
  const [social, setSocial] = useState(localStorage.getItem('finsight_behavioral_social') || '');
  const [emergency, setEmergency] = useState(localStorage.getItem('finsight_behavioral_emergency') || '');
  const [budget, setBudget] = useState(localStorage.getItem('finsight_behavioral_budget') || '');
  const [learning, setLearning] = useState(localStorage.getItem('finsight_behavioral_learning') || '');

  const isComplete = social && emergency && budget && learning;

  const handleContinue = () => {
    if (!isComplete) return;
    localStorage.setItem('finsight_behavioral_social', social);
    localStorage.setItem('finsight_behavioral_emergency', emergency);
    localStorage.setItem('finsight_behavioral_budget', budget);
    localStorage.setItem('finsight_behavioral_learning', learning);
    navigate('/onboarding/step4');
  };

  const QuestionCard = ({ title, options, current, setter, icon: Icon, cols = 2 }) => (
    <div className="space-y-6">
      <div className="flex items-center gap-4 px-4">
        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary border border-primary/20">
          <Icon size={20} />
        </div>
        <h3 className="text-xl font-black italic tracking-tight uppercase">{title}</h3>
      </div>
      <div className={`grid grid-cols-${cols} gap-4 px-4`}>
        {options.map((opt) => (
          <button
            key={opt.val}
            onClick={() => setter(opt.val)}
            className={`p-6 rounded-[2rem] border transition-all text-left flex flex-col justify-between group relative overflow-hidden ${
              current === opt.val 
                ? 'bg-primary/10 border-primary shadow-[0_0_30px_rgba(16,185,129,0.1)]' 
                : 'bg-white/[0.02] border-white/5 hover:border-white/20'
            }`}
          >
            <div className="relative z-10 space-y-1">
              <div className={`text-[10px] font-black uppercase tracking-widest transition-colors ${current === opt.val ? 'text-primary' : 'text-white/40'}`}>Behavior Token</div>
              <div className="text-sm font-bold leading-tight">{opt.label}</div>
            </div>
            {current === opt.val && (
              <div className="absolute right-4 bottom-4">
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
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary">Strategic Alignment // Node 03</span>
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20">Step 03 / 04</span>
        </header>

        <div className="space-y-4 text-center">
            <h1 className="text-5xl font-black italic tracking-tighter leading-none">Define your <span className="text-white/20">Horizon.</span></h1>
            <p className="text-xs font-medium text-white/40 uppercase tracking-[0.3em] italic">Long-term persistence is the foundation of compound intelligence.</p>
        </div>

        <div className="space-y-16">
          <QuestionCard 
            title="Do you feel social pressure to spend?"
            icon={Users}
            options={[
              { label: 'Yes, Feel Pressure', val: 'yes' },
              { label: 'Sometimes', val: 'sometimes' },
              { label: "No, I Don't Care", val: 'no' }
            ]}
            current={social}
            setter={setSocial}
          />

          <QuestionCard 
            title="Emergency Fund Status (3+ months)?"
            icon={Shield}
            options={[
              { label: 'Yes, Fully Funded', val: 'yes' },
              { label: 'Partially Funded', val: 'partial' },
              { label: 'No Reserves', val: 'no' },
              { label: 'Working On It', val: 'working' }
            ]}
            current={emergency}
            setter={setEmergency}
          />

          <QuestionCard 
            title="Have a detailed 6-month budget?"
            icon={FileText}
            options={[
              { label: 'Yes, Active Plan', val: 'yes' },
              { label: 'No Plan', val: 'no' }
            ]}
            current={budget}
            setter={setBudget}
          />

          <QuestionCard 
            title="How often do you read financial content?"
            icon={BookOpen}
            options={[
              { label: 'Regularly (Weekly)', val: 'regularly' },
              { label: 'Sometimes', val: 'sometimes' },
              { label: 'Rarely / Never', val: 'rarely' }
            ]}
            current={learning}
            setter={setLearning}
          />
        </div>

        <div className="flex justify-between items-center pt-10 border-t border-white/5">
            <button 
                onClick={() => navigate('/onboarding/step2')}
                className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-white/20 hover:text-white transition-all group"
            >
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Previous Node
            </button>
            <button 
                onClick={handleContinue}
                disabled={!isComplete}
                className="group relative px-16 py-5 bg-white text-black rounded-2xl font-black text-[12px] uppercase tracking-[0.3em] overflow-hidden transition-all hover:scale-105 active:scale-95 disabled:opacity-30 disabled:grayscale"
            >
                Final Phase <Zap className="inline-block ml-3 mb-1" size={16} />
            </button>
        </div>
      </div>
    </div>
  );
}

