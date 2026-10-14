"use client";

import React from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { ArticlesFilterList } from "@/components/articles/ArticlesFilterList";
import { CtaBand } from "@/components/sections/CtaBand";

export const ArticlesClientView: React.FC = () => {
  const { locale, t } = useLanguage();
  const isAr = locale === "ar";

  const copy = {
    badge: isAr ? "دليل الأسرة" : "Family Guide",
    title: isAr ? "المقالات والمراجع" : "Articles & Resources",
    intro: isAr
      ? "إرشادات ونصائح عملية ومبسطة كتبها مختصون لمساعدتكم على فهم طفلكم وتطبيق أنشطة منزلية تعزز تطوره دون توتر أو ضغط."
      : "Practical, accessible guidance authored by specialists to help you understand your child and implement gentle home routines that accelerate development without stress.",
    notice: isAr
      ? "ℹ المقالات المنشورة في هذه الصفحة مخصصة للتوعية العامة والإرشاد الأسري، ولا تغني عن استشارة المختص أو إجراء التقييم الفردي للطفل."
      : "ℹ Articles published on this page are intended for general awareness and parental guidance, and do not replace an individualized clinical evaluation.",
    ctaTitle: isAr
      ? "هل تودون استشارة بخصوص موضوع معين؟"
      : "Would you like a consultation on a specific topic?",
    ctaSubtitle: isAr
      ? "فريقنا يرحب بأسئلتكم ويسعد بتقديم المشورة المبدئية المناسبة لحالة طفلكم."
      : "Our clinical team welcomes your questions and is glad to provide initial guidance for your child.",
  };

  return (
    <div>
      {/* Page Header */}
      <section className="max-w-[1200px] mx-auto px-5 sm:px-6 pt-8 pb-4">
        <Breadcrumbs items={[{ title: t.nav.articles }]} className="mb-6" />

        <div className="max-w-2xl text-start">
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
      </section>

      {/* Main Articles List & Filter */}
      <section className="max-w-[1200px] mx-auto px-5 sm:px-6 py-6">
        <ArticlesFilterList />
      </section>

      {/* Educational Notice */}
      <section className="max-w-[1200px] mx-auto px-5 sm:px-6 pt-6 pb-10">
        <div className="bg-[#FEF7D9] border border-[#F0DC8A] rounded-lg p-5 text-start">
          <p className="text-xs sm:text-sm text-[#604818] leading-relaxed">
            {copy.notice}
          </p>
        </div>
      </section>

      {/* CTA Band */}
      <CtaBand
        title={copy.ctaTitle}
        subtitle={copy.ctaSubtitle}
      />
    </div>
  );
};
