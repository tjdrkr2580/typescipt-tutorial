//리터럴, 유니온/교차 타입

//리터럴

const userName1 = "Bob";
let userName2:string | number = "Tom";

userName2 = 3;


type Job = "police" | "developer" | "teacher";


interface Life {
    name : string;
    job : Job;
}

const life : Life = {
    name : "TaeHyun",
    job : "developer",
}

interface HighSchoolStudent {
    name : number | string;
    grade : 1 | 2 | 3;
}

//세로 줄은 유니온 타입이라고 함. or
//엔드 기호는 교차 타입 . and
