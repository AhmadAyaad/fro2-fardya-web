import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans_Arabic, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { LanguageProvider } from "@/i18n/LanguageContext";
import { generateLocalBusinessSchema, generateWebSiteSchema } from "@/lib/seo";
import { GoogleAnalytics } from "@next/third-parties/google";
import { MicrosoftClarity } from "@/components/analytics/MicrosoftClarity";

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-sans-arabic",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    // Core Arabic keywords
    "فروق فردية",
    "تخاطب",
    "تخاطب أطفال",
    "جلسات تخاطب",
    "أخصائي تخاطب",
    "مركز تخاطب",
    "علاج تأخر الكلام",
    "صعوبات تعلم",
    "صعوبات التعلم عند الأطفال",
    "تنمية مهارات",
    "تنمية مهارات الأطفال",
    "تأهيل أطفال",
    "تقييم أطفال",
    "تأسيس أطفال",
    "إرشاد أولياء الأمور",
    "تعديل سلوك أطفال",
    // Location-based Arabic keywords (critical for local SEO & LLM search)
    "مركز تخاطب في أكتوبر",
    "مركز تخاطب في ٦ أكتوبر",
    "مركز تخاطب في الجيزة",
    "أخصائي تخاطب في أكتوبر",
    "مركز تنمية مهارات أكتوبر",
    "صعوبات تعلم أكتوبر",
    "مركز تخاطب في الشيخ زايد",
    "مركز تخاطب الشيخ زايد",
    "أخصائي تخاطب في الشيخ زايد",
    "تخاطب أطفال الشيخ زايد",
    "جلسات تخاطب الشيخ زايد",
    "علاج تأخر الكلام الشيخ زايد",
    "صعوبات تعلم الشيخ زايد",
    "تنمية مهارات الشيخ زايد",
    "تعديل سلوك أطفال الشيخ زايد",
    "تأسيس أطفال الشيخ زايد",
    "مركز تأهيل أطفال الشيخ زايد",
    // Core English keywords
    "Speech Therapy",
    "Speech Therapy Egypt",
    "Learning Difficulties",
    "Skills Development",
    "Child Rehabilitation",
    "Forooq Fardya",
    "6th of October City",
    "Sheikh Zayed City",
    "Speech Therapy Sheikh Zayed",
    "Child Development Sheikh Zayed",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  alternates: {
    canonical: siteConfig.url,
    languages: {
      ar: siteConfig.url,
      en: siteConfig.url,
      "x-default": siteConfig.url,
    },
  },
  openGraph: {
    type: "website",
    locale: "ar_EG",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1024,
        height: 1024,
        alt: siteConfig.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: "/images/logo.jpg",
    apple: "/images/logo.jpg",
  },
};

export const viewport: Viewport = {
  themeColor: "#B0285C",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID || process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID || process.env.NEXT_PUBLIC_CLARITY_ID;

  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${ibmPlexSansArabic.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link
          rel="alternate"
          type="text/plain"
          href={`${siteConfig.url}/llms.txt`}
          title="LLM Context Summary (llms.txt)"
        />
        <link
          rel="alternate"
          type="text/plain"
          href={`${siteConfig.url}/llms-full.txt`}
          title="LLM Full Context (llms-full.txt)"
        />
        <link rel="author" href={`${siteConfig.url}/about/`} />
        <link rel="help" href={`${siteConfig.url}/faq/`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var l=localStorage.getItem('fro2_locale');if(l==='en'||l==='ar'){document.documentElement.lang=l;document.documentElement.dir=l==='ar'?'rtl':'ltr';}}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateWebSiteSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateLocalBusinessSchema()),
          }}
        />
      </head>
      <body suppressHydrationWarning className="antialiased flex flex-col min-h-screen bg-brand-bg text-brand-text">
        <LanguageProvider>
          <Header />
          <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
            {children}
          </main>
          <Footer />
          <FloatingWhatsApp />
        </LanguageProvider>

        {/* Analytics & User Behavior Tracking */}
        {gaId && <GoogleAnalytics gaId={gaId} />}
        {clarityId && <MicrosoftClarity clarityId={clarityId} />}
      </body>
    </html>
  );
}
