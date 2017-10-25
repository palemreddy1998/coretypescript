/// <reference path="../typings/mocha/mocha.d.ts" />
/// <reference path="../typings/chai/chai.d.ts"/>
import { expect } from 'chai';
import {log,catProd} from '../lib/Config';
import {createSquare} from '../lib/interfaces/Interface1'
import {Point} from '../lib/interfaces/ReadonlyVariablesInterface'
import {Square} from './Square'

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
        log.info('Tuple Test');
        let tuple1:[string,number,boolean,Date];
        tuple1 = ['t1',10,true,new Date()];
        log.info('tuple1->'+tuple1);
        expect(tuple1).length(4);
    }) ;
});

describe('Enum Test',()=>{
    it('should test enum',()=>{
        log.info('Enum Test');
        enum Color {Red, Green, Blue};
        let colorA: Color = Color.Blue;
        log.info('enum colorA->'+colorA);
        expect(2).to.equals(colorA);
        let colorB: string = Color[0];
        log.info('enum colorB->'+colorB);
        expect("Red").to.equals(colorB);
    })
});

describe('Any Test',()=>{
    it('should test any',()=>{
        log.info('Any Test');
        let notSure:any;
        notSure=100;
        log.info("notSure->"+notSure);
        expect(100).to.equals(notSure);
        notSure='Hundreed';
        log.info("notSure->"+notSure);
        expect("Hundreed").to.equals(notSure);
    })
});


describe('Interface Test',()=>{
    it('should test interface',()=>{
        log.info('interface Test');
        let mySquare =createSquare({color: "white"})
        log.info('mySquare->'+mySquare);
        expect(mySquare).to.not.be.null;
    })
});

describe('Interface readonly variables Test',()=>{
    it('should test interface readonly variables',()=>{
        log.info('interface readonly variables Test');
        let p1:Point = {a:10,b:20};
        //p1.a = 5; // error!
        log.info('p1.a ->'+p1.a+'p1.b->'+p1.b);
        expect(p1).to.not.be.null;
    })
});

describe('Class and interface',()=>{
    it('should test Class and interface',()=>{
        log.info('Class and interface Test');
        let square:Square = new Square();
        let result = square.drawShape(10,10,10);
        log.info('Result after call to square draw->'+result);
        expect(result).to.not.be.null;
        expect(1000).to.equals(result);
    })
});
