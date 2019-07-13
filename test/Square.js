"use strict";
var Config_1 = require('../lib/Config');
var Square = (function () {
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