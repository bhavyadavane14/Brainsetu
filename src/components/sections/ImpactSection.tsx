import React from 'react';
import { 
  Users, 
  Award, 
  Calendar, 
  Video, 
  Presentation, 
  School 
} from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { AnimatedCounter } from '../common/AnimatedCounter';
import { ScrollReveal } from '../common/ScrollReveal';
import { useLanguage } from '../../context/LanguageContext';

interface ImpactStatItem {
  id: string;
  value: number;
  suffix: string;
  labelKey: string;
  defaultLabel: string;
  icon: React.ElementType;
}

export const ImpactSection: React.FC = () => {
  const { t } = useLanguage();

  const statistics: ImpactStatItem[] = [
    {
      id: 'registrations',
      value: 90,
      suffix: 'K+',
      labelKey: 'impact.stat1Label',
      defaultLabel: 'Successful Registrations',
      icon: Users,
    },
    {
      id: 'members',
      value: 4,
      suffix: 'K+',
      labelKey: 'impact.stat2Label',
      defaultLabel: 'Active Members',
      icon: Award,
    },
    {
      id: 'experience',
      value: 12,
      suffix: '+',
      labelKey: 'impact.stat3Label',
      defaultLabel: 'Years of Experience',
      icon: Calendar,
    },
    {
      id: 'webinars',
      value: 240,
      suffix: '+',
      labelKey: 'impact.stat4Label',
      defaultLabel: 'Live Webinars',
      icon: Video,
    },
    {
      id: 'workshops',
      value: 120,
      suffix: '+',
      labelKey: 'impact.stat5Label',
      defaultLabel: 'Seminars & Workshops',
      icon: Presentation,
    },
    {
      id: 'schools',
      value: 300,
      suffix: '+',
      labelKey: 'impact.stat6Label',
      defaultLabel: 'Schools We Work With',
      icon: School,
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 bg-gradient-to-b from-white via-brand-slate-bluebg/25 to-brand-slate-bg border-b border-slate-200/60 overflow-hidden">
      {/* Intelligent Ambient Background Motion (Calm, Educational, Non-Distracting) */}
      <div 
        className="absolute inset-0 math-pattern-bg opacity-40 pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute -top-24 -left-20 w-96 h-96 bg-cyan-100/35 rounded-full blur-3xl pointer-events-none animate-float-slow"
        aria-hidden="true"
      />
      <div 
        className="absolute -bottom-24 -right-20 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl pointer-events-none animate-float-delayed"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Scroll Reveal */}
        <ScrollReveal delay={0} className="mb-12 sm:mb-16">
          <SectionHeader
            badge={t('impact.badge', 'Our Measurable Impact')}
            title={t('impact.title', 'Proven Track Record of Excellence')}
            subtitle={t(
              'impact.subtitle',
              'Empowering learners, educators, and schools across the nation with research-backed cognitive and conceptual learning methodologies.'
            )}
            align="center"
          />
        </ScrollReveal>

        {/* 6 Impact Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {statistics.map((stat, idx) => {
            const IconComponent = stat.icon;
            // Sequential entrance stagger between 100ms - 150ms per card
            const staggerDelay = idx * 120;

            return (
              <ScrollReveal
                key={stat.id}
                delay={staggerDelay}
                className="h-full"
              >
                <div 
                  className="group relative h-full flex flex-col justify-between bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-soft hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 ease-out cursor-default overflow-hidden"
                >
                  {/* Subtle top indicator bar on hover */}
                  <div 
                    className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-secondary to-brand-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                    aria-hidden="true"
                  />

                  <div>
                    {/* Minimal Relevant Icon */}
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-brand-primary-subtle text-brand-primary flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-105 group-hover:bg-cyan-50 group-hover:text-brand-secondary">
                      <IconComponent className="w-5 h-5 transition-transform duration-300" />
                    </div>

                    {/* Large Bold Animated Number */}
                    <div className="text-3xl sm:text-4xl font-display font-extrabold text-brand-primary-deep tracking-tight group-hover:text-brand-primary transition-colors duration-200">
                      <AnimatedCounter
                        end={stat.value}
                        suffix={stat.suffix}
                        duration={1800}
                        startOnVisible={true}
                      />
                    </div>
                  </div>

                  {/* Short Descriptive Label */}
                  <div className="mt-3 pt-2 border-t border-slate-100">
                    <p className="text-xs sm:text-sm font-semibold text-brand-navy-700/80 leading-snug group-hover:text-brand-primary-deep transition-colors duration-200">
                      {t(stat.labelKey, stat.defaultLabel)}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
