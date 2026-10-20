"use client";

import React, { useState } from "react";
import { getSiteConfig } from "@/data/site";
import { useLanguage } from "@/i18n/LanguageContext";
import { IconWhatsapp } from "@/components/ui/Icons";

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
    if (!validate()) return;

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

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`bg-white rounded-lg border border-brand-border p-6 sm:p-8 shadow-card space-y-6 ${className}`}
      noValidate
    >
      <div className="border-b border-brand-border/60 pb-4">
        <h3 className="text-xl sm:text-2xl font-bold text-brand-text">
          {t.form.title}
        </h3>
        <p className="text-sm text-brand-text-muted mt-1 leading-relaxed">
          {t.form.subtitle}
        </p>
      </div>

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

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          className="w-full py-4 text-center text-lg font-bold text-white bg-primary hover:bg-primary-hover rounded-full shadow-cta transition-transform active:scale-[0.99] flex items-center justify-center gap-3 cursor-pointer"
        >
          <IconWhatsapp size={22} />
          <span>{t.form.submitButton}</span>
        </button>
      </div>

      <div className="text-center text-xs text-brand-text-muted pt-1">
        🔒 {locale === "ar" ? "لن يتم تخزين أو مشاركة بياناتكم إطلاقًا. المحادثة مباشرة مع رقم المركز الرسمي." : "Your data is never stored on servers or shared. Direct chat with our official line."}
      </div>
    </form>
  );
};
