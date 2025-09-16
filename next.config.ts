import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  transpilePackages: ['@clerk/nextjs'],

  // ✅ Allows Stripe CLI and test requests both locally and via ngrok
  allowedDevOrigins: [
    'http://localhost:3000',
    //'https://24e6-2a02-8424-6ee0-be01-70b8-f4a5-730a-761e.ngrok-free.app'
  ],

  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },

  // ✅ Recommended: Key renamed by Next.js
  serverExternalPackages: [],
};

export default nextConfig;
