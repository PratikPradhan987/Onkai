# API CONTRACT

## POST /api/contact

Purpose: receive a contact inquiry.

Request JSON:
{
  "name": "string",
  "email": "string",
  "company": "string | optional",
  "message": "string",
  "website": "string | optional honeypot"
}

Rules:
- Validate with Zod or equivalent server-side schema.
- Reject malformed input with 400.
- Honeypot submissions are rejected/ignored.
- Rate-limit abuse.
- Never expose provider credentials.
- Do not return internal errors.

Success:
200/201 with a generic success response.

Client-visible errors:
400 invalid submission.
429 too many requests.
500/503 temporary server problem.

Do not expose stack traces, provider responses, or internal identifiers.
