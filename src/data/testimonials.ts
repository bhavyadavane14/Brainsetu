export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  studentGrade: string;
  program: string;
  quote: string;
  avatarText: string;
  verifiedSampleNotice: string;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: 't1',
    name: 'Parent of Class 8 Student',
    role: 'Parent',
    studentGrade: 'Grade 8 (CBSE)',
    program: 'Academic Excellence & Memory Mastery',
    quote: 'Before BrainSetu, mathematics was a source of tears and late-night cramming. The focus on conceptual derivation rather than speed formulas transformed my daughter’s confidence. She now explains the "why" behind geometry theorems to us at dinner.',
    avatarText: 'PS',
    verifiedSampleNotice: 'Sample testimonial — replace with verified parent/student feedback.'
  },
  {
    id: 't2',
    name: 'Parent of Class 5 Student',
    role: 'Parent',
    studentGrade: 'Grade 5 (ICSE)',
    program: 'Brain Development Program',
    quote: 'The memory chunking and visual puzzle techniques drastically improved his concentration span. His teachers noticed that he stopped making careless errors in calculations. It’s remarkable how enthusiastic he has become.',
    avatarText: 'AM',
    verifiedSampleNotice: 'Sample testimonial — replace with verified parent/student feedback.'
  },
  {
    id: 't3',
    name: 'Class 10 Student Aspirant',
    role: 'Student',
    studentGrade: 'Grade 10 (State Board)',
    program: 'Mathematics & Logical Thinking',
    quote: 'I used to memorize quadratic equation formulas blindly. BrainSetu taught me how to visualize them through geometric balance. Now, even unfamiliar challenge questions feel like exciting puzzles rather than intimidating exam tests.',
    avatarText: 'RK',
    verifiedSampleNotice: 'Sample testimonial — replace with verified parent/student feedback.'
  },
  {
    id: 't4',
    name: 'Parent of Class 7 Student',
    role: 'Parent',
    studentGrade: 'Grade 7 (Cambridge / IGCSE)',
    program: 'Competitive Exam Foundation',
    quote: 'The personalized mentoring helped pinpoint exact prerequisite gaps from earlier years that were hindering his Olympiad prep. The mentors don’t rush; they ensure real understanding before advancing.',
    avatarText: 'SK',
    verifiedSampleNotice: 'Sample testimonial — replace with verified parent/student feedback.'
  }
];
