import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { LifeBuoy, Mail, Bug, Shield, Clock } from 'lucide-react';
import { constructMetadata } from '@/lib/metadata';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SUPPORT_EMAIL } from '@/lib/constants';

export const metadata: Metadata = constructMetadata({
  title: 'Client Support & Maintenance — Onkai Studio',
  description:
    'Dedicated support, bug reporting channels, maintenance retainers, and SLA guidelines for Onkai Studio clients.',
  canonical: '/support',
});

const supportTiers = [
  {
    icon: Bug,
    title: 'Defect & Bug Reporting',
    description:
      'For projects within the 30-day post-launch warranty, submit defect reports directly with reproduction steps and target device OS.',
    turnaround: 'Triage within 24 hours',
  },
  {
    icon: Shield,
    title: 'Active Maintenance Retainers',
    description:
      'Scheduled dependency updates, security patches, iOS/Android version migrations, and continuous accessibility auditing.',
    turnaround: 'Defined SLA response',
  },
  {
    icon: Clock,
    title: 'Critical Incident Triage',
    description:
      'Immediate technical intervention for production outages or critical vulnerabilities for active retainer partners.',
    turnaround: '< 4 hour priority dispatch',
  },
];

export default function SupportPage() {
  return (
    <div className="pt-12 md:pt-16 pb-20">
      <Container size="default">
        <SectionHeading
          kicker="HELP &amp; MAINTENANCE"
          title="Client support &amp; technical assistance."
          description="We stand behind everything we build. Access support channels, report defects, or review maintenance agreements."
          as="h1"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-10">
          {/* Main info */}
          <div className="lg:col-span-8 space-y-10">
            {/* Direct Support Card */}
            <div className="p-8 sm:p-10 rounded-3xl bg-surface border border-surface-border space-y-4">
              <div className="flex items-center gap-3 text-onkai-orange">
                <LifeBuoy className="w-6 h-6" aria-hidden="true" />
                <h2 className="text-xl font-bold text-white">Direct Support Channel</h2>
              </div>
              <p className="text-base text-text-secondary leading-relaxed">
                For existing clients experiencing issues or requesting technical assistance, please email our dedicated engineering support desk:
              </p>
              <div className="pt-2">
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-onkai-orange text-white font-semibold text-sm hover:bg-onkai-orange-hover transition-colors shadow-md shadow-onkai-orange/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <Mail className="w-4 h-4" aria-hidden="true" />
                  <span>{SUPPORT_EMAIL}</span>
                </a>
              </div>
              <p className="text-xs text-text-muted pt-2">
                Please include your Project Name or Invoicing ID in the subject line for expedited routing.
              </p>
            </div>

            {/* Support Tiers */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white">Support Guidelines</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {supportTiers.map((tier) => {
                  const Icon = tier.icon;
                  return (
                    <div
                      key={tier.title}
                      className="p-6 rounded-2xl bg-surface border border-surface-border space-y-3 flex flex-col justify-between"
                    >
                      <div className="space-y-3">
                        <div className="w-10 h-10 rounded-xl bg-surface-elevated flex items-center justify-center text-onkai-orange border border-surface-border">
                          <Icon className="w-5 h-5" aria-hidden="true" />
                        </div>
                        <h3 className="text-base font-bold text-white">{tier.title}</h3>
                        <p className="text-xs text-text-secondary leading-relaxed">
                          {tier.description}
                        </p>
                      </div>
                      <div className="pt-4 border-t border-surface-border/50 text-[11px] font-mono text-onkai-orange">
                        {tier.turnaround}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Quick links sidebar */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-2xl bg-surface border border-surface-border space-y-4">
              <h2 className="text-xs font-mono uppercase tracking-wider text-onkai-orange font-semibold">
                Self-Service &amp; Knowledge
              </h2>
              <p className="text-sm text-text-secondary">
                Find answers to common questions about timelines, invoices, deliverables, and licenses.
              </p>
              <div className="pt-2">
                <Link
                  href="/faq"
                  className="text-xs font-mono font-bold text-onkai-orange hover:underline inline-flex items-center gap-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-onkai-orange rounded"
                >
                  <span>Visit FAQ Knowledge Base</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-surface border border-surface-border space-y-4">
              <h2 className="text-xs font-mono uppercase tracking-wider text-onkai-orange font-semibold">
                New Project Inquiries
              </h2>
              <p className="text-sm text-text-secondary">
                Not a current client? Submit your project brief through our inquiry form.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="text-xs font-mono font-bold text-onkai-orange hover:underline inline-flex items-center gap-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-onkai-orange rounded"
                >
                  <span>Start a project</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </div>
  );
}
