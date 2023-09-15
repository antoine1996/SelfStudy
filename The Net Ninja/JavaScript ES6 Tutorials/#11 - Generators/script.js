window.onload = function() {
    // function* gen() {
    //     yield console.log("pear");
    //     yield console.log("banana");
    //     yield console.log("apple");
    //     console.log("all done");
    // }

    // var myGen = gen();
    // myGen.next();
    // myGen.next();
    // myGen.next();
    // myGen.next();
    
    // function* gen() {
    //     yield "pear";
    //     yield "banana";
    //     yield "apple";
    //     // console.log("all done");
    //     return "all done";
    // }

    // var myGen = gen();
    // console.log(myGen.next());
    // console.log(myGen.next());
    // console.log(myGen.next());
    // console.log(myGen.next());

    // function* gen() {
    //     var x = yield "pear";
    //     var y = yield "banana";
    //     var z = yield "apple";
    //     // return "all done";
    //     return x + y + z;    
    // }
    // var myGen = gen();
    // console.log(myGen.next());
    // console.log(myGen.next(10));
    // console.log(myGen.next(5));
    // console.log(myGen.next(3));

    var myGenerator =
    function* generator() {
            var tweets = yield $.getJSON("data/tweets.json");
            console.log(tweets);

            var friends = yield $.getJSON("data/fb-friends.json");
            console.log(friends);

            var ytVids = yield $.getJSON("data/yt-vids.json");
            console.log(ytVids);
        };

    genWrapper(myGenerator);

    function genWrapper(generator) {
        // set up generator / iterator
        var myGen = generator();

        // create function to handle the yielded value
        function handle(yielded) {
            if (!yielded.done) {
                yielded.value.then(function(data) {
                    return handle(myGen.next(data));
                });
            }
        }// end handle

        // return handle function, passing in myGen.next
        return handle(myGen.next());
    }// end genWrapper
};