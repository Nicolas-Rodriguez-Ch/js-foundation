// Escribe una función llamada multiplicar que reciba un arreglo (de números) y un número. La función debe retornar un nuevo arreglo con cada número multiplicado por segundo número:

// multiplicar([1, 2, 3], 2); // [2, 4, 6]
// multiplicar([7, 4], 3); // [21, 12]
// multiplicar([], 10); // []
// Nota: intenta utilizar el método map de los arreglos.

function multiplicar(arr, factor) {
    return arr.map(elem => elem * factor);
}

console.log(multiplicar([1, 2, 3], 2)); // [2, 4, 6]
console.log(multiplicar([7, 4], 3)); // [21, 12]
console.log(multiplicar([], 10)); // []