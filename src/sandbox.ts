type StrOrNum = string | number;
type objWithname = { name: string; uid: StrOrNum };
type person = { name: string; age: number };

const add = (uid: StrOrNum): void => {
  console.log(uid);
};

const greet = (user: objWithname) => {
  return user;
};

let greetTwo: (a: string, b: string) => void;

greetTwo = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}`);
};
greetTwo("Jack", "Programmer");

let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
  if (action === "abc") {
    return numOne + numTwo;
  } else {
    return numOne - numTwo;
  }
};

let logDetails: (obj: person) => void;
logDetails = (ninja: person) => {
  return `${ninja.name[0].toUpperCase()}${ninja.name.slice(1)} is ${
    ninja.age
  } years old.`;
};
let count = logDetails({ name: "boqi", age: 23 });
console.log(count);
// ${s[0].toUpperCase()}${s.slice(1)}
