"use client";

import React from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { SenseNode } from "@/components/ui/SenseNode";
import { IconEye, IconHeart, IconUsers } from "@/components/ui/Icons";

export const ApproachSection: React.FC = () => {
  const { t } = useLanguage();

  const pillars = [
    {
      title: t.approach.pillar1Title,
      desc: t.approach.pillar1Desc,
      nodeType: "yellow" as const,
      icon: <IconEye size={30} color="#2C384D" />,
    },
    {
      title: t.approach.pillar2Title,
      desc: t.approach.pillar2Desc,
      nodeType: "pink" as const,
      icon: <IconHeart size={30} color="#2C384D" />,
    },
    {
      title: t.approach.pillar3Title,
      desc: t.approach.pillar3Desc,
      nodeType: "green" as const,
      icon: <IconUsers size={30} color="#2C384D" />,
    },
  ];

  return (
    <section
      id="approach"
      aria-labelledby="approach-title"
      className="bg-white border-y border-brand-border py-14 sm:py-20 md:py-22"
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6">
        {/* Section Header */}
        <header className="max-w-2xl text-start">
          <span className="text-primary font-bold text-sm tracking-wide block mb-2">
            {t.approach.tag}
          </span>
          <h2
            id="approach-title"
            className="text-2xl sm:text-3xl md:text-[38px] font-bold text-brand-text leading-[1.4]"
          >
            {t.approach.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-text-body leading-[1.85]">
            {t.approach.description}
          </p>
        </header>

        {/* 3 Pillar Cards */}
        <ul className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 list-none p-0 m-0">
          {pillars.map((pillar, idx) => (
            <li key={idx} className="flex">
              <article className="w-full bg-brand-bg rounded-lg border border-brand-border p-6 sm:p-7 flex flex-col items-start hover:border-brand-border-strong hover:shadow-card transition-all duration-200">
                <SenseNode type={pillar.nodeType} size={60} className="mb-5">
                  {pillar.icon}
                </SenseNode>
                <h3 className="text-xl sm:text-2xl font-bold text-brand-text mb-3">
                  {pillar.title}
                </h3>
                <p className="text-base text-brand-text-body leading-[1.85]">
                  {pillar.desc}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
