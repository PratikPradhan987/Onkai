'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { NAV_LINKS, PRIMARY_CTA } from '@/lib/constants';
import { Container } from '@/components/ui/Container';
import { LinkButton } from '@/components/ui/Button';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Monitor scroll for subtle navbar elevation
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Handle ESC key and focus restoration
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-colors duration-300 ${
        scrolled
          ? 'bg-background/90 backdrop-blur-md border-b border-surface-border/60 shadow-lg shadow-black/20'
          : 'bg-background/60 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <Container size="default">
        <div className="flex items-center justify-between h-20">
          {/* Studio Brand / Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-onkai-orange rounded-lg p-1"
            aria-label="Onkai Studio Homepage"
          >
            <div className="w-9 h-9 rounded-lg bg-surface border border-surface-border flex items-center justify-center relative overflow-hidden group-hover:border-onkai-orange/60 transition-colors">
              <span className="w-2.5 h-2.5 rounded-full bg-onkai-orange shadow-[0_0_8px_#ff5c00]" />
              <div className="absolute inset-0 rounded-lg border border-onkai-orange/20 animate-pulse-subtle" />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold tracking-wider text-text-primary group-hover:text-white transition-colors">
                ONKAI
              </span>
              <span className="text-[10px] font-mono tracking-[0.25em] text-onkai-orange -mt-1 font-semibold">
                STUDIO
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-md text-sm font-medium transition-all duration-150 relative ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-text-secondary hover:text-text-primary hover:bg-surface-elevated/40'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-onkai-orange rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Primary CTA (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <LinkButton
              href={PRIMARY_CTA.href}
              variant="primary"
              size="sm"
              className="gap-1.5"
            >
              <span>{PRIMARY_CTA.label}</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </LinkButton>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2.5 rounded-lg text-text-secondary hover:text-text-primary hover:bg-surface-elevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-onkai-orange"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div
          id="mobile-menu"
          ref={mobileMenuRef}
          className="md:hidden fixed inset-x-0 top-20 bottom-0 bg-background/95 backdrop-blur-xl border-t border-surface-border/70 z-50 flex flex-col justify-between p-6 animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          <nav className="flex flex-col gap-3 pt-4">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-2xl font-bold py-3 border-b border-surface-border/30 flex items-center justify-between transition-colors ${
                    isActive ? 'text-onkai-orange' : 'text-text-primary hover:text-onkai-orange'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-onkai-orange" />}
                </Link>
              );
            })}
          </nav>

          <div className="pt-8 pb-10 space-y-4">
            <LinkButton
              href={PRIMARY_CTA.href}
              variant="primary"
              size="lg"
              className="w-full gap-2 text-base"
              onClick={() => setIsOpen(false)}
            >
              <span>{PRIMARY_CTA.label}</span>
              <ArrowUpRight className="w-5 h-5" aria-hidden="true" />
            </LinkButton>
            <p className="text-xs text-center text-text-muted">
              hello@onkai.studio • Tokyo / Global
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
