import React from 'react';
import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/metadata';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CONTACT_EMAIL } from '@/lib/constants';

export const metadata: Metadata = constructMetadata({
  title: 'Privacy Policy — Onkai Studio',
  description:
    'Onkai Studio privacy policy describing data collection, contact handling, analytics consent, and privacy protections.',
  canonical: '/privacy',
});

export default function PrivacyPolicyPage() {
  const lastUpdated = 'September 30, 2024';

  return (
    <div className="pt-12 md:pt-16 pb-24">
      <Container size="narrow">
        <SectionHeading
          kicker="LEGAL &amp; COMPLIANCE"
          title="Privacy Policy"
          description={`Last updated: ${lastUpdated}. This policy outlines how Onkai Studio collects, uses, and safeguards information.`}
          as="h1"
        />

        <div className="prose prose-invert max-w-none text-text-secondary text-sm sm:text-base leading-relaxed space-y-8 pt-6">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">1. Overview</h2>
            <p>
              Onkai Studio (&quot;we,&quot; &quot;our,&quot; or &quot;the studio&quot;) is committed to respecting your privacy and protecting personal data. This Privacy Policy describes how we handle information gathered through our website (onkai.studio) and related communication channels.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">2. Information We Collect</h2>
            <p>
              We adhere to strict data minimization principles. We do not operate user accounts, sell personal data, or engage in cross-site behavioral advertising. The only personal data collected occurs when you voluntarily contact us:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-white">Contact Form Inquiries:</strong> Your name, email address, optional organization name, and the text of your project brief.
              </li>
              <li>
                <strong className="text-white">Technical Logs:</strong> Server connection logs, including IP addresses, browser user-agent strings, and timestamps, processed solely for security diagnostics, rate limiting, and spam protection.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">3. How We Use Information</h2>
            <p>We process collected information strictly for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To evaluate project briefs and respond to your direct inquiries.</li>
              <li>To negotiate contracts, statements of work, and non-disclosure agreements.</li>
              <li>To protect our web platform from automated denial-of-service or spam abuse.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">4. Cookies &amp; Consent Management</h2>
            <p>
              Our website distinguishes strictly necessary technologies from optional measurement tools:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-white">Strictly Necessary:</strong> Cookies and local storage items required for navigation integrity, security tokens, and storing your consent preferences. These cannot be disabled.
              </li>
              <li>
                <strong className="text-white">Optional Analytics:</strong> When enabled with your explicit consent, anonymous aggregated metrics help us understand which case studies and laboratory experiments interest visitors. Message contents and personal credentials are never transmitted to analytics providers.
              </li>
            </ul>
            <p>
              You may modify or withdraw your cookie preferences at any time using the &quot;Manage Cookie Preferences&quot; control located in the site footer.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">5. Data Retention &amp; Security</h2>
            <p>
              Inquiry submissions are retained only as long as necessary to fulfill communication or contractual obligations. We implement industry-standard encryption in transit (HTTPS/TLS) and strict access controls. Private service credentials and API keys are stored exclusively in secure server environments and never bundled in client application packages.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">6. Your Rights</h2>
            <p>
              Depending on your location (including rights under GDPR, UK GDPR, and CCPA/CPRA), you may have the right to request access to, rectification of, or deletion of personal data we maintain about you. You may also object to or restrict certain data processing activities.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">7. Contact Information</h2>
            <p>
              For privacy-related inquiries, data requests, or questions regarding this policy, please reach out directly:
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
