// Escribe una función llamada escalera que reciba un número como argumento. La función debe retornar una cadena de texto en forma de escalera como en el siguiente ejemplo:

// escalera(2);
// // #
// // ##

// escalera(3);
// // #
// // ##
// // ###

// escalera(5);
// // #
// // ##
// // ###
// // ####
// // #####
// La primera línea del string tiene un signo de número (#), la segunda dos, y así sucesivamente hasta el número que ingresó el usuario.

function escalera(num) {
    let result = "";

    for (let i = 1; i <= num; i++) {
        let floor ="";
        for (let j = 1; j <= i; j++) {
            floor+="#";           
        }
        floor+="\n";
        result += floor
    }
    return result
}

console.log((escalera(5)));