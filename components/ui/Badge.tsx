import React from 'react';
import { cn } from '@/lib/utils';
import { ProjectCategory, ProjectStatus } from '@/types/project';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'orange' | 'outline' | 'status';
  status?: ProjectStatus;
  category?: ProjectCategory;
  className?: string;
}

export function Badge({
  children,
  variant = 'default',
  status,
  category: _category,
  className,
}: BadgeProps) {
  const getStatusColor = (s?: ProjectStatus) => {
    switch (s) {
      case 'released':
        return 'text-emerald-400 bg-emerald-950/40 border-emerald-800/60';
      case 'development':
        return 'text-amber-400 bg-amber-950/40 border-amber-800/60';
      case 'prototype':
        return 'text-cyan-400 bg-cyan-950/40 border-cyan-800/60';
      case 'concept':
        return 'text-purple-400 bg-purple-950/40 border-purple-800/60';
      case 'archived':
        return 'text-zinc-400 bg-zinc-900 border-zinc-800';
      default:
        return 'text-onkai-orange bg-onkai-orange/10 border-onkai-orange/30';
    }
  };

  if (status) {
    return (
      <span
        className={cn(
          'inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium border uppercase tracking-wider',
          getStatusColor(status),
          className
        )}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-current" aria-hidden="true" />
        {children || status}
      </span>
    );
  }

  const variantStyles = {
    default: 'bg-surface-elevated text-text-secondary border-surface-border',
    orange: 'bg-onkai-orange/10 text-onkai-orange border-onkai-orange/30',
    outline: 'bg-transparent text-text-secondary border-surface-border',
    status: getStatusColor(status),
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-mono font-medium border tracking-wider uppercase',
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
