import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { services } from "@/data/services";
import { generateBreadcrumbSchema, generateCollectionSchema } from "@/lib/seo";
import { ServicesClientView } from "@/components/views/ServicesClientView";

export const metadata: Metadata = {
  title: "خدماتنا التأهيلية للأطفال — تخاطب، صعوبات تعلم، تنمية مهارات | ٦ أكتوبر",
  description:
    "تعرف على خدمات مركز فروق فردية بمدينة ٦ أكتوبر: جلسات تخاطب، علاج صعوبات التعلم، وتنمية مهارات الأطفال من عمر سنتين، بخطط فردية تناسب كل طفل.",
  alternates: {
    canonical: `${siteConfig.url}/services/`,
    languages: {
      ar: `${siteConfig.url}/services/`,
      en: `${siteConfig.url}/services/`,
      "x-default": `${siteConfig.url}/services/`,
    },
  },
  openGraph: {
    title: "خدماتنا لدعم نمو طفلك | مركز فروق فردية — ٦ أكتوبر",
    description:
      "خدمات متخصصة في التخاطب وصعوبات التعلم وتنمية المهارات للأطفال بخطط فردية وتقييم مبدئي شامل.",
    url: `${siteConfig.url}/services/`,
    siteName: siteConfig.name,
    locale: "ar_EG",
    type: "website",
    images: [
      {
        url: `${siteConfig.url}${siteConfig.ogImage}`,
        width: 1024,
        height: 1024,
        alt: "خدماتنا — مركز فروق فردية",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "خدماتنا لدعم نمو طفلك | مركز فروق فردية — ٦ أكتوبر",
    description:
      "خدمات متخصصة في التخاطب وصعوبات التعلم وتنمية المهارات للأطفال بخطط فردية وتقييم مبدئي شامل.",
    images: [`${siteConfig.url}${siteConfig.ogImage}`],
  },
};

export default function ServicesPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "الرئيسية", url: `${siteConfig.url}/` },
    { name: "الخدمات", url: `${siteConfig.url}/services/` },
  ]);

  const collectionSchema = generateCollectionSchema(
    "خدمات مركز فروق فردية للتأهيل وتنمية مهارات الطفل",
    "قائمة خدمات التأهيل المتخصصة للأطفال من عمر سنتين بمدينة ٦ أكتوبر",
    services.map((s) => ({
      name: `${s.title} — ${s.tagline}`,
      url: `${siteConfig.url}/services/${s.slug}/`,
      description: s.summary,
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
      <ServicesClientView />
    </>
  );
}
