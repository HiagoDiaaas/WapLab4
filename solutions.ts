//1

class University {
    name: string;
    dept: string;

    constructor(name: string, dept: string) {
        this.name = name;
        this.dept = dept;
    }

    graduation(year: number): void {
        console.log(`Graduating ${this.dept} ${year} students`);
    }
}

let miu: University = new University("MIU", "MSD");
miu.graduation(2021);


//2

type BankAccount = {
    money: number;
    deposit: (value: number) => void;
};

let bankAccount: BankAccount = {
    money: 2000,
    deposit(value: number): void {
        this.money += value;
    }
};

type Person = {
    name: string;
    bankAccount: BankAccount;
    hobbies: string[];
};

let myself: Person = {
    name: "John",
    bankAccount: bankAccount,
    hobbies: ["Violin", "Cooking"]
};

myself.bankAccount.deposit(3000);
console.log(myself);


// 3

// Define a TypeScript function that takes an object with the following properties: 
// `name` (string), `age` (number), and `isStudent` (boolean). 
// The function should return a string describing the person (use Template literals).

interface Person {
    name: string;
    age: number;
    isStudent: boolean;
}

function describePerson(person: Person): string {
    return `${person.name} is ${person.age} years old and is ${person.isStudent ? 'a' : 'not a'} student.`;
}

const person: Person = { name: "Alice", age: 25, isStudent: true };
console.log(describePerson(person)); // Output: "Alice is 25 years old and is a student."
