import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { generateBreadcrumbSchema } from "@/lib/seo";
import { AboutClientView } from "@/components/views/AboutClientView";

export const metadata: Metadata = {
  title: "من نحن — مركز فروق فردية للتأهيل وتنمية مهارات الطفل | About Us",
  description:
    "تعرف على مركز فروق فردية في مدينة ٦ أكتوبر: رؤيتنا وفلسفتنا في التأهيل الفردي للأطفال، منهجيتنا في التخاطب وصعوبات التعلم وتنمية المهارات، وقيمنا مع الأسرة.",
  alternates: {
    canonical: `${siteConfig.url}/about/`,
    languages: {
      ar: `${siteConfig.url}/about/`,
      en: `${siteConfig.url}/about/`,
      "x-default": `${siteConfig.url}/about/`,
    },
  },
  openGraph: {
    title: "من نحن — مركز فروق فردية | About Us",
    description:
      "تعرف على مركز فروق فردية في مدينة ٦ أكتوبر: رؤيتنا وفلسفتنا في التأهيل الفردي للأطفال، منهجيتنا في التخاطب وصعوبات التعلم وتنمية المهارات.",
    url: `${siteConfig.url}/about/`,
    siteName: siteConfig.name,
    locale: "ar_EG",
    type: "website",
    images: [
      {
        url: `${siteConfig.url}${siteConfig.ogImage}`,
        width: 1024,
        height: 1024,
        alt: "من نحن — مركز فروق فردية",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "من نحن — مركز فروق فردية | About Us",
    description:
      "تعرف على مركز فروق فردية في مدينة ٦ أكتوبر: رؤيتنا وفلسفتنا في التأهيل الفردي للأطفال، منهجيتنا في التخاطب وصعوبات التعلم وتنمية المهارات.",
    images: [`${siteConfig.url}${siteConfig.ogImage}`],
  },
};

export default function AboutPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "الرئيسية", url: `${siteConfig.url}/` },
    { name: "من نحن", url: `${siteConfig.url}/about/` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <AboutClientView />
    </>
  );
}
