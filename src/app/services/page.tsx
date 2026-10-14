import React from "react";
import type { Metadata } from "next";
import { ServicesClientView } from "@/components/views/ServicesClientView";

export const metadata: Metadata = {
  title: "خدماتنا لدعم نمو طفلك | Our Services",
  description:
    "تعرف على خدمات مركز فروق فردية: التخاطب، صعوبات التعلم، وتنمية المهارات للأطفال من عمر سنتين فأكثر، بخطط فردية تناسب كل طفل.",
};

export default function ServicesPage() {
  return <ServicesClientView />;
}
