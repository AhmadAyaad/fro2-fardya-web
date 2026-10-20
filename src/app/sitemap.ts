import { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";
import { services } from "@/data/services";
import { articles } from "@/data/articles";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
      images: [
        `${baseUrl}/images/for2-fardya-logo.jpg`,
        `${baseUrl}/images/logo.jpg`,
      ],
    },
    {
      url: `${baseUrl}/services/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
      images: [`${baseUrl}/images/for2-fardya-logo.jpg`],
    },
    {
      url: `${baseUrl}/october/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.95,
      images: [`${baseUrl}/images/for2-fardya-logo.jpg`],
    },
    {
      url: `${baseUrl}/about/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      images: [`${baseUrl}/images/logo.jpg`],
    },
    {
      url: `${baseUrl}/articles/`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.85,
      images: [`${baseUrl}/images/for2-fardya-logo.jpg`],
    },
    {
      url: `${baseUrl}/faq/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/contact/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      images: [`${baseUrl}/images/for2-fardya-logo.jpg`],
    },
    {
      url: `${baseUrl}/privacy/`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}/`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.85,
    images: [`${baseUrl}/images/for2-fardya-logo.jpg`],
  }));

  const articleRoutes: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${baseUrl}/articles/${article.slug}/`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
    images: [`${baseUrl}/images/for2-fardya-logo.jpg`],
  }));

  return [...staticRoutes, ...serviceRoutes, ...articleRoutes];
}
