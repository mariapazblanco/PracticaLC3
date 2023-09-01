let countries = [
  { name: "Argentina", population: 45036032 },
  { name: "Colombia", population: 50930663 },
  { name: "España", population: 47363807 },
  { name: "Estados Unidos", population: 335942004 },
  { name: "Rusia", population: 145617329 },
];

console.log(countries.sort((a, b) => b.population - a.population));
