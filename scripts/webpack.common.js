const paths = require('./paths')

const WebpackBar = require('webpackbar')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CircularDependencyPlugin = require('circular-dependency-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'

// Loaders are evaluated/executed from right to left (or from bottom to top).
const getStyleLoaders = () => [
  !isDev && MiniCssExtractPlugin.loader,
  isDev && 'style-loader',
  {
    loader: 'css-loader',
    options: {
      sourceMap: isDev,
      modules: {
        auto: true,
        mode: 'local',
        localIdentName: '[hash:8]-[local]',
      },
    },
  },
  !isDev && {
    loader: 'postcss-loader',
    options: {
      sourceMap: false,
    },
  },
  {
    loader: 'sass-loader',
    options: {
      sourceMap: false,
    },
  },
].filter(Boolean)

const config = {
  // Entry Point
  entry: [`${paths.src}/index.tsx`],

  // Target
  target: 'web',

  // Resolve Extensions
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.scss'],
    modules: [paths.src, paths.modules],
    alias: {
      "@assets": paths.src + "/assets",
      "@components": paths.src + "/components",
      "@constants": paths.src + "/constants",
      "@hooks": paths.src + "/hooks",
    },
  },

  // Customize the webpack build process
  plugins: [
    // Progress bar
    new WebpackBar({
      name: process.env.NODE_ENV,
      color: 'green',
    }),

    // Removes/cleans build folders and unused assets when rebuilding
    new CleanWebpackPlugin(),

    // ESLint when building
    new ESLintPlugin({
      files: 'src/**/*.(ts|tsx|js|jsx)',
      extensions: ['ts', 'tsx', 'js', 'jsx'],
      lintDirtyModulesOnly: true,
      threads: 2,
    }),

    // Copies files from target to destination folder
    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.src + '/assets',
          to: 'assets',
          globOptions: {
            ignore: ['*.DS_Store'],
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
      favicon: paths.src + '/assets/favicon.ico',
      template: paths.public + '/index.html',
      filename: 'index.html',
    }),
  ],

  // Determine how modules within the project are treated
  module: {
    rules: [
      // JavaScript/TypeScript: Use Babel to transpile JavaScript files
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              plugins: [isDev && require.resolve('react-refresh/babel')].filter(Boolean),
            },
          },
        ],
      },

      // Styles: Inject CSS into the head with source maps
      { test: /\.(sa|sc|c)ss$/, use: getStyleLoaders() },

      // Images: Copy image files to build folder
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|webp)$/i,
        type: 'asset/resource',
        generator: {
          filename: '[path][name][ext]',
        },
      },

      // Fonts and SVGs: Inline files
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]',
        },
      },
    ],
  },
};

module.exports = config;
