window.onload = function() {
    var name = "Crystal";
    var belt = "Black";

    var ninja = {
        // name: name,
        // belt: belt
        name,
        belt,
        // chop: function(x) {
        //     console.log(`you chopped the enemy ${x} times`);
        // }
        chop(x) {
            console.log(`you chopped the enemy ${x} times`);
        }
    };

    // console.log(ninja.name);
    // console.log(ninja.belt);
    console.log(ninja.chop(5));
}