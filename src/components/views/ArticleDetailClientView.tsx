"use client";

import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticleBySlug, getArticles } from "@/data/articles";
import { useLanguage } from "@/i18n/LanguageContext";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { SenseNode } from "@/components/ui/SenseNode";
import { CtaBand } from "@/components/sections/CtaBand";
import {
  IconSenseMouth,
  IconSpeech,
  IconBook,
  IconSprout,
  IconClock,
  IconArrowStart,
  IconWhatsapp,
} from "@/components/ui/Icons";

interface ArticleDetailClientViewProps {
  slug: string;
}

export const ArticleDetailClientView: React.FC<ArticleDetailClientViewProps> = ({ slug }) => {
  const { locale, t } = useLanguage();
  const article = getArticleBySlug(slug, locale);

  if (!article) {
    notFound();
  }

  const isAr = locale === "ar";
  const allArticles = getArticles(locale);
  const otherArticles = allArticles.filter((a) => a.slug !== article.slug);

  const whatsappShareUrl = `https://wa.me/?text=${encodeURIComponent(
    isAr
      ? `${article.title}\nمقال مفيد من مركز فروق فردية`
      : `${article.title}\nHelpful guide from Forooq Fardya Center`
  )}`;

  const getIcon = (categorySlug: string) => {
    switch (categorySlug) {
      case "speech-therapy":
        return <IconSenseMouth size={34} color="#206B8F" />;
      case "learning-difficulties":
        return <IconBook size={32} color="#2C384D" />;
      case "skills-development":
        return <IconSprout size={32} color="#2C384D" />;
      default:
        return null;
    }
  };

  const copy = {
    publishedIn: isAr ? `• نشر في ${article.date}` : `• Published in ${article.date}`,
    conclusionTitle: isAr ? "خلاصة:" : "Takeaway:",
    notice: isAr
      ? "ℹ هذه المعلومات مخصصة للتوعية العامة والإرشاد الأسري، ولا تغني عن التقييم الفردي للطفل لدى المختص."
      : "ℹ This article is intended for general educational awareness and family guidance, and does not replace an individualized clinical evaluation.",
    sharePrompt: isAr
      ? "هل استفدتم من المقال؟ شاركوه مع من يهمه الأمر:"
      : "Found this helpful? Share it with other parents:",
    shareBtn: isAr ? "مشاركة عبر واتساب" : "Share on WhatsApp",
    relatedTitle: isAr ? "مقالات أخرى قد تهمكم" : "Other Articles of Interest",
    readArticle: isAr ? "قراءة المقال" : "Read Article",
    ctaTitle: isAr
      ? "هل تلاحظون على طفلكم ما يستدعي الاستشارة؟"
      : "Observing signs in your child that call for guidance?",
    ctaSubtitle: isAr
      ? "تحدثوا معنا لنرتب موعد التقييم المبدئي بهدوء ودون أي التزام مسبق."
      : "Connect with us to schedule an initial evaluation calmly and without obligation.",
  };

  return (
    <article className="pb-16">
      {/* Article Header & Breadcrumbs */}
      <section className="max-w-[1200px] mx-auto px-5 sm:px-6 pt-8 pb-8 text-start">
        <Breadcrumbs
          items={[
            { title: t.nav.articles, href: "/articles" },
            { title: article.title },
          ]}
          className="mb-8"
        />

        <div className="max-w-3xl">
          {/* Metadata Bar */}
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <Badge variant={article.themeColor} className="text-xs">
              {article.category}
            </Badge>
            <span className="text-xs text-brand-text-muted flex items-center gap-1">
              <IconClock size={15} />
              <span>{article.readTime}</span>
            </span>
            <span className="text-xs text-brand-text-muted">
              {copy.publishedIn}
            </span>
          </div>

          {/* Article Title */}
          <h1 className="text-3xl sm:text-4xl md:text-[42px] font-bold text-brand-text leading-[1.35] tracking-tight">
            {article.title}
          </h1>

          {/* Lead paragraph */}
          <p className="mt-6 text-lg sm:text-xl text-brand-text-body leading-[1.95] pb-6 border-b border-brand-border">
            {article.content.lead}
          </p>
        </div>
      </section>

      {/* Main Article Body */}
      <section className="max-w-[1200px] mx-auto px-5 sm:px-6 py-6 text-start">
        <div className="max-w-[680px]">
          {/* Article Sections */}
          <div className="space-y-10 text-[19px] leading-[2.1] text-brand-text-body">
            {article.content.sections.map((sec, idx) => (
              <section key={idx} className="space-y-4">
                <h2 className="text-2xl font-bold text-brand-text leading-snug pt-2">
                  {sec.heading}
                </h2>
                {sec.paragraphs.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}
                {sec.listItems && (
                  <ul className="space-y-3 ps-5 list-disc marker:text-primary">
                    {sec.listItems.map((item, lIdx) => (
                      <li key={lIdx} className="leading-[1.9]">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            {/* Conclusion */}
            <div className="bg-brand-bg-alt border border-brand-border rounded-lg p-6 mt-8">
              <h3 className="text-lg font-bold text-brand-text mb-2">
                {copy.conclusionTitle}
              </h3>
              <p className="text-base sm:text-lg leading-[1.9] text-brand-text-body">
                {article.content.conclusion}
              </p>
            </div>
          </div>

          {/* Educational Notice */}
          <div className="mt-12 bg-[#FEF7D9] border border-[#F0DC8A] rounded-lg p-5 text-start">
            <p className="text-xs sm:text-sm text-[#604818] leading-relaxed">
              {copy.notice}
            </p>
          </div>

          {/* Share on WhatsApp */}
          <div className="mt-8 pt-6 border-t border-brand-border flex items-center justify-between gap-4 flex-wrap">
            <span className="text-sm font-semibold text-brand-text">
              {copy.sharePrompt}
            </span>
            <a
              href={whatsappShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] text-white rounded-full text-xs font-bold hover:bg-[#1EBE5D] transition-colors"
            >
              <IconWhatsapp size={16} />
              <span>{copy.shareBtn}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {otherArticles.length > 0 && (
        <section className="max-w-[1200px] mx-auto px-5 sm:px-6 py-14 border-t border-brand-border mt-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-text mb-8 text-start">
            {copy.relatedTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherArticles.slice(0, 2).map((other) => (
              <div
                key={other.slug}
                className="bg-white border border-brand-border rounded-lg p-6 flex flex-col justify-between hover:border-brand-border-strong hover:shadow-card transition-all text-start"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <SenseNode type={other.themeColor} size={48}>
                      {getIcon(other.categorySlug)}
                    </SenseNode>
                    <Badge variant={other.themeColor} className="text-xs">
                      {other.category}
                    </Badge>
                  </div>
                  <h3 className="text-lg font-bold text-brand-text mb-2 leading-snug">
                    <Link href={`/articles/${other.slug}`} className="hover:text-primary">
                      {other.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-brand-text-body leading-[1.8] mb-4">
                    {other.excerpt}
                  </p>
                </div>
                <div className="pt-3 border-t border-brand-border/60">
                  <Link
                    href={`/articles/${other.slug}`}
                    className="text-xs font-bold text-primary hover:underline flex items-center gap-1"
                  >
                    <span>{copy.readArticle}</span>
                    <IconArrowStart size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CTA Band */}
      <CtaBand
        title={copy.ctaTitle}
        subtitle={copy.ctaSubtitle}
      />
    </article>
  );
};
