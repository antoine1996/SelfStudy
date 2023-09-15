var book = document.querySelector("li:first-child .name");

console.log(book.outerHTML);

console.log(book.getAttribute("class"));

book.setAttribute("class", "name-2");

console.log(book.outerHTML);

console.log(book.hasAttribute("class"));

console.log(book.hasAttribute("href"));

book.removeAttribute("class");

console.log(book.outerHTML);

book.setAttribute("class", "name");

console.log(book.outerHTML);