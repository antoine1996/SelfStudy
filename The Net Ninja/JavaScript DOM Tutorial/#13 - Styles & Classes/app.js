const list = document.querySelector("#book-list ul");

// delete books
list.addEventListener("click", function(e) {
    if (e.target.className == "delete") {
        const li = e.target.parentElement;
        list.removeChild(li);
    }
});



// add books
const addForm = document.forms['add-book'];

addForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const value = addForm.querySelector("input[type='text']").value;

    // create elements
    const li = document.createElement("li");
    const bookName = document.createElement("span");
    const deleteBtn = document.createElement("span");

    // add content
    deleteBtn.textContent = "delete";
    bookName.textContent = value;

    // add classes
    // li.style.color = "red";
    // li.style.marginTop = "60px";
    // li.className = "test";
    // li.className = "test2";
    // li.className += " test4";

    bookName.classList.add("name");
    // bookName.classList.remove("name");
    deleteBtn.classList.add("delete");

    // append to DOM
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li);
});