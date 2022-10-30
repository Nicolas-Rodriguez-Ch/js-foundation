// El índice de masa corporal (IMC), o BMI por sus siglas en inglés, es un valor que determina la cantidad de grasa de una persona.

// El BMI se calcula con la siguiente formula:

// peso / altura^2

// Escribe un programa que le pida al usuario su peso y altura. El programa deberá calcular el BMI e imprimir:

// "Bajo de peso" si el BMI < 18.5
// "Normal" si está entre 18.5 y 24.9
// "Sobrepeso" si está entre 25 y 29.9
// "Obeso" si es igual o mayor a 30

let weight = prompt("escribe tu peso");
let height = prompt("escribe tu altura");

    let yourBmi = parseFloat(weight) / Math.pow(parseFloat(height), 2);
    if (yourBmi > 30) {
        console.log("Obeso");
    } else if(yourBmi < 29.9  && yourBmi > 25){
        console.log("Sobrepeso");
    } 
    else if (yourBmi < 24.9 && yourBmi > 18.5){
        console.log("normal");
    } else {
        console.log("bajo de peso");
    }