"use strict";
var Calculator = (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (x, y) {
        console.log("inside calculator");
        return x + y;
    };
    return Calculator;
}());
exports.__esModule = true;
exports["default"] = Calculator;
//# sourceMappingURL=calc.js.map