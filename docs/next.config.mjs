/** @type {import('next').NextConfig} */
const config = {
  allowedDevOrigins: ['127.0.0.1', 'localhost'],
  async redirects() {
    return [
      {
        source: '/patterns/:path*',
        destination: '/theme/patterns/:path*',
        permanent: true,
      },
    ];
  },
};

export default config;
