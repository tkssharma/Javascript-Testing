// Application routes

const WeatherServiceRoutes = require('./services/weather/routes/weatherRoutes');
/**
 * HTTP {get} /weather Request Weather information
 * All express routes will prefixed with weather
 * @returns {object} weatherData fetched data of weather.
 */
const routes = function(app) {
  app.use('/weather', WeatherServiceRoutes);
};

module.exports = routes;
