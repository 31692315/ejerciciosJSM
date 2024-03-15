console.log("6. Calcular el área y el volumen de un cilindro: ");
console.log("Ingrese radio del cilindro: ");
let radio = 15;
console.log(radio)
console.log("Ingrese volumen del cilindro: ");
let altura = 10;
console.log(altura)

let pi = 3.1416;

//proceso area
let resultado_a = (pi**2*radio*altura*pi**2*radio**2);
//proceso perimetro
let resultado_v = (pi*radio**2*altura);

//salida área
console.log("El área del cilindro es: ")
console.log(resultado_a);

//salida área
console.log("El volumen del cilindro es: ")
console.log(resultado_v);