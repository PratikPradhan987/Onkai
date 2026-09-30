import React from 'react';
import { Smartphone, Gamepad2, Globe, Cpu } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

const disciplines = [
  {
    icon: Smartphone,
    title: 'Mobile Applications',
    description:
      'Native and React Native apps engineered for tactile physics, 120Hz gesture interaction, and resilient offline capability.',
    technologies: ['iOS', 'Android', 'React Native', 'Swift', 'Kotlin'],
  },
  {
    icon: Gamepad2,
    title: 'Arcade & Experimental Games',
    description:
      'Atmospheric browser and native game experiences exploring custom physics, spatial sound design, and deterministic loops.',
    technologies: ['WebGL', 'Three.js', 'Web Workers', 'Audio API'],
  },
  {
    icon: Globe,
    title: 'Interactive Web Platforms',
    description:
      'Sub-second Next.js web applications, digital editorial platforms, and design systems built with strict accessibility.',
    technologies: ['Next.js App Router', 'TypeScript', 'Tailwind', 'APCA'],
  },
  {
    icon: Cpu,
    title: 'Creative Technology & Audio',
    description:
      'Custom spatial synthesizers, computer vision gesture inputs, and real-time interactive laboratory experiments.',
    technologies: ['Web Audio API', 'MediaPipe', 'GLSL Shaders', 'WebSockets'],
  },
];

export function WhatWeMake() {
  return (
    <section className="py-20 md:py-28 bg-surface/40 border-b border-surface-border/40" aria-label="What Onkai Builds">
      <Container size="default">
        <SectionHeading
          kicker="01 // DISCIPLINES"
          title="What we build"
          description="We combine engineering rigor with playful experimentation across four core disciplines."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {disciplines.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group p-6 sm:p-8 rounded-2xl bg-surface border border-surface-border hover:border-onkai-orange/40 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-black/50"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-surface-elevated border border-surface-border flex items-center justify-center text-onkai-orange group-hover:bg-onkai-orange/10 group-hover:border-onkai-orange/40 transition-colors">
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-onkai-orange transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-surface-border/50 flex flex-wrap gap-1.5">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-surface-elevated text-text-muted border border-surface-border/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
