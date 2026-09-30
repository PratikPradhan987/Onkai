import React from 'react';
import { ArrowUpRight, MessageSquare, Clock } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { LinkButton } from '@/components/ui/Button';
import { PRIMARY_CTA, CONTACT_EMAIL } from '@/lib/constants';

interface ContactCTAProps {
  title?: string;
  description?: string;
}

export function ContactCTA({
  title = "Have an ambitious idea? Let's build something extraordinary.",
  description = "Whether you need a full-scale mobile product, a bespoke 3D web experience, or an experimental prototype, our studio is ready to collaborate.",
}: ContactCTAProps) {
  return (
    <section className="py-24 md:py-36 relative overflow-hidden" aria-label="Start a Project">
      {/* Background glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-80 bg-hero-glow opacity-30 pointer-events-none"
        aria-hidden="true"
      />

      <Container size="default" className="relative z-10">
        <div className="p-8 sm:p-12 md:p-16 rounded-3xl bg-surface-elevated border border-surface-border relative overflow-hidden text-center max-w-4xl mx-auto shadow-2xl">
          <div className="space-y-6 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-surface-border text-xs font-mono text-onkai-orange">
              <span className="w-1.5 h-1.5 rounded-full bg-onkai-orange" />
              <span>COMMISSIONS &amp; PARTNERSHIPS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {title}
            </h2>

            <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-normal">
              {description}
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <LinkButton
                href={PRIMARY_CTA.href}
                variant="primary"
                size="lg"
                className="w-full sm:w-auto gap-2 text-base shadow-lg shadow-onkai-orange/25"
              >
                <span>{PRIMARY_CTA.label}</span>
                <ArrowUpRight className="w-5 h-5" aria-hidden="true" />
              </LinkButton>

              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-surface-border text-sm font-medium text-text-secondary hover:text-white hover:border-surface-border/80 transition-colors inline-flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-onkai-orange"
              >
                <MessageSquare className="w-4 h-4 text-onkai-orange" aria-hidden="true" />
                <span>{CONTACT_EMAIL}</span>
              </a>
            </div>

            <div className="pt-6 border-t border-surface-border/50 flex items-center justify-center gap-6 text-xs text-text-muted">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-onkai-orange" aria-hidden="true" />
                <span>Direct studio response within 48 hours</span>
              </div>
              <span className="hidden sm:inline" aria-hidden="true">•</span>
              <span className="hidden sm:inline">NDA friendly</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
