export interface EcosystemFlowStep {
  step: string;
  title: string;
  role: string;
  description: string;
  iconName: string;
}

export const ecosystemFlowSteps: EcosystemFlowStep[] = [
  {
    step: '01',
    title: 'Teacher / Mentor',
    role: 'Human Guidance & Empathy',
    description: 'Expert educators provide deep conceptual explanations, diagnose emotional hurdles, and inspire intellectual curiosity.',
    iconName: 'UserCheck'
  },
  {
    step: '02',
    title: 'Student Centric',
    role: 'Active Learner',
    description: 'The student actively engages with concepts through inquiry, hands-on exploration, and questions rather than passive listening.',
    iconName: 'Sparkles'
  },
  {
    step: '03',
    title: 'Interactive Learning',
    role: 'Digital Concept Models',
    description: 'Holographic and dynamic software simulations visualize abstract mathematical spaces and geometrical transformations.',
    iconName: 'Layers'
  },
  {
    step: '04',
    title: 'Smart Practice',
    role: 'Gamified & Targeted Drills',
    description: 'Practice routines adapt to the student’s velocity, delivering optimal challenge without boredom or frustration.',
    iconName: 'Target'
  },
  {
    step: '05',
    title: 'Diagnostic Assessment',
    role: 'Formative Milestone Feedback',
    description: 'Continuous low-stakes checks that identify the exact root causes of confusion before moving ahead.',
    iconName: 'ClipboardCheck'
  },
  {
    step: '06',
    title: 'Cognitive Analytics',
    role: 'Actionable Intelligence',
    description: 'Data analytics map retention rates, problem-solving speed, and conceptual gaps for both mentor and parent.',
    iconName: 'LineChart'
  },
  {
    step: '07',
    title: 'Personalized Learning',
    role: 'Continuous Adaptation',
    description: 'Feedback loops recalibrate individual learning plans so each child reaches their unique pinnacle of mastery.',
    iconName: 'Compass'
  }
];

export const intellia360Features = [
  {
    title: 'Digital Mathematics Learning',
    description: 'Dynamic graph manipulation, visual proofs, and interactive geometry engines that make formulas intuitive.',
    tag: 'Core Platform'
  },
  {
    title: 'Gamified Cognitive Practice',
    description: 'Engaging brain gym challenges and puzzle milestones that turn daily math practice into an anticipated activity.',
    tag: 'Engagement'
  },
  {
    title: 'Interactive Concept Modelling',
    description: '3D manipulatives and variable sliders allowing students to discover mathematical theorems independently.',
    tag: 'Conceptual'
  },
  {
    title: 'AI Learning Assistance',
    description: 'Context-aware learning buddy providing gentle Socratic hints rather than spoon-fed final answers.',
    tag: 'Intelligent AI'
  },
  {
    title: 'Precision Progress Analytics',
    description: 'Granular diagnostic reports highlighting concept retention, problem fluency, and growth trends over time.',
    tag: 'Insights'
  }
];

export const futurePlatformRoadmap = [
  {
    title: 'Student Portal & Dashboard',
    category: 'Student Experience',
    features: ['Daily curated practice missions', 'Memory challenge arena', 'Personalized milestone badges', 'Interactive formula vault'],
    badge: 'Phase 2 Architecture Ready'
  },
  {
    title: 'Parent Oversight Hub',
    category: 'Family Transparency',
    features: ['Real-time skill growth updates', 'Mentor consultation notes', 'Cognitive development trends', 'Effort & consistency tracking'],
    badge: 'Phase 2 Architecture Ready'
  },
  {
    title: 'Mentor & Teacher Command Center',
    category: 'Educator Tools',
    features: ['Live classroom diagnostics', 'Batch error analysis matrices', 'Adaptive assignment dispatcher', 'Formative evaluation logs'],
    badge: 'Phase 2 Architecture Ready'
  },
  {
    title: 'Intellia360 AI Learning Assistant',
    category: 'Next-Gen AI',
    features: ['Socratic step-by-step guidance', 'Multi-step mistake detection', 'Adaptive difficulty tuning', 'Voice inquiry support'],
    badge: 'Phase 2 Architecture Ready'
  },
  {
    title: 'Certificates & Milestone Badges',
    category: 'Recognition',
    features: ['Verifiable digital credentials', 'Mathematical thinking awards', 'Olympiad readiness badges', 'Portfolios of achievement'],
    badge: 'Phase 2 Architecture Ready'
  },
  {
    title: 'Smart Communications & Notifications',
    category: 'Engagement',
    features: ['Spaced revision reminders', 'Upcoming assessment alerts', 'WhatsApp & SMS updates', 'Milestone celebrations'],
    badge: 'Phase 2 Architecture Ready'
  }
];
