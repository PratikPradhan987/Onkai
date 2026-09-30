import React from 'react';
import type { Metadata } from 'next';
import { CheckCircle2, Box, ArrowRight } from 'lucide-react';
import { constructMetadata } from '@/lib/metadata';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { LinkButton } from '@/components/ui/Button';
import { ContactCTA } from '@/components/contact/ContactCTA';
import { services } from '@/content/services';
import { PRIMARY_CTA } from '@/lib/constants';

export const metadata: Metadata = constructMetadata({
  title: 'Services & Capabilities — Onkai Studio',
  description:
    'Full-cycle creative technology services: mobile application engineering, 3D web experiences, design token architectures, and experimental prototypes.',
  canonical: '/services',
});

const processSteps = [
  {
    step: '01',
    title: 'Discovery & Feasibility',
    description:
      'We deconstruct your core product requirements, identify performance bottlenecks early, and map out the leanest technical architecture.',
  },
  {
    step: '02',
    title: 'Interactive Prototyping',
    description:
      'Instead of static mockups, we build clickable, tangible prototypes directly in code to test gesture physics, audio latency, and typography scales.',
  },
  {
    step: '03',
    title: 'Production Engineering',
    description:
      'Engineered with strict TypeScript, clean modular structure, automated test coverage, and strict WCAG 2.2 AA accessibility verification.',
  },
  {
    step: '04',
    title: 'Launch & Handover',
    description:
      'Full source code transfer, production deployment, CI/CD pipeline automation, and comprehensive documentation for internal teams.',
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-12 md:pt-16 pb-20">
      <Container size="default">
        {/* Header */}
        <SectionHeading
          kicker="STUDIO CAPABILITIES"
          title="Bespoke engineering for ambitious products."
          description="We work as an integrated creative engineering partner, taking products from blank canvas to production-ready launch."
          as="h1"
        />

        {/* Services Detail List */}
        <div className="space-y-16 py-12">
          {services.map((service, index) => (
            <section
              key={service.slug}
              id={service.slug}
              aria-labelledby={`service-heading-${service.slug}`}
              className="p-8 sm:p-12 rounded-3xl bg-surface border border-surface-border relative overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                {/* Left col: Title and description */}
                <div className="lg:col-span-6 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-elevated text-xs font-mono text-onkai-orange border border-surface-border">
                    <span>CAPABILITY 0{index + 1}</span>
                  </div>

                  <h2
                    id={`service-heading-${service.slug}`}
                    className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight"
                  >
                    {service.title}
                  </h2>

                  <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-normal">
                    {service.description}
                  </p>

                  <div className="pt-4">
                    <LinkButton
                      href={PRIMARY_CTA.href}
                      variant="primary"
                      size="md"
                      className="gap-2"
                    >
                      <span>Start a project in {service.title.split(' ')[0]}</span>
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </LinkButton>
                  </div>
                </div>

                {/* Right col: Capabilities & Deliverables */}
                <div className="lg:col-span-6 space-y-8 bg-surface-elevated/60 p-6 sm:p-8 rounded-2xl border border-surface-border/60">
                  <div className="space-y-3">
                    <h3 className="text-xs font-mono uppercase tracking-wider text-onkai-orange font-semibold">
                      Technical Capabilities
                    </h3>
                    <ul className="space-y-2.5">
                      {service.capabilities.map((cap) => (
                        <li key={cap} className="flex items-start gap-3 text-sm text-text-secondary">
                          <CheckCircle2 className="w-4 h-4 text-onkai-orange shrink-0 mt-0.5" aria-hidden="true" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3 pt-6 border-t border-surface-border/60">
                    <h3 className="text-xs font-mono uppercase tracking-wider text-text-muted font-semibold">
                      Standard Deliverables
                    </h3>
                    <ul className="space-y-2">
                      {service.deliverables.map((del) => (
                        <li key={del} className="flex items-start gap-2.5 text-xs sm:text-sm text-text-muted">
                          <Box className="w-3.5 h-3.5 text-text-secondary shrink-0 mt-0.5" aria-hidden="true" />
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Process Section */}
        <div className="py-16 border-t border-surface-border/50">
          <SectionHeading
            kicker="OUR PROCESS"
            title="How we work together"
            description="From discovery to release, our process is designed for high velocity, total transparency, and zero ambiguity."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="p-6 rounded-2xl bg-surface border border-surface-border space-y-3"
              >
                <span className="text-xs font-mono text-onkai-orange font-bold">
                  {step.step}
                </span>
                <h3 className="text-lg font-bold text-white">
                  {step.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>

      <div className="mt-20">
        <ContactCTA
          title="Ready to discuss your project scope?"
          description="Send us a brief overview of your timeline and goals. We respond with initial architecture thoughts within 48 hours."
        />
      </div>
    </div>
  );
}
