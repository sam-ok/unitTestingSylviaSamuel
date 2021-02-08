// Sylvia Boonabaana and Samuel Okwalinga

var assert = require('chai').assert;
var factorial = require('../factorial');

describe('Factorial Test', function(){
    it('Return factorial of a number', function(){
        let result = factorial(1);
        assert.equal(result, '1');
    })
})