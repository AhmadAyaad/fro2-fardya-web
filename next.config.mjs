import { withSentryConfig } from "@sentry/nextjs/config";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default withSentryConfig(nextConfig, {
  // Sentry Project & Organization Slugs
  org: process.env.SENTRY_ORG,
  project: process.env.SENTRY_PROJECT,

  // Suppress verbose build logging outside CI
  silent: !process.env.CI,

  // Delete source maps after uploading to prevent exposing them in static exports
  sourcemaps: {
    deleteSourcemapsAfterUpload: true,
  },

  // Tree-shake Sentry logger statements to reduce client bundle size
  disableLogger: true,
});

