import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Search } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { faqsData } from '../../data/faqs';

interface FAQSectionProps {
  initialCategory?: string;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ initialCategory = 'All' }) => {
  const [openIndex, setOpenIndex] = useState<string | null>('1');
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'General', 'Methodology', 'Technology', 'Enrolment'];

  const filteredFaqs = faqsData.filter((faq) => {
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesSearch = 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFAQ = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Clarity & Answers"
          title="Frequently Asked"
          highlightText="Questions"
          subtitle="Everything you need to know about BrainSetu Academy, our conceptual learning methodology, and programs."
          align="center"
        />

        {/* Search & Category Filter */}
        <div className="mt-10 space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search frequently asked questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-secondary focus:outline-none bg-slate-50/50"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-brand-primary-deep text-white shadow-sm'
                    : 'bg-slate-100 text-brand-slate-muted hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="mt-8 space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="p-8 text-center text-brand-slate-muted text-sm bg-slate-50 rounded-2xl border border-slate-200">
              No questions found matching your query.
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openIndex === faq.id;

              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'border-brand-secondary/60 bg-brand-slate-bluebg/40 shadow-soft'
                      : 'border-slate-200/90 bg-white hover:border-slate-300'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 select-none focus:outline-none"
                  >
                    <div className="flex items-center gap-3">
                      <HelpCircle className={`w-5 h-5 flex-shrink-0 transition-colors ${
                        isOpen ? 'text-brand-secondary' : 'text-slate-400'
                      }`} />
                      <span className="text-base font-display font-bold text-brand-primary-deep">
                        {faq.question}
                      </span>
                    </div>

                    <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-brand-secondary text-white' : 'bg-slate-100 text-slate-500'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-sm text-brand-navy-700 leading-relaxed border-t border-slate-200/50">
                      <p>{faq.answer}</p>
                      <div className="mt-3 flex items-center gap-2">
                        <span className="text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded bg-slate-100 text-brand-slate-muted">
                          Category: {faq.category}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};
