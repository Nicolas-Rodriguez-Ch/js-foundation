// Escribe una función llamada contarAs que reciba un string (una cadena de texto) y retorna el número de caracteres "a" (minúscula) hay:

// contarAs("Hola Pablo"); // 2
// contarAs("Hasta la próxima"); // 4
// contarAs("Bien Pedro!"); // 0

function contarAs(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i]=== "a") {
            count ++
        }        
    }
    return count;
}


console.log(contarAs("Hola Pablo")); // 2
console.log(contarAs("Hasta la próxima")); // 4
console.log(contarAs("Bien Pedro!")); // 0