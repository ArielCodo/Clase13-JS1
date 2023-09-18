// Limpiamos la consola
console.clear();

// Uso de prompt con Math.

// Pedimos el valor de los catetos
let cateto1 = prompt("Valor del primer cateto:","");
let cateto2 = prompt("Valor del segundo cateto:","");

// Calculamos el valor de la hipotenusa
let hipotenusa = Math.sqrt(Math.pow(cateto1,2) + Math.pow(cateto2,2));

// Mostramos los resultados en la consola
console.log("Teorema de Pitágoras"); 
console.log("Cat1:", cateto1, "Cat2:",cateto1, "Hipotenusa:", hipotenusa);

// Y tambien con un alert
alert("Cat1: "+ cateto1+ " Cat2: "+cateto1+ " Hipotenusa: "+ hipotenusa);

