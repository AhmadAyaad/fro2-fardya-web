"use client";

import React, { useState } from "react";
import Link from "next/link";
import { getSiteConfig } from "@/data/site";
import { useLanguage } from "@/i18n/LanguageContext";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { CtaBand } from "@/components/sections/CtaBand";
import {
  IconWhatsapp,
  IconPhone,
  IconPin,
  IconClock,
  IconSpeech,
  IconBook,
  IconSprout,
  IconBlocks,
  IconFamily,
  IconArrowStart,
  IconCheck,
} from "@/components/ui/Icons";
import {
  generateLocalBusinessSchema,
  generateOctoberBranchSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
} from "@/lib/seo";

interface OctoberClientViewProps {
  // Can be extended if needed
}

export const OctoberClientView: React.FC<OctoberClientViewProps> = () => {
  const { locale, t } = useLanguage();
  const site = getSiteConfig(locale);
  const isAr = locale === "ar";

  const whatsappMessage = isAr
    ? "مرحبًا، أود الاستفسار عن جلسات التخاطب وتنمية المهارات بفرع مركز فروق فردية في ٦ أكتوبر"
    : "Hello, I would like to inquire about speech therapy and skills development sessions at Forooq Fardya branch in 6th of October City";

  const whatsappUrl = `https://wa.me/${site.contact.whatsapp.replace(
    /[^0-9]/g,
    ""
  )}?text=${encodeURIComponent(whatsappMessage)}`;

  // Local FAQs for 6th of October City
  const octoberFaqs = isAr
    ? [
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
      ]
    : [
        {
          q: "Where is Forooq Fardya Center located in 6th of October City?",
          a: "The center is located in the 4th District of 6th of October City, Giza. The location offers easy access from Al-Hosary Square, the 26th of July Corridor, and Dahshur Link, situated in a quiet neighborhood that provides a calm, safe setting with easy parking.",
        },
        {
          q: "What pediatric services are available at the 6th of October branch?",
          a: "We offer individualized sessions including: Speech-language therapy for speech delay and articulation, academic learning difficulties rehabilitation (dyslexia & dyscalculia), skills development and attention training, school readiness foundation, and parental counseling.",
        },
        {
          q: "Do you serve families from Sheikh Zayed and October Gardens?",
          a: "Yes. Given our central location in the 4th District, we regularly welcome families from all across 6th of October City, Sheikh Zayed City, October Gardens, and neighboring areas.",
        },
        {
          q: "How does the initial assessment session work?",
          a: "The journey begins with a calm, 1-on-1 session where the specialist connects with your child through structured play, while actively listening to your family observations. At the end, we share strengths, growth areas, and recommended next steps without any binding commitment.",
        },
        {
          q: "How can I book an evaluation for my child?",
          a: "You can easily schedule by messaging us on WhatsApp or calling our direct phone number (+201554778990). Our intake coordinator will help choose a dedicated appointment that fits your family's schedule.",
        },
      ];

  const breadcrumbs = [
    { title: isAr ? "الرئيسية" : "Home", href: "/" },
    { title: isAr ? "فرع ٦ أكتوبر" : "6th of October Branch" },
  ];

  const neighborhoodTags = isAr
    ? [
        "الحي الرابع",
        "الحي المتميز",
        "ميدان الحصري",
        "الحي الأول إلى الثاني عشر",
        "الشيخ زايد",
        "حدائق أكتوبر",
        "غرب سوميد",
        "التوسعات الشمالية",
        "أكتوبر الجديدة",
      ]
    : [
        "4th District",
        "Motamayez District",
        "Al-Hosary Square",
        "Districts 1-12",
        "Sheikh Zayed",
        "October Gardens",
        "West Somid",
        "Northern Expansions",
        "New October",
      ];

  const servicesList = [
    {
      title: isAr ? "جلسات التخاطب والنطق" : "Speech & Language Therapy",
      slug: "speech-therapy",
      desc: isAr
        ? "علاج تأخر الكلام عند الأطفال، تصحيح مخارج الحروف واللدغات، والتأتأة وبناء الجمل اللغوية."
        : "Early speech delay treatment, articulation therapy, stuttering support, and vocabulary building.",
      icon: <IconSpeech size={26} color="#206B8F" />,
      accent: "border-[#83DDE6] hover:border-[#206B8F]",
    },
    {
      title: isAr ? "صعوبات التعلم الأكاديمية" : "Learning Difficulties Support",
      slug: "learning-difficulties",
      desc: isAr
        ? "استراتيجيات متخصصة في القراءة والكتابة والرياضيات، وعلاج التشتت ومقاومة المذاكرة المدرسية."
        : "Specialized strategies for reading, writing, and math (dyslexia/dyscalculia) with multi-sensory techniques.",
      icon: <IconBook size={26} color="#AF89F6" />,
      accent: "border-[#AF89F6] hover:border-[#6C34C5]",
    },
    {
      title: isAr ? "تنمية المهارات والتركيز" : "Skills Development & Focus",
      slug: "skills-development",
      desc: isAr
        ? "زيادة مدى الانتباه والتركيز، تدريب الذاكرة العاملة، والتآزر الحركي البصري والمهارات الاجتماعية."
        : "Enhancing attention span, working memory, fine motor coordination, and peer social interaction.",
      icon: <IconSprout size={26} color="#517B11" />,
      accent: "border-[#B1DD30] hover:border-[#517B11]",
    },
    {
      title: isAr ? "التهيئة والتأسيس الأكاديمي" : "School Readiness & Foundation",
      slug: "foundation",
      desc: isAr
        ? "تأهيل الأطفال قبل المدرسة (مسكة القلم، معرفة الحروف والأرقام، والتعود على روتين الصف)."
        : "Pre-school readiness, pencil grip training, phonetic recognition, and classroom routine adaptation.",
      icon: <IconBlocks size={26} color="#C49000" />,
      accent: "border-[#F8D940] hover:border-[#C49000]",
    },
    {
      title: isAr ? "إرشاد وتوجيه أولياء الأمور" : "Parental Guidance Consultations",
      slug: "parent-guidance",
      desc: isAr
        ? "استشارات أسرية عملية لفهم سلوك الطفل، تقليل العناد ونوبات الغضب، وتخفيف التوتر في البيت."
        : "Practical counseling on behavioral guidance, tantrum management, screen time, and mindful parenting.",
      icon: <IconFamily size={26} color="#E03875" />,
      accent: "border-[#F6598B] hover:border-[#B0285C]",
    },
  ];

  return (
    <div className="pb-16 md:pb-0">
      {/* ── SEO JSON-LD Schemas ───────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateLocalBusinessSchema()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(octoberFaqs)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: site.name, url: site.url },
              {
                name: isAr ? "مركز تخاطب في ٦ أكتوبر" : "Speech Therapy 6th of October",
                url: `${site.url}/october/`,
              },
            ])
          ),
        }}
      />

      {/* ── Top Hero Section ──────────────────────────────────────── */}
      <header className="relative overflow-hidden pt-8 pb-14 md:pt-12 md:pb-20 bg-gradient-to-b from-[#FBF8EF] via-white to-brand-bg border-b border-brand-border/40">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6">
          <Breadcrumbs items={breadcrumbs} className="mb-6" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 text-start space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E03875]/10 text-brand-primary text-xs sm:text-sm font-bold border border-[#E03875]/20 shadow-xs">
                <IconPin size={16} />
                <span>{isAr ? "مدينة ٦ أكتوبر — الحي الرابع" : "6th of October City — 4th District"}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-text leading-[1.25] tracking-tight">
                {isAr ? (
                  <>
                    مركز تخاطب وتأهيل أطفال في <span className="text-brand-primary">مدينة ٦ أكتوبر</span>
                  </>
                ) : (
                  <>
                    Pediatric Speech Therapy & Rehabilitation Center in{" "}
                    <span className="text-brand-primary">6th of October City</span>
                  </>
                )}
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-brand-text-body leading-[1.8] max-w-2xl">
                {isAr
                  ? "نقدم في مركز «فروق فردية» بمدينة ٦ أكتوبر بيئة هادئة ومتخصصة لدعم نمو طفلكم في التخاطب والنطق، صعوبات التعلم، وتنمية المهارات، بخطط فردية مصممة خصيصًا لكل طفل وبالشراكة المباشرة معكم."
                  : "At Forooq Fardya Center in 6th of October City, we provide a calm, specialized environment supporting your child's speech, language, learning difficulties, and skills development through tailored 1-on-1 sessions."}
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-base shadow-sm hover:shadow-md transition-all duration-200"
                >
                  <IconWhatsapp size={22} />
                  <span>{isAr ? "احجز تقييمًا عبر واتساب" : "Book via WhatsApp"}</span>
                </a>

                <a
                  href={`tel:${site.contact.phone.replace(/[^0-9+]/g, "")}`}
                  className="inline-flex items-center gap-2.5 px-5 py-3.5 rounded-xl bg-white hover:bg-[#F9F5EC] text-brand-text font-bold text-base border border-brand-border shadow-xs transition-all duration-200"
                >
                  <IconPhone size={20} color="#B0285C" />
                  <span dir="ltr">{site.contact.phone}</span>
                </a>

                <Link
                  href="/contact/"
                  className="inline-flex items-center gap-2 px-4 py-3 text-sm font-semibold text-brand-primary hover:underline"
                >
                  <span>{isAr ? "موقع وتفاصيل المركز" : "Center Location & Details"}</span>
                  <IconArrowStart size={16} />
                </Link>
              </div>

              {/* Highlights Pill Badges */}
              <div className="pt-4 flex flex-wrap items-center gap-2.5 text-xs sm:text-sm text-brand-text-body">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-brand-border/80 shadow-xs">
                  <IconCheck size={14} className="text-[#25D366]" />
                  {isAr ? "جلسات فردية ١ إلى ١" : "1-on-1 Individual Sessions"}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-brand-border/80 shadow-xs">
                  <IconCheck size={14} className="text-[#25D366]" />
                  {isAr ? "تقييم مبدئي شامل وهادئ" : "Gentle Initial Assessment"}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-brand-border/80 shadow-xs">
                  <IconCheck size={14} className="text-[#25D366]" />
                  {isAr ? "إشراك دوري للأسرة" : "Continuous Family Partnership"}
                </span>
              </div>
            </div>

            {/* Quick Location Snapshot Card */}
            <address className="lg:col-span-4 not-italic">
              <div className="bg-white rounded-2xl border border-brand-border shadow-card p-6 sm:p-7 space-y-5 text-start relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#E03875]/5 rounded-bl-full pointer-events-none" />

                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-primary">
                    {isAr ? "موقع الفرع ومعلومات الزيارة" : "Branch Location & Info"}
                  </span>
                  <h3 className="text-xl font-bold text-brand-text">
                    {isAr ? "مركز فروق فردية — ٦ أكتوبر" : "Forooq Fardya — 6th of October"}
                  </h3>
                </div>

                <ul className="space-y-3.5 text-sm text-brand-text list-none p-0 m-0">
                  <li className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-[#FAF7F0] text-brand-primary shrink-0 mt-0.5" aria-hidden="true">
                      <IconPin size={18} />
                    </div>
                    <div>
                      <div className="font-semibold">{isAr ? "العنوان:" : "Address:"}</div>
                      <div className="text-brand-text-body text-xs sm:text-sm mt-0.5">
                        {isAr
                          ? "مدينة ٦ أكتوبر — الحي الرابع، محافظة الجيزة"
                          : "4th District, 6th of October City, Giza, Egypt"}
                      </div>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-[#FAF7F0] text-brand-primary shrink-0 mt-0.5" aria-hidden="true">
                      <IconClock size={18} />
                    </div>
                    <div>
                      <div className="font-semibold">{isAr ? "مواعيد العمل:" : "Working Hours:"}</div>
                      <div className="text-brand-text-body text-xs sm:text-sm mt-0.5">
                        {isAr
                          ? "السبت إلى الخميس: ١٢:٠٠ ظهرًا – ٩:٠٠ مساءً"
                          : "Saturday to Thursday: 12:00 PM – 9:00 PM"}
                      </div>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-[#FAF7F0] text-brand-primary shrink-0 mt-0.5" aria-hidden="true">
                      <IconPhone size={18} />
                    </div>
                    <div>
                      <div className="font-semibold">{isAr ? "للحجز والاستفسار:" : "Direct Contact:"}</div>
                      <div className="text-brand-text-body text-xs sm:text-sm mt-0.5" dir="ltr">
                        {site.contact.phone}
                      </div>
                    </div>
                  </li>
                </ul>

                <div className="pt-2 border-t border-brand-border/60">
                  <a
                    href="https://maps.google.com/?q=6th+of+October+City+Giza"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-brand-bg hover:bg-[#F2ECE0] text-brand-text font-semibold text-sm border border-brand-border transition-colors"
                  >
                    <IconPin size={16} color="#B0285C" />
                    <span>{isAr ? "فتح الموقع على Google Maps" : "Open in Google Maps"}</span>
                  </a>
                </div>
              </div>
            </address>
          </div>
        </div>
      </header>

      {/* ── Neighborhoods Coverage Bar ────────────────────────────── */}
      <section className="py-7 bg-white border-b border-brand-border/30">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-6">
            <span className="text-xs sm:text-sm font-bold text-brand-text whitespace-nowrap shrink-0 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-brand-primary inline-block" />
              {isAr ? "الأحياء والمناطق القريبة المخدومة:" : "Nearby Neighborhoods Served:"}
            </span>
            <ul className="flex flex-wrap items-center gap-2 list-none p-0 m-0">
              {neighborhoodTags.map((tag) => (
                <li
                  key={tag}
                  className="px-2.5 py-1 text-xs rounded-md bg-[#FAF7F0] text-brand-text-body border border-brand-border/60"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Services Section ──────────────────────────────────────── */}
      <section className="py-14 sm:py-20 bg-brand-bg">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 text-start">
          <header className="max-w-2xl mb-12">
            <Badge variant="yellow" className="mb-3">
              {isAr ? "خدماتنا في فرع أكتوبر" : "October Branch Services"}
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-text">
              {isAr
                ? "برامج تأهيلية متكاملة تناسب احتياج طفلك"
                : "Comprehensive Programs Tailored to Your Child"}
            </h2>
            <p className="mt-3 text-base sm:text-lg text-brand-text-body leading-relaxed">
              {isAr
                ? "كل جلسة في مركز فروق فردية بمدينة ٦ أكتوبر تُبنى على تقييم دقيق، بخطة فردية واضحة الأهداف بدون قوالب جاهزة."
                : "Every session at Forooq Fardya Center in 6th of October is built on a careful assessment, with clear goals without rigid molds."}
            </p>
          </header>

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 list-none p-0 m-0">
            {servicesList.map((service) => (
              <li key={service.slug}>
                <article
                  className={`bg-white rounded-2xl border p-6 sm:p-7 shadow-xs hover:shadow-card transition-all duration-300 flex flex-col justify-between h-full ${service.accent}`}
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-bg flex items-center justify-center border border-brand-border/50">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-brand-text">{service.title}</h3>
                    <p className="text-sm sm:text-base text-brand-text-body leading-relaxed">
                      {service.desc}
                    </p>
                  </div>

                  <footer className="pt-6 mt-4 border-t border-brand-border/40">
                    <Link
                      href={`/services/${service.slug}/`}
                      className="inline-flex items-center gap-2 text-sm font-bold text-brand-primary hover:underline"
                    >
                      <span>{isAr ? "تفاصيل الخدمة وكيف نعمل" : "Service Details"}</span>
                      <IconArrowStart size={16} />
                    </Link>
                  </footer>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Why Choose Us in October ──────────────────────────────── */}
      <section className="py-14 sm:py-20 bg-white border-y border-brand-border/40">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6">
          <header className="text-center max-w-2xl mx-auto mb-14">
            <Badge variant="cyan" className="mb-3">
              {isAr ? "لماذا فروق فردية؟" : "Why Choose Us"}
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-text">
              {isAr
                ? "ما الذي يميز مركزنا في مدينة ٦ أكتوبر؟"
                : "What Sets Our 6th of October Center Apart?"}
            </h2>
            <p className="mt-3 text-base sm:text-lg text-brand-text-body leading-relaxed">
              {isAr
                ? "نحرص على أن تكون تجربة طفلك وأسرتك مريحة وهادئة من اللحظة الأولى."
                : "We ensure that your child and family's experience is calm and reassuring from the very first visit."}
            </p>
          </header>

          <ol className="grid grid-cols-1 md:grid-cols-3 gap-8 text-start list-none p-0 m-0">
            <li className="p-7 rounded-2xl bg-brand-bg border border-brand-border/60 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#E03875]/10 text-brand-primary flex items-center justify-center font-bold text-lg" aria-hidden="true">
                ١
              </div>
              <h3 className="text-lg font-bold text-brand-text">
                {isAr ? "جلسات فردية هادئة" : "Quiet 1-on-1 Sessions"}
              </h3>
              <p className="text-sm text-brand-text-body leading-relaxed">
                {isAr
                  ? "كل طفل يحصل على اهتمام الأخصائي كاملًا في غرفة مجهزة تراعي الحواس وتمنع التشتت والضوضاء."
                  : "Every child gets undivided specialist attention in a sensory-friendly room designed to avoid distraction."}
              </p>
            </li>

            <li className="p-7 rounded-2xl bg-brand-bg border border-brand-border/60 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#F8D940]/25 text-[#9C7100] flex items-center justify-center font-bold text-lg" aria-hidden="true">
                ٢
              </div>
              <h3 className="text-lg font-bold text-brand-text">
                {isAr ? "الشراكة الحقيقية مع الأسرة" : "Genuine Family Partnership"}
              </h3>
              <p className="text-sm text-brand-text-body leading-relaxed">
                {isAr
                  ? "نشارككم كل خطوة بتوجيهات عملية وتمارين بسيطة يمكن تطبيقها في البيت بتلقائية لدعم تقدم الطفل."
                  : "We share home guidance and simple everyday routines so you can naturally reinforce skills at home."}
              </p>
            </li>

            <li className="p-7 rounded-2xl bg-brand-bg border border-brand-border/60 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#B1DD30]/20 text-[#517B11] flex items-center justify-center font-bold text-lg" aria-hidden="true">
                ٣
              </div>
              <h3 className="text-lg font-bold text-brand-text">
                {isAr ? "موقع مركزي وسهل الوصول" : "Central & Accessible Location"}
              </h3>
              <p className="text-sm text-brand-text-body leading-relaxed">
                {isAr
                  ? "موقع هادئ في الحي الرابع بالقرب من المحاور الرئيسية، يسهل الوصول إليه من مختلف أحياء أكتوبر والشيخ زايد."
                  : "A calm 4th District setting close to main arteries, making visits stress-free with convenient parking."}
              </p>
            </li>
          </ol>
        </div>
      </section>

      {/* ── Local FAQs Section ────────────────────────────────────── */}
      <section className="py-14 sm:py-20 bg-brand-bg">
        <div className="max-w-[900px] mx-auto px-5 sm:px-6 text-start">
          <header className="text-center max-w-xl mx-auto mb-12">
            <Badge variant="purple" className="mb-3">
              {isAr ? "أسئلة أولياء الأمور" : "Parent FAQs"}
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-text">
              {isAr
                ? "الأسئلة الشائعة حول فرع مدينة ٦ أكتوبر"
                : "Frequently Asked Questions About Our October Branch"}
            </h2>
          </header>

          <Accordion
            items={octoberFaqs.map((faq, index) => ({
              id: `october-faq-${index}`,
              q: faq.q,
              a: faq.a,
            }))}
          />

          <aside aria-label={isAr ? "استفسار إضافي" : "Additional Inquiry"} className="mt-10 p-6 rounded-2xl bg-white border border-brand-border text-center space-y-3">
            <h3 className="font-bold text-brand-text">
              {isAr ? "هل لديكم استفسار آخر لم تجدوا إجابته؟" : "Have another specific question?"}
            </h3>
            <p className="text-sm text-brand-text-body max-w-md mx-auto">
              {isAr
                ? "فريق الاستقبال لدينا جاهز للإجابة عن أي استفسار يخص طفلكم مباشرة عبر واتساب."
                : "Our team is ready to answer any inquiries regarding your child directly on WhatsApp."}
            </p>
            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] text-white font-semibold text-sm hover:bg-[#1EBE5D] transition-colors"
              >
                <IconWhatsapp size={18} />
                <span>{isAr ? "تواصل معنا مباشرة عبر واتساب" : "Chat on WhatsApp"}</span>
              </a>
            </div>
          </aside>
        </div>
      </section>

      {/* ── Bottom CTA Band ───────────────────────────────────────── */}
      <CtaBand
        title={
          isAr
            ? "جاهزون للبدء بخطوة هادئة لطفلكم في ٦ أكتوبر؟"
            : "Ready for a Calm First Step in 6th of October?"
        }
        subtitle={
          isAr
            ? "احجزوا جلسة تقييم مبدئي لنتعرف على طفلكم ونضع خطته الفردية معًا في فرعنا بالحي الرابع."
            : "Schedule an initial evaluation session to discover your child's strengths and design their custom roadmap."
        }
      />
    </div>
  );
};
