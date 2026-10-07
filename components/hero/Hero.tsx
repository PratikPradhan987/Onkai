import React from 'react';
import { ArrowUpRight, Terminal, Sparkles } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { LinkButton } from '@/components/ui/Button';
import { PRIMARY_CTA } from '@/lib/constants';

export function Hero() {
  return (
    <section className="bg-[url('/images/Panda.jpg')]  relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden border-b border-surface-border/40" aria-label="Introduction">
      {/* Background ambient lighting */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] pointer-events-none opacity-40 bg-hero-glow"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"
        aria-hidden="true"
      />

      <Container size="default" className="relative z-10">
        <div className="max-w-4xl space-y-6 sm:space-y-8">
          {/* Status Kicker */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-surface-elevated/80 border border-surface-border backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-onkai-orange animate-pulse" />
            <span className="text-xs font-mono tracking-wider uppercase text-text-secondary">
              CREATIVE TECHNOLOGY STUDIO // TOKYO &amp; GLOBAL
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
            Engineering tactile mobile apps, games, &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-onkai-orange via-orange-400 to-amber-300">
              evocative web platforms.
            </span>
          </h1>

          {/* Studio Narrative Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-text-secondary leading-relaxed max-w-3xl font-normal">
            Onkai Studio operates as an engineering-driven design laboratory. We partner with founders and forward-thinking brands to prototype, engineer, and release digital products with zero bloat and uncompromising craft.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <LinkButton
              href={PRIMARY_CTA.href}
              variant="primary"
              size="lg"
              className="gap-2 text-base shadow-lg shadow-onkai-orange/20"
            >
              <span>{PRIMARY_CTA.label}</span>
              <ArrowUpRight className="w-5 h-5" aria-hidden="true" />
            </LinkButton>

            <LinkButton
              href="/work"
              variant="secondary"
              size="lg"
              className="gap-2 text-base"
            >
              <span>Explore Selected Work</span>
            </LinkButton>
          </div>

          {/* Technical Telemetry Strip */}
          <div className="pt-8 border-t border-surface-border/50 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono text-text-muted">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-onkai-orange shrink-0" aria-hidden="true" />
              <span>STRICT TYPESCRIPT</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-onkai-orange shrink-0" aria-hidden="true" />
              <span>SERVER-FIRST ARCHITECTURE</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" aria-hidden="true" />
              <span>WCAG 2.2 AA VERIFIED</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-500 shrink-0" aria-hidden="true" />
              <span>ZERO-BLOAT RUNTIME</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
