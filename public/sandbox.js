"use strict";
const add = (uid) => {
    console.log(uid);
};
const greet = (user) => {
    return user;
};
let greetTwo;
greetTwo = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
greetTwo("Jack", "Programmer");
let calc;
calc = (numOne, numTwo, action) => {
    if (action === "abc") {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
let logDetails;
logDetails = (ninja) => {
    return `${ninja.name[0].toUpperCase()}${ninja.name.slice(1)} is ${ninja.age} years old.`;
};
let count = logDetails({ name: "boqi", age: 23 });
console.log(count);
// ${s[0].toUpperCase()}${s.slice(1)}
