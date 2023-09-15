// $("section").wrap("<div>");
// $("section").unwrap();
// $("section").wrapAll("<div>");

/*

wrap() - wraps all matched elements individually
unwrap() - unwraps all matched elements
wrapAll() - wraps all elements combined with 1 single element

*/

var wrapper = "<div class='wrapper'>";
var button = $(".button");
var wrapped = true;

button[0].onclick = function() {
    if (wrapped) {
        $("section").unwrap();
        button.text("Wrap");
    } else {
        $("section").wrapAll(wrapper);
        button.text("Unwrap");
    }
    wrapped = !wrapped;
};