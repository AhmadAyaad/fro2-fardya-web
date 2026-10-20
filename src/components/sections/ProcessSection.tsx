"use client";

import React from "react";
import { useLanguage } from "@/i18n/LanguageContext";

export const ProcessSection: React.FC = () => {
  const { t } = useLanguage();

  const steps = [
    {
      num: t.process.step1Num,
      title: t.process.step1Title,
      desc: t.process.step1Desc,
    },
    {
      num: t.process.step2Num,
      title: t.process.step2Title,
      desc: t.process.step2Desc,
    },
    {
      num: t.process.step3Num,
      title: t.process.step3Title,
      desc: t.process.step3Desc,
    },
    {
      num: t.process.step4Num,
      title: t.process.step4Title,
      desc: t.process.step4Desc,
    },
  ];

  return (
    <section
      id="process"
      aria-labelledby="process-title"
      className="bg-white border-y border-brand-border py-14 sm:py-20 md:py-22"
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6">
        {/* Section Header */}
        <header className="max-w-2xl text-start">
          <span className="text-primary font-bold text-sm tracking-wide block mb-2">
            {t.process.tag}
          </span>
          <h2
            id="process-title"
            className="text-2xl sm:text-3xl md:text-[38px] font-bold text-brand-text leading-[1.4]"
          >
            {t.process.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-text-body leading-[1.85]">
            {t.process.description}
          </p>
        </header>

        {/* 4 Steps Container */}
        <div className="mt-14 relative">
          {/* Dotted connecting line on Desktop (hidden on mobile) */}
          <div
            className="hidden lg:block absolute top-7 inset-x-12 h-0.5 border-t-2 border-dashed border-[#D9C27E] -z-0"
            aria-hidden="true"
          />

          <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10 list-none p-0 m-0">
            {steps.map((step, idx) => (
              <li
                key={idx}
                className="bg-brand-bg lg:bg-transparent rounded-lg lg:rounded-none p-6 lg:p-0 border lg:border-none border-brand-border flex flex-col items-start"
              >
                {/* Step Number Circle */}
                <div className="w-14 h-14 rounded-full bg-white border-4 border-brand-border-strong flex items-center justify-center text-xl font-bold text-brand-text shadow-sm mb-5 shrink-0" aria-hidden="true">
                  {step.num}
                </div>

                <h3 className="text-xl font-bold text-brand-text mb-3">
                  {step.title}
                </h3>

                <p className="text-base text-brand-text-body leading-[1.85]">
                  {step.desc}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};
