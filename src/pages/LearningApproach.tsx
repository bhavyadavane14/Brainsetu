import React from 'react';
import { 
  Sparkles, 
  Brain, 
  AlertTriangle, 
  Layers, 
  Zap, 
  RotateCcw, 
  Grid, 
  GitMerge, 
  Eye 
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { SectionHeader } from '../components/common/SectionHeader';
import { journeyStepsData, cognitiveTechniquesData } from '../data/approach';
import { CTASection } from '../components/sections/CTASection';

export const LearningApproach: React.FC = () => {
  const techniqueIcons: Record<string, React.ElementType> = {
    chunking: Layers,
    connections: GitMerge,
    recall: RotateCcw,
    associations: Eye,
    patterns: Grid,
    revision: Zap
  };

  return (
    <>
      <SEO
        title="Learning Approach — The 6-Step Methodology & Cognitive Techniques"
        description="Discover BrainSetu's 6-step learning methodology: Learn, Understand, Remember, Practice, Apply, and Master. Memory techniques support conceptual clarity, not replace it."
      />

      <main className="bg-brand-slate-bg min-h-screen">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Breadcrumbs items={[{ label: 'Learning Approach' }]} />
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-14 sm:py-20 bg-gradient-to-b from-white via-brand-slate-bluebg/60 to-brand-slate-bg border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-50 text-brand-secondary border border-cyan-200">
              Proprietary Pedagogical Architecture
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-brand-primary-deep tracking-tight">
              The BrainSetu <span className="text-gradient">Learning Approach</span>
            </h1>
            <p className="text-base sm:text-lg text-brand-slate-muted max-w-2xl mx-auto leading-relaxed">
              Moving from mechanical memorization to enduring understanding through structured cognitive progressions and scientific memory encoding.
            </p>
          </div>
        </section>

        {/* The 6-Step Methodology with Large Animated Numbers */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              badge="Progression Framework"
              title="The Six-Step"
              highlightText="Methodology"
              subtitle="Every concept taught at BrainSetu passes through this rigorous six-stage pipeline to ensure zero superficial gaps."
              align="center"
            />

            <div className="mt-14 space-y-8">
              {journeyStepsData.map((step, idx) => (
                <div
                  key={step.number}
                  className="p-6 sm:p-8 rounded-3xl bg-brand-slate-bg border border-slate-200/90 shadow-soft hover:shadow-card-hover transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
                >
                  {/* Large Number Column */}
                  <div className="lg:col-span-3 flex items-baseline gap-2">
                    <span className="text-5xl sm:text-6xl md:text-7xl font-display font-black text-gradient leading-none">
                      {step.number}
                    </span>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-brand-secondary block">
                        Stage {idx + 1}
                      </span>
                      <h3 className="text-2xl font-display font-bold text-brand-primary-deep">
                        {step.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description Column */}
                  <div className="lg:col-span-6 space-y-2">
                    <p className="text-sm font-semibold text-brand-primary">
                      {step.summary}
                    </p>
                    <p className="text-xs sm:text-sm text-brand-navy-700/90 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Cognitive Bridge Pill */}
                  <div className="lg:col-span-3 p-4 rounded-2xl bg-white border border-slate-200 text-xs">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-slate-muted block mb-1">
                      Cognitive Transition:
                    </span>
                    <p className="font-bold text-brand-secondary flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{step.cognitiveBridge}</span>
                    </p>
                    <p className="mt-2 text-[11px] text-brand-slate-muted border-t border-slate-100 pt-2">
                      Focus: {step.focusAction}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Critical Messaging Banner */}
        <section className="py-10 bg-amber-500/10 border-y border-amber-300/40">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/90 border border-amber-300 shadow-sm">
              <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-display font-bold text-amber-900 uppercase tracking-wider">
                  Important Pedagogical Axiom
                </h4>
                <p className="text-base sm:text-lg font-display font-bold text-brand-primary-deep mt-0.5">
                  “Memory techniques support conceptual learning. They are not a replacement for understanding.”
                </p>
                <p className="text-xs sm:text-sm text-brand-slate-muted mt-1">
                  We use memory frameworks to relieve cognitive load and test anxiety so the student’s mind is completely free to reason, analyze, and synthesize.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Memory & Cognitive Techniques (6 Techniques) */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              badge="Cognitive Science in Practice"
              title="Memory &"
              highlightText="Cognitive Techniques"
              subtitle="Scientific frameworks drawn from neuroscience and cognitive psychology to make learning effortless and permanent."
              align="center"
            />

            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cognitiveTechniquesData.map((tech) => {
                const Icon = techniqueIcons[tech.id] || Brain;

                return (
                  <div
                    key={tech.id}
                    className="p-7 rounded-3xl bg-brand-slate-bg border border-slate-200/90 shadow-soft hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-200 flex items-center justify-center text-brand-secondary mb-4">
                        <Icon className="w-6 h-6" />
                      </div>

                      <h3 className="text-xl font-display font-bold text-brand-primary-deep">
                        {tech.name}
                      </h3>

                      <p className="mt-2 text-xs font-semibold text-brand-secondary">
                        {tech.shortDesc}
                      </p>

                      <div className="mt-4 p-3.5 rounded-xl bg-white border border-slate-200/80 text-xs space-y-2">
                        <div>
                          <span className="font-bold text-brand-primary-deep block">How It Works:</span>
                          <span className="text-brand-slate-muted">{tech.howItWorks}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-200/70 text-xs">
                      <span className="font-bold text-brand-primary block text-[11px] uppercase tracking-wider mb-0.5">
                        Math Application:
                      </span>
                      <span className="text-brand-navy-700 italic">{tech.example}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTASection />
      </main>
    </>
  );
};
