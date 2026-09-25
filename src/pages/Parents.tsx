import React, { useState } from 'react';
import { 
  ArrowRight, 
  Search, 
  TrendingUp, 
  MessageSquare, 
  Home as HomeIcon,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { SectionHeader } from '../components/common/SectionHeader';
import { siteConfig } from '../data/siteConfig';
import { Button } from '../components/common/Button';
import { EnquiryModal } from '../components/common/EnquiryModal';
import { ContactInfoBadge } from '../components/common/ContactInfoBadge';
import { CTASection } from '../components/sections/CTASection';
import { useLanguage } from '../context/LanguageContext';

export const Parents: React.FC = () => {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const { t } = useLanguage();

  const pillarIcons: React.ElementType[] = [Search, ShieldCheck, TrendingUp, MessageSquare, HomeIcon];

  return (
    <>
      <SEO
        title="For Parents — Helping Parents Understand How Their Child Learns"
        description="Discover how BrainSetu partners with parents to diagnose learning bottlenecks, track cognitive development, and nurture confident mathematics study habits at home."
      />

      <main className="bg-brand-slate-bg min-h-screen">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Breadcrumbs items={[{ label: t('parents.breadcrumb') }]} />
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-14 sm:py-20 bg-gradient-to-b from-white via-brand-slate-bluebg/60 to-brand-slate-bg border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-7 space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-brand-primary-deep tracking-tight">
                  {t('parents.heroTitle')}
                </h1>

                <p className="text-base sm:text-lg text-brand-navy-700 leading-relaxed">
                  {t('parents.heroSubtitle')}
                </p>

                <div className="pt-3 flex flex-wrap items-center gap-3">
                  <Button
                    variant="accent"
                    size="lg"
                    onClick={() => setEnquiryOpen(true)}
                    icon={<ArrowRight className="w-4 h-4" />}
                  >
                    {t('parents.bookBtn')}
                  </Button>
                  <Button
                    to="/programs"
                    variant="outline"
                    size="lg"
                  >
                    {t('parents.exploreBtn')}
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <img
                    src="/images/parent-student.jpg"
                    alt="Parent and child exploring interactive mathematics learning puzzle at home"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 5 Core Pillars for Parents */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              badge="Parental Enablement"
              title="Five Pillars of Our"
              highlightText="Parent Guidance"
              subtitle="Concrete ways we keep parents informed, supported, and confident in their child's academic journey."
              align="center"
            />

            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {siteConfig.parentPillars.map((pillar, idx) => {
                const Icon = pillarIcons[idx] || Sparkles;

                return (
                  <div
                    key={idx}
                    className="p-7 rounded-3xl bg-brand-slate-bg border border-slate-200/90 shadow-soft hover:shadow-card-hover transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-200 flex items-center justify-center text-brand-secondary mb-4">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="text-xl font-display font-bold text-brand-primary-deep">
                      {pillar.title}
                    </h3>

                    <p className="mt-2 text-sm text-brand-slate-muted leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Parent Journey Roadmap */}
        <section className="py-16 bg-brand-slate-bg border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              badge="Seamless Admissions & Growth"
              title="The Seven-Step"
              highlightText="Parent Journey"
              subtitle="From your initial inquiry to continuous milestone reviews, here is what partnering with BrainSetu looks like."
              align="center"
            />

            <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4">
              {siteConfig.parentJourneySteps.map((step, idx) => (
                <div
                  key={step.step}
                  className="p-5 rounded-2xl bg-white border border-slate-200 shadow-soft flex flex-col justify-between"
                >
                  <div>
                    <div className="w-8 h-8 rounded-lg bg-cyan-50 text-brand-secondary font-display font-black text-xs flex items-center justify-center mb-3">
                      {step.step}
                    </div>
                    <h4 className="text-base font-display font-bold text-brand-primary-deep">
                      {step.title}
                    </h4>
                    <p className="mt-1.5 text-xs text-brand-slate-muted leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  {idx < siteConfig.parentJourneySteps.length - 1 && (
                    <div className="hidden lg:block pt-3 text-cyan-400 text-right">
                      →
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-12 text-center space-y-8">
              <Button
                variant="accent"
                size="lg"
                onClick={() => setEnquiryOpen(true)}
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Book a Counselling / Assessment Enquiry
              </Button>

              <div className="max-w-3xl mx-auto pt-6">
                <ContactInfoBadge />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTASection />
      </main>

      <EnquiryModal isOpen={enquiryOpen} onClose={() => setEnquiryOpen(false)} />
    </>
  );
};
