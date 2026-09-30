import React from 'react';
import type { Metadata } from 'next';
import { Mail, Clock, ShieldCheck, MapPin } from 'lucide-react';
import { constructMetadata } from '@/lib/metadata';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ContactForm } from '@/components/contact/ContactForm';
import { CONTACT_EMAIL } from '@/lib/constants';

export const metadata: Metadata = constructMetadata({
  title: 'Start a Project — Onkai Studio',
  description:
    'Start a project with Onkai Studio. Submit your mobile app, website, or interactive technology brief for our technical review.',
  canonical: '/contact',
});

export default function ContactPage() {
  return (
    <div className="pt-12 md:pt-16 pb-24">
      <Container size="default">
        <SectionHeading
          kicker="COMMISSIONS &amp; INQUIRIES"
          title="Start a project."
          description="Tell us about the digital experience you want to build. We review every brief and reply with technical considerations within 48 hours."
          as="h1"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-6">
          {/* Form column */}
          <div className="lg:col-span-8">
            <ContactForm />
          </div>

          {/* Studio info sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="p-6 rounded-2xl bg-surface border border-surface-border space-y-4">
              <h2 className="text-xs font-mono uppercase tracking-wider text-onkai-orange font-semibold">
                Direct Contact
              </h2>
              <div className="space-y-3 text-sm">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="flex items-center gap-3 text-white hover:text-onkai-orange transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-onkai-orange rounded"
                >
                  <Mail className="w-4 h-4 text-onkai-orange shrink-0" aria-hidden="true" />
                  <span>{CONTACT_EMAIL}</span>
                </a>
                <div className="flex items-center gap-3 text-text-secondary">
                  <Clock className="w-4 h-4 text-onkai-orange shrink-0" aria-hidden="true" />
                  <span>Response time: &lt; 48 hours</span>
                </div>
                <div className="flex items-center gap-3 text-text-secondary">
                  <MapPin className="w-4 h-4 text-onkai-orange shrink-0" aria-hidden="true" />
                  <span>Tokyo • Global Client Base</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-surface border border-surface-border space-y-4">
              <h2 className="text-xs font-mono uppercase tracking-wider text-onkai-orange font-semibold">
                Client Guarantees
              </h2>
              <ul className="space-y-3 text-sm text-text-secondary">
                <li className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-onkai-orange shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Full intellectual property ownership transferred to client</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-onkai-orange shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Strict non-disclosure agreements supported upfront</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-onkai-orange shrink-0 mt-0.5" aria-hidden="true" />
                  <span>30-day post-launch warranty on all production releases</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </Container>
    </div>
  );
}
