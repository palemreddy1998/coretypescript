"use strict";
/// <reference path="../typings/mocha/mocha.d.ts" />
/// <reference path="../typings/chai/chai.d.ts"/>
var calc_1 = require('../lib/calc');
var chai_1 = require('chai');
describe('Calculator', function () {
    it('should add two numbers together', function () {
        var calc = new calc_1["default"]();
        console.log("addition ************");
        chai_1.expect(calc.add(2, 3)).to.equal(5);
    });
});
//# sourceMappingURL=calc.spec.js.map