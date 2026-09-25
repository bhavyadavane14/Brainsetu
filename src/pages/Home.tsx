import React from 'react';
import { SEO } from '../components/common/SEO';
import { HeroSection } from '../components/sections/HeroSection';
import { ImpactSection } from '../components/sections/ImpactSection';
import { WhyBrainSetuSection } from '../components/sections/WhyBrainSetuSection';
import { VideoShowcaseSection } from '../components/sections/VideoShowcaseSection';
import { LearningJourneySection } from '../components/sections/LearningJourneySection';
import { ProgramsSection } from '../components/sections/ProgramsSection';
import { TechEcosystemSection } from '../components/sections/TechEcosystemSection';
import { StudentDevelopmentSection } from '../components/sections/StudentDevelopmentSection';
import { CTASection } from '../components/sections/CTASection';

export const Home: React.FC = () => {
  return (
    <>
      <SEO
        title="Building Smarter Minds. Creating Confident Learners"
        description="BrainSetu Academy bridges Knowledge, Understanding, Application, and Confidence through conceptual mathematics, cognitive memory techniques, and modern learning technology."
      />

      <main>
        {/* Section 2: Hero */}
        <HeroSection />

        {/* Section 2.5: Our Impact Statistics */}
        <ImpactSection />

        {/* Section 3: Why BrainSetu */}
        <WhyBrainSetuSection />

        {/* Section 3.5: Video Tour & Intellia 360 Showcase */}
        <VideoShowcaseSection />

        {/* Section 4: Learning Journey */}
        <LearningJourneySection />

        {/* Section 5: Programs */}
        <ProgramsSection />

        {/* Section 6: Technology + Human Learning */}
        <TechEcosystemSection />

        {/* Section 7: Student Development */}
        <StudentDevelopmentSection />

        {/* Section 8: For Parents CTA */}
        <CTASection />
      </main>
    </>
  );
};
