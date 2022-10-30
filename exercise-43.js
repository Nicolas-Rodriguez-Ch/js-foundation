// Escribe una función agregarPeso que reciba un objeto (que representa una persona) y un número. La función deberá retornar el mismo objeto de entrada pero con una nueva llave peso cuyo valor deberá ser el número que llega por parámetro:

// agregarPeso({ nombre: "Pedro" }, 40);
// // { nombre: "Pedro", edad: 40 }

// agregarPeso({ nombre: "Maria" }, 23);
// // { nombre: "Maria", edad: 23 }

function agregarPeso(obj, num) {
        obj.edad = num;
        return obj;
}



console.log(agregarPeso({ nombre: "Pedro" }, 40));
// { nombre: "Pedro", edad: 40 }

console.log(agregarPeso({ nombre: "Maria" }, 23));
// { nombre: "Maria", edad: 23 }