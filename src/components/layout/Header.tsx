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
} from "@/components/ui/Icons";

export const Header: React.FC = () => {
  const pathname = usePathname();
  const { locale, toggleLocale, t } = useLanguage();
  const site = getSiteConfig(locale);
  const currentServices = getServices(locale);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
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

  return (
    <header className="sticky top-0 z-40 bg-brand-bg border-b border-brand-border">
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:start-4 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-brand-text focus:text-white focus:rounded-sm focus:shadow-lg"
      >
        {t.nav.skipToContent}
      </a>

      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 py-3.5 flex items-center justify-between gap-4">
        {/* Brand Logo & Name */}
        <Link
          href="/"
          className="flex items-center gap-3.5 text-brand-text group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded-sm"
          aria-label={`${site.name} — ${t.nav.home}`}
        >
          <div className="relative w-12 h-12 rounded-sm overflow-hidden shrink-0 border border-brand-border shadow-sm">
            <Image
              src="/images/logo.jpg"
              alt={site.name}
              width={48}
              height={48}
              className="w-full h-full object-cover transition-transform group-hover:scale-105"
              priority
            />
          </div>
          <div>
            <div className="text-xl font-bold leading-tight text-brand-text">
              {site.name}
            </div>
            <div className="text-xs text-brand-text-muted leading-tight hidden sm:block">
              {t.nav.centerSubtitle}
            </div>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-6 lg:gap-7 text-base font-medium text-brand-text"
          aria-label={t.nav.menuOpen}
        >
          {/* Services with Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setServicesDropdownOpen((prev) => !prev)}
              aria-expanded={servicesDropdownOpen}
              aria-haspopup="true"
              className={`flex items-center gap-1.5 py-2 px-1 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded ${
                pathname.startsWith("/services") ? "text-primary font-bold" : ""
              }`}
            >
              <span>{t.nav.services}</span>
              <IconChevronDown
                size={16}
                className={`transition-transform duration-200 ${
                  servicesDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown Menu */}
            {servicesDropdownOpen && (
              <div className="absolute start-0 top-full mt-2 w-72 bg-white rounded-md border border-brand-border shadow-hover py-2 z-50 animate-fadeIn">
                <div className="px-4 py-2 border-b border-brand-border/60">
                  <span className="text-xs font-semibold text-brand-text-muted">
                    {t.servicesSection.tag}
                  </span>
                </div>
                {currentServices.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    onClick={() => setServicesDropdownOpen(false)}
                    className="flex flex-col px-4 py-3 hover:bg-brand-bg transition-colors"
                  >
                    <span className="font-bold text-sm text-brand-text flex items-center justify-between">
                      {service.title}
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: service.colors.fill }}
                      />
                    </span>
                    <span className="text-xs text-brand-text-muted mt-0.5">
                      {service.tagline}
                    </span>
                  </Link>
                ))}
                <div className="pt-2 px-4 border-t border-brand-border/60">
                  <Link
                    href="/services"
                    onClick={() => setServicesDropdownOpen(false)}
                    className="text-xs font-bold text-primary hover:underline flex items-center justify-between py-1"
                  >
                    <span>{t.footer.allServicesLink}</span>
                    <IconArrowStart size={14} />
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/about"
            className={`py-2 px-1 hover:text-primary transition-colors rounded ${
              pathname === "/about" ? "text-primary font-bold" : ""
            }`}
          >
            {t.nav.about}
          </Link>

          <Link
            href="/articles"
            className={`py-2 px-1 hover:text-primary transition-colors rounded ${
              pathname.startsWith("/articles") ? "text-primary font-bold" : ""
            }`}
          >
            {t.nav.articles}
          </Link>

          <Link
            href="/faq"
            className={`py-2 px-1 hover:text-primary transition-colors rounded ${
              pathname === "/faq" ? "text-primary font-bold" : ""
            }`}
          >
            {t.nav.faq}
          </Link>

          <Link
            href="/contact"
            className={`py-2 px-1 hover:text-primary transition-colors rounded ${
              pathname === "/contact" ? "text-primary font-bold" : ""
            }`}
          >
            {t.nav.contact}
          </Link>
        </nav>

        {/* Desktop CTA & Language Switcher & Mobile Toggle */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Language Switcher Button (Desktop & Mobile) */}
          <button
            type="button"
            onClick={toggleLocale}
            aria-label={locale === "ar" ? "Switch language to English" : "التبديل إلى اللغة العربية"}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-brand-border bg-white text-xs font-bold text-brand-text hover:border-primary hover:text-primary transition-all shadow-xs cursor-pointer select-none active:scale-95"
          >
            <IconGlobe size={15} color="currentColor" />
            <span className="font-semibold">{locale === "ar" ? "English" : "العربية"}</span>
          </button>

          <Link
            href="/contact"
            className="hidden md:inline-flex items-center justify-center font-semibold text-white bg-primary hover:bg-primary-hover px-5 lg:px-6 py-2.5 rounded-full shadow-cta transition-all text-sm lg:text-base focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-secondary whitespace-nowrap"
          >
            {t.nav.bookAssessment}
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? t.nav.menuClose : t.nav.menuOpen}
            aria-expanded={mobileMenuOpen}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-sm bg-white border border-brand-border text-brand-text hover:bg-brand-bg transition-colors"
          >
            {mobileMenuOpen ? <IconClose size={22} /> : <IconMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[73px] z-50 bg-brand-bg flex flex-col md:hidden overflow-y-auto p-6 animate-fadeIn">
          {/* Mobile Language Switcher Card */}
          <div className="mb-4 p-3 bg-white rounded-lg border border-brand-border flex items-center justify-between">
            <span className="text-sm font-semibold text-brand-text flex items-center gap-2">
              <IconGlobe size={18} />
              <span>{locale === "ar" ? "اللغة: العربية" : "Language: English"}</span>
            </span>
            <button
              type="button"
              onClick={() => {
                toggleLocale();
                setMobileMenuOpen(false);
              }}
              className="text-xs font-bold px-3 py-1.5 rounded-full bg-brand-bg hover:bg-brand-bg-alt text-primary border border-brand-border transition-colors"
            >
              {locale === "ar" ? "Switch to English" : "التحويل للعربية"}
            </button>
          </div>

          <nav className="flex flex-col gap-3 text-lg font-semibold text-brand-text">
            {/* Services Accordion in Mobile */}
            <div className="border-b border-brand-border pb-4">
              <div className="text-brand-text-muted text-sm font-normal mb-2">
                {t.nav.services}
              </div>
              <div className="space-y-2 ps-3">
                {currentServices.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="flex items-center justify-between py-2 text-base text-brand-text hover:text-primary"
                  >
                    <span>{service.title}</span>
                    <span
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: service.colors.fill }}
                    />
                  </Link>
                ))}
                <Link
                  href="/services"
                  className="inline-block pt-1 text-sm text-primary font-bold"
                >
                  {t.servicesSection.viewAllServices}
                </Link>
              </div>
            </div>

            <Link
              href="/about"
              className="py-3 border-b border-brand-border hover:text-primary"
            >
              {t.nav.about}
            </Link>

            <Link
              href="/articles"
              className="py-3 border-b border-brand-border hover:text-primary"
            >
              {t.nav.articles}
            </Link>

            <Link
              href="/faq"
              className="py-3 border-b border-brand-border hover:text-primary"
            >
              {t.nav.faq}
            </Link>

            <Link
              href="/contact"
              className="py-3 border-b border-brand-border hover:text-primary"
            >
              {t.nav.contact}
            </Link>
          </nav>

          {/* Mobile CTA Buttons */}
          <div className="mt-8 space-y-3">
            <Link
              href="/contact"
              className="w-full py-3.5 text-center text-base font-bold text-white bg-primary hover:bg-primary-hover rounded-full shadow-cta block"
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
              className="w-full py-3 text-center text-sm font-bold text-white bg-[#25D366] hover:bg-[#1EBE5D] rounded-full shadow-sm flex items-center justify-center gap-2"
            >
              <IconWhatsapp size={18} />
              <span>{t.footer.whatsappAction}</span>
            </a>
          </div>

          <div className="mt-auto pt-8 text-center text-xs text-brand-text-muted">
            {site.disclaimer}
          </div>
        </div>
      )}
    </header>
  );
};
