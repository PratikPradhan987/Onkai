import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    BaseButtonProps {}

export interface LinkButtonProps extends BaseButtonProps {
  href: string;
  external?: boolean;
  'aria-label'?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-onkai-orange text-white hover:bg-onkai-orange-hover active:bg-onkai-orange-dark shadow-[0_0_25px_-5px_rgba(255,92,0,0.4)] border border-onkai-orange/80',
  secondary:
    'bg-surface-elevated text-text-primary hover:bg-surface-border active:bg-surface-card border border-surface-border',
  outline:
    'bg-transparent text-text-primary hover:text-white hover:border-onkai-orange border border-surface-border',
  ghost:
    'bg-transparent text-text-secondary hover:text-text-primary hover:bg-surface-elevated/50',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'text-xs px-3.5 py-1.5 rounded-md font-medium tracking-wide',
  md: 'text-sm px-5 py-2.5 rounded-lg font-medium tracking-wide',
  lg: 'text-base px-7 py-3.5 rounded-xl font-semibold tracking-wide',
};

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-onkai-orange focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed select-none active:scale-[0.98]',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

export function LinkButton({
  href,
  variant = 'primary',
  size = 'md',
  className,
  children,
  external,
  onClick,
  ...props
}: LinkButtonProps) {
  const commonClasses = cn(
    'inline-flex items-center justify-center transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-onkai-orange focus-visible:ring-offset-2 focus-visible:ring-offset-background select-none active:scale-[0.98]',
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (external || href.startsWith('http')) {
    return (
      <a
        href={href}
        className={commonClasses}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={commonClasses} onClick={onClick} {...props}>
      {children}
    </Link>
  );
}
