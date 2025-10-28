import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
   reactCompiler: true,
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*', 
      },
    ],
  },
  typescript:{
    ignoreBuildErrors:true,
  }
  
};

export default nextConfig;
