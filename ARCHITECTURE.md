# ARCHITECTURE

## High-level
Browser
-> Next.js App Router
-> Server-rendered content
-> CDN/static assets

Public contact:
Browser -> Route Handler -> validation -> spam/rate limit -> email provider

## Directory structure

app/
  layout.tsx
  page.tsx
  work/
    page.tsx
    [slug]/page.tsx
  services/page.tsx
  studio/page.tsx
  playground/page.tsx
  contact/page.tsx
  privacy/page.tsx
  api/contact/route.ts

components/
  layout/
  ui/
  hero/
  projects/
  services/
  studio/
  playground/
  contact/

content/
  projects.ts
  services.ts
  experiments.ts
  studio.ts

lib/
  constants.ts
  utils.ts
  validation.ts
  metadata.ts

types/
  project.ts
  service.ts
  experiment.ts

public/
  images/
  projects/
  logo/
  fonts/
  3d/

tests/
  unit/
  e2e/

docs/

.github/workflows/

## Responsibility rules
app = routing/page composition.
components = reusable presentation and interaction.
content = content/data.
lib = reusable non-UI logic.
types = shared domain types.
public = static assets.
tests = automated tests.
docs = project decisions/specifications.

## Import rule
Avoid circular dependencies.
UI components should not import page-specific implementation details.
Content should not import UI.
Core utilities should not import React unless necessary.

## Project detail pages
Use [slug] routing and typed project records.
Adding a project should require adding data/media, not duplicating a page component.

## Error boundaries
Add route-level error and not-found handling where appropriate.
404 pages must provide useful navigation.

## Scalability
If content becomes large, migrate content storage behind the same typed/content interface rather than rewriting page components.
