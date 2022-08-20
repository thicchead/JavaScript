// 1.a
/* function calcMin(num1, num2) {
    if (num1 < num2) {
        return num1;
    } else {
        return num2;
    }
}
console.log(calcMin(5, 2)); */

//1.b
function calcMin(...numbers) {
    let minimum = 1000000000;
    for (number of numbers) {
        if (number < minimum) {
            minimum = number;
        }
    }
    return minimum;
}
console.log(calcMin(846, 1235, 5638, 236));