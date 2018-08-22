//
class User {
    constructor(username, email, age = 10) {
        this.username = username;
        this.email = email;
        this.age = age;
    }

    static register(...args) {
        return new User(...args);
    }

    // get and set accessors.
    // could be used for computed properties.
    get age10yearslater() {
        return this.age + 10;
    }

    set newage(newAge) {
        this.age = newAge;
    }

    changeEmail(newEmail) {
        this.email = newEmail;
    }
}

let user = new User('Arthur', 'support@inception.com');
let user2 = User.register('Ariadne', 'support@inception.com');

user.changeEmail('foo@inception.com');

console.dir(user);
console.dir(user2);
console.dir(user.age10yearslater);
user.newage = 30;
console.dir(user.age);


//
function log(strategy) {
    strategy.handle();
}

log(new class {
    handle() {
        console.log('Using this console.log strategy to log.');
    }
});

class ConsoleLogger {
    handle() {
        console.log('Using ConsoleLogger strategy to log.');
    }
}

log(new ConsoleLogger());