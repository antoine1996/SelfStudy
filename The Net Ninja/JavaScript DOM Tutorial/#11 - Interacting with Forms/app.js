const list = document.querySelector("#book-list ul");

// delete books
list.addEventListener("click", function(e) {
    if (e.target.className == "delete") {
        const li = e.target.parentElement;
        list.removeChild(li);
    }
});

// var forms = document.forms;
// console.log(forms);
// var form = document.forms[0];
// var form = document.forms["add-book"];
// console.log(form);

// add books
const addForm = document.forms['add-book'];

addForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const value = addForm.querySelector("input[type='text']").value;
    console.log(value);
});