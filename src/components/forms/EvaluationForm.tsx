"use client";

import React, { useState } from "react";
import { getSiteConfig } from "@/data/site";
import { useLanguage } from "@/i18n/LanguageContext";
import { IconWhatsapp } from "@/components/ui/Icons";
import { trackFormSubmission, trackWhatsAppClick, trackEvent } from "@/lib/analytics";

interface EvaluationFormProps {
  initialService?: string;
  className?: string;
}

export const EvaluationForm: React.FC<EvaluationFormProps> = ({
  initialService = "",
  className = "",
}) => {
  const { locale, t } = useLanguage();
  const site = getSiteConfig(locale);

  const [parentName, setParentName] = useState("");
  const [phone, setPhone] = useState("");
  const [childAge, setChildAge] = useState("");
  const [service, setService] = useState(initialService);
  const [notes, setNotes] = useState("");
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedUrl, setSubmittedUrl] = useState<string | null>(null);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!parentName.trim()) {
      errs.parentName = t.form.errors.parentName;
    }
    if (!phone.trim()) {
      errs.phone = t.form.errors.phone;
    } else if (phone.trim().length < 8) {
      errs.phone = t.form.errors.phoneLength;
    }
    if (!childAge) {
      errs.childAge = t.form.errors.childAge;
    }
    if (!consent) {
      errs.consent = t.form.errors.consent;
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      trackEvent("form_validation_error", { form_name: "evaluation_assessment_form" });
      return;
    }

    setIsSubmitting(true);

    // Track Form Submission & WhatsApp Hand-off
    trackFormSubmission({
      formName: "evaluation_assessment_form",
      service: service || "general",
      childAge: childAge || undefined,
      success: true,
    });
    trackWhatsAppClick("evaluation_form_submit");

    const messageLines = [
      t.form.whatsappMessagePrefix,
      t.form.whatsappMessageAssessment,
      `• ${t.form.whatsappParentName}: ${parentName.trim()}`,
      `• ${t.form.whatsappPhone}: ${phone.trim()}`,
      `• ${t.form.whatsappAge}: ${childAge}`,
      service ? `• ${t.form.whatsappService}: ${service}` : "",
      notes.trim() ? `• ${t.form.whatsappNotes}: ${notes.trim()}` : "",
    ].filter(Boolean);

    const fullMessage = messageLines.join("\n");
    const targetWhatsapp = site.contact.whatsapp.replace(/[^0-9]/g, "");
    const whatsappUrl = `https://wa.me/${targetWhatsapp}?text=${encodeURIComponent(
      fullMessage
    )}`;

    setSubmittedUrl(whatsappUrl);

    // Attempt to open in a new tab first without restrictive windowFeatures that trigger popup blockers
    let opened = false;
    try {
      const newWin = window.open(whatsappUrl, "_blank");
      if (newWin && !newWin.closed && typeof newWin.closed !== "undefined") {
        newWin.focus();
        opened = true;
      }
    } catch {
      opened = false;
    }

    // Fallback: If blocked by browser popup blocker, redirect directly in current window
    if (!opened) {
      window.location.href = whatsappUrl;
    }

    setTimeout(() => {
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`bg-white rounded-lg border border-brand-border p-6 sm:p-8 shadow-card space-y-6 ${className}`}
      noValidate
    >
      <header className="border-b border-brand-border/60 pb-4">
        <h2 className="text-xl sm:text-2xl font-bold text-brand-text">
          {t.form.title}
        </h2>
        <p className="text-sm text-brand-text-muted mt-1 leading-relaxed">
          {t.form.subtitle}
        </p>
      </header>

      <fieldset className="border-none p-0 m-0 space-y-6">
        <legend className="sr-only">{t.form.title}</legend>

        {/* Parent Name */}
        <div>
        <label
          htmlFor="parentName"
          className="block text-sm font-bold text-brand-text mb-2"
        >
          {t.form.parentNameLabel} <span className="text-primary">*</span>
        </label>
        <input
          type="text"
          id="parentName"
          value={parentName}
          onChange={(e) => setParentName(e.target.value)}
          placeholder={t.form.parentNamePlaceholder}
          className={`w-full px-4 py-3 rounded-sm border ${
            errors.parentName ? "border-[#B3261E] bg-red-50/20" : "border-brand-border"
          } focus:outline-none focus:ring-2 focus:ring-secondary text-brand-text text-base placeholder:text-brand-text-muted/60 transition-colors`}
        />
        {errors.parentName && (
          <p className="text-xs text-[#B3261E] font-semibold mt-1.5 flex items-center gap-1">
            <span>⚠</span> {errors.parentName}
          </p>
        )}
      </div>

      {/* Phone Number */}
      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-bold text-brand-text mb-2"
        >
          {t.form.phoneLabel} <span className="text-primary">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder={t.form.phonePlaceholder}
          dir="ltr"
          className={`w-full px-4 py-3 rounded-sm border ${
            locale === "ar" ? "text-end" : "text-start"
          } ${
            errors.phone ? "border-[#B3261E] bg-red-50/20" : "border-brand-border"
          } focus:outline-none focus:ring-2 focus:ring-secondary text-brand-text text-base placeholder:text-brand-text-muted/60 transition-colors`}
        />
        {errors.phone && (
          <p className="text-xs text-[#B3261E] font-semibold mt-1.5 flex items-center gap-1">
            <span>⚠</span> {errors.phone}
          </p>
        )}
      </div>

      {/* Child Age */}
      <div>
        <label
          htmlFor="childAge"
          className="block text-sm font-bold text-brand-text mb-2"
        >
          {t.form.childAgeLabel} <span className="text-primary">*</span>
        </label>
        <select
          id="childAge"
          value={childAge}
          onChange={(e) => setChildAge(e.target.value)}
          className={`w-full px-4 py-3 rounded-sm border ${
            errors.childAge ? "border-[#B3261E] bg-red-50/20" : "border-brand-border"
          } focus:outline-none focus:ring-2 focus:ring-secondary text-brand-text text-base bg-white transition-colors`}
        >
          <option value="">{t.form.childAgePlaceholder}</option>
          <option value={t.form.ageOption1}>{t.form.ageOption1}</option>
          <option value={t.form.ageOption2}>{t.form.ageOption2}</option>
          <option value={t.form.ageOption3}>{t.form.ageOption3}</option>
          <option value={t.form.ageOption4}>{t.form.ageOption4}</option>
          <option value={t.form.ageOption5}>{t.form.ageOption5}</option>
        </select>
        {errors.childAge && (
          <p className="text-xs text-[#B3261E] font-semibold mt-1.5 flex items-center gap-1">
            <span>⚠</span> {errors.childAge}
          </p>
        )}
      </div>

      {/* Service of interest */}
      <div>
        <label
          htmlFor="service"
          className="block text-sm font-bold text-brand-text mb-2"
        >
          {t.form.serviceLabel}
        </label>
        <select
          id="service"
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="w-full px-4 py-3 rounded-sm border border-brand-border focus:outline-none focus:ring-2 focus:ring-secondary text-brand-text text-base bg-white transition-colors"
        >
          <option value="">{t.form.servicePlaceholder}</option>
          <option value={t.form.serviceSpeech}>{t.form.serviceSpeech}</option>
          <option value={t.form.serviceLearning}>{t.form.serviceLearning}</option>
          <option value={t.form.serviceSkills}>{t.form.serviceSkills}</option>
          <option value={t.form.serviceFoundation}>{t.form.serviceFoundation}</option>
          <option value={t.form.serviceParenting}>{t.form.serviceParenting}</option>
          <option value={t.form.serviceUnsure}>{t.form.serviceUnsure}</option>
        </select>
      </div>

      {/* Notes */}
      <div>
        <label
          htmlFor="notes"
          className="block text-sm font-bold text-brand-text mb-2"
        >
          {t.form.notesLabel}
        </label>
        <textarea
          id="notes"
          rows={3}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder={t.form.notesPlaceholder}
          className="w-full px-4 py-3 rounded-sm border border-brand-border focus:outline-none focus:ring-2 focus:ring-secondary text-brand-text text-base placeholder:text-brand-text-muted/60 transition-colors"
        />
      </div>

      {/* Consent Checkbox */}
      <div>
        <label className="flex items-start gap-3 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className="mt-1 w-5 h-5 rounded text-primary focus:ring-secondary border-brand-border accent-primary cursor-pointer"
          />
          <span className="text-sm text-brand-text-body leading-relaxed">
            {t.form.consentText}
          </span>
        </label>
        {errors.consent && (
          <p className="text-xs text-[#B3261E] font-semibold mt-1.5 flex items-center gap-1">
            <span>⚠</span> {errors.consent}
          </p>
        )}
      </div>
      </fieldset>

      {/* Submit Button & Direct Link */}
      <div className="pt-2 space-y-3">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-4 text-center text-lg font-bold text-white rounded-full shadow-cta transition-all flex items-center justify-center gap-3 cursor-pointer ${
            isSubmitting
              ? "bg-primary/80 opacity-90 cursor-wait"
              : "bg-primary hover:bg-primary-hover active:scale-[0.99]"
          }`}
        >
          <IconWhatsapp size={22} className={isSubmitting ? "animate-pulse" : ""} />
          <span>
            {isSubmitting
              ? (locale === "ar" ? "جاري فتح واتساب..." : "Opening WhatsApp...")
              : t.form.submitButton}
          </span>
        </button>

        {submittedUrl && (
          <div className="p-3.5 bg-[#E4F8FA] border border-[#83DDE6] rounded-xl text-brand-text text-xs sm:text-sm text-center">
            <span className="font-bold text-primary block mb-1">
              ✓ {locale === "ar" ? "تم تجهيز الرسالة بنجاح!" : "Your message is ready!"}
            </span>
            <a
              href={submittedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#25D366] hover:underline font-bold inline-flex items-center gap-1.5"
            >
              <IconWhatsapp size={16} />
              <span>
                {locale === "ar"
                  ? "إذا لم يفتح تطبيق واتساب تلقائيًا، اضغط هنا للمتابعة مباشرة"
                  : "If WhatsApp didn't open automatically, click here to continue"}
              </span>
            </a>
          </div>
        )}
      </div>

      <small className="block text-center text-xs text-brand-text-muted pt-1">
        🔒 {locale === "ar" ? "لن يتم تخزين أو مشاركة بياناتكم إطلاقًا. المحادثة مباشرة مع رقم المركز الرسمي." : "Your data is never stored on servers or shared. Direct chat with our official line."}
      </small>
    </form>
  );
};
