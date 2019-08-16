const express= require('express');
const weatherTransformer= require('../transformer/weatherTransformer');
const path= require('path');
const api_server= require('../../../global/config');
const axios= require('axios');
const weatherController= require('../controller/weatherController');
const ResponseTemplate= require('../../../global/templates/response')
const winston= require('winston');
const validateLocation= require('../../../global/middlewares/ValidateRequestLocation')
const validateWeekday= require('../../../global/middlewares/ValidateRequestDay')



let router = express.Router();

/**
 * @api {get} / Request Weather information
 * @apiName fetch
 * @apiGroup Weather
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} code= require(response.
 * @apiSuccess {String} message= require(response.
 * @apiSuccess {object} weatherData fetched data of weather.
 * /weather/
 */

router.get('/', (req, res) => {
    weatherController.fetch(function(err, weatherData) {
        winston.log('info', 'Running inside Controlller')

        if (err) {
            res.json(ResponseTemplate.error(err.code, err.message));
        } else {
            res.json({
                code: 200,
                message: 'success',
                weather: weatherData
            });
        }
    });
});

/**
 * @api {get} /:location Request Weather information based on location
 * @apiName fetchByCity
 * @apiGroup Weather
 * @apiParam {String} location Location city area state.
 * @middleare validateLocation validate location
 *
 * @apiSuccess {String} code= require(response.
 * @apiSuccess {String} message= require(response.
 * @apiSuccess {object} weatherData fetched data of weather.
 */
 //app.use()
router.get('/:location', validateLocation, (req, res) => {
    weatherController.fetchByCity(req.params.location, function(err, weatherData) {
        if (err) {
            res.json(ResponseTemplate.error(err.code, err.message));
        } else {
            res.json({
                code: 200,
                message: 'success',
                weatherData: weatherData
            });
        }
    });

});

/**
 * @api {get} /:location/:weekday Request Weather information based on location & weekday
 * @apiName fetchByCityAndDay
 * @apiGroup Weather
 * @apiParam {String} location Location city area state.
 * @apiParam {String} weekday   weekday including today {'monday'....'sunday','today'}.
 * @middleare validateLocation validateWeekday validate location & weekday
 *
 * @apiSuccess {String} code= require(response.
 * @apiSuccess {String} message= require(response.
 * @apiSuccess {object} weatherData fetched data of weather.
 */

router.get('/:location/:weekday', validateLocation, validateWeekday, (req, res) => {
    weatherController.fetchByCityAndDay(req.params.location, req.params.weekday, function(err, weatherData) {
        if (err) {
            res.json(ResponseTemplate.error(err.code, err.message));
        } else {
            res.json({
                code: 200,
                message: 'success',
                weatherData: weatherData
            });
        }
    });
});




module.exports = router
