# PERFORMANCE SPEC

Performance is a release requirement.

## Goals
- Fast initial page load.
- Minimal unnecessary JavaScript.
- Optimized images.
- Stable layout.
- Good mobile experience.
- No avoidable blocking work.

## Image rules
- Use `next/image` where appropriate.
- Prefer AVIF/WebP where practical.
- Compress source assets before committing.
- Define dimensions/aspect ratios to reduce layout shift.
- Use responsive sizes.
- Lazy-load non-critical images.
- Prioritize the hero/LCP image only when it is actually above the fold.
- Avoid serving desktop-sized assets to mobile unnecessarily.

## Loading states
Use skeletons/placeholders where loading is perceptible and the content structure is known.

Do not add skeletons to content that is statically rendered and available immediately.

Skeletons must:
- preserve layout
- have appropriate contrast
- not create excessive motion
- respect reduced motion

## Performance checks
Before production:
- run a production build
- test on a throttled mobile connection/device profile
- inspect Core Web Vitals
- inspect image sizes
- inspect client JavaScript
- inspect third-party scripts
- inspect layout shift
- inspect long tasks

Use Lighthouse/PageSpeed Insights or equivalent tooling during release verification.

Do not treat a single Lighthouse score as the only performance metric.
