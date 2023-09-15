// variables & block scope
const age = 30;

if(true){
    const age = 40;
    const name = "shaun";
    console.log("inside 1st codeblock: ", age, name);

    if(true){
        const age = 50;
        console.log("inside 2nd codeblock: ", age);
    }
}

console.log("outside codeblock: ", age, name);