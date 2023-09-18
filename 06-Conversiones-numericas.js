console.log('parseInt ("42)', Number.parseInt("42")); // 42
console.log('parseInt ("42$)', Number.parseInt("42$")); // 42
console.log('parseInt ("Num. 42)', Number.parseInt("Num. 42")); // NaN
console.log('parseInt ("A)', Number.parseInt("A")); // NaN

console.log('parseInt ("11101", 2)', Number.parseInt("11101", 2)); // 29 en binario
console.log('parseInt ("31", 8)', Number.parseInt("31", 8)); // 25 en octal
console.log('parseInt ("FF", 16)', Number.parseInt("FF", 16)); // 255 en hexadecimal

console.log('parseFloat ("42.5")', Number.parseFloat("42.5")); // 42.5
console.log('parseFloat ("42,5")', Number.parseFloat("42,5")); // 42
console.log('parseFloat ("42$")', Number.parseFloat("42$")); // 42
console.log('parseFloat ("Num. 42")', Number.parseFloat ("Num. 42")); // NaN
console.log('parseFloat ("A")', Number.parseFloat ("A")); // NaN