// Escribe una función eliminarPeso que reciba un objeto. La función deberá eliminar la llave peso (si existe) y retornar el objeto modificado.

// eliminarPeso({ nombre: "Juan", peso: 40 }); // { nombre: "Juan" }
// eliminarPeso({ peso: 30 }); // {}
// eliminarPeso({ nombre: "Diana" }); // { nombre: "Diana" }

function eliminarPeso(person) {
    if (person.hasOwnProperty('peso')) {
        delete person.peso;
        return person;
    }
    return person;
} // -> respuesta mia.

// respuesta sugerida (mucho más sencilla)
// function eliminarPeso(person) {
//     delete person.peso;
  
//     return person;
//   }

console.log(eliminarPeso({ nombre: "Juan", peso: 40 })); // { nombre: "Juan" }
console.log(eliminarPeso({ peso: 30 })); // {}
console.log(eliminarPeso({ nombre: "Diana" })); // { nombre: "Diana" }