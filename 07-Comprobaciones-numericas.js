// Utiliza console.log() para ver los resultados en la consola.
console.clear();


// ¿Número finito?
Number.isFinite(42);       // true
Number.isFinite(Infinity); // false, es infinito

// ¿Número entero?
Number.isInteger(5);   // true
Number.isInteger(4.6); // false, es decimal

// ¿Número seguro?
Number.isSafeInteger(1e15); // true
Number.isSafeInteger(1e16); // false, es un valor "no seguro"

// ¿No es un número?
Number.isNaN(NaN);  // true
Number.isNaN(5);    // false, es un número
