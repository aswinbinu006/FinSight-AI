import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutGrid, Activity, Zap, Target, Brain, 
  Settings, LogOut 
} from 'lucide-react';
import { logout } from '../firebase/auth';
import { useUserData } from '../context/UserDataContext';

const Sidebar = () => {
  const { userData } = useUserData();
  const location = useLocation();
  const navigate = useNavigate();
  
  const navItems = [
    { to: '/dashboard', icon: LayoutGrid, label: 'Dashboard' },
    { 
      to: userData.behavioral?.completed ? '/health/dashboard' : '/health', 
      icon: Activity, 
      label: 'Health' 
    },
    { to: '/waste', icon: Zap, label: 'Waste' },
    { to: '/goals', icon: Target, label: 'Goals' },
    { to: '/copilot', icon: Brain, label: 'Co-Pilot' },
    { to: '/settings', icon: Settings, label: 'Settings' },
  ];

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (err) {
      console.error('Logout failed:', err);
    }
  };

  return (
    <aside className="fixed left-6 top-6 bottom-6 w-16 rounded-[2rem] bg-[#0A0A0A] border border-white/5 flex flex-col items-center py-8 justify-between z-50 backdrop-blur-xl shadow-2xl">
      <div className="flex flex-col items-center gap-8">
        <Link to="/" className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-black shadow-lg shadow-primary/20 group hover:scale-105 transition-transform">
          <span className="font-black tracking-tighter">FS</span>
        </Link>
        <nav className="flex flex-col gap-6">
          {navItems.map((item, i) => {
            const isActive = location.pathname === item.to || (item.to !== '/dashboard' && location.pathname.startsWith(item.to));
            return (
              <Link 
                key={i} to={item.to} 
                className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${isActive ? 'bg-primary/10 text-primary border border-primary/20 shadow-[0_0_20px_rgba(16,185,129,0.1)]' : 'text-white/20 hover:text-white hover:bg-white/5'}`}
                title={item.label}
              >
                <item.icon size={18} />
              </Link>
            );
          })}
        </nav>
      </div>
      <button 
        onClick={handleLogout}
        className="w-9 h-9 rounded-xl flex items-center justify-center text-white/20 hover:text-red-400 hover:bg-red-400/10 transition-all font-bold"
        title="Sign Out"
      >
        <LogOut size={18} />
      </button>
    </aside>
  );
};

export default Sidebar;
