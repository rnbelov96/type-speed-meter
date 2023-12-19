const { SOURCE_FOLDER_NAME } = require('../../constants');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  src: SOURCE_FOLDER_NAME,
};
const PAGES_DIR = `${PATHS.src}pug/pages/`;
const PAGES = fs
  .readdirSync(PAGES_DIR)
  .filter(fileName => fileName.endsWith('.pug'));

module.exports = () => {
  return {
    plugins: [
      ...PAGES.map(
        page =>
          new HtmlWebpackPlugin({
            template: `${PAGES_DIR}/${page}`,
            filename: `./${page.replace(/\.pug/, '.html')}`,
          }),
      ),
    ],
  };
}
