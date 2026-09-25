import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowRight
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { SectionHeader } from '../components/common/SectionHeader';
import { intellia360Features } from '../data/ecosystem';
import { Button } from '../components/common/Button';
import { CTASection } from '../components/sections/CTASection';
import { EnquiryModal } from '../components/common/EnquiryModal';
import { useLanguage } from '../context/LanguageContext';

export const Technology: React.FC = () => {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <>
      <SEO
        title="Technology & AI Ecosystem — Physical + Digital + Intellia360"
        description="BrainSetu combines passionate human mentorship with interactive mathematics software, diagnostic analytics, and our upcoming Intellia360 Socratic AI assistant."
      />

      <main className="bg-brand-slate-bg min-h-screen">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Breadcrumbs items={[{ label: t('technology.breadcrumb') }]} />
          </div>
        </div>

        {/* Hero Banner */}
        <section className="py-14 sm:py-20 bg-gradient-to-b from-white via-brand-slate-bluebg/70 to-brand-slate-bg border-b border-slate-200 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-7 space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-brand-primary-deep tracking-tight">
                  {t('technology.heroTitle')}
                </h1>

                <p className="text-base sm:text-lg text-brand-navy-700 leading-relaxed">
                  {t('technology.heroSubtitle')}
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <Button
                    variant="primary"
                    size="md"
                    onClick={() => navigate('/programs')}
                    icon={<ArrowRight className="w-4 h-4" />}
                  >
                    {t('technology.exploreBtn')}
                  </Button>
                  <Button
                    variant="outline"
                    size="md"
                    onClick={() => setEnquiryOpen(true)}
                  >
                    {t('technology.enquireBtn')}
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <img
                    src="/images/tech-ecosystem.jpg"
                    alt="Teacher, student, and interactive mathematics learning screens"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* The 3 Modalities: Physical, Digital, AI-Powered */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              title={t('technology.pillarsTitle')}
              subtitle={t('technology.pillarsSubtitle')}
              align="center"
            />

            <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Physical */}
              <div className="p-8 rounded-3xl bg-brand-slate-bg border border-slate-200 shadow-soft space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 text-brand-primary flex items-center justify-center font-display font-black text-xl">
                  01
                </div>
                <h3 className="text-xl font-display font-bold text-brand-primary-deep">
                  {t('technology.pillar1Title')}
                </h3>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-secondary block">
                  {t('technology.pillar1Tag')}
                </span>
                <p className="text-sm text-brand-slate-muted leading-relaxed">
                  {t('technology.pillar1Desc')}
                </p>
                <ul className="space-y-2 text-xs text-brand-navy-700 pt-2 border-t border-slate-200">
                  <li className="flex items-center gap-2">✓ Socratic guiding questions</li>
                  <li className="flex items-center gap-2">✓ Safe failure environment</li>
                  <li className="flex items-center gap-2">✓ Emotional confidence building</li>
                </ul>
              </div>

              {/* Digital */}
              <div className="p-8 rounded-3xl bg-brand-slate-bg border border-cyan-200 shadow-soft space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-cyan-100 text-brand-secondary flex items-center justify-center font-display font-black text-xl">
                  02
                </div>
                <h3 className="text-xl font-display font-bold text-brand-primary-deep">
                  {t('technology.pillar2Title')}
                </h3>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-secondary block">
                  {t('technology.pillar2Tag')}
                </span>
                <p className="text-sm text-brand-slate-muted leading-relaxed">
                  {t('technology.pillar2Desc')}
                </p>
                <ul className="space-y-2 text-xs text-brand-navy-700 pt-2 border-t border-slate-200">
                  <li className="flex items-center gap-2">✓ Dynamic geometry engines</li>
                  <li className="flex items-center gap-2">✓ Gamified cognitive puzzles</li>
                  <li className="flex items-center gap-2">✓ Step-by-step proof playback</li>
                </ul>
              </div>

              {/* AI-Powered */}
              <div className="p-8 rounded-3xl bg-brand-slate-bg border border-amber-200 shadow-soft space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-brand-accent flex items-center justify-center font-display font-black text-xl">
                  03
                </div>
                <h3 className="text-xl font-display font-bold text-brand-primary-deep">
                  {t('technology.pillar3Title')}
                </h3>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block">
                  {t('technology.pillar3Tag')}
                </span>
                <p className="text-sm text-brand-slate-muted leading-relaxed">
                  {t('technology.pillar3Desc')}
                </p>
                <ul className="space-y-2 text-xs text-brand-navy-700 pt-2 border-t border-slate-200">
                  <li className="flex items-center gap-2">✓ Non-spoiler Socratic hints</li>
                  <li className="flex items-center gap-2">✓ Spaced repetition triggers</li>
                  <li className="flex items-center gap-2">✓ Diagnostic bottleneck alerts</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Intellia360 Ecosystem Features */}
        <section className="py-16 bg-brand-slate-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              title={t('technology.featuresTitle')}
              subtitle={t('technology.featuresSubtitle')}
              align="center"
            />

            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {intellia360Features.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200 shadow-soft"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-cyan-50 text-brand-secondary border border-cyan-200">
                    {feat.tag}
                  </span>
                  <h3 className="text-lg font-display font-bold text-brand-primary-deep mt-3">
                    {feat.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-brand-slate-muted leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTASection />

        {/* Enquiry Modal */}
        <EnquiryModal
          isOpen={enquiryOpen}
          onClose={() => setEnquiryOpen(false)}
        />
      </main>
    </>
  );
};
