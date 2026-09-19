import React, { useState } from 'react';
import { 
  BarChart2, 
  TrendingUp, 
  Info, 
  ArrowRight
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { SectionHeader } from '../components/common/SectionHeader';
import { developmentSkills, illustrativeDashboardMetrics } from '../data/skills';
import { Button } from '../components/common/Button';
import { CTASection } from '../components/sections/CTASection';

export const StudentDevelopment: React.FC = () => {
  const [activeSkillId, setActiveSkillId] = useState<string>(developmentSkills[0].id);

  const activeSkill = developmentSkills.find((s) => s.id === activeSkillId) || developmentSkills[0];

  return (
    <>
      <SEO
        title="Student Development — Learning Beyond Marks"
        description="Nurturing 9 essential cognitive and academic faculties: Memory, Concentration, Observation, Reasoning, Creativity, Problem-Solving, Logic, Confidence, and Independent Learning."
      />

      <main className="bg-brand-slate-bg min-h-screen">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Breadcrumbs items={[{ label: 'Student Development' }]} />
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-14 sm:py-20 bg-gradient-to-b from-white via-brand-slate-bluebg/60 to-brand-slate-bg border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-50 text-brand-secondary border border-cyan-200">
              Cognitive & Psychological Growth
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-brand-primary-deep tracking-tight">
              Learning <span className="text-gradient">Beyond Marks</span>
            </h1>
            <p className="text-base sm:text-lg text-brand-slate-muted max-w-2xl mx-auto leading-relaxed">
              When students cultivate cognitive resilience, deep attention, and logical deduction, high exam performance follows naturally as a byproduct.
            </p>
          </div>
        </section>

        {/* Interactive Skills Navigator */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              badge="Cognitive Taxonomy"
              title="The Nine Pillars of"
              highlightText="Student Development"
              subtitle="Click each skill to explore its cognitive mechanism and the exact pedagogical drills used at BrainSetu Academy."
              align="center"
            />

            {/* 9 Skill Selector Buttons */}
            <div className="mt-12 grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-9 gap-3">
              {developmentSkills.map((skill) => {
                const isSelected = activeSkillId === skill.id;
                return (
                  <button
                    key={skill.id}
                    type="button"
                    onClick={() => setActiveSkillId(skill.id)}
                    className={`p-3.5 rounded-2xl text-center transition-all duration-200 border flex flex-col items-center justify-center gap-1.5 ${
                      isSelected
                        ? 'bg-brand-primary-deep text-white border-brand-primary-deep shadow-lg scale-105'
                        : 'bg-brand-slate-bg border-slate-200 text-brand-navy-800 hover:bg-slate-100 hover:border-slate-300'
                    }`}
                  >
                    <span className="text-3xl">{skill.emoji}</span>
                    <span className={`text-xs font-bold leading-tight ${isSelected ? 'text-cyan-300' : 'text-brand-navy-700'}`}>
                      {skill.name}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active Skill Showcase */}
            <div className="mt-10 p-8 rounded-3xl bg-brand-slate-bluebg/70 border border-cyan-200/90 shadow-card">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="text-4xl p-3 bg-white rounded-2xl shadow-sm border border-cyan-100">{activeSkill.emoji}</span>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-brand-secondary">
                        Cognitive Faculty Profile
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-brand-primary-deep">
                        {activeSkill.name}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-brand-secondary">
                        {activeSkill.shortDesc}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-brand-navy-700 leading-relaxed">
                    {activeSkill.fullDesc}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
                    <div className="p-4 rounded-2xl bg-white border border-slate-200 text-xs sm:text-sm">
                      <span className="font-bold text-brand-primary block text-xs uppercase tracking-wider mb-1">
                        Cognitive & Academic Benefit:
                      </span>
                      <span className="text-brand-slate-muted">{activeSkill.cognitiveBenefit}</span>
                    </div>

                    <div className="p-4 rounded-2xl bg-white border border-slate-200 text-xs sm:text-sm">
                      <span className="font-bold text-brand-secondary block text-xs uppercase tracking-wider mb-1">
                        BrainSetu Training Protocol:
                      </span>
                      <span className="text-brand-slate-muted">{activeSkill.pedagogicalTechnique}</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-4 p-6 rounded-2xl bg-white border border-slate-200 text-center space-y-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-slate-muted block">
                    Curricular Integration
                  </span>
                  <div className="text-4xl font-display font-black text-brand-secondary">
                    Active
                  </div>
                  <p className="text-xs text-brand-slate-muted">
                    Assessed continuously through our formative diagnostic feedback rubrics.
                  </p>
                  <Button
                    to="/programs"
                    variant="primary"
                    size="sm"
                    className="w-full"
                    icon={<ArrowRight className="w-3.5 h-3.5" />}
                  >
                    View Programs Developing This
                  </Button>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* Illustrative Future Dashboard Progress Concept */}
        <section className="py-16 bg-slate-900 text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-3">
                <Info className="w-3.5 h-3.5" />
                <span>Illustrative Concept Preview</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-white">
                Intellia360 Cognitive Progress Dashboard
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-300">
                A blueprint of how mentors and parents will monitor multi-dimensional student growth in Phase 2.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {illustrativeDashboardMetrics.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-slate-300">{item.name}</span>
                    <BarChart2 className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div className="text-3xl font-display font-extrabold text-white">
                    {item.score}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>{item.trend}</span>
                  </div>
                  <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-cyan-400 to-blue-500 h-full rounded-full" style={{ width: item.score }}></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 rounded-xl bg-slate-800/60 border border-slate-700 text-center text-xs text-slate-400 max-w-2xl mx-auto">
              Notice: The progress indicators above represent future Intellia360 UI architecture. BrainSetu strictly adheres to verified, authentic academic evaluation.
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTASection />
      </main>
    </>
  );
};
