// Escribe una función llamada contrasena que reciba un string y retorne otro string realizando los siguientes cambios sobre el string de entrada:

// Las mayúsculas se reemplazan por minúsculas.
// Se eliminan los espacios en blanco.
// Reemplaza el caracter "a" por "4".
// Reemplaza el caracter "e" por "3".
// Reemplaza el caracter "i" por "1".
// Reemplaza el carater "o" por "0".
// contrasena("hola"); // "h0l4"
// contrasena("esta es una prueba"); // "3st43sun4pru3b4"
// contrasena(""); // ""
function contrasena(string) {
    let stringPass = string.replace(/a/g,"4")
                           .replace(/e/g, "3")
                           .replace(/i/g, "1")
                           .replace(/o/g, "0")
                           .replace(/ /g, "")
    return stringPass
}

console.log(contrasena("hola")); // "h0l4"
console.log(contrasena("esta es una prueba")); // "3st43sun4pru3b4"
console.log(contrasena("")); // "