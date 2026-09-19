export interface FAQItem {
  id: string;
  category: 'General' | 'Methodology' | 'Technology' | 'Enrolment';
  question: string;
  answer: string;
}

export const faqsData: FAQItem[] = [
  {
    id: '1',
    category: 'General',
    question: 'What is BrainSetu Academy?',
    answer: 'BrainSetu Academy is a premier education and mathematics learning initiative founded on "The Learning Bridge" concept. We bridge the critical transition between Knowledge, Understanding, Application, and Confidence. Rather than drilling rote formulas, we focus on first-principles conceptual understanding, cognitive development, memory techniques, and independent problem-solving.'
  },
  {
    id: '2',
    category: 'General',
    question: 'Which grades does BrainSetu support?',
    answer: 'BrainSetu supports learners across five key educational stages: Pre-Primary (foundational curiosity and early logic), Primary (Grades 1–5), Middle School (Grades 6–8), Secondary (Grades 9–10), and Higher Secondary (Grades 11–12 and competitive foundation). Programs are customized according to age, cognitive readiness, and learning objectives.'
  },
  {
    id: '3',
    category: 'General',
    question: 'What programs are available at BrainSetu Academy?',
    answer: 'We offer six specialized, structured programs: (1) Brain Development Program, (2) Memory Mastery Program, (3) Academic Excellence Program, (4) Mathematics & Logical Thinking, (5) Competitive Exam Foundation (Olympiads/Aptitude), and (6) Personalized Mentoring (1-on-1 and micro-cohorts).'
  },
  {
    id: '4',
    category: 'Methodology',
    question: 'How does BrainSetu’s learning methodology work?',
    answer: 'Our proprietary learning journey follows a structured 6-step progression: 01 Learn (intuitive introduction) → 02 Understand (first-principles conceptual clarity) → 03 Remember (cognitive memory anchors & chunking) → 04 Practice (deliberate, tiered exercises) → 05 Apply (non-routine problem-solving) → 06 Master (analytics-backed reinforcement). This guarantees enduring competence rather than short-term cramming.'
  },
  {
    id: '5',
    category: 'Methodology',
    question: 'Is BrainSetu only focused on mathematics?',
    answer: 'While mathematics is our primary foundational domain, BrainSetu is fundamentally a cognitive development academy. The core faculties we cultivate—working memory, sustained concentration, logical deduction, spatial reasoning, and independent problem-solving—transfer universally to sciences, computer science, and lifelong academic pursuits.'
  },
  {
    id: '6',
    category: 'Technology',
    question: 'How does technology support learning at BrainSetu?',
    answer: 'At BrainSetu, technology is designed to enhance human learning, never replace it. We combine passionate mentor-led instruction with interactive digital manipulatives, visual math simulations, automated revision pacing, and diagnostic analytics to pinpoint learning gaps with surgical precision.'
  },
  {
    id: '7',
    category: 'Technology',
    question: 'What is Intellia360?',
    answer: 'Intellia360 is BrainSetu’s future-ready digital learning ecosystem. It powers interactive mathematics visualizations, gamified cognitive practice, diagnostic assessments, personalized learning paths, and an upcoming Socratic AI learning assistant that guides students toward understanding without spoon-feeding answers.'
  },
  {
    id: '8',
    category: 'Methodology',
    question: 'Can programs be customized for my child?',
    answer: 'Yes. Every child undergoes a diagnostic baseline assessment to map their unique cognitive strengths, learning velocity, and prerequisite knowledge gaps. Our Personalized Mentoring and cohort tracks are calibrated to meet the exact developmental goals of each individual learner.'
  },
  {
    id: '9',
    category: 'Enrolment',
    question: 'How can parents enquire or book an assessment?',
    answer: 'Parents can fill out the enquiry form on our Contact page or click "Enquire Now" on any program. Our academic counselling team will schedule an exploratory consultation followed by a complimentary diagnostic assessment to recommend the ideal learning pathway for your child.'
  },
  {
    id: '10',
    category: 'Technology',
    question: 'Will online learning and student portal features be available in the future?',
    answer: 'Yes. While Phase 1 delivers our public architectural foundation, Phase 2 will introduce our complete student portal, parent oversight hub, mentor dashboard, interactive online assessments, Intellia360 AI assistant, and digital certificate verification.'
  }
];
