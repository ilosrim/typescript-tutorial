import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

// form
const form = document.querySelector(".new-item-form") as HTMLFormElement;

// inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

// list template instance
const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let values: [string, string, number];
  values = [tofrom.value, details.value, amount.valueAsNumber];

  let doc: HasFormatter;

  if (type.value === "invoice") {
    doc = new Invoice(...values);
  } else {
    doc = new Payment(...values);
  }

  list.render(doc, type.value, "end");
});

// tuples

let tup: [string, number, boolean] = ["yoshi", 23, 2 > 1];
let student: [string, number, string[]];
student = ["Jack", 23, ["HTML", "CSS", "Javascript", "TypeScript "]];

// ENUMS

// enum RecourceTye {
//   BOOK,
//   AOUTHOR,
//   FILM,
//   DIRECTOR,
//   PERSON,
// }
// interface Recource<T> {
//   uid: number;
//   recourceType: number;
//   data: T;
// }

// const docOne: Recource<object> = {
//   uid: 1,
//   recourceType: RecourceTye.BOOK,
//   data: { title: "name of the wind" },
// };

// const docTwo: Recource<object> = {
//   uid: 2,
//   recourceType: RecourceTye.PERSON,
//   data: { name: "yoshi" },
// };
// console.log(docOne, docTwo);

// GENERICS

// const addUID = <T extends { name: string }>(obj: T) => {
//   let uid = Math.floor(Math.random() * 100);
//   return { ...obj, uid };
// };

// let docOne = addUID({ name: "toshi", age: 40 });

// interface Recource<T> {
//   uid: number;
//   recourceName: string;
//   data: T;
// }

// const docThree: Recource<object> = {
//   uid: 1,
//   recourceName: "person",
//   data: { name: "John" },
// };

// const docFour: Recource<string[]> = {
//   uid: 2,
//   recourceName: "shoppinglist",
//   data: ["bread", "milk", "water"],
// };

// console.log(docThree, docFour);

/// ============================ ///
/*

// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new Invoice("yoshi", "web work", 250);
// docTwo = new Payment("lolo", "plumbing work", 200);

// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);

// console.log(docs);

// const invOne = new Invoice("mario", "work on the mario website", 300);
// const invTwo = new Invoice("luigi", "work on the luigi website", 300);

// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);
// console.log(invoices);

// invoices.forEach((inv) => {
//   console.log(inv.client, inv.amount, inv.format());
// });
// interfaces
interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}
////////////////////////////////
const me: IsPerson = {
  name: "Nono",
  age: 30,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    console.log("I spend", amount);
    return amount;
  },
};

const greetPerson = (person: IsPerson) => {
  console.log("Hello", person.name);
};
greetPerson(me);
console.log(me);
*/
