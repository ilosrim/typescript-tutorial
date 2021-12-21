type StrOrNum = string | number;
type objWithname = { name: string; uid: StrOrNum };

const add = (uid: StrOrNum): void => {
  console.log(uid);
};

const greet = (user: objWithname) => {
  return user;
};

const minus = (a: number, b: number): number => {
  return a - b;
};

let result = minus(15, 8);
