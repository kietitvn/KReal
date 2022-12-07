const isProd = process.env.NODE_ENV === "production";
const assetPrefix = isProd
  ? "https://vantrucrestaurant.com.vn"
  : "http://localhost:3005";
const withTM = require("next-transpile-modules");
const withPlugins = require("next-compose-plugins");
const backendDomain = "strapi.vantrucrestaurant.com.vn";

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports =
  //withBundleAnalyzer(
  withPlugins(
    [
      [
        withTM,
        {
          transpileModules: ["swr"],
        },
      ],
    ],
    {
      future: {
        webpack5: true,
      },
      target: "serverless",
      env: {
        backendURL: `https://${backendDomain}`,
        mapBoxApi: "AIzaSyCUZDPgEGSx0r3MpDZgg21pxBlZseI9Yec",
        storePicturesInWEBP: true,
      },
      onDemandEntries: {
        maxInactiveAge: 1000 * 60 * 60,
        pagesBufferLength: 5,
      },
      images: {
        domains: [backendDomain],
        // loader: "custom",
        nextImageExportOptimizer: {
          imageFolderPath: "public",
          exportFolderPath: "out",
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          quality: 75,
        },
      },
      webpack(config) {
        config.module.rules.push({
          test: /\.svg$/,
          use: ["@svgr/webpack"],
        });

        return config;
      },
    }
  );
//);
