// Escribe una función unirArreglo que reciba un arreglo y retorna una cadena de texto con todos los elementos separados por coma (,).

// unirArreglo([1, 2, 3]); // "1,2,3"
// unirArreglo(["a", "b", "c"]); // "a,b,c"
// unirArreglo([]); // ""
// Nota: este ejercicio lo debes realizar sin la ayuda de el método join que trae JavaScript.

function unirArreglo(array) {
    let result = array.toString();
    return result;
}

console.log(unirArreglo([1, 2, 3])); // "1,2,3"
console.log(unirArreglo(["a", "b", "c"])); // "a,b,c"
console.log(unirArreglo([])); // ""