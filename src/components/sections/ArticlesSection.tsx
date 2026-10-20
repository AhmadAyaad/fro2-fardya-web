"use client";

import React from "react";
import Link from "next/link";
import { getArticles } from "@/data/articles";
import { useLanguage } from "@/i18n/LanguageContext";
import { Badge } from "@/components/ui/Badge";
import { SenseNode } from "@/components/ui/SenseNode";
import { IconSenseMouth, IconSpeech, IconBook, IconSprout, IconArrowStart } from "@/components/ui/Icons";

export const ArticlesSection: React.FC = () => {
  const { locale, t } = useLanguage();
  const currentArticles = getArticles(locale);

  const getIcon = (categorySlug: string) => {
    switch (categorySlug) {
      case "speech-therapy":
        return <IconSenseMouth size={28} color="#206B8F" />;
      case "learning-difficulties":
        return <IconBook size={26} color="#2C384D" />;
      case "skills-development":
        return <IconSprout size={26} color="#2C384D" />;
      default:
        return null;
    }
  };

  return (
    <section
      id="resources"
      aria-labelledby="res-title"
      className="py-14 sm:py-20 md:py-22"
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6">
        {/* Header with Title and "All Articles" link */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div className="max-w-xl text-start">
            <span className="text-primary font-bold text-sm tracking-wide block mb-2">
              {t.articlesSection.tag}
            </span>
            <h2
              id="res-title"
              className="text-2xl sm:text-3xl md:text-[38px] font-bold text-brand-text leading-[1.4]"
            >
              {t.articlesSection.title}
            </h2>
          </div>

          <Link
            href="/articles"
            className="inline-flex items-center gap-1.5 font-bold text-base text-primary hover:text-primary-hover transition-colors whitespace-nowrap self-start sm:self-end"
          >
            <span>{t.articlesSection.viewAll}</span>
            <IconArrowStart size={16} />
          </Link>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {currentArticles.slice(0, 3).map((article) => (
            <article
              key={article.slug}
              className="bg-white rounded-lg border border-brand-border p-6 sm:p-7 flex flex-col justify-between hover:border-brand-border-strong hover:shadow-card transition-all duration-200 group"
            >
              <div>
                {/* Node & Metadata */}
                <div className="flex items-center justify-between gap-4 mb-5">
                  <SenseNode type={article.themeColor} size={52}>
                    {getIcon(article.categorySlug)}
                  </SenseNode>
                  <div className="text-start">
                    <Badge variant={article.themeColor} className="text-xs">
                      {article.category}
                    </Badge>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-brand-text mb-3 leading-snug group-hover:text-primary transition-colors">
                  <Link href={`/articles/${article.slug}`}>
                    {article.title}
                  </Link>
                </h3>

                <p className="text-sm text-brand-text-body leading-[1.85] mb-5">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-brand-border/60 flex items-center justify-between text-xs text-brand-text-muted">
                <span>{article.readTime}</span>
                <Link
                  href={`/articles/${article.slug}`}
                  className="font-bold text-primary hover:underline flex items-center gap-1"
                >
                  <span>{t.articlesSection.readArticle}</span>
                  <IconArrowStart size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
