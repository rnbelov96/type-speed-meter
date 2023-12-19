const { path: PROJECT_ROT } = require('app-root-path');
const path = require('path');

const BUILD_FOLDER_NAME = './static/';
const SOURCE_FOLDER_NAME = './frontend/';
const SOURCE_DIRECTORY = path.join(PROJECT_ROT, SOURCE_FOLDER_NAME);
const BUILD_DIRECTORY = path.join(PROJECT_ROT, BUILD_FOLDER_NAME);
const HOST = '0.0.0.0';
const PORT = 3000;

module.exports = {
  SOURCE_DIRECTORY,
  BUILD_DIRECTORY,
  HOST,
  PORT,
  PROJECT_ROT,
  SOURCE_FOLDER_NAME,
};
