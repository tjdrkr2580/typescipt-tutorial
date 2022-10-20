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

interface drrr {
    name: string;
    color: string;
}

interface Book {
    price: number;
}

const aaa:User = { name : "a", age : 10};
const pas : drrr = {name: "bmw", color: "red"};
// const bookook : Book = { price: 3000};

function showYourName<T extends {name : string}>(data : T) : string {
    return data.name;
}
//들어오는 타입이 string이라는 확신이 없기에
//string generic extends로 넣어준다.
//T타입을 통해서 객체의 타입을 유연하게 하는 것은 가능한 것 같은데
//없는 객체를 대체하는 것은 불가능?

//extends 

showYourName(aaa);
showYourName(pas);




