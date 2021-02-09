// Sylvia Boonabaana and Samuel Okwalinga

var assert = require('chai').assert;
var factorial = require('../factorial');

describe('Factorial Test', function(){
    it('Return factorial of a number', function(){
        let result = factorial(1);
        assert.equal(result, '1');
    })
    it('Return factorial of a number', function(){
        let result = factorial(2);
        assert.equal(result, '2');
    })
    it('Return factorial of a number', function(){
        let result = factorial(3);
        assert.equal(result, '6');
    })
    it('Return factorial of a number', function(){
        let result = factorial(0);
        assert.equal(result, '1');
    })
    it('Return factorial of a number', function(){
        let result = factorial(10);
        assert.equal(result, '3628800');
    })

})