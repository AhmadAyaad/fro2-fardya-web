"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";

export interface BreadcrumbItem {
  title: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className = "" }) => {
  const { locale, isRTL, t } = useLanguage();

  return (
    <nav
      aria-label={locale === "ar" ? "مسار التنقّل" : "Breadcrumbs"}
      className={className}
    >
      <ol className="flex items-center gap-2 text-sm text-brand-text-muted flex-wrap list-none p-0 m-0">
        <li className="inline-flex items-center">
          <Link href="/" className="hover:text-primary transition-colors">
            {t.nav.home}
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="inline-flex items-center gap-2">
              <span className="text-brand-border-strong select-none font-bold" aria-hidden="true">
                {isRTL ? "‹" : "›"}
              </span>
              {isLast || !item.href ? (
                <span className="text-brand-text font-semibold" aria-current="page">
                  {item.title}
                </span>
              ) : (
                <Link href={item.href} className="hover:text-primary transition-colors">
                  {item.title}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
