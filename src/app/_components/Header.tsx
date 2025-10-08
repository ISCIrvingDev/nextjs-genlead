'use client';

// * NextJS
import Link from 'next/link';

// * Providers
import { useLanguage } from '@/shared/providers/LanguageProvider';

// * Icons
import { Globe } from 'lucide-react';
import Image from 'next/image';
import icon from '@/shared/assets/Icon.png'

export default function Header() {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <header className="bg-background-primary border-b border-borders-light sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full flex items-center justify-center">
              <Image src={icon} alt='Icon' quality={100} />
            </div>
            <div className="text-2xl font-bold">
              <span className="text-accent-primary">Gen</span>
              <span className="text-text-primary">Leads</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-text-secondary hover:text-accent-primary transition-colors duration-200"
            >
              {t.nav.home}
            </Link>
            <Link
              href="/about"
              className="text-text-secondary hover:text-accent-primary transition-colors duration-200"
            >
              {t.nav.about}
            </Link>
            <Link
              href="/faqs"
              className="text-text-secondary hover:text-accent-primary transition-colors duration-200"
            >
              {t.nav.faqs}
            </Link>
          </nav>

          <button
            onClick={toggleLanguage}
            className="flex items-center space-x-2 px-4 py-2 rounded-md bg-background-surface border border-borders-medium hover:bg-states-hover transition-all duration-200"
            aria-label="Toggle language"
          >
            <Globe size={18} />
            <span className="text-sm font-medium">{language.toUpperCase()}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
