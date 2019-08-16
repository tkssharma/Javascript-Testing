const ResponseTemplate = require('../templates/response');
/** @Middleware
 * This function is being used to check for API calls to vaidate weekday
 * @param {req,res,next}
 * @returns {error,next()}  return response or forward api call to next Middleware
 */
/* istanbul ignore next */
const validateWeekDay = (req, res, next) => {
  const weekdays = [
    'monday',
    'tuesday',
    'wednesday',
    'thrusday',
    'friday',
    'saturday',
    'sunday',
    'today',
  ];
  if (req.method === 'GET') {
    const day = req.params.weekday;

    if (!day || weekdays.indexOf(day) !== -1) {
      next();
    } else {
      res.json(ResponseTemplate.errorContent());
    }
  } else {
    next();
  }
};

module.exports = validateWeekDay;
