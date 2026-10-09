import React, { useState } from 'react';
import { X, CheckCircle2, Send, Phone, MessageSquare, Mail } from 'lucide-react';
import { Button } from './Button';
import { programsData } from '../../data/programs';
import { db, isFirebaseConfigured, collection, addDoc, serverTimestamp } from '../../lib/firebase';
import { useLanguage } from '../../context/LanguageContext';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedProgram?: string;
  modalTitle?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  preselectedProgram = '',
  modalTitle
}) => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    studentGrade: '',
    phone: '',
    email: '',
    program: preselectedProgram || 'Academic Excellence Program',
    contactMethod: 'Phone',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const existing = JSON.parse(localStorage.getItem('brainsetu_diagnostic_enquiries') || '[]');
      const enquiryItem = {
        ...formData,
        id: `ENQ-${Date.now()}`,
        submittedAt: new Date().toISOString()
      };
      existing.push(enquiryItem);
      localStorage.setItem('brainsetu_diagnostic_enquiries', JSON.stringify(existing));

      // Store in Firebase Firestore if configured
      if (isFirebaseConfigured && db) {
        addDoc(collection(db, 'enquiries'), {
          ...formData,
          source: 'diagnostic_modal',
          createdAt: serverTimestamp()
        }).catch((err) => console.warn('Firestore enquiry save error:', err));
      }
    } catch (err) {
      console.warn('Enquiry save error:', err);
    }

    // Clean client-side response
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-navy-900/70 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-lg p-6 sm:p-8 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Accent Bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-secondary via-brand-primary to-brand-accent"></div>

        {/* Close Button */}
        <button 
          onClick={handleReset}
          className="absolute top-5 right-5 p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h3 className="text-2xl font-display font-bold text-brand-primary-deep">
              {t('modals.successTitle')}
            </h3>
            <p className="mt-2 text-sm text-brand-slate-muted max-w-md mx-auto">
              {t('modals.successDesc')}
            </p>
            <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-brand-slate-muted text-left">
              <p><strong>Selected Track:</strong> {formData.program}</p>
              <p className="mt-1"><strong>Status:</strong> Phase 1 Enquiry Logged</p>
            </div>
            <div className="mt-6">
              <Button variant="primary" onClick={handleReset}>
                {t('modals.closeBtn')}
              </Button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-5">
              <span className="inline-block px-2.5 py-1 text-xs font-bold uppercase tracking-wider bg-brand-primary-subtle text-brand-primary rounded-md mb-2">
                Admissions & Guidance
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-brand-primary-deep">
                {modalTitle || t('modals.enquiryTitle')}
              </h3>
              <p className="text-xs sm:text-sm text-brand-slate-muted mt-1">
                {t('modals.enquirySub')}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-brand-navy-700 uppercase tracking-wider mb-1">
                  {t('contact.nameLabel')} *
                </label>
                <input
                  type="text"
                  required
                  placeholder={t('contact.namePlaceholder')}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-secondary focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-brand-navy-700 uppercase tracking-wider mb-1">
                    {t('contact.gradeLabel')} *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={t('contact.gradePlaceholder')}
                    value={formData.studentGrade}
                    onChange={(e) => setFormData({ ...formData, studentGrade: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-secondary focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-brand-navy-700 uppercase tracking-wider mb-1">
                    {t('contact.phoneLabel')} *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder={t('contact.phonePlaceholder')}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-secondary focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-brand-navy-700 uppercase tracking-wider mb-1">
                  {t('contact.emailLabel')}
                </label>
                <input
                  type="email"
                  placeholder={t('contact.emailPlaceholder')}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-secondary focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-brand-navy-700 uppercase tracking-wider mb-1">
                  {t('contact.programLabel')}
                </label>
                <select
                  value={formData.program}
                  onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-secondary focus:outline-none bg-white"
                >
                  {programsData.map((p) => (
                    <option key={p.id} value={p.title}>
                      {p.title}
                    </option>
                  ))}
                  <option value="General Counselling / Need Guidance">General Counselling / Need Guidance</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-brand-navy-700 uppercase tracking-wider mb-1.5">
                  {t('contact.methodLabel')}
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'Phone', icon: Phone, label: 'Phone' },
                    { id: 'WhatsApp', icon: MessageSquare, label: 'WhatsApp' },
                    { id: 'Email', icon: Mail, label: 'Email' }
                  ].map((ch) => {
                    const Icon = ch.icon;
                    return (
                      <button
                        key={ch.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, contactMethod: ch.id })}
                        className={`flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl border text-xs font-semibold transition-all ${
                          formData.contactMethod === ch.id
                            ? 'border-brand-secondary bg-cyan-50 text-brand-secondary'
                            : 'border-slate-200 text-slate-600 hover:border-slate-300'
                        }`}
                      >
                        <Icon className="w-3.5 h-3.5" />
                        <span>{ch.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-brand-navy-700 uppercase tracking-wider mb-1">
                  {t('contact.messageLabel')}
                </label>
                <textarea
                  rows={2}
                  placeholder={t('contact.messagePlaceholder')}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-secondary focus:outline-none"
                ></textarea>
              </div>

              <div className="pt-2">
                <Button 
                  type="submit" 
                  variant="accent" 
                  size="md" 
                  className="w-full"
                  disabled={loading}
                  icon={<Send className="w-4 h-4" />}
                >
                  {loading ? t('contact.submittingBtn') : t('contact.submitBtn')}
                </Button>
              </div>

              <div className="text-center pt-2 border-t border-slate-100 text-xs text-slate-500">
                <p className="text-[11px] text-slate-400 mt-0.5">
                  {t('contact.privacyNotice')}
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
