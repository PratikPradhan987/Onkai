# QA RELEASE SPEC

Run a release pass covering the following.

## Functional
- navigation
- project links
- dynamic project routes
- contact submission
- validation
- spam protection
- error states
- FAQ
- support
- privacy
- terms
- 404

## Visual
- desktop
- tablet
- mobile
- typography
- spacing
- overflow
- image cropping
- skeleton/loading states

## Accessibility
- keyboard-only
- screen-reader landmarks/headings
- focus states
- contrast
- alt text
- reduced motion
- form errors

## SEO
- titles
- descriptions
- canonical
- OG image
- favicon
- sitemap
- robots

## Security
- HTTPS
- no frontend secrets
- endpoint validation
- rate limiting
- no stack traces

## Performance
- production build
- page load
- image compression
- Core Web Vitals
- JavaScript payload
- third-party scripts

## Broken links
Run an automated link check against the production build/site.
Fix internal 404s and invalid external links where practical.

## Sign-off
Record important findings and fixes in CHANGELOG.md or DECISIONS.md.
