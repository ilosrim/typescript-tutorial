// Day 1
let character: string = "mario";
let age: number = 23;
console.log(character);

let inputs = document.querySelectorAll("input");
inputs.forEach((input) => {
  console.log(input);
});

// character = 20;
character = "luigi";

const circ = (diameter: number) => {
  return diameter * Math.PI;
};
console.log(circ(23));

// =================== //
// Day 2
// array

let arr: string[] = ["Ali", "Vali", "G'ani"];
arr.push("Eshmat");
arr[1] = "Toshmat";

let arr2: any[] = ["Salom", 2022, "yil"];
arr2.push(2);
arr2[2] = 56;

// Objects

const myObj = {
  name: "vali",
  age: 23,
};
