console.log("7. Determinar si un año es bisiesto: ");
console.log("Ingrese la cantidad de días del año: ");
let num1 = 364;
console.log(num1)
  if (num1 > 365) {
    console.log ("El año es bisiesto");
  } else if (num1 == 365) {
    console.log ("Es un año normal");
  } else {
    console.log ("No es posible que un año tenga esa cantidad de dias");
  }