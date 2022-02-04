# Webpack React BoilerPlate

A simple and easy boilerplate for react developer, based on webpack 5.

## Features

#### Commit Lint

Checks if your commit messages meet the [conventional commit format](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional).

#### Next generation JavaScript & CSS

Use ESNext, TypeScript and PostCSS to build your react app.

#### Hot Reload

Your saved changes to the JS and CSS are reflected instantaneously without refreshing the page.

#### Code Format

With the right editor setup, your code will automatically be formatted and linted as you work.

## Quick Start

1. Make sure that you have Node.js 10.13.0(LTS) or above installed.
2. Clone this repo using `git clone --depth=1 https://github.com/weiyuxuan/webpack-react-boilerplate.git <YOUR_PROJECT_NAME>`
3. Move to the appropriate directory: `cd <YOUR_PROJECT_NAME>`.
4. Run `npm i` to install dependencies.
5. Run `npm run dev` to see the example app at <http://localhost:3000>.
6. Run `npm run build` to build production bundle.
7. Run `npm run build --report` to dive into the bundle analysis.

## Dependencies

### Webpack

- [`webpack`](https://github.com/webpack/webpack) - Module and asset bundler.
- [`webpack-cli`](https://github.com/webpack/webpack-cli) - Command line interface for webpack.
- [`webpack-dev-server`](https://github.com/webpack/webpack-dev-server) - Development server for webpack.
- [`webpack-merge`](https://github.com/survivejs/webpack-merge) - Simplify development/production configuration.
- [`webpackbar`](https://www.npmjs.com/package/webpackbar) - Elegant ProgressBar and Profiler for Webpack.

### Loaders

- [`babel-loader`](https://webpack.js.org/loaders/babel-loader) - Transpile files with Babel and webpack.
- [`postcss-loader`](https://github.com/webpack-contrib/postcss-loader) - Loader to process CSS with PostCSS.
- [`sass-loader`](https://webpack.js.org/loaders/sass-loader) - Load SCSS and compile to CSS.
- [`css-loader`](https://webpack.js.org/loaders/css-loader) - Resolve CSS imports.
- [`style-loader`](https://webpack.js.org/loaders/style-loader) - Inject CSS into the DOM.

### Plugins

- [`eslint-webpack-plugin`](https://github.com/webpack-contrib/eslint-webpack-plugin) - ESLint plugin.
- [`clean-webpack-plugin`](https://github.com/johnagan/clean-webpack-plugin) - Remove/clean build folders.
- [`copy-webpack-plugin`](https://github.com/webpack-contrib/copy-webpack-plugin) - Copy files to build directory.
- [`circular-dependency-plugin`](https://github.com/aackerman/circular-dependency-plugin) - Detect modules with circular dependencies.
- [`html-webpack-plugin`](https://github.com/jantimon/html-webpack-plugin) - Generate HTML files from template.
- [`react-refresh-webpack-plugin`](https://github.com/pmmmwh/react-refresh-webpack-plugin) - An EXPERIMENTAL Webpack plugin to enable "Fast Refresh" (also known as Hot Reloading) for React components.
- [`mini-css-extract-plugin`](https://github.com/webpack-contrib/mini-css-extract-plugin) - Extract CSS into separate files.
- [`css-minimizer-webpack-plugin`](https://github.com/webpack-contrib/css-minimizer-webpack-plugin) - Optimize and minimize CSS assets.
- [`terser-webpack-plugin`](https://github.com/webpack-contrib/terser-webpack-plugin) - Optimize and minimize JavaScript.

### Babel

- [`@babel/preset-env`](https://babeljs.io/docs/en/babel-preset-env) - Smart defaults for Babel.
- [`@babel/preset-typescript`](https://babeljs.io/docs/en/babel-preset-typescript) - TypeScript support for Babel.
- [`@babel/preset-react`](https://babeljs.io/docs/en/babel-preset-react) - JSX support for Babel.
- [`@babel/plugin-syntax-dynamic-import`](https://babeljs.io/docs/en/babel-plugin-syntax-dynamic-import) - Support dynamic import syntax.
- [`@@babel/plugin-proposal-optional-chaining`](https://babeljs.io/docs/en/babel-plugin-proposal-optional-chaining) - Support optional chaining syntax.
- [`@babel/plugin-proposal-nullish-coalescing-operator`](https://babeljs.io/docs/en/babel-plugin-proposal-nullish-coalescing-operator) - Support nullish coalescing syntax.

### ESLint

- [`@typescript-eslint/parser`](https://www.npmjs.com/package/@typescript-eslint/parser) - An ESLint parser which leverages TypeScript ESTree to allow for ESLint to lint TypeScript source code.
- [`@typescript-eslint/eslint-plugin`](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin) - An ESLint plugin which provides lint rules for TypeScript codebases.
- [`eslint-config-standard`](https://www.npmjs.com/package/eslint-config-standard) - An ESLint Shareable Config for JavaScript Standard Style.
- [`eslint-config-standard-react`](https://www.npmjs.com/package/eslint-config-standard-react) - An ESLint Shareable Config for React/JSX support in JavaScript Standard Style.

### Stylelint

- [`stylelint-config-standard`](https://www.npmjs.com/package/stylelint-config-standard) - The standard shareable config for Stylelint.
- [`stylelint-config-standard-scss`](https://www.npmjs.com/package/stylelint-config-standard-scss) - The standard shareable SCSS config for Stylelint.
- [`stylelint-config-rational-order`](https://www.npmjs.com/package/stylelint-config-rational-order) - Stylelint config that sorts related property declarations by grouping together following the order of the CSS specification.

### PostCSS

- [`postcss-preset-env`](https://www.npmjs.com/package/postcss-preset-env) - It converts modern CSS into something most browsers can understand, determining the polyfills you need based on your targeted browsers or runtime environments.
- [`postcss-flexbugs-fixes`](https://www.npmjs.com/package/postcss-flexbugs-fixes) - It tries to fix all of flexbug's issues.
