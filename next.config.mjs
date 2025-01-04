const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "**", // Allows all paths from Cloudinary
      },
    ],
  },
};

export default nextConfig;