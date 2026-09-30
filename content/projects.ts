import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    slug: 'soundcraft-audio',
    title: 'Soundcraft',
    tagline: 'Spatial audio sculpting tool for tactile sound design and synthesis.',
    description:
      'A multi-touch sound manipulation laboratory engineered for sound designers, electronic musicians, and game audio engineers. Combines low-latency Web Audio nodes with custom visual frequency sculpting.',
    category: 'app',
    status: 'released',
    year: 2024,
    technologies: ['React', 'Web Audio API', 'Canvas API', 'TypeScript', 'Tailwind CSS'],
    featured: true,
    thumbnail: '/images/projects/soundcraft-thumb.svg',
    heroImage: '/images/projects/soundcraft-hero.svg',
    links: {
      live: 'https://soundcraft.example.com',
      github: 'https://github.com/onkai-studio/soundcraft',
    },
    accessibilityNotes:
      'Full keyboard-driven synthesizer controls, screen reader values for sliders and envelopes, high-contrast spectrum visualization mode.',
    caseStudy: {
      challenge:
        'Audio manipulation applications in web browsers often suffer from audio-thread jitter, unresponsive touch curves, and inaccessible dial widgets.',
      solution:
        'Engineered custom audio worklet routines running on a dedicated audio worker thread, paired with a GPU-accelerated canvas rendering pipeline and semantic ARIA slider inputs.',
      outcome:
        'Delivered 60fps waveform rendering with sub-10ms audio latency across modern desktop and mobile browsers.',
      features: [
        'Multi-band spatial panning with interactive vector handles',
        'Custom wavetable morphing and frequency modulation',
        'Direct export to 24-bit WAV and AIFF stems',
        'Offline capability with local IndexedDB preset storage',
      ],
      previewImages: [
        '/images/projects/soundcraft-screen1.svg',
        '/images/projects/soundcraft-screen2.svg',
      ],
    },
  },
  {
    slug: 'hyperdrift-zero',
    title: 'Hyperdrift Zero',
    tagline: 'Physics-driven cyberpunk arcade time-trial racer.',
    description:
      'An arcade racing experience exploring micro-momentum drift physics, custom neon procedural shaders, and instantaneous browser-based session loading.',
    category: 'game',
    status: 'development',
    year: 2024,
    technologies: ['Three.js', 'WebGL', 'TypeScript', 'Web Workers', 'Web Audio'],
    featured: true,
    thumbnail: '/images/projects/hyperdrift-thumb.svg',
    heroImage: '/images/projects/hyperdrift-hero.svg',
    links: {
      github: 'https://github.com/onkai-studio/hyperdrift-zero',
    },
    accessibilityNotes:
      'Customizable control remapping, adjustable screen-shake slider, colorblind-friendly HUD telemetry, and high-visibility track boundary options.',
    caseStudy: {
      challenge:
        'Balancing high-speed arcade drift mechanics with deterministic physics in the browser without dropping frames on mid-range devices.',
      solution:
        'Implemented a fixed-timestep physics engine executed within a dedicated background worker, synchronizing state with a lightweight Three.js render loop.',
      outcome:
        'Consistent 60+ FPS performance on mobile and desktop viewports with responsive gamepad and touch controls.',
      features: [
        'Deterministic drift slip angle calculations',
        'Dynamic audio engine reacting to acceleration and tire friction',
        'Ghost lap telemetry comparison system',
        'Fully responsive touch, keyboard, and Gamepad API support',
      ],
      previewImages: [
        '/images/projects/hyperdrift-screen1.svg',
      ],
    },
  },
  {
    slug: 'lumina-tokens',
    title: 'Lumina Token Engine',
    tagline: 'Generative design token framework and component engine.',
    description:
      'A cross-platform design token compiler that translates unified spatial, chromatic, and typographical math into multi-platform themes for iOS, Android, and Web.',
    category: 'web',
    status: 'released',
    year: 2023,
    technologies: ['TypeScript', 'Node.js', 'Tailwind CSS', 'CSS Variables', 'AST Parser'],
    featured: true,
    thumbnail: '/images/projects/lumina-thumb.svg',
    heroImage: '/images/projects/lumina-hero.svg',
    links: {
      live: 'https://lumina.example.com',
      github: 'https://github.com/onkai-studio/lumina-tokens',
    },
    accessibilityNotes:
      'Automated APCA and WCAG 2.2 AA contrast matrix calculations across all computed palette pairings.',
    caseStudy: {
      challenge:
        'Design systems constantly fall out of sync across web and native mobile codebases, leading to fragmented visual standards.',
      solution:
        'Built a centralized token parser that derives accessibility-tested color spaces, typography scales, and spacing curves into zero-dependency platform bundles.',
      outcome:
        'Unified styling contracts adopted across web apps and React Native packages with instant theme switching.',
      features: [
        'Real-time accessible contrast pairing verification',
        'Automated exports to Tailwind, Swift, and Kotlin Compose',
        'Interactive token inspector playground',
      ],
      previewImages: [
        '/images/projects/lumina-screen1.svg',
      ],
    },
  },
  {
    slug: 'kinetic-canvas',
    title: 'Kinetic Canvas',
    tagline: 'Gesture-driven spatial canvas exploring computer vision interactions.',
    description:
      'An experimental interface exploring hand-tracking through consumer webcams to sculpt generative fluid particles in real time, requiring no hardware sensors.',
    category: 'experiment',
    status: 'prototype',
    year: 2024,
    technologies: ['MediaPipe', 'WebGL', 'TypeScript', 'GLSL Shaders'],
    featured: true,
    thumbnail: '/images/projects/kinetic-thumb.svg',
    heroImage: '/images/projects/kinetic-hero.svg',
    links: {
      github: 'https://github.com/onkai-studio/kinetic-canvas',
    },
    accessibilityNotes:
      'Includes alternative mouse and keyboard fallback mode with full landmark keyboard controls for motor accessibility.',
    caseStudy: {
      challenge:
        'Web-based computer vision often introduces thermal throttling and sluggish framerates on laptops.',
      solution:
        'Streamlined landmark inference to off-screen worker pipelines and rendered particle vectors via GPU fragment shaders.',
      outcome:
        'Fluid 60fps particle dynamics responsive to two-hand gesture pinch, spread, and directional velocity.',
      features: [
        'Real-time optical flow particle simulation',
        'Zero-server client-only processing for total camera privacy',
        'Adjustable sensitivity and gesture profile calibration',
      ],
    },
  },
  {
    slug: 'chronos-ambient',
    title: 'Chronos Ambient',
    tagline: 'Minimalist ambient time management and focus companion.',
    description:
      'A focus application built for creative technologists and designers who prefer spatial flow over rigid Pomodoro clocks. Translates time into progressive light and sonic rhythms.',
    category: 'app',
    status: 'released',
    year: 2023,
    technologies: ['React Native', 'TypeScript', 'Audio Engine', 'Expo'],
    featured: false,
    thumbnail: '/images/projects/chronos-thumb.svg',
    heroImage: '/images/projects/chronos-hero.svg',
    links: {
      live: 'https://chronos.example.com',
    },
    accessibilityNotes:
      'Tactile haptic feedback patterns, visual flash cues for silent mode, and high-legibility display typography.',
    caseStudy: {
      challenge:
        'Traditional focus timers trigger cognitive stress with countdown numbers and harsh alarm sounds.',
      solution:
        'Designed an ambient gradient clock with generative binaural audio pulses that fade organically.',
      outcome:
        'Over 12,000 active sessions with zero user tracking and completely offline functionality.',
      features: [
        'Generative ambient soundscapes tuned to focus states',
        'Tactile micro-interactions and smooth time dial',
        'Customizable ambient lighting themes',
      ],
    },
  },
  {
    slug: 'echo-relay',
    title: 'Echo Relay',
    tagline: 'Asynchronous cooperative radio frequency puzzle game.',
    description:
      'A two-player mystery game where players decipher intercepted signals and reconstruct lost transmissions across synthetic radio channels.',
    category: 'game',
    status: 'prototype',
    year: 2024,
    technologies: ['TypeScript', 'WebSockets', 'Web Audio API', 'React'],
    featured: false,
    thumbnail: '/images/projects/echo-thumb.svg',
    heroImage: '/images/projects/echo-hero.svg',
    links: {
      github: 'https://github.com/onkai-studio/echo-relay',
    },
    accessibilityNotes:
      'Audio-to-text transcripts for all radio signals, visual signal oscilloscope, and adjustable pitch filters.',
    caseStudy: {
      challenge:
        'Creating atmospheric tension in a turn-based web game without demanding real-time twitch reflexes.',
      solution:
        'Focused on auditory frequency tuning, spectrogram decoding, and synchronous code-cracking mechanics.',
      outcome:
        'An engaging cooperative puzzle prototype tested with sound design enthusiasts.',
      features: [
        'Tactile frequency tuner with realistic static simulation',
        'Bespoke spectrogram decoder visualization',
        'Collaborative room codes with peer connection',
      ],
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === 'all') return projects;
  return projects.filter((project) => project.category === category);
}
