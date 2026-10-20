import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { PrivacyClientView } from "@/components/views/PrivacyClientView";

export const metadata: Metadata = {
  title: "سياسة الخصوصية وسرية البيانات | Privacy Policy",
  description:
    "التزام مركز فروق فردية بالسرية التامة لبيانات الأطفال وأسرهم وسياسة الخصوصية المعتمدة في الجلسات والاستشارات.",
  alternates: {
    canonical: `${siteConfig.url}/privacy/`,
  },
  openGraph: {
    title: "سياسة الخصوصية وسرية البيانات | فروق فردية",
    description:
      "التزام مركز فروق فردية بالسرية التامة لبيانات الأطفال وأسرهم وسياسة الخصوصية المعتمدة في الجلسات والاستشارات.",
    url: `${siteConfig.url}/privacy/`,
    siteName: siteConfig.name,
    locale: "ar_EG",
    type: "website",
  },
};

export default function PrivacyPage() {
  return <PrivacyClientView />;
}
