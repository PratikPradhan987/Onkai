# CHANGELOG

All notable changes to the Onkai Studio website will be documented in this file.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [0.1.0] - 2026-09-30

### Added
- **Core Architecture**: Initialized Next.js App Router with TypeScript strict mode, Tailwind CSS design tokens, and modular folder separation.
- **Route Implementation**:
  - `/`: Flagship studio homepage (Hero, What We Make, Featured Work, Labs Preview, Services Preview, Contact CTA).
  - `/work`: Portfolio showcase with accessible discipline filtering (Apps, Games, Web, Experiments).
  - `/work/[slug]`: Dynamic case study routes with pre-rendered static params, engineering challenge/solution breakdowns, and accessibility disclosures.
  - `/services`: End-to-end studio capabilities, deliverables breakdown, and 4-step collaborative process.
  - `/studio`: Studio ethos, founding story, core principles, and operational statistics.
  - `/about`: Automatic 308 permanent redirect to `/studio` to consolidate SEO link equity.
  - `/playground`: Interactive signal synthesis laboratory and experimental code spike showcase.
  - `/contact`: Client inquiry form with client & server validation, anti-spam honeypot, and rate limiting.
  - `/support`: Client support desk, SLA guarantees, defect triage guidelines, and retainer info.
  - `/faq`: Searchable interactive accordion knowledge base.
  - `/privacy`: Comprehensive GDPR/CCPA privacy policy and cookie disclosure.
  - `/terms`: Unified Terms of Service and Conditions.
  - `404 Not Found`: Custom `app/not-found.tsx` with clear recovery navigation.
  - `Error Boundary`: Route-level error handling via `app/error.tsx`.
- **Primary CTA**: Standardized single primary CTA ("Start a project") with consistent visual priority across all views.
- **Accessibility (WCAG 2.2 AA)**:
  - Skip to main content link.
  - Accessible dialog & drawer keyboard focus traps with ESC key support.
  - Form errors associated with input fields via `aria-describedby` and `aria-invalid`.
  - Global `prefers-reduced-motion` CSS overrides.
  - Focus-visible indicator rings on interactive elements.
- **Privacy & Cookie Consent**:
  - `CookieBanner` component distinguishing necessary from optional analytics.
  - "Manage Cookie Preferences" modal trigger available globally in the site footer.
  - Dedicated `lib/analytics` module isolating tracking calls and stripping PII/message contents.
- **SEO & Discoverability**:
  - Metadata API integration via `constructMetadata` helper.
  - Automated `app/sitemap.ts` generating entries for all static and dynamic project routes.
  - Automated `app/robots.ts` protecting `/api/` endpoints.
  - Open Graph preview images and brand favicon assets.
- **Security & Quality**:
  - In-memory sliding window rate limiter on `POST /api/contact`.
  - Zod schema validation for untrusted external payloads.
  - Automated unit and E2E test suites with 100% pass rate.
  - GitHub Actions CI workflow covering typecheck, lint, test, and production build.
