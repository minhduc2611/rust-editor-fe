/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cloudflare-ipfs.com",
        port: "",
        pathname: "/ipfs/**",
      },
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.rs$/,
      use: 'raw-loader',
    });

    return config;
  },
};
module.exports = nextConfig;
