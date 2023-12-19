const path = require('path');
const { merge } = require('webpack-merge');
const modules = require('../modules/base');
const plugins = require('../plugins/base');
const { BUILD_DIRECTORY, SOURCE_DIRECTORY } = require('../constants');

module.exports = merge(
  modules.loadPug(),
  modules.loadFonts(),
  modules.loadJs(),
  modules.loadVue(),
  modules.loadImages(),
  modules.loadSvgSprite(),
  
  plugins.cleanBuildDirectory(),
  plugins.setupPug(),
  plugins.setupVue(),
  plugins.setupCopy(),
  plugins.setupDotenv(),
  plugins.setupSvgSprite(),
  
  {
    entry: [`${SOURCE_DIRECTORY}js/index.js`],

    output: {
      path: path.resolve(BUILD_DIRECTORY),
      filename: 'js/[name].js',
    },

    resolve: {
      extensions: ['.js', '.vue', 'json'],
    },
  },
);
