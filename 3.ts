//함수

function sdd(num1: number, num2: number):void {
    //return num1 + num2;
    console.log(num1+num2);
}

function isadult(age : number):boolean {
    return age > 19;
}

//함수의 매개변수도 optinal로 지정이 가능함.
function hello(name? : string):string {
    return `Hello, My name is ${name || "TaeHyun"}`;
}

//optinal 방식 2
function bye(name = "TaeHyun"):string {
    return `Bye My friend ${name}`;
}

console.log(hello("SeongGac"));
console.log(hello()); 
console.log(bye());
console.log(bye("DaHyun"));


function halo(name : string, age? : number):string {
    if(age !== undefined){
        return `Halo~ My name is ${name}, I'm ${age} Years old.`
    }
    else {
        return `Halo~ My name is ${name}`;
    }
}

console.log(halo("TaeHyun",19));
console.log("DaHyun");