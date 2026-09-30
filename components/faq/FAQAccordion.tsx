'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQItem } from '@/content/faq';

interface FAQAccordionProps {
  items: FAQItem[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIds, setOpenIds] = useState<string[]>([items[0]?.id || '']);

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="space-y-4" role="region" aria-label="Frequently Asked Questions list">
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        const buttonId = `faq-btn-${item.id}`;
        const contentId = `faq-panel-${item.id}`;

        return (
          <div
            key={item.id}
            className="rounded-2xl bg-surface border border-surface-border overflow-hidden transition-colors"
          >
            <button
              id={buttonId}
              type="button"
              onClick={() => toggleItem(item.id)}
              aria-expanded={isOpen}
              aria-controls={contentId}
              className="w-full p-6 text-left flex items-center justify-between gap-4 text-white hover:text-onkai-orange transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-onkai-orange"
            >
              <span className="text-base sm:text-lg font-bold">
                {item.question}
              </span>
              <ChevronDown
                className={`w-5 h-5 text-onkai-orange shrink-0 transition-transform duration-200 ${
                  isOpen ? 'rotate-180' : ''
                }`}
                aria-hidden="true"
              />
            </button>

            {isOpen && (
              <div
                id={contentId}
                role="region"
                aria-labelledby={buttonId}
                className="px-6 pb-6 pt-2 text-sm sm:text-base text-text-secondary leading-relaxed border-t border-surface-border/40 font-normal animate-fade-in"
              >
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
