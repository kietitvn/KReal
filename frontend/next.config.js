/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const prefixURL = isProd ? "https://" : "http://";
const baseUrl = isProd ? "strapi.vantrucrestaurant.com.vn" : "localhost:1337";

const nextConfig = {
  reactStrictMode: false,
  swcMinify: false,
  env: {
    baseUrl: `${prefixURL}${baseUrl}`,
    storePicturesInWEBP: true,
  },
  images: {
    domains: [baseUrl],
    nextImageExportOptimizer: {
      imageFolderPath: "public",
      exportFolderPath: "out",
      imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      quality: 75,
    },
  },
};

module.exports = nextConfig;
