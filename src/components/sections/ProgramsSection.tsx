import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, BookOpen } from 'lucide-react';
import { programsData } from '../../data/programs';
import { Button } from '../common/Button';
import { EnquiryModal } from '../common/EnquiryModal';
import { useLanguage } from '../../context/LanguageContext';

export const ProgramsSection: React.FC = () => {
  const { t } = useLanguage();
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState('');

  const handleEnquire = (programTitle: string) => {
    setSelectedProgram(programTitle);
    setEnquiryOpen(true);
  };

  const webinarProg = programsData[0];
  const mathProg = programsData[1];

  return (
    <section className="py-20 md:py-24 bg-brand-slate-bg border-t border-slate-200/60" id="programs-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-50 text-brand-secondary border border-cyan-200">
            {t('programs.sectionBadge')}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-brand-primary-deep tracking-tight">
            {t('programs.sectionTitle')}
          </h2>
          <p className="text-base sm:text-lg text-brand-slate-muted leading-relaxed">
            {t('programs.sectionSubtitle')}
          </p>
        </div>

        {/* 2 Core Programs Side-by-Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          
          {/* Card 1: 10X Memory Power Webinar (Exact Card Design Matching Provided Image) */}
          {webinarProg && (
            <div className="rounded-3xl bg-white border border-slate-200 shadow-card hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between p-7 sm:p-9 relative">
              {/* Subtle grid pattern background */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"></div>

              <div>
                {/* Pricing & Special Offer Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="space-y-0.5">
                    <span className="block text-xs font-bold text-slate-400 line-through">
                      {webinarProg.originalPrice || '₹4,999'}
                    </span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-xl sm:text-2xl font-display font-black text-brand-primary-deep">
                        {webinarProg.discountedPrice || '₹999'}
                      </span>
                      <span className="text-xs font-semibold text-slate-500">{t('programs.webinarPerPass')}</span>
                    </div>
                  </div>

                  <span className="px-3.5 py-1.5 rounded-2xl bg-amber-100 text-amber-900 border border-amber-300 font-extrabold text-xs sm:text-sm tracking-wider uppercase shadow-xs">
                    {t('programs.webinarBadge')}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-2xl sm:text-3xl font-display font-black text-brand-primary-deep tracking-tight mb-3">
                  {t('programs.webinarTitle')}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {t('programs.webinarShortDesc')}
                </p>

                {/* Bullet Highlights with Blue Checks */}
                <div className="space-y-3.5 pt-2 border-t border-slate-100">
                  {webinarProg.keyHighlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span className="text-sm font-medium text-slate-800 leading-snug">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button: Matches Card 2 Exactly */}
              <div className="pt-8 space-y-3">
                <button
                  type="button"
                  onClick={() => handleEnquire(webinarProg.title)}
                  className="w-full py-3.5 px-6 rounded-2xl bg-[#FACC15] hover:bg-[#EAB308] text-slate-950 font-extrabold text-base tracking-wide transition-all shadow-md hover:shadow-lg hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2"
                >
                  <BookOpen className="w-4 h-4 text-slate-900" />
                  <span>{t('programs.enquireBtn')}</span>
                </button>

                <div className="text-center">
                  <Link
                    to={`/programs/${webinarProg.slug}`}
                    className="text-xs font-semibold text-brand-secondary hover:underline inline-flex items-center gap-1"
                  >
                    <span>{t('programs.webinarLink')}</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Card 2: Intellia 360 Mathematics Program (Flagship Curriculum Card) */}
          {mathProg && (
            <div className="rounded-3xl bg-gradient-to-b from-white to-sky-50/40 border-2 border-cyan-400/40 shadow-card hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between p-7 sm:p-9 relative">
              <div>
                {/* Pricing & Badge Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="space-y-0.5">
                    <span className="block text-xs font-bold text-slate-400 line-through">
                      {mathProg.originalPrice || '₹14,999'}
                    </span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-xl sm:text-2xl font-display font-black text-brand-primary-deep">
                        {mathProg.discountedPrice || '₹4,999'}
                      </span>
                      <span className="text-xs font-semibold text-slate-500">/ term</span>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-1">
                    <span className="px-3.5 py-1 rounded-2xl bg-cyan-100 text-brand-primary-deep font-extrabold text-xs tracking-wider uppercase border border-cyan-200">
                      Flagship
                    </span>
                    <span className="text-xs font-semibold text-cyan-800 bg-white/90 px-2.5 py-0.5 rounded-lg border border-slate-200">
                      Grades 1 – 10
                    </span>
                  </div>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-2xl sm:text-3xl font-display font-black text-brand-primary-deep tracking-tight mb-3">
                  {mathProg.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {mathProg.shortDescription}
                </p>

                {/* Bullet Highlights */}
                <div className="space-y-3.5 pt-2 border-t border-slate-100">
                  {mathProg.keyHighlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-cyan-50 text-cyan-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span className="text-sm font-medium text-slate-800 leading-snug">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button: Same Color As Card 1 */}
              <div className="pt-8 space-y-3">
                <button
                  type="button"
                  onClick={() => handleEnquire(mathProg.title)}
                  className="w-full py-3.5 px-6 rounded-2xl bg-[#FACC15] hover:bg-[#EAB308] text-slate-950 font-extrabold text-base tracking-wide transition-all shadow-md hover:shadow-lg hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2"
                >
                  <BookOpen className="w-4 h-4 text-slate-900" />
                  <span>{t('programs.enquireBtn')}</span>
                </button>

                <div className="text-center">
                  <Link
                    to={`/programs/${mathProg.slug}`}
                    className="text-xs font-semibold text-brand-secondary hover:underline inline-flex items-center gap-1"
                  >
                    <span>Explore Full Mathematics Curriculum</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* View All / Explore Programs Button */}
        <div className="mt-14 text-center">
          <Button
            to="/programs"
            variant="outline"
            size="md"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Compare Both Programs
          </Button>
        </div>

      </div>

      <EnquiryModal 
        isOpen={enquiryOpen} 
        onClose={() => setEnquiryOpen(false)} 
        preselectedProgram={selectedProgram}
      />
    </section>
  );
};
