const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const config = getDefaultConfig(__dirname);

// Add support for TypeScript path mapping
config.resolver.alias = {
  '@': path.resolve(__dirname, 'src'),
  '@components': path.resolve(__dirname, 'src/components'),
  '@screens': path.resolve(__dirname, 'src/screens'),
  '@navigation': path.resolve(__dirname, 'src/navigation'),
  '@services': path.resolve(__dirname, 'src/services'),
  '@utils': path.resolve(__dirname, 'src/utils'),
  '@hooks': path.resolve(__dirname, 'src/hooks'),
  '@store': path.resolve(__dirname, 'src/store'),
  '@types': path.resolve(__dirname, 'src/types'),
  '@constants': path.resolve(__dirname, 'src/constants'),
  '@assets': path.resolve(__dirname, 'assets'),
  '@config': path.resolve(__dirname, 'src/config'),
  '@theme': path.resolve(__dirname, 'src/theme'),
  '@data': path.resolve(__dirname, 'src/data'),
};

// Enable SVG support
config.transformer.assetPlugins = ['expo-asset/tools/hashAssetFiles'];

// Optimize bundle size
config.transformer.minifierConfig = {
  keep_fnames: true,
  mangle: {
    keep_fnames: true,
  },
};

// Enable experimental features
config.resolver.platforms = ['ios', 'android', 'native', 'web'];

module.exports = config;