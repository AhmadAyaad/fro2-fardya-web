"use client";

import React from "react";
import Link from "next/link";
import { getServices } from "@/data/services";
import { useLanguage } from "@/i18n/LanguageContext";
import { SenseNode } from "@/components/ui/SenseNode";
import { IconSpeech, IconBook, IconSprout, IconArrowStart } from "@/components/ui/Icons";

export const ServicesSection: React.FC = () => {
  const { locale, t } = useLanguage();
  const currentServices = getServices(locale);

  const getIcon = (name: string) => {
    switch (name) {
      case "speech":
        return <IconSpeech size={32} color="#2C384D" />;
      case "book":
        return <IconBook size={32} color="#2C384D" />;
      case "sprout":
        return <IconSprout size={32} color="#2C384D" />;
      default:
        return null;
    }
  };

  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="py-14 sm:py-20 md:py-22"
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl text-start">
          <span className="text-primary font-bold text-sm tracking-wide block mb-2">
            {t.servicesSection.tag}
          </span>
          <h2
            id="services-title"
            className="text-2xl sm:text-3xl md:text-[38px] font-bold text-brand-text leading-[1.4]"
          >
            {t.servicesSection.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-text-body leading-[1.85]">
            {t.servicesSection.description}
          </p>
        </div>

        {/* 3 Service Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {currentServices.map((service) => (
            <div
              key={service.slug}
              className="bg-white rounded-lg border border-brand-border p-6 sm:p-8 flex flex-col justify-between hover:border-brand-border-strong hover:shadow-card transition-all duration-200 group"
            >
              <div>
                <SenseNode
                  type={service.themeColor}
                  size={64}
                  className="mb-6 group-hover:scale-105 transition-transform"
                >
                  {getIcon(service.iconName)}
                </SenseNode>

                <h3 className="text-2xl font-bold text-brand-text mb-2">
                  {service.title}
                </h3>

                <p className="text-xs font-semibold text-brand-text-muted mb-4">
                  {service.tagline}
                </p>

                <p className="text-base text-brand-text-body leading-[1.85] mb-6">
                  {service.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-brand-border/60">
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 text-base font-bold text-primary hover:text-primary-hover group-hover:translate-x-[-4px] transition-transform"
                >
                  <span>{t.servicesSection.learnMore}</span>
                  <IconArrowStart size={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Explore all services link */}
        <div className="mt-10 text-center sm:text-start">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-base font-bold text-brand-text hover:text-primary transition-colors underline underline-offset-8"
          >
            <span>{t.servicesSection.viewAllServices}</span>
          </Link>
        </div>
      </div>
    </section>
  );
};
