'use client';

import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { SITE_NAME, FOOTER_LINKS, SOCIAL_LINKS, CONTACT_EMAIL } from '@/lib/constants';

interface FooterProps {
  onOpenCookieSettings?: () => void;
}

export function Footer({ onOpenCookieSettings }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-surface border-t border-surface-border mt-auto pt-16 pb-12" aria-label="Site Footer">
      <Container size="default">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-surface-border/60">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-onkai-orange rounded-md p-0.5"
              aria-label="Onkai Studio Homepage"
            >
              <div className="w-8 h-8 rounded-lg bg-surface-elevated border border-surface-border flex items-center justify-center">
                <span className="w-2.5 h-2.5 rounded-full bg-onkai-orange" />
              </div>
              <span className="text-lg font-bold tracking-wider text-text-primary group-hover:text-white">
                {SITE_NAME}
              </span>
            </Link>
            <p className="text-sm text-text-secondary max-w-sm leading-relaxed">
              Creative technology studio building mobile apps, games, digital products, and web experiments with zero bloat and high aesthetic rigor.
            </p>
            <div className="pt-2">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-sm font-mono text-onkai-orange hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-onkai-orange rounded"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>

          {/* Explore Links */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-text-primary">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm">
              {FOOTER_LINKS.explore.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-secondary hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-onkai-orange rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Contact Links */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-text-primary">
              Support &amp; Trust
            </h3>
            <ul className="space-y-2.5 text-sm">
              {FOOTER_LINKS.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-secondary hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-onkai-orange rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-secondary hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-onkai-orange rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Preferences */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-text-primary">
              Connect
            </h3>
            <ul className="space-y-2.5 text-sm">
              {SOCIAL_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-secondary hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-onkai-orange rounded inline-flex items-center gap-1"
                  >
                    <span>{link.label}</span>
                    <span className="text-xs text-text-muted" aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <button
                  type="button"
                  onClick={() => {
                    if (onOpenCookieSettings) {
                      onOpenCookieSettings();
                    } else if (typeof window !== 'undefined') {
                      window.dispatchEvent(new CustomEvent('onkai-open-cookie-settings'));
                    }
                  }}
                  className="text-xs text-text-muted hover:text-onkai-orange transition-colors underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-onkai-orange rounded text-left"
                >
                  Manage Cookie Preferences
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright and legal statement */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <p>© {currentYear} {SITE_NAME}. All rights reserved.</p>
          <p className="text-center sm:text-right">
            Engineered with Next.js App Router • WCAG 2.2 AA Compliant
          </p>
        </div>
      </Container>
    </footer>
  );
}
