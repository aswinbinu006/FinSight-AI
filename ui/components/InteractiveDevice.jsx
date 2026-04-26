import { useState, useEffect } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { 
  Home, 
  Heart, 
  Trash2, 
  Target, 
  ChevronRight, 
  TrendingUp, 
  ArrowUpRight, 
  ArrowDownRight,
  Bell,
  Plus
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════
   MOCK DATA
   ═══════════════════════════════════════════════════════════ */
const INITIAL_DATA = {
  balance: 42680.50,
  healthScore: 82,
  savingsRate: 24,
  wasteDetected: 1450,
  goalProgress: 68,
  recentTransactions: [
    { id: 1, name: 'Apple Subscription', amount: -699, category: 'Entertainment', time: '2h ago' },
    { id: 2, name: 'Starbucks Coffee', amount: -450, category: 'Dining', time: '5h ago' },
    { id: 3, name: 'Salary Credit', amount: 85000, category: 'Income', time: '1d ago' },
  ],
  wasteItems: [
    { id: 'w1', name: 'Netflix Premium', price: 649, frequency: 'Monthly', leak: true },
    { id: 'w2', name: 'Cloud Storage', price: 199, frequency: 'Monthly', leak: false },
    { id: 'w3', name: 'Gym Membership', price: 2500, frequency: 'Monthly', leak: true },
  ]
};

/* ═══════════════════════════════════════════════════════════
   SUB-COMPONENTS (SCREENS)
   ═══════════════════════════════════════════════════════════ */

// ── HOME SCREEN ─────────────────────────────────────────────
const HomeScreen = ({ data, onNavigate }) => (
  <div className="flex flex-col gap-5 p-5">
    {/* Header */}
    <div className="flex justify-between items-center pb-4 border-b border-white/[0.06]">
      <div>
        <h2 className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold">Total Balance</h2>
        <div className="flex items-baseline gap-1 mt-1">
          <span className="text-sm font-bold text-white/40">₹</span>
          <Motion.p className="text-3xl font-black text-white tracking-tighter">
            {data.balance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </Motion.p>
        </div>
      </div>
      <div className="w-10 h-10 rounded-2xl bg-white/[0.05] flex items-center justify-center border border-white/[0.08]">
        <Bell size={18} className="text-white/50" />
      </div>
    </div>

    {/* Quick Stats Grid */}
    <div className="grid grid-cols-2 gap-3">
      <Motion.div 
        whileTap={{ scale: 0.96 }}
        onClick={() => onNavigate('health')}
        className="bg-[#10B981]/[0.08] border border-[#10B981]/20 p-5 rounded-[1.8rem] cursor-pointer transition-all hover:bg-[#10B981]/15"
      >
        <div className="w-8 h-8 rounded-lg bg-[#10B981]/15 flex items-center justify-center text-[#059669] mb-3">
          <Heart size={16} />
        </div>
        <p className="text-[9px] text-[#059669] font-bold uppercase tracking-widest">Health</p>
        <p className="text-2xl font-black text-white">{data.healthScore}%</p>
      </Motion.div>
      <Motion.div 
        whileTap={{ scale: 0.96 }}
        onClick={() => onNavigate('waste')}
        className="bg-[#FF6B6B]/[0.08] border border-[#FF6B6B]/20 p-5 rounded-[1.8rem] cursor-pointer transition-all hover:bg-[#FF6B6B]/15"
      >
        <div className="w-8 h-8 rounded-lg bg-[#FF6B6B]/15 flex items-center justify-center text-[#FF6B6B] mb-3">
          <Trash2 size={16} />
        </div>
        <p className="text-[9px] text-[#FF6B6B] font-bold uppercase tracking-widest">Leaks</p>
        <p className="text-2xl font-black text-white">₹{data.wasteDetected}</p>
      </Motion.div>
    </div>

    {/* Spending Chart */}
    <div className="bg-white/[0.03] border border-white/[0.06] rounded-[1.8rem] p-5">
      <div className="flex justify-between items-center mb-5">
        <p className="text-[9px] font-bold text-white/35 uppercase tracking-[0.2em]">Intelligence Flow</p>
        <TrendingUp size={14} className="text-[#059669]" />
      </div>
      <div className="flex items-end gap-2.5 h-20 px-1">
        {[40, 60, 45, 90, 65, 80, 50].map((h, i) => (
          <Motion.div 
            key={i}
            initial={{ height: 0 }}
            animate={{ height: `${h}%` }}
            transition={{ delay: i * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className={`flex-1 rounded-lg ${i === 3 ? 'bg-[#10B981] shadow-[0_4px_12px_rgba(16, 185, 129,0.3)]' : 'bg-white/[0.06]'}`}
          />
        ))}
      </div>
    </div>

    {/* Transactions */}
    <div className="mb-2">
      <div className="flex justify-between items-center mb-4 mt-1">
        <p className="text-[9px] font-bold text-white/30 uppercase tracking-[0.2em]">Recent Activity</p>
        <ChevronRight size={14} className="text-white/20" />
      </div>
      <div className="space-y-2">
        {data.recentTransactions.map((tx) => (
          <div key={tx.id} className="flex items-center justify-between group cursor-pointer p-3 rounded-2xl hover:bg-white/[0.03] border border-transparent hover:border-white/[0.05] transition-all">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-colors ${tx.amount > 0 ? 'bg-[#10B981]/10 text-[#059669] border-[#10B981]/20' : 'bg-white/[0.04] text-white/30 border-white/[0.06]'}`}>
                {tx.amount > 0 ? <Plus size={16} /> : <div className="w-1.5 h-1.5 rounded-full bg-white/20" />}
              </div>
              <div>
                <p className="text-[13px] font-bold text-white/90">{tx.name}</p>
                <p className="text-[10px] text-white/25 font-medium uppercase tracking-tight">{tx.category} • {tx.time}</p>
              </div>
            </div>
            <p className={`text-[13px] font-bold tracking-tight ${tx.amount > 0 ? 'text-[#059669]' : 'text-white/60'}`}>
              {tx.amount > 0 ? '+' : ''}₹{Math.abs(tx.amount).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ── HEALTH SCREEN ───────────────────────────────────────────
const HealthScreen = ({ data }) => (
  <div className="flex flex-col p-6 gap-8">
    <div className="text-center mt-6">
      <p className="text-[10px] text-[#059669] font-black uppercase tracking-[0.4em] mb-8">Structural IQ</p>
      <div className="relative inline-flex items-center justify-center">
        <svg className="w-52 h-52 rotate-[-90deg]">
          <circle cx="104" cy="104" r="94" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-white/[0.05]" />
          <Motion.circle 
            cx="104" cy="104" r="94" stroke="currentColor" strokeWidth="12" fill="transparent" 
            strokeDasharray={2 * Math.PI * 94}
            initial={{ strokeDashoffset: 2 * Math.PI * 94 }}
            animate={{ strokeDashoffset: (2 * Math.PI * 94) * (1 - data.healthScore/100) }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            strokeLinecap="round"
            className="text-[#10B981]"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-6xl font-black text-white tracking-tighter">{data.healthScore}</span>
          <span className="text-[9px] text-white/25 font-bold uppercase tracking-[0.3em] mt-2">Optimal</span>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 gap-3">
      {[
        { label: 'Savings Efficiency', val: 'Optimum', icon: Target },
        { label: 'Asset Velocity', val: 'High', icon: TrendingUp },
        { label: 'Wastage Ratio', val: 'Minimal', icon: Trash2 },
      ].map((item, i) => (
        <Motion.div 
          key={i}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 + i * 0.1 }}
          className="bg-white/[0.03] border border-white/[0.06] rounded-[1.75rem] p-5 flex items-center justify-between hover:bg-white/[0.05] transition-colors"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#10B981]/10 flex items-center justify-center text-[#059669]">
              <item.icon size={18} />
            </div>
            <div>
              <p className="text-[9px] text-white/30 font-bold uppercase tracking-widest">{item.label}</p>
              <p className="text-sm font-bold text-white/80">{item.val}</p>
            </div>
          </div>
          <ArrowUpRight size={14} className="text-white/15" />
        </Motion.div>
      ))}
    </div>
  </div>
);

// ── WASTE SCREEN ───────────────────────────────────────────
const WasteScreen = ({ data }) => {
  const [items, setItems] = useState(data.wasteItems);
  const recover = (id) => setItems(items.filter(i => i.id !== id));

  return (
    <div className="flex flex-col p-6 gap-6">
      <div className="mt-2">
        <h3 className="text-3xl font-black text-white tracking-tighter mb-2">Leaks.</h3>
        <p className="text-sm text-white/40 leading-relaxed font-medium">FinSight AI identified these suboptimal recurring leakages.</p>
      </div>

      <div className="space-y-4">
        <AnimatePresence>
          {items.map((item) => (
            <Motion.div 
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
              className={`p-6 rounded-[2.2rem] border transition-colors ${item.leak ? 'bg-[#FF6B6B]/[0.08] border-[#FF6B6B]/20' : 'bg-white/[0.03] border-white/[0.06]'}`}
            >
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${item.leak ? 'bg-[#FF6B6B]/15 text-[#FF6B6B]' : 'bg-white/[0.05] text-white/30'}`}>
                    <Trash2 size={22} />
                  </div>
                  <div>
                    <p className="text-base font-bold text-white/90">{item.name}</p>
                    <p className="text-[10px] text-white/25 uppercase font-bold tracking-widest mt-0.5">{item.frequency}</p>
                  </div>
                </div>
                <p className="text-xl font-black text-white">₹{item.price}</p>
              </div>
              {item.leak && (
                <Motion.button 
                  whileTap={{ scale: 0.96 }}
                  onClick={() => recover(item.id)}
                  className="w-full py-4 bg-[#FF6B6B] text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-lg shadow-[#FF6B6B]/20"
                >
                  Terminate & Save
                  </Motion.button>
                )}
              </Motion.div>
            ))}
          </AnimatePresence>
          {items.length === 0 && (
            <Motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-16 bg-[#10B981]/[0.08] border border-[#10B981]/20 rounded-[2.5rem]">
              <div className="w-16 h-16 bg-[#10B981]/15 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart size={32} className="text-[#059669]" />
              </div>
              <p className="text-lg font-black text-white">Zero Leaks</p>
              <p className="text-[10px] text-[#059669] mt-1 uppercase font-black tracking-[0.2em]">Efficiency 100%</p>
            </Motion.div>
          )}
        </div>
      </div>
    );
};

// ── GOAL SCREEN ─────────────────────────────────────────────
const GoalScreen = ({ data }) => (
  <div className="flex flex-col p-6 gap-6">
    <div className="bg-white/[0.03] border border-white/[0.06] rounded-[2.8rem] p-8 text-center relative overflow-hidden mt-2 group">
      <div className="relative z-10">
        <div className="w-16 h-16 bg-[#10B981] text-white rounded-[1.8rem] flex items-center justify-center mx-auto mb-8 shadow-xl shadow-[#10B981]/20">
          <Target size={32} strokeWidth={2.5} />
        </div>
        <h3 className="text-2xl font-black text-white tracking-tight mb-2">Tesla Model 3</h3>
        <p className="text-[10px] text-[#059669] uppercase tracking-[0.4em] font-black mb-10">Accumulation Phase</p>
        
        <div className="flex justify-between items-baseline mb-3 px-1">
          <p className="text-[9px] font-bold text-white/20 tracking-widest uppercase">Progress</p>
          <p className="text-3xl font-black text-white tracking-tighter">{data.goalProgress}%</p>
        </div>
        <div className="w-full h-3 bg-white/[0.06] rounded-full overflow-hidden mb-10 p-0.5">
          <Motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${data.goalProgress}%` }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="h-full bg-[#10B981] rounded-full shadow-[0_2px_8px_rgba(16, 185, 129,0.4)]"
          />
        </div>

        <div className="grid grid-cols-2 gap-3 text-left">
          <div className="bg-white/[0.04] p-4 rounded-2xl border border-white/[0.06]">
            <p className="text-[8px] text-white/25 uppercase font-bold tracking-widest mb-1.5">Target</p>
            <p className="text-sm font-bold text-white/80">₹12.50L</p>
          </div>
          <div className="bg-white/[0.04] p-4 rounded-2xl border border-white/[0.06]">
            <p className="text-[8px] text-white/25 uppercase font-bold tracking-widest mb-1.5">Velocity</p>
            <p className="text-sm font-bold text-[#059669]">+₹45K/mo</p>
          </div>
        </div>
      </div>
    </div>

    <Motion.button 
      whileTap={{ scale: 0.97 }}
      className="w-full py-5 bg-[#10B981] text-white rounded-full font-black text-[11px] uppercase tracking-[0.4em] shadow-2xl shadow-[#10B981]/20 hover:shadow-[#10B981]/30 transition-shadow mt-2"
    >
      Accelerate Growth
    </Motion.button>
  </div>
);

/* ═══════════════════════════════════════════════════════════
   MAIN SIMULATOR
   ═══════════════════════════════════════════════════════════ */

export default function InteractiveDevice() {
  const [activeScreen, setActiveScreen] = useState('home');
  const [appData, setAppData] = useState(INITIAL_DATA);
  
  // 3D Tilt State
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [shimmerX, setShimmerX] = useState(50);
  const [shimmerY, setShimmerY] = useState(50);

  const handleMouseMove = (e) => {
    const card = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - card.left;
    const y = e.clientY - card.top;
    const centerX = card.width / 2;
    const centerY = card.height / 2;
    
    // Tilt calculation (Max 15 degrees)
    setRotateX(((y - centerY) / centerY) * -12);
    setRotateY(((x - centerX) / centerX) * 12);
    
    // Shimmer position based on cursor
    setShimmerX((x / card.width) * 100);
    setShimmerY((y / card.height) * 100);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    // Restore global scrolling
    document.body.style.overflow = 'auto';
  };

  const handleMouseEnter = () => {
    // Isolate scrolling to the device
    document.body.style.overflow = 'hidden';
  };

  const handleWheel = (e) => {
    // Explicitly stop event propagation to prevent global GSAP/Lenis from seeing the scroll
    e.stopPropagation();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setAppData(prev => ({
        ...prev,
        balance: prev.balance + (Math.random() > 0.5 ? 1 : -1) * 0.45
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const renderContent = () => {
    switch (activeScreen) {
      case 'home': return <HomeScreen data={appData} onNavigate={setActiveScreen} />;
      case 'health': return <HealthScreen data={appData} />;
      case 'waste': return <WasteScreen data={appData} />;
      case 'goal': return <GoalScreen data={appData} />;
      default: return <HomeScreen data={appData} onNavigate={setActiveScreen} />;
    }
  };

  return (
    <div 
      className="relative perspective-3000 py-10" 
      onMouseMove={handleMouseMove} 
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      {/* 3D Container */}
      <Motion.div 
        animate={{ rotateX, rotateY }}
        transition={{ type: "spring", stiffness: 100, damping: 30, mass: 1 }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative mx-auto w-[335px] h-[690px]"
      >
        {/* Phone Case - DARK GLASS BEZEL */}
        <div className="relative h-full w-full bg-[#0A0A0A] rounded-[3.8rem] border-[10px] border-[#111111] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden">
          
          {/* Internal Screen - DARK THEME */}
          <div 
            className="h-full w-full bg-[#000000] pt-12 pb-24 overflow-y-auto no-scrollbar relative selection:bg-teal-500/30"
            onWheel={handleWheel}
            onTouchMove={handleWheel}
          >
            
            {/* Screen Content Wrapper */}
            <div className="text-white">
              <AnimatePresence mode="wait">
                <Motion.div
                  key={activeScreen}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full"
                >
                  <div className="simulator-dark-theme">
                    {renderContent()}
                  </div>
                </Motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom Tab Navigation */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-[#000000]/90 backdrop-blur-2xl border-t border-white/[0.06] px-6 pt-1 flex items-center justify-between z-40">
              {[
                { id: 'home', icon: Home, label: 'Home' },
                { id: 'health', icon: Heart, label: 'Health' },
                { id: 'add', icon: Plus, large: true },
                { id: 'waste', icon: Trash2, label: 'Waste' },
                { id: 'goal', icon: Target, label: 'Goals' },
              ].map((tab) => (
                <Motion.button
                  key={tab.id}
                  whileTap={{ scale: 0.85 }}
                  onClick={() => tab.id !== 'add' && setActiveScreen(tab.id)}
                  className={`flex flex-col items-center justify-center transition-all ${
                    tab.large 
                      ? 'w-13 h-13 bg-[#10B981] text-white rounded-2xl -translate-y-6 shadow-2xl shadow-[#10B981]/30' 
                      : `w-11 h-11 rounded-2xl ${activeScreen === tab.id ? 'text-[#059669] bg-[#059669]/[0.08]' : 'text-white/20'}`
                  }`}
                >
                  <tab.icon size={tab.large ? 24 : 18} strokeWidth={tab.id === activeScreen ? 2.5 : 2} />
                  {!tab.large && (
                    <span className={`text-[7px] font-black uppercase tracking-widest mt-1.5 ${activeScreen === tab.id ? 'opacity-100' : 'opacity-0'}`}>
                      {tab.label}
                    </span>
                  )}
                </Motion.button>
              ))}
            </div>
          </div>

          {/* Notch / Dynamic Island */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-[#111111] rounded-b-2xl z-50 flex items-center justify-center border-x border-b border-black/10">
            <div className="w-10 h-1 bg-white/15 rounded-full" />
          </div>

          {/* 3D Specular Shimmer Layer */}
          <div 
            className="absolute inset-0 pointer-events-none z-[100] opacity-40 mix-blend-overlay"
            style={{ 
              background: `radial-gradient(circle at ${shimmerX}% ${shimmerY}%, rgba(255,255,255,0.8) 0%, transparent 60%)` 
            }}
          />

          {/* Screen Bevel Highlight Effect */}
          <div className="absolute inset-0 pointer-events-none border-[2px] border-white/20 rounded-[3.8rem] z-50" />
        </div>

      {/* 3D Depth Sides (to make it look thick) */}
        <div 
          className="absolute inset-0 z-[-1] bg-[#222222] rounded-[3.8rem]"
          style={{ transform: "translateZ(-20px)" }}
        />

        {/* Dynamic Shadow that moves inversely to tilt */}
        <Motion.div 
          animate={{ 
            x: rotateY * -2, 
            y: rotateX * 2,
            scale: 0.95,
            opacity: 0.2 + (Math.abs(rotateX) + Math.abs(rotateY)) / 100
          }}
          className="absolute inset-0 z-[-2] bg-[#004D40] blur-[40px] rounded-[3.8rem]"
        />
      </Motion.div>
    </div>
  );
}
