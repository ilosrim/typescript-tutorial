"use strict";
class Invoice {
    // readonly client: string; // o'zgartirish mumkin emas
    // private details: string; // class-dan tashqarida ko'rinmaydi
    // public amount: number; // ko'rinadi, o'zgartirsa bo'ladi
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
        // this.client = c;
        // this.details = d;
        // this.amount = a;
    }
    format() {
        return `${this.client} ownes $${this.amount} for ${this.details}`;
    }
}
const invOne = new Invoice("mario", "work on the mario website", 300);
const invTwo = new Invoice("luigi", "work on the luigi website", 300);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
invoices.forEach((inv) => {
    console.log(inv.client, inv.amount, inv.format());
});
// form
const form = document.querySelector(".new-item-form");
// inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
