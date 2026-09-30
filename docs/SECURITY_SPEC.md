# SECURITY SPEC

## HTTPS

Production must use HTTPS.

Requirements:
- HTTPS enabled at the deployment/hosting layer.
- HTTP should redirect to HTTPS.
- Avoid mixed content.
- Review HSTS configuration where appropriate.
- Cookies must use Secure when applicable.
- Never send sensitive form data over HTTP.

Do not attempt to implement HTTPS in frontend React code.

## Frontend secrets

No private credentials may be shipped to the browser.

Never put:
- private API keys
- database credentials
- email provider secrets
- signing secrets
- admin tokens
- service-account credentials

in client components or `NEXT_PUBLIC_*` variables unless the value is genuinely public.

## Rule

If a credential grants privileged access, it belongs server-side.

Client -> Next.js server endpoint -> private provider.

## Public configuration

Only expose values that are intentionally public, such as:
- public analytics IDs
- public site URL
- public map IDs where applicable

Document why an environment variable is safe to expose.

## Secret verification

Before production:
- inspect environment variables
- inspect built client bundles
- run a secret scanner if available
- verify no credentials appear in source maps or browser network responses
