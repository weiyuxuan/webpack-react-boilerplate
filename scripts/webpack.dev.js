const paths = require('./paths')
const base = require('./webpack.common.js')

const { merge } = require('webpack-merge')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

const config = merge(base, {
  // Set the mode to development
  mode: 'development',

  // Output Folder
  output: {
    path: paths.dist,
    publicPath: '/',
    filename: '[name].bundle.js',
  },

  // Control how source-maps are generated
  devtool: 'eval',

  // Spin up a server for quick development
  devServer: {
    hot: true,
    compress: false,
    port: 3000,
    open: true,
  },

  plugins: [
    // Only update what has changed on hot reload
    new ReactRefreshWebpackPlugin(),
  ],

  // Only output errors and warnings happen
  stats: 'errors-only',
});

module.exports = config;
