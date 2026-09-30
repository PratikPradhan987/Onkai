# MASTER RULES

## 1. Brand
Onkai Studio should feel like a creative technology studio, not a generic software agency.

Design language:
- Premium dark foundation.
- Onkai orange as the primary brand accent.
- Strong editorial typography.
- Playful/experimental visual moments.
- Controlled gradients, grids, glow, and motion.
- The Onkai character/logo may become an interactive brand element.
- Never copy the reference websites literally.

Brand hierarchy:
Onkai identity > typography > storytelling > interaction > visual effects.

## 2. Engineering
- TypeScript strict mode.
- Prefer simple architecture.
- Server Components by default.
- Avoid duplicated logic.
- Reusable components must have clear responsibilities.
- Business/content data must not be hardcoded throughout UI components.
- Do not create abstractions until a repeated pattern is real.
- Do not introduce infrastructure without a documented requirement.
- Every feature must be testable.
- Every significant architectural decision goes in DECISIONS.md.

## 3. Maintainability
A developer unfamiliar with the project must be able to locate:
- page
- component
- content
- styles/tokens
- validation
- API handler
- tests
- documentation

within a predictable directory structure.

Prefer explicit names over clever abstractions.

## 4. Accessibility
- Semantic HTML first.
- Keyboard navigation for every interactive feature.
- Visible focus states.
- Logical heading hierarchy.
- Correct landmarks.
- Form labels and error associations.
- Meaningful alt text.
- Decorative images use empty alt.
- Never communicate information by color alone.
- Minimum practical contrast equivalent to WCAG AA.
- Respect prefers-reduced-motion.
- Touch targets should be comfortably usable.
- Dialogs, menus, carousels and custom controls require correct keyboard behavior.
- Do not hide important content from screen readers.
- Never use animation as the only way to reveal essential information.

## 5. Performance
- Optimize images.
- Prefer next/image where appropriate.
- Lazy-load non-critical media.
- Avoid unnecessary client JavaScript.
- Keep third-party scripts minimal.
- Avoid huge hero videos unless justified.
- Do not load 3D assets before they are needed.
- Measure before optimizing.

## 6. Animation
Animation must serve hierarchy, storytelling, feedback, or interaction.
No gratuitous animation.
All major motion must have reduced-motion behavior.

## 7. Content
Never invent portfolio claims, user counts, awards, clients, revenue, or performance figures.
Use factual project status:
concept, prototype, development, released, archived.

## 8. Changes
Before changing architecture:
- inspect existing implementation;
- identify affected modules;
- update the relevant document;
- implement the smallest safe change;
- run tests/lint/typecheck;
- update CHANGELOG when user-visible or architectural;
- record important decisions.

## 9. Bug fixing
Do not rewrite unrelated code.
Reproduce -> isolate -> fix -> test regression -> document if necessary.

## 10. Security
Never expose secrets in source.
Validate all external input.
Do not trust client validation.
Rate-limit public endpoints where applicable.
Keep dependency versions controlled.
Use secure headers where compatible.
Do not collect unnecessary personal information.

## 11. Git
Use small commits with meaningful messages.
Do not commit generated secrets, .env files, build artifacts, or credentials.
