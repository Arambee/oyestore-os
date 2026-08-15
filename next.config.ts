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
  //
  // A rewrite, not a redirect: visitors on these hosts see /varkala's
  // content served invisibly at "/" - the address bar stays on oyestore.in
  // instead of visibly jumping to oyestore.in/varkala. Every other host
  // (test.oyestore.in, previews, localhost) is untouched and keeps hitting
  // the real app/(marketing)/page.tsx homepage at "/".
  async rewrites() {
    // beforeFiles, not a plain array: a plain array is only checked *after*
    // Next's own filesystem routes, so it would never fire here since "/"
    // already resolves to app/(marketing)/page.tsx. beforeFiles runs ahead
    // of that resolution, so the host match can actually override it.
    return {
      beforeFiles: [
        {
          source: "/",
          destination: "/varkala",
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
          has: [
            {
              type: "host",
              value: "www.oyestore.in",
            },
          ],
        },
      ],
    };
  },
};

export default nextConfig;