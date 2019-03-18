var expect = require('chai').expect;
var operations = require('../app/operations');

describe('Operations tests using EXPECT from CHAI', function () {

    before(function() {
        var result;
    });

    afterEach(function() {
        result = null;
    });

    describe('Check addTested function', function () {
        var result = operations.addTested('text');

        it('Check the returned value', function () {
            expect(result).to.equal('text tested');
        });
        it('Check the returned type', function () {
            expect(result).to.be.a('string');
        });
        it('Check the length of the returned value', function () {
            expect(result).to.have.lengthOf(11);
        });
    });

    describe('Check sum function', function () {
        var result = operations.sum(5);

        it('Check the returned value', function () {
            expect(result).to.equal(7);
        });
        it('Check the returned type', function () {
            expect(result).to.be.a('number');
        });
    });

    describe('Check triangleArea function', function () {
        var result = operations.triangleArea(2, 3);

        it('Check the returned value', function () {
            expect(result.value).to.equal(3);
            expect(result.text).to.equal('The triangle area is 3');
        });
        it('Check the returned type', function () {
            expect(result).to.be.a('object');
            expect(result.value).to.be.a('number');
            expect(result.text).to.be.a('string');
        });
        it('Check the properties of the returned object', function () {
            expect(result).to.have.property('value');
            expect(result).to.have.property('text');
        });
        it('Check the length of the returned text', function () {
            expect(result.text).to.have.lengthOf(22);
        });
    });

});