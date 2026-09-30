# ANALYTICS SPEC

Analytics must be privacy-conscious and compatible with the site's consent model.

## Requirements
- Define the analytics purpose.
- Minimize collected data.
- Do not collect sensitive personal information unnecessarily.
- Do not send contact-form message contents to analytics.
- Document provider and data processing.
- Respect the cookie/consent configuration.

## Consent

If the selected analytics implementation uses non-essential cookies or similar tracking technologies, load it only after the required consent state is established.

If an analytics provider can operate without non-essential cookies/tracking, configure it accordingly and document the behavior.

## Implementation

Keep analytics initialization isolated in a dedicated module, for example:

`lib/analytics/`

Do not scatter tracking calls throughout components.

Create named event helpers such as:
- `trackProjectView`
- `trackContactStart`
- `trackContactSubmit`

Do not create an event for every click.

## Environment

Use environment variables for public analytics identifiers.

Never expose private analytics/service credentials.

## Verification

Test:
- first visit
- consent accepted
- consent rejected
- consent changed
- analytics disabled
- navigation
- production domain

Update Privacy Policy to accurately describe the final implementation.
