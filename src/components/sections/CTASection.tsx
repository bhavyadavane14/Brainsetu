import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../common/Button';
import { EnquiryModal } from '../common/EnquiryModal';
import { useLanguage } from '../../context/LanguageContext';

export const CTASection: React.FC = () => {
  const { t } = useLanguage();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="py-20 md:py-24 bg-white border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Text & Action */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-brand-primary-deep tracking-tight leading-[1.2]">
              {t('cta.title')}
            </h2>

            <p className="text-base sm:text-lg text-brand-slate-muted leading-relaxed max-w-xl mx-auto lg:mx-0">
              {t('cta.subtitle')}
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Button
                variant="accent"
                size="lg"
                onClick={() => setModalOpen(true)}
                icon={<ArrowRight className="w-4 h-4" />}
                className="w-full sm:w-auto"
              >
                {t('cta.btn')}
              </Button>

              <div className="text-xs text-slate-500 text-center sm:text-left">
                <span className="block font-semibold text-brand-navy-900">
                  {t('cta.orCall')}
                </span>
                <span className="space-x-2">
                  <a href="tel:+918805333303" className="text-brand-primary font-medium hover:underline">
                    +91 8805333303
                  </a>
                  <span>/</span>
                  <a href="tel:+919867063163" className="text-brand-primary font-medium hover:underline">
                    +91 9867063163
                  </a>
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400">
              {t('cta.address')}
            </p>
          </div>

          {/* Illuminated Student Learning Photograph */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 bg-slate-900 group">
              <img
                src="/images/real-parent-student.jpg"
                alt="BrainSetu student mastering conceptual mathematics with illuminated cognitive brain model"
                className="w-full h-auto object-cover object-center max-h-[480px] transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>

        </div>

      </div>

      <EnquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
};
