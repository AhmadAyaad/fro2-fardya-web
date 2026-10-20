export interface NavItem {
  title: string;
  href: string;
  description?: string;
  children?: NavItem[];
}

export interface SiteConfig {
  name: string;
  title: string;
  subtitle: string;
  description: string;
  url: string;
  ogImage: string;
  contact: {
    phone: string;
    phoneDisplay: string;
    whatsapp: string;
    whatsappDisplay: string;
    address: string;
    workingHours: string;
    email: string;
  };
  disclaimer: string;
  copyright: string;
  mainNav: NavItem[];
  cta: {
    primaryText: string;
    primaryHref: string;
    ghostText: string;
    ghostHref: string;
  };
}

export const siteConfigAr: SiteConfig = {
  name: "فروق فردية",
  title: "فروق فردية — مركز تأهيل وتنمية مهارات الطفل",
  subtitle: "مركز لدعم الأطفال في التخاطب وصعوبات التعلم وتنمية المهارات",
  description:
    "في فروق فردية نتعرّف على احتياجات طفلك بهدوء، ونضع له خطة تناسب أسلوبه وقدراته، ونمشي معكم خطوة بخطوة في التخاطب وصعوبات التعلم وتنمية المهارات للأطفال من عمر سنتين فأكثر.",
  url: "https://amazing-alfajores-181c7c.netlify.app",
  ogImage: "/images/for2-fardya-logo.jpg",
  contact: {
    phone: "01554778990",
    phoneDisplay: "01554778990",
    whatsapp: "+201554778990",
    whatsappDisplay: "01554778990",
    address: "مدينة ٦ أكتوبر — الحي الرابع",
    workingHours: "السبت إلى الخميس — من ١٢:٠٠ ظهرًا حتى ٩:٠٠ مساءً",
    email: "contact@for2fardya.com",
  },
  disclaimer: "المحتوى للتوعية العامة فقط ولا يغني عن التقييم الفردي لدى المختص.",
  copyright: "© ٢٠٢٦ فروق فردية. جميع الحقوق محفوظة.",
  mainNav: [
    {
      title: "الخدمات",
      href: "/services",
      children: [
        {
          title: "التخاطب",
          href: "/services/speech-therapy",
          description: "اللغة والنطق والتواصل",
        },
        {
          title: "صعوبات التعلم",
          href: "/services/learning-difficulties",
          description: "القراءة والكتابة والحساب",
        },
        {
          title: "تنمية المهارات",
          href: "/services/skills-development",
          description: "الانتباه والمهارات اليومية",
        },
      ],
    },
    {
      title: "من نحن",
      href: "/about",
    },
    {
      title: "المقالات والمراجع",
      href: "/articles",
    },
    {
      title: "الأسئلة الشائعة",
      href: "/faq",
    },
    {
      title: "تواصل معنا",
      href: "/contact",
    },
  ],
  cta: {
    primaryText: "احجز تقييم لطفلك",
    primaryHref: "/contact",
    ghostText: "اكتشف خدماتنا",
    ghostHref: "/services",
  },
};

export const siteConfigEn: SiteConfig = {
  name: "Forooq Fardya",
  title: "Forooq Fardya — Child Rehabilitation & Skills Development Center",
  subtitle:
    "A specialized center supporting children in Speech Therapy, Learning Difficulties, and Skills Development",
  description:
    "At Forooq Fardya, we calmly identify your child's needs, design an individualized plan suited to their abilities and pace, and guide you step by step in speech therapy, learning difficulties, and skills development for children aged 2 and above.",
  url: "https://amazing-alfajores-181c7c.netlify.app",
  ogImage: "/images/for2-fardya-logo.jpg",
  contact: {
    phone: "01554778990",
    phoneDisplay: "01554778990",
    whatsapp: "+201554778990",
    whatsappDisplay: "01554778990",
    address: "6th of October City — 4th District",
    workingHours: "Saturday to Thursday — 12:00 PM to 9:00 PM",
    email: "contact@for2fardya.com",
  },
  disclaimer:
    "All content is for general educational awareness and does not substitute for an individual clinical assessment.",
  copyright: "© 2026 Forooq Fardya. All rights reserved.",
  mainNav: [
    {
      title: "Services",
      href: "/services",
      children: [
        {
          title: "Speech Therapy",
          href: "/services/speech-therapy",
          description: "Language, Speech & Communication",
        },
        {
          title: "Learning Difficulties",
          href: "/services/learning-difficulties",
          description: "Reading, Writing & Mathematics",
        },
        {
          title: "Skills Development",
          href: "/services/skills-development",
          description: "Attention, Focus & Daily Life Skills",
        },
      ],
    },
    {
      title: "About Us",
      href: "/about",
    },
    {
      title: "Articles & Resources",
      href: "/articles",
    },
    {
      title: "FAQ",
      href: "/faq",
    },
    {
      title: "Contact Us",
      href: "/contact",
    },
  ],
  cta: {
    primaryText: "Book an Assessment",
    primaryHref: "/contact",
    ghostText: "Explore Our Services",
    ghostHref: "/services",
  },
};

export function getSiteConfig(locale: "ar" | "en" = "ar"): SiteConfig {
  return locale === "en" ? siteConfigEn : siteConfigAr;
}

// Backward-compatible default export
export const siteConfig = siteConfigAr;
