const path = require('path');
exports.onCreateWebpackConfig = ({ getConfig }) => {
  const config = getConfig();
  config.module.rules.push({
    test: /\.glsl$/,
    use: {
      loader: 'glsl-shaders-loader'
    }
  });
  config.resolve.extensions.push('.glsl');
  config.resolve.alias = {
    ...config.resolve.alias,
    '@gongdear/l7': path.resolve(__dirname, 'packages/l7/src'),
    '@gongdear/l7-core': path.resolve(__dirname, 'packages/core/src'),
    '@gongdear/l7-component': path.resolve(__dirname, 'packages/component/src'),
    '@gongdear/l7-layers': path.resolve(__dirname, 'packages/layers/src'),
    '@gongdear/l7-map': path.resolve(__dirname, 'packages/map/src'),
    '@gongdear/l7-maps': path.resolve(__dirname, 'packages/maps/src'),
    '@gongdear/l7-renderer': path.resolve(__dirname, 'packages/renderer/src'),
    '@gongdear/l7-scene': path.resolve(__dirname, 'packages/scene/src'),
    '@gongdear/l7-source': path.resolve(__dirname, 'packages/source/src'),
    '@gongdear/l7-utils': path.resolve(__dirname, 'packages/utils/src')
  }
};
