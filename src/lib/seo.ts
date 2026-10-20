import { siteConfig } from "@/data/site";

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ChildCare",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo.jpg`,
    image: `${siteConfig.url}/images/for2-fardya-logo.jpg`,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address,
      addressLocality: "6th of October City",
      addressRegion: "Giza",
      addressCountry: "EG",
    },
    openingHours: "Sa-Th 12:00-21:00",
    priceRange: "$$",
  };
}

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
    url: `${siteConfig.url}/articles/${article.slug}`,
    inLanguage: "ar",
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/images/logo.jpg`,
      },
    },
  };
}
