module.exports = () => {
  return {
    module: {
      rules: [
        {
          test: /\.(png|jpg|jpeg|gif|webp|avif)$/,
          type: 'asset/resource',
          generator: {
            filename: 'images/[name][ext]',
          },
        },
      ],
    },
  };
};
