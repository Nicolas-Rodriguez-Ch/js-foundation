// Escribe una función descifrar que reciba un str y un objeto. Utiliza las propiedades del objeto para reemplazar los caracteres de la cadena y retorna el resultado:

// descifrar("h0l4", { 0: "o", 4: "a" }); // "hola"
// descifrar("pyrmizo", { y: "e", z: "s" }); // "permiso"
// descifrar("igual", { h: "n" }); // "igual"

function descifrar(str, obj) {
    var chars = str.split('');

    for(var i = 0; i < chars.length; i++) {
      var char = chars[i];
      if(obj.hasOwnProperty(char)) {
        chars[i] = obj[char];
      }
      return chars.join('');
    } 
}

console.log(descifrar("h0l4", { 0: "o", 4: "a" })); // "hola"
console.log(descifrar("pyrmizo", { y: "e", z: "s" })); // "permiso"
console.log(descifrar("igual", { h: "n" })); // "igual"