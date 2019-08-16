const chai = require('chai');
const server = require('../../server');
const Util = require('../../app/global/api/index');

const { expect } = chai;

describe('Test case for App Util', function() {
  it('it should build proper API call url', function() {
    expect(Util.buildUrl()).to.equal(
      'https://api.darksky.net/forecast/107a59f7a74c9882f088002414490b8c/42.3601,-71.0589',
    );
  });
  it('it should build proper API call url', function() {
    expect(Util.buildUrl('42.3601,-71.0589')).to.equal(
      'https://api.darksky.net/forecast/107a59f7a74c9882f088002414490b8c/42.3601,-71.0589',
    );
  });
  it('it should check for String', function() {
    expect(Util.checkforString('hello')).to.equal(true);
  });
  it('it should check for String', function() {
    expect(Util.checkforString('hello1234')).to.equal(false);
  });

  it('it should build proper Google API call url', function() {
    expect(Util.buildGoogleApiUrl('delhi')).to.equal(
      'https://maps.googleapis.com/maps/api/geocode/json?address=delhi',
    );
  });

  it('it should build proper data extraction', function() {
    expect(Util.extractCurrentData({}, -1)).to.deep.equal({});
  });

  it('it should build proper data extraction', function() {
    expect(Util.extractCurrentData({ currently: 'weather' }, 0)).to.equal(
      'weather',
    );
  });
});
