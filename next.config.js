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
// (https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1101.jpg)
module.exports = nextConfig;
