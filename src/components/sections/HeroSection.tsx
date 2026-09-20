import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../common/Button';
import { EnquiryModal } from '../common/EnquiryModal';
import { useLanguage } from '../../context/LanguageContext';

export const HeroSection: React.FC = () => {
  const { t } = useLanguage();
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-brand-primary-deep tracking-tight leading-[1.15]">
              {t('hero.titleLine1')}{' '}
              <span className="text-brand-secondary">{t('hero.titleLine2')}</span>
            </h1>

            <p className="text-lg sm:text-xl text-brand-navy-700/85 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {t('hero.subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Button
                to="/programs"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
                className="w-full sm:w-auto"
              >
                {t('hero.exploreBtn')}
              </Button>
              <Button
                variant="accent"
                size="lg"
                onClick={() => setEnquiryOpen(true)}
                className="w-full sm:w-auto"
              >
                {t('hero.enquireBtn')}
              </Button>
            </div>
          </div>

          {/* Right Image Column: High-Resolution Student Photograph */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden shadow-card border border-slate-200/80 bg-slate-50 transition-transform duration-500 hover:scale-[1.01]">
              <img
                src="/images/hero-curiosity-student.jpg"
                alt="BrainSetu student exploring mathematics and science with focus and curiosity on laptop"
                className="w-full h-auto object-cover object-center max-h-[500px]"
                loading="eager"
              />
            </div>
          </div>

        </div>
      </div>

      <EnquiryModal isOpen={enquiryOpen} onClose={() => setEnquiryOpen(false)} />
    </section>
  );
};
