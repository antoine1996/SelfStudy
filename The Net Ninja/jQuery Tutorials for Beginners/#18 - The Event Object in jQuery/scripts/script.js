$(document).ready(function() {
    $("*").on("click", function(e) {
        console.log(e.target);
        console.log("The even type is: " + e.type);
        console.log("X co-ordinate of the event is: " + e.pageX);
        console.log("Y co-ordinate of the event is: " + e.pageY);
        e.stopPropagation();
    });
});