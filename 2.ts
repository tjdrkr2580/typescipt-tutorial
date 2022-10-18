//객체는 object 타입으로 선언할 수 있다.
//object 안에 있는 특정 속성 값에 대한 정보가 없기 때문에 에러 발생
//따라서 interface 사용
//number, string 등에 타입 선언을 했던 것처럼 옆에 붙이는 것 같네
//학년 별로 점수를 기입할 때 (예시) 문자열 인덱스 선언

//등급을 string으로 받아도 좋지만, 너무 많은 범위이기에 문자열 리터럴 타입

type Score = 'A' | 'B' | 'C' | 'D' | 'F';


interface User {
    name : string;
    age : number;
    gender? : string;
    readonly birthYear : number;
    [grade:number] : Score;
}

//모두 기본적으로 사용해야 하지만, ?을 통해 optional 선언할 경우 여부가 크게 상관이 없게 됨 
//readonly 읽기 전용 수정 불가

let user : User = {
    name : 'xx',
    age : 30,
    birthYear : 2000,
    1 : 'A',
    2 : 'B',
    //3 : 's'
}

user.gender = "male";
//user.birthYear = 2001;

//add 함수 만들기

interface Add {
    (num1: number, num2:number) :number;
}


const add : Add = (x,y) => {
    return x + y;
}

console.log(add(10,20));

interface IsAdult {
    (age:number):boolean;
}

const e:IsAdult = (age) => {
    return age > 19;
}

console.log(e(33));

interface Car {
    color:string;
    wheels: number;
    start(): void;
}

class dd implements Car {
    color;
    wheels = 4;
    constructor (c:string) { //생성자
        this.color = c;
    }
    start(){
        console.log('go');
    }
}

const k = new dd("yellow");
console.log(k);
k.start();

//인터페이스의 확장

interface Toy {
    name : string;
}

interface ToyCar extends Car, Toy {
    price : number;
}

interface Benz extends Car {
    door: number;
    stop() : void;
}

const genz : Benz = {
    color: "red",
    wheels: 4,
    door: 5,
    stop() {
        console.log('stop..');
    },
    start() {
        console.log("gogo");
    },  
}

interface Car {
    color:string;
    wheels: number;
    start(): void;
}

class Bmw implements Car {
    color;
    wheels = 4;
    constructor (c:string) { //생성자
        this.color = c;
    }
    start(){
        console.log('go');
    }
}

const r = new Bmw("yellow");
console.log(r);
r.start();

//인터페이스의 확장

interface Toy {
    name : string;
}

interface ToyCar extends Car, Toy {
    price : number;
}

interface Benz extends Car {
    door: number;
    stop() : void;
}

const benz : Benz = {
    color: "red",
    wheels: 4,
    door: 5,
    stop() {
        console.log('stop..');
    },
    start() {
        console.log("gogo");
    },  
}

const Toyy : ToyCar = {
    name : "car",
    wheels : 5,
    price : 10000,
    color : "red",
    start(){
        console.log("hello");a
    }
}

