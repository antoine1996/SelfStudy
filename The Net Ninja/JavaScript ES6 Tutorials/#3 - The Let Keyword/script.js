window.onload = function() {
    // var x = 10;

    // if(x > 5) {
    //     // var x = 5;
    //     let x = 5;
    //     console.log("inside: " + x);
    // }

    // console.log("outside: " + x);

    var items = document.getElementsByTagName("li");

    // for(var x = 0; x < items.length; x++) {
    //     items[x].onclick = function() {
    //         console.log(x);
    //     }
    // }

    for(let x = 0; x < items.length; x++) {
        items[x].onclick = function() {
            console.log(x);
        }
    }

    // console.log(x);
}