'use strict';

let button = document.querySelector("button");

button.addEventListener("mousedown", event => {
    if (event.button === 0) { // hier test ik als het alleen op de button telt als ik er met mijn LMK op druk
        console.log("Only the button");
//        event.stopPropagation();
    }
});

let para = document.querySelector("p");

para.addEventListener("mousedown", () => {
    console.log("Para clicked");
});
