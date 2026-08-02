import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // Temporary: oyestore.in should only show the Varkala chapter for now.
  // Remove this once the full app is ready to go live at the root.
  async redirects() {
    return [
      {
        source: "/",
        destination: "/varkala",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;