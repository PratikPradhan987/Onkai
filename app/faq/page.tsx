import React from 'react';
import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/metadata';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FAQAccordion } from '@/components/faq/FAQAccordion';
import { ContactCTA } from '@/components/contact/ContactCTA';
import { faqItems } from '@/content/faq';

export const metadata: Metadata = constructMetadata({
  title: 'FAQ — Onkai Studio',
  description:
    'Frequently asked questions regarding client engagements, engineering architecture, IP ownership, and post-launch support at Onkai Studio.',
  canonical: '/faq',
});

export default function FAQPage() {
  return (
    <div className="pt-12 md:pt-16 pb-20">
      <Container size="narrow">
        <SectionHeading
          kicker="KNOWLEDGE BASE"
          title="Frequently asked questions."
          description="Everything you need to know about partnering with Onkai Studio, our technical stack, and engagement models."
          as="h1"
        />

        <div className="py-8">
          <FAQAccordion items={faqItems} />
        </div>
      </Container>

      <div className="mt-16">
        <ContactCTA
          title="Have a question not addressed here?"
          description="Our engineering team is happy to discuss technical specifications and partnership structures directly."
        />
      </div>
    </div>
  );
}
