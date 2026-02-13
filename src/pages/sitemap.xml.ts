import type { APIRoute } from 'astro';
import portfolio from '../data/portfolio.json';

const SITE = portfolio.basics?.url || 'https://cesar-gu.github.io/portfolio';

export const GET: APIRoute = () => {
  const urls = [
    `${SITE}`,
    // Add important static assets / documents
    `${SITE}/docs/tfm.pdf`,
    `${SITE}/docs/tfg.pdf`,
  ];

  const pages = urls
    .map((url) => {
      return `  <url>
    <loc>${url}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages}
</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
