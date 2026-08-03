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
  // Scoped to oyestore.in and www.oyestore.in specifically (not
  // test.oyestore.in or any other alias on this branch) - these hosts should
  // only show the Varkala/Sri Lanka chapters for now. Remove once the full
  // app is ready to go live there.
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
      {
        source: "/",
        destination: "/varkala",
        permanent: false,
        has: [
          {
            type: "host",
            value: "www.oyestore.in",
          },
        ],
      },
    ];
  },
};

export default nextConfig;