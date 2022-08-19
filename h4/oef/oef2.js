// OPGEZOCHT
function isEven(number) {
    if (number === 0) {
        return true;
    } else if (number === 1) {
        return false;
    } else {
        number -= 2;
        return isEven(number);
    }
}

console.log(isEven(357));