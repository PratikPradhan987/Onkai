import { z } from 'zod';

export const contactFormSchema = z.object({
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
  website: z.string().optional(), // Honeypot field
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

/**
 * In-memory sliding window rate limiter for endpoint protection
 */
interface RateLimitEntry {
  count: number;
  resetTime: number;
}

const rateLimitMap = new Map<string, RateLimitEntry>();

export function checkRateLimit(
  identifier: string,
  limit: number = 5,
  windowMs: number = 60 * 1000
): { success: boolean; remaining: number; reset: number } {
  const now = Date.now();
  const entry = rateLimitMap.get(identifier);

  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(identifier, {
      count: 1,
      resetTime: now + windowMs,
    });
    return { success: true, remaining: limit - 1, reset: now + windowMs };
  }

  if (entry.count >= limit) {
    return { success: false, remaining: 0, reset: entry.resetTime };
  }

  entry.count += 1;
  return { success: true, remaining: limit - entry.count, reset: entry.resetTime };
}
