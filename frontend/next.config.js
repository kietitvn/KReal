/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const prefixURL = isProd ? "https://" : "http://";
const baseUrl = isProd ? "batdongsan-hcm.ddns.net" : "localhost:1337";

// Set NODE_TLS_REJECT_UNAUTHORIZED for development only
if (!isProd) {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
}

const nextConfig = {
  reactStrictMode: false,
  swcMinify: false,
  env: {
    baseUrl: `${prefixURL}${baseUrl}`,
    // storePicturesInWEBP: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'batdongsan-hcm.ddns.net',
        pathname: '/uploads/**',
      },  
      {
        protocol: 'http',
        hostname: 'localhost',
        pathname: '/uploads/**',
      },  
      {
        protocol: 'https',
        hostname: 'batdongsan678.com',
        pathname: '/**',
      },
    ],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    dangerouslyAllowSVG: true,
    minimumCacheTTL: 60,
  },
};

module.exports = nextConfig;
