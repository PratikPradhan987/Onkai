import { Service } from '@/types/service';

export const services: Service[] = [
  {
    slug: 'digital-products',
    title: 'Mobile Apps & Digital Products',
    shortDescription:
      'Native and cross-platform mobile apps engineered with tactile micro-interactions, rock-solid stability, and offline-first architectures.',
    description:
      'We design and build production-grade mobile applications for iOS and Android. From initial interaction prototypes to store release, we focus on tactile performance, buttery 120Hz gesture physics, and durable system architecture.',
    capabilities: [
      'iOS & Android native development',
      'React Native & Expo cross-platform apps',
      'Offline-first data sync & local caching',
      'Haptic feedback & audio design integration',
      'Store release & App Store optimization',
    ],
    deliverables: [
      'Production application binaries & source repositories',
      'Interactive Figma prototypes & interaction specs',
      'Automated CI/CD release pipelines',
      'App Store & Google Play submission packages',
    ],
    featured: true,
  },
  {
    slug: 'web-experiences',
    title: 'Interactive Web & 3D Experiences',
    shortDescription:
      'High-impact web destinations that merge editorial typography, WebGL shaders, fluid motion, and sub-second loading speeds.',
    description:
      'We craft bespoke web experiences that leave lasting impressions. We combine creative direction, modern Next.js architecture, custom shaders, and rigorous accessibility standards to deliver web experiences that perform effortlessly across any device.',
    capabilities: [
      'Modern Next.js & React architectures',
      'Three.js, WebGL & shader development',
      'Fluid gesture and scroll-driven interactions',
      'Sub-second page speeds & Core Web Vitals optimization',
      'Strict WCAG 2.2 AA accessibility compliance',
    ],
    deliverables: [
      'Fully tested, production-ready web platforms',
      'Custom shader and interactive 3D modules',
      'Performance audit reports & accessibility certification',
      'Structured CMS or headless integration layers',
    ],
    featured: true,
  },
  {
    slug: 'creative-engineering',
    title: 'Creative Technology & Prototyping',
    shortDescription:
      'Rapid exploration of emerging technologies, interactive installations, audio engines, and computer vision experiments.',
    description:
      'When your product requires ideas beyond standard UI patterns, our lab explores the boundaries. We prototype spatial interfaces, Web Audio synthesis pipelines, optical tracking, and physical computing bridges to prove feasibility before full investment.',
    capabilities: [
      'Web Audio API & procedural sound engines',
      'Computer vision & gesture tracking interfaces',
      'Generative graphics & procedural art systems',
      'Rapid prototype validation & proof-of-concept builds',
      'Hardware & IoT protocol communication (WebSockets, WebHID)',
    ],
    deliverables: [
      'Interactive proof-of-concept prototypes',
      'Technical feasibility & performance benchmarks',
      'Modular algorithmic libraries with clean documentation',
      'Interactive sandboxes for stakeholder evaluation',
    ],
    featured: true,
  },
  {
    slug: 'design-systems',
    title: 'Design Systems & Token Architecture',
    shortDescription:
      'Cross-platform token pipelines and accessible component systems that bridge the gap between design and engineering.',
    description:
      'We build scalable design systems that eliminate friction between Figma and code. By defining mathematical tokens for color, typography, elevation, and motion, we provide multi-platform teams with consistent, accessible UI components.',
    capabilities: [
      'Cross-platform design token compilation',
      'Tailwind CSS & CSS variable token systems',
      'Accessible UI component libraries (ARIA / Radix)',
      'Automated color contrast & WCAG validation',
      'Storybook / interactive component documentation',
    ],
    deliverables: [
      'Versioned NPM component and token packages',
      'Synchronized Figma token libraries and guidelines',
      'Storybook documentation site with live preview',
      'Integration guides for engineering teams',
    ],
    featured: true,
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
