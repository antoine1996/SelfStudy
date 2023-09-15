window.onload = function() {
    // function* gen() {
    //     var x = yield 10;
    //     console.log(x);
    // }
    // var myGen = gen();
    // console.log(myGen.next());
    // console.log(myGen.next(10));

    var myGenerator =
    function* generator() {
            var tweets = yield $.get("data/tweets.json");
            console.log(tweets);

            var friends = yield $.get("data/friends.json");
            console.log(friends);

            var videos = yield $.get("data/videos.json");
            console.log(videos);
        };

    genWrap(myGenerator);

    function genWrap(generator) {
        // set up generator / iterator
        var gen = generator();

        // create function to handle the yielded value
        function handle(yielded) {
            if (!yielded.done) {
                yielded.value.then(function(data) {
                    return handle(gen.next(data));
                });
            }
        }// end handle

        // return handle function, passing in gen.next
        return handle(gen.next());
    }// end genWrapper
};