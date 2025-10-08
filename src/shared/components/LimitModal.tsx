'use client';

import { X } from 'lucide-react';
import { useLanguage } from '@/shared/providers/LanguageProvider';

interface LimitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LimitModal({ isOpen, onClose }: LimitModalProps) {
  const { t } = useLanguage();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="bg-background-surface rounded-lg shadow-lg max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-text-muted hover:text-text-primary transition-colors"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl font-bold text-text-primary mb-4">
          {t.home.limitReached}
        </h2>

        <p className="text-text-secondary mb-6">
          {t.home.limitMessage}
        </p>

        <div className="flex space-x-4">
          <a
            href="https://ivin-dev.com/#contact"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex-1 text-center"
          >
            {t.home.contactButton}
          </a>
          <button
            onClick={onClose}
            className="btn-secondary flex-1"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
