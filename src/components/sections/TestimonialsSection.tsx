import React from 'react';
import { Quote, AlertCircle, Star } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { testimonialsData } from '../../data/testimonials';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-brand-slate-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Community Perspectives"
          title="What Parents &"
          highlightText="Students Say"
          subtitle="Experiences and reflections on moving from mathematics anxiety to conceptual confidence."
          align="center"
        />

        {/* Testimonials Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonialsData.map((t) => (
            <div
              key={t.id}
              className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-soft hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Rating stars & Quote Icon */}
                <div className="flex items-center justify-between mb-3 text-amber-400">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-cyan-200" />
                </div>

                <p className="text-xs sm:text-sm text-brand-navy-700/90 italic leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-brand-primary-subtle text-brand-primary font-bold text-xs flex items-center justify-center flex-shrink-0">
                    {t.avatarText}
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-brand-primary-deep">
                      {t.name}
                    </h3>
                    <p className="text-[11px] text-brand-secondary font-medium">
                      {t.studentGrade}
                    </p>
                  </div>
                </div>

                {/* Explicit Sample Badge as specified in prompt */}
                <div className="mt-3 flex items-center gap-1.5 p-1.5 rounded-lg bg-slate-50 border border-slate-200/80 text-[10px] text-brand-slate-muted">
                  <AlertCircle className="w-3 h-3 text-slate-400 flex-shrink-0" />
                  <span className="truncate">{t.verifiedSampleNotice}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
