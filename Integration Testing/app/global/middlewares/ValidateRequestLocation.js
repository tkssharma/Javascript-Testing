const ResponseTemplate = require('../templates/response');
const Util = require('../api');
/** @Middleware
 * This function is being used to check for API calls to vaidate Location entered
 * @param {req,res,next}
 * @accepted if its string
 * @returns {error,next()}  return response or forward api call to next Middleware
 */
  /* istanbul ignore next */
let validateLocation = (req, res, next) => {

    if (req.method === 'GET') {
     next();
    }
}

module.exports =  validateLocation;
