
const _ = require('lodash');
const winston= require('winston');
const Util= require('../../../global/api');

let weatherTransformer = {

    /**
     * This function is being used to tranform the API response.
     * @param {object} input weather object
     * @param {String} input frequency 
     * @returns {object} transofrmed object.
     */
    transform: (weather, frequency = 'current') => {
        winston.log('info', 'Running inside weatherTransformer to extract response')
        if (Array.isArray(weather)) {
            let output = [];
            _.forEach(weather, (weather) => {
                output.push(weatherTransformer._transform(weather, frequency));
            });
            return output;

        } else {
            return weatherTransformer._transform(weather, frequency);
        }
    },

    /**
     * This function is being used to tranform the API response.
     * @param {object} input weather object
     * @param {String} input frequency 
     * @returns {object} transofrmed object based on frequency.
     */
    _transform: (weather, frequency) => {
        winston.log('info', 'Running inside weatherTransformer to extract response' + weather + frequency)

        if (!weather) { return {}; }
        let weekDay = { today: 0, monday: 1, tuesday: 2, wednesday: 3, thrusday: 4, friday: 5, saturday: 6, sunday: 7 }
        let extractData;
        switch (frequency) {
            case 'current':
                extractData = Util.extractCurrentData(weather);
                break;
            case 'today':
                extractData = Util.extractCurrentData(weather, weekDay['today']);
                break;
            case 'monday':
            case 'tuesday':
            case 'wednesday':
            case 'thrusday':
            case 'friday':
            case 'saturday':
            case 'sunday':
                extractData = Util.extractCurrentData(weather, weekDay[frequency]);
                break;
        }
        return extractData;

    }
}
module.exports =  weatherTransformer;