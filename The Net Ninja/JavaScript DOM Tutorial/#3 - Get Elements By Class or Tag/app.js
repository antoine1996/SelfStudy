// var lis = document.getElementsByTagName("li");
// console.log(lis[0]);
// console.log(lis[2]);

var titles = document.getElementsByClassName("title");

// for (i = 0; i < titles.length; i++) {
//     console.log(titles[i]);
// }

// console.log(Array.isArray(titles));
// console.log(Array.isArray(Array.from(titles)));
// console.log(titles);

Array.from(titles).forEach(function(item) {
    console.log(item);
});