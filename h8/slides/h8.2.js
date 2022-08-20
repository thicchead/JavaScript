/*---TRY CATCH TESTERS---*/
'use strict'

/* function double(number) {
    if (typeof number != 'number') {
        throw new Error("This is not a number");
    }
    if (number === 0) {
        throw new Error("You can't double zero");
    }
    return number * 2;
}

try {
    let result = double(12);
    console.log(result);
} catch (error) {
    console.log(`Error message: ${error.message}`);
} */

class TooShortError extends Error{}
class WrongDirError extends Error{}

function directionQuestion(question) {
    let dir = prompt(question);
    if (dir.toLowerCase() === "left") {
        return "L";
    }
    if (dir.toLowerCase() === "right") {
        return "R";
    }
    if (dir.length < 4) {
        throw new TooShortError("Too short");
    } throw new WrongDirError("Not a direction bozo");

}

function look() {
    if (directionQuestion("Where do you wanna go? ") === "L") {
        return "trap house";
    } else {
        return "crack house";
    }
}

try {
    console.log(`You see a ` + look());
} catch (error) {
    if (error instanceof TooShortError) {
        console.log(`${error.message}`);
    } if (error instanceof WrongDirError) {
        console.log(`${error.message}`);
    }
}
