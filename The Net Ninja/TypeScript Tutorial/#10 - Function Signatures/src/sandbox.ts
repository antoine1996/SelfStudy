let gree: Function;

// example 1
let greet: (a: string, b: string) => void;

greet = (name: string, greeting: string): void => {
    console.log(`${name} sats ${greeting}`);
};

// example 2
let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string): number => {
    if (action === 'add') {
        return numOne + numTwo;
    } else {
        return numOne - numTwo;
    }
};

// example 3
let logDetails: (obj: {name: string, age: number}) => void;

type person = {name: string, age: number};

logDetails = (ninja: person): void => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};