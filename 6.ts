abstract class Car {
    color: string;
    wheels : number;
    constructor(color:string, wheels:number){
        this.color = color;
        this.wheels = wheels;
    }
    start(){
        console.log("start");
    }
    abstract doSomething():void;
}

class luxuryCar extends Car {
    constructor(color: string, wheels : number) {
        super(color, wheels);
    }
    doSomething() {
        alert(3);
    }
}

const bmw = new luxuryCar("red",3333);


//접근 제한자 - public, private, protected
//public 제약 없음, private  객체 내, protected 상속 관계

//abstract 추상화 함수 빈거 클래스에서 기능 구현
//정적 메소드 사용시 클래스 이름으로 접근해야 함