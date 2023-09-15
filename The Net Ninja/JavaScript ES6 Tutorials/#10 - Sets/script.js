window.onload = function() {
    // var names = new Set();

    // names.add("Shaun").add("Ryu").add("Crystal").add("Ryu");
    // names.add("Shaun").add("Ryu").add("Crystal");
    // console.log(names.delete("Crystal"));
    // names.delete("Crystal");
    // console.log(names.has("Ryu"));
    // console.log(names.has("Crystal"));
    // names.clear();
    // console.log(names.size);

    // console.log(names);

    var ninjas = ["shaun", "crystal", "yoshi", "ryu", "yoshi", "ryu"];

    var refinedNinjas = new Set(ninjas);
    
    console.log(refinedNinjas);
    
    ninjas = [...refinedNinjas];

    console.log(ninjas);
}