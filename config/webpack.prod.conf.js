const paths = require("./paths");
const base = require("./webpack.conf.js");

const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const config = merge(base, {
  // Set the mode to production
  mode: "production",

  // Control how source maps are generated
  devtool: false,

  // Output Folder
  output: {
    path: paths.dist,
    publicPath: "/",
    filename: "js/[name].[contenthash].bundle.js",
  },

  // Customize the webpack build process
  plugins: [
    // Extracts CSS into separate files
    // Note: style-loader is for development, MiniCssExtractPlugin is for production
    new MiniCssExtractPlugin({
      filename: "styles/[name].[contenthash].css",
      chunkFilename: "[id].css",
    }),
  ],

  // Optimization codes
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
    // Once your build outputs multiple chunks, this option will ensure they share the webpack runtime
    // instead of having their own. This also helps with long-term caching, since the chunks will only
    // change when actual code changes, not the webpack runtime.
    runtimeChunk: {
      name: "runtime",
    },
  },

  // Speed up
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
});

if (process.env.npm_config_report) {
  config.plugins.push(new BundleAnalyzerPlugin({ analyzerPort: 3001 }));
}

module.exports = config;
