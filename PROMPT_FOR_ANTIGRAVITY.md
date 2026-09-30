# ANTIGRAVITY MASTER IMPLEMENTATION PROMPT — ONKAI STUDIO

You are the principal engineer, frontend architect, accessibility engineer, and release engineer responsible for implementing the Onkai Studio website.

Before writing code, read every file under `docs/`. These documents are the source of truth.

Read especially:
MASTER_RULES.md
PRD.md
TRD.md
ARCHITECTURE.md
UI_SPEC.md
DATA_MODEL.md
LEGAL_SPEC.md
SEO_SPEC.md
PERFORMANCE_SPEC.md
ACCESSIBILITY_SPEC.md
COOKIE_CONSENT_SPEC.md
ANALYTICS_SPEC.md
SECURITY_SPEC.md
API_CONTRACT.md
TESTING.md
PRODUCTION_CHECKLIST.md
MICRO_TASKS.md
DECISIONS.md
CHANGELOG.md

If requirements conflict, do not silently choose. Record the conflict and decision in `docs/DECISIONS.md`.

## PRODUCT

Onkai Studio is a creative technology studio building mobile apps, games, websites, digital products and experiments, while also providing services.

The website should feel like a memorable creative technology studio, not a generic SaaS or software-agency template.

## STACK

Use:
- Next.js App Router
- TypeScript strict mode
- Tailwind CSS
- Motion only where useful

Server Components by default.

Do not add a database, CMS, Prisma, Redis, GraphQL, microservices, Kubernetes, or other infrastructure unless a real documented requirement appears.

## MODULARITY

Use:

app/
components/
content/
lib/
types/
public/
tests/
docs/
.github/workflows/

Responsibilities:
- app = routes/page composition
- components = reusable UI
- content = domain content
- lib = reusable logic
- types = domain types
- public = assets
- tests = tests
- docs = specifications/decisions

A developer must be able to find the page, component, content, logic, test and documentation for a feature predictably.

Do not create giant components.
Do not duplicate project pages.
Do not scatter content throughout JSX.

Adding a project should normally require a typed data record and assets, not a new page implementation.

## ROUTES

Implement:
/
/work
/work/[slug]
/services
/studio
/about if genuinely needed; otherwise redirect/alias to avoid duplicate SEO
/playground
/contact
/support
/faq
/privacy
/terms

Create a custom 404.

## PRIMARY CTA

Use one clear primary CTA:
**Start a project**

Do not create several competing primary CTAs with equal visual weight.

## DESIGN

Use the supplied Onkai identity:
- dark premium base
- Onkai orange
- white/off-white typography
- editorial hierarchy
- playful/experimental details
- controlled gradients
- subtle technical textures
- polished project presentation

References are inspiration, not templates. Do not copy their distinctive layouts or assets.

## ACCESSIBILITY

Treat accessibility as a release requirement.

Implement:
- semantic HTML
- skip link
- landmarks
- logical heading hierarchy
- keyboard navigation
- visible focus
- accessible names
- form labels
- associated errors
- alt text
- contrast checks
- reduced-motion support
- mobile accessibility
- accessible menus/dialogs

Never make important functionality hover-only.
Never communicate important information by color alone.
Never hide essential content behind animation.

Target WCAG 2.2 AA practices.

## LEGAL/TRUST

Implement and link from the footer:
- Privacy Policy
- Terms of Service / Terms & Conditions
- Contact
- Support
- FAQ

Do not invent legal claims or corporate details.

Treat legal pages as implementation templates requiring final legal review for applicable jurisdictions.

## COOKIES

If optional analytics uses cookies or similar tracking:
- show consent before optional tracking initializes
- allow accept
- allow reject non-essential
- allow manage preferences
- do not use deceptive consent UI
- ensure banner is keyboard accessible
- respect the final Privacy Policy

Necessary functionality must not depend on optional analytics consent.

## ANALYTICS

Create a dedicated analytics module.

Do not scatter raw provider calls throughout components.

Use environment variables only for intentionally public analytics IDs.

Do not send:
- contact message contents
- unnecessary personal data
- secrets

Test consent accepted/rejected/changed.

## HTTPS

Production must:
- use HTTPS
- redirect HTTP to HTTPS
- avoid mixed content
- use secure cookies when applicable
- review HSTS where appropriate

