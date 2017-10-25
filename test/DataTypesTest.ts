/// <reference path="../typings/mocha/mocha.d.ts" />
/// <reference path="../typings/chai/chai.d.ts"/>
import { expect } from 'chai';

describe('Boolean test',()=>{
   it('should test boolean operator',()=>{
       let bool:boolean = false;
       expect(bool).equals(false);
       bool=true;
       expect(bool).equals(true);
   }) ;
});


describe('Number test',()=>{
   it('should test numbers',()=>{
       let number1:number = 500.45;
       expect(number1).equals(500.45)
   }) ;
});

describe('Date test',()=>{
    it('should test date',()=>{
        let date1:Date = new Date();
        console.log("date1 ->"+date1);
        expect(date1).to.not.be.null;
    }) ;
});

describe('String test',()=>{
    it('should test strings',()=>{
        let string1:string = "mocha";
        expect(string1).to.not.be.null;
        expect(string1).equals("mocha");
    }) ;
});
