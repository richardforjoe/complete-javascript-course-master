log = console.log

expect  = require('chai').expect
should = require('chai').should()

_ = require('lodash')

const {
    alwaysTrue
} = require('./index.js')

describe('Mocha basics', function(){
    // uni tests are here
    it('true should be true', function(){
        true.should.be.true;
    })
    it('I expect true to be true', function(){
        expect(true).to.be.true;
    })
})

describe('Always true basics', function(){
    // uni tests are here
    it('It should always return true', function(){
        alwaysTrue().should.be.true;
    })
    it('I expect it to always be true', function(){
        expect(alwaysTrue()).to.be.true;
    })
})

//npm init -y
//npm install mocha chai --save-dev
//npm install lodash --save
//node app.js
//npm test