// Escribe una función llamada pares que reciba un arreglo de números y retorne un nuevo arreglo con los números pares únicamente:

// pares([0, 1, 2, 3, 4]); // [0, 2, 4]
// pares([120, 876, 934, 1298]); // [120, 876, 934, 1298]
// pares([7, 921, 43, 9649]); // []
// Nota: Intenta utilizar el método filter de los arreglos para solucionar este ejercicio.

// function pares(arr) {
//     let newArr = [];
//     arr.forEach(elem => {
//         if (elem % 2=== 0) {
//             newArr.push(elem);
//         }
//     });
//     return newArr;
// } // -> respuesta escrita para probrar que si supiera hacerlo sin necesidad del metodo filter.

function pares(arr) {
    return arr.filter( num => num %2===0)
} // uuff si, esto es mucho más sencillo y menos engorroso. 

console.log(pares([0, 1, 2, 3, 4])); // [0, 2, 4]
console.log(pares([120, 876, 934, 1298])); // [120, 876, 934, 1298]
console.log(pares([7, 921, 43, 9649])); // []