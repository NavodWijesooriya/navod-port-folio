import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://navodwijesooriya.me/sitemap.xml',
    host: 'https://navodwijesooriya.me',
  };
}
