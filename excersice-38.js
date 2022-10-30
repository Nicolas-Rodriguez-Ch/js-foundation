// Escribe una función llamada abuela que reciba un string (una cadena de texto).

// Si el string está todo en mayúsculas la función debe retornar la frase "Ahh si, manzanas!". De lo contrario, deberá retornar la frase "Habla más duro mijito".

// Por último, si el string es vacío (o son sólo espacios) debe retornar la frase "Dices algo?".

// abuela("hola"); // "Habla más duro mijito"
// abuela("HOLA"); // "Ahh si, manzanas!"
// abuela(""); // "Dices algo?"
// abuela("    "); // "Dices algo?"

function abuela(str) {
    let message;
    if (str.toUpperCase()===str) {
        message = "Ahh si, manzanas";
    }
    if (str.toUpperCase() !== str){
        message = "Habla más duro mijito";
    } 
    if (str.trim()=== ""){
        message = "Dices algo?";
    }
    return message;
}

console.log(abuela("hola")); // "Habla más duro mijito"
console.log(abuela("HOLA")); // "Ahh si, manzanas!"
console.log(abuela("")); // "Dices algo?"
console.log(abuela("    ")); // "Dices algo?"