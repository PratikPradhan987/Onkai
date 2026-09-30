# COOKIE CONSENT SPEC

## Purpose

Provide a clear cookie/privacy choice without blocking normal access to the website.

## Banner

The first visit may display a compact consent banner explaining:
- that the site uses cookies or similar technologies
- the categories used
- why they are used
- how the user can manage choices

Required actions should be equally understandable:
- Accept
- Reject/Decline non-essential
- Manage preferences

Do not use deceptive button styling or preselect optional consent.

## Categories

At minimum conceptually distinguish:
- Necessary
- Analytics/measurement, if used

Do not create additional categories unless they are actually used.

## Behavior

Necessary functionality may operate without optional consent.

Optional analytics/tracking must not initialize before the required consent state.

Consent state should be stored using a documented mechanism.

## Accessibility

Banner must:
- be keyboard accessible
- have an accessible heading/label
- have visible focus
- work on mobile
- not trap focus unnecessarily
- have sufficient contrast
- remain usable with reduced motion

## Legal

The exact consent requirements depend on applicable jurisdictions and the technologies used.
Final implementation should be reviewed against the jurisdictions in which Onkai operates.
