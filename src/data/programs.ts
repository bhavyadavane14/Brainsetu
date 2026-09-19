export interface ProgramItem {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  badge: string;
  originalPrice?: string;
  discountedPrice?: string;
  price?: string;
  isFree?: boolean;
  level: string;
  duration: string;
  suitableFor: string;
  shortDescription: string;
  image: string;
  keyHighlights: string[];
  focusAreas: string[];
  overview: string;
  whoItIsFor: string[];
  skillsDeveloped: string[];
  learningActivities: { title: string; description: string }[];
  methodology: { step: string; description: string }[];
  expectedOutcomes: string[];
  assessment: string;
  faqs: { question: string; answer: string }[];
}

export const programsData: ProgramItem[] = [
  {
    id: '1',
    slug: '10x-memory-power-webinar',
    title: '10X Memory Power Webinar',
    tagline: 'Complete step-by-step masterclass to boost memory retention, speed reading, and exam recall by 10X.',
    badge: 'FREE',
    originalPrice: '₹9,999',
    discountedPrice: '₹2,999',
    price: 'FREE',
    isFree: true,
    level: 'Students (Grades 1–12) & Parents',
    duration: '2 Hours+ Interactive Webinar',
    suitableFor: 'Students who struggle with memorizing long answers, forgetting formulas during exams, or slow reading speed.',
    shortDescription: 'Complete step-by-step course to boost your memory power by 10X. Learn advanced techniques used by memory champions worldwide.',
    image: '/images/prog-10x-memory.png',
    keyHighlights: [
      '2 Hours+ Webinar Lessons',
      'Boost your child’s concentration by 10X 🧘',
      'Speed Reading Methods',
      'Discover the 5 most powerful memory techniques 🔓',
      'Certificate of Completion'
    ],
    focusAreas: [
      'Visual Mnemonic Pegs',
      'Number-Shape & Phonetic Systems',
      'Speed Reading & Retention',
      'Formula Memorization Without Fear',
      'Stress-Free Exam Recall'
    ],
    overview: 'The 10X Memory Power Webinar is an intensive, high-energy cognitive masterclass designed by BrainSetu Academy. We demystify how the human brain encodes, consolidates, and retrieves information. By replacing fragile rote repetition with visual association, spatial memory journeys, and mnemonic scaffolding, students unlock dramatic improvements in focus, retention speed, and exam confidence.',
    whoItIsFor: [
      'Students who take hours to memorize short textbook chapters',
      'Learners who experience "blank outs" or anxiety during timed tests',
      'Parents eager to support their children with scientific, stress-free learning habits',
      'Aspirants aiming to crack competitive exams where instant recall is critical'
    ],
    skillsDeveloped: [
      '10X retention velocity for complex formulas and terminology',
      'Sustained focused attention during study sessions',
      'Active visual imagination and spatial organization',
      'Autonomous revision workflows requiring fewer repetitions'
    ],
    learningActivities: [
      { title: 'The Memory Matrix Challenge', description: 'Live demonstration memorizing 20 random objects in sequence within 3 minutes using visual association.' },
      { title: 'Formula Decryption Workshop', description: 'Transforming abstract trigonometric and algebraic formulas into intuitive, unforgettable visual landmarks.' },
      { title: 'Speed Reading Primer', description: 'Training eye saccades and reducing subvocalization to double reading speed with higher comprehension.' },
      { title: 'Mind Palace Blueprint', description: 'Constructing a personal 5-room memory palace to store syllabus milestones effortlessly.' }
    ],
    methodology: [
      { step: 'Diagnose Current Retention Patterns', description: 'Identify whether the child relies on auditory chanting or passive re-reading.' },
      { step: 'Neuro-Mnemonic Encoding', description: 'Learn how to hook abstract concepts to sensory, vivid mental anchors.' },
      { step: 'Spaced Retrieval Routine', description: 'Master the 24h, 3-day, and 7-day active recall schedule that turns facts into permanent knowledge.' }
    ],
    expectedOutcomes: [
      'Ability to memorize tables, historical dates, and scientific laws in a fraction of usual study time',
      'Noticeably higher enthusiasm and self-belief before exams',
      'Official Certificate of Completion awarded upon webinar conclusion'
    ],
    assessment: 'Interactive real-time memory challenges and digital recall diagnostic score at the end of the webinar.',
    faqs: [
      { question: 'Is this webinar suitable for primary school children?', answer: 'Yes, children from Grade 3 onwards can participate independently. For younger children (Grades 1–2), we recommend parents attend alongside.' },
      { question: 'What is required to attend?', answer: 'A laptop, tablet, or smartphone with stable internet, along with a notebook and pen for interactive memory exercises.' },
      { question: 'Is the certificate included with the free pass?', answer: 'Yes! All registered participants who attend the full webinar receive an official BrainSetu Academy Certificate of Completion.' }
    ]
  },
  {
    id: '2',
    slug: 'intellia-360-mathematics',
    title: 'Intellia 360 Mathematics Program',
    tagline: 'Conceptual clarity, first-principles derivations, and deep logical thinking for lifelong mastery.',
    badge: 'Flagship Academic Program',
    originalPrice: '₹14,999',
    discountedPrice: '₹4,999',
    price: '₹4,999 / term',
    level: 'Grades 1 to 10 (Curriculum & Foundation)',
    duration: 'Quarterly & Annual Academic Tracks',
    suitableFor: 'Learners seeking true mathematical understanding, high exam performance, and fearlessness with non-routine problems.',
    shortDescription: 'Our premier mathematics curriculum combining first-principles conceptual discovery, personalized mentor guidance, diagnostic prerequisite healing, and adaptive technology.',
    image: '/images/prog-academic.jpg',
    keyHighlights: [
      'First-Principles Concept Scaffolding',
      'Mental Arithmetic & Proof Mastery',
      '1-on-1 Socratic Academic Mentorship',
      'Adaptive Intellia360 Practice Engine',
      'Continuous Diagnostic Feedback Loops',
      'Regular Milestone Reviews for Parents'
    ],
    focusAreas: [
      'Number Sense & Operational Fluency',
      'Algebraic Intuition & Equation Modeling',
      'Geometric Proofs & Spatial Reasoning',
      'Applied Word Problem Deconstruction',
      'Board Exam & Competitive Foundation'
    ],
    overview: 'The Intellia 360 Mathematics Program embodies the core philosophy of BrainSetu Academy: "Don’t learn Mathematics faster. Understand Mathematics better." Rather than forcing students through repetitive drills, our curriculum guides learners to discover mathematical theorems from first principles. By combining physical manipulative models, digital simulators, and dedicated mentor guidance, students build unshakeable confidence in math.',
    whoItIsFor: [
      'Students with math anxiety who feel lost when equations look slightly different',
      'Bright students bored by conventional rote drill worksheets who need intellectual challenge',
      'Students entering middle or secondary school needing solid algebra and geometry foundations',
      'Learners aiming for 95%+ board scores and Olympiad readiness'
    ],
    skillsDeveloped: [
      'Deductive and inductive mathematical reasoning',
      'Ability to break intricate multistep word problems into systematic equations',
      'Spatial visualization of geometric theorems and coordinate geometry',
      'Speed and accuracy in arithmetic computations without mechanical reliance on paper'
    ],
    learningActivities: [
      { title: 'Socratic Concept Discovery', description: 'Interactive mentor discussions where students derive geometric and algebraic laws before seeing the textbook formula.' },
      { title: 'Visual & Physical Modeling', description: 'Utilizing virtual fraction walls, geometric transformations, and algebraic tiles for concrete conceptual grasp.' },
      { title: 'Tiered Deliberate Practice', description: 'Smart problem sets that progressively scale from foundational clarity to Olympiad-grade challenges.' },
      { title: 'Error Autopsy Sessions', description: 'Transforming mistakes into powerful learning moments by pinpointing the exact reasoning juncture where misunderstanding occurred.' }
    ],
    methodology: [
      { step: 'Prerequisite Gap Diagnosis', description: 'Comprehensive diagnostic assessment identifying any unhealed foundational gaps from previous grades.' },
      { step: 'Guided Exploration & Synthesis', description: 'Students explore interactive digital models and real-world applications with expert mentorship.' },
      { step: 'Adaptive Mastery & Retention', description: 'The Intellia360 engine assigns spaced practice problems to solidify long-term mathematical fluency.' }
    ],
    expectedOutcomes: [
      'Elimination of fear and hesitation when confronting unfamiliar mathematical problems',
      'Top-tier academic results in school and board examinations',
      'Robust logical thinking and structured analytical faculties applicable across all sciences'
    ],
    assessment: 'Weekly concept checkpoints, formative sub-topic diagnostic tracking, and quarterly milestone progress reviews.',
    faqs: [
      { question: 'Which school boards are covered?', answer: 'Our curriculum aligns seamlessly with CBSE, ICSE, State Boards, and Cambridge/IB foundational curricula.' },
      { question: 'How is the Intellia 360 program delivered?', answer: 'Delivered in hybrid format: dedicated live mentor classes paired with 24/7 digital practice modules and simulations on our student portal.' },
      { question: 'How can parents track progress?', answer: 'Parents receive regular detailed progress reports mapping topic mastery, diagnostic scores, and mentor observations.' }
    ]
  }
];
