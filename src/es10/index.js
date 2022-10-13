//es10 unir diferentes niveles en un mismo arreglo
//flat(profundidad)
let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];
console.log(array.flat());
//[ 1, 2, 3, 1, 2, 3, [ 1, 2, 3 ] ]

console.log(array.flat(2));
// [
//   1, 2, 3, 1, 2,
//   3, 1, 2, 3
// ]

//es10 flatMap incluye en el arreglo original el resultado de la operación que tenga el segundo parametro dentro de la operación flatMap como se presenta a continuación:

let array = [1, 2, 3, 4, 5];
console.log(array.flatMap((value) => [value, value * 2]));

//es10 trimStart elimina los espacios vacios al inicio de un string

let hello = "       hello world";

console.log(hello);
console.log(hello.trimStart());

//es10 trimStart elimina los espacios vacios al final de un string

let hello = "hello World   -     ";
console.log(hello);
console.log(hello.trimEnd());

// es10 optional catch error son definirlo explicitamentes

try {
} catch (error) {
  error;
}

//es10 convertir arreglos en objetos con su clave y valor

let entries = [
  ["name", "leonardo"],
  ["age", 32],
];

console.log(Object.fromEntries(entries));

//es10 crea simbolos unicos para su uso en el codigo sin ninguna interrupción o error con otro dato. Todos los simbolos son unicos.

let mySymbol = `My Symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description);
