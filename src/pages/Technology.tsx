import React, { useState } from 'react';
import { 
  Cpu, 
  Lock, 
  ArrowRight
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { SectionHeader } from '../components/common/SectionHeader';
import { intellia360Features, futurePlatformRoadmap } from '../data/ecosystem';
import { Button } from '../components/common/Button';
import { FuturePortalModal } from '../components/common/FuturePortalModal';
import { CTASection } from '../components/sections/CTASection';

export const Technology: React.FC = () => {
  const [portalOpen, setPortalOpen] = useState(false);
  const [activePortalRole, setActivePortalRole] = useState<'Student' | 'Parent' | 'Teacher'>('Student');

  const openPortalWithRole = (role: 'Student' | 'Parent' | 'Teacher') => {
    setActivePortalRole(role);
    setPortalOpen(true);
  };

  return (
    <>
      <SEO
        title="Technology & AI Ecosystem — Physical + Digital + Intellia360"
        description="BrainSetu combines passionate human mentorship with interactive mathematics software, diagnostic analytics, and our upcoming Intellia360 Socratic AI assistant."
      />

      <main className="bg-brand-slate-bg min-h-screen">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Breadcrumbs items={[{ label: 'Technology & AI' }]} />
          </div>
        </div>

        {/* Hero Banner */}
        <section className="py-14 sm:py-20 bg-gradient-to-b from-white via-brand-slate-bluebg/70 to-brand-slate-bg border-b border-slate-200 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-brand-secondary text-xs font-bold uppercase tracking-wider">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>The Tripartite Learning Paradigm</span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-brand-primary-deep tracking-tight">
                  Technology That Amplifies{' '}
                  <span className="text-gradient">Human Understanding</span>
                </h1>

                <p className="text-base sm:text-lg text-brand-navy-700 leading-relaxed">
                  We believe technology should never replace the empathy and diagnostic intuition of a master educator. Instead, it serves as an interactive cognitive prosthesis that makes abstract mathematics tangible, visual, and measurable.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <Button
                    variant="primary"
                    size="md"
                    onClick={() => openPortalWithRole('Student')}
                    icon={<ArrowRight className="w-4 h-4" />}
                  >
                    Preview Student Portal
                  </Button>
                  <Button
                    variant="outline"
                    size="md"
                    onClick={() => openPortalWithRole('Parent')}
                  >
                    Preview Parent Hub
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <img
                    src="/images/tech-ecosystem.jpg"
                    alt="Teacher, student, and interactive mathematics learning screens"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* The 3 Modalities: Physical, Digital, AI-Powered */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              badge="Integrated Modalities"
              title="Three Pillars of the"
              highlightText="BrainSetu Experience"
              subtitle="Each modality plays a distinct, non-redundant role in shaping the learner's intellectual journey."
              align="center"
            />

            <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Physical */}
              <div className="p-8 rounded-3xl bg-brand-slate-bg border border-slate-200 shadow-soft space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 text-brand-primary flex items-center justify-center font-display font-black text-xl">
                  01
                </div>
                <h3 className="text-xl font-display font-bold text-brand-primary-deep">
                  Physical Learning
                </h3>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-secondary block">
                  Human Mentor Interaction
                </span>
                <p className="text-sm text-brand-slate-muted leading-relaxed">
                  Direct dialogue with passionate mathematics mentors. Teachers perceive hesitation, emotional tension, and subtle cognitive stumbling blocks that no automated algorithm can detect.
                </p>
                <ul className="space-y-2 text-xs text-brand-navy-700 pt-2 border-t border-slate-200">
                  <li className="flex items-center gap-2">✓ Socratic guiding questions</li>
                  <li className="flex items-center gap-2">✓ Safe failure environment</li>
                  <li className="flex items-center gap-2">✓ Emotional confidence building</li>
                </ul>
              </div>

              {/* Digital */}
              <div className="p-8 rounded-3xl bg-brand-slate-bg border border-cyan-200 shadow-soft space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-cyan-100 text-brand-secondary flex items-center justify-center font-display font-black text-xl">
                  02
                </div>
                <h3 className="text-xl font-display font-bold text-brand-primary-deep">
                  Digital Learning
                </h3>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-secondary block">
                  Dynamic Visual Manipulatives
                </span>
                <p className="text-sm text-brand-slate-muted leading-relaxed">
                  Formulas become interactive 3D objects. Students slide variables to see graphs morph in real time, transforming algebraic equations into vivid spatial intuition.
                </p>
                <ul className="space-y-2 text-xs text-brand-navy-700 pt-2 border-t border-slate-200">
                  <li className="flex items-center gap-2">✓ Dynamic geometry engines</li>
                  <li className="flex items-center gap-2">✓ Gamified cognitive puzzles</li>
                  <li className="flex items-center gap-2">✓ Step-by-step proof playback</li>
                </ul>
              </div>

              {/* AI-Powered */}
              <div className="p-8 rounded-3xl bg-brand-slate-bg border border-amber-200 shadow-soft space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-brand-accent flex items-center justify-center font-display font-black text-xl">
                  03
                </div>
                <h3 className="text-xl font-display font-bold text-brand-primary-deep">
                  AI-Powered Learning
                </h3>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block">
                  Intellia360 Socratic Assistant
                </span>
                <p className="text-sm text-brand-slate-muted leading-relaxed">
                  Scheduled for Phase 2, our context-aware AI learning companion diagnoses where derivations break down and offers progressive hints instead of spoiling answers.
                </p>
                <ul className="space-y-2 text-xs text-brand-navy-700 pt-2 border-t border-slate-200">
                  <li className="flex items-center gap-2">✓ Non-spoiler Socratic hints</li>
                  <li className="flex items-center gap-2">✓ Spaced repetition triggers</li>
                  <li className="flex items-center gap-2">✓ Diagnostic bottleneck alerts</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Intellia360 Ecosystem Features */}
        <section className="py-16 bg-brand-slate-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              badge="Digital Intelligence"
              title="Powered by the Future-Ready"
              highlightText="Intellia360 Ecosystem"
              subtitle="The underlying software engine connecting student practice, diagnostic assessment, and analytical feedback loops."
              align="center"
            />

            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {intellia360Features.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200 shadow-soft"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-cyan-50 text-brand-secondary border border-cyan-200">
                    {feat.tag}
                  </span>
                  <h3 className="text-lg font-display font-bold text-brand-primary-deep mt-3">
                    {feat.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-brand-slate-muted leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Future Learning Platform Showcase (Clearly marked Coming in Future Phase) */}
        <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-3">
                <Lock className="w-3.5 h-3.5" />
                <span>Phase 2 Architecture Preview</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white">
                Future Learning Platform Modules
              </h2>
              <p className="mt-3 text-sm text-slate-300">
                These capabilities are currently in active architectural preparation for the Phase 2 release. Explore the upcoming feature blueprints below:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {futurePlatformRoadmap.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-300">
                        {item.category}
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-400/30">
                        Coming in Future Phase
                      </span>
                    </div>

                    <h3 className="text-lg font-display font-bold text-white">
                      {item.title}
                    </h3>

                    <ul className="mt-4 space-y-2 text-xs text-slate-300">
                      {item.features.map((f, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-700">
                    <button
                      type="button"
                      onClick={() => setPortalOpen(true)}
                      className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors"
                    >
                      <span>Preview Portal Blueprint</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTASection />
      </main>

      <FuturePortalModal
        isOpen={portalOpen}
        onClose={() => setPortalOpen(false)}
        defaultRole={activePortalRole}
      />
    </>
  );
};
