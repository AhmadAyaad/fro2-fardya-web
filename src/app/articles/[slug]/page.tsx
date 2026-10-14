import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { articles, getArticleBySlug } from "@/data/articles";
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

  return {
    title: `${article.title} — ${article.category}`,
    description: article.excerpt,
  };
}

export default async function ArticleDetailPage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug, "ar");

  if (!article) {
    notFound();
  }

  return <ArticleDetailClientView slug={slug} />;
}
