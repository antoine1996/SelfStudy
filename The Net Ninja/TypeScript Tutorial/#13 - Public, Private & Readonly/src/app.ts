// classes
class Invoice {
    // readonly client: string;
    // private details: string;
    // public amount: number;

    constructor(
        readonly client: string,
        private details: string,
        public amount: number
    ) { }

    format() {
        // this.client = "something else";
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }
}

const invOne = new Invoice("mario", "work on the mario website", 250);
const invTwo = new Invoice("luigi", "work on the luigi website", 300);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach(inv => {
    // inv.client = "something else";
    console.log(inv.client, inv.amount, inv.format());
});

const form: HTMLFormElement = document.querySelector(".new-item-form") as HTMLFormElement;

// inputs
const type: HTMLSelectElement = document.querySelector("#type") as HTMLSelectElement;
const tofrom: HTMLInputElement = document.querySelector("#tofrom") as HTMLInputElement;
const details: HTMLInputElement = document.querySelector("#details") as HTMLInputElement;
const amount: HTMLInputElement = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
    e.preventDefault();

    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber
    );
});