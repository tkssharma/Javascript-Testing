# Node.js Expres App

Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js
uses an event-driven, non-blocking I/O model that makes it lightweight and
efficient.
This application is using Node js with Express as web Framework to create API routes.
This app supports JSON only.
Built with Express App using HTTP Node library ++

### Application JSON API
```javascript
http://localhost:3000/weather
http://localhost:3000/weather/:location  {location can be any place}
http://localhost:3000/weather/:location/:weekday
```

## Installation
 - Installation requires all dependancies to be installed
 - Express Packages and Middleware NPM packages
 - Mocha for writing test cases
 - chai and other assertion library
 - babel-node and babel-preset NPM Packages
 - istanbul for code coverage and api-docs for doc generator
 - helmate and CORS NPM packages
```javascript
  npm install
  npm run start
  npm run test
  npm run docs
```
## Test Application
  - Test are written using Mocha and Supertest
  - Regression tests are written with assertion library
```javascript
npm install
npm run test
```
## NPM packages
```javascript
"devDependencies": {
  "apidoc": "^0.17.5",
  "babel-cli": "6.11.4",
  "babel-preset-es2015": "6.13.2",
  "babel-preset-stage-2": "6.13.0",
  "babel-register": "^6.23.0",
  "chai": "^3.5.0",
  "chai-http": "^2.0.1",
  "istanbul": "^0.4.5",
  "jshint": "^2.9.4",
  "mocha": "^2.4.5",
  "morgan": "1.7.0"
},
"dependencies": {
  "app-module-path": "1.1.0",
  "axios": "^0.14.0",
  "babel-cli": "^6.11.4",
  "body-parser": "1.15.2",
  "cors": "2.8.0",
  "csurf": "^1.9.0",
  "email-templates": "2.5.2",
  "express": "4.14.0",
  "express-session": "1.14.1",
  "helmet": "^3.4.0",
  "lodash": "4.15.0",
  "mocha": "^3.2.0",
  "nodemon": "^1.11.0",
  "superagent": "^3.4.4",
  "superagent-promise": "^1.1.0",
  "supertest": "^3.0.0",
  "validator": "5.5.0",
  "winston": "^2.3.1"
}
```
## Code Documentation
 - The Node.js App docs is available in apidoc Dir

 ## Assumptions and Challenges
 - Provided API requires Lat/Lan only
 - Google API is used to get Lat/Lan for location
 - weather API is returning week data= require(index monday to sunday Next week

## Test coverage Report

- Statements   : 85.71% ( 180/210 )
- Branches     : 78.59% ( 78/99 )
- Functions    : 76.67% ( 40/51 )
- Lines        : 86.12% ( 180/209 )
