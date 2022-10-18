//기본 타입 선언

let car:string = 'bmw';
let diamond = 'diamond';

let age:number = 30;
let isAdult:boolean = false;
let a:number[] = [1,2,3];
let a2:Array<Number> = [1,2,3];

let week1:string[] = ["hi","myname","ilikeyou"];
let week2:Array<string> = ["ddd","wwww"];

week2.push("d");

//튜플

let b:[string,number]; //배열 첫 인자에로 첫 인덱스는 문자열, 두번째 인덱스는 숫자 
b = ['z',1] //가능
//b = [2,'d']; 불가능

//void never 보통 아무것도 반환하지 않을 때, 무한 함수 에러 발생 never
const sayHello = ():void => {
    console.log('Hello');
}

const infLoop = ():never => {
    while (true) {
        //do something
    }
}

const showError = ():never => {
     throw new Error()
}

//enum 비슷한 애들끼리 타입을 묶는 것
enum Os {
    Window = 'win',
    Ios = 'ios',
    Android = 'and',
}

//null, undefined
let c:null = null;
let d:undefined = undefined;