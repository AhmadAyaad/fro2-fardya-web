import React from "react";
import type { Metadata } from "next";
import { ContactClientView } from "@/components/views/ContactClientView";

export const metadata: Metadata = {
  title: "تواصل معنا واحجز تقييمًا لطفلك | Contact Us",
  description:
    "تواصل مع مركز فروق فردية عبر واتساب أو الهاتف أو نموذج التقييم المبدئي لحجز موعد طفلك في التخاطب وصعوبات التعلم وتنمية المهارات.",
};

export default function ContactPage() {
  return <ContactClientView />;
}
