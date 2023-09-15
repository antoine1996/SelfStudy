$("#lead-banner").dblclick(function() {
    alert("you double clicked me");
    $(this).off("dblclick");
});

/*

on() - binds an event to matched element(s)
off() - unbinds event from matched element(s)

*/