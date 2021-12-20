let greet: Function;
greet = () => {
  return "Hello World";
};

const add = (a: number, b: number, c: number | string = 10) => {
  return a + b;
};

const minus = (a: number, b: number): number => {
  return a - b;
};

let result = minus(15, 8);
