"use client";

import React from "react";
import Link from "next/link";
import { getServices } from "@/data/services";
import { useLanguage } from "@/i18n/LanguageContext";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SenseNode } from "@/components/ui/SenseNode";
import { Badge } from "@/components/ui/Badge";
import { CtaBand } from "@/components/sections/CtaBand";
import { StickyBookingBar } from "@/components/layout/StickyBookingBar";
import {
  IconSenseMouth,
  IconSpeech,
  IconBook,
  IconSprout,
  IconBlocks,
  IconFamily,
  IconArrowStart,
  IconCheck,
} from "@/components/ui/Icons";

export const ServicesClientView: React.FC = () => {
  const { locale, t } = useLanguage();
  const currentServices = getServices(locale);
  const isAr = locale === "ar";

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "speech":
      case "taste":
        return <IconSenseMouth size={38} color="#206B8F" />;
      case "book":
        return <IconBook size={36} color="#2C384D" />;
      case "sprout":
        return <IconSprout size={36} color="#2C384D" />;
      case "blocks":
        return <IconBlocks size={36} color="#2C384D" />;
      case "family":
        return <IconFamily size={36} color="#2C384D" />;
      default:
        return null;
    }
  };

  const copy = {
    badge: isAr ? "للأطفال من عمر سنتين فأكثر" : "For children aged 2 years and above",
    title: isAr ? "خدماتنا لدعم نمو طفلك" : "Our Specialized Pediatric Services",
    intro: isAr
      ? "تبدأ الرحلة بجلسة تقييم هادئة توضّح احتياجات طفلك الحقيقية، وبعدها نحدّد معكم الخدمة أو الخدمات التي تناسبه دون تعقيد أو إثقال على الأسرة."
      : "The journey begins with a calm assessment session identifying your child's developmental baseline. Together, we then tailor a single or multi-disciplinary plan with zero guesswork.",
    purposeTitle: isAr ? "الغرض من الخدمة" : "Clinical Purpose",
    indicationsTitle: isAr ? "قد تفكّرون في هذه الخدمة إذا لاحظتم:" : "Consider this service if you observe:",
    planBadge: isAr ? "خطة فردية متكاملة" : "Tailored Individual Plan",
    planNotice: isAr
      ? "تُحدد الأهداف وعدد الجلسات ومواعيدها بعد جلسة التقييم المبدئي."
      : "Targets, weekly frequency, and scheduling are determined upon the initial assessment.",
    viewDetails: isAr ? "تفاصيل الخدمة والخطوات" : "Service Details & Protocol",
    requestAssessment: isAr ? "طلب تقييم لهذه الخدمة" : "Book Assessment for this Service",
    unsureTitle: isAr ? "لست متأكدًا من الخدمة المناسبة؟" : "Unsure Which Service Best Fits?",
    unsureDesc: isAr
      ? "هذا طبيعي تمامًا. التقييم المبدئي هو ما يوضّح الصورة، وقد يحتاج طفلك إلى خدمة واحدة أو أكثر من خدمة بالتوازي. لا حاجة لأن تقرّروا مسبقًا."
      : "This is completely normal. The initial evaluation clarifies your child's needs. Many children benefit from a blended approach—no need to diagnose ahead of time.",
    notice: isAr
      ? "ℹ القوائم أعلاه للتوعية العامة والإرشاد الأسري فقط، ولا تغني عن التقييم الفردي لدى المختص. عدد الجلسات ومواعيدها تُحدَّد بناءً على احتياج طفلكم الفعلي."
      : "ℹ Checklists above are for parental awareness only and do not substitute for a clinical evaluation. Number of sessions is customized to your child's actual needs.",
    step1Num: isAr ? "١" : "1",
    step1Title: isAr ? "تواصلوا معنا واحجزوا تقييمًا" : "Connect & Schedule",
    step1Desc: isAr
      ? "راسلونا عبر واتساب أو الهاتف لترتيب موعد جلسة هادئة في الوقت الأنسب لكم."
      : "Message us via WhatsApp or phone to pick a calm, convenient consultation time.",
    step2Num: isAr ? "٢" : "2",
    step2Title: isAr ? "يتعرّف المختص على طفلكم" : "Specialist Assessment",
    step2Desc: isAr
      ? "جلسة ودية خالية من الضغط يتعرّف فيها المختص على الطفل ويستمع لملاحظاتكم."
      : "A relaxed, pressure-free session where the specialist connects with your child and listens to your family's insights.",
    step3Num: isAr ? "٣" : "3",
    step3Title: isAr ? "نوضّح لكم الخدمة وخطة العمل" : "Clear Roadmap",
    step3Desc: isAr
      ? "نشرح لكم ببساطة ما يحتاجه طفلكم والخطوات العملية المقترحة دون أي التزام مسبق."
      : "We explain in simple terms what your child will benefit from and outline practical milestones without locking obligations.",
    ctaTitle: isAr ? "احجزوا تقييمًا لطفلكم" : "Book Your Child's Assessment",
    ctaSubtitle: isAr
      ? "خطوة هادئة وبسيطة تساعدكم على فهم احتياجات طفلكم بدقة وتحديد ما يناسبه."
      : "A gentle first step giving you definitive clarity on your child's individual needs.",
  };

  return (
    <div className="pb-16 md:pb-0">
      {/* Page Header & Breadcrumb */}
      <header className="max-w-[1200px] mx-auto px-5 sm:px-6 pt-8 pb-4">
        <Breadcrumbs items={[{ title: t.nav.services }]} className="mb-6" />

        <div className="max-w-2xl text-start">
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
      </header>

      {/* Detailed Service Cards */}
      <section
        className="max-w-[1200px] mx-auto px-5 sm:px-6 py-10"
        aria-label={copy.title}
      >
        <ul className="space-y-8 list-none p-0 m-0">
          {currentServices.map((service) => (
            <li key={service.slug}>
              <article
                id={service.slug}
                className="bg-white rounded-xl border border-brand-border p-6 sm:p-8 md:p-10 shadow-sm hover:border-brand-border-strong hover:shadow-card transition-all"
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
                  {/* Left/Start side: Title & Description */}
                  <div className="flex-1 text-start">
                    <div className="flex items-center gap-4 mb-4">
                      <SenseNode type={service.themeColor} size={64}>
                        {getIcon(service.iconName)}
                      </SenseNode>
                      <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-brand-text">
                          {service.title}
                        </h2>
                        <span className="text-sm font-semibold text-brand-text-muted">
                          {service.tagline}
                        </span>
                      </div>
                    </div>

                    <div className="mt-4 space-y-3">
                      <h3 className="text-lg font-bold text-brand-text">
                        {copy.purposeTitle}
                      </h3>
                      <p className="text-base text-brand-text-body leading-[1.85] max-w-2xl">
                        {service.purpose}
                      </p>
                    </div>

                    {/* Common signs */}
                    <div className="mt-6">
                      <h3 className="text-base font-bold text-brand-text mb-3">
                        {copy.indicationsTitle}
                      </h3>
                      <ul className="space-y-2.5 max-w-2xl">
                        {service.indications.slice(0, 3).map((ind, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-sm sm:text-base text-brand-text-body">
                            <span className="shrink-0 mt-1 text-primary">
                              <IconCheck size={18} />
                            </span>
                            <span>{ind}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right/End side: Action Box */}
                  <aside aria-label={service.title} className="lg:w-72 shrink-0 bg-brand-bg-alt rounded-lg border border-brand-border p-6 flex flex-col justify-between gap-6">
                    <div>
                      <Badge variant={service.themeColor} className="text-xs mb-3">
                        {copy.planBadge}
                      </Badge>
                      <p className="text-xs text-brand-text-muted leading-relaxed">
                        {copy.planNotice}
                      </p>
                    </div>

                    <div className="space-y-2.5">
                      <Link
                        href={`/services/${service.slug}`}
                        className="w-full py-3 text-center text-sm font-bold text-white bg-primary hover:bg-primary-hover rounded-full shadow-cta flex items-center justify-center gap-2 transition-transform active:scale-[0.98]"
                      >
                        <span>{copy.viewDetails}</span>
                        <IconArrowStart size={16} />
                      </Link>

                      <Link
                        href="/contact"
                        className="w-full py-2.5 text-center text-sm font-semibold text-brand-text bg-white border border-brand-border hover:bg-brand-bg rounded-full block transition-colors"
                      >
                        {copy.requestAssessment}
                      </Link>
                    </div>
                  </aside>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </section>

      {/* "Not sure which service?" Guidance Section */}
      <section
        aria-labelledby="which-service"
        className="bg-white border-y border-brand-border py-14 sm:py-18 my-8"
      >
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6">
          <div className="max-w-2xl text-start mb-10">
            <h2
              id="which-service"
              className="text-2xl sm:text-3xl font-bold text-brand-text leading-[1.4]"
            >
              {copy.unsureTitle}
            </h2>
            <p className="mt-3 text-base sm:text-lg text-brand-text-body leading-[1.85]">
              {copy.unsureDesc}
            </p>
          </div>

          {/* Educational notice card */}
          <aside aria-label={isAr ? "تنبيه توعوي" : "Educational Notice"} className="bg-[#FEF7D9] border border-[#F0DC8A] rounded-lg p-5 sm:p-6 mb-10 text-start">
            <p className="text-sm sm:text-base text-[#604818] leading-relaxed font-medium">
              {copy.notice}
            </p>
          </aside>

          {/* 3 Step Evaluation Journey */}
          <ol className="grid grid-cols-1 md:grid-cols-3 gap-6 list-none p-0 m-0">
            <li className="bg-brand-bg rounded-lg border border-brand-border p-6 text-start">
              <span className="text-2xl font-bold text-primary block mb-2">
                <span className="sr-only">{isAr ? "الخطوة " : "Step "}</span>
                {copy.step1Num}
              </span>
              <h3 className="text-lg font-bold text-brand-text mb-2">
                {copy.step1Title}
              </h3>
              <p className="text-sm text-brand-text-body leading-relaxed">
                {copy.step1Desc}
              </p>
            </li>

            <li className="bg-brand-bg rounded-lg border border-brand-border p-6 text-start">
              <span className="text-2xl font-bold text-primary block mb-2">
                <span className="sr-only">{isAr ? "الخطوة " : "Step "}</span>
                {copy.step2Num}
              </span>
              <h3 className="text-lg font-bold text-brand-text mb-2">
                {copy.step2Title}
              </h3>
              <p className="text-sm text-brand-text-body leading-relaxed">
                {copy.step2Desc}
              </p>
            </li>

            <li className="bg-brand-bg rounded-lg border border-brand-border p-6 text-start">
              <span className="text-2xl font-bold text-primary block mb-2">
                <span className="sr-only">{isAr ? "الخطوة " : "Step "}</span>
                {copy.step3Num}
              </span>
              <h3 className="text-lg font-bold text-brand-text mb-2">
                {copy.step3Title}
              </h3>
              <p className="text-sm text-brand-text-body leading-relaxed">
                {copy.step3Desc}
              </p>
            </li>
          </ol>
        </div>
      </section>

      {/* CTA Band */}
      <CtaBand
        title={copy.ctaTitle}
        subtitle={copy.ctaSubtitle}
      />

      {/* Mobile Sticky Booking Bar */}
      <StickyBookingBar />
    </div>
  );
};
