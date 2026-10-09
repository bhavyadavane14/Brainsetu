import React, { useState } from 'react';
import { Sparkles, ArrowRight, Heart, ShieldCheck, PhoneCall } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { PreschoolSection } from '../components/sections/PreschoolSection';
import { EnquiryModal } from '../components/common/EnquiryModal';
import { useLanguage } from '../context/LanguageContext';

export const Preschool: React.FC = () => {
  const { t } = useLanguage();
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  return (
    <>
      <SEO
        title="BrainSetu Preschool — Next-Gen Early Learning Ecosystem"
        description="A transformative early-childhood learning ecosystem bridging ancient Indian cognitive wisdom with modern neuroscience and technology."
      />

      <main className="bg-brand-slate-bg min-h-screen">
        {/* Breadcrumb Header */}
        <div className="bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Breadcrumbs items={[{ label: t('preschool.title') }]} />
          </div>
        </div>

        {/* Hero Banner for Dedicated Page with Background Image */}
        <section className="relative text-white py-16 sm:py-24 overflow-hidden bg-brand-navy-950">
          {/* Background Image with Deep Contrast Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/preschool-hero.jpg"
              alt="BrainSetu Preschool Learning Environment"
              className="w-full h-full object-cover object-center scale-105"
            />
            {/* Rich gradient overlay for crystal clear contrast and vivid typography */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-navy-950 via-brand-navy-950/90 to-brand-navy-900/80" />
            <div className="absolute inset-0 bg-brand-navy-950/40 backdrop-blur-[1px]" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-400/20 border border-amber-300/40 text-amber-300 text-sm font-bold tracking-wide uppercase shadow-sm">
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>{t('preschool.badge')}</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white leading-tight drop-shadow-md">
                {t('preschool.title')}
              </h1>

              <p className="text-lg sm:text-2xl font-bold text-amber-300 leading-snug drop-shadow-xs">
                {t('preschool.subtitle')}
              </p>

              <p className="text-base sm:text-lg text-slate-100 font-medium leading-relaxed drop-shadow-xs">
                {t('preschool.intro')}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => setEnquiryOpen(true)}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-brand-navy-950 font-bold text-base shadow-xl transition-all transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <PhoneCall className="w-5 h-5" />
                  <span>{t('preschool.enquirePartnership')}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-6 text-sm text-slate-200 font-semibold bg-brand-navy-900/60 px-4 py-2.5 rounded-xl border border-white/10 backdrop-blur-xs">
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-rose-400" />
                    <span>Ages 2 to 6 Years</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>NEP 2020 Aligned</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Full Comprehensive Preschool Section with all 8 subsections */}
        <PreschoolSection />

        {/* Enquiry Modal */}
        <EnquiryModal
          isOpen={enquiryOpen}
          onClose={() => setEnquiryOpen(false)}
          preselectedProgram="BrainSetu Preschool Partnership & Admissions"
        />
      </main>
    </>
  );
};

export default Preschool;
