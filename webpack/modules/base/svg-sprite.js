module.exports = () => {
  return {
    module: {
      rules: [
        {
          test: /\.svg$/,
          loader: 'svg-sprite-loader',
          options: {
            extract: true,
            spriteFilename: 'images/sprite.svg'
          }
        },
      ],
    },
  };
};
