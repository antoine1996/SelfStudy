function User(email, name) {
    this.name = name;
    this.email = email;
    this.online = false;
    this.login = function() {
        console.log(this.email, "has logged in");
    }
}

var userOne = new User("ryu@ninjas.com", "Ryu");
var userTwo = new User("yoshi@mariokorp.com", "Yoshi");

console.log(userOne);
userTwo.login();