import React from 'react';
import { Lightbulb, Brain, Binary, Cpu } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const WhyBrainSetuSection: React.FC = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: Lightbulb,
      title: t('why.benefit1Title'),
      description: t('why.benefit1Desc'),
    },
    {
      icon: Binary,
      title: t('why.benefit2Title'),
      description: t('why.benefit2Desc'),
    },
    {
      icon: Brain,
      title: t('why.benefit3Title'),
      description: t('why.benefit3Desc'),
    },
    {
      icon: Cpu,
      title: t('why.benefit4Title'),
      description: t('why.benefit4Desc'),
    },
  ];

  return (
    <section className="py-20 md:py-24 bg-brand-slate-bg border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-brand-primary-deep tracking-tight">
            {t('why.title')}
          </h2>
          <p className="text-base sm:text-lg text-brand-slate-muted leading-relaxed">
            {t('why.subtitle')}
          </p>
        </div>

        {/* 2-Column Layout: 4 Simple Benefit Items + Realistic Students Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Illuminated Educational Photo: Students Collaborating with BrainSetu Thinking Concepts */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 bg-slate-900 group">
              <img
                src="/images/real-collaborating-students.jpg"
                alt="BrainSetu students collaborating in library with illuminated mathematical ideas and concepts"
                className="w-full h-auto object-cover object-center max-h-[460px] transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>

          {/* 4 Clean Benefit Items */}
          <div className="lg:col-span-7 order-1 lg:order-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200/70 shadow-sm hover:border-slate-300 transition-colors space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-100 text-brand-primary flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-display font-bold text-brand-primary-deep">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-brand-slate-muted leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
