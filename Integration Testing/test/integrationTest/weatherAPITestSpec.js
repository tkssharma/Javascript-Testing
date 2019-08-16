const chai= require('chai');
const chaiHttp= require('chai-http');
const server= require('../../server');


let should = chai.should();

chai.use(chaiHttp);

describe('Test for Weather  API response', () => {

    it('it should get weather Data object', (done) => {
        chai.request(server)
            .get('/weather')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.property('code');
                res.body.should.have.property('message');
                done();
            });
    });

    it('it should get weather Data object for delhi', (done) => {
        chai.request(server)
            .get('/weather/delhi')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.property('code');
                res.body.should.have.property('message');

                done();
            });
    });


    it('it should get weather Data object for delhi/today', (done) => {
        chai.request(server)
            .get('/weather/delhi/today')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.property('code');
                res.body.should.have.property('message');
                res.body.should.have.property('weatherData');
                done();
            });
    });


    it('it should get weather Data object for delhi/monday', (done) => {
        chai.request(server)
            .get('/weather/delhi/monday')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.property('code');
                res.body.should.have.property('message');
                res.body.should.have.property('weatherData');
                done();
            });
    });

    it('it should get weather Data object for delhi/monday', (done) => {
        chai.request(server)
            .get('/weather/delhi/monday')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.property('code');
                res.body.should.have.property('message');
                res.body.should.be.a('object');
                res.body.should.have.property('weatherData');
                done();
            });
    });
    it('it should get weather Data object for delhi/sunday', (done) => {
        chai.request(server)
            .get('/weather/delhi/sunday')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.property('code');
                res.body.should.have.property('message');
                res.body.should.be.a('object');
                res.body.should.have.property('weatherData');
                done();
            });
    });
});
