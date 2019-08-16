const axios = require('axios');
const winston = require('winston');
const weatherTransformer = require('../transformer/weatherTransformer');
const Util = require('../../../global/api');

/** @Controller to get data= require(API and extract response and return to Router
 * Google API call being used to get LAT/LAN for city
 * darksky API call being made to get weather data after get lat/lan
 */

const weatherController = {
  /** @fetch
   * This function is being used to tranform the API response.
   * @param {function} returns callback
   * @returns {function} returns callback once weatherData is received= require(API
   */
  /* istanbul ignore next */
  fetch: callback => {
    winston.log('info', 'Running inside Controlller');
    return weatherController
      .apiRequest('')
      .then(response => {
        const weatherData = response.data;
        callback(null, weatherTransformer.transform(weatherData));
      })
      .catch(error => {
        callback(error, null);
      });
  },
  /** @fetchByCity
   * This function is being used to tranform the API response.
   * @param {function} returns callback
   * @param {String} city name to fetch Weather data
   * @returns {function} returns callback once weatherData is received= require(API
   */
  /* istanbul ignore next */
  fetchByCity: (city, callback) => {
    return weatherController
      .apiRequest(weatherController.extractLatLong({}))
      .then(apiData => {
        const weatherData = apiData.data;
        callback(null, weatherTransformer.transform(weatherData));
      })
      .catch(error => {
        callback(error, null);
      });
  },
  /** @fetchByCityAndDay
   * This function is being used to return  the API response.
   * it process data for weekday today to get current data
   * @param {function} returns callback
   * @param {String} city name to fetch Weather data
   * @param {String} day  name to fetch Weather data based on weekday
   * @returns {function} returns callback once weatherData is received= require(API
   */
  /* istanbul ignore next */
  fetchByCityAndDay: (city, day, callback) => {
    if (day === 'today') {
      return weatherController
        .googleApiRequest(city)
        .then(response => {
          return weatherController
            .apiRequest(weatherController.extractLatLong({}))
            .then(response => {
              const weatherData = response.data;
              callback(
                null,
                weatherTransformer.transform(weatherData, 'today'),
              );
            })
            .catch(error => {
              callback(error, null);
            });
        })
        .catch(error => {
          callback(error, null);
        });
    }
    return weatherController
      .apiRequest(weatherController.extractLatLong({}))
      .then(response => {
        const weatherData = response.data;
        callback(null, weatherTransformer.transform(weatherData, day));
      })
      .catch(error => {
        callback(error, null);
      });
  },
  /** @apiRequest
   * This function is being used to return  a promise
   * @param {string}  response
   * @returns {object} returns promise object= require(axios call
   */
  apiRequest: response => {
    return axios.get(Util.buildUrl(response));
  },
  /** @googleApiRequest
   * this function is being used to ger Lat and lan for given city in API request
   * This function is being used to return  a promise
   * @param {string}  location
   * @returns {object} returns promise object= require(axios call to Google API
   */
  googleApiRequest: location => {
    return axios.get(Util.buildGoogleApiUrl(location));
  },
  /** @extractLatLong
   * This function is being used to return lat/lan
   * @param {String}  response
   * @returns {String} returns String
   */
  extractLatLong: response => {
    return '28, 77';
  },
};
module.exports = weatherController;
