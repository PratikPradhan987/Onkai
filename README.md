# Onkai Studio Website — AI Development Pack

This package is the source of truth for building the Onkai Studio company website with Antigravity.

## Product
Onkai Studio is a creative technology studio that builds mobile apps, games, websites, digital products, and experiments, while also providing development/design services.

## Primary goals
- Premium, memorable, creative studio identity.
- Modular Next.js architecture.
- Easy for another developer to understand, modify, test, and debug.
- Accessible by default.
- Fast and SEO-friendly.
- Avoid unnecessary infrastructure.
- Keep content, UI, business logic, and infrastructure separated.
- Make future projects easy to add without rewriting components.

## Source-of-truth order
1. MASTER_RULES.md
2. PRD.md
3. TRD.md
4. ARCHITECTURE.md
5. UI_SPEC.md
6. DATA_MODEL.md
7. API_CONTRACT.md
8. SECURITY.md
9. TESTING.md
10. PRODUCTION_CHECKLIST.md
11. MICRO_TASKS.md
12. DECISIONS.md
13. CHANGELOG.md

If documents conflict, stop and record the conflict in DECISIONS.md rather than silently choosing.

## Core stack
Next.js App Router + TypeScript + Tailwind CSS + Motion.

Use Server Components by default. Use Client Components only when browser APIs, local state, event handlers, or client-only animation/interactions require them.

## V1 infrastructure
No database unless a real requirement appears.
No microservices.
No unnecessary CMS.
No Redis.
No GraphQL.
No Kubernetes.
Use Next.js Route Handlers only where server functionality is actually required.

## Accessibility
Target WCAG 2.2 AA practices. Accessibility is a release requirement, not a later enhancement.

## Development principle
Small, reviewable, reversible changes beat large generated rewrites.
