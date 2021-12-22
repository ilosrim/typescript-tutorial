import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
// form
const form = document.querySelector(".new-item-form");
// inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
});
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
