export interface StudioPrinciple {
  number: string;
  title: string;
  description: string;
}

export const studioPrinciples: StudioPrinciple[] = [
  {
    number: '01',
    title: 'Code as Craft',
    description:
      'We view software development as a tactile medium. Code quality, architecture simplicity, and runtime performance are just as crucial to the user experience as visual aesthetics.',
  },
  {
    number: '02',
    title: 'Playful Rigor',
    description:
      'The most memorable digital products emerge when experimental curiosity meets uncompromising engineering discipline. We build playgrounds to discover ideas that standard agencies never consider.',
  },
  {
    number: '03',
    title: 'Universal Accessibility',
    description:
      'A digital experience is only truly extraordinary if everyone can experience it. Semantic HTML, clear focus states, screen-reader parity, and reduced-motion care are core release criteria.',
  },
  {
    number: '04',
    title: 'Zero Bloat',
    description:
      'We do not add databases, microservices, heavy runtimes, or complex infrastructure when lightweight, reliable architectures solve the real user problem faster and cleaner.',
  },
];

export const studioStats = [
  { label: 'Founded', value: '2023' },
  { label: 'Core Disciplines', value: 'Apps • Web • Audio • Games' },
  { label: 'Engineering Philosophy', value: 'Zero-Bloat Next.js & Native' },
  { label: 'Accessibility Standard', value: 'WCAG 2.2 AA' },
];

export const studioStory = {
  headline: 'Bridging imagination, physics, and software engineering.',
  body: [
    'Onkai Studio is an independent creative technology studio. We build mobile applications, web experiences, games, and digital tools that balance evocative aesthetics with durable software engineering.',
    'Rather than operating as a conventional digital agency producing disposable marketing sites, Onkai operates as an engineering-driven design laboratory. We partner with founders, creative directors, and ambitious product teams to bring ambitious concepts into production reality.',
    'Every project we undertake is built with strict TypeScript, thoughtful accessibility, fast load times, and an obsessive attention to interaction details.',
  ],
};
