const { VueLoaderPlugin } = require('vue-loader');

module.exports = () => {
  return {
    plugins: [
      new VueLoaderPlugin(),
    ],
  };
}