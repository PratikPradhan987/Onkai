/**
 * Dedicated Privacy-Conscious Analytics Module for Onkai Studio
 * Follows specs in docs/ANALYTICS_SPEC.md and docs/COOKIE_CONSENT_SPEC.md.
 * 
 * Never collects sensitive message bodies, private passwords, or untruncated PII.
 * Requires user consent before firing optional analytics.
 */

export const CONSENT_STORAGE_KEY = 'onkai_cookie_consent_v1';

export type ConsentStatus = 'granted' | 'denied' | 'undecided';

export interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
}

export function getStoredConsent(): ConsentStatus {
  if (typeof window === 'undefined') return 'undecided';
  try {
    const stored = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (stored === 'granted' || stored === 'denied') {
      return stored;
    }
    return 'undecided';
  } catch {
    return 'undecided';
  }
}

export function setStoredConsent(status: 'granted' | 'denied') {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, status);
    window.dispatchEvent(new CustomEvent('onkai-consent-change', { detail: status }));
  } catch {
    // Local storage unavailable/blocked
  }
}

export function isAnalyticsAllowed(): boolean {
  return getStoredConsent() === 'granted';
}

export function trackEvent(eventName: string, params?: Record<string, string | number | boolean>) {
  if (!isAnalyticsAllowed()) {
    return;
  }

  // Safe tracking: exclude any raw personal information or message text
  const sanitizedParams: Record<string, string | number | boolean> = {};
  if (params) {
    for (const [key, value] of Object.entries(params)) {
      if (key.toLowerCase().includes('message') || key.toLowerCase().includes('password')) {
        continue;
      }
      sanitizedParams[key] = value;
    }
  }

  if (typeof window !== 'undefined' && (window as unknown as { gtag?: Function }).gtag) {
    (window as unknown as { gtag: Function }).gtag('event', eventName, sanitizedParams);
  } else if (process.env.NODE_ENV === 'development') {
    // Helpful developer logging without PII
    // eslint-disable-next-line no-console
    console.debug(`[Analytics Event] ${eventName}:`, sanitizedParams);
  }
}

// Named domain event helpers
export function trackProjectView(projectSlug: string, category: string) {
  trackEvent('project_view', { project_slug: projectSlug, category });
}

export function trackContactStart() {
  trackEvent('contact_form_start');
}

export function trackContactSubmit(status: 'success' | 'failure') {
  trackEvent('contact_form_submit', { status });
}

export function trackServiceInterest(serviceSlug: string) {
  trackEvent('service_interest', { service_slug: serviceSlug });
}
