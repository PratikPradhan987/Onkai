import React from 'react';
import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/metadata';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CONTACT_EMAIL } from '@/lib/constants';

export const metadata: Metadata = constructMetadata({
  title: 'Terms of Service / Terms & Conditions — Onkai Studio',
  description:
    'Terms of Service and Conditions governing the use of Onkai Studio website and services.',
  canonical: '/terms',
});

export default function TermsPage() {
  const lastUpdated = 'September 30, 2024';

  return (
    <div className="pt-12 md:pt-16 pb-24">
      <Container size="narrow">
        <SectionHeading
          kicker="LEGAL AGREEMENTS"
          title="Terms of Service &amp; Conditions"
          description={`Last updated: ${lastUpdated}. Please read these terms carefully before utilizing our website or commissioning studio services.`}
          as="h1"
        />

        <div className="prose prose-invert max-w-none text-text-secondary text-sm sm:text-base leading-relaxed space-y-8 pt-6">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">1. Acceptance of Terms</h2>
            <p>
              By accessing and utilizing the website located at onkai.studio (&quot;the Website&quot;), you acknowledge that you have read, understood, and agree to be bound by these Terms of Service / Terms &amp; Conditions. If you do not agree to these terms, please discontinue use of the Website immediately.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">2. Intellectual Property Rights</h2>
            <p>
              All trademarks, logos, visual designs, source code, interactive laboratory demos, and original editorial content on this Website are the proprietary intellectual property of Onkai Studio or used under appropriate license.
            </p>
            <p>
              Client deliverables and custom work created under contracted master service agreements are transferred to the commissioning client in accordance with individual signed contracts upon final invoice settlement.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">3. Acceptable Use</h2>
            <p>When interacting with the Website or submitting contact inquiries, you agree not to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Submit fraudulent, deceptive, or abusive messages via our inquiry forms.</li>
              <li>Attempt to circumvent rate limits, security barriers, or server integrity protections.</li>
              <li>Introduce automated bots, scrapers, or crawling agents without explicit written authorization.</li>
              <li>Decompile or reverse-engineer proprietary laboratory simulation algorithms.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">4. Third-Party Links &amp; Demonstrations</h2>
            <p>
              The Website may contain links to external third-party software, code repositories, or customer live deployments. Onkai Studio assumes no responsibility for external content, privacy practices, or availability of third-party platforms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">5. Disclaimers &amp; Limitation of Liability</h2>
            <p>
              The Website and experimental laboratory sandboxes are provided on an &quot;as is&quot; and &quot;as available&quot; basis without warranties of any kind, whether express or implied. In no event shall Onkai Studio be liable for any indirect, consequential, or incidental damages arising from the use or inability to use this Website.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">6. Changes to Terms</h2>
            <p>
              We reserve the right to revise these Terms of Service at any time. Any changes will be posted to this page with an updated effective date. Continued use of the Website following modifications constitutes acceptance of the amended terms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">7. Inquiries</h2>
            <p>
              For legal inquiries regarding these terms or studio contracts, please contact:
            </p>
            <p className="font-mono text-onkai-orange">
              {CONTACT_EMAIL}
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
