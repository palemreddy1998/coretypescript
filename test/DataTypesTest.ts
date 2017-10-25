/// <reference path="../typings/mocha/mocha.d.ts" />
/// <reference path="../typings/chai/chai.d.ts"/>
import { expect } from 'chai';
import {log,catProd} from '../lib/Config';

describe('Boolean test',()=>{
   it('should test boolean operator',()=>{
       log.info("Boolean test");
       let bool:boolean = false;
       expect(bool).equals(false);
       bool=true;
       expect(bool).equals(true);
   }) ;
});


describe('Number test',()=>{
   it('should test numbers',()=>{
       log.info("Number test");
       let number1:number = 500.45;
       expect(number1).equals(500.45)
   }) ;
});

describe('Date test',()=>{
    it('should test date',()=>{
        log.info("Date test");
        let date1:Date = new Date();
        console.log("date1 ->"+date1);
        expect(date1).to.not.be.null;
    }) ;
});

describe('String test',()=>{
    it('should test strings',()=>{
        log.info("String test");
        let string1:string = "mocha";
        expect(string1).to.not.be.null;
        expect(string1).equals("mocha");
    }) ;
});

describe('Array test',()=>{
    it('should test arrays',()=>{
        log.info("Array test");
        let array1:Array<string> = new Array('one','two','three','four','five');
        expect(array1).length(5);
        //filter one value
        expect(array1.filter(s=>(s.indexOf('ne')>-1))[0]).equals("one");
        //filter multiple values
        expect(array1.filter(s=>(s.indexOf('e')>-1))).length(3)
        array1[5]='six';
        expect(array1).length(6);
    }) ;
});




describe('Tuples test',()=>{
    it('should test tuples',()=>{
        log.info("Tuples test");
        let tuple1 = ['one','two','three','four','five'];
        expect(tuple1).length(5);
        //filter one value
        expect(tuple1.filter(s=>(s.indexOf('ne')>-1))[0]).equals("one");
        //filter multiple values
        expect(tuple1.filter(s=>(s.indexOf('e')>-1))).length(3)
        tuple1[5]='six';
        expect(tuple1).length(6);
        tuple1[0]='oneeeeeee';
        expect(tuple1).length(6);
    }) ;
});


