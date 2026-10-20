"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageContext";

interface ConstellationProps {
  className?: string;
}

type SenseKey = "center" | "sight" | "hearing" | "smell" | "taste" | "touch";

export const Constellation: React.FC<ConstellationProps> = ({ className = "" }) => {
  const { t } = useLanguage();
  const [activeSense, setActiveSense] = useState<SenseKey | null>(null);

  return (
    <div
      role="img"
      aria-label={t.senses.alt}
      className={`relative w-full max-w-[520px] aspect-[520/480] select-none ${className}`}
    >
      {/* ── 1. Organic Living Morphing Background Blob ──────────────── */}
      <div
        className="absolute inset-[2%_3%] bg-brand-bg-alt/85 border border-brand-border/80 animate-morph-blob pointer-events-none transition-transform"
        aria-hidden="true"
      />

      {/* ── 2. Concentric Radial Aura Pulse Rings Behind Center Head ─── */}
      <div
        className="absolute left-[34%] top-[32%] w-[32%] aspect-square rounded-full border-2 border-primary/20 bg-primary/[0.04] animate-pulse-aura pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute left-[31%] top-[29%] w-[38%] aspect-square rounded-full border border-[#D4B870]/30 animate-pulse-aura-outer pointer-events-none"
        aria-hidden="true"
      />

      {/* ── 3. Connector Threads & Traveling Energy Particles (SVG) ─── */}
      <svg
        viewBox="0 0 520 480"
        width="100%"
        height="100%"
        className="absolute inset-0 pointer-events-none z-[5]"
        aria-hidden="true"
        fill="none"
      >
        {/* Subtle decorative twinkle stars */}
        <g fill="#D4B870">
          <path
            d="M 210 55 Q 210 65 200 65 Q 210 65 210 75 Q 210 65 220 65 Q 210 65 210 55 Z"
            className="animate-twinkle"
            style={{ animationDelay: "0s" }}
          />
          <path
            d="M 450 175 Q 450 185 440 185 Q 450 185 450 195 Q 450 185 460 185 Q 450 185 450 175 Z"
            className="animate-twinkle"
            style={{ animationDelay: "1.2s" }}
          />
          <path
            d="M 75 175 Q 75 185 65 185 Q 75 185 75 195 Q 75 185 85 185 Q 75 185 75 175 Z"
            className="animate-twinkle"
            style={{ animationDelay: "2.1s" }}
          />
          <path
            d="M 320 435 Q 320 443 312 443 Q 320 443 320 451 Q 320 443 328 443 Q 320 443 320 435 Z"
            className="animate-twinkle"
            style={{ animationDelay: "0.7s" }}
          />
        </g>

        {/* Outer pentagon connector threads with continuous gentle counter-flow */}
        <g
          stroke="#D4B870"
          strokeWidth="2"
          strokeDasharray="1 8"
          strokeLinecap="round"
          opacity="0.8"
          className="animate-flow-dash-outer"
        >
          <line x1="145" y1="110" x2="375" y2="110" />
          <line x1="375" y1="110" x2="430" y2="290" />
          <line x1="430" y1="290" x2="260" y2="400" />
          <line x1="260" y1="400" x2="90" y2="290" />
          <line x1="90" y1="290" x2="145" y2="110" />
        </g>

        {/* Radial lines from center head to 5 senses with continuous flowing dash */}
        <g
          strokeWidth="2.5"
          strokeDasharray="2 7"
          strokeLinecap="round"
          className="animate-flow-dash-radial"
        >
          {/* Ray 1: Center -> Sight (Eye) */}
          <line
            x1="260"
            y1="240"
            x2="145"
            y2="110"
            stroke={activeSense === "sight" ? "#F6598B" : "#D4B870"}
            strokeWidth={activeSense === "sight" ? "3.5" : "2.5"}
            className="transition-colors duration-300"
          />
          {/* Ray 2: Center -> Hearing (Ear) */}
          <line
            x1="260"
            y1="240"
            x2="375"
            y2="110"
            stroke={activeSense === "hearing" ? "#D4A311" : "#D4B870"}
            strokeWidth={activeSense === "hearing" ? "3.5" : "2.5"}
            className="transition-colors duration-300"
          />
          {/* Ray 3: Center -> Smell (Nose) */}
          <line
            x1="260"
            y1="240"
            x2="430"
            y2="290"
            stroke={activeSense === "smell" ? "#84B022" : "#D4B870"}
            strokeWidth={activeSense === "smell" ? "3.5" : "2.5"}
            className="transition-colors duration-300"
          />
          {/* Ray 4: Center -> Taste (Mouth) */}
          <line
            x1="260"
            y1="240"
            x2="260"
            y2="400"
            stroke={activeSense === "taste" ? "#327790" : "#D4B870"}
            strokeWidth={activeSense === "taste" ? "3.5" : "2.5"}
            className="transition-colors duration-300"
          />
          {/* Ray 5: Center -> Touch (Hand) */}
          <line
            x1="260"
            y1="240"
            x2="90"
            y2="290"
            stroke={activeSense === "touch" ? "#8A57D0" : "#D4B870"}
            strokeWidth={activeSense === "touch" ? "3.5" : "2.5"}
            className="transition-colors duration-300"
          />
        </g>

        {/* Traveling Sensory Energy Pulses (gliding along each neural thread) */}
        {/* Sight particle */}
        <circle r={activeSense === "sight" ? "5" : "3.5"} fill="#F6598B">
          <animate
            attributeName="cx"
            values="260;145;260"
            dur={activeSense === "sight" ? "2.2s" : "4.2s"}
            repeatCount="indefinite"
          />
          <animate
            attributeName="cy"
            values="240;110;240"
            dur={activeSense === "sight" ? "2.2s" : "4.2s"}
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.25;0.95;0.25"
            dur={activeSense === "sight" ? "2.2s" : "4.2s"}
            repeatCount="indefinite"
          />
        </circle>

        {/* Hearing particle */}
        <circle r={activeSense === "hearing" ? "5" : "3.5"} fill="#D4A311">
          <animate
            attributeName="cx"
            values="260;375;260"
            dur={activeSense === "hearing" ? "2.4s" : "4.8s"}
            repeatCount="indefinite"
            begin="0.8s"
          />
          <animate
            attributeName="cy"
            values="240;110;240"
            dur={activeSense === "hearing" ? "2.4s" : "4.8s"}
            repeatCount="indefinite"
            begin="0.8s"
          />
          <animate
            attributeName="opacity"
            values="0.25;0.95;0.25"
            dur={activeSense === "hearing" ? "2.4s" : "4.8s"}
            repeatCount="indefinite"
            begin="0.8s"
          />
        </circle>

        {/* Smell particle */}
        <circle r={activeSense === "smell" ? "5" : "3.5"} fill="#84B022">
          <animate
            attributeName="cx"
            values="260;430;260"
            dur={activeSense === "smell" ? "2.5s" : "5.1s"}
            repeatCount="indefinite"
            begin="1.5s"
          />
          <animate
            attributeName="cy"
            values="240;290;240"
            dur={activeSense === "smell" ? "2.5s" : "5.1s"}
            repeatCount="indefinite"
            begin="1.5s"
          />
          <animate
            attributeName="opacity"
            values="0.25;0.95;0.25"
            dur={activeSense === "smell" ? "2.5s" : "5.1s"}
            repeatCount="indefinite"
            begin="1.5s"
          />
        </circle>

        {/* Taste particle */}
        <circle r={activeSense === "taste" ? "5" : "3.5"} fill="#327790">
          <animate
            attributeName="cx"
            values="260;260;260"
            dur={activeSense === "taste" ? "2.3s" : "4.5s"}
            repeatCount="indefinite"
            begin="0.4s"
          />
          <animate
            attributeName="cy"
            values="240;400;240"
            dur={activeSense === "taste" ? "2.3s" : "4.5s"}
            repeatCount="indefinite"
            begin="0.4s"
          />
          <animate
            attributeName="opacity"
            values="0.25;0.95;0.25"
            dur={activeSense === "taste" ? "2.3s" : "4.5s"}
            repeatCount="indefinite"
            begin="0.4s"
          />
        </circle>

        {/* Touch particle */}
        <circle r={activeSense === "touch" ? "5" : "3.5"} fill="#8A57D0">
          <animate
            attributeName="cx"
            values="260;90;260"
            dur={activeSense === "touch" ? "2.6s" : "5.3s"}
            repeatCount="indefinite"
            begin="1.1s"
          />
          <animate
            attributeName="cy"
            values="240;290;240"
            dur={activeSense === "touch" ? "2.6s" : "5.3s"}
            repeatCount="indefinite"
            begin="1.1s"
          />
          <animate
            attributeName="opacity"
            values="0.25;0.95;0.25"
            dur={activeSense === "touch" ? "2.6s" : "5.3s"}
            repeatCount="indefinite"
            begin="1.1s"
          />
        </circle>
      </svg>

      {/* ── 4. Center Node: Head & Brain (فروق فردية) ───────────────── */}
      <div
        className="absolute flex flex-col items-center gap-1.5 group cursor-pointer z-20 animate-pulse-center"
        style={{
          left: "36%",
          top: "34%",
          width: "28%",
        }}
        onMouseEnter={() => setActiveSense("center")}
        onMouseLeave={() => setActiveSense(null)}
      >
        <div className="w-full aspect-square rounded-full overflow-hidden shadow-card group-hover:shadow-[0_12px_32px_rgba(176,40,92,0.3)] group-hover:scale-108 group-hover:ring-4 group-hover:ring-primary/25 transition-all duration-300 bg-white flex items-center justify-center">
          <Image
            src="/images/senses/center_head.png"
            alt={t.senses.center}
            width={146}
            height={146}
            priority
            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <span className="bg-brand-bg border border-[#D4B870] group-hover:border-primary group-hover:text-primary rounded-full px-3 py-0.5 text-xs sm:text-sm font-bold text-brand-text whitespace-nowrap leading-relaxed shadow-sm transition-colors duration-300">
          {t.senses.center}
        </span>
      </div>

      {/* ── 5. Sense 1: Top-Left: Eye / البصر (Pink) ────────────────── */}
      <div
        className="absolute flex flex-col items-center gap-1.5 group cursor-pointer z-30 animate-float-node-1"
        style={{
          left: "17%",
          top: "11%",
          width: "20%",
        }}
        onMouseEnter={() => setActiveSense("sight")}
        onMouseLeave={() => setActiveSense(null)}
      >
        <div className="w-full aspect-square rounded-full overflow-hidden shadow-card group-hover:shadow-[0_12px_28px_rgba(246,89,139,0.4)] group-hover:scale-112 group-hover:ring-4 group-hover:ring-[#F6598B]/30 transition-all duration-300 bg-white flex items-center justify-center">
          <Image
            src="/images/senses/eye.png"
            alt={t.senses.sight}
            width={104}
            height={104}
            priority
            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-108"
          />
        </div>
        <span className="bg-white border border-brand-border group-hover:border-[#F6598B] group-hover:text-[#F6598B] rounded-full px-3 py-0.5 text-xs sm:text-sm font-bold text-brand-text whitespace-nowrap leading-relaxed shadow-sm transition-colors duration-300">
          {t.senses.sight}
        </span>
      </div>

      {/* ── 6. Sense 2: Top-Right: Ear / السمع (Yellow/Gold) ────────── */}
      <div
        className="absolute flex flex-col items-center gap-1.5 group cursor-pointer z-30 animate-float-node-2"
        style={{
          left: "63%",
          top: "11%",
          width: "20%",
        }}
        onMouseEnter={() => setActiveSense("hearing")}
        onMouseLeave={() => setActiveSense(null)}
      >
        <div className="w-full aspect-square rounded-full overflow-hidden shadow-card group-hover:shadow-[0_12px_28px_rgba(248,217,64,0.5)] group-hover:scale-112 group-hover:ring-4 group-hover:ring-[#F8D940]/40 transition-all duration-300 bg-white flex items-center justify-center">
          <Image
            src="/images/senses/ear.png"
            alt={t.senses.hearing}
            width={104}
            height={104}
            priority
            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-108"
          />
        </div>
        <span className="bg-white border border-brand-border group-hover:border-[#D4A311] group-hover:text-[#8F660F] rounded-full px-3 py-0.5 text-xs sm:text-sm font-bold text-brand-text whitespace-nowrap leading-relaxed shadow-sm transition-colors duration-300">
          {t.senses.hearing}
        </span>
      </div>

      {/* ── 7. Sense 3: Mid-Right: Nose / الشم (Green) ───────────────── */}
      <div
        className="absolute flex flex-col items-center gap-1.5 group cursor-pointer z-30 animate-float-node-3"
        style={{
          left: "73%",
          top: "50%",
          width: "20%",
        }}
        onMouseEnter={() => setActiveSense("smell")}
        onMouseLeave={() => setActiveSense(null)}
      >
        <div className="w-full aspect-square rounded-full overflow-hidden shadow-card group-hover:shadow-[0_12px_28px_rgba(177,221,48,0.45)] group-hover:scale-112 group-hover:ring-4 group-hover:ring-[#B1DD30]/40 transition-all duration-300 bg-white flex items-center justify-center">
          <Image
            src="/images/senses/nose.png"
            alt={t.senses.smell}
            width={104}
            height={104}
            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-108"
          />
        </div>
        <span className="bg-white border border-brand-border group-hover:border-[#517B11] group-hover:text-[#517B11] rounded-full px-3 py-0.5 text-xs sm:text-sm font-bold text-brand-text whitespace-nowrap leading-relaxed shadow-sm transition-colors duration-300">
          {t.senses.smell}
        </span>
      </div>

      {/* ── 8. Sense 4: Bottom: Mouth / التذوق (Cyan/Teal) ──────────── */}
      <div
        className="absolute flex flex-col items-center gap-1.5 group cursor-pointer z-30 animate-float-node-4"
        style={{
          left: "40%",
          top: "70%",
          width: "20%",
        }}
        onMouseEnter={() => setActiveSense("taste")}
        onMouseLeave={() => setActiveSense(null)}
      >
        <div className="w-full aspect-square rounded-full overflow-hidden shadow-card group-hover:shadow-[0_12px_28px_rgba(131,221,230,0.5)] group-hover:scale-112 group-hover:ring-4 group-hover:ring-[#83DDE6]/40 transition-all duration-300 bg-white flex items-center justify-center">
          <Image
            src="/images/senses/mouth.png"
            alt={t.senses.taste}
            width={104}
            height={104}
            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-108"
          />
        </div>
        <span className="bg-white border border-brand-border group-hover:border-[#327790] group-hover:text-[#327790] rounded-full px-3 py-0.5 text-xs sm:text-sm font-bold text-brand-text whitespace-nowrap leading-relaxed shadow-sm transition-colors duration-300">
          {t.senses.taste}
        </span>
      </div>

      {/* ── 9. Sense 5: Mid-Left: Hand / اللمس (Purple) ─────────────── */}
      <div
        className="absolute flex flex-col items-center gap-1.5 group cursor-pointer z-30 animate-float-node-5"
        style={{
          left: "7%",
          top: "50%",
          width: "20%",
        }}
        onMouseEnter={() => setActiveSense("touch")}
        onMouseLeave={() => setActiveSense(null)}
      >
        <div className="w-full aspect-square rounded-full overflow-hidden shadow-card group-hover:shadow-[0_12px_28px_rgba(175,137,246,0.45)] group-hover:scale-112 group-hover:ring-4 group-hover:ring-[#AF89F6]/40 transition-all duration-300 bg-white flex items-center justify-center">
          <Image
            src="/images/senses/hand.png"
            alt={t.senses.touch}
            width={104}
            height={104}
            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-108"
          />
        </div>
        <span className="bg-white border border-brand-border group-hover:border-[#5E378F] group-hover:text-[#5E378F] rounded-full px-3 py-0.5 text-xs sm:text-sm font-bold text-brand-text whitespace-nowrap leading-relaxed shadow-sm transition-colors duration-300">
          {t.senses.touch}
        </span>
      </div>
    </div>
  );
};
