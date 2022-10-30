// Escribe un programa que le pida al usuario una frase y un número. El programa debe imprimir la frase en la consola el número de veces que ingresó el usuario.

// Por ejemplo, si el usuario ingresó la frase "Hola Mundo" y el número 5, el programa debe imprimir "Hola Mundo" 5 veces:

// Hola Mundo
// Hola Mundo
// Hola Mundo
// Hola Mundo
// Hola Mundo

let message = prompt("Escribe una frase");
let num = prompt("Escribe un número");

for (let index = 0; index < parseInt(num); index++) {
    console.log(message);
}