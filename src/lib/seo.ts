import { siteConfig } from "@/data/site";
import type { Service, ServiceFAQ } from "@/data/services";

// ── Local Business / Organization ────────────────────────────────

// ── WebSite Schema ───────────────────────────────────────────────

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    alternateName: ["Forooq Fardya", "فروق فردية", "مركز فروق فردية"],
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: ["ar", "en"],
    publisher: {
      "@type": "MedicalBusiness",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
      logo: `${siteConfig.url}/images/logo.jpg`,
    },
  };
}

// ── Local Business / Organization ────────────────────────────────

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "LocalBusiness"],
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    alternateName: ["Forooq Fardya", "مركز فروق فردية", "فروق فردية للتخاطب وتنمية المهارات"],
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo.jpg`,
    image: [
      `${siteConfig.url}/images/for2-fardya-logo.jpg`,
      `${siteConfig.url}/images/logo.jpg`,
    ],
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address,
      addressLocality: "6th of October City",
      addressRegion: "Giza",
      addressCountry: "EG",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 29.9602,
      longitude: 30.9274,
    },
    hasMap: "https://maps.google.com/?q=6th+of+October+City+Giza+Egypt",
    sameAs: [
      `https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, "")}`,
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Saturday",
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
        ],
        opens: "12:00",
        closes: "21:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Friday"],
        opens: "00:00",
        closes: "00:00",
      },
    ],
    priceRange: "$$",
    currenciesAccepted: "EGP",
    paymentAccepted: ["Cash", "Mobile Payment"],
    isAcceptingNewPatients: true,
    potentialAction: {
      "@type": "ReserveAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/contact/`,
        inLanguage: ["ar", "en"],
        actionPlatform: [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform",
        ],
      },
      result: {
        "@type": "Reservation",
        name: "حجز موعد تقييم مبدئي للطفل — Book Child Assessment",
      },
    },
    knowsAbout: [
      "Speech-Language Pathology",
      "Pediatric Speech Therapy",
      "Language Delay",
      "Articulation Disorders",
      "Stuttering & Fluency",
      "Child Rehabilitation",
      "Learning Difficulties",
      "Dyslexia",
      "Dyscalculia",
      "Skills Development",
      "Attention Deficit Hyperactivity Disorder (ADHD)",
      "Fine Motor Skills",
      "School Readiness Foundation",
      "Parental Counseling",
      "Behavior Modification",
      "تخاطب",
      "تخاطب أطفال",
      "علاج تأخر الكلام عند الأطفال",
      "تصحيح مخارج الحروف واللدغات",
      "علاج التأتأة والتلعثم",
      "علاج صعوبات التعلم الأكاديمية والنمائية",
      "تنمية مهارات الانتباه والتركيز",
      "تعديل سلوك الأطفال",
      "فرط الحركة وتشتت الانتباه",
      "تأسيس ما قبل المدرسة",
      "إرشاد أولياء الأمور",
    ],
    areaServed: [
      {
        "@type": "City",
        name: "6th of October City",
      },
      {
        "@type": "City",
        name: "Sheikh Zayed City",
      },
      {
        "@type": "City",
        name: "October Gardens",
      },
      {
        "@type": "AdministrativeArea",
        name: "Giza Governorate",
      },
    ],
    medicalSpecialty: [
      "Speech-Language Pathology",
      "Pediatric Rehabilitation",
    ],
    availableService: [
      {
        "@type": "MedicalTherapy",
        name: "Speech Therapy — جلسات التخاطب والنطق",
        url: `${siteConfig.url}/services/speech-therapy/`,
      },
      {
        "@type": "MedicalTherapy",
        name: "Learning Difficulties Support — علاج صعوبات التعلم",
        url: `${siteConfig.url}/services/learning-difficulties/`,
      },
      {
        "@type": "MedicalTherapy",
        name: "Skills Development & Focus — تنمية المهارات والتركيز",
        url: `${siteConfig.url}/services/skills-development/`,
      },
      {
        "@type": "MedicalTherapy",
        name: "Academic Foundation — التهيئة والتأسيس الأكاديمي",
        url: `${siteConfig.url}/services/foundation/`,
      },
      {
        "@type": "MedicalTherapy",
        name: "Parental Guidance & Counseling — إرشاد ودعم أولياء الأمور",
        url: `${siteConfig.url}/services/parent-guidance/`,
      },
    ],
  };
}

// ── October Branch Local Business Schema ─────────────────────────

