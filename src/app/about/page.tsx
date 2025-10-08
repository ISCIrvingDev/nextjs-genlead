'use client';

// * NextJS
import Link from 'next/link';

// * Providers
import { useLanguage } from '@/shared/providers/LanguageProvider';

// * Icons
import { CheckCircle, Code, Sparkles } from 'lucide-react';

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background-secondary">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-text-primary">
              {t.about.title}
            </h1>
            <p className="text-xl text-accent-primary">
              {t.about.subtitle}
            </p>
          </div>

          <div className="bg-background-surface rounded-lg p-8 shadow-sm">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 bg-accent-primary bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
                <Sparkles className="text-accent-primary" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-text-primary mb-4">
                  {t.about.title}
                </h2>
                <p className="text-text-secondary leading-relaxed">
                  {t.about.description}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-background-surface rounded-lg p-8 shadow-sm">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-accent-primary bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Code className="text-accent-primary" size={24} />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold text-text-primary mb-4">
                    {t.about.developerTitle}
                  </h2>
                  <p className="text-accent-primary font-semibold mb-4">
                    {t.about.developerName}
                  </p>
                  <p className="text-text-secondary leading-relaxed">
                    {t.about.developerDescription}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-background-surface rounded-lg p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-text-primary mb-6">
                {t.about.expertise}
              </h3>
              <ul className="space-y-3">
                {t.about.expertiseList.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="text-accent-primary flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-background-surface rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">
              {t.about.technology}
            </h2>
            <p className="text-text-secondary leading-relaxed">
              {t.about.technologyDescription}
            </p>
          </div>

          <div className="text-center bg-gradient-to-r from-accent-primary to-accent-secondary rounded-lg p-8">
            <h3 className="text-2xl font-bold text-text-inverse mb-4">
              Ready to Generate Leads?
            </h3>
            <p className="text-text-inverse mb-6 opacity-90">
              Start extracting valuable business information today
            </p>
            <Link
              href="/"
              className="inline-block bg-background-primary text-accent-primary font-semibold px-8 py-3 rounded-md hover:bg-background-surface transition-colors duration-200"
            >
              Get Started
            </Link >
          </div>
        </div>
      </div>
    </div>
  );
}
