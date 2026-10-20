"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getSiteConfig } from "@/data/site";
import { getServices } from "@/data/services";
import { useLanguage } from "@/i18n/LanguageContext";
import { IconWhatsapp, IconPhone, IconPin, IconClock, IconGlobe } from "@/components/ui/Icons";
import { trackWhatsAppClick, trackPhoneClick } from "@/lib/analytics";

export const Footer: React.FC = () => {
  const { locale, toggleLocale, t } = useLanguage();
  const site = getSiteConfig(locale);
  const currentServices = getServices(locale);

  const whatsappMessage =
    locale === "ar"
      ? "مرحبًا، أود الاستفسار عن حجز تقييم لطفلي في مركز فروق فردية"
      : "Hello, I would like to inquire about booking an assessment for my child at Forooq Fardya";

  return (
    <footer className="bg-brand-dark text-[#E9E3CF] pt-16 pb-8 border-t border-brand-border/20">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Col 1: Brand Info (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-4 text-white group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-yellow rounded"
            >
              <div className="relative w-16 h-16 rounded-md overflow-hidden shrink-0 border border-white/20 shadow-md">
                <Image
                  src="/images/logo.jpg"
                  alt={site.name}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="text-2xl font-bold text-white leading-tight">
                  {site.name}
                </div>
                <div className="text-xs text-[#C8CED9] mt-0.5">
                  {t.nav.centerSubtitle}
                </div>
              </div>
            </Link>

            <p className="text-sm sm:text-base text-[#D4DAE5] leading-relaxed max-w-sm">
              {t.footer.tagline}
            </p>

            <div className="pt-2">
              <a
                href={`https://wa.me/${site.contact.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick("footer")}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#25D366] text-white font-semibold text-sm hover:bg-[#1EBE5D] transition-all shadow-sm"
              >
                <IconWhatsapp size={18} />
                <span>{t.footer.whatsappAction}</span>
              </a>
            </div>
          </div>

          {/* Col 2: Services (2 cols on lg) */}
          <nav aria-label={t.footer.servicesTitle} className="lg:col-span-2 space-y-3">
            <h3 className="text-base font-bold text-accent-yellow">{t.footer.servicesTitle}</h3>
            <ul className="space-y-2 text-sm text-[#D4DAE5]">
              {currentServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="hover:text-white hover:underline transition-colors block py-0.5"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="hover:text-accent-yellow hover:underline transition-colors block py-0.5 text-xs text-accent-yellow font-semibold"
                >
                  {t.footer.allServicesLink}
                </Link>
              </li>
            </ul>
          </nav>

          {/* Col 3: Center Links (2 cols on lg) */}
          <nav aria-label={t.footer.quickLinksTitle} className="lg:col-span-2 space-y-3">
            <h3 className="text-base font-bold text-accent-yellow">{t.footer.quickLinksTitle}</h3>
            <ul className="space-y-2 text-sm text-[#D4DAE5]">
              <li>
                <Link href="/about" className="hover:text-white hover:underline transition-colors block py-0.5">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link href="/october" className="text-accent-yellow hover:text-white hover:underline transition-colors block py-0.5 font-medium">
                  {locale === "ar" ? "📍 فرع مدينة ٦ أكتوبر" : "📍 6th of October Branch"}
                </Link>
              </li>
              <li>
                <Link href="/articles" className="hover:text-white hover:underline transition-colors block py-0.5">
                  {t.nav.articles}
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white hover:underline transition-colors block py-0.5">
                  {t.nav.faq}
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white hover:underline transition-colors block py-0.5">
                  {t.common.privacy}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white hover:underline transition-colors block py-0.5">
                  {t.nav.contact}
                </Link>
              </li>
              <li>
                <a
                  href="/llms.txt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white hover:underline transition-colors block py-0.5 text-xs text-[#A8B2C2]"
                  title="LLM Context & Knowledge Base (llms.txt)"
                >
                  {locale === "ar" ? "ملف الذكاء الاصطناعي (llms.txt)" : "AI Context (llms.txt)"}
                </a>
              </li>
            </ul>
          </nav>

          {/* Col 4: Contact details (3 cols on lg) */}
          <address className="not-italic lg:col-span-3 space-y-3">
            <h3 className="text-base font-bold text-accent-yellow">{t.footer.contactTitle}</h3>
            <ul className="space-y-2.5 text-sm text-[#D4DAE5]">
              <li className="flex items-start gap-2.5">
                <IconPhone size={18} className="text-accent-yellow shrink-0 mt-0.5" />
                <a
                  href={`tel:${site.contact.phone}`}
                  onClick={() => trackPhoneClick(site.contact.phone, "footer")}
                  className="hover:text-white hover:underline transition-colors"
                  dir="ltr"
                >
                  {site.contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <IconPin size={18} className="text-accent-yellow shrink-0 mt-0.5" />
                <Link href="/october" className="hover:text-white hover:underline transition-colors">
                  {site.contact.address}
                </Link>
              </li>
              <li className="flex items-start gap-2.5">
                <IconClock size={18} className="text-accent-yellow shrink-0 mt-0.5" />
                <span>{site.contact.workingHours}</span>
              </li>
            </ul>
          </address>
        </div>

        {/* Bottom Bar: Copyright & Disclaimer & Language Toggle */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A8B2C2] text-center sm:text-start">
          <small className="text-xs text-[#A8B2C2] block sm:inline">{site.copyright}</small>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={toggleLocale}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white transition-colors cursor-pointer text-xs"
            >
              <IconGlobe size={14} />
              <span className={locale === "en" ? "font-arabic font-bold text-[13px] leading-none" : ""}>
                {locale === "ar" ? "English" : "العربية"}
              </span>
            </button>
            <small className="max-w-md hidden md:block text-xs text-[#A8B2C2]">{site.disclaimer}</small>
          </div>
        </div>
      </div>
    </footer>
  );
};
