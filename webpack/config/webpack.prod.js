const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const modules = require('../modules/prod');
const plugins = require('../plugins/prod');
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = merge(
  common,
  {
    mode: 'production',

    devtool: false,

    optimization: {
      minimizer: [
        new CssMinimizerPlugin(),
        new ImageMinimizerPlugin({
          minimizer: {
            implementation: ImageMinimizerPlugin.squooshMinify,
            options: {
              encodeOptions: {
                mozjpeg: {
                  quality: 90,
                },
                webp: {
                  lossless: 0.9,
                },
                avif: {
                  cqLevel: 0,
                },
              },
            },
          },
        }),
        '...',
      ],
    },

    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
    },
  },

  modules.loadScss(),

  plugins.setupCss(),
);
