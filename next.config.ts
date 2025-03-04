import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable image optimization with WebP/AVIF support
  images: {
    formats: ["image/avif", "image/webp"],
  },

  // Enable SWC minification (default in Next.js 12+)
  swcMinify: true,

  // Enable caching headers for static files
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|jpeg|png|gif|webp|mp4|woff2|eot|ttf)", // Match your media files here
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable", // Cache for 1 year
          },
        ],
      },
    ];
  },

  // Add additional build optimizations
  webpack(config, { dev, isServer }) {
    if (!dev && !isServer) {
      config.resolve.fallback = { fs: false }; // Avoid errors in production build
    }
    return config;
  },
};

export default nextConfig;
