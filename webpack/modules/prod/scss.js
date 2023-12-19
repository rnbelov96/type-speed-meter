const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = () => {
  return {
    module: {
      rules: [
        {
          test: /\.(sass|scss|css)$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: '../',
              },
            },
            'css-loader',
            {
              loader: 'sass-loader',
              options: {
                additionalData: '@import "/frontend/styles/base/index.scss";',
              },
            },
          ],
        },
      ],
    },
  };
};
