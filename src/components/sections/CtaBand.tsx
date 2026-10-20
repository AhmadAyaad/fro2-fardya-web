"use client";

import React from "react";
import Link from "next/link";
import { getSiteConfig } from "@/data/site";
import { useLanguage } from "@/i18n/LanguageContext";
import { IconWhatsapp, IconArrowStart } from "@/components/ui/Icons";

interface CtaBandProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

export const CtaBand: React.FC<CtaBandProps> = ({
  title,
  subtitle,
  className = "",
}) => {
  const { locale, t } = useLanguage();
  const site = getSiteConfig(locale);

  const finalTitle = title || t.ctaBand.title;
  const finalSubtitle = subtitle || t.ctaBand.subtitle;

  const whatsappMessage =
    locale === "ar"
      ? "مرحبًا، أود الاستفسار عن حجز تقييم لطفلي في مركز فروق فردية"
      : "Hello, I would like to inquire about booking an assessment for my child at Forooq Fardya";

  const whatsappUrl = `https://wa.me/${site.contact.whatsapp.replace(
    /[^0-9]/g,
    ""
  )}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section
      id="contact-cta"
      aria-labelledby="cta-title"
      className={`py-14 sm:py-20 md:py-22 ${className}`}
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6">
        <div className="bg-brand-bg-alt border border-brand-border rounded-xl p-8 sm:p-12 md:p-16 text-center max-w-4xl mx-auto shadow-sm">
          <h2
            id="cta-title"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-text leading-[1.35] max-w-2xl mx-auto"
          >
            {finalTitle}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-brand-text-body leading-[1.85] max-w-xl mx-auto">
            {finalSubtitle}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-lg font-semibold text-white bg-primary hover:bg-primary-hover rounded-full shadow-cta transition-transform active:scale-[0.98] min-h-[52px]"
            >
              <span>{t.ctaBand.bookButton}</span>
              <IconArrowStart size={20} color="#fff" />
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3 text-lg font-semibold text-white bg-[#25D366] hover:bg-[#1EBE5D] rounded-full shadow-sm transition-transform active:scale-[0.98] min-h-[52px]"
            >
              <IconWhatsapp size={22} />
              <span>{t.ctaBand.whatsappButton}</span>
            </a>
          </div>

          <small className="block mt-6 text-xs text-brand-text-muted">
            {site.disclaimer}
          </small>
        </div>
      </div>
    </section>
  );
};
