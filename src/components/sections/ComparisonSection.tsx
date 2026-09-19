import React from 'react';
import { ArrowRight, Check, X, Sparkles } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { siteConfig } from '../../data/siteConfig';

export const ComparisonSection: React.FC = () => {
  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="The Pedagogical Transformation"
          title="What Makes"
          highlightText="BrainSetu Different"
          subtitle="Moving past conventional rote education toward an empowering paradigm where conceptual understanding and cognitive growth go hand in hand."
          align="center"
        />

        {/* 8 Transformation Bridge Rows */}
        <div className="mt-14 space-y-4 max-w-5xl mx-auto">
          {siteConfig.comparisonItems.map((item, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-2xl bg-brand-slate-bg border border-slate-200/80 hover:border-brand-secondary/40 shadow-soft transition-all duration-200 grid grid-cols-1 md:grid-cols-12 gap-4 items-center"
            >
              {/* Conventional Approach */}
              <div className="md:col-span-5 flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <X className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-600 line-through decoration-slate-400">
                    {item.traditional}
                  </h4>
                  <p className="text-xs text-brand-slate-muted mt-0.5">
                    {item.traditionalDetail}
                  </p>
                </div>
              </div>

              {/* The Bridge Indicator */}
              <div className="md:col-span-2 flex items-center justify-center py-1 md:py-0">
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-brand-secondary text-[11px] font-bold">
                  <span>The Bridge</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* BrainSetu Approach */}
              <div className="md:col-span-5 flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brand-primary-deep flex items-center gap-1.5">
                    <span>{item.brainsetu}</span>
                    <Sparkles className="w-3.5 h-3.5 text-brand-secondary" />
                  </h4>
                  <p className="text-xs text-brand-navy-700/80 mt-0.5">
                    {item.brainsetuDetail}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
