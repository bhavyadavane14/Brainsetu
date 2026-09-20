import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  LogOut, 
  Sparkles, 
  Flame, 
  Home, 
  BookOpen, 
  RefreshCw
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { BrainSetuLogo } from '../assets/logo/BrainSetuLogo';
import { SEO } from '../components/common/SEO';

export const LearningLab: React.FC = () => {
  const { user, logout } = useAuth();
  const [showWelcome, setShowWelcome] = useState(true);
  const [iframeKey, setIframeKey] = useState(1);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  return (
    <>
      <SEO
        title="Neural Memory Lab — BrainSetu Academy Student Portal"
        description="Active interactive simulation environment bridging sensory exploration with lifelong memory mastery."
      />

      <div className="min-h-screen bg-slate-900 text-white flex flex-col">
        
        {/* Portal Navigation & HUD */}
        <header className="bg-brand-navy-900/95 border-b border-slate-800 px-4 sm:px-6 py-3.5 backdrop-blur-md sticky top-0 z-30 shadow-lg">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
            
            {/* Left: Branding & Module Title */}
            <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-start">
              <Link to="/" className="hover:opacity-90 transition-opacity">
                <BrainSetuLogo variant="dark" iconSize={32} />
              </Link>
              <div className="h-6 w-px bg-slate-700 hidden sm:block"></div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-950 text-cyan-400 border border-cyan-800/80">
                  Neural Memory Lab
                </span>
                <span className="text-xs text-slate-400 hidden lg:inline">
                  (Module 3 • 100 Missions)
                </span>
              </div>
            </div>

            {/* Center: Live Student Stats */}
            <div className="flex items-center gap-3 text-xs">
              <div className="px-3 py-1.5 rounded-xl bg-slate-800/90 border border-slate-700 flex items-center gap-2">
                <Flame className="w-4 h-4 text-amber-400" />
                <span className="font-semibold text-slate-200">
                  Streak: <strong className="text-amber-400 font-bold">{user?.streak || 1} Days</strong>
                </span>
              </div>

              <div className="px-3 py-1.5 rounded-xl bg-slate-800/90 border border-slate-700 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span className="font-semibold text-slate-200">
                  Sparks: <strong className="text-cyan-300 font-bold">{user?.xp || 150} XP</strong>
                </span>
              </div>
            </div>

            {/* Right: User Profile & Actions */}
            <div className="flex items-center gap-3 w-full md:w-auto justify-end">
              <div className="flex items-center gap-2 text-right">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-brand-secondary to-brand-primary flex items-center justify-center text-white font-bold text-xs shadow-sm">
                  {user?.displayName ? user.displayName.charAt(0).toUpperCase() : 'S'}
                </div>
                <div className="hidden sm:block text-left text-xs leading-tight">
                  <span className="font-bold text-slate-200 block truncate max-w-[130px]">
                    {user?.displayName || 'Student'}
                  </span>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider">
                    {user?.role === 'parent' ? 'Parent Account' : (user?.grade || 'Student')}
                  </span>
                </div>
              </div>

              <div className="h-5 w-px bg-slate-800"></div>

              <Link
                to="/"
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                title="Return to Main Website"
              >
                <Home className="w-4 h-4" />
              </Link>

              <button
                onClick={handleLogout}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 border border-rose-500/30 text-xs font-semibold transition-colors"
                title="Sign out of BrainSetu Academy"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>

          </div>
        </header>

        {/* Personalized Welcome Banner */}
        {showWelcome && (
          <div className="bg-gradient-to-r from-brand-primary-deep/90 via-brand-navy-900 to-cyan-950 border-b border-cyan-500/30 px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between text-xs sm:text-sm animate-fadeIn shadow-inner">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-base flex-shrink-0">
                ✨
              </div>
              <div>
                <p className="font-bold text-white flex items-center gap-2">
                  <span>Welcome back, {user?.displayName || 'Student'}!</span>
                  <span className="hidden sm:inline-block px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[11px] font-medium">
                    Neural Bridge Active
                  </span>
                </p>
                <p className="text-slate-300 text-xs mt-0.5">
                  Your Learning Lab workspace is ready. Dive into today's memory scaffolding and interactive simulations!
                </p>
              </div>
            </div>
            <button
              onClick={() => setShowWelcome(false)}
              className="text-slate-400 hover:text-white px-2.5 py-1 rounded-lg hover:bg-slate-800 transition-colors text-xs font-semibold flex items-center gap-1"
              title="Close welcome message"
            >
              ✕ <span className="hidden sm:inline">Dismiss</span>
            </button>
          </div>
        )}

        {/* Embedded Interactive Module Container */}
        <main className="flex-1 flex flex-col bg-slate-950 relative overflow-hidden">
          
          {/* Sub-bar with module info & reload */}
          <div className="bg-slate-900/60 border-b border-slate-800/80 px-4 sm:px-6 py-2 flex items-center justify-between text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
              <span>Interactive Simulator: Orbit, Atomic, Fractions & Memory Scaffolding</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIframeKey((prev) => prev + 1)}
                className="flex items-center gap-1 text-slate-400 hover:text-slate-200 text-xs"
                title="Reload Module"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Reset View</span>
              </button>
            </div>
          </div>

          {/* Iframe with Neural Memory Lab */}
          <div className="flex-1 w-full relative min-h-[calc(100vh-105px)]">
            <iframe
              key={iframeKey}
              src="/modules/neural-lab/index.html"
              title="BrainSetu Academy: Neural Memory Lab"
              className="w-full h-full absolute inset-0 border-0 bg-slate-900"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            />
          </div>
        </main>

      </div>
    </>
  );
};
