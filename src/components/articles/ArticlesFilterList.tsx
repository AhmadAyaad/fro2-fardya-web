"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { getArticles } from "@/data/articles";
import { useLanguage } from "@/i18n/LanguageContext";
import { SenseNode } from "@/components/ui/SenseNode";
import { Badge } from "@/components/ui/Badge";
import { IconSearch, IconArrowStart, IconSenseMouth, IconSpeech, IconBook, IconSprout } from "@/components/ui/Icons";

export const ArticlesFilterList: React.FC = () => {
  const { locale, t } = useLanguage();
  const currentArticles = getArticles(locale);

  const [selectedCategorySlug, setSelectedCategorySlug] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("" );

  const categories = useMemo(() => [
    { slug: "all", label: locale === "ar" ? "الكل" : "All" },
    { slug: "speech-therapy", label: t.nav.speechTherapy },
    { slug: "learning-difficulties", label: t.nav.learningDifficulties },
    { slug: "skills-development", label: t.nav.skillsDevelopment },
  ], [locale, t]);

  const filteredArticles = useMemo(() => {
    return currentArticles.filter((art) => {
      const matchCat =
        selectedCategorySlug === "all" || art.categorySlug === selectedCategorySlug;
      const q = searchQuery.trim().toLowerCase();
      const matchSearch =
        q === "" ||
        art.title.toLowerCase().includes(q) ||
        art.excerpt.toLowerCase().includes(q) ||
        art.category.toLowerCase().includes(q);
      return matchCat && matchSearch;
    });
  }, [currentArticles, selectedCategorySlug, searchQuery]);

  const getIcon = (categorySlug: string) => {
    switch (categorySlug) {
      case "speech-therapy":
        return <IconSenseMouth size={30} color="#206B8F" />;
      case "learning-difficulties":
        return <IconBook size={28} color="#2C384D" />;
      case "skills-development":
        return <IconSprout size={28} color="#2C384D" />;
      default:
        return null;
    }
  };

  return (
    <div>
      {/* Search & Category Filter Controls */}
      <form
        role="search"
        aria-label={locale === "ar" ? "بحث وتصفية المقالات" : "Search and filter articles"}
        onSubmit={(e) => e.preventDefault()}
        className="bg-white rounded-xl border border-brand-border p-4 sm:p-6 mb-10 shadow-sm space-y-4"
      >
        {/* Search Input */}
        <div className="relative max-w-md">
          <label htmlFor="search-articles" className="sr-only">
            {locale === "ar" ? "ابحث في المقالات" : "Search articles"}
          </label>
          <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none text-brand-text-muted" aria-hidden="true">
            <IconSearch size={20} />
          </div>
          <input
            id="search-articles"
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={
              locale === "ar"
                ? "ابحث في المقالات والمواضيع..."
                : "Search articles and resources..."
            }
            className="w-full ps-11 pe-4 py-2.5 rounded-full border border-brand-border bg-brand-bg text-sm text-brand-text placeholder:text-brand-text-muted/70 focus:outline-none focus:ring-2 focus:ring-secondary"
          />
        </div>

        {/* Category Pills */}
        <fieldset className="border-none p-0 m-0">
          <legend className="sr-only">
            {locale === "ar" ? "تصنيفات المقالات" : "Article Categories"}
          </legend>
          <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-2 select-none">
            {categories.map((cat) => (
              <button
                key={cat.slug}
                type="button"
                onClick={() => setSelectedCategorySlug(cat.slug)}
                className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategorySlug === cat.slug
                    ? "bg-primary text-white shadow-sm"
                    : "bg-brand-bg text-brand-text border border-brand-border hover:bg-brand-bg-alt"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </fieldset>
      </form>

      {/* Articles Grid */}
      {filteredArticles.length > 0 ? (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 list-none p-0 m-0">
          {filteredArticles.map((article) => (
            <li key={article.slug} className="flex">
              <article
                className="w-full bg-white rounded-lg border border-brand-border p-6 sm:p-7 flex flex-col justify-between hover:border-brand-border-strong hover:shadow-card transition-all group text-start"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <SenseNode type={article.themeColor} size={54}>
                      {getIcon(article.categorySlug)}
                    </SenseNode>
                    <Badge variant={article.themeColor} className="text-xs">
                      {article.category}
                    </Badge>
                  </div>

                  <h2 className="text-xl font-bold text-brand-text mb-3 leading-snug group-hover:text-primary transition-colors">
                    <Link href={`/articles/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h2>

                  <p className="text-sm text-brand-text-body leading-[1.85] mb-5">
                    {article.excerpt}
                  </p>
                </div>

                <footer className="pt-4 border-t border-brand-border/60 flex items-center justify-between text-xs text-brand-text-muted">
                  <span className="flex items-center gap-1.5">
                    <time dateTime={article.isoDate}>{article.date}</time>
                    <span aria-hidden="true">•</span>
                    <span>{article.readTime}</span>
                  </span>
                  <Link
                    href={`/articles/${article.slug}`}
                    className="font-bold text-primary hover:underline flex items-center gap-1"
                  >
                    <span>{t.articlesSection.readArticle}</span>
                    <IconArrowStart size={14} />
                  </Link>
                </footer>
              </article>
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-center py-16 bg-white rounded-xl border border-brand-border">
          <p className="text-lg font-semibold text-brand-text">
            {locale === "ar"
              ? "لم نجد مقالات تطابق بحثكم"
              : "No articles matched your search"}
          </p>
          <p className="text-sm text-brand-text-muted mt-2">
            {locale === "ar"
              ? "جرّبوا البحث بكلمات أخرى أو تصفح كافة التصنيفات."
              : "Try searching with different keywords or exploring all categories."}
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedCategorySlug("all");
            }}
            className="mt-4 px-5 py-2 text-sm font-bold text-primary hover:underline cursor-pointer"
          >
            {locale === "ar" ? "إعادة تعيين الفلاتر" : "Reset Filters"}
          </button>
        </div>
      )}
    </div>
  );
};
