// La función calcularColor recibe un número como argumento y retorna un string de acuerdo al número:

// Si el número es 1 retorna "El color es negro".
// Si el número es 2 retorna "El color es blanco".
// Si el número es 3 retorna "El color es azul".
// De lo contrario retorna "El color es verde".
// El problema es que la función tiene algunos errores y no está funcionando. Tu misión es corregirla para que funcione correctamente según lo anterior.

// function calcuarColor() {
//   if (num === 1) {
//     let color = "black";
//   } else (num = 2) {
//     let color = "blanco":
//   } else if (num === 3) {
//     let color = "rojo";
//   } else {
//     let color = "verde";
//   }

//   return "El color es " + color;
// }

function calcuarColor(num) {
    let color ="";
    let newColor = "";
    if (num === 1) {
     newColor = color.replace("","black");
    } else if (num === 2) {
     newColor = color.replace("","blanco");
    } else if (num === 3) {
     newColor = color.replace("","rojo");
    } else {
     newColor = color.replace("","verde");
    }
  
    return "El color es " + newColor;
  } // -> mi respuesta, algo complicada. 

  // Repuesta sugerida 
//   function calcularColor(num) {
//     let color;
//     if (num === 1) {
//       color = "negro";
//     } else if (num === 2) {
//       color = "blanco";
//     } else if (num === 3) {
//       color = "azul";
//     } else {
//       color = "verde";
//     }
  
//     return "El color es " + color;
//   }

  console.log(calcuarColor(1));
  console.log(calcuarColor(2));
  console.log(calcuarColor(3));
  console.log(calcuarColor(4));