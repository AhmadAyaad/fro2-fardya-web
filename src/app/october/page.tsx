import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import {
  generateOctoberBranchSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
} from "@/lib/seo";
import { OctoberClientView } from "@/components/views/OctoberClientView";

export const metadata: Metadata = {
  title: "مركز تخاطب وتأهيل أطفال في ٦ أكتوبر — الحي الرابع | فروق فردية",
  description:
    "تبحث عن أفضل مركز تخاطب أو تنمية مهارات وصعوبات تعلم في مدينة ٦ أكتوبر؟ مركز فروق فردية بالحي الرابع يقدم تقييمًا شاملًا وجلسات فردية متخصصة للأطفال مع أخصائيين معتمدين.",
  keywords: [
    "مركز تخاطب في أكتوبر",
    "مركز تخاطب في ٦ أكتوبر",
    "مركز تخاطب الحي الرابع",
    "مركز تخاطب الشيخ زايد",
    "أفضل مركز تخاطب في ٦ أكتوبر",
    "أخصائي تخاطب في أكتوبر",
    "جلسات تخاطب في ٦ أكتوبر",
    "مركز تنمية مهارات ٦ أكتوبر",
    "علاج صعوبات التعلم في أكتوبر",
    "علاج تأخر الكلام أكتوبر",
    "مركز تخاطب حدائق أكتوبر",
    "فروق فردية ٦ أكتوبر",
    "Speech Therapy 6th of October",
    "Speech Therapy October City",
    "Child Rehabilitation 6th of October",
  ],
  alternates: {
    canonical: `${siteConfig.url}/october/`,
    languages: {
      ar: `${siteConfig.url}/october/`,
      en: `${siteConfig.url}/october/`,
      "x-default": `${siteConfig.url}/october/`,
    },
  },
  openGraph: {
    title: "مركز تخاطب وتأهيل أطفال في ٦ أكتوبر — الحي الرابع | فروق فردية",
    description:
      "مركز متخصص في التخاطب وصعوبات التعلم وتنمية المهارات بمدينة ٦ أكتوبر. جلسات فردية وتقييم مبدئي شامل مع الأسرة.",
    url: `${siteConfig.url}/october/`,
    siteName: siteConfig.name,
    locale: "ar_EG",
    type: "website",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1024,
        height: 1024,
        alt: "مركز تخاطب وتأهيل أطفال في ٦ أكتوبر — فروق فردية",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "مركز تخاطب وتأهيل أطفال في ٦ أكتوبر | فروق فردية",
    description:
      "مركز متخصص في التخاطب وصعوبات التعلم وتنمية المهارات بمدينة ٦ أكتوبر. جلسات فردية وتقييم مبدئي شامل.",
    images: [siteConfig.ogImage],
  },
};

const octoberFaqs = [
  {
    q: "أين يقع مركز فروق فردية في مدينة ٦ أكتوبر؟",
    a: "يقع المركز في الحي الرابع بمدينة ٦ أكتوبر بمحافظة الجيزة. يتميز الموقع بسهولة الوصول إليه من ميدان الحصري ومحور ٢٦ يوليو ووصلة دهشور، في منطقة هادئة توفر بيئة آمنة ومريحة للأطفال وأولياء الأمور مع توفر أماكن لانتظار السيارات.",
  },
  {
    q: "ما هي خدمات التأهيل المتوفرة في فرع ٦ أكتوبر؟",
    a: "يقدم المركز جلسات فردية متخصصة تشمل: التخاطب وعلاج تأخر الكلام واللدغات والتأتأة، تقييم وتأهيل صعوبات التعلم (قراءة وكتابة وحساب)، برامج تنمية المهارات والانتباه والتركيز، التهيئة المدرسية والتأسيس الأكاديمي، وجلسات الإرشاد الأسري وتعديل السلوك.",
  },
  {
    q: "هل يخدم المركز العائلات القادمة من الشيخ زايد وحدائق أكتوبر؟",
    a: "نعم بالتأكيد. نظرًا لموقع الحي الرابع المركزي في أكتوبر، يقصدنا أولياء الأمور بانتظام من مختلف أحياء مدينة ٦ أكتوبر، بالإضافة إلى مدينة الشيخ زايد، حدائق أكتوبر، حدائق الأهرام، والمناطق المجاورة.",
  },
  {
    q: "كيف تتم جلسة التقييم المبدئي في فرع أكتوبر؟",
    a: "تبدأ الرحلة بجلسة تقييم هادئة وخاصة يشارك فيها الأخصائي مع طفلك في أنشطة تفاعلية ولعب هادف، مع الاستماع لملاحظاتكم وتاريخ نمو الطفل. بنهاية الجلسة يتم إيضاح نقاط القوة والاحتياجات وخطة العمل المقترحة بدون أي إلزام تعاقدي مسبق.",
  },
  {
    q: "كيف يمكنني حجز موعد تقييم لطفلي؟",
    a: "يمكنك الحجز بسهولة عبر إرسال رسالة على واتساب أو الاتصال الهاتفي برقم المركز (01554778990). يقوم منسق الاستقبال بتحديد موعد هادئ ومخصص يناسب جدول أسرتكم.",
  },
];

export default function OctoberPage() {
  const branchSchema = generateOctoberBranchSchema();
  const faqSchema = generateFAQSchema(octoberFaqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "الرئيسية", url: `${siteConfig.url}/` },
    { name: "فرع مدينة ٦ أكتوبر", url: `${siteConfig.url}/october/` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(branchSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <OctoberClientView />
    </>
  );
}
