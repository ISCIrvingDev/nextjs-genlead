'use client';

import Link from 'next/link';
import { useLanguage } from '@/shared/providers/LanguageProvider';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background-primary border-t border-borders-light mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="text-xl font-bold mb-4">
              <span className="text-accent-primary">Gen</span>
              <span className="text-text-primary">Leads</span>
            </div>
            <p className="text-text-muted text-sm">
              AI-powered lead generation tool
            </p>
          </div>

          <div>
            <h3 className="text-text-primary font-semibold mb-4">{t.footer.links}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-text-secondary hover:text-accent-primary transition-colors duration-200 text-sm"
                >
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link
                  href="/faqs"
                  className="text-text-secondary hover:text-accent-primary transition-colors duration-200 text-sm"
                >
                  {t.nav.faqs}
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-text-secondary hover:text-accent-primary transition-colors duration-200 text-sm"
                >
                  {t.nav.terms}
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-text-secondary hover:text-accent-primary transition-colors duration-200 text-sm"
                >
                  {t.nav.privacy}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-text-primary font-semibold mb-4">{t.footer.developer}</h3>
            <a
              href="https://ivin-dev.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent-primary transition-colors duration-200 text-sm"
            >
              ivin-dev.com
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-borders-light text-center">
          <p className="text-text-muted text-sm">
            © {currentYear} GenLeads. {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
