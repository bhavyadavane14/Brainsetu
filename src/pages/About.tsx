import React from 'react';
import { 
  CheckCircle2, 
  Award,
  Zap
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { SectionHeader } from '../components/common/SectionHeader';
import { siteConfig } from '../data/siteConfig';
import { CTASection } from '../components/sections/CTASection';
import { useLanguage } from '../context/LanguageContext';

export const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <>
      <SEO
        title="About Us — The Learning Bridge"
        description="Learn about BrainSetu Academy's mission, philosophy, and vision. We bridge Knowledge, Memory, Concepts, Application, and Potential to nurture confident lifelong thinkers."
      />

      <main className="bg-brand-slate-bg min-h-screen">
        {/* Header Breadcrumb Banner */}
        <div className="bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Breadcrumbs items={[{ label: t('about.breadcrumb') }]} />
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-14 sm:py-20 bg-gradient-to-b from-white via-brand-slate-bluebg/50 to-brand-slate-bg relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-7 space-y-5">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-brand-primary-deep tracking-tight leading-tight">
                  {t('about.heroTitle')}
                </h1>

                <p className="text-lg text-brand-navy-700 leading-relaxed">
                  {t('about.heroDesc1')}
                </p>

                <p className="text-sm sm:text-base text-brand-slate-muted leading-relaxed">
                  {t('about.heroDesc2')}
                </p>

                {/* The 5-Point Bridge Progression */}
                <div className="p-4 rounded-2xl bg-white border border-cyan-200 shadow-soft">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm font-bold text-brand-primary-deep">
                    <span className="px-2.5 py-1 rounded-lg bg-blue-50 text-brand-primary">{t('about.bridgeKnowledge')}</span>
                    <span className="text-cyan-500 font-black">→</span>
                    <span className="px-2.5 py-1 rounded-lg bg-cyan-50 text-brand-secondary">{t('about.bridgeMemory')}</span>
                    <span className="text-cyan-500 font-black">→</span>
                    <span className="px-2.5 py-1 rounded-lg bg-teal-50 text-teal-700">{t('about.bridgeConcepts')}</span>
                    <span className="text-cyan-500 font-black">→</span>
                    <span className="px-2.5 py-1 rounded-lg bg-amber-50 text-amber-700">{t('about.bridgeApplication')}</span>
                    <span className="text-cyan-500 font-black">→</span>
                    <span className="px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-700">{t('about.bridgePotential')}</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <img
                    src="/images/brain-bridge.jpg"
                    alt="BrainSetu Learning Bridge connecting knowledge and creative logic"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Our Vision */}
        <section className="py-16 bg-brand-primary-deep text-white relative">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
              Our Vision
            </span>
            <blockquote className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold leading-snug text-slate-100">
              “{siteConfig.vision}”
            </blockquote>
          </div>
        </section>

        {/* Our Philosophy */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <SectionHeader
              badge="Guiding Principle"
              title="Our"
              highlightText="Philosophy"
              align="center"
            />

            <div className="p-8 sm:p-12 rounded-3xl bg-brand-slate-bg border border-cyan-100 shadow-soft">
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-extrabold text-brand-primary-deep leading-tight">
                “Learning should create understanding, not just recall.”
              </h2>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="p-5 rounded-2xl bg-white border border-slate-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="w-5 h-5 text-brand-secondary" />
                    <h3 className="font-bold text-base text-brand-primary-deep">
                      Active Participation
                    </h3>
                  </div>
                  <p className="text-sm text-brand-slate-muted leading-relaxed">
                    Students should actively participate in their learning journey—questioning, experimenting, deriving, and defending conclusions rather than passively absorbing formulas.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-5 h-5 text-brand-accent" />
                    <h3 className="font-bold text-base text-brand-primary-deep">
                      Holistic Development
                    </h3>
                  </div>
                  <p className="text-sm text-brand-slate-muted leading-relaxed">
                    Academic performance and lifelong cognitive skills should develop together. High exam scores are natural outcomes of genuine intellectual mastery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission (8 Mission Cards) */}
        <section className="py-20 bg-brand-slate-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              badge="Purpose In Action"
              title="Our Eight-Fold"
              highlightText="Mission"
              subtitle="The specific, measurable commitments that steer our curriculum, mentorship, and technology."
              align="center"
            />

            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {siteConfig.missionPoints.map((mission, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-soft hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <span className="w-8 h-8 rounded-lg bg-brand-primary-subtle text-brand-primary font-display font-extrabold text-sm flex items-center justify-center mb-4">
                      0{idx + 1}
                    </span>
                    <h3 className="text-lg font-display font-bold text-brand-primary-deep">
                      {mission.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-brand-slate-muted leading-relaxed">
                      {mission.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1 text-[11px] font-bold text-brand-secondary">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-secondary" />
                    <span>Core Pillar</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Parent CTA */}
        <CTASection />
      </main>
    </>
  );
};
