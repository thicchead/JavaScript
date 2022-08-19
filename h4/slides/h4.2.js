/*---OBJECTEN---*/
let person = {name: "Metehan", age: 18};
console.log(person.name);
console.log(person.age);

person.age = 22;
console.log(person.age);

person.length = 1.75;
console.log(person);
/*---------------------------------*/
/*---OBJECT DESTRUCTURING---*/
let {age} = person; //age gezet in een variabele
console.log(age)

let {name, length} = person;
console.log(`Person named ${name} is ${length} meters tall.`);