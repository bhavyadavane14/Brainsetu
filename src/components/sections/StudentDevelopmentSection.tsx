import React from 'react';
import { 
  Brain, 
  Target, 
  Search, 
  Lightbulb, 
  Puzzle, 
  Binary, 
  Award, 
  Sprout 
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { ScrollReveal } from '../common/ScrollReveal';

export const StudentDevelopmentSection: React.FC = () => {
  const { t } = useLanguage();

  const outcomes = [
    { name: t('dev.outcome1Title'), desc: t('dev.outcome1Desc'), icon: Brain },
    { name: t('dev.outcome2Title'), desc: t('dev.outcome2Desc'), icon: Target },
    { name: t('dev.outcome3Title'), desc: t('dev.outcome3Desc'), icon: Search },
    { name: t('dev.outcome4Title'), desc: t('dev.outcome4Desc'), icon: Lightbulb },
    { name: t('dev.outcome5Title'), desc: t('dev.outcome5Desc'), icon: Puzzle },
    { name: t('dev.outcome6Title'), desc: t('dev.outcome6Desc'), icon: Binary },
    { name: t('dev.outcome7Title'), desc: t('dev.outcome7Desc'), icon: Award },
    { name: t('dev.outcome8Title'), desc: t('dev.outcome8Desc'), icon: Sprout },
  ];

  return (
    <section className="py-20 md:py-24 bg-brand-slate-bg border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-brand-primary-deep tracking-tight">
              {t('dev.title')}
            </h2>
            <p className="text-base sm:text-lg text-brand-slate-muted leading-relaxed">
              {t('dev.subtitle')}
            </p>
          </div>
        </ScrollReveal>

        {/* Simple 8-Item Grid with Clean Icons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {outcomes.map((item, idx) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={idx} delay={idx * 60}>
                <div
                  className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:border-slate-300 hover:shadow-card hover:-translate-y-1 transition-all duration-300 space-y-3 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-100 text-brand-secondary flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:bg-cyan-50">
                    <Icon className="w-5 h-5 transition-transform duration-300" />
                  </div>
                  <h3 className="text-lg font-display font-bold text-brand-primary-deep">
                    {item.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-slate-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};
