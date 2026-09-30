'use client';

import React, { useEffect } from 'react';
import { RefreshCcw, Home } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button, LinkButton } from '@/components/ui/Button';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log safe error diagnostics to console without leaking personal info
    // eslint-disable-next-line no-console
    console.error('Route execution error:', error.message);
  }, [error]);

  return (
    <div className="py-24 md:py-36 min-h-[70vh] flex items-center">
      <Container size="narrow">
        <div className="p-8 sm:p-12 rounded-3xl bg-surface border border-surface-border text-center space-y-6 shadow-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/40 border border-red-800/60 text-xs font-mono text-red-400">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
            <span>RUNTIME EXCEPTION</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Unexpected rendering interruption.
          </h1>

          <p className="text-base text-text-secondary max-w-lg mx-auto leading-relaxed">
            Our application encountered a temporary error while loading this view. You can attempt to reload the interface or navigate back to safety.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Button
              variant="primary"
              size="md"
              onClick={() => reset()}
              className="gap-2"
            >
              <RefreshCcw className="w-4 h-4" aria-hidden="true" />
              <span>Retry Rendering</span>
            </Button>

            <LinkButton href="/" variant="secondary" size="md" className="gap-2">
              <Home className="w-4 h-4" aria-hidden="true" />
              <span>Return Home</span>
            </LinkButton>
          </div>
        </div>
      </Container>
    </div>
  );
}
