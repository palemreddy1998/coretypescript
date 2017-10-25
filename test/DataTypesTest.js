"use strict";
/// <reference path="../typings/mocha/mocha.d.ts" />
/// <reference path="../typings/chai/chai.d.ts"/>
var chai_1 = require('chai');
describe('Boolean test', function () {
    it('should test boolean operator', function () {
        var bool = false;
        chai_1.expect(bool).equals(false);
        bool = true;
        chai_1.expect(bool).equals(true);
    });
});
describe('Number test', function () {
    it('should test numbers', function () {
        var number1 = 500.45;
        chai_1.expect(number1).equals(500.45);
    });
});
describe('Date test', function () {
    it('should test date', function () {
        var date1 = new Date();
        console.log("date1 ->" + date1);
        chai_1.expect(date1).to.not.be.null;
    });
});
describe('String test', function () {
    it('should test strings', function () {
        var string1 = "mocha";
        chai_1.expect(string1).to.not.be.null;
        chai_1.expect(string1).equals("mocha");
    });
});
//# sourceMappingURL=DataTypesTest.js.map