"use strict";
/// <reference path="../typings/mocha/mocha.d.ts" />
/// <reference path="../typings/chai/chai.d.ts"/>
var calc_1 = require('../lib/calc');
var chai_1 = require('chai');
var calc = new calc_1["default"]();
xdescribe('Excluded Test', function () {
    xit('This is test is excluded from execution', function () {
        console.log("x Test");
    });
});
describe('Calculator Addition', function () {
    it('should add two numbers together', function () {
        console.log("Addition Test");
        chai_1.expect(calc.add(2, 3)).to.equal(5);
    });
});
describe('Caculator Substraction', function () {
    it('should substract two numbers', function () {
        console.log("Substraction Test");
        var result = calc.substract(10, 5);
        chai_1.expect(5).to.equals(result);
    });
});
describe('Calculator Multiplication', function () {
    it('should multiple given two numbers', function () {
        console.log("Multiplication Test");
        var result = calc.mutiply(10, 5);
        chai_1.expect(50).to.equals(result);
    });
});
describe('Calculator Division', function () {
    it('should divide numbers', function () {
        console.log("Division Test");
        var result = calc.divide(10, 5);
        chai_1.expect(2).to.equals(result);
    });
});
//# sourceMappingURL=calc.spec.js.map