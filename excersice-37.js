// Escribe una función llamada palabras que reciba un string y retorne un arreglo con las palabras individuales que aparecen en el string.

// Nota: puedes asumir que las palabras están separadas por un espacio.

// palabras("hola mundo"); // ["hola", "mundo"]
// palabras("make it real"); // ["make", "it", "real"]

function palabras(string) {
    let result = string.split(" ");
    return result;
}


console.log(palabras("hola mundo")); // ["hola", "mundo"]
console.log(palabras("make it real")); // ["make", "it", "real"]