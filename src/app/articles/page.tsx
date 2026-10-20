import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { articles } from "@/data/articles";
import { generateBreadcrumbSchema, generateCollectionSchema } from "@/lib/seo";
import { ArticlesClientView } from "@/components/views/ArticlesClientView";

export const metadata: Metadata = {
  title: "مقالات وإرشادات توعوية للأسرة — تخاطب وتنمية مهارات | فروق فردية",
  description:
    "مقالات وإرشادات مبسطة وموثوقة للآباء والأمهات في التخاطب وصعوبات التعلم وتنمية الانتباه والتركيز، لمساعدتكم على دعم طفلكم في البيت.",
  alternates: {
    canonical: `${siteConfig.url}/articles/`,
    languages: {
      ar: `${siteConfig.url}/articles/`,
      en: `${siteConfig.url}/articles/`,
      "x-default": `${siteConfig.url}/articles/`,
    },
  },
  openGraph: {
    title: "المقالات والمراجع — إرشادات توعوية للأسرة | فروق فردية",
    description:
      "مقالات وإرشادات هادئة ومبسطة للآباء والأمهات في التخاطب وصعوبات التعلم وتنمية المهارات.",
    url: `${siteConfig.url}/articles/`,
    siteName: siteConfig.name,
    locale: "ar_EG",
    type: "website",
    images: [
      {
        url: `${siteConfig.url}${siteConfig.ogImage}`,
        width: 1024,
        height: 1024,
        alt: "المقالات والمراجع — مركز فروق فردية",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "المقالات والمراجع — إرشادات توعوية للأسرة | فروق فردية",
    description:
      "مقالات وإرشادات هادئة ومبسطة للآباء والأمهات في التخاطب وصعوبات التعلم وتنمية المهارات.",
    images: [`${siteConfig.url}${siteConfig.ogImage}`],
  },
};

export default function ArticlesPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "الرئيسية", url: `${siteConfig.url}/` },
    { name: "المقالات والمراجع", url: `${siteConfig.url}/articles/` },
  ]);

  const collectionSchema = generateCollectionSchema(
    "المقالات والمراجع التوعوية للأسرة",
    "دليل مقالات وإرشادات التخاطب وصعوبات التعلم وتنمية المهارات للأطفال من مركز فروق فردية",
    articles.map((a) => ({
      name: a.title,
      url: `${siteConfig.url}/articles/${a.slug}/`,
      description: a.excerpt,
    }))
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <ArticlesClientView />
    </>
  );
}
