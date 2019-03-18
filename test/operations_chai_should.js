var should = require('chai').should();
var operations = require('../app/operations');

describe('Operations tests using SHOULD from CHAI', function () {

    before(function() {
        var result;
    });

    afterEach(function() {
        result = null;
    });

    describe('Check addTested function', function () {
        var result = operations.addTested('text');

        it('Check the returned value', function () {
            result.should.equal('text tested');
        });
        it('Check the returned type', function () {
            result.should.be.a('string');
        });
        it('Check the length of the returned value', function () {
            result.should.have.lengthOf(11);
        });
    });

    describe('Check sum function', function () {
        var result = operations.sum(5);

        it('Check the returned value', function () {
            result.should.equal(7);
        });
        it('Check the returned type', function () {
            result.should.be.a('number');
        });
    });

    describe('Check triangleArea function', function () {
        var result = operations.triangleArea(2, 3);

        it('Check the returned value', function () {
            result.value.should.equal(3);
            result.text.should.equal('The triangle area is 3');
        });
        it('Check the returned type', function () {
            result.should.be.a('object');
            result.value.should.be.a('number');
            result.text.should.be.a('string');
        });
        it('Check the properties of the returned object', function () {
            result.should.to.have.property('value');
            result.should.to.have.property('text');
        });
        it('Check the length of the returned text', function () {
            result.text.should.to.have.lengthOf(22);
        });
    });

});