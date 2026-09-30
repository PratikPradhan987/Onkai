# SECURITY

## Baseline
Use secure-by-default Next.js patterns and OWASP-aligned practices.

## Rules
- No secrets in Git.
- .env files are ignored.
- Use .env.example with placeholder names.
- Server-side validation for all external input.
- Sanitize/encode untrusted content.
- Prevent XSS through safe rendering.
- No dangerouslySetInnerHTML unless reviewed and sanitized.
- Rate-limit public contact endpoint.
- Honeypot/anti-spam protection.
- Keep dependencies patched.
- Review dependency additions.
- Avoid unnecessary personal-data collection.
- HTTPS in production.
- Security headers where compatible.
- Avoid leaking server errors.
- Use least privilege for external services.

## Security review before production
- npm audit/dependency review as appropriate
- secrets scan
- endpoint abuse test
- XSS input test
- malformed JSON test
- oversized request test
- rate-limit test
