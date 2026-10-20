"use client";

import React from "react";
import Link from "next/link";
import { getSiteConfig } from "@/data/site";
import { useLanguage } from "@/i18n/LanguageContext";
import { Constellation } from "@/components/ui/Constellation";
import { Badge } from "@/components/ui/Badge";
import { IconClock, IconArrowStart, IconWhatsapp } from "@/components/ui/Icons";

export const HeroSection: React.FC = () => {
  const { locale, t } = useLanguage();
  const site = getSiteConfig(locale);

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
      aria-labelledby="hero-title"
      className="max-w-[1200px] mx-auto px-5 sm:px-6 py-12 sm:py-16 md:py-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-16"
    >
      {/* Text Column Header */}
      <header className="flex-1 min-w-0 text-start">
        {/* Age Badge */}
        <Badge
          variant="yellow"
          icon={<IconClock size={18} color="#604818" />}
          className="mb-5 shadow-sm"
        >
          {t.hero.badge}
        </Badge>

        {/* Display Heading */}
        <h1
          id="hero-title"
          className="text-4xl sm:text-5xl lg:text-[56px] font-bold leading-[1.3] text-brand-text tracking-normal"
        >
          {t.hero.titlePart1}
          <strong className="text-primary font-bold relative inline-block">
            {t.hero.titleHighlight}
          </strong>
        </h1>

        {/* Lead Paragraph */}
        <p className="mt-5 text-lg sm:text-xl leading-[1.95] text-brand-text-body max-w-xl">
          {t.hero.description}
        </p>

        {/* Action Buttons */}
        <nav
          aria-label={locale === "ar" ? "إجراءات البدء السريع" : "Quick action links"}
          className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5"
        >
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-lg font-semibold text-white bg-primary hover:bg-primary-hover rounded-full shadow-cta transition-transform active:scale-[0.98] min-h-[52px]"
          >
            <span>{t.hero.primaryCta}</span>
            <IconArrowStart size={20} color="#fff" />
          </Link>

          <Link
            href="/services"
            className="inline-flex items-center justify-center px-7 py-3 text-lg font-semibold text-brand-text border-2 border-brand-text hover:bg-brand-text hover:text-brand-bg rounded-full transition-colors min-h-[52px]"
          >
            {t.hero.ghostCta}
          </Link>
        </nav>

        {/* Direct WhatsApp Prompt */}
        <p className="mt-6 text-sm sm:text-base text-brand-text-muted flex items-center gap-2 flex-wrap">
          <IconWhatsapp size={20} color="#25D366" />
          <span>{t.hero.whatsappPrompt}</span>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-text font-bold underline underline-offset-4 hover:text-primary transition-colors"
          >
            {t.hero.whatsappLink}
          </a>
        </p>
      </header>

      {/* Constellation Illustration Column */}
      <figure
        aria-label={locale === "ar" ? "رسم توضيحي لمنظومة الحواس وتنمية المهارات" : "Illustration of sensory and developmental skill nodes"}
        className="flex-1 w-full flex flex-col justify-center items-center m-0"
      >
        <Constellation />
        <figcaption className="sr-only">
          {locale === "ar"
            ? "رسم توضيحي تفاعلي يربط بين مهارات السمع والبصر واللمس والتذوق والشم والحركة والتواصل لدعم الفروق الفردية للطفل"
            : "Interactive illustration connecting sensory, motor, speech, and communication skill nodes honoring each child's individual differences"}
        </figcaption>
      </figure>
    </section>
  );
};
