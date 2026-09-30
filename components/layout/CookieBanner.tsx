'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  getStoredConsent,
  setStoredConsent,
  ConsentStatus,
} from '@/lib/analytics';
import { Button } from '@/components/ui/Button';

export function CookieBanner() {
  const [mounted, setMounted] = useState(false);
  const [consentStatus, setConsentStatus] = useState<ConsentStatus>('undecided');
  const [showPreferences, setShowPreferences] = useState(false);
  const [analyticsChecked, setAnalyticsChecked] = useState(false);

  useEffect(() => {
    setMounted(true);
    const status = getStoredConsent();
    setConsentStatus(status);
    setAnalyticsChecked(status === 'granted');

    const handleOpenSettings = () => {
      setShowPreferences(true);
    };

    window.addEventListener('onkai-open-cookie-settings', handleOpenSettings);
    return () => {
      window.removeEventListener('onkai-open-cookie-settings', handleOpenSettings);
    };
  }, []);

  if (!mounted) return null;
  if (consentStatus !== 'undecided' && !showPreferences) return null;

  const handleAcceptAll = () => {
    setStoredConsent('granted');
    setConsentStatus('granted');
    setShowPreferences(false);
  };

  const handleRejectNonEssential = () => {
    setStoredConsent('denied');
    setConsentStatus('denied');
    setShowPreferences(false);
  };

  const handleSavePreferences = () => {
    const newStatus = analyticsChecked ? 'granted' : 'denied';
    setStoredConsent(newStatus);
    setConsentStatus(newStatus);
    setShowPreferences(false);
  };

  return (
    <aside
      aria-label="Cookie and Privacy Preferences"
      role="region"
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-lg z-50 p-6 rounded-2xl bg-surface border border-surface-border shadow-2xl shadow-black/80 animate-fade-in text-text-primary"
    >
      <div className="space-y-4">
        <div>
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-onkai-orange" />
            Cookie &amp; Privacy Choices
          </h2>
          <p className="text-xs text-text-secondary mt-1.5 leading-relaxed">
            We use strictly necessary cookies to ensure our site operates reliably. With your consent, we also measure site performance and visitor interactions to improve our tools.
          </p>
        </div>

        {/* Preferences Toggle Accordion */}
        {showPreferences && (
          <div className="space-y-3 py-3 border-y border-surface-border/60 text-xs">
            <div className="flex items-start justify-between gap-4 p-2.5 rounded-lg bg-surface-elevated border border-surface-border/40">
              <div>
                <p className="font-semibold text-white">Strictly Necessary</p>
                <p className="text-text-muted mt-0.5">Required for navigation, theme state, and security.</p>
              </div>
              <span className="font-mono text-[11px] text-onkai-orange bg-onkai-orange/10 px-2 py-0.5 rounded border border-onkai-orange/20">
                Always active
              </span>
            </div>

            <div className="flex items-start justify-between gap-4 p-2.5 rounded-lg bg-surface-elevated border border-surface-border/40">
              <div>
                <label htmlFor="analytics-consent-checkbox" className="font-semibold text-white cursor-pointer">
                  Performance &amp; Analytics
                </label>
                <p className="text-text-muted mt-0.5">
                  Helps us understand aggregated traffic and popular projects without collecting personal messages.
                </p>
              </div>
              <input
                id="analytics-consent-checkbox"
                type="checkbox"
                checked={analyticsChecked}
                onChange={(e) => setAnalyticsChecked(e.target.checked)}
                className="mt-1 w-4 h-4 rounded border-surface-border bg-surface-card text-onkai-orange focus:ring-onkai-orange focus:ring-offset-surface cursor-pointer"
              />
            </div>
          </div>
        )}

        <div className="text-[11px] text-text-muted">
          Read our{' '}
          <Link
            href="/privacy"
            className="text-onkai-orange underline hover:text-white transition-colors"
          >
            Privacy Policy
          </Link>{' '}
          and{' '}
          <Link
            href="/terms"
            className="text-onkai-orange underline hover:text-white transition-colors"
          >
            Terms of Service
          </Link>
          .
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2 pt-1">
          {showPreferences ? (
            <>
              <Button
                variant="primary"
                size="sm"
                onClick={handleSavePreferences}
                className="flex-1"
              >
                Save Preferences
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowPreferences(false)}
              >
                Cancel
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="primary"
                size="sm"
                onClick={handleAcceptAll}
                className="flex-1"
              >
                Accept All
              </Button>
              <Button
                variant="secondary"
                size="sm"
                onClick={handleRejectNonEssential}
                className="flex-1"
              >
                Reject Optional
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowPreferences(true)}
                className="text-xs"
              >
                Preferences
              </Button>
            </>
          )}
        </div>
      </div>
    </aside>
  );
}
