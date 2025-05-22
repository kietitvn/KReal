/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const prefixURL = isProd ? "https://" : "http://";
const baseUrl = isProd ? "batdongsan-hcm.ddns.net" : "localhost:1337";

const nextConfig = {
  reactStrictMode: false,
  swcMinify: false,
  env: {
    baseUrl: `${prefixURL}${baseUrl}`,
    // storePicturesInWEBP: true,
  },
  images: {
    domains: [baseUrl, 'batdongsan678.com', "localhost"],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
};

module.exports = nextConfig;
