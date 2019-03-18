var assert = require('chai').assert;
var operations = require('../app/operations');

describe('Operations tests using ASSERT from CHAI', function () {

    before(function () {
        var result;
    });

    afterEach(function () {
        result = null;
    });

    describe('Check addTested function', function () {
        var result = operations.addTested('text');

        it('Check the returned value', function () {
            assert.equal(result, 'text tested');
        });
        it('Check the returned type', function () {
            assert.typeOf(result, 'string');
        });
        it('Check the length of the returned value', function () {
            assert.lengthOf(result, 11);
        });
    });

    describe('Check sum function', function () {
        var result = operations.sum(5);

        it('Check the returned value', function () {
            assert.equal(result, 7);
        });
        it('Check the returned type', function () {
            assert.typeOf(result, 'number');
        });
    });

    describe('Check triangleArea function', function () {
        var result = operations.triangleArea(2, 3);

        it('Check the returned value', function () {
            assert.equal(result.value, 3);
            assert.equal(result.text, 'The triangle area is 3');
        });
        it('Check the returned type', function () {
            assert.typeOf(result, 'object');
            assert.typeOf(result.value, 'number');
            assert.typeOf(result.text, 'string');
        });
        it('Check the properties of the returned object', function () {
            assert.property(result, 'value');
            assert.property(result, 'text');
        });
        it('Check the length of the returned text', function () {
            assert.lengthOf(result.text, 22);
        });
    });

});
