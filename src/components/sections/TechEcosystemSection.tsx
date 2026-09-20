import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export const TechEcosystemSection: React.FC = () => {
  const { t } = useLanguage();

  const pillars = [
    {
      title: t('tech.pillar1Title'),
      desc: t('tech.pillar1Desc'),
    },
    {
      title: t('tech.pillar2Title'),
      desc: t('tech.pillar2Desc'),
    },
    {
      title: t('tech.pillar3Title'),
      desc: t('tech.pillar3Desc'),
    },
  ];

  const features = [
    t('tech.feat1'),
    t('tech.feat2'),
    t('tech.feat3'),
    t('tech.feat4'),
    t('tech.feat5'),
    t('tech.feat6'),
  ];

  return (
    <section className="py-20 md:py-24 bg-white border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-brand-primary-deep tracking-tight">
            {t('tech.title')}
          </h2>
          <p className="text-base sm:text-lg text-brand-slate-muted leading-relaxed">
            {t('tech.subtitle')}
          </p>
        </div>

        {/* 2-Column: Realistic Photo + Clean 3 Pillars & Feature List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Realistic Educational Technology Photography */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 bg-slate-900 group">
              <img
                src="/images/real-tech-student.jpg"
                alt="BrainSetu student exploring mathematics concepts with illuminated neural cognitive model"
                className="w-full h-auto object-cover object-center max-h-[480px] transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>

          {/* Pillars & Features */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* 3 Modalities */}
            <div className="space-y-4">
              {pillars.map((item, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-brand-slate-bg border border-slate-200/70">
                  <h3 className="text-base font-display font-bold text-brand-primary-deep">
                    {item.title}
                  </h3>
                  <p className="text-sm text-brand-slate-muted mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Feature Bullets */}
            <div className="pt-2">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                {t('tech.keyCapabilities')}
              </p>
              <div className="flex flex-wrap gap-2">
                {features.map((feat, i) => (
                  <span
                    key={i}
                    className="px-3.5 py-1.5 rounded-full bg-slate-100 text-xs font-semibold text-brand-navy-700"
                  >
                    {feat}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
