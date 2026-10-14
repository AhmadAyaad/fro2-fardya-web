import React from "react";
import type { Metadata } from "next";
import { FaqClientView } from "@/components/views/FaqClientView";

export const metadata: Metadata = {
  title: "الأسئلة الشائعة حول خدمات المركز والتقييم | FAQ",
  description:
    "إجابات واضحة ومباشرة عن جميع استفسارات أولياء الأمور حول التقييم المبدئي، الجلسات، الأعمار المقبولة، وكيفية حجز موعد في مركز فروق فردية.",
};

export default function FaqPage() {
  return <FaqClientView />;
}
