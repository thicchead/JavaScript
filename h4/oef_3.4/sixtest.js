let array = [1, 2, 3];

console.log(array.length);
let num = array.length - 1;
array[0] = array.unshift(array.length-1)
console.log(array)
console.log(num)
