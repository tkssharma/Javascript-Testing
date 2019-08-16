// Middleware for Application

const express = require('express');
const body_parser = require('body-parser');
/* adding some security to express app */
const express_session = require('express-session');
const cors = require('cors');
const helmet = require('helmet');
const csrf = require('csurf');
const config_server = require('./global/config');
const CsrfMiddleware = require('./global/middlewares/csrfMiddleware');
const EmptyContentMiddleware = require('./global/middlewares/EmptyContent');
const ContentTypeMiddleware = require('./global/middlewares/ContentType');

const middleware = function(app) {
  // setting port for application
  app.set('port', process.env.PORT || config_server.PORT);
  // adding security fixes
  app.disable('x-powered-by');
  app.use(helmet());
  app.use(helmet.noCache({ noEtag: true })); // set Cache-Control header
  app.use(helmet.noSniff()); // set X-Content-Type-Options header
  app.use(helmet.frameguard()); // set X-Frame-Options header
  app.use(helmet.xssFilter()); // set X-XSS-Protection header

  app.enable('trust proxy', ['loopback', 'linklocal', 'uniquelocal']);
  // enabled express session
  app.use(
    express_session({
      name: 'SESS_ID',
      secret: config_server.EXPRESS_SECRET,
      resave: false,
      saveUninitialized: true,
      cookie: {
        secure: true,
        httpOnly: true,
      },
    }),
  );
  // added Middleware to extract body data if requitred
  app.use(
    body_parser.urlencoded({
      extended: false,
    }),
  ); // parse application/x-www-form-urlencoded
  app.use(body_parser.json()); // parse application/json
  /**
   * enable CORS support. // Cross-Origin Request Support
   */
  // register all custom Middleware
  app.use(
    cors({
      optionsSuccessStatus: 200,
    }),
  );
  // registering security Middleware for application
  app.use(ContentTypeMiddleware);
  app.use(EmptyContentMiddleware);
  app.use(CsrfMiddleware);
};

module.exports = middleware;
