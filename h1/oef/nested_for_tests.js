let aantalLijnen = 5;
let string = "";

/* for (let i = 1; i <= aantalLijnen; i++) {
    for (let j = 0; j < i; j++) {
        string += "#";
    }
    string += "\n";
}
console.log(string); */


for (let i = 1; i <= aantalLijnen; i++) {
    for (let j = 0; j < aantalLijnen - i; j++) {
        string += " ";
    }
    for (let k = 0; k < i; k++) {
        string += "#";
    }
    string += "\n";
}
console.log(string)