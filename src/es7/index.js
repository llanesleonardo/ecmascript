//es7 includes método que resulta en un boolean que verifica si existe un string o un valor numerico en un arreglo

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
if (numbers.includes(9)) {
  console.log("Si se encuentra el valor 7");
} else {
  console.log("NO se encuentra el valor 7");
}

//es7 pontencias con el caracter **

let base = 4;
let exponent = 2;

let result = base ** exponent;

console.log(result);
