export interface SkillArea {
  id: string;
  name: string;
  emoji: string;
  shortDesc: string;
  fullDesc: string;
  cognitiveBenefit: string;
  pedagogicalTechnique: string;
  illustrativeMetric: number; // For future dashboard preview representation
}

export const developmentSkills: SkillArea[] = [
  {
    id: 'memory',
    name: 'Memory',
    emoji: '🧠',
    shortDesc: 'Expand retention capacity, formula retrieval, and structured recall.',
    fullDesc: 'Moving beyond rote memorization into structured semantic encoding. Students learn how to transform abstract information into vivid conceptual anchors and interconnected neural maps.',
    cognitiveBenefit: 'Strengthens working memory capacity and long-term memory retrieval without stress.',
    pedagogicalTechnique: 'Concept chunking, visual association, and spaced interval recall.',
    illustrativeMetric: 92
  },
  {
    id: 'concentration',
    name: 'Concentration',
    emoji: '🎯',
    shortDesc: 'Deep focus stamina and selective attention amidst distractions.',
    fullDesc: 'Cultivating the ability to sustain intense, undisturbed attention on complex mathematical derivations and multistep challenges over extended periods.',
    cognitiveBenefit: 'Reduces careless errors and builds sustained cognitive stamina.',
    pedagogicalTechnique: 'Time-boxed deliberate focus sprints and visual tracking matrices.',
    illustrativeMetric: 88
  },
  {
    id: 'observation',
    name: 'Observation',
    emoji: '👀',
    shortDesc: 'Perceive subtle geometric nuances, boundary conditions, and clues.',
    fullDesc: 'Training the eye and mind to notice hidden assumptions, diagrammatic symmetry, subtle constraints, and edge cases in mathematical problems.',
    cognitiveBenefit: 'Sharpens analytical perception and prevents premature wrong assumptions.',
    pedagogicalTechnique: 'Visual anomaly detection, geometric invariance puzzles, and error spotting.',
    illustrativeMetric: 85
  },
  {
    id: 'reasoning',
    name: 'Reasoning',
    emoji: '🔎',
    shortDesc: 'Formulate deductions, challenge hypotheses, and validate arguments.',
    fullDesc: 'Guiding students to ask "Why does this hold?" rather than passively accepting rules. Constructing logical inferences from known premises to novel conclusions.',
    cognitiveBenefit: 'Fosters rigorous scientific inquiry and robust intellectual independence.',
    pedagogicalTechnique: 'Socratic questioning, contradiction proofs, and hypothesis testing.',
    illustrativeMetric: 94
  },
  {
    id: 'creativity',
    name: 'Creativity',
    emoji: '💡',
    shortDesc: 'Discover elegant alternative solutions and lateral perspectives.',
    fullDesc: 'Mathematics is an art of creative connections. Students are encouraged to find 3 different methods to solve a single problem rather than one repetitive method.',
    cognitiveBenefit: 'Promotes neuroplastic flexibility and lateral divergent thinking.',
    pedagogicalTechnique: 'Multi-solution brainstorming, visual algebra, and open-ended modeling.',
    illustrativeMetric: 90
  },
  {
    id: 'problem-solving',
    name: 'Problem Solving',
    emoji: '🧩',
    shortDesc: 'Deconstruct complex, unfamiliar problems into manageable steps.',
    fullDesc: 'Developing a systematic heuristic playbook: understanding the goal, identifying invariants, breaking down complexity, testing extreme values, and working backwards.',
    cognitiveBenefit: 'Removes the dread of non-routine or unfamiliar questions in exams and real life.',
    pedagogicalTechnique: 'Polya problem-solving heuristics and tiered difficulty decomposition.',
    illustrativeMetric: 95
  },
  {
    id: 'logical-thinking',
    name: 'Logical Thinking',
    emoji: '🧮',
    shortDesc: 'Sequential structure, algorithmic clarity, and deductive validity.',
    fullDesc: 'Building orderly chains of thought where every step follows valid rules of inference, establishing solid foundations for mathematics, programming, and sciences.',
    cognitiveBenefit: 'Eliminates irrational leaps and solidifies step-by-step clarity.',
    pedagogicalTechnique: 'Grid logic puzzles, Boolean truth evaluation, and algorithmic sequencing.',
    illustrativeMetric: 91
  },
  {
    id: 'confidence',
    name: 'Academic Confidence',
    emoji: '🚀',
    shortDesc: 'Transform test anxiety into composure and belief in one’s capabilities.',
    fullDesc: 'When understanding replaces rote cramming, fear naturally gives way to calm poise. Students approach exams with curiosity rather than dread.',
    cognitiveBenefit: 'Mitigates exam distress and enhances test execution fidelity.',
    pedagogicalTechnique: 'Micro-mastery celebrations, safe failure environments, and progressive challenges.',
    illustrativeMetric: 89
  },
  {
    id: 'independent-learning',
    name: 'Independent Learning',
    emoji: '🌱',
    shortDesc: 'Self-directed exploration, metacognition, and lifelong curiosity.',
    fullDesc: 'The ultimate aim of BrainSetu: empowering learners with the skills and mindset to diagnose their own mistakes, research solutions, and love the journey of learning.',
    cognitiveBenefit: 'Builds lifelong autonomy and resilience for higher education and beyond.',
    pedagogicalTechnique: 'Metacognitive error journals, self-directed pacing, and inquiry projects.',
    illustrativeMetric: 87
  }
];

export const illustrativeDashboardMetrics = [
  { name: 'Concept Clarity', score: '94%', trend: '+14% vs Baseline', color: 'from-blue-600 to-cyan-500' },
  { name: 'Problem Solving Agility', score: '88%', trend: '+19% vs Baseline', color: 'from-teal-500 to-emerald-500' },
  { name: 'Practice Consistency', score: '92%', trend: '4.8 Days / Week', color: 'from-amber-500 to-orange-500' },
  { name: 'Topic Mastery Rate', score: '91%', trend: 'Level 4 of 5', color: 'from-indigo-600 to-blue-500' },
];
