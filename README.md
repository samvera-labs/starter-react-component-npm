# starter-react-component-npm

Starter configuration for a project which handles development and npm packaging of a React app exported as a React component.

## Goals

This boilerplate repository aims to be a single repository which is both a development environment, and offers `npm` packaging capabilities.

## Getting Started

Note there are two environments, a bundling and development environent, each with their own `package.json` and `webpack.config.js` files.

### Prerequisites

You'll need to have `node` installed on your local machine. Also, preferably `yarn` (as a wrapper for npm commands) installed as well. You can check either with:

```
node --version
yarn --version
```

### Installing

1. Clone or fork this repository

```
git clone git@github.com:adamjarling/starter-react-component-npm.git
```

2. Install root level, packaging dependencies

```
yarn install
```

3. Install development environment dependencies

```
cd demo
yarn install
```

## Development

Develop your component or collection of components in the root level `/src` directory.

The `/demo` directory is a convenience directory mocking a consuming application for your component. View `/demo/src/index.js` to see how the demo is `@import`ing your new component.

### Running the demo

From within `/demo`, run

`yarn start`

and the demo app will load in the browser. Any changes made to component files in `/src`, ie. `/src/ComponentToExport.js` will live reload in the browser.

### Caveat

Keep in mind the `/demo` directory is a convenience to developing your _unbundled_ component. By default, it's not importing a webpack bundled, commonjs file (which your exported component will eventually become).

While developing against your local component, if you want to use CSS or Sass or anything which requires a webpack loader, you'll need to use those same webpack loaders in the `/demo` environment. Note the `module.rules` definitions in both `webpack.config.js` and `/demo/webpack.config.js`.

If you want to adjust your `/demo` environment to test your fully bundled component, then run

`yarn add my-new-component`, and import your component directly from `/node_modules` instead of the relative import.

### Example usage

```
const props = {
  someProp: 'I am the value for some prop',
  anotherProp: 123456789,
};

<ComponentToExport {...props} />
```

## Customizing

1. Rename the project folder "starter-react-component-npm" to your own...ie: "my-new-component"

2. Update the `/package.json` file to customize for your project. Especially `namme, description, keywords, author`, etc.

3. Rename your top-level component something different than `ComponentToExport`

4. Update `/webpack.config.js` to reflect your new component name in the `entry` and `output.filename` fields.

## Deployment

### Bundling

When ready to bundle your component, from within the project root directory, run:

```
yarn build
```

This will output bundled files in the `/lib` folder.

### Push to NPM registry

Here's how to publishing your package to NPM:
https://docs.npmjs.com/cli/publish

### Import a local copy first?

Before pushing to NPM you may want to test your component locally.

From within the root directory of wherever `starter-react-component-npm` lives on your computer, run

```
pwd
```

and copy the file path to your clipboard. From within any React application running locally, import the local file:

```
yarn add file:/the-path-you-just-copied-here
```

Then import the component into your project as usual and make sure all is well.

```
@import CompoentToExport from "starter-react-component-npm";

...

<ComponentToExport />
```

### Coding style

There is a `.prettierrc.js` file with project coding style settings.

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

This repo was originally forked and heavily influenced by https://github.com/cornflourblue/jw-react-npm-boilerplate

And the tutorial found at: http://jasonwatmore.com/post/2018/04/14/react-npm-how-to-publish-a-react-component-to-npm
