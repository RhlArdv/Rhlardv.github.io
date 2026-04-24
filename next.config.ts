import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // Allow images from these domains
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Allow all HTTPS domains (use cautiously in production)
      },
    ],
    // Optimize image sizes for different devices
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Image formats to generate
    formats: ['image/webp'],
    // Quality levels we use in the app
    qualities: [75, 85], // Added 85 to match ProjectCard quality
  },
};

export default nextConfig;
