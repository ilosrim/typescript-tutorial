// // Day 1
// let character: string = "mario";
// let age: number = 23;
// console.log(character);
// let inputs = document.querySelectorAll("input");
// inputs.forEach((input) => {
//   console.log(input);
// });
// // character = 20;
// character = "luigi";
// const circ = (diameter: number) => {
//   return diameter * Math.PI;
// };
// console.log(circ(23));
// // =================== //
// // Day 2
// // array
// let arr: string[] = ["Ali", "Vali", "G'ani"];
// arr.push("Eshmat");
// arr[1] = "Toshmat";
// let arr2: any[] = ["Salom", 2022, "yil"];
// arr2.push(2);
// arr2[2] = 56;
// // Objects
// const myObj = {
//   name: "vali",
//   age: 23,
// };
// explict types
// let character: string = null;
// let age: number;
// let isLoggedIn: boolean;
// // arrays
// let tree: string[] = [];
// let lists: number[];
// let listsTwo: any[] = [];
// listsTwo.push(2);
// listsTwo.push("hello");
// // tree = ["a", "b"];
// tree.push("c");
// // union types
// let mixed: (string | number | boolean)[] = [];
// mixed.push("blah");
// mixed.push(123);
// mixed.push(true);
// console.log(mixed);
// let uid: string | number;
// uid = "23";
// uid = 23;
// // objects
// let codOne: object;
// codOne = {
//   name: "Ilosrim",
//   age: 23,
//   status: "student",
// };
// let codeTwo: {
//   name: string;
//   age: number;
//   isLoggedIn: boolean;
//   skils: string[];
// };
// // codeTwo.name = "Jack";
// // codeTwo.age = 23;
// // codeTwo.isLoggedIn = false;
// codeTwo = {
//   name: "mario",
//   age: 23,
//   isLoggedIn: false,
//   skils: ["html", "css", "js"],
// };
// console.log(codeTwo);
// Dynamic (any) Types
var age = 25;
age = true;
age = "hello";
var mixed = [];
mixed.push(23, 22, 6, 8);
mixed.push("hello");
mixed.shift();
mixed.pop();
console.log(mixed);
var codahiri = { name: "a", age: 5 };
var ninja;
ninja = { name: "ilosrim", age: 23 };
