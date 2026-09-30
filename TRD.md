# TRD — Technical Requirements

## Framework
- Next.js App Router
- TypeScript
- React
- Tailwind CSS
- Motion for interaction/animation where required

## Rendering
Server Components by default.
Client Components only for:
- interactive state
- browser APIs
- event handlers
- client-only animation
- client-only third-party integrations

## Data
V1 content is local typed data or MDX if later justified.
No database.

## API
Next.js Route Handlers only for server operations such as contact submission.

## Quality
- TypeScript strict
- ESLint
- Prettier
- Unit/component tests
- E2E tests
- CI typecheck + lint + tests + build

## Browser support
Support current major desktop and mobile browsers according to the deployment platform's supported Next.js/browser baseline. Do not use browser-specific APIs without a fallback.

## Environment
Use .env.example.
Never commit secrets.

## Dependency rule
Before adding a package:
1. Identify the problem.
2. Confirm native Next.js/React/browser APIs are insufficient.
3. Check maintenance and bundle impact.
4. Document the reason if material.
