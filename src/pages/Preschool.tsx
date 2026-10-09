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

        {/* Hero Banner with Deep Navy Brand Background & Featured Image */}
        <section className="relative text-white py-14 sm:py-20 md:py-24 overflow-hidden bg-gradient-to-br from-[#0A1128] via-[#0B2545] to-[#0E3B6E]">
          {/* Subtle Ambient Radial Glows */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          
          {/* Subtle decorative grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column: High-Contrast Crisp Typography */}
              <div className="lg:col-span-7 space-y-6 text-left">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/15 border border-amber-300/30 text-amber-300 text-xs sm:text-sm font-bold tracking-wide uppercase shadow-xs">
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>{t('preschool.badge')}</span>
                </div>

                <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white leading-[1.15]">
                  {t('preschool.title')}
                </h1>

                <p className="text-base sm:text-xl md:text-2xl font-bold text-amber-300 leading-snug">
                  {t('preschool.subtitle')}
                </p>

                <p className="text-sm sm:text-base md:text-lg text-slate-200 leading-relaxed font-normal">
                  {t('preschool.intro')}
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2 sm:pt-3">
                  <button
                    type="button"
                    onClick={() => setEnquiryOpen(true)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-brand-navy-950 font-bold text-sm sm:text-base shadow-xl transition-all transform hover:-translate-y-0.5 cursor-pointer"
                  >
                    <PhoneCall className="w-5 h-5 text-brand-navy-950" />
                    <span>{t('preschool.enquirePartnership')}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="flex items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-slate-200 font-semibold bg-white/10 px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-white/15 backdrop-blur-md">
                    <div className="flex items-center gap-1.5">
                      <Heart className="w-4 h-4 text-rose-400" />
                      <span>Ages 2–6 Yrs</span>
                    </div>
                    <span className="text-white/30">•</span>
                    <div className="flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span>NEP 2020 Aligned</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Featured High-Resolution Classroom Image Card */}
              <div className="lg:col-span-5 mt-4 sm:mt-6 lg:mt-0 max-w-lg mx-auto lg:max-w-none w-full">
                <div className="relative">
                  {/* Subtle warm glow behind the card */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-amber-400/20 to-teal-400/20 rounded-3xl blur-xl opacity-75" />
                  
                  {/* Image Card */}
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20 bg-slate-900">
                    <img
                      src="/images/preschool-hero.jpg"
                      alt="BrainSetu Preschool Learning Environment"
                      className="w-full h-auto max-h-[340px] sm:max-h-[420px] lg:max-h-[460px] object-cover object-center transition-transform duration-700 hover:scale-105"
                      loading="eager"
                    />
                    {/* Bottom overlay with highlights */}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent p-3.5 sm:p-5 flex items-center justify-between text-white">
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-xs sm:text-sm font-bold tracking-wide">Multi-Sensory Discovery</span>
                      </div>
                      <span className="text-[11px] sm:text-xs bg-amber-400/25 text-amber-300 px-2.5 sm:px-3 py-1 rounded-full font-bold border border-amber-400/40">
                        Intelligent Play
                      </span>
                    </div>
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
