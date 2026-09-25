import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  ShieldCheck
} from 'lucide-react';
import { InstagramIcon, LinkedinIcon, YoutubeIcon } from '../components/common/SocialIcons';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { ContactInfoBadge } from '../components/common/ContactInfoBadge';
import { siteConfig } from '../data/siteConfig';
import { programsData } from '../data/programs';
import { Button } from '../components/common/Button';
import { db, isFirebaseConfigured, collection, addDoc, serverTimestamp } from '../lib/firebase';
import { useLanguage } from '../context/LanguageContext';

export const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    studentClass: '',
    phone: '',
    email: '',
    program: 'Academic Excellence Program',
    contactMethod: 'Phone',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

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
          source: 'contact_page',
          createdAt: serverTimestamp()
        }).catch((err) => console.warn('Firestore enquiry save error:', err));
      }
    } catch (err) {
      console.warn('Local storage write skipped:', err);
    }

    // Form simulation
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <>
      <SEO
        title="Contact & Admissions — Let’s Build a Better Learning Journey"
        description="Enquire about BrainSetu Academy's mathematics and cognitive learning programs. Book an exploratory counselling consultation or student diagnostic assessment."
      />

      <main className="bg-brand-slate-bg min-h-screen">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Breadcrumbs items={[{ label: t('contact.breadcrumb') }]} />
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-12 sm:py-16 bg-gradient-to-b from-white via-brand-slate-bluebg/50 to-brand-slate-bg border-b border-slate-200 text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-brand-primary-deep tracking-tight">
              {t('contact.heroTitle')}
            </h1>
            <p className="text-base sm:text-lg text-brand-slate-muted max-w-2xl mx-auto">
              {t('contact.heroSubtitle')}
            </p>
          </div>
        </section>

        {/* Form and Academy Info Grid */}
        <section className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            
            {/* Prominent Official Contact Badge */}
            <ContactInfoBadge />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              
              {/* Left: Enquiry Form (7 cols) */}
              <div className="lg:col-span-7 bg-white p-7 sm:p-10 rounded-3xl border border-slate-200/90 shadow-card">
                {submitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h2 className="text-2xl font-display font-bold text-brand-primary-deep">
                      Thank you! Your enquiry has been received.
                    </h2>
                    <p className="text-sm text-brand-slate-muted max-w-md mx-auto">
                      Our senior academic counselling team will get in touch with you via <strong className="text-brand-secondary">{formData.contactMethod}</strong> shortly to schedule your child’s diagnostic consultation.
                    </p>
                    <div className="p-4 rounded-xl bg-brand-slate-bg border border-slate-200 text-xs text-brand-navy-700 text-left max-w-md mx-auto">
                      <p><strong>Applicant Name:</strong> {formData.name}</p>
                      <p><strong>Target Grade / Age:</strong> {formData.studentClass}</p>
                      <p><strong>Selected Program:</strong> {formData.program}</p>
                      <p className="mt-2 text-[11px] text-brand-slate-muted border-t border-slate-200 pt-1">
                        Notice: Phase 1 submission captured in local session preview.
                      </p>
                    </div>
                    <div className="pt-4">
                      <Button
                        variant="outline"
                        size="md"
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({
                            name: '',
                            studentClass: '',
                            phone: '',
                            email: '',
                            program: 'Academic Excellence Program',
                            contactMethod: 'Phone',
                            message: ''
                          });
                        }}
                      >
                        Submit Another Enquiry
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="mb-6">
                      <h2 className="text-xl sm:text-2xl font-display font-bold text-brand-primary-deep">
                        {t('contact.formHeading', 'Enquiry & Assessment Application')}
                      </h2>
                      <p className="text-xs sm:text-sm text-brand-slate-muted mt-1">
                        {t('contact.formSub', 'Fill in the details below. All fields marked with * are required.')}
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-brand-navy-700 mb-1">
                            {t('contact.nameLabel', 'Parent / Student Name')} *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder={t('contact.namePlaceholder', 'e.g. Priya Iyer')}
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-secondary focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-brand-navy-700 mb-1">
                            {t('contact.gradeLabel', 'Student Age / Class')} *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder={t('contact.gradePlaceholder', 'e.g. Class 8 (Age 13)')}
                            value={formData.studentClass}
                            onChange={(e) => setFormData({ ...formData, studentClass: e.target.value })}
                            className="w-full px-4 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-secondary focus:outline-none"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-brand-navy-700 mb-1">
                            {t('contact.phoneLabel', 'Phone Number')} *
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder={t('contact.phonePlaceholder', '+91 98765 43210')}
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full px-4 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-secondary focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-brand-navy-700 mb-1">
                            {t('contact.emailLabel', 'Email Address')}
                          </label>
                          <input
                            type="email"
                            placeholder={t('contact.emailPlaceholder', 'parent@example.com')}
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-secondary focus:outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-brand-navy-700 mb-1">
                          {t('contact.programLabel', 'Preferred Program')} *
                        </label>
                        <select
                          value={formData.program}
                          onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                          className="w-full px-4 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-secondary focus:outline-none bg-white"
                        >
                          {programsData.map((prog) => (
                            <option key={prog.id} value={prog.title}>
                              {prog.title} ({prog.level})
                            </option>
                          ))}
                          <option value="General Counselling / Unsure of Track">
                            General Counselling / Unsure of Track
                          </option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-brand-navy-700 mb-1.5">
                          {t('contact.methodLabel', 'Preferred Contact Method')}
                        </label>
                        <div className="grid grid-cols-3 gap-3">
                          {[
                            { id: 'Phone', label: 'Phone Call', icon: Phone },
                            { id: 'WhatsApp', label: 'WhatsApp', icon: MessageSquare },
                            { id: 'Email', label: 'Email', icon: Mail },
                          ].map((m) => {
                            const Icon = m.icon;
                            return (
                              <button
                                key={m.id}
                                type="button"
                                onClick={() => setFormData({ ...formData, contactMethod: m.id })}
                                className={`flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl border text-xs font-semibold transition-all ${
                                  formData.contactMethod === m.id
                                    ? 'border-brand-secondary bg-cyan-50 text-brand-secondary'
                                    : 'border-slate-200 text-slate-600 hover:border-slate-300'
                                }`}
                              >
                                <Icon className="w-3.5 h-3.5" />
                                <span>{m.label}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-brand-navy-700 mb-1">
                          {t('contact.messageLabel', 'Learning Goal or Current Academic Challenge')}
                        </label>
                        <textarea
                          rows={3}
                          placeholder={t('contact.messagePlaceholder', 'Describe any specific topics, math anxiety...')}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-4 py-2 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-secondary focus:outline-none"
                        ></textarea>
                      </div>

                      <div className="pt-3 flex flex-col sm:flex-row gap-3">
                        <Button
                          type="submit"
                          variant="accent"
                          size="lg"
                          className="flex-1 justify-center"
                          disabled={loading}
                          icon={<Send className="w-4 h-4" />}
                        >
                          {loading ? t('contact.submittingBtn', 'Processing...') : t('contact.submitBtn', 'Submit Enquiry')}
                        </Button>
                      </div>
                    </form>
                  </div>
                )}
              </div>

              {/* Right: Academy Information Placeholders (5 cols) */}
              <div className="lg:col-span-5 space-y-6">
                <div className="p-7 sm:p-8 rounded-3xl bg-brand-primary-deep text-white shadow-xl space-y-5">
                  <h3 className="text-xl font-display font-bold text-white pb-3 border-b border-slate-700">
                    Academy Contact Info
                  </h3>

                  <div className="space-y-4 text-xs sm:text-sm text-slate-200">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-white block">Campus / Center Location:</span>
                        <p className="font-semibold text-white">BrainSetu Academy</p>
                        <p className="text-slate-300">{siteConfig.contact.address.studio}</p>
                        <p className="text-slate-400">{siteConfig.contact.address.landmark}</p>
                        <p className="text-cyan-300 font-medium">{siteConfig.contact.address.city}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-white block">Admissions Helplines:</span>
                        <div className="flex flex-col space-y-1 mt-0.5">
                          <a href="tel:+918805333303" className="hover:text-cyan-300 transition-colors font-medium">
                            +91 8805333303
                          </a>
                          <a href="tel:+919867063163" className="hover:text-cyan-300 transition-colors font-medium">
                            +91 9867063163
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-white block">Email Address:</span>
                        <a href={`mailto:${siteConfig.contact.email}`} className="hover:underline">
                          {siteConfig.contact.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-white block">Consultation Hours:</span>
                        <span>{siteConfig.contact.hours}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MessageSquare className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-white block">WhatsApp Direct:</span>
                        <a 
                          href={`https://wa.me/918805333303?text=${encodeURIComponent('Hello BrainSetu Academy, I would like to enquire about your programs.')}`}
                          target="_blank"
                          rel="noreferrer"
                          className="hover:text-emerald-300 transition-colors"
                        >
                          +91 8805333303
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Social Channels */}
                  <div className="pt-4 border-t border-slate-700">
                    <span className="text-xs uppercase tracking-wider text-slate-400 block mb-2.5">
                      Social Channels
                    </span>
                    <div className="flex items-center space-x-3">
                      <a
                        href={siteConfig.contact.socials.instagram}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors border border-slate-700/80 group"
                        aria-label="Instagram"
                      >
                        <InstagramIcon className="w-4 h-4 text-pink-400 group-hover:scale-110 transition-transform" />
                        <span className="text-xs font-semibold">{siteConfig.contact.socials.instagramHandle}</span>
                      </a>
                      <a
                        href={siteConfig.contact.socials.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-brand-secondary text-slate-200 flex items-center justify-center transition-colors"
                        aria-label="LinkedIn"
                      >
                        <LinkedinIcon className="w-4 h-4" />
                      </a>
                      <a
                        href={siteConfig.contact.socials.youtube}
                        target="_blank"
                        rel="noreferrer"
                        className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-brand-accent text-slate-200 flex items-center justify-center transition-colors"
                        aria-label="YouTube"
                      >
                        <YoutubeIcon className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Assurance Card */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-soft">
                  <div className="flex items-center gap-3 mb-2">
                    <ShieldCheck className="w-5 h-5 text-emerald-600" />
                    <h4 className="text-sm font-bold text-brand-primary-deep">
                      Zero-Pressure Academic Counselling
                    </h4>
                  </div>
                  <p className="text-xs text-brand-slate-muted leading-relaxed">
                    Our initial assessment is designed purely to diagnose conceptual strengths and learning style. We recommend tracks only if there is a verified developmental match.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
    </>
  );
};
