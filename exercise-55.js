// Escribe una función llamada extraerNombres que reciba un arreglo (de objetos) y retorne un nuevo arreglo con todos los nombres que tengan al menos una "a" (mayúscula o minúscula):

// let personas = [
//   { nombre: "Pedro" },
//   { nombre: "Adela" },
//   { nombre: "Maria" },
//   { nombre: "Luis" }
// ];

// extraerNombres(personas); // ["Adela", "Maria"]

let personas = [
    { nombre: "Pedro" },
    { nombre: "Adela" },
    { nombre: "Maria" },
    { nombre: "Luis" }
  ];

  function extraerNombres(arr) {
    let names = arr.map(p => p.nombre);
    let namesIncludingA = names.filter(name => name.toLowerCase().includes('a'));

    return namesIncludingA;
}


  console.log(extraerNombres(personas)); // ["Adela", "Maria"]
