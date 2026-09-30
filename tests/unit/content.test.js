const { test, describe } = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');
const path = require('node:path');

describe('Content Model & Assets Integrity', () => {
  // Read and parse projects.ts content
  const projectsContent = fs.readFileSync(path.resolve('content/projects.ts'), 'utf8');
  const servicesContent = fs.readFileSync(path.resolve('content/services.ts'), 'utf8');
  const experimentsContent = fs.readFileSync(path.resolve('content/experiments.ts'), 'utf8');

  test('projects.ts defines valid and unique project slugs', () => {
    const slugMatches = [...projectsContent.matchAll(/slug:\s*['"]([^'"]+)['"]/g)].map(m => m[1]);
    assert.ok(slugMatches.length >= 4, 'Should contain at least 4 projects');
    const uniqueSlugs = new Set(slugMatches);
    assert.strictEqual(uniqueSlugs.size, slugMatches.length, 'Project slugs must be unique');
  });

  test('services.ts defines valid capabilities and deliverables', () => {
    assert.ok(servicesContent.includes('capabilities:'), 'Services must contain capabilities');
    assert.ok(servicesContent.includes('deliverables:'), 'Services must contain deliverables');
    assert.ok(servicesContent.includes('digital-products'), 'Must include digital-products service');
    assert.ok(servicesContent.includes('web-experiences'), 'Must include web-experiences service');
  });

  test('experiments.ts defines playground items', () => {
    assert.ok(experimentsContent.includes('neon-physics'), 'Must include physics experiment');
    assert.ok(experimentsContent.includes('procedural-terrains'), 'Must include terrain experiment');
  });

  test('public project images exist on disk', () => {
    const expectedImages = [
      'public/images/projects/soundcraft-thumb.svg',
      'public/images/projects/soundcraft-hero.svg',
      'public/images/projects/hyperdrift-thumb.svg',
      'public/images/projects/hyperdrift-hero.svg',
      'public/images/projects/lumina-thumb.svg',
      'public/images/projects/lumina-hero.svg',
      'public/images/projects/kinetic-thumb.svg',
      'public/images/projects/kinetic-hero.svg',
      'public/images/projects/chronos-thumb.svg',
      'public/images/projects/chronos-hero.svg',
      'public/images/projects/echo-thumb.svg',
      'public/images/projects/echo-hero.svg',
    ];

    expectedImages.forEach((img) => {
      assert.ok(fs.existsSync(path.resolve(img)), `Image file ${img} must exist on disk`);
    });
  });

  test('brand logo and favicon assets exist on disk', () => {
    assert.ok(fs.existsSync(path.resolve('public/favicon.svg')), 'favicon.svg must exist');
    assert.ok(fs.existsSync(path.resolve('public/logo/onkai-logo.svg')), 'onkai-logo.svg must exist');
    assert.ok(fs.existsSync(path.resolve('public/og/onkai-default-og.png')), 'og image must exist');
  });
});
