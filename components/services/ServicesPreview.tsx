import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { LinkButton } from '@/components/ui/Button';
import { services } from '@/content/services';

export function ServicesPreview() {
  return (
    <section className="py-20 md:py-32 border-b border-surface-border/40" aria-label="Services Overview">
      <Container size="default">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading
            kicker="04 // SERVICES"
            title="How we partner"
            description="We offer end-to-end design engineering, from rapid prototype validation to full store release."
            className="mb-0"
          />
          <LinkButton
            href="/services"
            variant="secondary"
            size="md"
            className="self-start md:self-end gap-2 shrink-0"
          >
            <span>All Services &amp; Capabilities</span>
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </LinkButton>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <div
              key={service.slug}
              className="p-8 rounded-2xl bg-surface border border-surface-border hover:border-onkai-orange/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-onkai-orange font-bold">
                    0{idx + 1}
                  </span>
                  <Link
                    href={`/services#${service.slug}`}
                    className="text-xs font-mono text-text-muted hover:text-white inline-flex items-center gap-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-onkai-orange rounded"
                  >
                    Details <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </Link>
                </div>

                <h3 className="text-2xl font-bold text-white">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                  {service.shortDescription}
                </p>

                <div className="pt-4 space-y-2">
                  <p className="text-xs font-mono uppercase tracking-wider text-text-muted">
                    Key Capabilities
                  </p>
                  <ul className="space-y-2">
                    {service.capabilities.slice(0, 3).map((cap) => (
                      <li key={cap} className="flex items-start gap-2.5 text-xs sm:text-sm text-text-secondary">
                        <CheckCircle2 className="w-4 h-4 text-onkai-orange shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-surface-border/40">
                <Link
                  href="/contact"
                  className="text-xs font-mono text-onkai-orange hover:underline inline-flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-onkai-orange rounded"
                >
                  <span>Inquire about {service.title}</span>
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