HTTPS is configured at the hosting/deployment layer, not in React components.

## SEO

Implement:
- unique title
- meta description
- canonical where appropriate
- Open Graph title/description/image
- social preview image
- favicon/app icons
- sitemap
- robots.txt
- truthful structured data where useful

Dynamic project routes must appear in the sitemap.

Do not accidentally index test/private routes.

## IMAGES

Use optimized image handling.

Prefer:
- `next/image`
- AVIF/WebP where practical
- responsive sizes
- explicit dimensions/aspect ratios
- compressed assets

Every meaningful image requires useful alt text.
Decorative images use `alt=""`.

## PERFORMANCE

Optimize for real users, especially mobile.

Check:
- production build
- page load
- Core Web Vitals
- LCP
- CLS
- INP/responsiveness
- JS payload
- image weight
- third-party scripts

Use skeletons only where loading is actually perceptible and where they preserve useful layout.

Do not turn static content into unnecessary loading states.

Do not load heavy 3D/video assets before required.

## CONTACT

Implement:
POST /api/contact

Fields:
name
email
company optional
message
honeypot

Requirements:
- client validation
- server validation
- rate limiting
- spam protection
- safe error handling
- success state
- failure state

Never expose provider credentials or stack traces.

## SECURITY

No private secrets in frontend code.

Never expose:
- private API keys
- service credentials
- database passwords
- signing secrets
- admin tokens

`NEXT_PUBLIC_*` is only for genuinely public values.

If a provider requires a secret:
browser -> Next.js server -> provider

Before release inspect source/build/network output for accidental secrets.

## ERROR HANDLING

Implement:
- custom 404
- route error boundaries
- form errors
- API errors
- media fallbacks

User errors should explain what happened and what to do next.

Developer logs should be useful but avoid unnecessary personal data/secrets.

## BROKEN LINKS

Before release:
- scan internal links
- scan important external links
- test navigation
- verify project URLs
- verify sitemap URLs

Fix broken links rather than hiding them.

## RESPONSIVE

Mobile-first.
Test small phone, large phone, tablet, laptop and large desktop.

No horizontal overflow.
No inaccessible mobile menu.
No hover-only mobile interactions.

## MOTION

Motion should communicate:
- hierarchy
- interaction
- transition
- brand personality

Respect `prefers-reduced-motion`.

Reduced motion must preserve all information/functionality.

## TESTING

Run:
- typecheck
- lint
- unit/component tests
- E2E tests

Critical E2E:
- homepage
- navigation
- work
- project detail
- contact validation
- contact success/failure
- mobile navigation
- keyboard navigation
- legal/support/FAQ pages
- custom 404

Add regression tests for recurring bugs.

## GITHUB ACTIONS

CI should run:
- dependency install with lockfile
- typecheck
- lint
- tests
- production build

Never print secrets.

## DEVELOPMENT METHOD

Do not generate a giant uncontrolled implementation.

Work in micro tasks from `docs/MICRO_TASKS.md`.

For each task:
1. inspect current implementation
2. identify affected modules
3. implement the smallest safe change
4. run relevant tests
5. inspect responsive behavior
6. inspect accessibility
7. update docs when necessary

For bugs:
Reproduce -> isolate -> fix -> regression test -> verify.

Do not rewrite unrelated working code.

## DOCUMENTATION

Update:
- DECISIONS.md for material architectural decisions
- CHANGELOG.md for meaningful user-visible/architectural changes

## DEFINITION OF DONE

A feature is complete only when:
- modular
- maintainable
- responsive
- accessible
- tested
- error-handled
- documented where necessary
- secure
- performant
- compatible with the site's legal/privacy behavior

Do not claim completion if required checks were not actually run.

## FINAL PRODUCTION REVIEW

Verify:
- legal pages
- support
- FAQ
- contact
- HTTPS
- cookie consent
- analytics
- metadata
- social preview
- favicon
- sitemap
- robots
- alt text
- image compression
- page speed
- skeleton/loading states
- contrast
- mobile
- 404
- broken links
- form validation
- spam protection
- frontend secret exposure
- typecheck
- lint
- tests
- production build

Build a website that is beautiful enough to represent Onkai Studio, but structured well enough that another developer can maintain it years later.
