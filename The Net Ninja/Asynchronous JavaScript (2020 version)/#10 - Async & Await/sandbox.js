// async & await

const getTodosAsync = async () => {
    const response = await fetch("todos/luigi.json");
    const data = await response.json();

    return data;
};

console.log(1);
console.log(2);

getTodosAsync()
    .then(data => console.log("resolved:", data));
    // .catch(err => console.log(err));

console.log(3);
console.log(4);


// #region test
// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// const getTodosAsync = async () => {
//     const response = await fetch("todos/luigi.json");
//     const data = await response.json();

//     await delay(3000);

//     return data;
// };

// const test = getTodosAsync();

// console.log(test);

// setTimeout(() => {
//     console.log(test);
// }, 3000);
// #endregion


// fetch("todos/luigi.json").then(response => {
//     console.log("resolved", response);
//     return response.json();
// }).then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log("rejected", err);
// });