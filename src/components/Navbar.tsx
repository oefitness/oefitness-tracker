import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  Home,
  BookOpen,
  PlusCircle,
  PiggyBank,
  User,
  Sparkles,
  Activity,
  Sun,
  Moon
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { QuickLogModal } from '@/components/QuickLogModal';
import { useApp } from '@/context/AppContext';

export const Navbar: React.FC = () => {
  const location = useLocation();
  const { userProfile, targets } = useApp();
  const [quickLogOpen, setQuickLogOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains('dark'));

  const toggleTheme = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  };

  const navItems = [
    { to: '/', label: 'Home', icon: Home },
    { to: '/recipes', label: 'Recipes', icon: BookOpen },
    { to: '/budget', label: 'Budget', icon: PiggyBank },
    { to: '/profile', label: 'Profile', icon: User }
  ];

  return (
    <>
      {/* Top Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-md">
        <div className="container max-w-4xl mx-auto px-4 h-14 flex items-center justify-between">
          <NavLink to="/" className="flex items-center gap-2 font-black text-lg text-emerald-600 dark:text-emerald-400">
            <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-xs">
              <Sparkles className="w-4 h-4" />
            </div>
            <span>NutriSense</span>
          </NavLink>

          <div className="flex items-center gap-2">
            {userProfile.garminConnected && (
              <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-semibold">
                <Activity className="w-3.5 h-3.5" />
                <span>Garmin +{userProfile.garminActiveCalories} kcal</span>
              </div>
            )}

            <Button
              size="icon"
              variant="ghost"
              onClick={toggleTheme}
              className="rounded-full h-8 w-8 text-muted-foreground hover:text-foreground"
              title="Toggle Dark Mode"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </Button>
          </div>
        </div>
      </header>

      {/* Bottom Sticky Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 bg-background/90 backdrop-blur-lg border-t pb-safe shadow-lg">
        <div className="container max-w-md mx-auto px-4 h-16 flex items-center justify-between">
          {/* Home */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex flex-col items-center justify-center flex-1 text-xs font-semibold transition-all ${
                isActive ? 'text-emerald-600 dark:text-emerald-400 scale-105' : 'text-muted-foreground hover:text-foreground'
              }`
            }
          >
            <Home className="w-5 h-5 mb-0.5" />
            <span>Home</span>
          </NavLink>

          {/* Recipes */}
          <NavLink
            to="/recipes"
            className={({ isActive }) =>
              `flex flex-col items-center justify-center flex-1 text-xs font-semibold transition-all ${
                isActive ? 'text-emerald-600 dark:text-emerald-400 scale-105' : 'text-muted-foreground hover:text-foreground'
              }`
            }
          >
            <BookOpen className="w-5 h-5 mb-0.5" />
            <span>Recipes</span>
          </NavLink>

          {/* Center Quick Log Floating Button */}
          <div className="flex-1 flex justify-center -mt-5">
            <button
              onClick={() => setQuickLogOpen(true)}
              className="w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center shadow-lg shadow-emerald-600/30 hover:scale-110 active:scale-95 transition-all"
              title="Quick Log Food"
            >
              <PlusCircle className="w-6 h-6" />
            </button>
          </div>

          {/* Budget */}
          <NavLink
            to="/budget"
            className={({ isActive }) =>
              `flex flex-col items-center justify-center flex-1 text-xs font-semibold transition-all ${
                isActive ? 'text-emerald-600 dark:text-emerald-400 scale-105' : 'text-muted-foreground hover:text-foreground'
              }`
            }
          >
            <PiggyBank className="w-5 h-5 mb-0.5" />
            <span>Budget</span>
          </NavLink>

          {/* Profile */}
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `flex flex-col items-center justify-center flex-1 text-xs font-semibold transition-all ${
                isActive ? 'text-emerald-600 dark:text-emerald-400 scale-105' : 'text-muted-foreground hover:text-foreground'
              }`
            }
          >
            <User className="w-5 h-5 mb-0.5" />
            <span>Profile</span>
          </NavLink>
        </div>
      </nav>

      {/* Quick Log Modal */}
      <QuickLogModal
        isOpen={quickLogOpen}
        onClose={() => setQuickLogOpen(false)}
      />
    </>
  );
};