// Declarando
class User {};
// Instancia de una clase
//const newUser = new User();

class user {
    // metodos
    greeting() {
        return 'Hello';
    }
};

const gndx = new user();
console.log(gndx.greeting());

// constructor
class user {
    constructor() {
        console.log('Nuevo Usuario');
    }
    greeting() {
        return 'Hello';
    }
}

const david = new user();

// this
class user {
    constructor(name) {
        this.name = name;
    }
    speak() {
        return 'Hello';
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }
}

const juan = new user('Juan');
console.log(juan.greeting());

// setters getters

class user {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    //private
    #speak() {
        return 'Hello';
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }
    get uAge() {
        return this.age;
    }
    set uAge(n) {
        this.age = n;
    }
}

const xavi = new user('David', 15);
console.log(xavi.uAge);
console.log(xavi.uAge = 20);
