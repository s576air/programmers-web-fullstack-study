function logName(name: string) {
    console.log(1, name);
}

logName('hello');

let student1 = {
    name: 'john',
    score: 100
};

// student1.name = 1; // error
student1.name = 'hi';

let n: number = 1;

enum Gender {
    Male = 0,
    Female
};

interface Student {
    id: number;
    name: string;
    age?: number;
    gender?: 'male' | 'female';
}

class MyStudent implements Student {
    id = 1;
    name = 'name';
    age = 99;
    gender: 'male' | 'female' = 'male';
}

let anyVal: any = 100;
anyVal = true;

let ns: number | string = 100;
ns = 'wow';

function toNum(val: number | string): number {
    return Number(val) + 1;
}

let numbers: number[] = [1, 2, 3];
let fruits: string[] = ['apple'];

for(let n of numbers) {
    console.log(2, n);
}

let midxdArray: (number | string)[] = [1, 'two'];

let infer = [1, 2, 3]; // 타입 추론
let readOnlyArray: ReadonlyArray<number> = [1, 2, 3];
let tuple: [number, string] = [1, 'hello'];

let combine = [...infer, ...infer];