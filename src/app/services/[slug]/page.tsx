import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services, getServiceBySlug } from "@/data/services";
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

  return {
    title: `${service.title} — ${service.tagline}`,
    description: service.summary,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug, "ar");

  if (!service) {
    notFound();
  }

  return <ServiceDetailClientView slug={slug} />;
}
