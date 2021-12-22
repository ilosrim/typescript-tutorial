import { HasFormatter } from "../interfaces/HasFormatter.js";
export class Invoice {
  // readonly client: string; // o'zgartirish mumkin emas
  // private details: string; // class-dan tashqarida ko'rinmaydi
  // public amount: number; // ko'rinadi, o'zgartirsa bo'ladi

  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {
    // this.client = c;
    // this.details = d;
    // this.amount = a;
  }

  format() {
    return `${this.client} ownes $${this.amount} for ${this.details}`;
  }
}
