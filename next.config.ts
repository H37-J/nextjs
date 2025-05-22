import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns:[new URL('https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MA7F4_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=cEMrK1BETUx0R013ckd3MURLdGo3MVZya2lKWlJmUEwrYndWOTJiVWJWQUYwVmtIbGRkS25RMVpBRlo0bk5DUVJsakxPWm1CZ1BPV2ljSkhYY2hhdnc')]
  }
};

export default nextConfig;
