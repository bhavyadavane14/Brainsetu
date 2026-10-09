import React from 'react';
import { 
  Clock, 
  Brain, 
  ShieldCheck, 
  Focus, 
  Lightbulb, 
  TrendingUp, 
  Compass, 
  Smile, 
  Sparkles,
  Quote
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { ScrollReveal } from '../common/ScrollReveal';

export const MemoryCoreValuesSection: React.FC = () => {
  const { t } = useLanguage();

  const coreValues = [
    {
      icon: Clock,
      title: t('coreValues.item1Title'),
      desc: t('coreValues.item1Desc'),
      color: 'from-blue-500/10 to-indigo-500/10 text-blue-600 border-blue-200/70',
      tag: '01'
    },
    {
      icon: Brain,
      title: t('coreValues.item2Title'),
      desc: t('coreValues.item2Desc'),
      color: 'from-cyan-500/10 to-teal-500/10 text-cyan-600 border-cyan-200/70',
      tag: '02'
    },
    {
      icon: ShieldCheck,
      title: t('coreValues.item3Title'),
      desc: t('coreValues.item3Desc'),
      color: 'from-emerald-500/10 to-teal-500/10 text-emerald-600 border-emerald-200/70',
      tag: '03'
    },
    {
      icon: Focus,
      title: t('coreValues.item4Title'),
      desc: t('coreValues.item4Desc'),
      color: 'from-amber-500/10 to-orange-500/10 text-amber-600 border-amber-200/70',
      tag: '04'
    },
    {
      icon: Lightbulb,
      title: t('coreValues.item5Title'),
      desc: t('coreValues.item5Desc'),
      color: 'from-yellow-500/10 to-amber-500/10 text-yellow-600 border-yellow-200/70',
      tag: '05'
    },
    {
      icon: TrendingUp,
      title: t('coreValues.item6Title'),
      desc: t('coreValues.item6Desc'),
      color: 'from-purple-500/10 to-indigo-500/10 text-purple-600 border-purple-200/70',
      tag: '06'
    },
    {
      icon: Compass,
      title: t('coreValues.item7Title'),
      desc: t('coreValues.item7Desc'),
      color: 'from-sky-500/10 to-blue-500/10 text-sky-600 border-sky-200/70',
      tag: '07'
    },
    {
      icon: Smile,
      title: t('coreValues.item8Title'),
      desc: t('coreValues.item8Desc'),
      color: 'from-pink-500/10 to-rose-500/10 text-pink-600 border-pink-200/70',
      tag: '08'
    },
  ];

  return (
    <section id="core-values" className="py-20 md:py-28 bg-gradient-to-b from-white via-brand-slate-bg to-white relative overflow-hidden border-b border-slate-200/70">
      {/* Decorative backdrop glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-brand-secondary text-xs font-bold tracking-wider uppercase shadow-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t('coreValues.sectionBadge')}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-brand-primary-deep tracking-tight">
              {t('coreValues.sectionTitle')}
            </h2>

            <p className="text-base sm:text-lg text-brand-slate-muted leading-relaxed">
              {t('coreValues.sectionSubtitle')}
            </p>
          </div>
        </ScrollReveal>

        {/* 🌟 One-Line Value Proposition Featured Callout */}
        <ScrollReveal delay={100}>
          <div className="max-w-4xl mx-auto mb-16 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-brand-primary-deep via-brand-navy-900 to-brand-primary text-white shadow-xl border border-cyan-500/30 relative overflow-hidden group">
            {/* Background shimmer */}
            <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-cyan-400/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700" />
            
            <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <div className="w-12 h-12 rounded-2xl bg-[#FACC15] text-slate-950 flex items-center justify-center flex-shrink-0 shadow-lg">
                <Quote className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div className="space-y-1.5 flex-1">
                <span className="text-xs font-bold uppercase tracking-widest text-[#FACC15]">
                  {t('coreValues.valuePropLabel')}
                </span>
                <p className="text-base sm:text-xl font-display font-bold leading-snug text-white">
                  {t('coreValues.valuePropQuote')}
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 8 Core Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((item, idx) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={idx} delay={idx * 75}>
                <div className="h-full p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-card hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-xs border`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-300 group-hover:text-brand-secondary transition-colors">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="text-lg font-display font-bold text-brand-primary-deep leading-snug group-hover:text-brand-primary transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-sm text-brand-slate-muted leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-bold text-brand-secondary">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse"></span>
                    <span>BrainSetu Principle</span>
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
