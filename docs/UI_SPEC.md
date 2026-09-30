# UI SPEC

## Visual direction
Blend:
- premium dark technology aesthetic
- playful creative studio energy
- editorial typography
- atmospheric gradients
- Onkai orange/white identity

Do not copy reference layouts literally.

## Core tokens
Define colors, typography, spacing, radii, shadows, motion and z-index as centralized design tokens.

Suggested palette:
- deep near-black foundation
- off-white primary text
- Onkai orange as primary accent
- restrained secondary neutrals
- optional controlled atmospheric gradient colors

Do not scatter raw color values through components.

## Typography
Use a distinctive modern sans-serif with strong display hierarchy.
Define:
display, h1, h2, h3, body, small, label.

## Layout
Use a consistent responsive container and grid.
Avoid arbitrary per-page widths.

## Components
- Navbar
- Footer
- Button
- LinkButton
- SectionHeading
- ProjectCard
- ProjectGrid
- ServiceCard
- ExperimentCard
- Marquee where useful
- MediaFrame
- ContactForm
- SkipLink
- MobileNavigation

## Accessibility
- semantic nav/main/footer/section/article
- one logical h1 per page
- no skipped heading levels without reason
- skip link
- focus-visible
- keyboard support
- accessible names
- form errors tied with aria-describedby
- dialogs trap/restore focus correctly
- decorative media excluded from accessibility tree
- reduced-motion variant

## Responsive
Design mobile first.
Validate at:
- small phone
- large phone
- tablet
- laptop
- large desktop

Do not depend on a single exact viewport.

## Motion
Use restrained entrance/hover/transition effects.
Every significant motion system needs prefers-reduced-motion behavior.

## Images
Use descriptive alt text when meaningful.
Use empty alt for decorative images.
Avoid text embedded in images where HTML text is possible.
