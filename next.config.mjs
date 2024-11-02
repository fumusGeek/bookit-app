/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cloud.appwrite.io",
        pathname: "**",
      },
    ],
  },
  // Preserve any existing configurations you have
  // For example, if you had:
  // images: {
  //   domains: ['your-domain.com'],
  // },
};

export default nextConfig;
