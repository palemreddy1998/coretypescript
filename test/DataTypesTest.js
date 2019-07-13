"use strict";
/// <reference path="../typings/mocha/mocha.d.ts" />
/// <reference path="../typings/chai/chai.d.ts"/>
var chai_1 = require('chai');
var Config_1 = require('../lib/Config');
var Interface1_1 = require('../lib/interfaces/Interface1');
var Square_1 = require('./Square');
var Inheritance1_1 = require('../lib/inheritance1/Inheritance1');
var Inheritance1_2 = require('../lib/inheritance1/Inheritance1');
var Generic1_1 = require('../lib/generics/Generic1');
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
        chai_1.expect(date1).to.not.be.null;
    });
});
describe('String test', function () {
    it('should test strings', function () {
        Config_1.log.info("String test");
        var string1 = "mocha";
        chai_1.expect(string1).to.not.be.null;
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
        Config_1.log.info('Tuple Test');
        var tuple1;
        tuple1 = ['t1', 10, true, new Date()];
        Config_1.log.info('tuple1->' + tuple1);
        chai_1.expect(tuple1).length(4);
    });
});
describe('Enum Test', function () {
    it('should test enum', function () {
        Config_1.log.info('Enum Test');
        var Color;
        (function (Color) {
            Color[Color["Red"] = 0] = "Red";
            Color[Color["Green"] = 1] = "Green";
            Color[Color["Blue"] = 2] = "Blue";
        })(Color || (Color = {}));
        ;
        var colorA = Color.Blue;
        Config_1.log.info('enum colorA->' + colorA);
        chai_1.expect(2).to.equals(colorA);
        var colorB = Color[0];
        Config_1.log.info('enum colorB->' + colorB);
        chai_1.expect("Red").to.equals(colorB);
    });
});
describe('Any Test', function () {
    it('should test any', function () {
        Config_1.log.info('Any Test');
        var notSure;
        notSure = 100;
        Config_1.log.info("notSure->" + notSure);
        chai_1.expect(100).to.equals(notSure);
        notSure = 'Hundreed';
        Config_1.log.info("notSure->" + notSure);
        chai_1.expect("Hundreed").to.equals(notSure);
    });
});
describe('Interface Test', function () {
    it('should test interface', function () {
        Config_1.log.info('interface Test');
        var mySquare = Interface1_1.createSquare({ color: "white" });
        Config_1.log.info('mySquare->' + mySquare);
        chai_1.expect(mySquare).to.not.be.null;
    });
});
describe('Interface readonly variables Test', function () {
    it('should test interface readonly variables', function () {
        Config_1.log.info('interface readonly variables Test');
        var p1 = { a: 10, b: 20 };
        //p1.a = 5; // error!
        Config_1.log.info('p1.a ->' + p1.a + 'p1.b->' + p1.b);
        chai_1.expect(p1).to.not.be.null;
    });
});
describe('Class and interface', function () {
    it('should test Class and interface', function () {
        Config_1.log.info('Class and interface Test');
        var square = new Square_1.Square();
        var result = square.drawShape(10, 10, 10);
        Config_1.log.info('Result after call to square draw->' + result);
        chai_1.expect(result).to.not.be.null;
        chai_1.expect(1000).to.equals(result);
    });
});
describe('Class and inheritance', function () {
    it('should test Class and inheritance', function () {
        Config_1.log.info('Class and inheritance Test');
        var sam = new Inheritance1_1.Snake("Sammy the Python");
        var tom = new Inheritance1_2.Horse("Tommy the Palomino");
        sam.move();
        tom.move(34);
    });
});
describe('Generics Test', function () {
    it('should test Generics', function () {
        Config_1.log.info('Generics Test');
        var myGenericNumber = new Generic1_1.GenericNumber();
        myGenericNumber.zeroValue = 0;
        var result = myGenericNumber.add = function (x, y) { return x + y; };
        Config_1.log.info('result->' + result);
        chai_1.expect(result).to.be.not.null;
    });
});
describe('Array Values Test', function () {
    it('should test Array Values', function () {
        Config_1.log.info('Array Values Test');
        var list = [4, 5, 6, 7];
        for (var i in list) {
            console.log(i); // "0", "1", "2",
        }
        for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
            var i = list_1[_i];
            console.log(i); // "4", "5", "6"
        }
        chai_1.expect(list).length(4);
    });
});
describe.skip('Test anyc with callback', function () {
    describe('use call back to test async', function () {
        it('should save without error', function (done) {
            var user = new User('Luna');
            user.save(function (err) {
                if (err)
                    done(err);
                else
                    done();
            });
        });
    });
});
var User = (function () {
    function User(s) {
    }
    User.prototype.save = function (s) {
        return s;
    };
    return User;
}());
//# sourceMappingURL=DataTypesTest.js.map