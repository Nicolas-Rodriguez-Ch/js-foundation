// Escribe una función llamada elemento que recibe un arreglo como parámetro. La función debe devolver el valor que se encuentra en la tercera posición. Si el arreglo no tiene al menos 3 elementos deberá retornar -1.

// elemento([1, 2, 3]); // retorna 3
// elemento(["d", "e", "f", "g"]); // retorna "f"
// elemento([5]); // retorna -1

function elemento(arr) {
    let newElem;
    if (arr.length > 2) {
        for (let i = 0; i < arr.length; i++) {
        newElem = arr[2];
    }
    } else {
        newElem = -1
    }
    return newElem;   
} // -> mi respuesta

// function elemento(arr) {
//     if(arr.length < 3) {
//       return -1;
//     }
//     return arr[2];
//   } -> respuesta sugerida

console.log(elemento([1, 2, 3])); // retorna 3
console.log(elemento(["d", "e", "f", "g"])); // retorna "f"
console.log(elemento([5])); // retorna -1