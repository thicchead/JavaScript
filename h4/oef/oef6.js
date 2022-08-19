function reverseArray(array) {
    let reversed = [];
    for (let i = array.length - 1; i > -1; i--) {
        reversed.push(array[i]);
    }
    return reversed;
}

console.log(reverseArray([1, 2, 3]));