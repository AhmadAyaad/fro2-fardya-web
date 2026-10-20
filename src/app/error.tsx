"use client";

import * as Sentry from "@sentry/nextjs";
import { useEffect } from "react";
import Link from "next/link";
import { AlertCircle, RotateCcw, Home } from "lucide-react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <section className="py-20 px-4">
      <div className="container max-w-lg mx-auto text-center bg-white rounded-2xl border border-brand-border p-8 shadow-sm space-y-6">
        <div className="w-16 h-16 rounded-full bg-red-50 text-red-600 flex items-center justify-center mx-auto">
          <AlertCircle className="w-8 h-8" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-brand-dark mb-2">حدث خطأ غير متوقع</h1>
          <p className="text-brand-muted text-sm leading-relaxed">
            نعتذر عن هذا الخطأ المؤقت، تم إرسال تفاصيل المشكلة تلقائياً لفريق الدعم الفني لمتابعتها وحلها.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <button
            type="button"
            onClick={() => reset()}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-brand-primary text-white font-medium hover:bg-brand-primaryHover transition-colors shadow-sm"
          >
            <RotateCcw className="w-4 h-4" />
            إعادة المحاولة
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gray-100 text-brand-dark font-medium hover:bg-gray-200 transition-colors"
          >
            <Home className="w-4 h-4" />
            الصفحة الرئيسية
          </Link>
        </div>
      </div>
    </section>
  );
}
