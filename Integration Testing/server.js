const express = require('express');
const winston = require('winston');
const config_server = require('./app/global/config');
const AppRoutes = require('./app/routes');
const AppMiddleware = require('./app/middleware');
const ErrorHandler = require('./app/shutdown');
// setting debug level for winston logger
// enable detailed logging by putting log level to info
winston.level = process.env.LOG_LEVEL || 'error';
// winston.level = process.env.LOG_LEVEL || 'info'

const app = express();
// ---------------------------------------------//
// @ invoke Middleware by passing express object
// @ invoke routes and register to express instance
new AppMiddleware(app);
new AppRoutes(app, express);
// ---------------------------------------------//

// Do graceful shutdown on Ctrl + C or PM2 Restart
process.on('SIGINT', ErrorHandler.shutdown);
// Recover server from Any other errors
process.on('unhandledRejection', ErrorHandler.unhandledRejection);
process.on('uncaughtException', ErrorHandler.onError);

// Finally start HTTP server with Express
const server = app.listen(app.get('port'), () => {
  const { port } = server.address();
  winston.log('info', `Node API running at http://localhost:${port}`);
  console.log(`Node API running at http://localhost:${port}`);
});
module.exports = app;
