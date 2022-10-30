// Función es Multiplo
// Escribe una función llamada esMultiplo que reciba dos números y retorne verdadero si el primer argumento es múltiplo del segundo.

// Ejemplos de cómo vamos a invocar la función:

// esMultiplo(15, 3); // true
// esMultiplo(8, 5); // false
// esMultiplo(21, 7); // true

function esMultiplo(num1, num2) {
    if (num1 % num2 === 0 ) {
        return true
    } else {
        return false
    }
} // -> mi respuesta

// function esMultiplo(num1, num2) {
//     return num1 % num2 === 0;
//   }

console.log(esMultiplo(15,3));
console.log(esMultiplo(8,5));
console.log(esMultiplo(21,7));