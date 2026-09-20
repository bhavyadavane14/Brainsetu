import React from 'react';
import { Sparkles, Flame, X, ArrowRight, Brain, Compass } from 'lucide-react';
import type { UserProfile } from '../../context/AuthContext';
import { useLanguage } from '../../context/LanguageContext';
import { BrainSetuLogo } from '../../assets/logo/BrainSetuLogo';

interface WelcomeModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: UserProfile | null;
  isNewUser: boolean;
}

export const WelcomeModal: React.FC<WelcomeModalProps> = ({
  isOpen,
  onClose,
  user,
  isNewUser
}) => {
  const { t } = useLanguage();

  if (!isOpen || !user) return null;

  const displayName = user.displayName || 'Learner';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Dimmed Blurred Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/75 backdrop-blur-sm transition-opacity animate-fadeIn" 
        onClick={onClose} 
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-lg bg-slate-900 border border-amber-500/30 rounded-3xl shadow-2xl overflow-hidden z-10 animate-scaleUp text-white">
        
        {/* Top Decorative Gradient Ribbon */}
        <div className="h-2 bg-gradient-to-r from-brand-secondary via-amber-400 to-cyan-400"></div>

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors"
          title="Dismiss"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Header Icon + Badge */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-400/15 border border-amber-400/40 flex items-center justify-center text-2xl shadow-inner flex-shrink-0">
              {isNewUser ? '🎉' : '✨'}
            </div>
            <div>
              <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider ${
                isNewUser 
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' 
                  : 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
              }`}>
                {isNewUser ? t('welcome.newBadge') : t('welcome.returningBadge')}
              </span>
              <h2 className="text-xl sm:text-2xl font-display font-extrabold text-white mt-1 leading-snug">
                {isNewUser 
                  ? t('welcome.newTitle').replace('{name}', displayName)
                  : t('welcome.returningTitle').replace('{name}', displayName)}
              </h2>
            </div>
          </div>

          {/* Subtitle / Encouragement Message */}
          <p className="text-sm text-slate-300 leading-relaxed">
            {isNewUser 
              ? t('welcome.newSubtitle')
              : t('welcome.returningSubtitle')}
          </p>

          {/* Highlights / Stats Section */}
          {isNewUser ? (
            <div className="space-y-3 pt-2">
              <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex items-start gap-3">
                <Brain className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                <div className="text-xs">
                  <span className="font-bold text-slate-200 block">{t('welcome.tip1')}</span>
                  <span className="text-slate-400 text-[11px]">Interactive hands-on modules designed for first-principles conceptual clarity.</span>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex items-start gap-3">
                <Compass className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                <div className="text-xs">
                  <span className="font-bold text-slate-200 block">{t('welcome.tip2')}</span>
                  <span className="text-slate-400 text-[11px]">Spaced retrieval systems that transfer lessons into permanent long-term recall.</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="p-4 rounded-2xl bg-slate-800/90 border border-slate-700 flex flex-col items-center justify-center text-center">
                <div className="w-9 h-9 rounded-xl bg-amber-400/20 text-amber-400 flex items-center justify-center mb-2">
                  <Flame className="w-5 h-5" />
                </div>
                <span className="text-xl font-display font-extrabold text-amber-300">
                  {user.streak || 1} {t('nav.days')}
                </span>
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mt-0.5">
                  {t('welcome.streakLabel')}
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-800/90 border border-slate-700 flex flex-col items-center justify-center text-center">
                <div className="w-9 h-9 rounded-xl bg-cyan-400/20 text-cyan-400 flex items-center justify-center mb-2">
                  <Sparkles className="w-5 h-5" />
                </div>
                <span className="text-xl font-display font-extrabold text-cyan-300">
                  {user.xp || 150} XP
                </span>
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mt-0.5">
                  {t('welcome.xpLabel')}
                </span>
              </div>
            </div>
          )}

          {/* Action CTA Button */}
          <div className="pt-2">
            <button
              type="button"
              onClick={onClose}
              className="w-full py-3.5 px-6 rounded-2xl bg-[#FACC15] hover:bg-[#EAB308] text-slate-950 font-extrabold text-base tracking-wide transition-all shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2"
            >
              <span>{isNewUser ? t('welcome.startBtn') : t('welcome.resumeBtn')}</span>
              <ArrowRight className="w-4 h-4 text-slate-900" />
            </button>
          </div>

        </div>

        {/* Subtle Brand Footer */}
        <div className="px-8 py-3 bg-slate-950/60 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
          <BrainSetuLogo variant="dark" iconSize={24} />
          <span>Building Smarter Minds</span>
        </div>

      </div>
    </div>
  );
};
