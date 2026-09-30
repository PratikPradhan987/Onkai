import React from 'react';
import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/metadata';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ContactCTA } from '@/components/contact/ContactCTA';
import { studioPrinciples, studioStats, studioStory } from '@/content/studio';

export const metadata: Metadata = constructMetadata({
  title: 'Studio & Ethos — Onkai Studio',
  description:
    'Learn about Onkai Studio, an independent creative technology studio bridging imagination, real-time physics, and durable software engineering.',
  canonical: '/studio',
});

export default function StudioPage() {
  return (
    <div className="pt-12 md:pt-16 pb-20">
      <Container size="default">
        {/* Header */}
        <SectionHeading
          kicker="ABOUT ONKAI"
          title="Bridging imagination, physics, &amp; engineering."
          description="We are an independent creative technology studio building products, games, and web platforms with uncompromising craft."
          as="h1"
        />

        {/* Narrative Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-12 border-y border-surface-border/50">
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
              {studioStory.headline}
            </h2>
            <div className="w-12 h-1 bg-onkai-orange rounded-full" />
          </div>

          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-text-secondary leading-relaxed font-normal">
            {studioStory.body.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Studio Stats / Signals */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {studioStats.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-surface border border-surface-border text-center space-y-2"
            >
              <p className="text-xs font-mono uppercase tracking-wider text-text-muted">
                {stat.label}
              </p>
              <p className="text-base sm:text-lg font-bold text-white">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        {/* Studio Principles */}
        <div className="py-12 border-t border-surface-border/50">
          <SectionHeading
            kicker="CORE TENETS"
            title="How we think &amp; operate"
            description="Our engineering and aesthetic decisions are guided by four non-negotiable principles."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {studioPrinciples.map((principle) => (
              <div
                key={principle.number}
                className="p-8 rounded-2xl bg-surface border border-surface-border hover:border-onkai-orange/40 transition-colors space-y-4"
              >
                <span className="text-sm font-mono text-onkai-orange font-bold">
                  {principle.number} &bull; PRINCIPLE
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {principle.title}
                </h3>
                <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>

      <div className="mt-20">
        <ContactCTA
          title="Interested in collaborating with our studio?"
          description="We welcome discussions on greenfield mobile products, high-impact web flagships, and interaction experiments."
        />
      </div>
    </div>
  );
}
