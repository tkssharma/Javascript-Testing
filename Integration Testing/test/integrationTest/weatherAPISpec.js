process.env.NODE_ENV = 'test';

const chai = require('chai');
const request = require('supertest');
const server = require('../../server');

const should = chai.should();

describe('API test to fecth weather Data', () => {
  it('Test case for API route /weather', function(done) {
    request(server)
      .get('/weather')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  it('Test case for API route /weather/jaipur', function(done) {
    request(server)
      .get('/weather/jaipur')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  it('Test case for API route /weather/delhi', function(done) {
    request(server)
      .get('/weather/delhi')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  it('Test case for API route /weather/delhi/today', function(done) {
    request(server)
      .get('/weather/delhi/today')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  it('Test case for API route /weather/delhi/monday', function(done) {
    request(server)
      .get('/weather/delhi/monday')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
  it('Test case for API route /weather/delhi/friday', function(done) {
    request(server)
      .get('/weather/delhi/friday')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
  it('Test case for API route /weather/delhi/tuesday', function(done) {
    request(server)
      .get('/weather/delhi/tuesday')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});
