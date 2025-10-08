import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/shared/providers/LanguageProvider';
import Header from '@/shared/components/Header';
import Footer from '@/shared/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'GenLeads - AI-Powered Lead Generation',
  description: 'Extract valuable business information from any URL using advanced AI technology',
  keywords: 'lead generation, business leads, web scraping, AI analysis, contact information',
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
