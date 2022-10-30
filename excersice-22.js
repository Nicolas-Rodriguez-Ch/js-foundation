// Escribe una función llamada hola que reciba un argumento (una cadena de texto) y retorne "Hola " seguido del argumento y un signo de exclamación.

// Algunos ejemplos de cómo invocaríamos esta función y lo que debería retornar:

// hola("Pedro"); // retorna: "Hola Pedro!"
// hola("Juan"); // retorna: "Hola Juan!"
// hola(""); // retorna: "Hola !"

function hola(name) {
    return `Hola ${name}!`
}
console.log(hola("Pedro"));
console.log(hola("Juan"));
console.log(hola(""));