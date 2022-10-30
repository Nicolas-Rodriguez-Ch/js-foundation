// Escribe una función llamada crearRango que reciba dos números y retorne un arreglo con los números desde el primer números hasta el segundo (incluyéndolo):

// crearRango(1, 3); // [1, 2, 3]
// crearRango(5, 10); // [5, 6, 7, 8, 9, 10]
// crearRango(0, 0); // [0]

function crearRango(num1, num2) {
    let arr = [];
    for (let i = num1; i <= num2; i++) {
        arr.push(i)        
    }
    return arr;
}

console.log(crearRango(1, 3)); // [1, 2, 3]
console.log(crearRango(5, 10)); // [5, 6, 7, 8, 9, 10]
console.log(crearRango(0, 0)); // [0]