import React from 'react';
import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/metadata';
import { Hero } from '@/components/hero/Hero';
import { WhatWeMake } from '@/components/hero/WhatWeMake';
import { FeaturedWork } from '@/components/projects/FeaturedWork';
import { PlaygroundPreview } from '@/components/playground/PlaygroundPreview';
import { ServicesPreview } from '@/components/services/ServicesPreview';
import { ContactCTA } from '@/components/contact/ContactCTA';

export const metadata: Metadata = constructMetadata({
  title: 'Onkai Studio — Creative Technology Studio',
  description:
    'Onkai Studio is a creative technology studio building tactile mobile apps, arcade games, evocative web experiences, and digital products.',
  canonical: '/',
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhatWeMake />
      <FeaturedWork />
      <PlaygroundPreview />
      <ServicesPreview />
      <ContactCTA />
    </>
  );
}
