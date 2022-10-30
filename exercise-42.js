// Escribe una función llamada saludar que reciba un objeto que representa una persona y retorne la frase como se muestra a continuación:

// saludar({ nombre: "Pedro", edad: 23 });
// // "Hola Pedro, tienes 23 años"

// saludar({ nombre: "Maria", edad: 35 });
// // "Hola Maria, tienes 35 años"

// saludar({ nombre: "Juan" });
// // "Hola Juan"
// El objeto siempre tendrá la llave nombre. La llave edad es opcional y cuando no está presente deberás omitir la parte ", tienes x años".

function saludar(obj) {
    if(obj.edad){
    return `hola ${obj.nombre}, tienes ${obj.edad}`;
    }
    return `Hola ${obj.nombre}`
}

console.log(saludar({ nombre: "Pedro", edad: 23 }));
// "Hola Pedro, tienes 23 años"

console.log(saludar({ nombre: "Maria", edad: 35 }));
// "Hola Maria, tienes 35 años"

console.log(saludar({ nombre: "Juan" }));
// "Hola Juan"