import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://studiosahaj.com';
  
  const pages = [
    '',
    '/projects',
    '/practice',
    '/people',
    '/media',
    '/events',
    '/careers',
    '/contact',
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: page === '' ? 1 : 0.8,
  }));
}
