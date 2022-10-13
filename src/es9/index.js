//es9  spread operator para crear solamente otro objeto con las caracteristicas necesarias en el momento. Es este  caso separa name y las otras caracteristicas age y country

const obj = {
  name: "Leonardo",
  age: 34,
  country: "MX",
};

let { name, ...all } = obj;

console.log(name, all);

// impresión en consola

//Leonardo { age: 34, country: 'MX' }

//es9 Unir elementos de objetos a un nuevo objeto
//spread operator para componer un nuevo objeto con el objeto anterior

const obj = {
  name: "Leonardo",
  age: 34,
};

const obj2 = {
  ...obj,
  country: "MX",
};

console.log(obj2);

//finally como un método dentro de una promesa que nos permite ejecutar código despues de un then o catch. Esto sucede con resolve y reject

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Hello world"), 3000)
      : reject(new Error("Test Error"));
  });
};

helloWorld()
  .then((response) => console.log(response))
  .catch((error) => console.log(error))
  .finally(() => console.log("Finalzó"));

//regex para probar como lo datos estan confirmados en una string,date, number. Any value neds to be a string. Un patrón especifico para los datos.

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec("2018-04-20");
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);
