# SEO SPEC

Every indexable route must have intentional metadata.

## Required
- unique title
- unique meta description
- canonical URL where appropriate
- Open Graph title
- Open Graph description
- Open Graph image
- Twitter/X card metadata where appropriate
- favicon/app icons
- sitemap
- robots.txt

## Next.js implementation

Use the App Router Metadata API.

Centralize reusable metadata defaults but allow each page to override:
- title
- description
- image
- canonical

## Social preview
Provide a default social preview image and project-specific images where useful.

Recommended location:
`public/og/`

## Sitemap
Generate a sitemap from the known route/project data.
Dynamic project routes must be included.

## robots
Provide `robots.txt` with:
- production crawling rules
- sitemap reference
- no accidental blocking of public content

Do not index private/test routes.

## Content
Never use keyword stuffing.
Titles/descriptions must describe the actual page.
