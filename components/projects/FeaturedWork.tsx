import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { LinkButton } from '@/components/ui/Button';
import { ProjectGrid } from './ProjectGrid';
import { getFeaturedProjects } from '@/content/projects';

export function FeaturedWork() {
  const featuredProjects = getFeaturedProjects().slice(0, 4);

  return (
    <section className="py-20 md:py-32 border-b border-surface-border/40" aria-label="Featured Work">
      <Container size="default">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading
            kicker="02 // PORTFOLIO"
            title="Selected work"
            description="Explore production applications, playable game experiments, and web tools built by Onkai."
            className="mb-0"
          />
          <LinkButton
            href="/work"
            variant="secondary"
            size="md"
            className="self-start md:self-end gap-2 shrink-0"
          >
            <span>View All Work ({featuredProjects.length}+)</span>
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </LinkButton>
        </div>

        <ProjectGrid projects={featuredProjects} />
      </Container>
    </section>
  );
}
