/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: [process.env.NEXT_PUBLIC_APP_HOSTNAME],
      remotePatterns: [
        {
          protocol: "https",
          hostname: process.env.NEXT_PUBLIC_APP_HOSTNAME || "192.168.88.253",
          pathname: "**",
          port: "",
        },
      ],
    },
  };
  
  export default nextConfig;
