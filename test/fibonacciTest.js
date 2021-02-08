// Sylvia Boonabaana and Samuel Okwalinga

var assert = require('chai').assert;
var fibonacci = require('../fibonacci');

describe('Fibonnaci Test', function(){
    it('Return fibonacci of a number', function(){
        let result = fibonacci(6);
        assert.equal(result, '8');
    })
})



