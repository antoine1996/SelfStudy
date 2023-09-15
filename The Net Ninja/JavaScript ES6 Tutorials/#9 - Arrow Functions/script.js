window.onload = function() {
    // var ninjaGreeting = function() {
    //     console.log("hiiiiiya");
    // };
    // var ninjaGreeting = () => {
    //     console.log("hiiiiiya");
    // };
    // ninjaGreeting();
    // var ninjaGreeting = (name) => console.log(`${name} says hiiiiiya`);
    // var ninjaGreeting = name => console.log(`${name} says hiiiiiya`);
    // ninjaGreeting("Mark");

    var ninja = {
        name: "Ryu",
        // chop(x) {
        //     var _this = this;
        //     window.setInterval(function() {
        //         if (x > 0) {
        //             // console.log(this.name + " chopped the enemy");
        //             console.log(_this.name + " chopped the enemy");
        //             x--;
        //         }
        //     }, 1000);
        chop(x) {
            window.setInterval(() => {
                if (x > 0) {
                    console.log(this.name + " chopped the enemy");
                    x--;
                }
            }, 1000);
        }
    };

    ninja.chop(5);
}