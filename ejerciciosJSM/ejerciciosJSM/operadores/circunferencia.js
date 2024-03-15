console.log("7. Calcular la longitud y el área  de un cilindro: ");
console.log("Ingrese radio del circulo: ");
let radio = 15;
console.log(radio);

let pi = 3.1416;
let diametro = (radio*2);

//proceso area
let resultado_a = ((pi*radio)**2);
//proceso longitud
let resultado_l = (diametro*pi);

//salida área
console.log("El área del circulo es: ")
console.log(resultado_a);

//salida longitud
console.log("La longitud del circulo es: ")
console.log(resultado_l);