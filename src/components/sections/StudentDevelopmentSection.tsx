import React from 'react';
import { 
  Brain, 
  Target, 
  Search, 
  Lightbulb, 
  Puzzle, 
  Binary, 
  Award, 
  Sprout 
} from 'lucide-react';

export const StudentDevelopmentSection: React.FC = () => {
  const outcomes = [
    { name: 'Memory', desc: 'Concept chunking and structured recall techniques.', icon: Brain },
    { name: 'Concentration', desc: 'Sustained focus and selective attention stamina.', icon: Target },
    { name: 'Reasoning', desc: 'Deductive inquiry and validation of logical steps.', icon: Search },
    { name: 'Creativity', desc: 'Exploring multiple paths to solve complex problems.', icon: Lightbulb },
    { name: 'Problem-Solving', desc: 'Heuristic toolkits to approach unfamiliar challenges.', icon: Puzzle },
    { name: 'Logical Thinking', desc: 'Sequential and algorithmic thought clarity.', icon: Binary },
    { name: 'Academic Confidence', desc: 'Poise and composure during rigorous examinations.', icon: Award },
    { name: 'Independent Learning', desc: 'Autonomous study habits and metacognition.', icon: Sprout },
  ];

  return (
    <section className="py-20 md:py-24 bg-brand-slate-bg border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-brand-primary-deep tracking-tight">
            Learning Beyond Marks
          </h2>
          <p className="text-base sm:text-lg text-brand-slate-muted leading-relaxed">
            We cultivate eight foundational cognitive and academic faculties that prepare students for lifetime intellectual growth.
          </p>
        </div>

        {/* Simple 8-Item Grid with Clean Icons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {outcomes.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:border-slate-300 transition-colors space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-100 text-brand-secondary flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-display font-bold text-brand-primary-deep">
                  {item.name}
                </h3>
                <p className="text-xs sm:text-sm text-brand-slate-muted leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
