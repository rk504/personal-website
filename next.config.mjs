import { withPostHogConfig } from '@posthog/nextjs-config';

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
  },
};

export default withPostHogConfig(nextConfig, {
  personalApiKey: process.env.POSTHOG_API_KEY ?? '',
  projectId: process.env.POSTHOG_PROJECT_ID,
  host: process.env.POSTHOG_HOST,
  sourcemaps: {
    enabled: Boolean(process.env.POSTHOG_API_KEY && process.env.POSTHOG_PROJECT_ID),
    deleteAfterUpload: true,
  },
});
