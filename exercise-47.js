// Escribe una función existeLlave que reciba un objeto y un string. La función deberá retornar true si el string es una llave del objeto, false de lo contrario:

// existeLlave({ name: "Alejo" }, "name"); // true
// existeLlave({ name: "Alejo" }, "age"); // false
// existeLlave({}, "peso"); // false
// existeLlave({ name: "Alejo", peso: 67 }, "peso"); // true

function existeLlave(obj, str) {
    if (obj.hasOwnProperty(str)) {
        return true;
    }
    return false;
} // -> mi respuesta


// respuesta sugerida, mucho más sencilla
// function existeLlave(obj, key) {
//     return obj.hasOwnProperty(key);
//   }

console.log(existeLlave({ name: "Alejo" }, "name")); // true
console.log(existeLlave({ name: "Alejo" }, "age")); // false
console.log(existeLlave({}, "peso")); // false
console.log(existeLlave({ name: "Alejo", peso: 67 }, "peso")); // true