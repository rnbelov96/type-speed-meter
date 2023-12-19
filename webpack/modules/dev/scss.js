module.exports = () => {
  return {
    module: {
      rules: [
        {
          test: /\.(sass|scss|css)$/,
          use: [
            'vue-style-loader',
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
