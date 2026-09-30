import React from 'react';
import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/metadata';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { WorkFilterView } from '@/components/projects/WorkFilterView';
import { ContactCTA } from '@/components/contact/ContactCTA';
import { projects } from '@/content/projects';

export const metadata: Metadata = constructMetadata({
  title: 'Work & Projects — Onkai Studio',
  description:
    'Explore production mobile applications, web tools, tactile game prototypes, and creative technology experiments built by Onkai Studio.',
  canonical: '/work',
});

export default function WorkPage() {
  return (
    <div className="pt-12 md:pt-16 pb-20">
      <Container size="default">
        <SectionHeading
          kicker="PORTFOLIO &amp; RELEASES"
          title="Engineered with tactile precision."
          description="Every project represents an exploration into tactile interaction, clean software architecture, and real-time performance."
          as="h1"
        />

        <WorkFilterView initialProjects={projects} />
      </Container>

      <div className="mt-20">
        <ContactCTA
          title="Looking to build a flagship product or prototype?"
          description="We take on select mobile applications, interactive websites, and experimental tools each quarter."
        />
      </div>
    </div>
  );
}
