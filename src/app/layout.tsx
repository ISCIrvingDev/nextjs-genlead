// * NextJS
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

// * Styles
import './globals.css';

// * Providers
import { LanguageProvider } from '@/shared/providers/LanguageProvider';

// * Components
import Header from './_components/Header';
import Footer from './_components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'GenLeads - AI-Powered Lead Generation',
  description: 'Extract valuable business information from any URL using advanced AI technology',
  // keywords: 'lead generation, business leads, web scraping, AI analysis, contact information',
  authors: [{ name: 'Irving Salazar', url: 'https://ivin-dev.com' }],
  metadataBase: new URL('https://genleads.ivin-dev.com'), // Next will use this to make complete URLs from relative paths.
  // metadataBase: new URL('http://localhost:3000'), // Para pruebas de SEO en local
  alternates: {
    canonical: '/', // For the homepage, or specific path like '/articles/my-post'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <LanguageProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
