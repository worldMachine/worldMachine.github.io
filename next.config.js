/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  basePath: "",
  assetPrefix: "",
  output: "export",
  images: {
    unoptimized: true,
    // domains: [
    //   "media-hosting-bucket.s3.us-west-2.amazonaws.com",
    //   "photo-hosting-bucket.s3-us-west-1.amazonaws.com",
    //   "localhost",
    // ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
