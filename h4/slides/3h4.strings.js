/*---STRING FUNCTIONS---*/

/*
--Functions--
toUpperCase, toLowerCase
indexOf, lastIndexOf
slice: maak een substring tussen indexen
trim: verwijder spaties vooraan en achteraan
split: spilts een string en maak er een array van (arg = char waar de splitsing moet gebeuren)
join: voeg een array samen in een string
repeat
*/

let str = "   wwwaaawww        ";
console.log(str.trim());        // kan de w's niet trimmen

let trimmed = str.trim();
let onlyA = trimmed.slice(3, 6);
console.log(onlyA);

let numberArray = [1, 2, 3, 4, 5];
let numbers = numberArray.join(",");
console.log(numbers)

let string = "deze woorden gaan allemaal apart staan in een array";
let arrayZin = string.split(" ");
console.log(arrayZin);

for (let woord of arrayZin) {
    console.log(woord);
}
