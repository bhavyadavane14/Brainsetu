export interface ContactConfig {
  phone: string;
  phoneSecondary: string;
  phones: string[];
  email: string;
  location: string;
  address: {
    name: string;
    studio: string;
    landmark: string;
    city: string;
  };
  hours: string;
  whatsapp: string;
  socials: {
    instagram: string;
    instagramHandle: string;
    linkedin: string;
    youtube: string;
  };
}

export const siteConfig = {
  brandName: 'BrainSetu Academy',
  concept: 'The Learning Bridge',
  philosophy: 'Don’t learn Mathematics faster. Understand Mathematics better.',
  tagline: 'Building Smarter Minds. Creating Confident Learners.',
  supportingLine: 'Learn faster, remember better, think smarter, and perform with confidence.',
  copyrightYear: 2026,
  
  contact: {
    phone: '+91 8805333303',
    phoneSecondary: '+91 9867063163',
    phones: ['+91 8805333303', '+91 9867063163'],
    email: 'enquiry@brainsetu.academy',
    location: 'Feliz Flow Studio, Next to Hiranandani Trust School, Panvel – 410207',
    address: {
      name: 'BrainSetu Academy',
      studio: 'Feliz Flow Studio',
      landmark: 'Next to Hiranandani Trust School',
      city: 'Panvel – 410207'
    },
    hours: 'Monday – Saturday: 9:30 AM – 7:00 PM IST',
    whatsapp: '+91 8805333303',
    socials: {
      instagram: 'https://www.instagram.com/brainsetu_academy/',
      instagramHandle: '@brainsetu_academy',
      linkedin: 'https://linkedin.com/company/brainsetu',
      youtube: 'https://youtube.com/@brainsetu'
    }
  },

  vision: 'To build a generation of learners who don’t just memorize information, but understand, retain, apply, and confidently use their knowledge.',

  missionPoints: [
    { title: 'Improve Memory & Retention', desc: 'Replace fragile short-term cramming with durable semantic memory techniques.' },
    { title: 'Develop Logical & Analytical Thinking', desc: 'Instill structured deductive reasoning and algorithmic step-by-step clarity.' },
    { title: 'Strengthen Academic Fundamentals', desc: 'Eradicate prerequisite conceptual gaps so higher math becomes intuitive.' },
    { title: 'Make Learning Engaging', desc: 'Transform intimidating equations into interactive, visual discoveries and puzzles.' },
    { title: 'Reduce Rote Memorization', desc: 'Promote first-principles understanding: derive and visualize before memorizing.' },
    { title: 'Build Academic Confidence', desc: 'Foster poise and fearlessness when encountering non-routine, complex challenges.' },
    { title: 'Personalized Academic Guidance', desc: 'Acknowledge individual cognitive fingerprints with tailored mentor support.' },
    { title: 'Modern Technology Integration', desc: 'Harmonize passionate human mentorship with future-ready Intellia360 tools.' }
  ],

  whoWeServeStages: [
    {
      stage: 'Pre-Primary',
      ageSpan: 'Ages 4 – 6',
      headline: 'Curiosity & Foundational Thinking',
      description: 'Nurture early number sense, spatial awareness, and intuitive pattern recognition through playful multi-sensory games.',
      badge: 'Early Explorers'
    },
    {
      stage: 'Primary',
      ageSpan: 'Grades 1 – 5',
      headline: 'Strong Mathematical Foundations',
      description: 'Transform basic arithmetic into solid conceptual scaffolding, removing number anxiety before it can take root.',
      badge: 'Core Foundation'
    },
    {
      stage: 'Middle School',
      ageSpan: 'Grades 6 – 8',
      headline: 'Conceptual Understanding & Reasoning',
      description: 'Bridge concrete numbers with algebraic abstraction, geometric reasoning, and cognitive memory techniques.',
      badge: 'Concept Builders'
    },
    {
      stage: 'Secondary',
      ageSpan: 'Grades 9 – 10',
      headline: 'Academic Mastery & Problem Solving',
      description: 'Master rigorous board curricula, systematic exam execution, multistep proofs, and high-order thinking.',
      badge: 'Board Excellence'
    },
    {
      stage: 'Higher Secondary',
      ageSpan: 'Grades 11 – 12',
      headline: 'Advanced Mathematical & Competitive Foundations',
      description: 'Equip aspirants with Olympiad proof methods, advanced calculus, and deep analytical problem synthesis.',
      badge: 'Competitive Edge'
    }
  ],

  comparisonItems: [
    {
      traditional: 'Rote Memorization',
      traditionalDetail: 'Mechanical repetition of formulas without grasping underlying proofs.',
      brainsetu: 'Memory Techniques + Understanding',
      brainsetuDetail: 'First-principles comprehension paired with durable mnemonic chunking.'
    },
    {
      traditional: 'Teacher-Centric Delivery',
      traditionalDetail: 'Passive lectures where the instructor does all the solving.',
      brainsetu: 'Student-Centric Inquiry',
      brainsetuDetail: 'Active student participation, hands-on modeling, and Socratic guided discovery.'
    },
    {
      traditional: 'One-Size-Fits-All Pace',
      traditionalDetail: 'Rigid timelines leaving struggling students behind and boring fast learners.',
      brainsetu: 'Personalized Learning',
      brainsetuDetail: 'Targeted gap diagnosis, custom velocity calibration, and adaptive practice.'
    },
    {
      traditional: 'Marks-Only Focus',
      traditionalDetail: 'Short-term exam cramming that dissolves days after the test.',
      brainsetu: 'Lifelong Skills + Academic Performance',
      brainsetuDetail: 'Cognitive faculties, logical reasoning, and academic mastery growing hand in hand.'
    },
    {
      traditional: 'Repetitive Drill Practice',
      traditionalDetail: 'Mindless replication of identical standard questions.',
      brainsetu: 'Smart Deliberate Practice',
      brainsetuDetail: 'Tiered difficulty progression targeting the exact boundary of child’s growth.'
    },
    {
      traditional: 'Passive Learning',
      traditionalDetail: 'Silent listening leading to quick cognitive fatigue and distraction.',
      brainsetu: 'Active Intellectual Engagement',
      brainsetuDetail: 'Debating concepts, discovering patterns, and vocalizing reasoning steps.'
    },
    {
      traditional: 'Limited Retrospective Tracking',
      traditionalDetail: 'Exam report cards arrive weeks after difficulties originated.',
      brainsetu: 'Continuous Formative Diagnostics',
      brainsetuDetail: 'Instant feedback loops identifying friction points at the sub-topic level.'
    },
    {
      traditional: 'Textbook Dependent Only',
      traditionalDetail: 'Flat 2D pages unable to demonstrate dynamic spatial and algebraic models.',
      brainsetu: 'Physical Mentoring + Digital + AI Support',
      brainsetuDetail: 'The best of human mentoring amplified by interactive Intellia360 tools.'
    }
  ],

  parentPillars: [
    {
      title: 'Understand Learning Styles',
      description: 'Discover how your child processes spatial, verbal, and numerical concepts to support them without frustration.'
    },
    {
      title: 'Identify Hidden Learning Gaps',
      description: 'Pinpoint subtle foundational misconceptions from prior academic years that cause present-day math anxiety.'
    },
    {
      title: 'Track Holistic Cognitive Development',
      description: 'Follow concrete indicators of attention span, working memory retention, and autonomous problem-solving growth.'
    },
    {
      title: 'Mentoring Consultations & Updates',
      description: 'Receive transparent, actionable feedback and direct access to dedicated mentors.'
    },
    {
      title: 'Cultivate Better Habits at Home',
      description: 'Actionable parenting frameworks to turn homework time into an enjoyable, stress-free confidence ritual.'
    }
  ],

  parentJourneySteps: [
    { step: '01', title: 'Enquire', desc: 'Share your child’s grade, goals, and current learning challenges.' },
    { step: '02', title: 'Counselling', desc: 'Compassionate consultation with an academic advisor to discuss learning history.' },
    { step: '03', title: 'Diagnostic Assessment', desc: 'Low-stress cognitive & conceptual evaluation to map prerequisite readiness.' },
    { step: '04', title: 'Program Recommendation', desc: 'Bespoke roadmap aligned with the child’s unique learning style and velocity.' },
    { step: '05', title: 'Interactive Learning', desc: 'Structured mentor sessions, hands-on concept discovery, and smart practice.' },
    { step: '06', title: 'Progress Review', desc: 'Regular milestone evaluations shared transparently with parents.' },
    { step: '07', title: 'Continuous Support', desc: 'Long-term cognitive development and academic confidence reinforcement.' }
  ]
};
