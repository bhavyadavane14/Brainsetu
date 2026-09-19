import React from 'react';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { SEO } from '../components/common/SEO';
import { siteConfig } from '../data/siteConfig';

export const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="BrainSetu Academy privacy and data protection policy for students, parents, and enquiries."
      />

      <main className="bg-brand-slate-bg min-h-screen py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />

          <div className="mt-6 p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-card space-y-6 text-sm text-brand-navy-700 leading-relaxed">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-secondary">
                Legal & Privacy
              </span>
              <h1 className="text-2xl sm:text-3xl font-display font-extrabold text-brand-primary-deep mt-1">
                Privacy Policy
              </h1>
              <p className="text-xs text-brand-slate-muted mt-1">
                Last Updated: January 2026 • BrainSetu Academy
              </p>
            </div>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-brand-primary-deep">1. Information We Collect</h2>
              <p>
                BrainSetu Academy collects student and parent information strictly necessary for academic evaluation, course communication, diagnostic assessment reports, and program recommendations. This may include parent name, student grade, phone number, and email address submitted via enquiry forms.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-brand-primary-deep">2. Student Data Protection & Confidentiality</h2>
              <p>
                We recognize the sensitive nature of educational progress data. Individual diagnostic assessments and cognitive evaluations are kept strictly confidential between assigned academic mentors and parents. We do not sell, rent, or distribute student records or parent contact details to third-party commercial vendors.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-brand-primary-deep">3. Communication & Consent</h2>
              <p>
                By submitting an enquiry through our website or booking an exploratory counselling session, parents consent to receiving direct communications via phone call, WhatsApp, or email regarding curriculum details and consultation scheduling. You may opt out of promotional updates at any time.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-brand-primary-deep">4. Phase 2 Platform Security</h2>
              <p>
                Future releases of the Intellia360 digital learning hub and student portals will implement industry-standard encryption, multi-factor authentication, and strict role-based access control to safeguard student progress metrics and certificates.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-brand-primary-deep">5. Contacting Our Data Officer</h2>
              <p>
                For questions regarding student data, privacy practices, or data deletion requests, please contact our team at{' '}
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
