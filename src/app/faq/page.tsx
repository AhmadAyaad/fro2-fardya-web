import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { generalFaqsAr } from "@/data/faqs";
import { generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo";
import { FaqClientView } from "@/components/views/FaqClientView";

export const metadata: Metadata = {
  title: "الأسئلة الشائعة حول خدمات المركز والتقييم | FAQ",
  description:
    "إجابات واضحة ومباشرة عن جميع استفسارات أولياء الأمور حول التقييم المبدئي، الجلسات، الأعمار المقبولة، وكيفية حجز موعد في مركز فروق فردية بمدينة ٦ أكتوبر.",
  alternates: {
    canonical: `${siteConfig.url}/faq/`,
    languages: {
      ar: `${siteConfig.url}/faq/`,
      en: `${siteConfig.url}/faq/`,
      "x-default": `${siteConfig.url}/faq/`,
    },
  },
  openGraph: {
    title: "الأسئلة الشائعة حول خدمات المركز والتقييم | فروق فردية",
    description:
      "إجابات واضحة ومباشرة عن جميع استفسارات أولياء الأمور حول التقييم المبدئي، الجلسات، الأعمار المقبولة، وكيفية حجز موعد في مركز فروق فردية.",
    url: `${siteConfig.url}/faq/`,
    siteName: siteConfig.name,
    locale: "ar_EG",
    type: "website",
    images: [
      {
        url: `${siteConfig.url}${siteConfig.ogImage}`,
        width: 1024,
        height: 1024,
        alt: "الأسئلة الشائعة — مركز فروق فردية",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "الأسئلة الشائعة حول خدمات المركز والتقييم | فروق فردية",
    description:
      "إجابات واضحة ومباشرة عن جميع استفسارات أولياء الأمور حول التقييم المبدئي، الجلسات، الأعمار المقبولة، وكيفية حجز موعد في مركز فروق فردية.",
    images: [`${siteConfig.url}${siteConfig.ogImage}`],
  },
};

export default function FaqPage() {
  const faqSchema = generateFAQSchema(
    generalFaqsAr.map((f) => ({ q: f.q, a: f.a }))
  );
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "الرئيسية", url: `${siteConfig.url}/` },
    { name: "الأسئلة الشائعة", url: `${siteConfig.url}/faq/` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <FaqClientView />
    </>
  );
}
