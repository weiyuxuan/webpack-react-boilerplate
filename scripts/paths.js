const path = require('path');

module.exports = {
  // Source files
  src: path.resolve(__dirname, '../src'),
  // Production files
  dist: path.resolve(__dirname, '../dist'),
  // Static files that get copied to bundle folder
  public: path.resolve(__dirname, '../public'),
  // Node modules
  modules: path.resolve(__dirname, '../node_modules'),
};
