import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  kicker?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  as?: 'h1' | 'h2' | 'h3';
  className?: string;
}

export function SectionHeading({
  kicker,
  title,
  description,
  align = 'left',
  as: HeadingTag = 'h2',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'space-y-3 mb-10 md:mb-14',
        align === 'center' ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl',
        className
      )}
    >
      {kicker && (
        <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-onkai-orange font-semibold">
          {kicker}
        </p>
      )}
      <HeadingTag className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary">
        {title}
      </HeadingTag>
      {description && (
        <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-normal">
          {description}
        </p>
      )}
    </div>
  );
}
