const bookList = document.querySelector("#book-list");
console.log("the parent node is:", bookList.parentNode);
console.log("the parent node is:", bookList.parentElement.parentElement);

console.log(bookList.childNodes);   // includes text (\n) nodes
console.log(bookList.children);