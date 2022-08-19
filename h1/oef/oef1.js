/* let aantalLijnen = 7;
let hashtag = "";
for (let i = 1; i <= aantalLijnen; i++) {
    for (let j = 0; j < i; j++) {
        hashtag += "#";
    }
    console.log(hashtag)
}
console.log("\n") */                    // bolde niet

let aantalLijnen = 7;
let string = "";
/* for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
        string += "*";
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