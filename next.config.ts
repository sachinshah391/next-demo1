import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true, // Ensures better error detection
  swcMinify: true, // Enables faster builds with the SWC compiler
  images: {
    domains: ['example.com'], // Add external domains if loading remote images
    deviceSizes: [320, 420, 768, 1024, 1200], // Define custom breakpoints for responsive images
    imageSizes: [16, 32, 48, 64, 96], // Define custom sizes for fixed images
  },
  i18n: {
    locales: ['en', 'es', 'fr'], // Add multiple locales for internationalization
    defaultLocale: 'en', // Set the default locale
  },
  trailingSlash: true, // Adds a trailing slash to all routes (useful for static exports)
  basePath: '', // Set a base path if deploying under a subdirectory
  assetPrefix: process.env.ASSET_PREFIX || '', // Set an asset prefix for static hosting
  env: {
    CUSTOM_ENV_VARIABLE: 'demo', // Add custom environment variables
  },
  experimental: {
    appDir: true, // Enable the new app directory structure
  },
  webpack: (config) => {
    // Extend Webpack configuration
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'], // Add support for importing SVGs as React components
    });
    return config;
  },
  async redirects() {
    return [
      {
        source: '/old-page',
        destination: '/new-page',
        permanent: true, // Define a 301 redirect
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/custom-route',
        destination: '/api/hello', // Map a custom route to an API endpoint
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
        ],
      },
    ];
  },
};

export default nextConfig;
