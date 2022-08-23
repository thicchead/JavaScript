'use strict'

const handleLoad = () => {
    let button = document.querySelector("button");
    button.addEventListener("click", handleClick);
}
const handleClick = (event) => {
    console.log("Loaded")
}
window.addEventListener("load", handleLoad);