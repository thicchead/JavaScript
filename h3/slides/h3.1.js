/* const square = function (x) {
    return x * x;
};
console.log(square(5)) */

let nummer = 10;
console.log(dubbelen(nummer))

function dubbelen(x) {
    return x * 2
}

const power = (base, exponent) => {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result *= base;
    }
    return result;
}
console.log(power(2, 5));

const square = (x) => {return x * x;}
const square1 = x => x * x;