# starter-react-component-npm

A React component library boilerplate which:

- includes React,
- bundles CommonJS, UMD and ESModule JavaScript files,
- provides a Styleguidist dev environment &amp; component documentation,
- provides unit test, best practice configuration
- supports styled components (CSS) via @emotion.

## Getting Started

### Installing

Clone or fork the repository:

```
git clone git@github.com:adamjarling/starter-react-component-npm.git
```

Install dependencies (use Yarn or NPM...your choice but examples below use `yarn`)

```
# Yarn
yarn install

// or...

# NPM
npm install
```

## Developing

Use [Styleguidist](https://react-styleguidist.js.org/) as the development environment.

```
yarn styleguide
```

which will spin up a local Styleguidist webpack dev server that handles live-reloading as you write tests, build out components, and write documentation.

## Tests

Unit tests are set up to run using [Jest](https://jestjs.io/) and [@testing-library](https://testing-library.com/).

```
yarn test

// or
yarn test:watch
```

## Building the package

To build the package, we use [Rollup](https://rollupjs.org/):

```
yarn build
```

To directly build the latest version of the style guide:

```
yarn styleguide:build
```

## Customizing

1. Rename the project folder "starter-react-component-npm" to your own...ie: "my-new-component"

2. Update the `/package.json` file to customize for your project. Especially `namme, description, keywords, author`, etc.

## Deployment

### Bundling

When ready to bundle your component, run:

```
yarn build
```

This will build a fresh copies of the package in the `/dist` folder. It will also build a fresh copy of the style guide in the `/styleguide` directory.

### Push to NPM registry

Here's how to publishing your package to NPM:
https://docs.npmjs.com/cli/publish

To publish your package:

```
npm publish
```

## Built With

- [React](https://reactjs.org/) - JavaScript component library
- [Rollup](https://rollupjs.org/) - Rollup JavaScript bundler
- [Jest](https://jestjs.io/) - Testing framework
- [Styleguidist](https://react-styleguidist.js.org/) - Local dev environment &amp; documentation

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
