const axios = require('axios');
const winston = require('winston');
const config = require('../config/index');

const Util = {
  /** @buildUrl
   * This function is being used to build API call url based on city
   * @param {String} response Lat/Lan as input
   * @returns {String}  returning URL.
   */
  buildUrl(response) {
    const city_cords = '42.3601,-71.0589';

    if (response === undefined || response === '') {
      winston.log(
        'info',
        `running API call for url ${config.API_SERVER}/forecast/${config.KEY}/${city_cords}`,
      );
      return `${config.API_SERVER}/forecast/${config.KEY}/${city_cords}`;
    }
    winston.log(
      'info',
      `${config.API_SERVER}/forecast/${config.KEY}/${response}`,
    );
    return `${config.API_SERVER}/forecast/${config.KEY}/${response}`;
  },
  /** @buildGoogleApiUrl
   * This function is being used to build Google API call url based on city
   * @param {String} city Lat/Lan as input
   * @returns {String}  returning URL.
   */
  buildGoogleApiUrl(city) {
    winston.log(
      'info',
      `running API call getting city cords from google API ${config.GOOGLE_MAP}${city}`,
    );
    return `${config.GOOGLE_MAP}${city}`;
  },
  /** @extractCurrentData
   * This function is being used to get Final response of API
   * @param {object} weather object
   * @param {String} frequency in {0...7}
   * @returns {object}  final response from API
   */
  extractCurrentData(weather, frequency) {
    winston.log('info', `Returning data for ${frequency}`);

    if (frequency === 0) {
      return weather.currently;
    }
    if (frequency > 0 && frequency <= 7) {
      return weather.daily.data[frequency];
    }
    return weather;
  },
  /** @extractCurrentData
   * This function is being used to validate city and weekday names
   * @param {String} inputtxt in {0...7}
   * @returns {boolean}  rturns true/false
   */
  checkforString(inputtxt) {
    const pattern = /^[A-Za-z]+$/;
    if (inputtxt.match(pattern)) {
      return true;
    }
    return false;
  },
};

module.exports = Util;
