# ARCHITECTURAL DECISIONS

Record decisions that future developers may otherwise question.

## ADR-001 — Next.js App Router
Status: accepted
Decision: Use Next.js App Router.
Reason: Strong routing, server rendering, metadata support and maintainable React architecture.

## ADR-002 — TypeScript
Status: accepted
Decision: Use TypeScript strict mode.
Reason: Safer refactoring and clearer domain models.

## ADR-003 — No database for V1
Status: accepted
Decision: Keep portfolio/content data in the repository initially.
Reason: The website does not require mutable user data or a CMS for V1.

## ADR-004 — Server Components by default
Status: accepted
Decision: Use Server Components unless client behavior is required.
Reason: Reduce unnecessary client JavaScript and keep boundaries explicit.

## ADR-005 — Accessibility as a release gate
Status: accepted
Decision: Accessibility is tested throughout development.
Reason: It is part of product quality and public usability.

## ADR-006 — Next.js 13.5.8 App Router for Node.js 18.12.1 compatibility
Status: accepted
Date: 2026-09-30
Context: The host environment runs Node.js v18.12.1. Next.js 14+ enforces engines >=18.17.0 which causes immediate engine incompatibility on Node 18.12.1.
Decision: Use Next.js 13.5.8 with App Router, React 18.2.0, TypeScript strict mode, and Tailwind CSS.
Alternatives: Require host node upgrade (may break user's other local projects) or use Next.js 14 with force flags (unstable on <18.17).
Consequences: Full native compatibility with host Node 18.12.1 while delivering all required App Router architecture: Server Components by default, Route Handlers, Metadata API, nested layouts, and custom error/404 boundaries.
Verification: Next.js build and test suites run cleanly on Node 18.12.1.

## ADR template

### ADR-XXX — Title
Status:
Date:
Context:
Decision:
Alternatives:
Consequences:
Verification:
