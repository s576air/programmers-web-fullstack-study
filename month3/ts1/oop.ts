class Employee {
    private _name: string;
    private _age: number;

    constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }

    update(name: string, age: number) {
        this._name = name;
        this._age = age;
    }

    get name() {
        return this._name;
    }

    set name(val: string) {
        this._name = val;
    }

    print(): void {
        console.log('Employee');
        console.log('  name:', this._name);
        console.log('  age:', this._age);
    }
}

let emp = new Employee('홍길동', 30);
emp.name = '새 이름';
emp.print();
