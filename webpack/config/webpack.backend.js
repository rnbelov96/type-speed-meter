const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const modules = require('../modules/prod');
const plugins = require('../plugins/prod');
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = merge(
  common,
  {
    devtool: false,
    
    mode: 'development',
  },

  modules.loadScss(),

  plugins.setupCss(),
);
