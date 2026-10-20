"use client";

import React from "react";
import Link from "next/link";
import { getSiteConfig } from "@/data/site";
import { useLanguage } from "@/i18n/LanguageContext";
import { IconWhatsapp } from "@/components/ui/Icons";

interface StickyBookingBarProps {
  serviceTitle?: string;
}

export const StickyBookingBar: React.FC<StickyBookingBarProps> = ({ serviceTitle }) => {
  const { locale, t } = useLanguage();
  const site = getSiteConfig(locale);

  const whatsappMessage =
    locale === "ar"
      ? serviceTitle
        ? `مرحبًا، أود الاستفسار عن خدمة ${serviceTitle} وحجز تقييم لطفلي في مركز فروق فردية`
        : "مرحبًا، أود الاستفسار عن حجز تقييم لطفلي في مركز فروق فردية"
      : serviceTitle
      ? `Hello, I would like to inquire about ${serviceTitle} and book an assessment for my child at Forooq Fardya`
      : "Hello, I would like to inquire about booking an assessment for my child at Forooq Fardya";

  const whatsappUrl = `https://wa.me/${site.contact.whatsapp.replace(
    /[^0-9]/g,
    ""
  )}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <aside
      aria-label={locale === "ar" ? "شريط الحجز السريع" : "Quick Booking Bar"}
      className="lg:hidden fixed bottom-0 inset-x-0 z-30 bg-white/95 backdrop-blur-md border-t border-brand-border p-3 shadow-hover"
    >
      <nav
        aria-label={locale === "ar" ? "أزرار الحجز السريع" : "Quick Booking Actions"}
        className="flex items-center gap-3 max-w-md mx-auto"
      >
        <Link
          href="/contact"
          className="flex-1 py-3 text-center text-base font-bold text-white bg-primary hover:bg-primary-hover rounded-full shadow-cta"
        >
          {t.nav.bookAssessment}
        </Link>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t.common.whatsappUs}
          className="w-12 h-12 shrink-0 bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded-full flex items-center justify-center shadow-sm"
        >
          <IconWhatsapp size={24} />
        </a>
      </nav>
    </aside>
  );
};
