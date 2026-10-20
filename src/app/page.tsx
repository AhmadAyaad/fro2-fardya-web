import React from "react";
import { generalFaqsAr } from "@/data/faqs";
import { generateFAQSchema } from "@/lib/seo";
import { HeroSection } from "@/components/sections/HeroSection";
import { ApproachSection } from "@/components/sections/ApproachSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { ArticlesSection } from "@/components/sections/ArticlesSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaBand } from "@/components/sections/CtaBand";

export default function HomePage() {
  const faqSchema = generateFAQSchema(
    generalFaqsAr.map((f) => ({ q: f.q, a: f.a }))
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HeroSection />
      <ApproachSection />
      <ServicesSection />
      <ProcessSection />
      <WhyUsSection />
      <ArticlesSection />
      <FaqSection />
      <CtaBand />
    </>
  );
}
