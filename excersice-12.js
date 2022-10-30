// Escribe un programa para la consola que le pida al usuario su año de nacimiento e imprima en la consola la generación a la que pertenece:

// "Gran generación" si el año es menor a 1945
// "Baby boomer" si es entre 1945 y 1964
// "X" si es entre 1965 y 1981
// "Millenial" si es entre 1982 y 1994
// "Z" si es igual o mayor a 1995
// Por ejemplo, si el usuario ingresa el año 1920 el programa de imprimir "Gran generación".

let message = prompt("En que año naciste");
let num = parseInt(message);

if (num < 1945) {
    console.log("Eres parte de la 'Gran generación'");
} else if (num >= 1945 && num < 1964 ) {
    console.log("Eres parte de la generación 'Baby boomers'");
} else if (num >= 1965 && num < 1981){
    console.log("Eres parte de la generación 'X'");
} else if (num >= 1982 && num < 1994) {
    console.log("Eres de la generación 'millenial'");
} else if (num >= 1995){
    console.log("eres parte de la generacipon 'Z'");
}