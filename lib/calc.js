"use strict";
var Calculator = (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (x, y) {
        console.log("Calculator add");
        return x + y;
    };
    Calculator.prototype.substract = function (x, y) {
        console.log("Calculator substract");
        return x - y;
    };
    Calculator.prototype.mutiply = function (a, b) {
        console.log("Calculator multiplication");
        return a * b;
    };
    Calculator.prototype.divide = function (a, b) {
        console.log("Calculator division");
        return a / b;
    };
    return Calculator;
}());
exports.__esModule = true;
exports["default"] = Calculator;
//# sourceMappingURL=calc.js.map