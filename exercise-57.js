// Agrega dos métodos a la función constructora Persona: saludar y bmi.

// saludar debe recibir un nombre y retornar el string "Hola X, me llamo Y" donde X es el argumento que se recibe y Y es la propiedad nombre del objeto.

// bmi no recibe ningún argumento y retorna el índice de masa corporal que se calcula con la siguiente fórmula:

// peso / altura^2

// Un ejemplo de cómo invocaríamos los métodos:

// const pedro = new Persona("Pedro", 72, 1.5);
// pedro.saludar("Maria"); // "Hola Maria, me llamo Pedro"
// pedro.bmi(); // 32
// function Persona(nombre, peso, altura) {
//   this.nombre = nombre;
//   this.peso = peso;
//   this.altura = altura;
// }


function Persona(nombre, peso, altura) {
    this.nombre = nombre;
    this.peso = peso;
    this.altura = altura;
  }

  Persona.prototype.saludar = function(nombre) {
    return 'Hola ' + nombre + ', me llamo ' + this.nombre;
  }
  
  Persona.prototype.bmi = function() {
    return this.peso / Math.pow(this.altura, 2);
  }

const pedro = new Persona("Pedro", 72, 1.5);
console.log(pedro.saludar("Maria")); // "Hola Maria, me llamo Pedro"
console.log(pedro.bmi()); // 32