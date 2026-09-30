# ACCESSIBILITY SPEC

## Baseline

Target WCAG 2.2 AA practices.

## Color contrast

Check:
- body text
- muted text
- buttons
- links
- form errors
- focus indicators
- text over images/gradients
- disabled states where relevant

Do not fix contrast by making the interface visually flat; use overlays, backgrounds, borders, typography, or layout where appropriate.

## Images

Every meaningful image gets useful alt text.

Decorative images:
`alt=""`

Do not write:
- "image"
- "picture"
- filename
- unnecessary visual details

If an image contains meaningful text, provide the information as HTML or an equivalent accessible text representation where possible.

## Forms
- visible labels
- instructions where necessary
- errors connected to fields
- clear required/optional indication
- keyboard access
- submit state
- server-side validation

## Navigation
- skip link
- semantic landmarks
- keyboard menu
- focus restoration after mobile menu/dialog closes
