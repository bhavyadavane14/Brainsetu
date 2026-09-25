import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight,
  Check,
  BookOpen
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { programsData } from '../data/programs';
import { EnquiryModal } from '../components/common/EnquiryModal';
import { CTASection } from '../components/sections/CTASection';
import { VideoShowcaseSection } from '../components/sections/VideoShowcaseSection';
import { useLanguage } from '../context/LanguageContext';

export const Programs: React.FC = () => {
  const { t } = useLanguage();
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [selectedProg, setSelectedProg] = useState('');

  const handleOpenEnquiry = (title: string) => {
    setSelectedProg(title);
    setEnquiryOpen(true);
  };

  const webinar = programsData[0];
  const mathProgram = programsData[1];

  return (
    <>
      <SEO
        title="Our Programs & Masterclasses — BrainSetu Academy"
        description="Explore BrainSetu Academy's specialized 10X Memory Power Webinar and the comprehensive Intellia 360 Mathematics Program."
      />

      <main className="bg-brand-slate-bg min-h-screen">
        {/* Header Breadcrumb */}
        <div className="bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Breadcrumbs items={[{ label: 'Programs' }]} />
          </div>
        </div>

        {/* Hero Banner */}
        <section className="py-14 sm:py-20 bg-gradient-to-b from-white via-brand-slate-bluebg/50 to-brand-slate-bg text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-50 text-brand-secondary border border-cyan-200">
              Transformative Educational Offerings
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-brand-primary-deep tracking-tight">
              Programs Designed for <span className="text-gradient">Smarter Learning</span>
            </h1>
            <p className="text-base sm:text-lg text-brand-slate-muted max-w-2xl mx-auto">
              Choose between our free high-impact memory masterclass or our comprehensive full-year conceptual mathematics curriculum.
            </p>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
              
              {/* Program 1: 10X Memory Power Webinar */}
              {webinar && (
                <div className="rounded-3xl bg-white border border-slate-200 shadow-card hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between p-8 sm:p-10 relative">
                  <div>
                    {/* Top Tag & Price */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="space-y-0.5">
                        <span className="block text-xs font-bold text-slate-400 line-through">
                          {t('programs.original')} {webinar.originalPrice}
                        </span>
                        <div className="flex items-baseline gap-1">
                          <span className="text-xl sm:text-2xl font-display font-black text-brand-primary-deep">
                            {webinar.discountedPrice}
                          </span>
                          <span className="text-xs font-semibold text-slate-500">{t('programs.webinarPerPass')}</span>
                        </div>
                      </div>

                      <span className="px-3.5 py-1.5 rounded-2xl bg-amber-100 text-amber-900 border border-amber-300 font-extrabold text-xs sm:text-sm tracking-wider uppercase shadow-xs">
                        {t('programs.webinarBadge')}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-display font-black text-brand-primary-deep tracking-tight mb-3">
                      {t('programs.webinarTitle')}
                    </h2>
                    <p className="text-sm text-slate-600 leading-relaxed mb-6">
                      {t('programs.webinarShortDesc')}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-3.5 pt-4 border-t border-slate-100">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        What You Will Master:
                      </h3>
                      {webinar.keyHighlights.map((hl, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                          </div>
                          <span className="text-sm font-medium text-slate-800 leading-snug">
                            {hl}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-8 space-y-3">
                    <button
                      type="button"
                      onClick={() => handleOpenEnquiry(webinar.title)}
                      className="w-full py-4 px-6 rounded-2xl bg-[#FACC15] hover:bg-[#EAB308] text-slate-950 font-extrabold text-base tracking-wide transition-all shadow-md hover:shadow-lg hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2"
                    >
                      <BookOpen className="w-4 h-4 text-slate-900" />
                      <span>{t('programs.enquireBtn')}</span>
                    </button>

                    <div className="text-center">
                      <Link
                        to={`/programs/${webinar.slug}`}
                        className="text-xs font-semibold text-brand-secondary hover:underline inline-flex items-center gap-1"
                      >
                        <span>View Detailed Webinar Overview</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              {/* Program 2: Intellia 360 Mathematics */}
              {mathProgram && (
                <div className="rounded-3xl bg-gradient-to-b from-white to-sky-50/40 border-2 border-cyan-400/50 shadow-card hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between p-8 sm:p-10 relative">
                  <div>
                    {/* Top Tag & Level */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="px-3.5 py-1.5 rounded-full bg-cyan-100 text-brand-primary-deep font-extrabold text-xs tracking-wider uppercase border border-cyan-200">
                        Flagship Academic Program
                      </span>
                      <span className="text-xs font-semibold text-cyan-800 bg-white/90 px-3 py-1 rounded-lg border border-slate-200">
                        {mathProgram.level}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-display font-black text-brand-primary-deep tracking-tight mb-3">
                      {mathProgram.title}
                    </h2>
                    <p className="text-sm text-slate-600 leading-relaxed mb-6">
                      {mathProgram.overview}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-3.5 pt-4 border-t border-slate-100">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        Core Program Pillars:
                      </h3>
                      {mathProgram.keyHighlights.map((hl, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-cyan-50 text-cyan-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                          </div>
                          <span className="text-sm font-medium text-slate-800 leading-snug">
                            {hl}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-8 space-y-3">
                    <button
                      type="button"
                      onClick={() => handleOpenEnquiry(mathProgram.title)}
                      className="w-full py-4 px-6 rounded-2xl bg-[#FACC15] hover:bg-[#EAB308] text-slate-950 font-extrabold text-base tracking-wide transition-all shadow-md hover:shadow-lg hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2"
                    >
                      <BookOpen className="w-4 h-4 text-slate-900" />
                      <span>{t('programs.enquireBtn')}</span>
                    </button>

                    <div className="text-center">
                      <Link
                        to={`/programs/${mathProgram.slug}`}
                        className="text-xs font-semibold text-brand-secondary hover:underline inline-flex items-center gap-1"
                      >
                        <span>View Full Syllabus & Methodology</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        </section>

        {/* Video Tour Section */}
        <VideoShowcaseSection />

        {/* Global CTA Section */}
        <CTASection />
      </main>

      <EnquiryModal 
        isOpen={enquiryOpen} 
        onClose={() => setEnquiryOpen(false)} 
        preselectedProgram={selectedProg}
      />
    </>
  );
};
