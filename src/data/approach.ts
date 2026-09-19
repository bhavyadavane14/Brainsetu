export interface JourneyStepItem {
  number: string;
  title: string;
  summary: string;
  description: string;
  focusAction: string;
  cognitiveBridge: string;
}

export const journeyStepsData: JourneyStepItem[] = [
  {
    number: '01',
    title: 'Learn',
    summary: 'Introduce the concept with intuition and real-world curiosity.',
    description: 'We demystify the abstract. Before writing any formula, we introduce the concept through an intuitive puzzle, visual demonstration, or compelling question that sparks the student’s intrinsic curiosity.',
    focusAction: 'Curiosity-driven concept presentation and contextual relevance.',
    cognitiveBridge: 'From Unknown to Recognized'
  },
  {
    number: '02',
    title: 'Understand',
    summary: 'Build conceptual clarity from first principles.',
    description: 'Students explore why mathematical relationships exist. Through multiple representations (graphical, geometric, and numerical), they build genuine comprehension rather than superficial mechanical rules.',
    focusAction: 'First-principles reasoning, visual proofs, and Socratic dialogues.',
    cognitiveBridge: 'From Recognized to Understood'
  },
  {
    number: '03',
    title: 'Remember',
    summary: 'Use memory techniques and meaningful neural connections.',
    description: 'Retention is an engineered process, not luck. We introduce cognitive memory anchors, concept chunking, and associative imagery that lock foundational definitions and formulas into long-term memory.',
    focusAction: 'Semantic chunking, visual associations, and active recall cues.',
    cognitiveBridge: 'From Understood to Retained'
  },
  {
    number: '04',
    title: 'Practice',
    summary: 'Reinforce through deliberate, tiered exercise sets.',
    description: 'Practice is focused on deliberate improvement, not endless repetition of identical questions. Students progress through graded problem sets designed to build fluency and iron out misconceptions.',
    focusAction: 'Tiered difficulty progression, instant feedback, and targeted error correction.',
    cognitiveBridge: 'From Retained to Fluent'
  },
  {
    number: '05',
    title: 'Apply',
    summary: 'Use knowledge in non-routine problems and real situations.',
    description: 'Knowledge transforms into capability when applied to novel contexts. Students tackle open-ended mathematical modeling, competitive puzzles, and interdisciplinary challenges.',
    focusAction: 'Heuristic problem-solving, multi-concept synthesis, and lateral application.',
    cognitiveBridge: 'From Fluent to Adaptable'
  },
  {
    number: '06',
    title: 'Master',
    summary: 'Track progress, close feedback loops, and achieve enduring mastery.',
    description: 'Students analyze their own learning progress through structured reflections and diagnostic benchmarks. They gain the metacognitive poise to tackle any challenge independently.',
    focusAction: 'Continuous assessment analytics, autonomous review, and academic poise.',
    cognitiveBridge: 'From Adaptable to Mastery'
  }
];

export interface CognitiveTechniqueItem {
  id: string;
  name: string;
  shortDesc: string;
  howItWorks: string;
  example: string;
}

export const cognitiveTechniquesData: CognitiveTechniqueItem[] = [
  {
    id: 'chunking',
    name: 'Concept Chunking',
    shortDesc: 'Breaking complex formulas and concepts into cohesive mental packets.',
    howItWorks: 'Our working memory can comfortably hold 4–7 chunks at once. By logically organizing lengthy proofs into 3 core steps, students process intricate math effortlessly.',
    example: 'Grouping polynomial factorization into: Common terms -> Pattern match (Difference of squares) -> Middle-term split.'
  },
  {
    id: 'connections',
    name: 'Logical Connections',
    shortDesc: 'Anchoring new topics to already mastered foundational principles.',
    howItWorks: 'The brain remembers by association. When a student sees that Coordinate Geometry is simply Algebra meeting Euclidean Space, the brain readily integrates the new concept.',
    example: 'Linking the Pythagorean Theorem directly to the Distance Formula and Circle Equations.'
  },
  {
    id: 'recall',
    name: 'Recall Practice (Active Retrieval)',
    shortDesc: 'Strengthening neural pathways through deliberate self-testing.',
    howItWorks: 'Reading a textbook creates an illusion of competence. Closing the book and attempting to reconstruct the derivation strengthens synaptic connections permanently.',
    example: 'Low-stakes 5-minute flash challenges where students write out the logic of a formula from scratch.'
  },
  {
    id: 'associations',
    name: 'Visual Associations',
    shortDesc: 'Transforming abstract symbols into vivid spatial and sensory representations.',
    howItWorks: 'Visual cortex processing is extraordinarily fast and durable. We teach students to picture equations as geometric transformations and physical balancing scales.',
    example: 'Visualizing equations as a balanced beam scale where balancing operations must be symmetrically applied.'
  },
  {
    id: 'patterns',
    name: 'Pattern Recognition',
    shortDesc: 'Spotting recurring structural symmetries across seemingly different problems.',
    howItWorks: 'Mathematicians do not solve thousands of disconnected problems; they recognize underlying archetypes. We train students to detect underlying structural motifs.',
    example: 'Identifying telescoping sums, invariants in sequences, and symmetry in algebraic expressions.'
  },
  {
    id: 'revision',
    name: 'Structured Spaced Revision',
    shortDesc: 'Revisiting concepts at scientifically calibrated time intervals.',
    howItWorks: 'Combatting the Ebbinghaus forgetting curve. Revisiting material on Day 1, Day 3, Day 7, and Day 21 resets the memory decay curve to near zero.',
    example: 'Curated 10-minute micro-reviews scheduled precisely when memory decay begins to set in.'
  }
];
