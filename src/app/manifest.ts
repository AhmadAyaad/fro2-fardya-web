import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.title,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#FFFBF7",
    theme_color: "#B0285C",
    orientation: "portrait-primary",
    lang: "ar",
    dir: "rtl",
    icons: [
      {
        src: "/images/logo.jpg",
        sizes: "192x192 512x512",
        type: "image/jpeg",
        purpose: "maskable",
      },
      {
        src: "/images/for2-fardya-logo.jpg",
        sizes: "512x512",
        type: "image/jpeg",
        purpose: "any",
      },
    ],
  };
}
