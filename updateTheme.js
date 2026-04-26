const fs = require('fs');
let content = fs.readFileSync('src/pages/Landing.jsx', 'utf8');

// Background fixes (removing the white sections)
content = content.replace(/bg-\[#F0F4F8\]/g, 'bg-[#0B0F1A]');
content = content.replace(/bg-\[#E6ECF2\]/g, 'bg-[#0B0F1A]');
content = content.replace(/bg-\[#E6ECF2\]/g, 'bg-[#0B0F1A]');
content = content.replace(/bg-\[#F0F4F8\]\/60/g, 'bg-[#111827]');
content = content.replace(/bg-white p-10/g, 'bg-[#111827] p-10');
content = content.replace(/bg-white p-8/g, 'bg-[#111827] p-8');
content = content.replace(/bg-\[#0B0F1A\] p-10/g, 'bg-[#111827] p-10');

// Invert text and border colors in those former white sections
content = content.replace(/text-\[#0B0F1A\]\/60/g, 'text-white/60');
content = content.replace(/text-\[#0B0F1A\]\/50/g, 'text-white/50');
content = content.replace(/text-\[#0B0F1A\]\/45/g, 'text-white/45');
content = content.replace(/text-\[#0B0F1A\]\/40/g, 'text-white/40');
content = content.replace(/text-\[#0B0F1A\]\/30/g, 'text-white/30');
content = content.replace(/text-\[#0B0F1A\]\/15/g, 'text-white/15');
content = content.replace(/text-\[#0B0F1A\]/g, 'text-white');
content = content.replace(/border-\[#0B0F1A\]\/\[0\.05\]/g, 'border-white/[0.05]');
content = content.replace(/border-\[#0B0F1A\]\/\[0\.06\]/g, 'border-white/[0.06]');
content = content.replace(/border-\[#0B0F1A\]\/\[0\.04\]/g, 'border-white/[0.04]');
content = content.replace(/border-\[#0B0F1A\]\/10/g, 'border-white/10');
content = content.replace(/border-\[#0B0F1A\]\/5/g, 'border-white/5');
content = content.replace(/bg-\[#0B0F1A\]\/8/g, 'bg-white/10');

// Copy Reductions
content = content.replace(/Master your <br\/> \n          <span className="text-\[#6366F1\] italic font-light">financial path\.<\/span>/g, 'Understand Your Money. <br/> <span className="text-[#6366F1] font-light">Fix Your Habits.</span>');
content = content.replace(/FinSight AI is a premium intelligence platform for modern wealth builders\.\s*Unifying behavioral logic with predictive trajectory modeling\./g, 'We analyze your habits and show where your money is going wrong.');

content = content.replace(/Predictive Engine<\/span>/g, 'Health Score</span>');
content = content.replace(/Predictive Wealth Logic\./g, 'Your Financial Health Score.');
content = content.replace(/Analyze multi-vector behavioral data to reveal your net-worth trajectory 12 months in advance\./g, 'See exactly where you stand, driven entirely by your real, everyday actions.');

content = content.replace(/Unrivaled <br\/>Precision\./g, 'Clear <br/>Diagnostics.');

content = content.replace(/Privacy by Design\./g, 'Secure By Default.');
content = content.replace(/Locally grounded analysis\. Your financial data stays under your direct sovereignty\./g, 'Private, encrypted analysis. Your financial data stays under your direct control.');

content = content.replace(/Recovery Engine<\/span>/g, 'Waste Tracking</span>');
content = content.replace(/Wealth Drain Recovery\./g, "Where You're Losing Money.");
content = content.replace(/Identifying structural leakages in real-time\. We optimize every rupee so your capital works harder\./g, 'Instantly see exactly where you are losing money to unnecessary fees, bad habits, and subscriptions.');

content = content.replace(/Built for <span className="italic font-light text-white\/50">precision\.<\/span>/g, 'Built for <span className="font-light text-[#3B82F6]">action.</span>');
content = content.replace(/Every feature is designed to reduce noise and maximize financial clarity\./g, 'Everything you need to understand your behavior and fix your spending.');

content = content.replace(/Begin your journey<br className="hidden md:block"\/> to <span className="text-\[#6366F1\]">financial mastery\.<\/span>/g, 'Start your free<br className="hidden md:block"/> <span className="text-[#3B82F6]">financial analysis.</span>');
content = content.replace(/Experience AI-powered wealth intelligence, designed for your individual journey\./g, 'Understand your money and fix your habits in under two minutes.');
content = content.replace(/Create Free Account/g, 'Start Free Analysis');

fs.writeFileSync('src/pages/Landing.jsx', content);
