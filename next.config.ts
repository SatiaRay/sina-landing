import type { NextConfig } from "next";

const nextConfig: NextConfig & {
  turbopack?: {
    root: string;
  };
} = {
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
