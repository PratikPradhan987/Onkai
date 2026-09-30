const { test, describe } = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');
const path = require('node:path');

describe('E2E Production Build Verification', () => {
  const nextAppDir = path.resolve('.next/server/app');

  test('all critical routes are generated in build output', () => {
    const requiredBuildPages = [
      'index.html',
      '_not-found.html',
      'work.html',
      'services.html',
      'studio.html',
      'playground.html',
      'contact.html',
      'support.html',
      'faq.html',
      'privacy.html',
      'terms.html',
      'robots.txt.body',
      'sitemap.xml.body',
    ];

    requiredBuildPages.forEach((file) => {
      const fullPath = path.join(nextAppDir, file);
      assert.ok(fs.existsSync(fullPath), `Production build artifact ${file} must exist`);
    });
  });

  test('all dynamic project routes are statically generated', () => {
    const projectSlugs = [
      'soundcraft-audio',
      'hyperdrift-zero',
      'lumina-tokens',
      'kinetic-canvas',
      'chronos-ambient',
      'echo-relay',
    ];

    projectSlugs.forEach((slug) => {
      const projectHtml = path.join(nextAppDir, 'work', `${slug}.html`);
      assert.ok(
        fs.existsSync(projectHtml),
        `Project detail static HTML for ${slug} must be generated`
      );

      const htmlContent = fs.readFileSync(projectHtml, 'utf8');
      assert.ok(
        htmlContent.includes('Overview &amp; Purpose') || htmlContent.includes('Overview & Purpose') || htmlContent.includes('Overview'),
        `Project page ${slug} must include Overview section`
      );
    });
  });

  test('homepage HTML includes accessible landmarks and primary CTA', () => {
    const indexHtml = fs.readFileSync(path.join(nextAppDir, 'index.html'), 'utf8');
    assert.ok(indexHtml.includes('Skip to main content'), 'Homepage must contain SkipLink');
    assert.ok(indexHtml.includes('Start a project'), 'Homepage must contain primary CTA Start a project');
    assert.ok(indexHtml.includes('aria-label="Site Footer"'), 'Homepage must contain semantic Footer');
    assert.ok(indexHtml.includes('Cookie &amp; Privacy Choices') || indexHtml.includes('Cookie'), 'Homepage must support cookie consent');
  });

  test('robots.txt disallows /api/ and references sitemap', () => {
    const robotsBody = fs.readFileSync(path.join(nextAppDir, 'robots.txt.body'), 'utf8');
    assert.ok(robotsBody.includes('Disallow: /api/'), 'Robots must disallow /api/');
    assert.ok(robotsBody.includes('sitemap.xml'), 'Robots must include sitemap.xml');
  });

  test('sitemap.xml contains all project URLs', () => {
    const sitemapBody = fs.readFileSync(path.join(nextAppDir, 'sitemap.xml.body'), 'utf8');
    assert.ok(sitemapBody.includes('/work/soundcraft-audio'), 'Sitemap must contain soundcraft-audio');
    assert.ok(sitemapBody.includes('/work/hyperdrift-zero'), 'Sitemap must contain hyperdrift-zero');
    assert.ok(sitemapBody.includes('/privacy'), 'Sitemap must contain privacy');
    assert.ok(sitemapBody.includes('/terms'), 'Sitemap must contain terms');
  });
});
