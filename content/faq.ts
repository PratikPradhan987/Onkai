export interface FAQItem {
  id: string;
  category: 'engagement' | 'technical' | 'support';
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    id: 'how-do-we-start',
    category: 'engagement',
    question: 'How do we begin a project with Onkai Studio?',
    answer:
      'The best way is to submit our "Start a project" contact form with an outline of your objectives, timeline, and rough budget. We review every submission within 2 business days and arrange an initial technical discovery session.',
  },
  {
    id: 'what-kinds-of-projects',
    category: 'engagement',
    question: 'What types of projects does Onkai specialize in?',
    answer:
      'We specialize in mobile applications (iOS/Android via React Native or native), bespoke interactive websites (Next.js, WebGL/Three.js), creative technology prototypes, sound design tools, and unified design token architectures.',
  },
  {
    id: 'engagement-models',
    category: 'engagement',
    question: 'What engagement models do you support?',
    answer:
      'We offer fixed-scope sprints for well-defined product deliverables and dedicated studio retainer partnerships for ongoing product evolution, design system scaling, and technical leadership.',
  },
  {
    id: 'intellectual-property',
    category: 'engagement',
    question: 'Who owns the intellectual property and code?',
    answer:
      'You do. Upon full completion of the project and settled invoices, 100% of the custom source code, assets, and design system tokens are transferred directly to your organization.',
  },
  {
    id: 'accessibility-commitments',
    category: 'technical',
    question: 'How do you ensure accessibility on visually experimental work?',
    answer:
      'We treat accessibility as an engineering release requirement rather than a cosmetic overlay. Every web project targets WCAG 2.2 AA standards: keyboard navigation, semantic landmark structures, high-contrast states, screen-reader testing, and comprehensive reduced-motion support.',
  },
  {
    id: 'technology-stack',
    category: 'technical',
    question: 'Why do you prioritize Next.js and TypeScript?',
    answer:
      'We believe in zero-bloat, highly maintainable software. Next.js App Router allows us to deliver ultra-fast Server Components with minimal client JavaScript, while strict TypeScript ensures maintainable, bug-resistant codebases that internal teams can easily maintain.',
  },
  {
    id: 'post-launch-support',
    category: 'support',
    question: 'Do you provide support after launch?',
    answer:
      'Yes. Every production delivery includes a 30-day warranty period for defect resolution, plus options for ongoing technical maintenance retainers covering security updates, OS compatibility, and performance monitoring.',
  },
  {
    id: 'urgent-support',
    category: 'support',
    question: 'How can existing clients request urgent support?',
    answer:
      'Existing clients can reach us directly via support@onkai.studio with their project identifier in the subject line. Production issues are triaged within our defined service-level agreements.',
  },
];
