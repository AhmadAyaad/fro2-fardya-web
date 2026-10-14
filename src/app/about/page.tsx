import React from "react";
import type { Metadata } from "next";
import { AboutClientView } from "@/components/views/AboutClientView";

export const metadata: Metadata = {
  title: "من نحن — مركز فروق فردية | About Us",
  description:
    "تعرف على مركز فروق فردية: فلسفتنا في التأهيل الفردي للأطفال، منهجيتنا في التخاطب وصعوبات التعلم وتنمية المهارات، وقيمنا مع الأسرة.",
};

export default function AboutPage() {
  return <AboutClientView />;
}
