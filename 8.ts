//keyof

interface KeyOf {
    name : string;
    id : number;
    age: number;
    gender: "m" | "f";
}

type KeyofType = keyof KeyOf; // 'id' | 'name' | 'age' | 'gender'

const KeyOfExample : KeyofType = "id";

//위에서 선언한 키값을 가져오는것같음.

// Partial<T>

//property를 모두 optinal로 만들어줌

interface Particial {
    id : number;
    name: string;
    age: number;
    gender: "m" | "f";
}

let admin: Partial<Particial> = {
    id: 1
}

//모두가 optinal이 되어서 넣든 안넣든 오류가 뜨지 않음.

interface Requiredd {
    id : number;
    name: string;
    age: number;
    gender: "m" | "f";
}

let dwadaw : Required<Requiredd> = {
    id : 1,
    name : "gg",
    age : 20,
    gender: "m",
}


//Required는 모두를 필수로 바꿔준다

//Readonly는 읽기 전용 수정 불가능
