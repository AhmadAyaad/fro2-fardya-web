"use client";

import React from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { IconHeart, IconUsers, IconTarget, IconCheck } from "@/components/ui/Icons";

export const WhyUsSection: React.FC = () => {
  const { t } = useLanguage();

  const reasons = [
    {
      title: t.whyUs.item1Title,
      desc: t.whyUs.item1Desc,
      icon: <IconHeart size={26} color="#F8D940" />,
    },
    {
      title: t.whyUs.item2Title,
      desc: t.whyUs.item2Desc,
      icon: <IconUsers size={26} color="#83DDE6" />,
    },
    {
      title: t.whyUs.item3Title,
      desc: t.whyUs.item3Desc,
      icon: <IconTarget size={26} color="#B1DD30" />,
    },
    {
      title: t.whyUs.item4Title,
      desc: t.whyUs.item4Desc,
      icon: <IconCheck size={26} color="#F6598B" />,
    },
  ];

  return (
    <section
      id="why-us"
      aria-labelledby="why-title"
      className="bg-brand-dark text-brand-bg py-14 sm:py-20 md:py-22"
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6">
        {/* Section Header */}
        <header className="max-w-2xl text-start">
          <span className="text-accent-yellow font-bold text-sm tracking-wide block mb-2">
            {t.whyUs.tag}
          </span>
          <h2
            id="why-title"
            className="text-2xl sm:text-3xl md:text-[38px] font-bold text-white leading-[1.4]"
          >
            {t.whyUs.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#D4DAE5] leading-[1.85]">
            {t.whyUs.description}
          </p>
        </header>

        {/* 4 Cards Grid */}
        <ul className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 list-none p-0 m-0">
          {reasons.map((item, idx) => (
            <li
              key={idx}
              className="bg-white/5 border border-white/10 rounded-lg p-6 sm:p-7 flex flex-col justify-between hover:bg-white/10 hover:border-white/20 transition-all duration-200"
            >
              <div>
                <div className="w-12 h-12 rounded-full bg-white/10 border border-white/15 flex items-center justify-center mb-5 shrink-0" aria-hidden="true">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-[#D4DAE5] leading-[1.85]">
                  {item.desc}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
