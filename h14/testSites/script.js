'use strict';

/* let picture = document.getElementById("waves");

console.log(`the pic's id is ${picture.id}`)
console.log(`the pictures src is ${picture.src}`)
console.log(`and finally the alt ${picture.alt}`)
console.log("Concludes getelementbyid")
---------------------------------- */
/* let firstAtag = document.getElementsByTagName("a")[0];
console.log(firstAtag.href);

/* let allTags = document.getElementsByTagName("a");
console.log(allTags.href) // all tags zijn href werkt niet
*/
/*
let secondTag = document.getElementsByTagName("a")[1];
console.log(secondTag.href)
console.log("Concludes getelementbytagname")
---------------------------------- */
/* let firstRedClass = document.getElementsByClassName("red")[0];
console.log(firstRedClass.textContent);

let firstP = document.getElementsByTagName("p")[0];
console.log(firstP.textContent);
console.log("Concludes classname + a lil tagname")
------------------------------------- */
/*let classRedElements = document.getElementsByClassName("red");
let list = Array.from(classRedElements);

console.log(list);
console.log("made a lil cheeky list")
------------------------------------*/
/* let allParas = document.getElementsByTagName("p");
let lastPara = allParas[2];
let firstPara = allParas[0];

document.body.insertBefore(lastPara, firstPara);
// elke node mag maar een keer voorkomen dus de drie die van achter stond is verwijderd
---------------------------------------*/
/* let para = document.getElementsByTagName("p")[0];
let rect = para.getBoundingClientRect();
// neemt de info van de border van je element

console.log(`The rectangle is ${rect.width} pixels wide`);
console.log(`And its ${rect.height} pixels high`);

let para1 = document.getElementById("para");
console.log(`king ${para1.style.color}`);
para1.style.color = "gold";
----------------------------------------*/

function count(selector) {
    return document.querySelectorAll(selector).length;
}

console.log(count("p"))
console.log(count("span"))
console.log(count(".animal"))
console.log(count("p .animal")) // animals onder p
console.log(count("p > .animal")) // animals direct onder p
