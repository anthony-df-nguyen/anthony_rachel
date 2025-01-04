import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "**",
      },
    ],
  },
  eslint: {
    dirs: ['pages', 'app', 'lib', 'src', 'components'], // Include all other directories
    ignoreDuringBuilds: true, // Optional: Set to true to ignore ESLint during builds
  },
};

export default nextConfig;