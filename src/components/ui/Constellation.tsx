"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageContext";

interface ConstellationProps {
  className?: string;
}

export const Constellation: React.FC<ConstellationProps> = ({ className = "" }) => {
  const { t } = useLanguage();

  return (
    <div
      role="img"
      aria-label={t.senses.alt}
      className={`relative w-full max-w-[520px] aspect-[520/480] select-none ${className}`}
    >
      {/* Organic blob background */}
      <div
        className="absolute inset-[2%_3%] bg-brand-bg-alt border border-brand-border"
        style={{
          borderRadius: "48% 52% 46% 54% / 52% 46% 54% 48%",
        }}
      />

      {/* Connector threads inspired by the logo constellation */}
      <svg
        viewBox="0 0 520 480"
        width="100%"
        height="100%"
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        fill="none"
      >
        {/* Radial lines from center head to 5 senses */}
        <g stroke="#D4B870" strokeWidth="2.5" strokeDasharray="2 7" strokeLinecap="round">
          <line x1="260" y1="240" x2="145" y2="110" />
          <line x1="260" y1="240" x2="375" y2="110" />
          <line x1="260" y1="240" x2="430" y2="290" />
          <line x1="260" y1="240" x2="260" y2="400" />
          <line x1="260" y1="240" x2="90" y2="290" />
        </g>
        {/* Outer pentagon connector threads */}
        <g stroke="#D4B870" strokeWidth="2" strokeDasharray="1 8" strokeLinecap="round">
          <line x1="145" y1="110" x2="375" y2="110" />
          <line x1="375" y1="110" x2="430" y2="290" />
          <line x1="430" y1="290" x2="260" y2="400" />
          <line x1="260" y1="400" x2="90" y2="290" />
          <line x1="90" y1="290" x2="145" y2="110" />
        </g>
      </svg>

      {/* Center Node: Head & Brain (فروق فردية) */}
      <div
        className="absolute flex flex-col items-center gap-1.5 group hover:scale-108 transition-all duration-300 cursor-pointer z-10"
        style={{
          left: "36%",
          top: "34%",
          width: "28%",
        }}
      >
        <div className="w-full aspect-square rounded-full overflow-hidden shadow-card group-hover:shadow-hover transition-shadow bg-white flex items-center justify-center">
          <Image
            src="/images/senses/center_head.png"
            alt={t.senses.center}
            width={146}
            height={146}
            priority
            className="w-full h-full object-contain"
          />
        </div>
        <span className="bg-brand-bg border border-[#D4B870] rounded-full px-3 py-0.5 text-xs sm:text-sm font-bold text-brand-text whitespace-nowrap leading-relaxed shadow-sm">
          {t.senses.center}
        </span>
      </div>

      {/* Sense 1: Top-Left: Eye / البصر (Pink) */}
      <div
        className="absolute flex flex-col items-center gap-1.5 group hover:scale-108 transition-all duration-300 cursor-pointer z-20"
        style={{
          left: "17%",
          top: "11%",
          width: "20%",
        }}
      >
        <div className="w-full aspect-square rounded-full overflow-hidden shadow-card group-hover:shadow-hover transition-shadow bg-white flex items-center justify-center">
          <Image
            src="/images/senses/eye.png"
            alt={t.senses.sight}
            width={104}
            height={104}
            priority
            className="w-full h-full object-contain"
          />
        </div>
        <span className="bg-white border border-brand-border rounded-full px-3 py-0.5 text-xs sm:text-sm font-bold text-brand-text whitespace-nowrap leading-relaxed shadow-sm">
          {t.senses.sight}
        </span>
      </div>

      {/* Sense 2: Top-Right: Ear / السمع (Yellow) */}
      <div
        className="absolute flex flex-col items-center gap-1.5 group hover:scale-108 transition-all duration-300 cursor-pointer z-20"
        style={{
          left: "63%",
          top: "11%",
          width: "20%",
        }}
      >
        <div className="w-full aspect-square rounded-full overflow-hidden shadow-card group-hover:shadow-hover transition-shadow bg-white flex items-center justify-center">
          <Image
            src="/images/senses/ear.png"
            alt={t.senses.hearing}
            width={104}
            height={104}
            priority
            className="w-full h-full object-contain"
          />
        </div>
        <span className="bg-white border border-brand-border rounded-full px-3 py-0.5 text-xs sm:text-sm font-bold text-brand-text whitespace-nowrap leading-relaxed shadow-sm">
          {t.senses.hearing}
        </span>
      </div>

      {/* Sense 3: Mid-Right: Nose / الشم (Green) */}
      <div
        className="absolute flex flex-col items-center gap-1.5 group hover:scale-108 transition-all duration-300 cursor-pointer z-20"
        style={{
          left: "73%",
          top: "50%",
          width: "20%",
        }}
      >
        <div className="w-full aspect-square rounded-full overflow-hidden shadow-card group-hover:shadow-hover transition-shadow bg-white flex items-center justify-center">
          <Image
            src="/images/senses/nose.png"
            alt={t.senses.smell}
            width={104}
            height={104}
            className="w-full h-full object-contain"
          />
        </div>
        <span className="bg-white border border-brand-border rounded-full px-3 py-0.5 text-xs sm:text-sm font-bold text-brand-text whitespace-nowrap leading-relaxed shadow-sm">
          {t.senses.smell}
        </span>
      </div>

      {/* Sense 4: Bottom: Mouth / التذوق (Cyan) */}
      <div
        className="absolute flex flex-col items-center gap-1.5 group hover:scale-108 transition-all duration-300 cursor-pointer z-20"
        style={{
          left: "40%",
          top: "70%",
          width: "20%",
        }}
      >
        <div className="w-full aspect-square rounded-full overflow-hidden shadow-card group-hover:shadow-hover transition-shadow bg-white flex items-center justify-center">
          <Image
            src="/images/senses/mouth.png"
            alt={t.senses.taste}
            width={104}
            height={104}
            className="w-full h-full object-contain"
          />
        </div>
        <span className="bg-white border border-brand-border rounded-full px-3 py-0.5 text-xs sm:text-sm font-bold text-brand-text whitespace-nowrap leading-relaxed shadow-sm">
          {t.senses.taste}
        </span>
      </div>

      {/* Sense 5: Mid-Left: Hand / اللمس (Purple) */}
      <div
        className="absolute flex flex-col items-center gap-1.5 group hover:scale-108 transition-all duration-300 cursor-pointer z-20"
        style={{
          left: "7%",
          top: "50%",
          width: "20%",
        }}
      >
        <div className="w-full aspect-square rounded-full overflow-hidden shadow-card group-hover:shadow-hover transition-shadow bg-white flex items-center justify-center">
          <Image
            src="/images/senses/hand.png"
            alt={t.senses.touch}
            width={104}
            height={104}
            className="w-full h-full object-contain"
          />
        </div>
        <span className="bg-white border border-brand-border rounded-full px-3 py-0.5 text-xs sm:text-sm font-bold text-brand-text whitespace-nowrap leading-relaxed shadow-sm">
          {t.senses.touch}
        </span>
      </div>
    </div>
  );
};
