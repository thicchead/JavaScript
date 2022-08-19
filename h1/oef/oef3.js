let grootte = 8;
let string = "";

for (let i = 0; i <= grootte; i++) {
    for (let j = 0; j < grootte; j++) {
        if ((i + j) % 2 === 0) {          // eerst deed ik j % 2 maar dan zou ik non alternating hashtags hebben
            string += " ";
        } else {
            string += "#";
        }
    }
    string += "\n";
}
console.log(string)

/* for (let i = 0; i < grootte; i++) {
    for (let j = 0; j < grootte; j++) {
        if (i % 2 === 0) {
            if (j % 2 === 0) {
                string += " ";
            } else {
                string += "#";
            }
        } else {
            if (j % 2 === 0) {
                string += "#";
            } else {
                string += " ";
            }
        }
    }
    string += "\n";
}
console.log(string) */