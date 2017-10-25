export default class Calculator {
    add(x : number, y : number) : number {
        console.log("Calculator add");
        return x + y;
    }

    substract(x:number,y:number) {
        console.log("Calculator substract");
        return x-y;
    }

    mutiply(a: number, b: number) {
        console.log("Calculator multiplication");
        return a*b;
    }

    divide(a: number, b: number) {
        console.log("Calculator division");
        return a/b;

    }
}
