/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sprint-fe-project.s3.ap-northeast-2.amazonaws.com",
        port: "",
        pathname: "/Sprint_Mission/**",
      },
      {
        protocol: "https",
        hostname: "example.com",
        port: "",
        pathname: "/...",
      },
      {
        protocol: "https",
        hostname: "example.com",
        port: "",
        pathname: "/",
      },
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = nextConfig;
