/*---JSON---*/

let person = {
    name: "metehan",
    hobbies: ["balling", "gaming"]
};

let personJSON = JSON.stringify(person);

// console.log(person) { name: 'metehan', hobbies: [ 'balling', 'gaming' ] }
console.log(`JSON format = ${personJSON}`); // {"name":"metehan","hobbies":["balling","gaming"]}

let person2 = JSON.parse(personJSON);
console.log(person2); // { name: 'metehan', hobbies: [ 'balling', 'gaming' ] }
            // (`Object format = ${person2}`) werkt niet

