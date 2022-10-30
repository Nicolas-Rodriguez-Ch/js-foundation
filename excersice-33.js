// Escribe una función llamada mayoresDiez que reciba un arreglo de números y retorne otro arreglo con todos los números que sean mayores a diez:

// mayoresDiez([1, 23, 5, 40]); // [23, 40]
// mayoresDiez([12, 45, 67]); // [12, 45, 67]
// mayoresDiez([1, 2, 3]); // []
// Nota: este ejercicio lo debes hacer sin ayuda de la función filter de JavaScript.


function mayoresDiez(nums) {
    let newNums =[];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i]>10) {
            newNums.push(nums[i]);
        }       
    }
    return newNums;
}

console.log(mayoresDiez([1, 23, 5, 40])); // [23, 40]
console.log(mayoresDiez([12, 45, 67])); // [12, 45, 67]
console.log(mayoresDiez([1, 2, 3])); // []