const CopyPlugin = require("copy-webpack-plugin");

module.exports = () => {
  return {
    plugins: [
      new CopyPlugin({
        patterns: [
          {
            from: "frontend/images/**/*",
            to: "images/[name][ext]",
          },
        ],
      }),
    ],
  };
}