'use strict';

/* window.addEventListener("click", () => {
    console.log("I have arrived")
});

let button = document.querySelector("button");
button.addEventListener("click", () => {
    console.log("You have clicked on the button")
}); */

/* let button = document.querySelector("button");
button.addEventListener("mousedown", event => {
    if (event.button === 0) {
        console.log("Left click");
    } else if (event.button === 1) {
        console.log("Scroll wheel");
    } else if (event.button === 2) {
        console.log("Right click");
    }
}); */

/*let para = document.querySelector("p");
let button = document.querySelector("button");

para.addEventListener("mousedown", () => {
    console.log("Clicked on the paragraph")
});
button.addEventListener("mousedown", event => {
   console.log("Clicked on the button")
   if (event.button === 0) {
       event.stopPropagation();
   }
}); */

/* document.body.addEventListener("click", event => {
    if (event.target.nodeName === "BUTTON") { // target is hetgene waar je op klikt
        console.log("clicked " + event.target.firstChild.nodeValue);
    }
}); */

/* let link = document.querySelector("a");
link.addEventListener("click", event => {
    console.log("Doesnt work");
    event.preventDefault();
}); */
// gebruik event als het uitmaakt waar je op drukt

/* window.addEventListener("keydown", event => {
    if (event.key === "w") {
        document.body.style.background = "crimson";
        console.log("W gedrukt")
    }
});

window.addEventListener("keyup", event => {
    if (event.key === "w") {
        document.body.style.background = "";
    }
}); */

// let help = document.querySelector("#help");
// let fields = document.querySelectorAll("input");
//
// for (let field of fields) {
//     let textNodeData;
//     field.addEventListener("focus", event => {
//         let text = event.target.getAttribute("data-help");
//         textNodeData = document.createTextNode(text);
//         help.appendChild(textNodeData);
//     });
//     field.addEventListener("blur", event => {
//         help.replaceChild(document.createTextNode(""), textNodeData);
//     });
// }