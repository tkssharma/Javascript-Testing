const chai = require("chai"),
  expect = chai.expect;
const Util = require('../../utility');
describe("Tetsinmg Todo API -01", function() {
  before(function() {
    // runs before all tests in this block
  });

  after(function() {
    // runs after all tests in this block
  });

  beforeEach(function() {
    // runs before each test in this block
  });

  afterEach(function() {
    // runs after each test in this block
  });
  it("should read the totdolist.txt file successfully", function() {
     const str = Util.reverse('hello');
     expect(str).to.not.equal(null) // Recommended
     expect(str).to.equal("olleh"); // Recommended

  });
  it("should read the totdolist.txt file successfully", function() {
    const str = Util.reverse(null);
    expect(str).to.equal(null) // Recommended
    expect(str).to.equal(null); // Recommended
  });
  it("should read the totdolist.txt file successfully", function() {
    // write test cases
  });
});

describe("Tetsinmg Todo API - 02 ", function() {
  it("should read the totdolist.txt file successfully", function() {
    // write test cases
  });
  it("should read the totdolist.txt file successfully", function() {
    // write test cases
  });
  it("should read the totdolist.txt file successfully", function() {
    // write test cases
  });
});
