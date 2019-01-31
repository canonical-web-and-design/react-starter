# Canonical Webteam React Starter

## NOTE
**New react projects should be bootstrapped with [CRA](https://github.com/facebook/create-react-app)**, and this repo should be generally considered deprecated.

This provides a minimal react starter application with some sensible defaults:

## Getting Started

1. clone this repo
2. run `yarn install`
3. run `yarn start` to start the dev-server.

## Tests & Coverage

* run `yarn test`
* run `yarn coverage`

## What's here

### Webpack 4

* ES7/2016
* environment based configuration
* es-lint with AirBnB style 
* Prettier
* Precommit hooks for linting and formatting.
* JS/CSS minification/uglification.
* dev server with hot module replacement

### Testing

* [Jest](https://jestjs.io/) - Facebook's test runner.
* [Enzyme](https://github.com/airbnb/enzyme) - AirBnB's react testing utils, including a
    jQuery like API for component manipulation and DOM traversal.

### Vanilla integration

* SASS integration via `sass-loader` and `node-sass-chokidar`.
* Using [vanilla-framework-react](https://github.com/vanilla-framework/vanilla-framework-react)
* Example vanilla component usage in `components/HelloWorld.js`

### Misc
* Redux - state management with actions and reducers.
* Lodash - swissarmy knife lib with many useful functional tools.

### Not Included, but probably should be

* [ravenjs - JS sentry client](https://github.com/getsentry/raven-js)
* [react-router](https://github.com/ReactTraining/react-router)

### Not Included, project dependant

* [react-apollo - react integration for Apollo GraphQL client](https://github.com/apollographql/react-apollo)
