"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { SenseNode } from "@/components/ui/SenseNode";
import { CtaBand } from "@/components/sections/CtaBand";
import {
  IconHeart,
  IconUsers,
  IconTarget,
  IconCheck,
} from "@/components/ui/Icons";

export const AboutClientView: React.FC = () => {
  const { locale, t } = useLanguage();

  const isAr = locale === "ar";

  const content = {
    badge: isAr ? "عن المركز" : "About the Center",
    title: isAr ? "من نحن — مركز فروق فردية" : "About Us — Forooq Fardya Center",
    intro: isAr
      ? "مركز متخصص في دعم الأطفال وتأهيلهم في مجالات التخاطب وصعوبات التعلم وتنمية المهارات، تأسسنا على قناعة راسخة بأن كل طفل يحمل في داخله إمكانات عظيمة تنتظر من يفهمها ويوجهها بالصبر والمحبة."
      : "A specialized center supporting and rehabilitating children in Speech Therapy, Learning Difficulties, and Skills Development. We were founded on the firm conviction that every child holds immense potential waiting to be understood and nurtured with patience and empathy.",
    philosophyTag: isAr ? "فلسفتنا ومنهجنا" : "Our Philosophy & Ethos",
    whyTitle: isAr ? "لماذا اخترنا اسم «فروق فردية»؟" : "Why the name 'Forooq Fardya' (Individual Differences)?",
    whyP1: isAr
      ? "لأننا كثيرًا ما نرى أطفالًا يُظلمون بمقارنتهم بأقرانهم أو بإخضاعهم لبرامج تعليمية موحدة لا تراعي نمطهم الإدراكي أو سرعة استجابتهم."
      : "Because all too often, children are done a disservice when compared against peers or subjected to standardized molds that disregard their unique cognitive pace and natural response style.",
    whyP2: isAr
      ? "في «فروق فردية»، نقطة البداية دائمًا هي طفلك أنت: كيف ينتبه؟ كيف يعبّر؟ ما الذي يسعده؟ وما الذي يشعره بالإحباط؟ ومن خلال هذا الفهم الدقيق، نبني خطة متخصصة تصاحبه في رحلة نموه خطوة بخطوة."
      : "At Forooq Fardya, the starting point is always your child: How do they attend? How do they communicate? What sparks joy, and what causes frustration? Through this deep, patient understanding, we create an individualized plan guiding their developmental journey step-by-step.",
    principlesTitle: isAr ? "مبادئنا الأساسية مع كل طفل وأسرة:" : "Core Guiding Principles With Every Child & Family:",
    principles: isAr
      ? [
          "لا تشخيصات متسرعة أو أحكام مسبقة؛ التقييم عملية هادئة ومتأنية.",
          "الأسرة شريك في الجلسات والمعرفة وليست مجرد متلقية للنتائج.",
          "اللعب الهادف والتحفيز الإيجابي هما الوسيلتان الأكثر فاعلية للتعلم.",
        ]
      : [
          "No rushed labels or premature assumptions; evaluation is a calm, meticulous listening process.",
          "Parents are integral partners in sessions and knowledge, never mere recipients of reports.",
          "Structured, joyful play and positive reinforcement are the most effective bridges to lasting learning.",
        ],
    valuesTag: isAr ? "قيمنا الراسخة" : "Our Core Values",
    valuesTitle: isAr ? "ما نلتزم به تجاه طفلكم وتجاهكم" : "Our Unwavering Commitment to Your Child and Family",
    teamTag: isAr ? "الكفاءات المهنية" : "Professional Expertise",
    teamTitle: isAr ? "فريق العمل التخصصي" : "Our Multidisciplinary Clinical Team",
    teamDesc: isAr
      ? "يضم مركز فروق فردية نخبة من الأخصائيين المعتمدين في التخاطب واضطرابات النطق، وصعوبات التعلم الأكاديمية والنمائية، وتعديل السلوك وتنمية المهارات الإدراكية والحركية."
      : "Forooq Fardya brings together certified clinical specialists across Speech-Language Pathology, Academic & Developmental Learning Disabilities, Behavioral Guidance, and Sensory-Motor Skills Development.",
    teamBadge: isAr ? "تخصص معتمد" : "Certified Specialty",
    teamCertified: isAr ? "مرخص ومؤهل من الجهات المهنية المختصة" : "Accredited and licensed by professional bodies",
    teamNotice: isAr
      ? "ℹ يحرص المركز على عرض بيانات الكوادر المعتمدة والمؤهلات الموثقة بدقة وشفافية لتعزيز ثقة أولياء الأمور."
      : "ℹ We maintain complete clinical transparency and verified certifications to ensure peace of mind for every family.",
    ctaTitle: isAr ? "تفضّلون زيارة المركز والتعرّف علينا مباشرة؟" : "Would you like to visit us and connect in person?",
    ctaSubtitle: isAr ? "نسعد باستقبالكم والإجابة عن كافة استفساراتكم بكل رحابة صدر." : "We warmly welcome your family and look forward to answering all your questions.",
  };

  const values = [
    {
      title: isAr ? "الفردية واحترام الاختلاف" : "Individuality & Honoring Differences",
      desc: isAr
        ? "نؤمن بعمق أن لكل طفل مساره الخاص في النمو وطريقته الفريدة في التعلّم. لا نؤمن بالقوالب المسبقة، بل نبتكر لكل طفل حلوله التي تناسبه."
        : "We firmly believe each child follows their own developmental timeline and learning style. We reject rigid molds, inventing customized solutions tailored to each child.",
      node: "yellow" as const,
      icon: <IconHeart size={28} color="#2C384D" />,
    },
    {
      title: isAr ? "الشفافية الكاملة مع الأسرة" : "Complete Transparency with Families",
      desc: isAr
        ? "أنتم شركاء القرار في كل خطوة. نوضح لكم التقييم بلغة بسيطة وصادقة، ونشارككم تقارير دورية مفهومة بعيدًا عن الغموض."
        : "You are equal decision-makers at every stage. We present assessments in clear, compassionate language and provide accessible regular updates free from confusing jargon.",
      node: "cyan" as const,
      icon: <IconUsers size={28} color="#2C384D" />,
    },
    {
      title: isAr ? "القياس بالأهداف الملموسة" : "Tangible, Measurable Milestones",
      desc: isAr
        ? "نعمل بناءً على خطة محددة ذات أهداف واضحة يلمس الأهل نتائجها في روتين طفلهم اليومي وثقته بنفسه وتواصله."
        : "We work against concrete, observable goals whose outcomes parents can clearly feel in their child's daily routine, confidence, and interactions.",
      node: "green" as const,
      icon: <IconTarget size={28} color="#2C384D" />,
    },
    {
      title: isAr ? "البيئة الآمنة والمحفزة" : "Safe, Nurturing & Stimulating Space",
      desc: isAr
        ? "نهيئ للطفل مكانًا مريحًا يشعر فيه بالحب والتقبل والأمان، لأن الطفل لا يتعلّم ولا يثمر إلا عندما يشعر بأنه مرحب به."
        : "We provide an unhurried, welcoming haven where children feel cherished, accepted, and emotionally safe—the essential foundation for genuine learning.",
      node: "pink" as const,
      icon: <IconCheck size={28} color="#2C384D" />,
    },
  ];

  const specialists = [
    {
      role: isAr
        ? "أخصائي التخاطب واضطرابات النطق والكلام"
        : "Speech-Language Pathologist & Communication Specialist",
      focus: isAr
        ? "تقييم وتأهيل اللغة الاستقبالية والتعبيرية ومخارج الحروف والتأتأة."
        : "Evaluating and rehabilitating receptive and expressive language, articulation, phonology, and fluency.",
      color: "cyan" as const,
    },
    {
      role: isAr
        ? "أخصائي صعوبات التعلم والتربية الخاصة"
        : "Learning Disabilities & Special Education Specialist",
      focus: isAr
        ? "استراتيجيات معالجة صعوبات القراءة (الدسلكسيا) والكتابة والحساب ومهارات التركيز الأكاديمي."
        : "Custom multi-sensory strategies addressing dyslexia, dysgraphia, dyscalculia, and academic organizational stamina.",
      color: "purple" as const,
    },
    {
      role: isAr
        ? "أخصائي تنمية المهارات والتكامل الحسي"
        : "Skills Development & Sensory Integration Specialist",
      focus: isAr
        ? "تطوير الانتباه والتركيز، المهارات الحركية الدقيقة، والاستقلالية اليومية والتفاعل الاجتماعي."
        : "Enhancing sustained attention, fine-motor coordination, sensory self-regulation, and everyday functional autonomy.",
      color: "green" as const,
    },
  ];

  return (
    <div className="pb-16 md:pb-0">
      {/* Header & Breadcrumb */}
      <header className="max-w-[1200px] mx-auto px-5 sm:px-6 pt-8 pb-6">
        <Breadcrumbs items={[{ title: t.nav.about }]} className="mb-6" />

        <div className="max-w-3xl text-start">
          <Badge variant="yellow" className="mb-4">
            {content.badge}
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-[44px] font-bold text-brand-text leading-[1.35]">
            {content.title}
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-brand-text-body leading-[1.95]">
            {content.intro}
          </p>
        </div>
      </header>

      {/* Story & Philosophy Section */}
      <section className="bg-white border-y border-brand-border py-14 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-start space-y-5">
              <span className="text-primary font-bold text-sm tracking-wide block">
                {content.philosophyTag}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-text leading-[1.4]">
                {content.whyTitle}
              </h2>
              <p className="text-base sm:text-lg text-brand-text-body leading-[1.9]">
                {content.whyP1}
              </p>
              <p className="text-base sm:text-lg text-brand-text-body leading-[1.9]">
                {content.whyP2}
              </p>
            </div>

            <aside aria-labelledby="principles-title" className="bg-brand-bg rounded-xl border border-brand-border p-8 sm:p-10 shadow-sm text-start">
              <h3 id="principles-title" className="text-xl font-bold text-brand-text mb-4">
                {content.principlesTitle}
              </h3>
              <ul className="space-y-4">
                {content.principles.map((pr, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary-soft text-primary flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs" aria-hidden="true">
                      ✓
                    </span>
                    <span className="text-sm sm:text-base text-brand-text-body leading-relaxed">
                      {pr}
                    </span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="max-w-[1200px] mx-auto px-5 sm:px-6 py-14 sm:py-20">
        <header className="max-w-2xl text-start mb-12">
          <span className="text-primary font-bold text-sm tracking-wide block mb-2">
            {content.valuesTag}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-text leading-[1.4]">
            {content.valuesTitle}
          </h2>
        </header>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 list-none p-0 m-0">
          {values.map((val, idx) => (
            <li key={idx}>
              <article
                className="bg-white rounded-lg border border-brand-border p-6 sm:p-8 flex items-start gap-5 shadow-sm text-start h-full"
              >
                <SenseNode type={val.node} size={56} className="shrink-0">
                  {val.icon}
                </SenseNode>
                <div>
                  <h3 className="text-xl font-bold text-brand-text mb-2">
                    {val.title}
                  </h3>
                  <p className="text-sm sm:text-base text-brand-text-body leading-[1.85]">
                    {val.desc}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </section>

      {/* Team Section */}
      <section className="bg-white border-y border-brand-border py-14 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6">
          <header className="max-w-2xl text-start mb-8">
            <span className="text-primary font-bold text-sm tracking-wide block mb-2">
              {content.teamTag}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-text leading-[1.4]">
              {content.teamTitle}
            </h2>
            <p className="mt-3 text-base text-brand-text-body leading-[1.85]">
              {content.teamDesc}
            </p>
          </header>

          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 list-none p-0 m-0">
            {specialists.map((spec, i) => (
              <li key={i}>
                <article
                  className="bg-brand-bg rounded-lg border border-brand-border p-6 flex flex-col justify-between text-start h-full"
                >
                  <div>
                    <Badge variant={spec.color} className="text-xs mb-3">
                      {content.teamBadge}
                    </Badge>
                    <h3 className="text-lg font-bold text-brand-text mb-2">
                      {spec.role}
                    </h3>
                    <p className="text-sm text-brand-text-body leading-[1.8]">
                      {spec.focus}
                    </p>
                  </div>
                  <footer className="pt-4 mt-4 border-t border-brand-border/60 text-xs text-brand-text-muted">
                    {content.teamCertified}
                  </footer>
                </article>
              </li>
            ))}
          </ul>

          <aside aria-label={isAr ? "تنبيه توثيق الكوادر" : "Clinical Staff Accreditation Notice"} className="mt-8 bg-[#FEF7D9] border border-[#F0DC8A] rounded-lg p-4 text-start max-w-2xl">
            <p className="text-xs sm:text-sm text-[#604818] leading-relaxed">
              {content.teamNotice}
            </p>
          </aside>
        </div>
      </section>

      {/* CTA Band */}
      <CtaBand
        title={content.ctaTitle}
        subtitle={content.ctaSubtitle}
      />
    </div>
  );
};
