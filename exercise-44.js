// Escribe una función llamada obtenerValor que reciba un objeto y un string (que representa una llave en el objeto). La función deberá retornar el valor que tenga la llave que llega como segundo parámetro. Si la llave no existe retorna false:

// obtenerValor({ a: 1, b: 2, c: 3 }, "a"); // 1
// obtenerValor({ a: 1, b: 2, c: 3 }, "b"); // 2
// obtenerValor({ b: 2, c: 3 }, "a"); // false

function obtenerValor(obj, str) {
    if (obj[str]) {
        return obj[str];
    }
    return false;
}

console.log(obtenerValor({ a: 1, b: 2, c: 3 }, "a")); // 1
console.log(obtenerValor({ a: 1, b: 2, c: 3 }, "b")); // 2
console.log(obtenerValor({ b: 2, c: 3 }, "a")); // false