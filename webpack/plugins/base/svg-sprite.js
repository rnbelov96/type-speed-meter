const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

module.exports = () => {
  return {
    plugins: [new SpriteLoaderPlugin()],
  };
};
