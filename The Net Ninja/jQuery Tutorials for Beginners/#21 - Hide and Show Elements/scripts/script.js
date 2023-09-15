$(document).ready(function() {

    // $("section > h2").on("click", function() {
    //     $(this).hide(1000).show(1000);
    // });
    
    $("img[alt=map]").on("click", function() {
        $("section > h2").toggle(1000);
    });

});