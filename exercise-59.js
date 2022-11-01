// Agrega un método llamado promedio a la función constructora Array que retorne el promedio de los elementos en el arreglo:

// [1, 2, 3, 4].promedio(); // 2.5
// [7, 8, 9].promedio(); // 8
// [300, 100].promedio(); // 200

Array.prototype.promedio = function () {
    let length = this.length;
    let sum = this.reduce((sum, val)=> {
        return sum + val;
    })
    return sum / length;
}

console.log([1, 2, 3, 4].promedio()); // 2.5
console.log([7, 8, 9].promedio()); // 8
console.log([300, 100].promedio()); // 200