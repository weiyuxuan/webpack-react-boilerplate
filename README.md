# Webpack React BoilerPlate

A simple and easy boilerplate for react developer, based on webpack 5.

## Features

#### Commit Lint

Checks if your commit messages meet the [conventional commit format](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional).

#### Next generation JavaScript & CSS

Use ESNext and PostCSS to build your react app.

#### Hot Reload

Your saved changes to the CSS and JS are reflected instantaneously without refreshing the page.

#### Code Format

With the right editor setup, your code will automatically be formatted and linted as you work.

## Quick Start

1. Make sure that you have Node.js 10.13.0(LTS) or above installed.
2. Clone this repo using `git clone --depth=1 https://github.com/weiyuxuan/webpack-react-boilerplate.git <YOUR_PROJECT_NAME>`
3. Move to the appropriate directory: `cd <YOUR_PROJECT_NAME>`.
4. Run `npm i` to install dependencies.
5. Run `npm run dev` to see the example app at http://localhost:3000.
6. Run `npm run build` to build production bundle.
7. Run `npm run build --report` to dive into the bundle analysis.

## Dependencies

### webpack

- [`webpack`](https://github.com/webpack/webpack) - Module and asset bundler.
- [`webpack-cli`](https://github.com/webpack/webpack-cli) - Command line interface for webpack
- [`webpack-dev-server`](https://github.com/webpack/webpack-dev-server) - Development server for webpack
- [`webpack-merge`](https://github.com/survivejs/webpack-merge) - Simplify development/production configuration

### Babel

- [`@babel/core`](https://www.npmjs.com/package/@babel/core) - Transpile ES6+ to backwards compatible JavaScript
- [`@babel/preset-env`](https://babeljs.io/docs/en/babel-preset-env) - Smart defaults for Babel
- [`@babel/preset-react`](https://babeljs.io/docs/en/babel-preset-react) - JSX support for Babel
- [`@babel/plugin-proposal-class-properties`](https://babeljs.io/docs/en/babel-plugin-proposal-class-properties) - Use properties directly on a class (an example Babel config)
- [`@babel/plugin-syntax-dynamic-import`](https://babeljs.io/docs/en/babel-plugin-syntax-dynamic-import) - Support dynamic import syntax
- [`babel-plugin-transform-react-remove-prop-types`](https://github.com/oliviertassinari/babel-plugin-transform-react-remove-prop-types) Remove unnecessary React propTypes from the production build

### Loaders

- [`babel-loader`](https://webpack.js.org/loaders/babel-loader) - Transpile files with Babel and webpack
- [`postcss-loader`](https://github.com/webpack-contrib/postcss-loader) - Loader to process CSS with PostCSS
- [`sass-loader`](https://webpack.js.org/loaders/sass-loader) - Load SCSS and compile to CSS
- [`css-loader`](https://webpack.js.org/loaders/css-loader) - Resolve CSS imports
- [`style-loader`](https://webpack.js.org/loaders/style-loader) - Inject CSS into the DOM

### ESLint

- [`eslint-config-prettier`](https://www.npmjs.com/package/eslint-config-prettier) - Turns off all rules that are unnecessary or might conflict with Prettier.
- [`eslint-import-resolver-alias`](https://www.npmjs.com/package/eslint-import-resolver-alias) - a simple Node behavior import resolution plugin for eslint-plugin-import, supporting module alias.
- [`eslint-plugin-babel`](https://www.npmjs.com/package/eslint-plugin-babel) - an eslint rule plugin companion to babel-eslint.
- [`eslint-plugin-import`](https://www.npmjs.com/package/eslint-plugin-import) - This plugin intends to support linting of ES2015+ (ES6+) import/export syntax, and prevent issues with misspelling of file paths and import names.
- [`eslint-plugin-prettier`](https://www.npmjs.com/package/eslint-plugin-prettier) - Runs prettier as an eslint rule.
- [`eslint-plugin-react`](https://www.npmjs.com/package/eslint-plugin-react) - React specific linting rules for ESLint.

### Plugins

- [`eslint-webpack-plugin`](https://github.com/webpack-contrib/eslint-webpack-plugin) - ESLint plugin
- [`clean-webpack-plugin`](https://github.com/johnagan/clean-webpack-plugin) - Remove/clean build folders
- [`copy-webpack-plugin`](https://github.com/webpack-contrib/copy-webpack-plugin) - Copy files to build directory
- [`circular-dependency-plugin`](https://github.com/aackerman/circular-dependency-plugin) - Detect modules with circular dependencies
- [`html-webpack-plugin`](https://github.com/jantimon/html-webpack-plugin) - Generate HTML files from template
- [`mini-css-extract-plugin`](https://github.com/webpack-contrib/mini-css-extract-plugin) - Extract CSS into separate files
- [`css-minimizer-webpack-plugin`](https://github.com/webpack-contrib/css-minimizer-webpack-plugin) - Optimize and minimize CSS assets
- [`terser-webpack-plugin`](https://github.com/webpack-contrib/terser-webpack-plugin) - Optimize and minimize JavaScript
