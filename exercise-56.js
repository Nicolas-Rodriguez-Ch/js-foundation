// Crea una función constructora llamada Producto que reciba dos argumentos: el nombre y el precio. La función deberá inicializar las propiedades nombre y precio del objeto con los valores que llegan como parámetros.

// A continuación mostramos algunos ejemplos de la forma en la que se va a utilizar esta función constructora:

// const pan = new Producto("Pan", 2.5);
// pan.nombre; // "Pan"
// pan.precio; // 2.5

// const leche = new Producto("Leche", 3.7);
// leche.nombre; // "Leche"
// leche.peso; // 3.7


const Producto = function (nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}

const pan = new Producto("Pan", 2.5);
console.log(pan.nombre); // "Pan"
console.log(pan.precio); // 2.5

const leche = new Producto("Leche", 3.7);
console.log(leche.nombre); // "Leche"
console.log(leche.precio); // 3.7