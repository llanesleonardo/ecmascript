// old way definición de valores por default
function newFuction(name, age, country) {
  var name = name | "Leonardo";
  var age = age | 32;
  var country = country | "MX";
  console.log(name, age, country);
}

//es6 definición de valores por default

function newFunction2(name = "Leonardo", age = 32, country = "MX") {
  console.log(name, age, country);
}

newFunction2();
newFunction2("Cecilia", "37", "USA");

//old way concatenación

let hello = "Hello";
let world = "World";

let epicPhrase = hello + " " + world;
console.log(epicPhrase);

//es6 concatenación template literals

let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

// old way salto de linea
let lorem =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. \n " +
  "otra frase epica que necesitamos";

// es6  salto de linea template literals
let lorem2 = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 

  ahora es otra frase epica
  `;

console.log(lorem);

console.log(lorem2);

// old way destructuración
let person = {
  nombre: "Leonardo",
  age: 32,
  country: "MX",
};

console.log(person.name, person.age);

// es6 destructuración

let { name, age, country } = person;
console.log(name, age, country);

//es6 agregar otros arreglos a un nuevo arreglo Spread operator

let team1 = ["Leonardo", "Julian", "Ricardo"];
let team2 = ["Valeria", "Jessica", "Camila"];

let education = ["David", ...team1, ...team2];

console.log(team1);
console.log(team2);
console.log(education);

{
  var globalVar = "Global Var";
}

{
  let globalLet = "Global let";
  console.log(globalLet);
}

console.log(globalVar);

//const Constantes
const a = "b";
a = "a";
console.log(a);
// su impresión es un error TypeError: Assignment to constant variable.

let name = "Leonardo";
let age = 34;

//old way es5 asignación de valor a un objeto
obj = { name: name, age: age };

//es6 asignación de valor a un objeto
obj2 = { name, age };

console.log(obj);

console.log(obj2);

// funciones tipo flecha - arrow fuction

const names = [
  { name: "Leonardo", age: 32, country: "MX" },
  { name: "Leonardo1", age: 33, country: "MX" },
  { name: "Leonardo2", age: 34, country: "MX" },
  { name: "Leonardo3", age: 35, country: "MX" },
];

let listOfNames = names.map(function (item) {
  console.log(item.name);
});
let listOfNames2 = names.map((item) => console.log(item.name));

// const listOfNames3 = (name,age) => { bloque de código más amigable con dos o más  parametro
//     código ....
// }

// const listOfNames4 = name = > { bloque de código más amigable con un parametro
//     código .....
// }

// const square = num => num * num;  código más amigable

//

//es6 trabajo de asincronismo con promesas

const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (!true) {
      resolve("Todo bien");
    } else {
      reject("Algo salió mal");
    }
  });
};

helloPromise()
  .then((response) => console.log(response))
  .then(() => console.log("Segunda respuesta"))
  .catch((error) => console.log(error));

/** Respuesta en la consola
[Running] node "/home/app/personalprojects/ecmascript/src/es6/tempCodeRunnerFile.js"
Todo bien
Segunda respuesta

[Done] exited with code=0 in 0.126 seconds

[Running] node "/home/app/personalprojects/ecmascript/src/es6/tempCodeRunnerFile.js"
Algo salió mal

[Done] exited with code=0 in 0.124 seconds 
   */

//Clases y herencia

// Aplicar programación orientada a objetos dentro de JS

class Calculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }

  sum(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB;
  }
}

const calc = new Calculator();

console.log(calc.sum(2, 3));

// Import y Export
import hello from "./module.js";
console.log(hello());

// Generadores usando yield y next() para iterarar sobre los valores, value

function* helloWorld() {
  if (true) {
    yield "Hello, ";
  }
  if (true) {
    yield "World ";
  }
}

const generatorHello = helloWorld();

console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
