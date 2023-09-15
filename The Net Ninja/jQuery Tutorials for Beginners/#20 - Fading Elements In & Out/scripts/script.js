$(document).ready(function() {
    function complete() {
        alert("Animation complete");
    }

    $("section > h2").on("click", function() {
        // $(this).animate({"opacity": "0.5"});
        // $(this).fadeOut(2000).fadeIn(500);
        $(this)
            .fadeTo(200, 0.2)
            .fadeTo(200, 0.8)
            .fadeTo(200, 0.2)
            .fadeTo(200, 0.8)
            .fadeTo(200, 0.2)
            .fadeTo(200, 0.8);
    });
});