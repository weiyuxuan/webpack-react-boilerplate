const paths = require("./paths");
const base = require("./webpack.conf.js");

const { merge } = require("webpack-merge");
const webpack = require("webpack");

module.exports = merge(base, {
  // Set the mode to development
  mode: "development",

  // Control how source maps are generated
  devtool: "inline-source-map",

  // Spin up a server for quick development
  devServer: {
    historyApiFallback: true,
    contentBase: paths.dist,
    open: true,
    compress: true,
    hot: true,
    port: 3030,
  },

  plugins: [
    // Only update what has changed on hot reload
    new webpack.HotModuleReplacementPlugin(),
  ],
});
