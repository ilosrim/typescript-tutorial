"use strict";
let greet;
greet = () => {
    return "Hello World";
};
const add = (a, b, c = 10) => {
    return a + b;
};
const minus = (a, b) => {
    return a - b;
};
let result = minus(15, 8);
