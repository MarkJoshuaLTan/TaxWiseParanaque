import type { NextConfig } from 'next';
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: true,
});

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true
  },
  // This makes all paths root-relative
  assetPrefix: '/',
  trailingSlash: true,
};

module.exports = withPWA(nextConfig);