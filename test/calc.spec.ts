/// <reference path="../typings/mocha/mocha.d.ts" />
/// <reference path="../typings/chai/chai.d.ts"/>
import Calculator from '../lib/calc';
import { expect } from 'chai';

let calc : Calculator=new Calculator();

xdescribe('Excluded Test',()=> {
    xit('This is test is excluded from execution',()=> {
        console.log("x Test")
    });

});


describe('Calculator Addition', () => {
    it('should add two numbers together', () => {
        console.log("Addition Test")
        expect(calc.add(2, 3)).to.equal(5)
    });
});

describe('Caculator Substraction',()=>{
    it('should substract two numbers',()=>{
        console.log("Substraction Test")
        let result = calc.substract(10,5);
        expect(5).to.equals(result);
    });
});

describe('Calculator Multiplication',()=>{
   it('should multiple given two numbers',()=>{
       console.log("Multiplication Test")
       let result = calc.mutiply(10,5);
       expect(50).to.equals(result);
   }) ;
});

describe('Calculator Division',()=>{
    it('should divide numbers',()=>{
        console.log("Division Test")
        let result = calc.divide(10,5);
        expect(2).to.equals(result);
    });
});