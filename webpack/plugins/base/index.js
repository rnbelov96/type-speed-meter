const cleanBuildDirectory = require('./clean');
const setupPug = require('./pug');
const setupVue = require('./vue');
const setupCopy = require('./copy');
const setupDotenv = require('./dotenv');
const setupSvgSprite = require('./svg-sprite');

module.exports = {
  cleanBuildDirectory,
  setupVue,
  setupPug,
  setupCopy,
  setupDotenv,
  setupSvgSprite,
};
