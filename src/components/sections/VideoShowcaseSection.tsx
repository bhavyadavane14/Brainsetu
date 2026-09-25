import React from 'react';
import { ExternalLink, Play, Lightbulb, Brain, Users } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { ScrollReveal } from '../common/ScrollReveal';
import { useLanguage } from '../../context/LanguageContext';

export const VideoShowcaseSection: React.FC = () => {
  const { t } = useLanguage();
  const videoId = 'H5YqeyASGCI';
  const youtubeUrl = `https://youtu.be/${videoId}`;
  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1`;

  const highlights = [
    {
      icon: Lightbulb,
      title: t('video.feat1Title', 'Conceptual Clarity'),
      desc: t('video.feat1Desc', 'First-principles mathematical reasoning that banishes rote memorization.'),
    },
    {
      icon: Brain,
      title: t('video.feat2Title', '10X Memory Power'),
      desc: t('video.feat2Desc', 'Scientific concept chunking and neural recall techniques.'),
    },
    {
      icon: Users,
      title: t('video.feat3Title', 'Expert Mentorship'),
      desc: t('video.feat3Desc', 'Dedicated mentors paired with adaptive digital practice tools.'),
    },
  ];

  return (
    <section 
      id="video-tour" 
      className="relative py-20 md:py-24 bg-gradient-to-b from-white via-brand-slate-bluebg/20 to-brand-slate-bg border-y border-slate-200/60 overflow-hidden"
    >
      {/* Decorative ambient background glows */}
      <div 
        className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-100/30 rounded-full blur-3xl pointer-events-none animate-float-slow"
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-amber-100/25 rounded-full blur-3xl pointer-events-none animate-float-delayed"
        aria-hidden="true" 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="mb-12 sm:mb-16">
            <SectionHeader
              title={t('video.title', 'Experience BrainSetu in Action')}
              subtitle={t(
                'video.subtitle',
                'Watch how our cognitive development methodology and the Intellia 360 Mathematics Program transform conceptual clarity, analytical thinking, and lifelong confidence.'
              )}
              align="center"
            />
          </div>
        </ScrollReveal>

        {/* Video Player Card */}
        <ScrollReveal delay={120}>
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden bg-slate-900 border-2 border-slate-200/80 shadow-2xl transition-all duration-300 group">
              
              {/* Responsive 16:9 Video Container */}
              <div className="relative w-full aspect-video">
                <iframe
                  src={embedUrl}
                  title="BrainSetu Academy — Intellia 360 Video Tour"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>

              {/* Video Bottom Toolbar */}
              <div className="p-4 sm:p-5 bg-gradient-to-r from-slate-900 via-brand-navy-900 to-slate-900 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-white">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-semibold text-white">BrainSetu Academy</span>
                  <span className="text-slate-500">•</span>
                  <span>Intellia 360™ Cognitive Program</span>
                </div>

                <a
                  href={youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-xs font-semibold text-white transition-colors"
                >
                  <Play className="w-3 h-3 fill-current text-red-500" />
                  <span>{t('video.watchYoutube', 'Watch on YouTube')}</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 3 Quick Benefit Pillars */}
        <div className="max-w-4xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={idx} delay={200 + idx * 80}>
                <div className="h-full p-5 rounded-2xl bg-white border border-slate-200/70 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-300 group">
                  <div className="w-9 h-9 rounded-xl bg-brand-primary-subtle text-brand-primary flex items-center justify-center mb-3 group-hover:scale-105 group-hover:bg-cyan-50 group-hover:text-brand-secondary transition-all duration-300">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-display font-bold text-brand-primary-deep group-hover:text-brand-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-brand-slate-muted mt-1 leading-relaxed">
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
