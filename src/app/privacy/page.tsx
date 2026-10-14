import React from "react";
import type { Metadata } from "next";
import { PrivacyClientView } from "@/components/views/PrivacyClientView";

export const metadata: Metadata = {
  title: "سياسة الخصوصية وسرية البيانات | Privacy Policy",
  description:
    "التزام مركز فروق فردية بالسرية التامة لبيانات الأطفال وأسرهم وسياسة الخصوصية المعتمدة في الجلسات والاستشارات.",
};

export default function PrivacyPage() {
  return <PrivacyClientView />;
}
