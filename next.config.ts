import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  images: {
    // next-cloudinary handles its own loader; allow the Cloudinary CDN domain
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  turbopack: {
    // Point Turbopack at this worktree to avoid the multi-lockfile warning
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
