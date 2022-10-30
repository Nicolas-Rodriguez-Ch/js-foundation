// Escribe un programa que piense un número de forma aleatoria y le pida al usuario que lo trate de adivinar (como en uno de los ejercicios anteriores). La diferencia es que esta vez el usuario puede intentar indefinidamente hasta que encuentre el número.

let message = prompt("adivina un número del 1 al 10");
let randomNum = Math.floor(Math.random()*10)+1;

while (parseInt(message) !== randomNum) {
    message = prompt("adivina otro del 1 al 10");
}
console.log("Muy bien! Lo adivinaste");