"use strict";
exports.__esModule = true;
var Config_1 = require("../lib/Config");
var Square = /** @class */ (function () {
    function Square() {
    }
    Square.prototype.drawShape = function (height, width, length) {
        Config_1.log.info("Square- drawSquare");
        return height * width * length;
    };
    return Square;
}());
exports.Square = Square;
//# sourceMappingURL=Square.js.map