export function generateOctoberBranchSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "LocalBusiness"],
    "@id": `${siteConfig.url}/october/#branch`,
    name: "مركز فروق فردية — فرع مدينة ٦ أكتوبر الحي الرابع",
    alternateName: "Forooq Fardya Center — 6th of October Branch",
    description:
      "مركز تخاطب وتنمية مهارات وتأهيل صعوبات تعلم للأطفال بمدينة ٦ أكتوبر الحي الرابع. تقييم فردي متخصص وجلسات فردية.",
    url: `${siteConfig.url}/october/`,
    logo: `${siteConfig.url}/images/logo.jpg`,
    image: `${siteConfig.url}/images/for2-fardya-logo.jpg`,
    telephone: siteConfig.contact.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "الحي الرابع، بالقرب من المحاور الرئيسية وميدان الحصري",
      addressLocality: "مدينة ٦ أكتوبر",
      addressRegion: "محافظة الجيزة",
      addressCountry: "EG",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 29.9602,
      longitude: 30.9274,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Saturday",
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
        ],
        opens: "12:00",
        closes: "21:00",
      },
    ],
    priceRange: "$$",
    currenciesAccepted: "EGP",
    isAcceptingNewPatients: true,
    areaServed: [
      "مدينة ٦ أكتوبر",
      "الحي الرابع",
      "الحي المتميز",
      "ميدان الحصري",
      "الشيخ زايد",
      "حدائق أكتوبر",
    ],
  };
}

// ── Service Page Schema ──────────────────────────────────────────

export function generateServiceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalTherapy",
    name: `${service.title} — ${service.tagline}`,
    description: service.purpose,
    url: `${siteConfig.url}/services/${service.slug}/`,
    provider: {
      "@type": "MedicalBusiness",
      name: siteConfig.name,
      url: siteConfig.url,
      telephone: siteConfig.contact.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.contact.address,
        addressLocality: "6th of October City",
        addressRegion: "Giza",
        addressCountry: "EG",
      },
    },
  };
}

// ── FAQPage Schema (rich snippets in Google) ─────────────────────

export function generateFAQSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

// ── BreadcrumbList Schema ────────────────────────────────────────

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// ── Article Schema ───────────────────────────────────────────────

export function generateArticleSchema(article: {
  title: string;
  excerpt: string;
  slug: string;
  date: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    url: `${siteConfig.url}/articles/${article.slug}/`,
    image: [
      `${siteConfig.url}/images/for2-fardya-logo.jpg`,
      `${siteConfig.url}/images/logo.jpg`,
    ],
    inLanguage: "ar",
    datePublished: "2026-01-01",
    dateModified: new Date().toISOString().split("T")[0],
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/images/logo.jpg`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/articles/${article.slug}/`,
    },
  };
}

// ── Enriched Service Meta Description ────────────────────────────
// Generates keyword-rich meta descriptions that include location for local SEO

const serviceMetaMap: Record<string, { ar: string; en: string }> = {
  "speech-therapy": {
    ar: "جلسات تخاطب فردية للأطفال في مركز فروق فردية بمدينة ٦ أكتوبر — تقييم مبدئي ودعم متخصص في اللغة والنطق والتواصل. أخصائي تخاطب أطفال — علاج تأخر الكلام وصعوبات النطق.",
    en: "Individual speech therapy sessions for children at Forooq Fardya Center in 6th of October City, Giza — initial assessment and specialized support in language, articulation, and communication development.",
  },
  "learning-difficulties": {
    ar: "دعم متخصص لصعوبات التعلم في القراءة والكتابة والحساب بمركز فروق فردية — ٦ أكتوبر. تقييم أكاديمي فردي واستراتيجيات تعليمية تناسب نمط تعلّم طفلك.",
    en: "Specialized learning difficulties support for reading, writing, and math at Forooq Fardya — 6th of October City. Individualized academic assessment and teaching strategies tailored to your child's learning style.",
  },
  "skills-development": {
    ar: "برنامج تنمية مهارات الأطفال في الانتباه والتركيز والتفاعل الاجتماعي والمهارات الحركية — مركز فروق فردية، ٦ أكتوبر. خطط فردية تناسب كل طفل.",
    en: "Child skills development program for attention, focus, social interaction, and motor skills at Forooq Fardya Center, 6th of October City. Individualized plans for every child.",
  },
  foundation: {
    ar: "برنامج تأسيس وتهيئة أكاديمية للأطفال قبل المدرسة في مركز فروق فردية — ٦ أكتوبر. تدريب على مسكة القلم والحروف والأرقام والمهارات المدرسية الأولى.",
    en: "Early academic foundation and school readiness program for preschoolers at Forooq Fardya — 6th of October City. Pencil grip training, letter and number recognition, and first school skills.",
  },
  "parent-guidance": {
    ar: "جلسات إرشاد ودعم أولياء الأمور في مركز فروق فردية — ٦ أكتوبر. استشارات أسرية متخصصة واستراتيجيات عملية لتعديل السلوك وتخفيف التوتر الأسري.",
    en: "Parental guidance and family support consultations at Forooq Fardya Center — 6th of October City. Evidence-based behavioral strategies for calmer, more connected parenting.",
  },
};

export function getEnrichedServiceDescription(
  slug: string,
  locale: "ar" | "en" = "ar"
): string {
  const meta = serviceMetaMap[slug];
  if (meta) {
    return locale === "en" ? meta.en : meta.ar;
  }
  return "";
}
