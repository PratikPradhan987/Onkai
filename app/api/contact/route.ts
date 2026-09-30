import { NextRequest, NextResponse } from 'next/server';
import { contactFormSchema, checkRateLimit } from '@/lib/validation';

export async function POST(request: NextRequest) {
  try {
    // 1. IP extraction for rate limiting
    const forwarded = request.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0].trim() : '127.0.0.1';

    // 2. Rate limit check (max 5 requests per minute per IP)
    const rateLimit = checkRateLimit(ip, 5, 60 * 1000);
    if (!rateLimit.success) {
      return NextResponse.json(
        {
          error: 'Rate limit exceeded. Please wait a minute before submitting again.',
        },
        {
          status: 429,
          headers: {
            'Retry-After': Math.ceil((rateLimit.reset - Date.now()) / 1000).toString(),
          },
        }
      );
    }

    // 3. Body parsing
    let body;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { error: 'Invalid JSON request payload.' },
        { status: 400 }
      );
    }

    // 4. Honeypot check: If the hidden 'website' field contains a value, silently reject bot
    if (body.website && String(body.website).trim().length > 0) {
      // Return 200 OK so automated bots do not mutate strategy
      return NextResponse.json(
        { success: true, message: 'Message received.' },
        { status: 200 }
      );
    }

    // 5. Schema validation via Zod
    const validationResult = contactFormSchema.safeParse(body);
    if (!validationResult.success) {
      const fieldErrors = validationResult.error.flatten().fieldErrors;
      return NextResponse.json(
        {
          error: 'Validation failed. Please verify the submitted information.',
          details: fieldErrors,
        },
        { status: 400 }
      );
    }

    const { name, email, company } = validationResult.data;

    // 6. In development/production: log transaction safely without leaking passwords or full secrets
    // When real provider (e.g. Resend / SendGrid) is configured, it would be dispatched here securely:
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.log(`[Contact Submission] Received inquiry from ${name} (${email}) - Company: ${company || 'N/A'}`);
    }

    // Return safe affirmative response
    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for reaching out. We have received your message and will respond within 48 hours.',
      },
      { status: 200 }
    );
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Unhandled contact submission error:', error instanceof Error ? error.message : 'Unknown');
    return NextResponse.json(
      {
        error: 'An unexpected server error occurred while processing your message. Please try again or email us directly at hello@onkai.studio.',
      },
      { status: 500 }
    );
  }
}
