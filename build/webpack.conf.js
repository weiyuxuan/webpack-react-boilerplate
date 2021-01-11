const paths = require("./paths");

const WebpackBar = require('webpackbar');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');

const { NODE_ENV } = process.env;
const isDev = NODE_ENV === 'development';

const styleLoaders = () => {
  const loaders = [
    !isDev && MiniCssExtractPlugin.loader,
    isDev && "style-loader",
    {
      loader: 'css-loader',
      options: {
        sourceMap: isDev,
        modules: {
          auto: true,
          mode: 'local',
          localIdentName: '[hash:8]-[local]',
        },
      }
    },
    {
      loader: 'sass-loader',
      options: {
        sourceMap: false,
      },
    }
  ];

  return loaders.filter(Boolean);
};

const config = {
  // Entry Point
  entry: [`${paths.src}/index.js`],

  // Output Folder
  output: {
    path: paths.dist,
    filename: "[name].bundle.js",
    publicPath: "/",
  },

  // Resolve Extensions
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: [paths.src, paths.modules],
  },

  // Customize the webpack build process
  plugins: [
    // Progress bar
    new WebpackBar({
      name: NODE_ENV,
      color: 'green',
    }),

    // Removes/cleans build folders and unused assets when rebuilding
    new CleanWebpackPlugin(),

    // Copies files from target to destination folder
    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.src + "/assets",
          to: "assets",
          globOptions: {
            ignore: ["*.DS_Store"],
          },
        },
      ],
    }),

    // Detect modules with circular dependencies
    new CircularDependencyPlugin({
      exclude: /node_modules/,
    }),

    // Generates an HTML file from a template
    new HtmlWebpackPlugin({
      favicon: paths.src + "/assets/icons/favicon.ico",
      template: paths.public + "/index.html",
      filename: "index.html",
    }),
  ],

  // Determine how modules within the project are treated
  module: {
    rules: [
      // JavaScript: Use Babel to transpile JavaScript files
      { test: /\.(js|jsx)$/, exclude: /node_modules/, use: ["babel-loader"] },

      // Styles: Inject CSS into the head with source maps
      { test: /\.(sa|sc|c)ss$/, use: styleLoaders() },

      // Images: Copy image files to build folder
      { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: "asset/resource" },

      // Fonts and SVGs: Inline files
      { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: "asset/inline" },
    ],
  },
};

module.exports = config;
