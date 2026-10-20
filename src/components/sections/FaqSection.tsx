"use client";

import React from "react";
import Link from "next/link";
import { getFaqs } from "@/data/faqs";
import { getSiteConfig } from "@/data/site";
import { useLanguage } from "@/i18n/LanguageContext";
import { Accordion } from "@/components/ui/Accordion";
import { IconWhatsapp } from "@/components/ui/Icons";

export const FaqSection: React.FC = () => {
  const { locale, t } = useLanguage();
  const site = getSiteConfig(locale);
  const currentFaqs = getFaqs(locale);

  const whatsappMessage =
    locale === "ar"
      ? "مرحبًا، لدي استفسار عن خدمات مركز فروق فردية"
      : "Hello, I have an inquiry regarding Forooq Fardya services";

  const whatsappUrl = `https://wa.me/${site.contact.whatsapp.replace(
    /[^0-9]/g,
    ""
  )}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="bg-white border-y border-brand-border py-14 sm:py-20 md:py-22"
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Header Column (5 cols on lg) */}
          <header className="lg:col-span-5 text-start">
            <span className="text-primary font-bold text-sm tracking-wide block mb-2">
              {t.faqSection.tag}
            </span>
            <h2
              id="faq-title"
              className="text-2xl sm:text-3xl md:text-[38px] font-bold text-brand-text leading-[1.4]"
            >
              {t.faqSection.title}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-brand-text-body leading-[1.85]">
              {t.faqSection.description}
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-base rounded-full shadow-sm transition-all"
              >
                <IconWhatsapp size={20} />
                <span>{t.faqSection.whatsappButton}</span>
              </a>

              <Link
                href="/faq"
                className="inline-flex items-center justify-center px-5 py-3 border border-brand-border hover:border-brand-border-strong text-brand-text font-semibold text-base rounded-full transition-colors"
              >
                {t.faqSection.moreQuestions}
              </Link>
            </div>
          </header>

          {/* Accordion Column (7 cols on lg) */}
          <div className="lg:col-span-7">
            <Accordion items={currentFaqs.slice(0, 5)} defaultOpenIndex={0} />
          </div>
        </div>
      </div>
    </section>
  );
};
