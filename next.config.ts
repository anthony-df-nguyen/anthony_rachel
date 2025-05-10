import type { NextConfig } from 'next';

const config: NextConfig = {
  eslint: {
    dirs: ['pages', 'app', 'lib', 'src', 'components'],
    ignoreDuringBuilds: true,
  },
};

export default config;