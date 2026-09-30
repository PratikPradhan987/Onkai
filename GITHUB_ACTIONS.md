# GITHUB ACTIONS

## CI workflow
On pull request and push:
1. checkout
2. install dependencies with lockfile
3. typecheck
4. lint
5. unit/component tests
6. production build

## Optional E2E
Run Playwright against the production build or appropriate preview environment.

## Principles
- Fail fast on quality gates.
- Use dependency caching where safe.
- Never print secrets.
- Pin or appropriately control action versions.
- Keep workflows readable.

## Suggested scripts
npm run lint
npm run typecheck
npm run test
npm run test:e2e
npm run build
