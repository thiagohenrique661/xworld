import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mdbcdn.b-cdn.net',
        pathname: '/img/new/slides/**', // opcional: você pode restringir ainda mais o caminho, se necessário
      },
    ],
  },
};
export default nextConfig;