import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns:[new URL('https://images-cdn.ubuy.co.in/65414af8fd4858736a695a7e-pre-owned-apple-iphone-x-256gb-factory.jpg')
    ,new URL('https://img4a.coupangcdn.com/image/affiliate/banner/db6a2c4f6af066956f01f0dd7c0e6f2d@2x.jpg')]
  }
};

export default nextConfig;
