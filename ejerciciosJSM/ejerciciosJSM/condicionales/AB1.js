console.log("4. Determinar si numero A es mayor que numero B, si es asi, sumarlos: ");
console.log("Ingrese numero A: ");
let num1 = 7;
console.log(num1)
console.log("Ingrese numero B: ");
let num2 = 4;
console.log(num2);
  if (num1 > num2) {
    console.log ("Numero A es mayor, el resultado de la suma es: ");
    let suma = (num1+num2);
    console.log(suma)
  } else if (num1 < num2) {
    console.log ("Numero B es mayor asi que no habra suma");
  } else {
    console.log ("Los numeros son iguales");
  }