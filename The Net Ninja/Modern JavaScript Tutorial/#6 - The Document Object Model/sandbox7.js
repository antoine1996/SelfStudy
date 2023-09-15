const paras = document.querySelectorAll("p");

paras.forEach(p => {
    if (p.textContent.includes("error")) {
        p.classList.add("error");
    }
    if (p.textContent.includes("success")) {
        p.classList.add("success");
    }
});

const title = document.querySelector(".title");

title.classList.toggle("test");
title.classList.toggle("test");