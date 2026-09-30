# ERROR HANDLING

## Principles
Errors must be understandable to users and useful to developers without leaking internals.

## Categories
- 404 not found
- validation error
- network failure
- rate limit
- server failure
- media loading failure
- unexpected client error

## UI behavior
Use clear messages:
- what happened
- what the user can do next

Avoid:
"Something went wrong" alone.

## Developer behavior
Log actionable diagnostic context without secrets or unnecessary personal data.

## Boundaries
Use Next.js error/not-found patterns at appropriate route levels.

## Contact form
Preserve user-entered data where safe after a recoverable error.
Never expose stack traces.
