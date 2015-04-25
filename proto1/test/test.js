var chai = require('chai');
var expect = chai.expect;
var host = 'http://localhost:3000';

describe('basic test',function(){
  it('should do simple calc',function(){
    expect(1+1).to.equal(2);
  });
});

describe('homepage',function(){
  before(function(){
    casper.start(host);
  });


  it('hello',function(){
    casper.then(function(){
      expect("body").to.have.text("hello");
    })
  });
});