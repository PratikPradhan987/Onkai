const { test, describe } = require('node:test');
const assert = require('node:assert');
const { z } = require('zod');

// Mirror of contactFormSchema logic for direct test
const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Please provide a name with at least 2 characters.' })
    .max(100, { message: 'Name must not exceed 100 characters.' })
    .trim(),
  email: z
    .string()
    .email({ message: 'Please enter a valid email address.' })
    .max(120, { message: 'Email must not exceed 120 characters.' })
    .trim()
    .toLowerCase(),
  company: z
    .string()
    .max(100, { message: 'Company name must not exceed 100 characters.' })
    .optional()
    .transform((val) => val?.trim() || ''),
  message: z
    .string()
    .min(10, { message: 'Please provide a message with at least 10 characters.' })
    .max(3000, { message: 'Message must not exceed 3000 characters.' })
    .trim(),
  website: z.string().optional(),
});

function checkRateLimit(ip, limit = 5, windowMs = 60000, storage = new Map()) {
  const now = Date.now();
  const entry = storage.get(ip);
  if (!entry || now > entry.resetTime) {
    storage.set(ip, { count: 1, resetTime: now + windowMs });
    return { success: true, remaining: limit - 1 };
  }
  if (entry.count >= limit) {
    return { success: false, remaining: 0 };
  }
  entry.count += 1;
  return { success: true, remaining: limit - entry.count };
}

describe('Contact Form Validation & Security', () => {
  test('valid form payload passes validation', () => {
    const validData = {
      name: 'Ada Lovelace',
      email: 'ada@computing.org',
      company: 'Analytical Engine Lab',
      message: 'We are planning a high-performance web tool and would like to partner with Onkai Studio.',
      website: '',
    };
    const result = contactFormSchema.safeParse(validData);
    assert.strictEqual(result.success, true);
  });

  test('payload with short name fails validation', () => {
    const invalidData = {
      name: 'A',
      email: 'ada@computing.org',
      message: 'Valid message content exceeding ten characters.',
    };
    const result = contactFormSchema.safeParse(invalidData);
    assert.strictEqual(result.success, false);
    assert.match(result.error.issues[0].message, /at least 2 characters/i);
  });

  test('payload with malformed email fails validation', () => {
    const invalidData = {
      name: 'Grace Hopper',
      email: 'not-an-email',
      message: 'Valid message content exceeding ten characters.',
    };
    const result = contactFormSchema.safeParse(invalidData);
    assert.strictEqual(result.success, false);
    assert.match(result.error.issues[0].message, /valid email/i);
  });

  test('payload with message under 10 chars fails validation', () => {
    const invalidData = {
      name: 'Grace Hopper',
      email: 'grace@navy.mil',
      message: 'Too short',
    };
    const result = contactFormSchema.safeParse(invalidData);
    assert.strictEqual(result.success, false);
    assert.match(result.error.issues[0].message, /at least 10 characters/i);
  });

  test('rate limiter blocks after limit is reached', () => {
    const store = new Map();
    const testIp = '192.168.1.100';

    for (let i = 0; i < 5; i++) {
      const res = checkRateLimit(testIp, 5, 60000, store);
      assert.strictEqual(res.success, true);
    }

    // 6th attempt should fail
    const blockedRes = checkRateLimit(testIp, 5, 60000, store);
    assert.strictEqual(blockedRes.success, false);
    assert.strictEqual(blockedRes.remaining, 0);
  });
});
