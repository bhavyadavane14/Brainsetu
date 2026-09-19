import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  UserCheck, 
  ChevronDown, 
  Award, 
  ShieldCheck 
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { SectionHeader } from '../components/common/SectionHeader';
import { programsData } from '../data/programs';
import { Button } from '../components/common/Button';
import { EnquiryModal } from '../components/common/EnquiryModal';
import { CTASection } from '../components/sections/CTASection';

export const ProgramDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const program = programsData.find((p) => p.slug === slug);

  if (!program) {
    return <Navigate to="/programs" replace />;
  }

  const otherPrograms = programsData.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <SEO
        title={`${program.title} — Overview & Curriculum`}
        description={`${program.shortDescription} Designed for ${program.level}. Build conceptual clarity and cognitive mastery with BrainSetu Academy.`}
      />

      <main className="bg-brand-slate-bg min-h-screen">
        {/* Breadcrumb Bar */}
        <div className="bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Breadcrumbs
              items={[
                { label: 'Programs', to: '/programs' },
                { label: program.title },
              ]}
            />
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-14 sm:py-20 bg-gradient-to-b from-white via-brand-slate-bluebg/60 to-brand-slate-bg border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-8 space-y-4">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                    program.isFree 
                      ? 'bg-[#FEF08A] text-[#854D0E] border border-amber-300' 
                      : 'bg-cyan-50 text-brand-secondary border border-cyan-200'
                  }`}>
                    {program.badge}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-brand-navy-700">
                    {program.level}
                  </span>
                  {program.isFree && (
                    <div className="flex items-center gap-2 text-xs">
                      <span className="text-slate-400 line-through font-bold">{program.originalPrice}</span>
                      <span className="text-slate-500 line-through font-bold">{program.discountedPrice}</span>
                      <span className="text-emerald-600 font-extrabold">100% FREE PASS</span>
                    </div>
                  )}
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-brand-primary-deep tracking-tight">
                  {program.title}
                </h1>

                <p className="text-lg text-brand-secondary font-medium">
                  {program.tagline}
                </p>

                <p className="text-base text-brand-navy-700 leading-relaxed max-w-3xl">
                  {program.overview}
                </p>

                <div className="pt-3 flex flex-wrap items-center gap-3">
                  <Button
                    variant="accent"
                    size="lg"
                    onClick={() => setEnquiryOpen(true)}
                    icon={<ArrowRight className="w-4 h-4" />}
                  >
                    Enquire for {program.title}
                  </Button>
                  <Button
                    to="/contact"
                    variant="outline"
                    size="lg"
                  >
                    Book Diagnostic Assessment
                  </Button>
                </div>
              </div>

              {/* Quick Info Box */}
              <div className="lg:col-span-4 p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-card space-y-5">
                <h3 className="text-base font-display font-bold text-brand-primary-deep pb-3 border-b border-slate-100">
                  Program Overview Fast Facts
                </h3>

                <div className="space-y-3.5 text-xs sm:text-sm">
                  <div>
                    <span className="text-brand-slate-muted block text-xs uppercase tracking-wider">Suitable For:</span>
                    <span className="font-semibold text-brand-navy-800">{program.suitableFor}</span>
                  </div>
                  <div>
                    <span className="text-brand-slate-muted block text-xs uppercase tracking-wider">Duration / Cohort:</span>
                    <span className="font-semibold text-brand-navy-800">{program.duration}</span>
                  </div>
                  <div>
                    <span className="text-brand-slate-muted block text-xs uppercase tracking-wider">Methodology:</span>
                    <span className="font-semibold text-brand-primary">6-Stage BrainSetu Mastery Cycle</span>
                  </div>
                  <div>
                    <span className="text-brand-slate-muted block text-xs uppercase tracking-wider">Format:</span>
                    <span className="font-semibold text-brand-navy-800">Physical Mentorship + Intellia360 Practice</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <div className="p-3 rounded-xl bg-cyan-50/80 border border-cyan-200 text-xs text-brand-navy-700">
                    <span className="font-bold text-brand-secondary block mb-0.5">Continuous Evaluation:</span>
                    {program.assessment}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 1. Who It Is For & Skills Developed */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              
              {/* Who It Is For */}
              <div className="p-8 rounded-3xl bg-brand-slate-bg border border-slate-200">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-brand-primary flex items-center justify-center">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-brand-primary-deep">
                      Who It Is For
                    </h3>
                    <p className="text-xs text-brand-slate-muted">Ideal learner profiles for this track</p>
                  </div>
                </div>

                <ul className="space-y-3.5">
                  {program.whoItIsFor.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-brand-navy-700">
                      <CheckCircle2 className="w-5 h-5 text-brand-secondary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills Developed */}
              <div className="p-8 rounded-3xl bg-brand-slate-bg border border-slate-200">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-cyan-100 text-brand-secondary flex items-center justify-center">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-brand-primary-deep">
                      Skills Developed
                    </h3>
                    <p className="text-xs text-brand-slate-muted">Cognitive & mathematical capabilities gained</p>
                  </div>
                </div>

                <ul className="space-y-3.5">
                  {program.skillsDeveloped.map((skill, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-brand-navy-700">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* 2. Learning Activities & Methodology */}
        <section className="py-16 bg-brand-slate-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            {/* Learning Activities */}
            <div>
              <SectionHeader
                badge="Curriculum Experience"
                title="Learning"
                highlightText="Activities"
                subtitle="Hands-on interactive routines that transform passive listening into active mathematical discovery."
                align="left"
              />

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {program.learningActivities.map((act, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-soft">
                    <span className="w-8 h-8 rounded-lg bg-cyan-50 text-brand-secondary font-bold text-xs flex items-center justify-center mb-3">
                      0{idx + 1}
                    </span>
                    <h4 className="text-base font-display font-bold text-brand-primary-deep">
                      {act.title}
                    </h4>
                    <p className="mt-2 text-xs sm:text-sm text-brand-slate-muted leading-relaxed">
                      {act.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Methodology Flow */}
            <div className="pt-8 border-t border-slate-200">
              <SectionHeader
                badge="Structured Approach"
                title="Pedagogical"
                highlightText="Methodology"
                subtitle="Step-by-step framework to ensure every concept is cemented from first principles."
                align="left"
              />

              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                {program.methodology.map((m, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-soft relative overflow-hidden">
                    <div className="w-10 h-10 rounded-xl bg-brand-primary-subtle text-brand-primary font-display font-bold text-sm flex items-center justify-center mb-3">
                      Phase {idx + 1}
                    </div>
                    <h4 className="text-base font-display font-bold text-brand-primary-deep">
                      {m.step}
                    </h4>
                    <p className="mt-2 text-xs sm:text-sm text-brand-slate-muted leading-relaxed">
                      {m.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* 3. Expected Outcomes & Assessment */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-7 space-y-4">
                <SectionHeader
                  badge="Tangible Results"
                  title="Expected"
                  highlightText="Outcomes"
                  subtitle="How this program reshapes the student's cognitive confidence and academic competence."
                  align="left"
                />

                <div className="space-y-3 pt-2">
                  {program.expectedOutcomes.map((outcome, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-brand-slate-bg border border-slate-200 text-sm text-brand-navy-800">
                      <Award className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" />
                      <span>{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 p-8 rounded-3xl bg-brand-primary-deep text-white shadow-xl space-y-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-display font-bold">
                  Assessment & Progress Tracking
                </h3>
                <p className="text-sm text-slate-200 leading-relaxed">
                  {program.assessment}
                </p>
                <div className="pt-4 border-t border-slate-700">
                  <Button
                    variant="accent"
                    size="md"
                    className="w-full justify-center"
                    onClick={() => setEnquiryOpen(true)}
                  >
                    Enquire Now / Book Diagnostic
                  </Button>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 4. Program FAQs */}
        {program.faqs && program.faqs.length > 0 && (
          <section className="py-16 bg-brand-slate-bg border-t border-slate-200">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <SectionHeader
                badge="Program FAQs"
                title="Common Questions About"
                highlightText={program.title}
                align="center"
              />

              <div className="mt-8 space-y-3">
                {program.faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div
                      key={idx}
                      className="rounded-2xl border border-slate-200 bg-white overflow-hidden"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        className="w-full p-5 text-left flex items-center justify-between gap-4 select-none focus:outline-none"
                      >
                        <span className="font-display font-bold text-brand-primary-deep text-sm sm:text-base">
                          {faq.question}
                        </span>
                        <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                      </button>

                      {isOpen && (
                        <div className="px-5 pb-5 pt-1 text-sm text-brand-slate-muted border-t border-slate-100 leading-relaxed">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* 5. Explore Other Programs */}
        <section className="py-16 bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-xl font-display font-bold text-brand-primary-deep">
                  Explore Other Learning Programs
                </h3>
                <p className="text-xs text-brand-slate-muted">Curated complementary tracks</p>
              </div>
              <Link to="/programs" className="text-xs font-bold text-brand-secondary hover:text-brand-primary flex items-center gap-1">
                <span>View All 6</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherPrograms.map((other) => (
                <div key={other.id} className="p-6 rounded-2xl bg-brand-slate-bg border border-slate-200 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-cyan-50 text-brand-secondary">
                      {other.badge}
                    </span>
                    <h4 className="text-base font-display font-bold text-brand-primary-deep mt-2">
                      {other.title}
                    </h4>
                    <p className="text-xs text-brand-slate-muted mt-1 line-clamp-2">
                      {other.shortDescription}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-200">
                    <Link to={`/programs/${other.slug}`} className="text-xs font-bold text-brand-secondary flex items-center gap-1">
                      <span>Explore Program</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Global CTA */}
        <CTASection />
      </main>

      {/* Enquiry Modal with preselected program */}
      <EnquiryModal
        isOpen={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
        preselectedProgram={program.title}
        modalTitle={`Enquire for ${program.title}`}
      />
    </>
  );
};
