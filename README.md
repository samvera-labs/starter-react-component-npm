# starter-react-component-npm

A React component library boilerplate which includes React, CommonJS, UMD and ESModule bundling, a Styleguidist dev environment &amp; documentation, unit tests and CSS styled components support (via @emotion).

## Getting Started

### Installing

Clone or fork the repository:

```
git clone git@github.com:adamjarling/starter-react-component-npm.git
```

Install dependencies

```
# Yarn
yarn install

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
- [Webpack](https://webpack.js.org/) - Webpack JavaScript bundler
- [Jest](https://jestjs.io/) - Testing framework

## Contributing

Please read [CONTRIBUTING.md](contributing.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your-name-or-organization/your-repository-name/tags).

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

This repo was heavily influenced a great deal by:

- https://github.com/cornflourblue/jw-react-npm-boilerplate
- https://itnext.io/how-to-package-your-react-component-for-distribution-via-npm-d32d4bf71b4f
- http://jasonwatmore.com/post/2018/04/14/react-npm-how-to-publish-a-react-component-to-npm

Thanks for sharing your ideas!
