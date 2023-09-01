const objectValue = {
  firstName: "Maria Paz",
  lastName: "Blanco",
  age: 22,
};

const toArray = (objectVar) => Object.entries(objectVar);
console.log(toArray(objectValue));
