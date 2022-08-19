/* let rabbit = {};

rabbit.speak = function (line) {
    console.log(`The rabbit says: '${line}'`);
}

rabbit.speak("meow"); */

/* class Rabbit {
    constructor(type) {
        this.type = type;
    }
    speak(line) {
        console.log(`The ${this.type} rabbit says ${line}`);
    }
    toString() {
        return `A ${this.type} rabbit`
    }
}
let blackRabbit = new Rabbit("black");
blackRabbit.speak("test");
console.log(blackRabbit.toString()); */

/* class Person {
    constructor(name) {
        this._name = name;
    }
    setName(name) {
        this._name = name;
    }
    getName() {
        return this._name;
    }
}
person = new Person("Metehan");
console.log(person.getName());

person.name = "Metje";              // setter wordt aangeroepen
console.log(person.name);           // getter wordt aangeroepen
        // als er setters en getters zijn, worden ze bij elke instantie opgeroepen
*/
/* class Temperature {
    constructor(celsius) {
        this._celsius = celsius;
    }
    getFahrenheit() {
        return this._celsius * 1.8 + 32;
    }
    setFahrenheit(temp) {
        this._celsius = (temp - 32) / 1.8;
    }
    static FromFahrenheit(temp) {
        return new Temperature((temp - 32) / 1.8);
    }
}

let temp = new Temperature(25);

console.log(temp.getFahrenheit());
console.log(Temperature.FromFahrenheit(77)); */


class Shape{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    describe(){
        console.log(`Shape at (${this.x}, ${this.y}) `);
    }
    static describe(){
        console.log('Shape');
    }
}

class Circle extends Shape {
    constructor(x, y, radius) {
        super(x, y);
        this.radius = radius;
    }
    describe(){
        super.describe();
        console.log('Circle');
        console.log(`My radius is ${this.radius} `);
    }
    static describe(){
        super.describe();
        console.log('Circle');
    }
}
