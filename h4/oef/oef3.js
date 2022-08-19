// DONT KNOW HOW IT WORKS

/* function fibonacci(number) {
    let fibList = [];
    if (number === 0) {
        fibList.push(1);
    } else if (number === 1) {
        fibList.push(1);
    } else {
        fibList.push(fibonacci(number - 2) + fibonacci(number - 1));
    }
    return fibList;
}

console.log(fibonacci(5)); */


// OPGEZOCHT
/* function fib(number) {
    if (number < 2) {
        return number;
    }
    return fib(number - 2) + fib(number - 1); // Fn-1 + Fn-2
}

console.log(fib(4)) */

function fibonnaci(num) {
    if (num <= 2) {
        return 1;
    } else {
        return fibonnaci(num - 2) + fibonnaci(num - 1);
    }
}
console.log(fibonnaci(7))