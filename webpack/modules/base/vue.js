module.exports = () => {
  return {
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
      ],
    },
  };
}