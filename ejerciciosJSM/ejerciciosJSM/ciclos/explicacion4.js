person = {pnombre: "Lu", apellido: "Lim", edad: 23 };

let text = "";
for (let x in person) {
    text += person[x] +" ";
    console.log(text);
}

