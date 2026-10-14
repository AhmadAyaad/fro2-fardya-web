"use client";

import React from "react";
import { getSiteConfig } from "@/data/site";
import { useLanguage } from "@/i18n/LanguageContext";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";

export const PrivacyClientView: React.FC = () => {
  const { locale, t } = useLanguage();
  const site = getSiteConfig(locale);
  const isAr = locale === "ar";

  const copy = {
    badge: isAr ? "السرية والأمان" : "Confidentiality & Safety",
    title: isAr ? "سياسة الخصوصية وسرية البيانات" : "Privacy & Data Protection Policy",
    intro: isAr
      ? "نولي في مركز فروق فردية خصوصية أطفالكم وسرية معلومات أسرتكم أعلى درجات الأمان والالتزام الأخلاقي والمهني. توضح هذه الوثيقة سياساتنا الواضحة في التعامل مع بياناتكم."
      : "At Forooq Fardya, we treat the privacy of your children and family with the highest standards of clinical ethics and legal care. This policy outlines our protocols for handling your data.",
    sec1Title: isAr ? "١ · سرية ملفات التقييم والجلسات" : "1 · Confidentiality of Records & Evaluations",
    sec1Desc: isAr
      ? "تُعد جميع المعلومات والتقارير وملاحظات التقييم الخاصة بطفلكم سرية للغاية، ولا يحق لأي جهة أو شخص الاطلاع عليها سوى الأخصائي المتابع وولي الأمر المعتمد. لا نشارك أي معلومات شخصية أو تقارير تخص الأطفال مع أي طرف ثالث دون إذن خطي صريح من ولي الأمر."
      : "All developmental records, session notes, and clinical evaluations are strictly confidential. Access is restricted solely to the attending specialist and authorized guardians. We never share child data or reports with third parties without express written parental consent.",
    sec2Title: isAr ? "٢ · سياسة التصوير والوسائط المرئية" : "2 · Photography & Media Policy",
    sec2Desc: isAr
      ? "نلتزم التزامًا قطعيًا بعدم التقاط أي صور أو مقاطع فيديو للأطفال داخل المركز لأغراض التوثيق أو النشر التسويقي إلا بعد موافقة كتابية صريحة ومسبقة من ولي الأمر. كما نرفض بشكل قاطع عرض أي مادة تُظهر الطفل في موقف ضعف أو مقارنات غير لائقة."
      : "We strictly prohibit capturing photographs or videos of children within the center for promotional or documentation purposes unless explicit written consent has been granted in advance. We strictly refuse publishing any media placing a child in a vulnerable light.",
    sec3Title: isAr ? "٣ · بيانات التصفح والتواصل عبر الموقع" : "3 · Website Browsing & Communication",
    sec3Desc: isAr
      ? "هذا الموقع مصمم ليعمل كمنصة توعوية ثابتة وآمنة تمامًا. لا نقوم بتسجيل أو تخزين أي بيانات حساسة عن الأطفال على خوادم الإنترنت، وتتم جميع طلبات الحجز والاستفسارات مباشرة عبر قنوات التواصل المشفرة والرسمية (مثل تطبيق واتساب أو الاتصال الهاتفي المباشر)."
      : "This website serves as an informational platform. We do not store sensitive pediatric records on public web servers. Booking inquiries transition directly through encrypted official channels (such as WhatsApp or direct phone communication).",
    sec4Title: isAr ? "٤ · المحتوى التوعوي والإخلاء الطبي" : "4 · Educational Content & Medical Disclaimer",
    sec4Desc: isAr
      ? "المقالات والإرشادات والمعلومات المنشورة على هذا الموقع مخصصة لأغراض التوعية الأسرية العامة فقط، ولا تُعد بديلاً عن الفحص والتقييم السريري الفردي من قِبل المختصين المؤهلين."
      : "Articles and advice published on this website are provided solely for family awareness and general education. They do not substitute for individual clinical assessment and diagnosis by certified practitioners.",
    sec5Title: isAr ? "٥ · التواصل والاستفسار" : "5 · Inquiries & Privacy Contact",
    sec5Prefix: isAr
      ? "إذا كان لديكم أي استفسار بخصوص سياسة الخصوصية أو سرية ملف طفلكم، يسعدنا تواصلكم المباشر مع إدارة المركز عبر البريد الإلكتروني:"
      : "If you have any questions regarding our privacy practices or your child's records, please contact our administration directly at:",
    sec5Suffix: isAr ? "أو عبر الهاتف الرسمي." : "or via our official phone number.",
  };

  return (
    <div className="pb-16 text-start">
      {/* Header & Breadcrumb */}
      <section className="max-w-[1200px] mx-auto px-5 sm:px-6 pt-8 pb-8">
        <Breadcrumbs items={[{ title: t.common.privacy }]} className="mb-6" />

        <div className="max-w-3xl">
          <Badge variant="yellow" className="mb-4">
            {copy.badge}
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-[44px] font-bold text-brand-text leading-[1.35]">
            {copy.title}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-brand-text-body leading-[1.85]">
            {copy.intro}
          </p>
        </div>
      </section>

      {/* Main Privacy Content */}
      <section className="max-w-[800px] mx-auto px-5 sm:px-6 py-4 space-y-8 text-base sm:text-lg text-brand-text-body leading-[2]">
        <div className="bg-white rounded-xl border border-brand-border p-6 sm:p-8 space-y-4 shadow-sm">
          <h2 className="text-xl sm:text-2xl font-bold text-brand-text">
            {copy.sec1Title}
          </h2>
          <p>{copy.sec1Desc}</p>
        </div>

        <div className="bg-white rounded-xl border border-brand-border p-6 sm:p-8 space-y-4 shadow-sm">
          <h2 className="text-xl sm:text-2xl font-bold text-brand-text">
            {copy.sec2Title}
          </h2>
          <p>{copy.sec2Desc}</p>
        </div>

        <div className="bg-white rounded-xl border border-brand-border p-6 sm:p-8 space-y-4 shadow-sm">
          <h2 className="text-xl sm:text-2xl font-bold text-brand-text">
            {copy.sec3Title}
          </h2>
          <p>{copy.sec3Desc}</p>
        </div>

        <div className="bg-white rounded-xl border border-brand-border p-6 sm:p-8 space-y-4 shadow-sm">
          <h2 className="text-xl sm:text-2xl font-bold text-brand-text">
            {copy.sec4Title}
          </h2>
          <p>{copy.sec4Desc}</p>
        </div>

        <div className="bg-white rounded-xl border border-brand-border p-6 sm:p-8 space-y-4 shadow-sm">
          <h2 className="text-xl sm:text-2xl font-bold text-brand-text">
            {copy.sec5Title}
          </h2>
          <p>
            {copy.sec5Prefix}{" "}
            <a
              href={`mailto:${site.contact.email}`}
              className="text-primary font-bold underline"
            >
              {site.contact.email}
            </a>{" "}
            {copy.sec5Suffix}
          </p>
        </div>
      </section>
    </div>
  );
};
