function countB(string) {
    let amount = 0;
    for (let letter of string) {
        if (letter === "b") {
            amount++;
        }
    }
    return amount;
}

console.log(countB("abcdefg"));