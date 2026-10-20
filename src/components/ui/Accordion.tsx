"use client";

import React, { useState } from "react";
import { IconPlus, IconMinus } from "./Icons";

export interface AccordionItemData {
  id: string;
  q: string;
  a: string;
}

interface AccordionProps {
  items: AccordionItemData[];
  defaultOpenIndex?: number;
  allowMultiple?: boolean;
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  defaultOpenIndex = 0,
  allowMultiple = false,
  className = "",
}) => {
  const [openIndices, setOpenIndices] = useState<number[]>(
    defaultOpenIndex !== -1 ? [defaultOpenIndex] : []
  );

  const toggle = (index: number) => {
    if (allowMultiple) {
      setOpenIndices((prev) =>
        prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
      );
    } else {
      setOpenIndices((prev) => (prev.includes(index) ? [] : [index]));
    }
  };

  return (
    <ul className={`space-y-4 list-none p-0 m-0 ${className}`}>
      {items.map((item, index) => {
        const isOpen = openIndices.includes(index);
        const buttonId = `faq-btn-${item.id}`;
        const regionId = `faq-panel-${item.id}`;

        return (
          <li
            key={item.id}
            className="bg-white border border-brand-border rounded-md overflow-hidden transition-all duration-200 hover:border-brand-border-strong"
          >
            <h3>
              <button
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={regionId}
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-start cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
              >
                <span className="text-base sm:text-lg font-bold text-brand-text leading-relaxed">
                  {item.q}
                </span>
                <span
                  className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                    isOpen
                      ? "bg-primary-soft text-primary rotate-180"
                      : "bg-brand-bg-alt text-brand-text-muted"
                  }`}
                  aria-hidden="true"
                >
                  {isOpen ? <IconMinus size={18} /> : <IconPlus size={18} />}
                </span>
              </button>
            </h3>
            <div
              id={regionId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className={`px-5 pb-5 sm:px-6 sm:pb-6 text-brand-text-body text-base leading-loose ${
                isOpen ? "block animate-fadeIn" : "hidden"
              }`}
            >
              <p className="border-t border-brand-border/60 pt-4">{item.a}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
