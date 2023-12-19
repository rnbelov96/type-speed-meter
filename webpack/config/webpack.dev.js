const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const modules = require('../modules/dev');

module.exports = merge(
  common,
  {
    devtool: 'inline-source-map',

    devServer: {
      static: {
        directory: path.resolve(__dirname, 'static'),
        watch: true,
      },
      compress: true,
      client: {
        progress: true,
      },
      open: true,
      historyApiFallback: true,
      hot: true,
      watchFiles: ['frontend/**/*.pug'],
    },

    mode: 'development',

    target: 'web',
  },

  modules.loadScss(),
);
