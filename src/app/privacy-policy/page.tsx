'use client';

import { useLanguage } from '@/shared/providers/LanguageProvider';

export default function PrivacyPolicyPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background-secondary">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-text-primary">
              {t.privacy.title}
            </h1>
            <p className="text-text-muted">
              {t.privacy.lastUpdated}: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="space-y-8">
            {t.privacy.sections.map((section, index) => (
              <div key={index} className="bg-background-surface rounded-lg p-6 shadow-sm">
                <h2 className="text-xl font-semibold text-text-primary mb-4">
                  {section.title}
                </h2>
                <p className="text-text-secondary leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
