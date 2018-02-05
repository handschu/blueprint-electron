# MDK BS - Electron Blueprint

## Abstract

Dieser Blueprint zeigt eine Electron-Anwendung mit der Integration-Oberfläche für die zu entwickelnden MDK-Produkte.
Er enthält das dynamische Nachladen von Modulen (Produkten), den online/offline Login sowie die client-seitige Persistenz-Lösung.


* See Jira: [MDK-89](https://mdk-jira.test-server.ag/browse/MDK-89).
* See Confluence: [Blueprint Electron](https://mdk-confluence.test-server.ag/display/MDK/Integration-UI).

## Einrichtung der Umgebung

Folgende Abhängigkeiten müssen installiert werden:

Node.js: https://nodejs.org/en/

Yarn: https://yarnpkg.com/en/docs/install

Windows Built Tools: `npm install --global --production windows-build-tools`

node-gyp: `npm install --global node-gyp`


## Start der Anwendung mit Webfrontend

### Yarn

`yarn start` Build und Start des gesamten Projektes

`yarn start:node` nur Start, wenn Projekt zuvor gebaut wurde 


## Development server

`ng serve` für den Development Server. Erreichbar unter `http://localhost:4200/`. Die Anwendung wird automatisch aktuelisiert, wenn sich die Sourcen ändern.




## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.
