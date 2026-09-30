'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { trackContactStart, trackContactSubmit } from '@/lib/analytics';
import { contactFormSchema } from '@/lib/validation';

interface FormState {
  name: string;
  email: string;
  company: string;
  message: string;
  website: string; // Honeypot
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    company: '',
    message: '',
    website: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [serverMessage, setServerMessage] = useState<string>('');
  const [hasStarted, setHasStarted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (!hasStarted) {
      setHasStarted(true);
      trackContactStart();
    }

    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear field-specific error as user types
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Client-side Zod validation
    const result = contactFormSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof FormState, string>> = {};
      result.error.issues.forEach((issue) => {
        const fieldName = issue.path[0] as keyof FormState;
        if (!fieldErrors[fieldName]) {
          fieldErrors[fieldName] = issue.message;
        }
      });
      setErrors(fieldErrors);
      // Focus first erroneous field
      const firstErrorKey = Object.keys(fieldErrors)[0];
      const element = document.getElementById(firstErrorKey);
      element?.focus();
      return;
    }

    // 2. Submit to Route Handler
    setStatus('submitting');
    setServerMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus('error');
        setServerMessage(
          data.error || 'A network error occurred. Please try again or email us directly.'
        );
        trackContactSubmit('failure');
        return;
      }

      setStatus('success');
      setServerMessage(
        data.message || 'Thank you! We have received your inquiry and will be in touch within 48 hours.'
      );
      trackContactSubmit('success');
      // Reset sensitive fields
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
        website: '',
      });
    } catch {
      setStatus('error');
      setServerMessage(
        'Unable to connect to the studio server. Please check your internet connection or email hello@onkai.studio.'
      );
      trackContactSubmit('failure');
    }
  };

  if (status === 'success') {
    return (
      <div
        className="p-8 sm:p-12 rounded-3xl bg-surface border border-emerald-500/40 text-center space-y-6 shadow-xl"
        role="alert"
        aria-live="polite"
      >
        <div className="w-16 h-16 rounded-full bg-emerald-950/60 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400">
          <CheckCircle2 className="w-8 h-8" aria-hidden="true" />
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-white">Message Transmitted</h2>
          <p className="text-sm sm:text-base text-text-secondary max-w-md mx-auto leading-relaxed">
            {serverMessage}
          </p>
        </div>

        <Button
          variant="outline"
          size="md"
          onClick={() => {
            setStatus('idle');
            setServerMessage('');
          }}
        >
          Send Another Inquiry
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="p-8 sm:p-12 rounded-3xl bg-surface border border-surface-border space-y-6 shadow-xl"
      aria-label="Start a project inquiry form"
    >
      {/* Server error banner */}
      {status === 'error' && (
        <div
          className="p-4 rounded-xl bg-red-950/50 border border-red-800/60 flex items-start gap-3 text-red-300 text-sm"
          role="alert"
        >
          <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" aria-hidden="true" />
          <p>{serverMessage}</p>
        </div>
      )}

      {/* Honeypot field (hidden from screen-readers and visual users) */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Do not fill this field</label>
        <input
          id="website"
          name="website"
          type="text"
          value={formData.website}
          onChange={handleInputChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Name & Email Fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-text-secondary">
            Name <span className="text-onkai-orange" aria-hidden="true">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleInputChange}
            aria-required="true"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
            placeholder="Ada Lovelace"
            className={`w-full px-4 py-3 rounded-xl bg-surface-elevated border text-white placeholder-text-muted text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-onkai-orange ${
              errors.name ? 'border-red-500' : 'border-surface-border hover:border-surface-border/80'
            }`}
          />
          {errors.name && (
            <p id="name-error" className="text-xs text-red-400 font-mono">
              {errors.name}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-text-secondary">
            Email <span className="text-onkai-orange" aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
            placeholder="ada@domain.com"
            className={`w-full px-4 py-3 rounded-xl bg-surface-elevated border text-white placeholder-text-muted text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-onkai-orange ${
              errors.email ? 'border-red-500' : 'border-surface-border hover:border-surface-border/80'
            }`}
          />
          {errors.email && (
            <p id="email-error" className="text-xs text-red-400 font-mono">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      {/* Company (Optional) */}
      <div className="space-y-2">
        <label htmlFor="company" className="block text-xs font-mono uppercase tracking-wider text-text-secondary">
          Company or Project Organization <span className="text-text-muted text-[10px]">(Optional)</span>
        </label>
        <input
          id="company"
          name="company"
          type="text"
          value={formData.company}
          onChange={handleInputChange}
          placeholder="Studio Labs Inc."
          className="w-full px-4 py-3 rounded-xl bg-surface-elevated border border-surface-border hover:border-surface-border/80 text-white placeholder-text-muted text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-onkai-orange"
        />
      </div>

      {/* Message */}
      <div className="space-y-2">
        <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-text-secondary">
          Project Brief &amp; Goals <span className="text-onkai-orange" aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={formData.message}
          onChange={handleInputChange}
          aria-required="true"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
          placeholder="Tell us about the mobile app, website, or experiment you want to build. Include timeline, platform expectations, and any technical ambitions..."
          className={`w-full px-4 py-3 rounded-xl bg-surface-elevated border text-white placeholder-text-muted text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-onkai-orange resize-y ${
            errors.message ? 'border-red-500' : 'border-surface-border hover:border-surface-border/80'
          }`}
        />
        {errors.message && (
          <p id="message-error" className="text-xs text-red-400 font-mono">
            {errors.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={status === 'submitting'}
          className="w-full sm:w-auto gap-2 text-base shadow-lg shadow-onkai-orange/20"
        >
          {status === 'submitting' ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
              <span>Transmitting Brief...</span>
            </>
          ) : (
            <>
              <span>Submit Project Inquiry</span>
              <Send className="w-4 h-4" aria-hidden="true" />
            </>
          )}
        </Button>
      </div>

      <p className="text-xs text-text-muted">
        We respect your privacy. All inquiries are held in strict confidence. No marketing spam, ever.
      </p>
    </form>
  );
}
