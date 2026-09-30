# SECURITY

Follow `SECURITY_SPEC.md` and use OWASP-aligned secure-development practices.

## HTTPS
Production must use HTTPS.
HTTP must redirect to HTTPS.
Review HSTS and mixed-content behavior.

## Frontend secrets
Never ship private credentials to the browser.
Only intentionally public values may use `NEXT_PUBLIC_*`.

Private service:
Browser -> Next.js server -> provider

## Input
Validate all untrusted input server-side.
Never rely only on frontend validation.

## Contact
- schema validation
- rate limiting
- honeypot/anti-spam
- safe error responses
- no stack traces
- no sensitive data in logs

## Dependencies
Review and patch dependencies regularly.
Avoid unnecessary packages.

## Headers
Review security headers compatible with the deployment environment.

## Production verification
- HTTPS
- no mixed content
- no exposed secrets
- no credential leakage in browser/network/build output
- endpoint abuse checks
- XSS/malformed-input checks
- rate-limit checks
