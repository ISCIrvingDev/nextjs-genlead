'use client';

import { useState } from 'react';
import { useLanguage } from '@/shared/providers/LanguageProvider';
import { ChevronDown } from 'lucide-react';

export default function FAQsPage() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-background-secondary">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-text-primary">
              {t.faqs.title}
            </h1>
            <p className="text-xl text-text-secondary">
              {t.faqs.subtitle}
            </p>
          </div>

          <div className="space-y-4">
            {t.faqs.questions.map((faq, index) => (
              <div
                key={index}
                className="bg-background-surface rounded-lg shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-states-hover transition-colors"
                >
                  <h3 className="text-lg font-semibold text-text-primary pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    size={24}
                    className={`text-accent-primary transition-transform duration-200 flex-shrink-0 ${openIndex === index ? 'transform rotate-180' : ''
                      }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-5">
                    <p className="text-text-secondary leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
