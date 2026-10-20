"use client";

import React from "react";
import { getFaqs } from "@/data/faqs";
import { getSiteConfig } from "@/data/site";
import { useLanguage } from "@/i18n/LanguageContext";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { Accordion } from "@/components/ui/Accordion";
import { CtaBand } from "@/components/sections/CtaBand";
import { IconWhatsapp } from "@/components/ui/Icons";

export const FaqClientView: React.FC = () => {
  const { locale, t } = useLanguage();
  const site = getSiteConfig(locale);
  const currentFaqs = getFaqs(locale);
  const isAr = locale === "ar";

  const whatsappMessage =
    isAr
      ? "مرحبًا، لدي سؤال غير موجود في قائمة الأسئلة الشائعة بمركز فروق فردية"
      : "Hello, I have a question not listed in the FAQ section of Forooq Fardya";

  const whatsappUrl = `https://wa.me/${site.contact.whatsapp.replace(
    /[^0-9]/g,
    ""
  )}?text=${encodeURIComponent(whatsappMessage)}`;

  const copy = {
    badge: isAr ? "إجابات واضحة" : "Clear Answers",
    title: isAr ? "الأسئلة الشائعة وإجاباتها" : "Frequently Asked Questions",
    intro: isAr
      ? "جمعنا لكم أهم التساؤلات التي يطرحها أولياء الأمور قبل حجز الجلسات، مع إجابات واضحة ومباشرة تساعدكم على اتخاذ القرار الأنسب لطفلكم."
      : "We gathered the primary questions parents ask prior to scheduling sessions, offering straightforward answers to help you choose the best path for your child.",
    notFoundTitle: isAr ? "لم تجدوا إجابة سؤالكم؟" : "Couldn't find an answer to your question?",
    notFoundDesc: isAr
      ? "فريقنا جاهز للرد على أي استفسار يخص طفلكم مباشرة عبر واتساب."
      : "Our team is ready to answer any specific inquiry regarding your child directly on WhatsApp.",
    askWhatsapp: isAr ? "اسألونا على واتساب" : "Ask Us on WhatsApp",
    ctaTitle: isAr ? "جاهزون للخطوة القادمة؟" : "Ready for the Next Step?",
    ctaSubtitle: isAr
      ? "احجزوا جلسة تقييم هادئة لطفلكم لنتعرف عليه ونضع خطته الفردية معًا."
      : "Schedule a calm evaluation session to get to know your child and co-create their personalized roadmap.",
  };

  return (
    <article className="pb-16 md:pb-0">
      {/* Header & Breadcrumb */}
      <header className="max-w-[1200px] mx-auto px-5 sm:px-6 pt-8 pb-8 text-start">
        <Breadcrumbs items={[{ title: t.nav.faq }]} className="mb-6" />

        <div className="max-w-2xl">
          <Badge variant="yellow" className="mb-4">
            {copy.badge}
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-[44px] font-bold text-brand-text leading-[1.35]">
            {copy.title}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-brand-text-body leading-[1.85]">
            {copy.intro}
          </p>
        </div>
      </header>

      {/* Accordion Section */}
      <section className="max-w-[860px] mx-auto px-5 sm:px-6 py-6 text-start">
        <Accordion items={currentFaqs} defaultOpenIndex={0} allowMultiple={true} />

        {/* Direct Ask Box */}
        <aside aria-label={copy.notFoundTitle} className="mt-12 bg-white rounded-xl border border-brand-border p-6 sm:p-8 text-center sm:text-start flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div>
            <h2 className="text-xl font-bold text-brand-text mb-1">
              {copy.notFoundTitle}
            </h2>
            <p className="text-sm text-brand-text-body">
              {copy.notFoundDesc}
            </p>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded-full font-bold text-sm flex items-center gap-2 shrink-0 transition-transform active:scale-[0.98]"
          >
            <IconWhatsapp size={18} />
            <span>{copy.askWhatsapp}</span>
          </a>
        </aside>
      </section>

      {/* CTA Band */}
      <CtaBand
        title={copy.ctaTitle}
        subtitle={copy.ctaSubtitle}
      />
    </article>
  );
};
