# Canonical Webteam React Starter

This provides a minimal react starter application with some sensible defaults:

## Getting Started

1. clone this repo
2. run `yarn install`
3. run `yarn start` to start the dev-server.

## What's here

### Webpack 4 

* ES6
* environment based configuration
* es-lint (default configuration for now, including `eslint-plugin-react`)
* JS/CSS minification/uglification.
* dev server with hot module replacement
 
### Vanilla integration

* SASS integration via `sass-loader` and `node-sass`.
* Example vanilla import in `components/hello_world.js`
* Not currently using [vanilla-framework-react](https://github.com/vanilla-framework/vanilla-framework-react), but this should be reassed in the course of development.

### Misc
* Redux - state management with actions and reducers.
* Lodash - swissarmy knife lib with many useful functional tools. 

### Not Included, but probably should be

* [ravenjs - JS sentry client](https://github.com/getsentry/raven-js)
* [react-router](https://github.com/ReactTraining/react-router)

### Not Included, project dependant 

* [react-apollo - react integration for Apollo GraphQL client](https://github.com/apollographql/react-apollo)

### Bike shed topics
* Should we use [standard-js](https://standardjs.com/)?
* Should we use [prettier](https://github.com/prettier/prettier)?
