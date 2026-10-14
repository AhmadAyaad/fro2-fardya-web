import React from "react";
import type { Metadata } from "next";
import { ArticlesClientView } from "@/components/views/ArticlesClientView";

export const metadata: Metadata = {
  title: "المقالات والمراجع — إرشادات توعوية للأسرة | Articles & Resources",
  description:
    "مقالات وإرشادات هادئة ومبسطة للآباء والأمهات في التخاطب وصعوبات التعلم وتنمية المهارات، لمساعدتكم على دعم طفلكم في البيت.",
};

export default function ArticlesPage() {
  return <ArticlesClientView />;
}
