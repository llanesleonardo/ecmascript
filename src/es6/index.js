// old way
function newFuction(name, age, country) {
  var name = name | "Leonardo";
  var age = age | 32;
  var country = country | "MX";
  console.log(name, age, country);
}

//es6

function newFunction2(name = "Leonardo", age = 32, country = "MX") {
  console.log(name, age, country);
}

newFunction2();
newFunction2("Cecilia", "37", "USA");

//old way

let hello = "Hello";
let world = "World";

let epicPhrase = hello + " " + world;
console.log(epicPhrase);

//template literals

let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);
