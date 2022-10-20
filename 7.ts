//generic

interface Mobile<T> {
    name: string;
    price: number;
    option: T;
}

const m1:Mobile<{color : string, coupon : boolean}> = {
    name: "s21",
    price: 1000,
    option: {
        color: "red",
        coupon: false,
    }
}

const m2:Mobile<string> = {
    name: "s21",
    price: 1000,
    option: "good"
}

//generic 유연한 interface 사용



interface User {
    name: string;
    age: number;
}

interface Car {
    name: string;
    color: string;
}

interface Book {
    price: number;
}

const aaa:User = { name : "a", age : 10};
const busbus : Car = {name: "bmw", color: "red"};
const bookook : Book = { price: 3000};

function showName<T>(data : T) : string{
    return data.name;
}
//T타입을 통해서 객체의 타입을 유연하게 하는 것은 가능한 것 같은데
//없는 객체를 대체하는 것은 불가능?

//extends 

showName(aaa);
showName(busbus);
// showName(bookook);




