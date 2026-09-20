import React from 'react';
import { journeyStepsData } from '../../data/approach';
import { useLanguage } from '../../context/LanguageContext';

export const LearningJourneySection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-brand-primary-deep tracking-tight">
            {t('journey.title')}
          </h2>
          <p className="text-base sm:text-lg text-brand-slate-muted leading-relaxed">
            {t('journey.subtitle')}
          </p>
        </div>

        {/* Desktop Horizontal Timeline (Clean & Airy) */}
        <div className="hidden lg:grid grid-cols-6 gap-4 relative">
          {journeyStepsData.map((step, idx) => (
            <div
              key={step.number}
              className="p-5 rounded-2xl bg-brand-slate-bg border border-slate-200/70 text-center flex flex-col justify-between relative"
            >
              <div>
                <span className="text-2xl font-display font-extrabold text-brand-secondary block mb-1">
                  {step.number}
                </span>
                <h3 className="text-base font-display font-bold text-brand-primary-deep">
                  {t(`journey.step${idx + 1}Title`, step.title)}
                </h3>
                <p className="text-xs text-brand-slate-muted mt-2 leading-relaxed">
                  {t(`journey.step${idx + 1}Desc`, step.summary)}
                </p>
              </div>

              {/* Step indicator dot */}
              <div className="mt-4 pt-3 border-t border-slate-200/60">
                <span className="text-[11px] font-semibold text-brand-primary">
                  {t('journey.stage')} {idx + 1}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Vertical Timeline (Clean & Airy) */}
        <div className="lg:hidden space-y-3">
          {journeyStepsData.map((step, idx) => (
            <div
              key={step.number}
              className="p-4 rounded-2xl bg-brand-slate-bg border border-slate-200/70 flex items-start gap-4"
            >
              <span className="text-xl font-display font-extrabold text-brand-secondary flex-shrink-0">
                {step.number}
              </span>
              <div>
                <h3 className="text-base font-display font-bold text-brand-primary-deep">
                  {t(`journey.step${idx + 1}Title`, step.title)}
                </h3>
                <p className="text-xs text-brand-slate-muted mt-1 leading-relaxed">
                  {t(`journey.step${idx + 1}Desc`, step.summary)}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
