import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { siteConfig } from '../../data/siteConfig';
import { Link } from 'react-router-dom';

export const WhoWeServeSection: React.FC = () => {
  return (
    <section className="py-20 bg-brand-slate-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Tailored Developmental Stages"
          title="Learning Designed for"
          highlightText="Every Stage"
          subtitle="From early play-based pattern recognition to advanced competitive Olympiad proofs, our curriculum adapts to each developmental milestone."
          align="center"
        />

        {/* 5 Stages Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {siteConfig.whoWeServeStages.map((stage, idx) => (
            <div
              key={idx}
              className="group p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-brand-secondary/50 shadow-soft hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-cyan-50 text-brand-secondary border border-cyan-200">
                    {stage.badge}
                  </span>
                  <span className="text-xs font-semibold text-brand-slate-muted">
                    {stage.ageSpan}
                  </span>
                </div>

                <h3 className="text-xl font-display font-bold text-brand-primary-deep group-hover:text-brand-secondary transition-colors">
                  {stage.stage}
                </h3>

                <h4 className="mt-1 text-xs font-semibold text-brand-primary">
                  {stage.headline}
                </h4>

                <p className="mt-3 text-xs sm:text-sm text-brand-slate-muted leading-relaxed">
                  {stage.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <Link
                  to="/programs"
                  className="text-xs font-bold text-brand-secondary group-hover:text-brand-primary flex items-center gap-1 transition-colors"
                >
                  <span>Explore Stage Tracks</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Customization Callout */}
        <div className="mt-10 max-w-2xl mx-auto p-4 rounded-2xl bg-white border border-slate-200 text-center shadow-soft">
          <p className="text-xs sm:text-sm font-semibold text-brand-primary-deep">
            💡 <span className="text-brand-secondary">Personalized Pacing:</span> Programs can be customized according to age, baseline diagnostic level, and specific academic or competitive objectives.
          </p>
        </div>
      </div>
    </section>
  );
};
