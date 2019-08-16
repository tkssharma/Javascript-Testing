const ResponseTemplate = require('../templates/response');
/** @Middleware
 * This function is being used to check Content-Type
 * @param {req,res,next}
 * @returns {error,next()}  return response or forward api call to next Middleware
 */
   /* istanbul ignore next */
let ContentType = (req, res, next) => {

    if (req.method === 'POST') {
        let content_type = req.headers['content-type'];

        if (!content_type || content_type.indexOf('application/json') !== 0) {
            res.json(ResponseTemplate.invalidContentType());
        } else {
            next();
        }
    } else {
        next();
    }

}


module.exports =  ContentType;
