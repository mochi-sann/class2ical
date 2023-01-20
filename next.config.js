const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
/** @type {import('next').NextConfig} */
const nextConfig = withBundleAnalyzer({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    // 空のオブジェクト渡すことでnpmパッケージがfsモジュールに依存しないようにします
    config.resolve.fallback = {
      fs: false,
    };
    return config;
  },
});

module.exports = nextConfig;
