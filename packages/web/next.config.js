// eslint-disable-next-line @typescript-eslint/no-unused-vars
module.exports = async (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    /* config options here */
    images: {
      domains: ['http://localhost:3001', 'cdn.jsdelivr.net'],
      unoptimized: true,
    },
    exportPathMap: {
      '/': { page: '/' },
    },
  };
  return nextConfig;
};
