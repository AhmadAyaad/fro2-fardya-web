import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import {
  generateBreadcrumbSchema,
  generateContactPageSchema,
  generateFAQSchema,
} from "@/lib/seo";
import { ContactClientView } from "@/components/views/ContactClientView";

export const metadata: Metadata = {
  title: "احجز تقييمًا لطفلك — مركز فروق فردية | ٦ أكتوبر",
  description:
    "احجز جلسة تقييم مبدئي لطفلك في مركز فروق فردية بمدينة ٦ أكتوبر. تواصل معنا عبر واتساب أو الهاتف لتحديد موعد جلسات التخاطب وصعوبات التعلم وتنمية المهارات.",
  alternates: {
    canonical: `${siteConfig.url}/contact/`,
    languages: {
      ar: `${siteConfig.url}/contact/`,
      en: `${siteConfig.url}/contact/`,
      "x-default": `${siteConfig.url}/contact/`,
    },
  },
  openGraph: {
    title: "تواصل معنا واحجز تقييمًا لطفلك | مركز فروق فردية",
    description:
      "تواصل مع مركز فروق فردية عبر واتساب أو الهاتف لحجز موعد طفلك في التخاطب وصعوبات التعلم وتنمية المهارات بمدينة ٦ أكتوبر.",
    url: `${siteConfig.url}/contact/`,
    siteName: siteConfig.name,
    locale: "ar_EG",
    type: "website",
    images: [
      {
        url: `${siteConfig.url}${siteConfig.ogImage}`,
        width: 1024,
        height: 1024,
        alt: "تواصل معنا — مركز فروق فردية",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "تواصل معنا واحجز تقييمًا لطفلك | مركز فروق فردية",
    description:
      "تواصل مع مركز فروق فردية عبر واتساب أو الهاتف لحجز موعد طفلك في التخاطب وصعوبات التعلم وتنمية المهارات بمدينة ٦ أكتوبر.",
    images: [`${siteConfig.url}${siteConfig.ogImage}`],
  },
};

const bookingFaqs = [
  {
    q: "كيف يمكنني حجز موعد تقييم مبدئي لطفلي في مركز فروق فردية؟",
    a: "يمكنك الحجز بسهولة عبر إرسال رسالة على واتساب أو الاتصال الهاتفي برقم 01554778990. يتم التنسيق وتحديد موعد هادئ ومناسب لجدول الأسرة.",
  },
  {
    q: "أين يقع مقر مركز فروق فردية بمدينة ٦ أكتوبر؟",
    a: "يقع المركز في الحي الرابع بمدينة ٦ أكتوبر، بالقرب من المحاور الرئيسية وميدان الحصري ومحور ٢٦ يوليو بمحافظة الجيزة.",
  },
  {
    q: "ما هي مواعيد العمل الرسمية في المركز؟",
    a: "نستقبلكم من السبت إلى الخميس، من الساعة ١٢:٠٠ ظهرًا حتى ٩:٠٠ مساءً، ويوم الجمعة هو عطلة المركز الأسبوعية.",
  },
];

export default function ContactPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "الرئيسية", url: `${siteConfig.url}/` },
    { name: "تواصل معنا", url: `${siteConfig.url}/contact/` },
  ]);

  const contactSchema = generateContactPageSchema();
  const faqSchema = generateFAQSchema(bookingFaqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ContactClientView />
    </>
  );
}
