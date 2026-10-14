"use client";

import React from "react";
import { getSiteConfig } from "@/data/site";
import { useLanguage } from "@/i18n/LanguageContext";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { EvaluationForm } from "@/components/forms/EvaluationForm";
import {
  IconWhatsapp,
  IconPhone,
  IconPin,
  IconClock,
} from "@/components/ui/Icons";

export const ContactClientView: React.FC = () => {
  const { locale, t } = useLanguage();
  const site = getSiteConfig(locale);
  const isAr = locale === "ar";

  const whatsappMessage =
    isAr
      ? "مرحبًا، أود الاستفسار عن حجز تقييم لطفلي في مركز فروق فردية"
      : "Hello, I would like to inquire about booking an assessment for my child at Forooq Fardya";

  const whatsappUrl = `https://wa.me/${site.contact.whatsapp.replace(
    /[^0-9]/g,
    ""
  )}?text=${encodeURIComponent(whatsappMessage)}`;

  const copy = {
    badge: isAr ? "الخطوة الأولى" : "First Step",
    title: isAr ? "تواصل معنا واحجز تقييمًا لطفلك" : "Contact Us & Book an Assessment",
    intro: isAr
      ? "نحن هنا لنستمع إليكم ونجيب عن كافة تساؤلاتكم. التواصل الأول بسيط وهادئ، والهدف منه التعرّف على احتياج طفلكم والاتفاق على الموعد الأفضل."
      : "We are here to listen and answer your questions. The initial connection is calm and straightforward, aimed at understanding your child's needs and scheduling a convenient time.",
    fastTrack: isAr ? "الطريق الأسرع" : "Fastest Route",
    whatsappCardTitle: isAr ? "محادثة فورية عبر واتساب" : "Instant WhatsApp Chat",
    whatsappCardDesc: isAr
      ? "تفضّلون المراسلة السريعة؟ راسلوا فريق استقبال الحالات مباشرة عبر رقم الواتساب الرسمي."
      : "Prefer direct messaging? Connect instantly with our intake coordinator via our official WhatsApp line.",
    openWhatsapp: isAr ? "فتح محادثة واتساب الآن" : "Open WhatsApp Chat Now",
    officialDetailsTitle: isAr ? "بيانات المركز الرسمية" : "Official Center Information",
    phoneLabel: isAr ? "الهاتف" : "Phone",
    addressLabel: isAr ? "العنوان" : "Address",
    hoursLabel: isAr ? "ساعات العمل" : "Working Hours",
    nextStepsTitle: isAr ? "ماذا يحدث بعد إرسال رسالتكم؟" : "What Happens Next?",
    steps: isAr
      ? [
          {
            num: "١",
            text: "يتواصل معكم منسق المواعيد للتأكد من تفاصيل عمر الطفل والملاحظات.",
          },
          {
            num: "٢",
            text: "تحديد موعد جلسة التقييم المبدئي الحضورية في اليوم والوقت الأنسب لكم.",
          },
          {
            num: "٣",
            text: "حضور الجلسة والتعرف على المختص ومناقشة الخطة دون أي إلزام.",
          },
        ]
      : [
          {
            num: "1",
            text: "Our appointment coordinator connects with you to clarify initial notes and child's age.",
          },
          {
            num: "2",
            text: "We schedule the in-person assessment at the most comfortable date and time for your family.",
          },
          {
            num: "3",
            text: "Attend the gentle session, meet the specialist, and review tailored options with zero commitment.",
          },
        ],
  };

  return (
    <div className="pb-16">
      {/* Header & Breadcrumb */}
      <section className="max-w-[1200px] mx-auto px-5 sm:px-6 pt-8 pb-8 text-start">
        <Breadcrumbs items={[{ title: t.nav.contact }]} className="mb-6" />

        <div className="max-w-2xl">
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

      {/* Main Grid: Form on one side, Contact channels on other */}
      <section className="max-w-[1200px] mx-auto px-5 sm:px-6 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Form Column (7 cols on lg) */}
          <div className="lg:col-span-7">
            <EvaluationForm />
          </div>

          {/* Contact Details & Info Column (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-6 text-start">
            {/* Direct WhatsApp Big Card */}
            <div className="bg-[#E4F8FA] border border-[#83DDE6] rounded-xl p-6 sm:p-7 shadow-sm">
              <span className="text-xs font-bold text-[#327790] uppercase block mb-1">
                {copy.fastTrack}
              </span>
              <h2 className="text-xl font-bold text-brand-text mb-2">
                {copy.whatsappCardTitle}
              </h2>
              <p className="text-sm text-brand-text-body leading-relaxed mb-5">
                {copy.whatsappCardDesc}
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded-full font-bold text-base flex items-center justify-center gap-2.5 shadow-sm transition-transform active:scale-[0.98]"
              >
                <IconWhatsapp size={22} />
                <span>{copy.openWhatsapp}</span>
              </a>
            </div>

            {/* Official Center Details Card */}
            <div className="bg-white border border-brand-border rounded-xl p-6 sm:p-7 shadow-sm space-y-5">
              <h2 className="text-lg font-bold text-brand-text border-b border-brand-border/60 pb-3">
                {copy.officialDetailsTitle}
              </h2>

              <div className="flex items-start gap-3.5">
                <span className="w-10 h-10 rounded-full bg-brand-bg-alt border border-brand-border flex items-center justify-center text-primary shrink-0 mt-0.5">
                  <IconPhone size={20} />
                </span>
                <div>
                  <span className="text-xs text-brand-text-muted block">
                    {copy.phoneLabel}
                  </span>
                  <span className="text-base font-bold text-brand-text">
                    {site.contact.phone}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <span className="w-10 h-10 rounded-full bg-brand-bg-alt border border-brand-border flex items-center justify-center text-primary shrink-0 mt-0.5">
                  <IconPin size={20} />
                </span>
                <div>
                  <span className="text-xs text-brand-text-muted block">
                    {copy.addressLabel}
                  </span>
                  <span className="text-base font-bold text-brand-text">
                    {site.contact.address}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <span className="w-10 h-10 rounded-full bg-brand-bg-alt border border-brand-border flex items-center justify-center text-primary shrink-0 mt-0.5">
                  <IconClock size={20} />
                </span>
                <div>
                  <span className="text-xs text-brand-text-muted block">
                    {copy.hoursLabel}
                  </span>
                  <span className="text-base font-bold text-brand-text">
                    {site.contact.workingHours}
                  </span>
                </div>
              </div>
            </div>

            {/* What happens next? (3 Steps) */}
            <div className="bg-brand-bg-alt border border-brand-border rounded-xl p-6 sm:p-7 text-start">
              <h2 className="text-base font-bold text-brand-text mb-4">
                {copy.nextStepsTitle}
              </h2>
              <ol className="space-y-3.5 text-sm text-brand-text-body">
                {copy.steps.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary-soft text-primary font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">
                      {step.num}
                    </span>
                    <span>{step.text}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
