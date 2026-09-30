import React from 'react';
import type { Metadata } from 'next';
import '@/app/globals.css';
import { constructMetadata } from '@/lib/metadata';
import { SkipLink } from '@/components/layout/SkipLink';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CookieBanner } from '@/components/layout/CookieBanner';

export const metadata: Metadata = constructMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-background text-text-primary min-h-screen flex flex-col font-sans selection:bg-onkai-orange selection:text-background">
        <SkipLink />
        <Navbar />
        <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
          {children}
        </main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
