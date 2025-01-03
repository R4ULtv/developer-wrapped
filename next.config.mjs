/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/2024",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
