import React from 'react';
import Link from 'next/link';
import { Home, Compass } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { LinkButton } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="py-24 md:py-36 min-h-[70vh] flex items-center">
      <Container size="narrow">
        <div className="p-8 sm:p-12 rounded-3xl bg-surface border border-surface-border text-center space-y-6 shadow-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-elevated border border-surface-border text-xs font-mono text-onkai-orange">
            <span className="w-1.5 h-1.5 rounded-full bg-onkai-orange" />
            <span>ERROR 404</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Signal lost in transmission.
          </h1>

          <p className="text-base sm:text-lg text-text-secondary max-w-lg mx-auto leading-relaxed">
            The page or project you requested could not be located on this frequency. It may have been archived, renamed, or never existed.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <LinkButton href="/" variant="primary" size="md" className="gap-2">
              <Home className="w-4 h-4" aria-hidden="true" />
              <span>Return Home</span>
            </LinkButton>

            <LinkButton href="/work" variant="secondary" size="md" className="gap-2">
              <Compass className="w-4 h-4" aria-hidden="true" />
              <span>Explore Projects</span>
            </LinkButton>
          </div>

          <div className="pt-8 border-t border-surface-border/50 text-xs text-text-muted">
            <p>
              Looking for something specific?{' '}
              <Link href="/contact" className="text-onkai-orange underline hover:text-white">
                Contact our studio
              </Link>{' '}
              or visit our{' '}
              <Link href="/faq" className="text-onkai-orange underline hover:text-white">
                FAQ
              </Link>
              .
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
