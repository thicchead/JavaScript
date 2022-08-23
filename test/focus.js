'use strict'

let help = document.querySelector("#help")
let input = document.querySelectorAll("input")

let textNode;
for (let field of input) {
    field.addEventListener("focus", event => {
        let text = event.target.getAttribute("data-help");
        textNode = document.createTextNode(text)
        help.appendChild(textNode)
    })
    field.addEventListener("blur", event => {
        help.replaceChild(document.createTextNode(" "), textNode)
    })
}

window.addEventListener("keydown", event => {
    if (event.key === "w"){
        document.body.style.backgroundColor = "red"
    }
})

