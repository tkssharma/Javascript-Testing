const ResponseTemplate = require('../templates/response');
/** @Middleware
 * This function is being used to check if we have empty Content
 * @param {req,res,next}
 * @returns {error,next()}  return response or forward api call to next Middleware
 */
   /* istanbul ignore next */
let EmptyContent = (req, res, next) => {

    if (req.method === 'POST' && Object.keys(req.body).length === 0) {
        res.json(ResponseTemplate.emptyContent());
    } else {
        next();
    }

}

module.exports =  EmptyContent;
