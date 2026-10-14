"use client";

import React from "react";
import { getSiteConfig } from "@/data/site";
import { useLanguage } from "@/i18n/LanguageContext";
import { IconWhatsapp } from "@/components/ui/Icons";

export const FloatingWhatsApp: React.FC = () => {
  const { locale, t } = useLanguage();
  const site = getSiteConfig(locale);

  const whatsappMessage =
    locale === "ar"
      ? "مرحبًا، أود الاستفسار عن خدمات مركز فروق فردية وحجز موعد تقييم لطفلي"
      : "Hello, I would like to inquire about Forooq Fardya services and book an assessment for my child";

  const whatsappUrl = `https://wa.me/${site.contact.whatsapp.replace(
    /[^0-9]/g,
    ""
  )}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <aside aria-label={t.common.whatsappUs}>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t.common.whatsappUs}
        className="fixed bottom-6 start-6 z-40 w-14 h-14 bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded-full flex items-center justify-center shadow-floating transition-transform duration-200 hover:scale-110 active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40"
      >
        <IconWhatsapp size={32} />
      </a>
    </aside>
  );
};
