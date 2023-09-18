// Uso de algunos métodos de Math.
let cateto1 = 10;
let cateto2 = 15;
let cateto1 = prompt("Valor del primer cateto:","");
let cateto2 = prompt("Valor del segundo cateto:","");

let hipotenusa = Math.sqrt(Math.pow(cateto1,2) + Math.pow(cateto2,2))

document.write("<h3>Teorema de Pitágoras</h3>"); 
document.write("<p>Calculamos el valor de la hipotenusa de un triángulo rectángulo a partir del valor de los dos catetos:</p>"); 
document.write("<p>Cat1 = ", cateto1, "<br>Cat2 = ",cateto2, "<br>Hipotenusa = ", hipotenusa,"</p>")

