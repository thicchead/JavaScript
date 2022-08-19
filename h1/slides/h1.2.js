/*
expression = stuk code die een waarde produceert
                --> kunnen sub expressions bevatten

statement = instructie of opdracht
                --> maak deze variabele, deze waarde, verhoog a met 1, ...

bindings = variabale aanmaken met let of const

    primitive datatypes = variabelen worden opgeslagen in de stack
                (stukje geheugen die al een vaste plaats inneemt)
    reference datatypes = variabele naam is in stack, waarde in de heap
                (meestal moeilijkere, ingewikkeldere waardes bv. lists, objects)
    geen referentie naar een waarde in de heap --> garbage (locatie vrij)

environment = verzameling van bindings
*/
/*---------------------------------------------*/
/* let number = Number(prompt("Number = "));
console.log(number); */

/* if (number <= 10) {
    console.log("Smaller than 10")
} else if (number <= 50) {
    console.log("Smaller than 50")
} else {
    console.log("Bigger than 50")
} */

/* if (Number.isNaN(number)) {
    console.log("bitch")
} else {
    console.log("good job")
} */

/* let number = 0;
while (number <= 10) {
    console.log(number);
    number += 1;
}
console.log(number) */

let nummer = 2;
let macht = 1;

while (macht < 4) {
    console.log(`${nummer} * 2`)
    nummer *= 2;
    macht++;
}
console.log(nummer)
