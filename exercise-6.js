// Escribe un programa que le pida un número al usuario e imprima en la consola si el número es mayor o menor/igual a 10.

// Si es mayor debe imprimir "El número es mayor a 10".

// Si es menor debe imprimir "El número es menor o igual a 10".

let message = prompt("Escribe un numero");
let num = parseInt(message);

num > 10 ?  console.log("El número es mayor que 10"):console.log("El número es menor o igual que 10");