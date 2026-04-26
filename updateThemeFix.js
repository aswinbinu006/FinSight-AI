import fs from 'fs';

let content = fs.readFileSync('src/pages/Landing.jsx', 'utf8');

// Background fixes
content = content.replaceAll('bg-[#F0F4F8]', 'bg-[#0B0F1A]');
content = content.replaceAll('bg-[#E6ECF2]', 'bg-[#0B0F1A]');
content = content.replaceAll('bg-[#F0F4F8]/60', 'bg-white/[0.03]');
content = content.replaceAll('bg-white p-10', 'bg-[#111827] p-10');
content = content.replaceAll('bg-white p-8', 'bg-[#111827] p-8');
content = content.replaceAll('bg-[#0B0F1A] p-10', 'bg-[#111827] p-10');
content = content.replaceAll('bg-white', 'bg-[#111827]'); // Replace base white bgs with dark

// Invert text and border colors
content = content.replaceAll('text-[#0B0F1A]/60', 'text-white/60');
content = content.replaceAll('text-[#0B0F1A]/50', 'text-white/50');
content = content.replaceAll('text-[#0B0F1A]/45', 'text-white/45');
content = content.replaceAll('text-[#0B0F1A]/40', 'text-white/40');
content = content.replaceAll('text-[#0B0F1A]/30', 'text-white/30');
content = content.replaceAll('text-[#0B0F1A]/15', 'text-white/15');
content = content.replaceAll('text-[#0B0F1A]', 'text-white');
content = content.replaceAll('border-[#0B0F1A]/[0.05]', 'border-white/[0.05]');
content = content.replaceAll('border-[#0B0F1A]/[0.06]', 'border-white/[0.06]');
content = content.replaceAll('border-[#0B0F1A]/[0.04]', 'border-white/[0.04]');
content = content.replaceAll('border-[#0B0F1A]/10', 'border-white/10');
content = content.replaceAll('border-[#0B0F1A]/5', 'border-white/5');
content = content.replaceAll('bg-[#0B0F1A]/8', 'bg-white/10');
content = content.replaceAll('bg-[#0B0F1A]/10', 'bg-white/10');
content = content.replaceAll('text-[#0B0F1A]/8', 'text-white/10');

// Hero Copy
content = content.replaceAll(`Master your <br/> \n          <span className="text-[#6366F1] italic font-light">financial path.</span>`, `Understand Your Money. <br/> \n          <span className="text-[#6366F1] font-light">Fix Your Habits.</span>`);
content = content.replaceAll(`FinSight AI is a premium intelligence platform for modern wealth builders. \n          Unifying behavioral logic with predictive trajectory modeling.`, `We analyze your habits and show where your money is going wrong.`);

// Features Cards Copy
content = content.replaceAll(`Predictive Engine`, `Health Score`);
content = content.replaceAll(`Predictive Wealth Logic.`, `Your Financial Health Score.`);
content = content.replaceAll(`Analyze multi-vector behavioral data to reveal your net-worth trajectory 12 months in advance.`, `See exactly where you stand, driven entirely by your real, everyday actions.`);

content = content.replaceAll(`Unrivaled <br/>Precision.`, `Clear <br/>Diagnostics.`);

content = content.replaceAll(`Privacy by Design.`, `Secure By Default.`);
content = content.replaceAll(`Locally grounded analysis. Your financial data stays under your direct sovereignty.`, `Private, encrypted analysis. Your financial data stays under your direct control.`);

content = content.replaceAll(`Recovery Engine`, `Waste Tracking`);
content = content.replaceAll(`Wealth Drain Recovery.`, `Where You're Losing Money.`);
content = content.replaceAll(`Identifying structural leakages in real-time. We optimize every rupee so your capital works harder.`, `Instantly see exactly where you are losing money to unnecessary fees, bad habits, and subscriptions.`);


content = content.replaceAll(`Built for <span className="italic font-light text-white/50">precision.</span>`, `Built for <span className="font-light text-[#3B82F6]">action.</span>`);
content = content.replaceAll(`Every feature is designed to reduce noise and maximize financial clarity.`, `Everything you need to understand your behavior and fix your spending.`);

content = content.replaceAll(`Begin your journey<br className="hidden md:block"/> to <span className="text-[#6366F1]">financial mastery.</span>`, `Start your free<br className="hidden md:block"/> <span className="text-[#3B82F6]">financial analysis.</span>`);
content = content.replaceAll(`Experience AI-powered wealth intelligence, designed for your individual journey.`, `Understand your money and fix your habits in under two minutes.`);

// Glow adjustments
content = content.replaceAll(`blur-[160px]`, `blur-[160px] opacity-40`); // just knock down the massive blur opacity

fs.writeFileSync('src/pages/Landing.jsx', content);
