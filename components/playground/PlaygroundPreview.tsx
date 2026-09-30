import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Beaker } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { LinkButton } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { experiments } from '@/content/experiments';

export function PlaygroundPreview() {
  const previewExperiments = experiments.slice(0, 3);

  return (
    <section className="py-20 md:py-32 bg-surface/30 border-b border-surface-border/40" aria-label="Playground and Labs">
      <Container size="default">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading
            kicker="03 // LABS &amp; EXPERIMENTS"
            title="The playground"
            description="Our open testing ground for raw physics, procedural audio, GLSL shaders, and interaction mechanics."
            className="mb-0"
          />
          <LinkButton
            href="/playground"
            variant="secondary"
            size="md"
            className="self-start md:self-end gap-2 shrink-0"
          >
            <Beaker className="w-4 h-4 text-onkai-orange" aria-hidden="true" />
            <span>Enter Playground</span>
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </LinkButton>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {previewExperiments.map((exp) => (
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
                  <div className="absolute top-3 left-3">
                    <Badge variant="outline">{exp.category}</Badge>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-white group-hover:text-onkai-orange transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-text-secondary line-clamp-2">
                    {exp.description}
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-6 border-t border-surface-border/40 flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {exp.technologies.slice(0, 2).map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-surface-elevated text-text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  href="/playground"
                  className="text-xs font-mono text-onkai-orange hover:underline inline-flex items-center gap-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-onkai-orange rounded"
                  aria-label={`Explore ${exp.title} in Playground`}
                >
                  <span>Inspect</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
