import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services, getServiceBySlug } from "@/data/services";
import { siteConfig } from "@/data/site";
import {
  getEnrichedServiceDescription,
  generateServiceSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
} from "@/lib/seo";
import { ServiceDetailClientView } from "@/components/views/ServiceDetailClientView";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug, "ar");

  if (!service) {
    return {
      title: "الخدمة غير موجودة | Service Not Found",
    };
  }

  const enrichedDescription =
    getEnrichedServiceDescription(slug, "ar") || service.summary;
  const canonicalUrl = `${siteConfig.url}/services/${slug}/`;

  return {
    title: `${service.title} — ${service.tagline}`,
    description: enrichedDescription,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        ar: canonicalUrl,
        en: canonicalUrl,
        "x-default": canonicalUrl,
      },
    },
    openGraph: {
      title: `${service.title} — ${service.tagline} | ${siteConfig.name}`,
      description: enrichedDescription,
      url: canonicalUrl,
      siteName: siteConfig.name,
      locale: "ar_EG",
      type: "website",
      images: [
        {
          url: `${siteConfig.url}${siteConfig.ogImage}`,
          width: 1024,
          height: 1024,
          alt: `${service.title} — ${siteConfig.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} — ${service.tagline} | ${siteConfig.name}`,
      description: enrichedDescription,
      images: [`${siteConfig.url}${siteConfig.ogImage}`],
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug, "ar");

  if (!service) {
    notFound();
  }

  const canonicalUrl = `${siteConfig.url}/services/${slug}/`;
  const serviceSchema = generateServiceSchema(service);
  const faqSchema =
    service.faqs && service.faqs.length > 0
      ? generateFAQSchema(service.faqs)
      : null;
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "الرئيسية", url: `${siteConfig.url}/` },
    { name: "الخدمات", url: `${siteConfig.url}/services/` },
    { name: service.title, url: canonicalUrl },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ServiceDetailClientView slug={slug} />
    </>
  );
}
