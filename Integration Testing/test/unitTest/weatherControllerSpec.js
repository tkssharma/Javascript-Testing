const chai= require('chai');
const server= require('../../server');

const weatherController= require('../../app/services/weather/controller/weatherController');
var expect = chai.expect;


describe('Test case Extract Lat/lng', function() {
    it("weather API call to return json object", function(done) {

        let testData = {
            "results": [{
                "address_components": [{
                        "long_name": "Delhi",
                        "short_name": "DL",
                        "types": ["administrative_area_level_1", "political"]
                    },
                    {
                        "long_name": "India",
                        "short_name": "IN",
                        "types": ["country", "political"]
                    }
                ],
                "formatted_address": "Delhi, India",
                "geometry": {
                    "bounds": {
                        "northeast": {
                            "lat": 28,
                            "lng": 77
                        },
                        "southwest": {
                            "lat": 28,
                            "lng": 77
                        }
                    },
                    "location": {
                        "lat": 28.7040592,
                        "lng": 77.10249019999999
                    },
                    "location_type": "APPROXIMATE",
                    "viewport": {
                        "northeast": {
                            "lat": 28,
                            "lng": 77
                        },
                        "southwest": {
                            "lat": 28,
                            "lng": 77
                        }
                    }
                },
                "place_id": "ChIJLbZ-NFv9DDkRQJY4FbcFcgM",
                "types": ["administrative_area_level_1", "political"]
            }],
            "status": "OK"
        }
        var testPromise = new Promise(function(resolve, reject) {
            // test with dummy location
            setTimeout(function() {
                resolve(weatherController.extractLatLong(testData));
            }, 200);
        });
        testPromise.then(function(result) {
            try {
                expect(result).to.not.be.undefined;
                expect(result).to.equal('28, 77');
                done();
            } catch (err) {
                done(err);
            }
        }, done);
    });
})

describe('Test case for App Transformer with empty Array', function() {
    it("Google API call Test for getting Lat/Lan", function(done) {
        var testPromise = new Promise(function(resolve, reject) {
            weatherController.googleApiRequest('delhi').then(function(data) {
                resolve(data)
            }, function(err) {
                reject(err)
            })
        });
        testPromise.then(function(result) {
            try {
                expect(result.status).to.equal(200);
                expect(result).to.not.be.undefined;

                done();
            } catch (err) {
                done(err);
            }
        }, done);
    });
})

describe('Test case for Weather API sending JSON object', function() {
    it("weather API call to return json object", function(done) {
        var testPromise = new Promise(function(resolve, reject) {
            // test with dummy location
            weatherController.apiRequest('28,77')
                .then(function(data) {
                resolve(data)
            }, function(err) {
                reject(err)
            })
        });
        testPromise.then(function(result) {
            try {
                expect(result).to.not.be.undefined;
                expect(result.status).to.equal(200);
                done();
            } catch (err) {
                done(err);
            }
        }, done);
    });
})






describe('Test case for Weather API/Google API Together Nested', function() {
    it("Google API call to return json object to Weather API", function(done) {
        var testPromise = new Promise(function(resolve, reject) {
            // test with dummy location
            weatherController.googleApiRequest('delhi').then(function(response) {
                weatherController.apiRequest(weatherController.extractLatLong(response.data)).then(function(data) {
                    resolve(data)
                }, function(err) {
                    reject(err)
                })
            }, function(err) {
                reject(err)
            })
        });
        testPromise.then(function(result) {
            try {
                expect(result).to.not.be.undefined;
                expect(result.status).to.equal(200);

                done();
            } catch (err) {
                done(err);
            }
        }, done);
    });
})
