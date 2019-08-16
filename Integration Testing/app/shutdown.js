/* eslint import/no-unresolved:0 */

/**
 * Take care of clean exit of current server instance
 * @param {Number} exitCode
 */
function shutdown(exitCode = 0) {
  console.log('shutdown started');
  // appInstance.server.close();
  if (process.env.NODE_ENV === 'test') {
    return console.error('<<<<<<<<<<<<<<<<<<<<<🤬👆👆👆👆👆🤬>>>>>>>>>>>>>>>>>>>>');
  }
      return process.exit(exitCode); 
}

/**
 * Handles uncaughtException
  * @param {Error} err
 */
function onError(error) {
  /** Hide stack trace for known errors */
  console.error('uncaught exception thrown..');
  console.error(error.ErrorID !== 1 ? error : error.message);
  shutdown(1);
}

/**
 *Handles unhandledRejection from aync function and Promise
 * @param {Error} reason
 * @param {Promise} promise
 */
function unhandledRejection(reason, promise) {
  console.error('Uncaught Exception thrown at', promise);
  console.error(reason);
  shutdown(1);
}

module.exports = {
  shutdown,
  unhandledRejection,
  onError
};
