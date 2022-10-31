// En este ejercicio deberás agregar dos métodos a el objeto persona.

// Agrega un método llamado saludar que reciba un nombre y retorna una frase saludando a esa persona como se muestra a continuación:

// persona.saludar("Pedro"); // "Hola Pedro, me llamo Maria"
// persona.saludar("Juan"); // "Hola Juan, me llamo Maria"
// Agrega otro método llamado bmi que retorne el índice de masa corporal de la persona. Recuerda que el índice de masa corporal se calcula con la siguiente fórmula: peso / altura^2.

// Por ejemplo, asumiendo que el peso es 54 y la altura es 1.7:

// persona.bmi(); // 18.68512110726644

const persona ={
    saludar: function (name) {
        return `Hola ${name}, me llamo Maria`;
    },
    bmi: function (weight, height) {
        return weight / height **2;
    }
}

console.log(persona.saludar("Pedro")); // "Hola Pedro, me llamo Maria"
console.log(persona.saludar("Juan")); // "Hola Juan, me llamo Maria"
console.log(persona.bmi(57, 1.7)); // 18.68512110726644
