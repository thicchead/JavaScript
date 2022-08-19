let name = "Metehan";
let age = 18;
const print = function () {
    console.log(`${this.name}'s age is ${this.age}`);
}
let person = {name, age, print};

person.print();