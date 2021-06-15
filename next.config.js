const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});

const withPWA = require('next-pwa');

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV !== 'production'
  },
  ...withBundleAnalyzer({
    async rewrites() {
      return [
        {
          source: '/newsletter',
          destination: '/api/newsletter'
        },
        {
          source: '/preview',
          destination: '/api/preview'
        }
      ];
    },
    async redirects() {
      return [
        {
          source: '/',
          has: [
            {
              type: 'query',
              key: 'p'
            }
          ],
          permanent: false,
          destination: '/api/preview'
        }
      ];
    },
    images: { domains: ['stg.construir.pt'] },
    future: { webpack5: true }
  })
});
