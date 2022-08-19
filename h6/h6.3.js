let symbol = "String";
console.log(symbol === Symbol("String"));
//      --> elke symbool is een unieke waarde

/* let name = "Metehan";
let nameIterator = name[Symbol.iterator]();
let element = nameIterator.next();

while (!element.done) {
    console.log(element.value);
    element = nameIterator.next();
} */ // is gewoon een for each