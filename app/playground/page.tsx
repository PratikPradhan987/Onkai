import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';
import { constructMetadata } from '@/lib/metadata';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';
import { InteractiveCanvasLab } from '@/components/playground/InteractiveCanvasLab';
import { ContactCTA } from '@/components/contact/ContactCTA';
import { experiments } from '@/content/experiments';

export const metadata: Metadata = constructMetadata({
  title: 'Playground & Labs — Onkai Studio',
  description:
    'Our experimental laboratory testing generative audio synthesis, GLSL shaders, Verlet physics, and browser interaction prototypes.',
  canonical: '/playground',
});

export default function PlaygroundPage() {
  return (
    <div className="pt-12 md:pt-16 pb-20">
      <Container size="default">
        {/* Header */}
        <SectionHeading
          kicker="OPEN RESEARCH &amp; LABS"
          title="Playground"
          description="Where we test creative hypotheses before they become production frameworks. Unfiltered shaders, spatial audio, and physical simulations."
          as="h1"
        />

        {/* Live Interactive Lab */}
        <div className="mb-16">
          <InteractiveCanvasLab />
        </div>

        {/* Experiment Grid */}
        <div className="pt-8">
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Selected Experiments &amp; Code Spikes
            </h2>
            <p className="text-sm text-text-secondary mt-1">
              Explore source repositories and prototypes built in the studio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiments.map((exp) => (
              <div
                key={exp.slug}
                className="group p-6 rounded-2xl bg-surface border border-surface-border hover:border-onkai-orange/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-surface-elevated border border-surface-border/60">
                    <Image
                      src={exp.image}
                      alt={`${exp.title} experiment preview`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <Badge variant="outline">{exp.category}</Badge>
                      <Badge status={exp.status === 'live' ? 'released' : 'prototype'}>
                        {exp.status}
                      </Badge>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-onkai-orange transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed font-normal">
                      {exp.description}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-6 border-t border-surface-border/40 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {exp.technologies.slice(0, 2).map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-elevated text-text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    {exp.githubUrl && (
                      <a
                        href={exp.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg bg-surface-elevated text-text-secondary hover:text-white border border-surface-border focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-onkai-orange"
                        aria-label={`View ${exp.title} on GitHub`}
                      >
                        <Github className="w-4 h-4" aria-hidden="true" />
                      </a>
                    )}
                    {exp.liveUrl && (
                      <a
                        href={exp.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg bg-surface-elevated text-text-secondary hover:text-white border border-surface-border focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-onkai-orange"
                        aria-label={`Open ${exp.title} live demo`}
                      >
                        <ExternalLink className="w-4 h-4" aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>

      <div className="mt-20">
        <ContactCTA
          title="Want to commission an interactive laboratory or experiment?"
          description="We partner with brands to build custom installations, WebGL sandboxes, and sensory sound tools."
        />
      </div>
    </div>
  );
}
