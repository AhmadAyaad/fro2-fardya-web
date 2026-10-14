"use client";

import React from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { IconSpeech, IconBook, IconSprout, IconClipboard, IconTarget, IconHeart } from "./Icons";

interface ConstellationProps {
  className?: string;
}

export const Constellation: React.FC<ConstellationProps> = ({ className = "" }) => {
  const { locale, t } = useLanguage();

  const labels = {
    speech: t.nav.speechTherapy,
    learning: t.nav.learningDifficulties,
    skills: t.nav.skillsDevelopment,
    assessment: locale === "ar" ? "تقييم فردي" : "Individual Assessment",
    alt:
      locale === "ar"
        ? "رسم تعبيري: طفل في المنتصف تحيط به دوائر ملوّنة ترمز إلى التخاطب وصعوبات التعلم وتنمية المهارات والتقييم الفردي"
        : "Illustration: Child at the center surrounded by colored nodes representing speech therapy, learning difficulties, skills development, and individualized evaluation",
  };

  return (
    <div
      role="img"
      aria-label={labels.alt}
      className={`relative w-full max-w-[520px] aspect-[520/460] select-none ${className}`}
    >
      {/* Organic blob background */}
      <div
        className="absolute inset-[3%_4%] bg-brand-bg-alt border border-brand-border"
        style={{
          borderRadius: "48% 52% 46% 54% / 52% 46% 54% 48%",
        }}
      />

      {/* Dotted connector threads */}
      <svg
        viewBox="0 0 520 460"
        width="100%"
        height="100%"
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        fill="none"
        stroke="#D9C27E"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="1 9"
      >
        <path d="M260 230L120 130M260 230L400 110M260 230L415 320M260 230L130 345M260 230L265 38" />
      </svg>

      {/* Center Node: Child / Heart */}
      <div
        className="absolute rounded-full bg-white border-4 border-brand-border-strong flex items-center justify-center shadow-hover hover:scale-105 transition-transform"
        style={{
          left: "36.2%",
          top: "34.3%",
          width: "27.7%",
          aspectRatio: "1",
        }}
      >
        <IconHeart size="46%" color="#B0285C" className="fill-primary-soft" />
      </div>

      {/* Top-Right in RTL / Left visually: Speech Therapy (Cyan) */}
      <div
        className="absolute flex flex-col items-center gap-2 group hover:scale-105 transition-transform cursor-pointer"
        style={{
          left: "11.9%",
          top: "15.7%",
          width: "22.3%",
        }}
      >
        <div
          className="w-full aspect-square rounded-full flex items-center justify-center shadow-card"
          style={{
            backgroundColor: "#83DDE6",
            border: "4px solid #327790",
          }}
        >
          <IconSpeech size="50%" color="#2C384D" />
        </div>
        <span className="bg-white border border-brand-border rounded-full px-3 py-0.5 text-xs sm:text-sm font-semibold whitespace-nowrap leading-relaxed shadow-sm text-brand-text">
          {labels.speech}
        </span>
      </div>

      {/* Top-Left in RTL / Right visually: Learning Difficulties (Purple) */}
      <div
        className="absolute flex flex-col items-center gap-2 group hover:scale-105 transition-transform cursor-pointer"
        style={{
          left: "67.3%",
          top: "13%",
          width: "19.2%",
        }}
      >
        <div
          className="w-full aspect-square rounded-full flex items-center justify-center shadow-card"
          style={{
            backgroundColor: "#AF89F6",
            border: "4px solid #5E378F",
          }}
        >
          <IconBook size="50%" color="#2C384D" />
        </div>
        <span className="bg-white border border-brand-border rounded-full px-3 py-0.5 text-xs sm:text-sm font-semibold whitespace-nowrap leading-relaxed shadow-sm text-brand-text">
          {labels.learning}
        </span>
      </div>

      {/* Bottom-Left in RTL / Right visually: Skills Development (Green) */}
      <div
        className="absolute flex flex-col items-center gap-2 group hover:scale-105 transition-transform cursor-pointer"
        style={{
          left: "69%",
          top: "57.4%",
          width: "21.5%",
        }}
      >
        <div
          className="w-full aspect-square rounded-full flex items-center justify-center shadow-card"
          style={{
            backgroundColor: "#B1DD30",
            border: "4px solid #517B11",
          }}
        >
          <IconSprout size="50%" color="#2C384D" />
        </div>
        <span className="bg-white border border-brand-border rounded-full px-3 py-0.5 text-xs sm:text-sm font-semibold whitespace-nowrap leading-relaxed shadow-sm text-brand-text">
          {labels.skills}
        </span>
      </div>

      {/* Bottom-Right in RTL / Left visually: Assessment (Pink) */}
      <div
        className="absolute flex flex-col items-center gap-2 group hover:scale-105 transition-transform cursor-pointer"
        style={{
          left: "15.8%",
          top: "64.6%",
          width: "18.5%",
        }}
      >
        <div
          className="w-full aspect-square rounded-full flex items-center justify-center shadow-card"
          style={{
            backgroundColor: "#F6598B",
            border: "4px solid #921B48",
          }}
        >
          <IconClipboard size="50%" color="#2C384D" />
        </div>
        <span className="bg-white border border-brand-border rounded-full px-3 py-0.5 text-xs sm:text-sm font-semibold whitespace-nowrap leading-relaxed shadow-sm text-brand-text">
          {labels.assessment}
        </span>
      </div>

      {/* Top Center: Goals (Yellow) */}
      <div
        className="absolute aspect-square rounded-full flex items-center justify-center shadow-sm"
        style={{
          left: "45.2%",
          top: "1.7%",
          width: "11.5%",
          backgroundColor: "#F8D940",
          border: "3px solid #8F660F",
        }}
      >
        <IconTarget size="52%" color="#2C384D" />
      </div>
    </div>
  );
};
