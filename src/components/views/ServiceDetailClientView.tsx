"use client";

import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getServiceBySlug, getServices } from "@/data/services";
import { useLanguage } from "@/i18n/LanguageContext";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SenseNode } from "@/components/ui/SenseNode";
import { Badge } from "@/components/ui/Badge";
import { Accordion } from "@/components/ui/Accordion";
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

interface ServiceDetailClientViewProps {
  slug: string;
}

export const ServiceDetailClientView: React.FC<ServiceDetailClientViewProps> = ({ slug }) => {
  const { locale, t } = useLanguage();
  const service = getServiceBySlug(slug, locale);

  if (!service) {
    notFound();
  }

  const isAr = locale === "ar";
  const allServices = getServices(locale);
  const otherServices = allServices.filter((s) => s.slug !== service.slug);

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
    specialtyBadge: isAr ? "خدمة تخصصية" : "Specialized Clinical Service",
    readyTitle: isAr ? "جاهزون لبدء التقييم؟" : "Ready to Begin the Assessment?",
    readyDesc: isAr
      ? "جلسة هادئة تساعدنا على فهم طفلكم واحتياجاته بدقة لتصميم الخطة الملائمة."
      : "A relaxed session helping us accurately discover your child's needs and tailor a clear plan.",
    bookBtn: isAr ? "احجز تقييم لهذه الخدمة" : "Book Assessment for this Service",
    situationsTitle: isAr
      ? "مواقف شائعة يطلب فيها الأهل الدعم"
      : "Common Signs Where Families Seek Guidance",
    situationsSubtitle: isAr
      ? "تلاحظ أسر كثيرة هذه الإشارات، وهي تدل على أن طفلكم قد يستفيد من جلسات التقييم والتوجيه:"
      : "Many families observe these guideposts, indicating that an assessment can provide valuable clarity and support:",
    howItWorksTitle: isAr
      ? `كيف تعمل جلسات ${service.title}؟`
      : `How do ${service.title} sessions work?`,
    expectationsTitle: isAr ? "ماذا يتوقع الأهل؟" : "What Can Parents Expect?",
    faqTag: isAr ? "تساؤلات شائعة" : "Common Questions",
    faqTitle: isAr
      ? `أسئلة شائعة حول ${service.title}`
      : `Frequently Asked Questions about ${service.title}`,
    relatedTitle: isAr ? "خدمات أخرى قد تهمكم" : "Other Services of Interest",
    exploreService: isAr ? "استعراض خدمة" : "Explore",
    ctaTitle: isAr
      ? `هل تودون استشارة مختص في ${service.title}؟`
      : `Would you like to consult a specialist in ${service.title}?`,
    ctaSubtitle: isAr
      ? "تحدثوا معنا لنرتب موعد التقييم المبدئي ونتعرف على طفلكم برفق."
      : "Connect with us to schedule a gentle initial consultation for your child.",
  };

  return (
    <div className="pb-16 md:pb-0">
      {/* 1. Header & Overview Section */}
      <section className="max-w-[1200px] mx-auto px-5 sm:px-6 pt-8 pb-12">
        <Breadcrumbs
          items={[
            { title: t.nav.services, href: "/services" },
            { title: service.title },
          ]}
          className="mb-8"
        />

        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 bg-white border border-brand-border rounded-xl p-6 sm:p-10 shadow-sm">
          <div className="flex-1 text-start">
            <div className="flex items-center gap-4 mb-5">
              <SenseNode type={service.themeColor} size={70}>
                {getIcon(service.iconName)}
              </SenseNode>
              <div>
                <Badge variant={service.themeColor} className="mb-2">
                  {copy.specialtyBadge}
                </Badge>
                <h1 className="text-3xl sm:text-4xl font-bold text-brand-text">
                  {service.title}
                </h1>
                <p className="text-sm sm:text-base text-brand-text-muted mt-0.5">
                  {service.tagline}
                </p>
              </div>
            </div>

            <p className="text-lg sm:text-xl text-brand-text-body leading-[1.95] max-w-2xl mt-4">
              {service.purpose}
            </p>
          </div>

          <div className="w-full lg:w-72 shrink-0 bg-brand-bg-alt rounded-lg border border-brand-border p-6 flex flex-col gap-4">
            <span className="text-sm font-bold text-brand-text">
              {copy.readyTitle}
            </span>
            <p className="text-xs text-brand-text-muted leading-relaxed">
              {copy.readyDesc}
            </p>
            <Link
              href="/contact"
              className="w-full py-3.5 text-center text-sm font-bold text-white bg-primary hover:bg-primary-hover rounded-full shadow-cta transition-transform active:scale-[0.98]"
            >
              {copy.bookBtn}
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Common Situations Where Parents Seek Support */}
      <section
        aria-labelledby="situations-title"
        className="bg-white border-y border-brand-border py-14 sm:py-18"
      >
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6">
          <div className="max-w-2xl text-start mb-8">
            <h2
              id="situations-title"
              className="text-2xl sm:text-3xl font-bold text-brand-text leading-[1.4]"
            >
              {copy.situationsTitle}
            </h2>
            <p className="mt-2 text-base text-brand-text-body">
              {copy.situationsSubtitle}
            </p>
          </div>

          {/* Educational notice */}
          <div className="bg-[#FEF7D9] border border-[#F0DC8A] rounded-lg p-4 sm:p-5 mb-8 text-start max-w-3xl">
            <p className="text-xs sm:text-sm text-[#604818] leading-relaxed">
              ℹ {service.indicationsNotice}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
            {service.indications.map((item, idx) => (
              <div
                key={idx}
                className="bg-brand-bg rounded-lg border border-brand-border p-5 flex items-start gap-3.5 text-start"
              >
                <span className="shrink-0 mt-0.5 text-primary">
                  <IconCheck size={20} />
                </span>
                <span className="text-sm sm:text-base text-brand-text-body leading-[1.8]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. How the Service Works & 4. What to Expect */}
      <section className="max-w-[1200px] mx-auto px-5 sm:px-6 py-14 sm:py-18">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* How it works */}
          <div className="text-start">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-text mb-6 leading-[1.4]">
              {copy.howItWorksTitle}
            </h2>
            <div className="space-y-4">
              {service.howItWorks.map((step, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-brand-border rounded-lg p-5 flex items-start gap-4 shadow-sm"
                >
                  <span className="w-8 h-8 rounded-full bg-brand-bg-alt border border-brand-border flex items-center justify-center font-bold text-sm text-brand-text shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <p className="text-sm sm:text-base text-brand-text-body leading-relaxed">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* What to expect */}
          <div className="text-start">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-text mb-6 leading-[1.4]">
              {copy.expectationsTitle}
            </h2>
            <div className="space-y-4">
              {service.expectations.map((exp, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-brand-border rounded-lg p-5 flex items-start gap-4 shadow-sm"
                >
                  <span className="w-8 h-8 rounded-full bg-primary-soft text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <IconCheck size={18} />
                  </span>
                  <p className="text-sm sm:text-base text-brand-text-body leading-relaxed">
                    {exp}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Service-specific FAQs */}
      {service.faqs && service.faqs.length > 0 && (
        <section
          aria-labelledby="service-faq-title"
          className="bg-white border-y border-brand-border py-14 sm:py-18"
        >
          <div className="max-w-[800px] mx-auto px-5 sm:px-6">
            <div className="text-start mb-8">
              <span className="text-primary font-bold text-sm tracking-wide block mb-1">
                {copy.faqTag}
              </span>
              <h2
                id="service-faq-title"
                className="text-2xl sm:text-3xl font-bold text-brand-text"
              >
                {copy.faqTitle}
              </h2>
            </div>

            <Accordion
              items={service.faqs.map((f, i) => ({
                id: `service-faq-${i}`,
                q: f.q,
                a: f.a,
              }))}
              defaultOpenIndex={0}
            />
          </div>
        </section>
      )}

      {/* Related Services */}
      <section className="max-w-[1200px] mx-auto px-5 sm:px-6 py-14 sm:py-18">
        <h2 className="text-2xl sm:text-3xl font-bold text-brand-text mb-8 text-start">
          {copy.relatedTitle}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {otherServices.map((other) => (
            <div
              key={other.slug}
              className="bg-white border border-brand-border rounded-lg p-6 sm:p-7 flex flex-col justify-between hover:border-brand-border-strong hover:shadow-card transition-all text-start"
            >
              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  <SenseNode type={other.themeColor} size={50}>
                    {getIcon(other.iconName)}
                  </SenseNode>
                  <div>
                    <h3 className="text-xl font-bold text-brand-text">
                      {other.title}
                    </h3>
                    <span className="text-xs text-brand-text-muted">
                      {other.tagline}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-brand-text-body leading-[1.85] mb-5">
                  {other.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-brand-border/60">
                <Link
                  href={`/services/${other.slug}`}
                  className="font-bold text-sm text-primary hover:underline flex items-center gap-1.5"
                >
                  <span>{copy.exploreService} {other.title}</span>
                  <IconArrowStart size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Band */}
      <CtaBand
        title={copy.ctaTitle}
        subtitle={copy.ctaSubtitle}
      />

      {/* Sticky Mobile Booking Bar */}
      <StickyBookingBar serviceTitle={service.title} />
    </div>
  );
};
