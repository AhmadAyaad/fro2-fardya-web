import { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: [
          // OpenAI (ChatGPT, SearchGPT, Training)
          "GPTBot",
          "ChatGPT-User",
          "OAI-SearchBot",
          // Anthropic (Claude Training & Live Web Search)
          "ClaudeBot",
          "Claude-Web",
          "anthropic-ai",
          // Google (Gemini, AI Overviews, Inspection)
          "Google-Extended",
          "GoogleOther",
          "GoogleOther-Image",
          "GoogleOther-Video",
          "Google-InspectionTool",
          // Apple (Applebot & Apple Intelligence)
          "Applebot",
          "Applebot-Extended",
          // Perplexity & Other AI Retrieval Bots
          "PerplexityBot",
          "cohere-ai",
          "Bytespider",
          "Diffbot",
          "CCBot",
          "Meta-ExternalAgent",
          "Meta-ExternalFetcher",
          "FacebookBot",
          "Amazonbot",
          "DuckAssistBot",
        ],
        allow: "/",
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}

