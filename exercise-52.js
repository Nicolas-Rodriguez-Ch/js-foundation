// Escribe una función llamada posPares que reciba un arreglo y retorne un nuevo arreglo con los valores de las posiciones pares del arreglo que llega como argumento.

// posPares(["a", "b", "c"]); // ["a", "c"]
// posPares([0, 1, 2, 3, 4]); // [0, 2, 4]
// posPares([]); // []
// Nota: Intenta utilizar el método filter de los arreglos.

function posPares(arr) {
    return arr.filter((el, i)=> i % 2===0);
} // -> pa que miento, este ejercicio si no lo entendi, el "el" en la linea 9 no se que esta haciendo

console.log(posPares(["a", "b", "c"])); // ["a", "c"]
console.log(posPares([0, 1, 2, 3, 4])); // [0, 2, 4]
console.log(posPares([])); // []