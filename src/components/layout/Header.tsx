"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { getSiteConfig } from "@/data/site";
import { getServices } from "@/data/services";
import { useLanguage } from "@/i18n/LanguageContext";
import {
  IconChevronDown,
  IconMenu,
  IconClose,
  IconArrowStart,
  IconWhatsapp,
  IconGlobe,
  IconSenseMouth,
  IconSpeech,
  IconBook,
  IconSprout,
  IconBlocks,
  IconFamily,
} from "@/components/ui/Icons";

const getServiceIcon = (iconName: string, size = 18, color?: string) => {
  switch (iconName) {
    case "speech":
    case "taste":
      return <IconSenseMouth size={size} color={color || "#206B8F"} />;
    case "book":
      return <IconBook size={size} color={color} />;
    case "sprout":
      return <IconSprout size={size} color={color} />;
    case "blocks":
      return <IconBlocks size={size} color={color} />;
    case "family":
      return <IconFamily size={size} color={color} />;
    default:
      return null;
  }
};

export const Header: React.FC = () => {
  const pathname = usePathname();
  const { locale, toggleLocale, t } = useLanguage();
  const site = getSiteConfig(locale);
  const currentServices = getServices(locale);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 150);
  };

  // Close dropdown on outside click or Escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setServicesDropdownOpen(false);
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
      if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    };
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const isServicesActive = pathname.startsWith("/services");
  const isAboutActive = pathname === "/about";
  const isArticlesActive = pathname.startsWith("/articles");
  const isFaqActive = pathname === "/faq";
  const isContactActive = pathname === "/contact";

  return (
    <header className="sticky top-0 z-40 bg-brand-bg border-b border-brand-border/80 shadow-[0_2px_12px_rgba(44,56,77,0.04)]">
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:start-4 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-brand-text focus:text-white focus:rounded-sm focus:shadow-lg"
      >
        {t.nav.skipToContent}
      </a>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between gap-3 lg:gap-5">
        {/* Brand Logo & Name */}
        <Link
          href="/"
          className="flex items-center gap-3 text-brand-text group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded-xl shrink-0"
          aria-label={`${site.name} — ${t.nav.home}`}
        >
          <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl overflow-hidden shrink-0 border border-brand-border/80 shadow-xs bg-white transition-transform duration-200 group-hover:scale-105 group-hover:shadow-sm">
            <Image
              src="/images/logo.jpg"
              alt={site.name}
              width={48}
              height={48}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-lg sm:text-xl font-bold leading-tight text-brand-text tracking-tight group-hover:text-primary transition-colors truncate">
              {site.name}
            </span>
            <span className="text-[11px] sm:text-xs text-brand-text-muted leading-tight hidden md:block max-w-[290px] xl:max-w-none truncate xl:whitespace-normal">
              {t.nav.centerSubtitle}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm xl:text-[15px] font-medium text-brand-text"
          aria-label={t.nav.menuOpen}
        >
          {/* Services with Dropdown */}
          <div
            className="relative"
            ref={dropdownRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => setServicesDropdownOpen((prev) => !prev)}
              aria-expanded={servicesDropdownOpen}
              aria-haspopup="true"
              className={`flex items-center gap-1.5 px-3 py-2 rounded-full whitespace-nowrap transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary cursor-pointer ${
                isServicesActive
                  ? "text-primary font-bold bg-primary/10 shadow-xs"
                  : servicesDropdownOpen
                  ? "text-primary bg-brand-bg-alt/80"
                  : "text-brand-text hover:text-primary hover:bg-black/[0.03]"
              }`}
            >
              <span>{t.nav.services}</span>
              <IconChevronDown
                size={14}
                className={`transition-transform duration-200 ${
                  servicesDropdownOpen ? "rotate-180 text-primary" : "opacity-60"
                }`}
              />
            </button>

            {/* Dropdown Menu */}
            {servicesDropdownOpen && (
              <div className="absolute start-0 top-full mt-2 w-[340px] bg-white rounded-2xl border border-brand-border shadow-[0_14px_38px_rgba(44,56,77,0.15)] p-2 z-50 animate-fadeIn">
                <div className="px-3 py-2 border-b border-brand-border/50 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-brand-text-muted tracking-wider uppercase">
                    {t.servicesSection.tag}
                  </span>
                  <span className="text-[11px] font-medium text-brand-text-muted/70">
                    {locale === "ar" ? `${currentServices.length} خدمات متخصصة` : `${currentServices.length} Specialized Services`}
                  </span>
                </div>
                <div className="py-1 space-y-1">
                  {currentServices.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      onClick={() => setServicesDropdownOpen(false)}
                      className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-brand-bg transition-all duration-150"
                    >
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5 transition-transform duration-150 group-hover:scale-105 shadow-xs"
                        style={{
                          backgroundColor: service.colors.soft,
                          color: service.colors.border,
                        }}
                      >
                        {getServiceIcon(service.iconName, 18, service.colors.border)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-bold text-sm text-brand-text group-hover:text-primary transition-colors flex items-center justify-between">
                          <span className="truncate">{service.title}</span>
                          <span
                            className="w-2 h-2 rounded-full shrink-0 ms-2"
                            style={{ backgroundColor: service.colors.fill }}
                          />
                        </div>
                        <div className="text-xs text-brand-text-muted mt-0.5 line-clamp-1">
                          {service.tagline}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="pt-2 px-3 pb-1 border-t border-brand-border/50">
                  <Link
                    href="/services"
                    onClick={() => setServicesDropdownOpen(false)}
                    className="group text-xs font-bold text-primary hover:text-primary-hover flex items-center justify-between py-1.5 transition-colors"
                  >
                    <span>{t.footer.allServicesLink}</span>
                    <IconArrowStart
                      size={14}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/about"
            className={`px-3 py-2 rounded-full whitespace-nowrap transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary ${
              isAboutActive
                ? "text-primary font-bold bg-primary/10 shadow-xs"
                : "text-brand-text hover:text-primary hover:bg-black/[0.03]"
            }`}
          >
            {t.nav.about}
          </Link>

          <Link
            href="/articles"
            className={`px-3 py-2 rounded-full whitespace-nowrap transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary ${
              isArticlesActive
                ? "text-primary font-bold bg-primary/10 shadow-xs"
                : "text-brand-text hover:text-primary hover:bg-black/[0.03]"
            }`}
          >
            {t.nav.articles}
          </Link>

          <Link
            href="/faq"
            className={`px-3 py-2 rounded-full whitespace-nowrap transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary ${
              isFaqActive
                ? "text-primary font-bold bg-primary/10 shadow-xs"
                : "text-brand-text hover:text-primary hover:bg-black/[0.03]"
            }`}
          >
            {t.nav.faq}
          </Link>

          <Link
            href="/contact"
            className={`px-3 py-2 rounded-full whitespace-nowrap transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary ${
              isContactActive
                ? "text-primary font-bold bg-primary/10 shadow-xs"
                : "text-brand-text hover:text-primary hover:bg-black/[0.03]"
            }`}
          >
            {t.nav.contact}
          </Link>
        </nav>

        {/* Right Actions: Language Switcher, Desktop CTA & Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Language Switcher Button (Desktop & Mobile) */}
          <button
            type="button"
            onClick={toggleLocale}
            aria-label={locale === "ar" ? "Switch language to English" : "التبديل إلى اللغة العربية"}
            title={locale === "ar" ? "Switch to English" : "التبديل إلى العربية"}
            className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-brand-border bg-white text-xs font-semibold text-brand-text hover:border-primary/40 hover:text-primary hover:bg-primary/[0.04] transition-all shadow-xs cursor-pointer select-none active:scale-95 whitespace-nowrap shrink-0"
          >
            <IconGlobe size={15} className="text-brand-text-muted group-hover:text-primary transition-colors shrink-0" />
            <span className={locale === "en" ? "font-arabic font-bold text-[13px] leading-none" : "font-semibold"}>
              {locale === "ar" ? "English" : "العربية"}
            </span>
          </button>

          {/* Desktop CTA Button */}
          <Link
            href="/contact"
            className="hidden lg:inline-flex items-center justify-center font-bold text-white bg-primary hover:bg-primary-hover px-4 xl:px-5 py-2.5 rounded-full shadow-cta hover:shadow-lg transition-all text-xs xl:text-sm focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-secondary whitespace-nowrap active:scale-95 shrink-0"
          >
            {t.nav.bookAssessment}
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? t.nav.menuClose : t.nav.menuOpen}
            aria-expanded={mobileMenuOpen}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-white border border-brand-border text-brand-text hover:bg-brand-bg transition-colors shadow-xs active:scale-95 shrink-0"
          >
            {mobileMenuOpen ? <IconClose size={20} /> : <IconMenu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 bottom-0 top-[65px] sm:top-[73px] z-50 bg-[#FBF5E2] flex flex-col lg:hidden overflow-y-auto px-5 py-6 animate-fadeIn pb-32">
          <div className="w-full max-w-lg mx-auto flex flex-col gap-4">
            {/* Mobile Language Switcher Card */}
            <div className="p-3.5 bg-white rounded-2xl border border-brand-border shadow-xs flex items-center justify-between">
              <span className="text-sm font-semibold text-brand-text flex items-center gap-2">
                <IconGlobe size={18} className="text-primary" />
                <span>{locale === "ar" ? "اللغة: العربية" : "Language: English"}</span>
              </span>
              <button
                type="button"
                onClick={() => {
                  toggleLocale();
                  setMobileMenuOpen(false);
                }}
                className="text-xs font-bold px-3 py-1.5 rounded-full bg-primary/10 hover:bg-primary/15 text-primary border border-primary/20 transition-all active:scale-95"
              >
                {locale === "ar" ? (
                  "Switch to English"
                ) : (
                  <span className="font-arabic font-bold text-xs">التحويل للعربية</span>
                )}
              </button>
            </div>

            {/* Services Section in Mobile */}
            <div className="p-4 bg-white rounded-2xl border border-brand-border shadow-xs space-y-3">
              <div className="text-xs font-bold text-brand-text-muted uppercase tracking-wider">
                {t.nav.services}
              </div>
              <div className="space-y-2">
                {currentServices.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-brand-bg transition-colors group"
                  >
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 shadow-xs"
                      style={{
                        backgroundColor: service.colors.soft,
                        color: service.colors.border,
                      }}
                    >
                      {getServiceIcon(service.iconName, 18, service.colors.border)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-sm text-brand-text group-hover:text-primary transition-colors flex items-center justify-between">
                        <span>{service.title}</span>
                        <span
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: service.colors.fill }}
                        />
                      </div>
                      <div className="text-xs text-brand-text-muted line-clamp-1">
                        {service.tagline}
                      </div>
                    </div>
                  </Link>
                ))}
                <div className="pt-2 border-t border-brand-border/60">
                  <Link
                    href="/services"
                    className="flex items-center justify-between text-xs font-bold text-primary hover:text-primary-hover py-1"
                  >
                    <span>{t.footer.allServicesLink}</span>
                    <IconArrowStart size={14} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Main Links Card */}
            <div className="p-3 bg-white rounded-2xl border border-brand-border shadow-xs flex flex-col divide-y divide-brand-border/50">
              <Link
                href="/about"
                className={`py-3 px-3 rounded-xl hover:bg-brand-bg transition-colors font-semibold text-base ${
                  isAboutActive ? "text-primary font-bold bg-primary/5" : "text-brand-text"
                }`}
              >
                {t.nav.about}
              </Link>

              <Link
                href="/articles"
                className={`py-3 px-3 rounded-xl hover:bg-brand-bg transition-colors font-semibold text-base ${
                  isArticlesActive ? "text-primary font-bold bg-primary/5" : "text-brand-text"
                }`}
              >
                {t.nav.articles}
              </Link>

              <Link
                href="/faq"
                className={`py-3 px-3 rounded-xl hover:bg-brand-bg transition-colors font-semibold text-base ${
                  isFaqActive ? "text-primary font-bold bg-primary/5" : "text-brand-text"
                }`}
              >
                {t.nav.faq}
              </Link>

              <Link
                href="/contact"
                className={`py-3 px-3 rounded-xl hover:bg-brand-bg transition-colors font-semibold text-base ${
                  isContactActive ? "text-primary font-bold bg-primary/5" : "text-brand-text"
                }`}
              >
                {t.nav.contact}
              </Link>
            </div>

            {/* Mobile CTA Buttons */}
            <div className="space-y-2.5 pt-2">
              <Link
                href="/contact"
                className="w-full py-3.5 text-center text-sm sm:text-base font-bold text-white bg-primary hover:bg-primary-hover rounded-full shadow-cta block transition-transform active:scale-98"
              >
                {t.nav.bookAssessment}
              </Link>

              <a
                href={`https://wa.me/${site.contact.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                  locale === "ar"
                    ? "مرحبًا، أود الاستفسار عن حجز تقييم لطفلي في مركز فروق فردية"
                    : "Hello, I would like to inquire about booking an assessment for my child at Forooq Fardya"
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 text-center text-sm font-bold text-white bg-[#25D366] hover:bg-[#1EBE5D] rounded-full shadow-sm flex items-center justify-center gap-2 transition-transform active:scale-98"
              >
                <IconWhatsapp size={18} />
                <span>{t.footer.whatsappAction}</span>
              </a>
            </div>

            <div className="pt-4 text-center text-xs text-brand-text-muted leading-relaxed">
              {site.disclaimer}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

