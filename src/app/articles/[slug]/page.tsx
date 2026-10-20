import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { articles, getArticleBySlug } from "@/data/articles";
import { siteConfig } from "@/data/site";
import { generateArticleSchema, generateBreadcrumbSchema } from "@/lib/seo";
import { ArticleDetailClientView } from "@/components/views/ArticleDetailClientView";

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug, "ar");

  if (!article) {
    return {
      title: "المقال غير موجود | Article Not Found",
    };
  }

  const canonicalUrl = `${siteConfig.url}/articles/${slug}/`;

  return {
    title: `${article.title} — ${article.category}`,
    description: article.excerpt,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        ar: canonicalUrl,
        en: canonicalUrl,
        "x-default": canonicalUrl,
      },
    },
    openGraph: {
      title: `${article.title} | ${siteConfig.name}`,
      description: article.excerpt,
      url: canonicalUrl,
      siteName: siteConfig.name,
      locale: "ar_EG",
      type: "article",
      images: [
        {
          url: `${siteConfig.url}${siteConfig.ogImage}`,
          width: 1024,
          height: 1024,
          alt: `${article.title} — ${siteConfig.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${article.title} | ${siteConfig.name}`,
      description: article.excerpt,
      images: [`${siteConfig.url}${siteConfig.ogImage}`],
    },
  };
}

export default async function ArticleDetailPage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug, "ar");

  if (!article) {
    notFound();
  }

  const canonicalUrl = `${siteConfig.url}/articles/${slug}/`;
  const articleSchema = generateArticleSchema(article);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "الرئيسية", url: `${siteConfig.url}/` },
    { name: "المقالات والمراجع", url: `${siteConfig.url}/articles/` },
    { name: article.title, url: canonicalUrl },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ArticleDetailClientView slug={slug} />
    </>
  );
}
