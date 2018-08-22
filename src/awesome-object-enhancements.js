// Object shorthand & Short method syntax

function getPerson() {
    let name = 'John';
    let age = 25;

    return {
        name,
        age,
        greet() {
            return `Hello, ${this.name}`;
        }
    };
}

console.log(getPerson());
console.log(getPerson().name);
console.log(getPerson().age);
console.log(getPerson().greet());


// Object destructuring
let person = {
    name: 'Karen',
    age: 32
}

let { name, age } = person;

console.log(name);
console.log(age);


//
function getData({ name, age }) {
    console.log(`Hello, ${name}. You are ${age}.`);
}

getData({
    name: 'Jack',
    age: 32
})