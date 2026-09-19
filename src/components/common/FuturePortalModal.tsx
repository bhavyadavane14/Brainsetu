import React, { useState } from 'react';
import { X, Lock, Sparkles, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Button } from './Button';

interface FuturePortalModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultRole?: 'Student' | 'Parent' | 'Teacher';
}

export const FuturePortalModal: React.FC<FuturePortalModalProps> = ({
  isOpen,
  onClose,
  defaultRole = 'Student'
}) => {
  const [role, setRole] = useState<'Student' | 'Parent' | 'Teacher'>(defaultRole);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleNotifyMe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setTimeout(() => {
        setEmail('');
      }, 3000);
    }
  };

  const portalFeatures = {
    Student: [
      'Personalized daily practice missions & streak rewards',
      'Intellia360 AI learning buddy with Socratic hints',
      'Visual interactive formula vault & memory games',
      'Diagnostic test history & conceptual mastery radar'
    ],
    Parent: [
      'Real-time cognitive growth & attention span tracking',
      'Bi-weekly mentor consultation logs & notes',
      'Syllabus progress & consistency benchmarks',
      'Direct WhatsApp/SMS milestone notifications'
    ],
    Teacher: [
      'Live student diagnostic & error matrix analyzer',
      'Adaptive homework & tiered challenge dispatcher',
      'Formative milestone rubric evaluators',
      'Automated parent progress report generator'
    ]
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-navy-900/70 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-xl p-6 sm:p-8 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Decorative Top Accent */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent"></div>

        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2.5 mb-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-100 text-brand-secondary border border-cyan-200">
            <Sparkles className="w-3.5 h-3.5" />
            Phase 2 Architecture Ready
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-800">
            <Lock className="w-3 h-3" /> Coming Soon
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-display font-bold text-brand-primary-deep">
          BrainSetu Learning Hub & Portals
        </h3>
        <p className="mt-1 text-sm text-brand-slate-muted">
          Our Phase 1 frontend is live. Secure authentication, LMS dashboards, and AI analytics are scheduled for the next phase.
        </p>

        {/* Role Selector Tabs */}
        <div className="flex p-1 mt-5 bg-slate-100 rounded-xl">
          {(['Student', 'Parent', 'Teacher'] as const).map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => setRole(r)}
              className={`flex-1 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all ${
                role === r
                  ? 'bg-white text-brand-primary-deep shadow-sm'
                  : 'text-brand-slate-muted hover:text-brand-primary-deep'
              }`}
            >
              {r} Portal
            </button>
          ))}
        </div>

        {/* Features Preview */}
        <div className="p-4 mt-4 rounded-xl bg-brand-slate-bluebg/60 border border-cyan-100/80">
          <div className="flex items-center justify-between mb-2.5">
            <span className="text-xs font-bold text-brand-primary uppercase tracking-wider">
              {role} Experience Preview
            </span>
            <span className="text-xs text-brand-slate-muted">Intellia360 Powered</span>
          </div>
          <ul className="space-y-2">
            {portalFeatures[role].map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-brand-navy-700">
                <CheckCircle2 className="w-4 h-4 mt-0.5 text-brand-secondary flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Early Access Notification Signup */}
        <div className="mt-6 pt-5 border-t border-slate-100">
          <p className="text-xs font-semibold text-brand-primary-deep mb-2">
            Be the first to access the {role} Beta release:
          </p>

          {submitted ? (
            <div className="flex items-center gap-2 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm">
              <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0" />
              <span>Thank you! You will receive an invitation when the {role} Portal goes live.</span>
            </div>
          ) : (
            <form onSubmit={handleNotifyMe} className="flex gap-2">
              <input
                type="email"
                required
                placeholder={`Enter parent or ${role.toLowerCase()} email`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-3.5 py-2.5 text-xs sm:text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-secondary focus:outline-none"
              />
              <Button type="submit" variant="secondary" size="sm">
                Get Notified
              </Button>
            </form>
          )}
        </div>

        <div className="mt-5 flex justify-end">
          <Button variant="ghost" size="sm" onClick={onClose}>
            Close Preview
          </Button>
        </div>
      </div>
    </div>
  );
};
