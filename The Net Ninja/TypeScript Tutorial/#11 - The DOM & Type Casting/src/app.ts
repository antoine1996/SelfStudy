// const anchor: HTMLAnchorElement = document.querySelector("a")!;

// // if (anchor) {
// //     console.log(anchor.href);
// // }

// console.log(anchor.href);

// const form: HTMLFormElement = document.querySelector("form")!;
const form: HTMLFormElement = document.querySelector(".new-item-form") as HTMLFormElement;
// console.log(form.children);

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