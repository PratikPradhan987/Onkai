const { test, describe } = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');
const path = require('node:path');

describe('SEO & Route Configuration', () => {
  test('sitemap.ts includes all required routes', () => {
    const sitemapContent = fs.readFileSync(path.resolve('app/sitemap.ts'), 'utf8');
    const requiredUrls = [
      '/work',
      '/services',
      '/studio',
      '/playground',
      '/contact',
      '/support',
      '/faq',
      '/privacy',
      '/terms',
    ];

    requiredUrls.forEach((url) => {
      assert.ok(
        sitemapContent.includes(`'${url}'`),
        `sitemap.ts must include route ${url}`
      );
    });

    assert.ok(
      sitemapContent.includes('projectEntries'),
      'sitemap.ts must dynamically generate entries for all projects'
    );
  });

  test('robots.ts configures crawler rules and sitemap', () => {
    const robotsContent = fs.readFileSync(path.resolve('app/robots.ts'), 'utf8');
    assert.ok(robotsContent.includes("allow: '/'"), "Robots must allow '/'");
    assert.ok(robotsContent.includes("disallow: ['/api/']"), "Robots must disallow '/api/'");
    assert.ok(robotsContent.includes('sitemap.xml'), 'Robots must reference sitemap');
  });

  test('about route redirects to studio', () => {
    const aboutContent = fs.readFileSync(path.resolve('app/about/page.tsx'), 'utf8');
    assert.ok(
      aboutContent.includes("redirect('/studio')"),
      'About page must redirect to /studio to prevent duplicate SEO'
    );
  });
});
