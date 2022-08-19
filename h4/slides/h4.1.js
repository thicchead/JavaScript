let listOfNumbers = [1, 5, 7, 9, 11];
let emptyArray = [];

/* console.log(listOfNumbers[2]);
console.log(listOfNumbers.length); */

/* for (let number of listOfNumbers) {
    console.log(number);
} /*

/*
--Methoden--
indexOf, lastIndex: vinden, laatste vinden
pop: laatste verwijderen
push: vanachter bijzetten list[list.length] = x --> kan als je hvlh niet weet
shift: verwijdert vooraan
unshift: plaatst vooraan
slice: kopie van index tot index
concat: 2 elementen samenvoegen
 */

function optellen(...getallen) {            // rest operator (meerdere argumenten)
    let aantal = 0;
    for (let getal of getallen) {
        aantal += getal;
    }
    return aantal;
}
console.log(optellen(15, 9, 3, 2));

let lijst = [15, 9 ,3, 2];
console.log(optellen(...lijst))             // spread operator (lijst zijn elementen worden uitgepakt)

// const printRij2 = ([rij1, rij2, ...rijen]) => {console.log(rij2)}

function printRij2 ([rij1, rij2, ...rijen]) {
    console.log(rij2);
    console.log(`Rij 1 was [${rij1}]`);
}
let meerdereRijen = [[1, 2], [3, 4], [4, 5]];
printRij2(meerdereRijen);
