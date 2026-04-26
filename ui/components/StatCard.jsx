import React from 'react';
import { motion as Motion } from 'framer-motion';

const StatCard = ({ label, value, trend, sub, progress = 70, color = 'primary' }) => {
  const colorClass = color === 'red' ? 'bg-red-500' : 'bg-primary';
  const shadowClass = color === 'red' ? 'shadow-[0_0_15px_rgba(239,68,68,0.4)]' : 'shadow-[0_0_15px_rgba(16,185,129,0.4)]';

  return (
    <div className="p-6 space-y-4 bg-[#0A0A0A] backdrop-blur-xl border border-white/10 rounded-[1.5rem] hover:bg-[#111] hover:translate-y-[-4px] transition-all duration-300 group">
      <div className="flex justify-between items-start">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 group-hover:text-primary transition-colors">{label}</p>
        {trend && (
          <span className={`text-[10px] font-bold ${color === 'red' ? 'text-red-400 bg-red-400/10 border-red-400/20' : 'text-primary bg-primary/10 border-primary/20'} px-2 py-0.5 rounded-full border`}>
            {trend}
          </span>
        )}
      </div>
      <div className="flex items-baseline gap-2">
        <h3 className="text-3xl font-bold tracking-tight text-white">{value}</h3>
        {sub && <span className="text-[10px] font-medium text-white/20 uppercase tracking-wider">{sub}</span>}
      </div>
      {progress > 0 && (
        <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
          <Motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            className={`h-full ${colorClass} ${shadowClass}`}
          />
        </div>
      )}
    </div>
  );
};

export default StatCard;
