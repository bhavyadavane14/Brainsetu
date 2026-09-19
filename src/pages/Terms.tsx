import React from 'react';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { SEO } from '../components/common/SEO';
import { siteConfig } from '../data/siteConfig';

export const Terms: React.FC = () => {
  return (
    <>
      <SEO
        title="Terms & Conditions"
        description="BrainSetu Academy terms of service and educational program policies."
      />

      <main className="bg-brand-slate-bg min-h-screen py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Terms & Conditions' }]} />

          <div className="mt-6 p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-card space-y-6 text-sm text-brand-navy-700 leading-relaxed">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-secondary">
                Terms of Service
              </span>
              <h1 className="text-2xl sm:text-3xl font-display font-extrabold text-brand-primary-deep mt-1">
                Terms & Conditions
              </h1>
              <p className="text-xs text-brand-slate-muted mt-1">
                Effective: January 2026 • BrainSetu Academy
              </p>
            </div>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-brand-primary-deep">1. Educational Scope</h2>
              <p>
                BrainSetu Academy provides supplementary cognitive, mathematical, and conceptual mentoring programs. Our pedagogical materials and techniques are designed to support and strengthen school curriculum comprehension and higher-order analytical reasoning.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-brand-primary-deep">2. Intellectual Property</h2>
              <p>
                All proprietary methodologies, "The Learning Bridge" framework, Intellia360 conceptual architectures, visual memory models, problem sheets, and curriculum frameworks are the intellectual property of BrainSetu Academy. Unauthorized reproduction or commercial redistribution is strictly prohibited.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-brand-primary-deep">3. Diagnostic Assessment & Counselling</h2>
              <p>
                Baseline diagnostic assessments are offered as exploratory tools to help parents understand their child's cognitive learning style and prerequisite readiness. Recommendations are tailored based on the initial evaluation and mentor observations.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-brand-primary-deep">4. Phase 1 Platform Nature</h2>
              <p>
                This current website represents Phase 1: Public Frontend Architecture. Online portal logins, digital assessment submissions, automated grading, and payment processing are slated for deployment in subsequent phases.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-brand-primary-deep">5. Amendments & Inquiries</h2>
              <p>
                BrainSetu Academy reserves the right to update these terms to reflect curriculum enhancements. For clarifications, please reach out to{' '}
                <a href={`mailto:${siteConfig.contact.email}`} className="text-brand-secondary font-semibold hover:underline">
                  {siteConfig.contact.email}
                </a>.
              </p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};
