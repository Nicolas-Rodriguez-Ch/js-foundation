// Agrega un nuevo método llamado palindrome al prototipo de String que retorne true si el string es un palíndrome, false de lo contrario.

// Recuerda que un palíndrome es una frase que se lee igual de izquierda a derecha que de derecha a izquierda (excluyendo los espacios en blanco):

// "anita lava la tina".palindrome(); // true
// "aman a panama".palindrome(); // true
// "hola mundo".palindrome(); // false

String.prototype.palindrome = function () {
    var string = this.replace(/\s/g, '').toLowerCase();
    var reverseString = string.split('').reverse().join('');
  
    return string === reverseString;
}

console.log("anita lava la tina".palindrome()); // true
console.log("aman a panama".palindrome()); // true
console.log("hola mundo".palindrome()); // false