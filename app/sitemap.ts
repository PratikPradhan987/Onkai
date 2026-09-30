import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/constants';
import { projects } from '@/content/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { url: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { url: '/work', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/services', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/studio', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/playground', priority: 0.7, changeFrequency: 'weekly' as const },
    { url: '/contact', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/support', priority: 0.6, changeFrequency: 'monthly' as const },
    { url: '/faq', priority: 0.6, changeFrequency: 'monthly' as const },
    { url: '/privacy', priority: 0.3, changeFrequency: 'yearly' as const },
    { url: '/terms', priority: 0.3, changeFrequency: 'yearly' as const },
  ];

  const staticEntries: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${SITE_URL}${route.url}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const projectEntries: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${SITE_URL}/work/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: project.featured ? 0.85 : 0.75,
  }));

  return [...staticEntries, ...projectEntries];
}
