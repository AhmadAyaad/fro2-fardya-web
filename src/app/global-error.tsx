"use client";

import * as Sentry from "@sentry/nextjs";
import { useEffect } from "react";

export default function GlobalError({
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
    <html lang="ar" dir="rtl">
      <body className="antialiased min-h-screen flex items-center justify-center bg-[#FDF8FA] text-[#1E293B] p-4 font-sans">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl border border-gray-100 p-8 text-center space-y-6">
          <div className="w-16 h-16 bg-red-50 text-red-600 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
            !
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">عذراً، حدث خطأ غير متوقع</h1>
            <p className="text-gray-600 text-sm leading-relaxed">
              تم تسجيل تفاصيل هذا الخطأ لمتابعته وحله في أسرع وقت ممكن. يمكنك المحاولة مرة أخرى أو العودة لاحقاً.
            </p>
          </div>
          <button
            type="button"
            onClick={() => reset()}
            className="w-full inline-flex justify-center items-center py-3 px-6 rounded-xl bg-[#B0285C] hover:bg-[#90204a] text-white font-medium transition-colors shadow-sm"
          >
            إعادة المحاولة
          </button>
        </div>
      </body>
    </html>
  );
}
