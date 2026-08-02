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
  // Scoped to the oyestore.in host specifically (not test.oyestore.in or any
  // other alias on this branch) - oyestore.in should only show the Varkala
  // chapter for now. Remove once the full app is ready to go live there.
  async redirects() {
    return [
      {
        source: "/",
        destination: "/varkala",
        permanent: false,
        has: [
          {
            type: "host",
            value: "oyestore.in",
          },
        ],
      },
    ];
  },
};

export default nextConfig;