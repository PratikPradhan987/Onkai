export const SITE_NAME = 'Onkai Studio';
export const SITE_TAGLINE = 'Creative Technology Studio';
export const SITE_DESCRIPTION =
  'Onkai Studio creates mobile apps, games, web experiences, digital products, and interactive technology experiments.';
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://onkai.studio';

export const PRIMARY_CTA = {
  label: 'Start a project',
  href: '/contact',
};

export const CONTACT_EMAIL = 'hello@onkai.studio';
export const SUPPORT_EMAIL = 'support@onkai.studio';

export const NAV_LINKS = [
  { href: '/work', label: 'Work' },
  { href: '/services', label: 'Services' },
  { href: '/studio', label: 'Studio' },
  { href: '/playground', label: 'Playground' },
  { href: '/contact', label: 'Contact' },
] as const;

export const FOOTER_LINKS = {
  explore: [
    { href: '/work', label: 'Work & Projects' },
    { href: '/services', label: 'Studio Services' },
    { href: '/studio', label: 'About Onkai' },
    { href: '/playground', label: 'Playground & Labs' },
  ],
  support: [
    { href: '/contact', label: 'Contact Us' },
    { href: '/support', label: 'Client Support' },
    { href: '/faq', label: 'Frequently Asked Questions' },
  ],
  legal: [
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' },
  ],
} as const;

export const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com/onkai-studio', external: true },
  { label: 'X / Twitter', href: 'https://x.com/onkai_studio', external: true },
  { label: 'LinkedIn', href: 'https://linkedin.com/company/onkai-studio', external: true },
] as const;
