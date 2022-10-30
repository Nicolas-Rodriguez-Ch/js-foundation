// Escribe una función llamada capitalizar que reciba una cadena y capitalice cada palabra de la cadena.

// Nota: puedes asumir que cada palabra está separada por espacio.

// capitalizar("pedro perez"); // "Pedro Perez"
// capitalizar("make it real"); // "Make it Real"
function capitalizar(str) {
    const sentence = str;
    const words = sentence.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);   
    }
    return words.join(" ");
}


console.log(capitalizar("pedro perez")); // "Pedro Perez"
console.log(capitalizar("make it real")); // "Make it Real"