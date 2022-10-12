//es8 Object.entries nos regresa un objeto por cada parametro incluido en un objeto data como el del siguiente ejemplo

const data = {
  frontend: "Leonardo",
  backend: "Isabel",
  design: "Ana",
};

const entries = Object.entries(data);

console.log(entries);
console.log(entries.length);

//es8 Object values

const data = {
  frontend: "Leonardo",
  backend: "Isabel",
  design: "Ana",
};

const values = Object.values(data);
console.log(values);
console.log(values.length);

//es8  Cadena vacia a un string, cuenta los caracteres que debe tener la palabra mas la propuesta de caracteres que tu estas incluyend en padStart y padEnd

const string = "Hello";

console.log(string.padStart(7, "hi"));
console.log(string.padEnd(12, " ----"));

// sintaxis para no cometer errores, incluir una coma al final
const data2 = {
  name: "Leonardo",
};

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    false
      ? setTimeout(() => resolve("Hello World"), 3000)
      : reject(new Error("Test error"));
  });
};

const helloAsync = async () => {
  const hello = await helloWorld();
  const hello2 = await helloWorld();
  console.log(hello);
  console.log(hello2);
};

helloAsync();

const anotherFunction = async () => {
  try {
    const hello = await helloWorld();
    console.log(hello);
  } catch (error) {
    console.log(error);
  }
};

anotherFunction();
