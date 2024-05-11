/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // allowed domains to load images from:
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
        pathname: "/**",            // any file on any folder
      },
    ],
  },
};

export default nextConfig;
