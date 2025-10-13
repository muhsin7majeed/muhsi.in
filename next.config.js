/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  poweredByHeader: false,
  compress: true,
  images: {
    domains: ["muhsi.in"],
    formats: ["image/webp", "image/avif"],
  },
  // Only add headers when not doing static export (for GitHub Pages)
  ...(process.env.NODE_ENV !== "production" || process.env.GITHUB_ACTIONS
    ? {}
    : {
        async headers() {
          return [
            {
              source: "/(.*)",
              headers: [
                {
                  key: "X-Frame-Options",
                  value: "DENY",
                },
                {
                  key: "X-Content-Type-Options",
                  value: "nosniff",
                },
                {
                  key: "Referrer-Policy",
                  value: "origin-when-cross-origin",
                },
                {
                  key: "X-DNS-Prefetch-Control",
                  value: "on",
                },
              ],
            },
            {
              source: "/sitemap.xml",
              headers: [
                {
                  key: "Cache-Control",
                  value: "public, max-age=86400, stale-while-revalidate",
                },
              ],
            },
          ];
        },
      }),
};

module.exports = nextConfig;
