"use client";

import { sendGAEvent } from "@next/third-parties/google";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: Object[];
    clarity?: (action: string, ...args: any[]) => void;
  }
}

/**
 * Dispatches an event to both Google Analytics 4 and Microsoft Clarity.
 * Safely handles cases where analytics tags are not yet loaded or running in local dev.
 */
export function trackEvent(eventName: string, params: Record<string, any> = {}) {
  if (typeof window === "undefined") return;

  try {
    // 1. Google Analytics 4
    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, params);
    } else if (Array.isArray(window.dataLayer)) {
      sendGAEvent("event", eventName, params);
    }

    // 2. Microsoft Clarity
    if (typeof window.clarity === "function") {
      window.clarity("event", eventName);

      // Set contextual Clarity session tags if relevant parameters are provided
      if (params.location) {
        window.clarity("set", `${eventName}_location`, String(params.location));
      }
      if (params.service) {
        window.clarity("set", "selected_service", String(params.service));
      }
    }

    // 3. Local Development Logging for instant verification
    if (process.env.NODE_ENV === "development") {
      console.log(`%c[Analytics] ${eventName}`, "color: #B0285C; font-weight: bold;", params);
    }
  } catch (err) {
    if (process.env.NODE_ENV === "development") {
      console.warn("[Analytics] Error dispatching event:", err);
    }
  }
}

/**
 * Track WhatsApp interaction clicks (Core conversion for Egypt clinic)
 */
export function trackWhatsAppClick(location: string, label?: string) {
  trackEvent("click_whatsapp", {
    location,
    label: label || "direct_inquiry",
  });
}

/**
 * Track direct phone calls (tel: links)
 */
export function trackPhoneClick(phoneNumber: string, location: string) {
  trackEvent("click_phone", {
    phone_number: phoneNumber,
    location,
  });
}

/**
 * Track Evaluation / Consultation Form Submissions
 */
export function trackFormSubmission(data: {
  formName: string;
  service?: string;
  childAge?: string;
  success: boolean;
}) {
  trackEvent("form_submit", {
    form_name: data.formName,
    service: data.service || "general",
    child_age: data.childAge || "unspecified",
    success: data.success,
  });
}

/**
 * Track Key CTA Button clicks (e.g., Book Assessment)
 */
export function trackCtaClick(name: string, location: string, destination: string = "/contact") {
  trackEvent("click_cta", {
    cta_name: name,
    location,
    destination,
  });
}

/**
 * Track Language Switch (Arabic <-> English)
 */
export function trackLanguageChange(newLocale: string) {
  trackEvent("change_language", {
    new_language: newLocale,
  });

  if (typeof window !== "undefined" && typeof window.clarity === "function") {
    try {
      window.clarity("set", "user_locale", newLocale);
    } catch {
      // ignore
    }
  }
}
