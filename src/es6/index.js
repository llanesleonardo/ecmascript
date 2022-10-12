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
