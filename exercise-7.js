// Escribe un programa que piense un número de forma aleatoria del 1 al 10 y le pida al usuario que lo trate de adivinar. Si el número es correcto debe imprimir en la consola "Felicitaciones, ese era!", de lo contrario debe imprimir "Lo siento, intenta nuevamente!"

let randomNum = Math.floor(Math.random()*11) +1 ;
let guess = prompt("Adivina un número del 1 al 10");

randomNum === parseInt(guess) ? console.log("Felicitaciones! Ese era!") : console.log("Lo siento, sigue intentando");;