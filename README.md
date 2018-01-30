# MdkClient

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.2.

## Setting up Environment

Install the following dependencies to run the prototype:

Node.js: https://nodejs.org/en/

Yarn: https://yarnpkg.com/en/docs/install


Run the following Commands in Command Line to install additional dependencies:

Windows Built Tools: `npm install --global --production windows-build-tools`

node-gyp: `npm install --global node-gyp`


## Start Electron with Webfrontend

### Yarn
Run `yarn start:backend` to run the Spring Boot Backend for the project.

Run `yarn start` for build and run the full project.

Run `yarn start:node` if you have built the project before.

### NPM

Run `npm run start:backend` to run the Spring Boot Backend for the project.

Run `npm run npmstart` for build and run the full project.

Run `npm run start:node` if you have built the project before.


In case of errors because of missing Python run following command:

npm --add-python-to-path='true' --debug install --global windows-build-tools


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
