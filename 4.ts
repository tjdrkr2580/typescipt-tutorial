function sum(...nums : number[]){
    return nums.reduce((result, num) => result + num , 0);
}

console.log(sum(1,2,3,4));
console.log(sum(1,2,3));

interface Person {
    name : string;
}

const Sam : Person = {
    name : 'Sam'
}

// function showName(this:User){
//     console.log(this.name);
// }

function showName(this:Person, age:number, gender: 'm'|'f'){
    console.log(this.name,age,gender)
}

//this Sam으로 강제하기

const aa = showName.bind(Sam);
aa(30,'m');

interface People {
    name : string;
    age: number;
}

//위에 작성 조건, 개수에 따라 다른 동작을 해야한다면
//오버로드 사용
function join(name: string, age: number) : People;
function join(name: string, age: string) : string;

function join(name: string, age: number | string): People | string{
    if(typeof age === "number"){
        return {name,age};
    }
    else {
        return "나이는 숫자로 입력해주세요.";
    }
}

//위의 코드는 작동이 안됨. 조건에 따라 리턴의 결과 타입이 달라진다.
//이럴 때는 오버로드를 사용한다. 타입의 따라, 매개변수의 개수에 따라
//다른 동작을 하는 것을 의미함.

const sam : People = join("Sam",30);
const jane : string = join("Sam","30");

//유저, 스트링을 반환하는데 확신이 없기에 오류를 띄움
//동일한 매개변수라도 타입을 다르게 줄 수 있기 때문에