"use strict";
exports.__esModule = true;
/// <reference path="../typings/mocha/mocha.d.ts" />
/// <reference path="../typings/chai/chai.d.ts"/>
var chai_1 = require("chai");
var Config_1 = require("../lib/Config");
describe('Boolean test', function () {
    it('should test boolean operator', function () {
        Config_1.log.info("Boolean test");
        var bool = false;
        chai_1.expect(bool).equals(false);
        bool = true;
        chai_1.expect(bool).equals(true);
    });
});
describe('Number test', function () {
    it('should test numbers', function () {
        Config_1.log.info("Number test");
        var number1 = 500.45;
        chai_1.expect(number1).equals(500.45);
    });
});
describe('Date test', function () {
    it('should test date', function () {
        Config_1.log.info("Date test");
        var date1 = new Date();
        console.log("date1 ->" + date1);
        chai_1.expect(date1).to.not.be["null"];
    });
});
describe('String test', function () {
    it('should test strings', function () {
        Config_1.log.info("String test");
        var string1 = "mocha";
        chai_1.expect(string1).to.not.be["null"];
        chai_1.expect(string1).equals("mocha");
    });
});
describe('Array test', function () {
    it('should test arrays', function () {
        Config_1.log.info("Array test");
        var array1 = new Array('one', 'two', 'three', 'four', 'five');
        chai_1.expect(array1).length(5);
        //filter one value
        chai_1.expect(array1.filter(function (s) { return (s.indexOf('ne') > -1); })[0]).equals("one");
        //filter multiple values
        chai_1.expect(array1.filter(function (s) { return (s.indexOf('e') > -1); })).length(3);
        array1[5] = 'six';
        chai_1.expect(array1).length(6);
    });
});
describe('Tuples test', function () {
    it('should test tuples', function () {
        Config_1.log.info("Tuples test");
        var tuple1 = ['one', 'two', 'three', 'four', 'five'];
        chai_1.expect(tuple1).length(5);
        //filter one value
        chai_1.expect(tuple1.filter(function (s) { return (s.indexOf('ne') > -1); })[0]).equals("one");
        //filter multiple values
        chai_1.expect(tuple1.filter(function (s) { return (s.indexOf('e') > -1); })).length(3);
        tuple1[5] = 'six';
        chai_1.expect(tuple1).length(6);
        tuple1[0] = 'oneeeeeee';
        chai_1.expect(tuple1).length(6);
    });
});
//# sourceMappingURL=DataTypesTest.js.map