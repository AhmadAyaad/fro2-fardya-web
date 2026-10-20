"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";
import { IconArrowStart } from "@/components/ui/Icons";

export default function NotFound() {
  const { locale, t } = useLanguage();
  const isAr = locale === "ar";

  return (
    <article
      aria-labelledby="not-found-title"
      className="max-w-[600px] mx-auto px-5 py-24 text-center"
    >
      <div
        className="w-24 h-24 rounded-full bg-primary-soft text-primary font-bold text-4xl flex items-center justify-center mx-auto mb-6 border-4 border-primary"
        aria-hidden="true"
      >
        {isAr ? "٤٠٤" : "404"}
      </div>

      <h1 id="not-found-title" className="text-3xl sm:text-4xl font-bold text-brand-text mb-4">
        {t.common.pageNotFound}
      </h1>

      <p className="text-base sm:text-lg text-brand-text-body leading-[1.85] mb-8">
        {t.common.pageNotFoundDesc}
      </p>

      <nav
        aria-label={isAr ? "روابط بديلة" : "Alternative navigation"}
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <Link
          href="/"
          className="w-full sm:w-auto px-8 py-3.5 bg-primary hover:bg-primary-hover text-white rounded-full font-bold text-base shadow-cta flex items-center justify-center gap-2"
        >
          <span>{t.common.backToHome}</span>
          <IconArrowStart size={18} />
        </Link>

        <Link
          href="/services"
          className="w-full sm:w-auto px-7 py-3 border-2 border-brand-text text-brand-text hover:bg-brand-text hover:text-brand-bg rounded-full font-bold text-base transition-colors"
        >
          {t.common.services}
        </Link>
      </nav>
    </article>
  );
}
