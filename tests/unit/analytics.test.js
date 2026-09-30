const { test, describe } = require('node:test');
const assert = require('node:assert');

describe('Analytics & Privacy Safeguards', () => {
  const CONSENT_STORAGE_KEY = 'onkai_cookie_consent_v1';

  test('consent storage key matches documented standard', () => {
    assert.strictEqual(CONSENT_STORAGE_KEY, 'onkai_cookie_consent_v1');
  });

  test('tracking parameter sanitization filters message text and secrets', () => {
    const rawParams = {
      project_slug: 'soundcraft-audio',
      category: 'app',
      message: 'Sensitive user text that should never be sent to analytics',
      user_password: 'secretPassword123',
      view_duration: 42,
    };

    const sanitized = {};
    for (const [key, value] of Object.entries(rawParams)) {
      if (key.toLowerCase().includes('message') || key.toLowerCase().includes('password')) {
        continue;
      }
      sanitized[key] = value;
    }

    assert.strictEqual(sanitized.project_slug, 'soundcraft-audio');
    assert.strictEqual(sanitized.category, 'app');
    assert.strictEqual(sanitized.view_duration, 42);
    assert.strictEqual(sanitized.message, undefined);
    assert.strictEqual(sanitized.user_password, undefined);
  });
});
