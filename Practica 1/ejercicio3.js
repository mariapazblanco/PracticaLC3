let countries = [
    { name: "Argentina", population:45036032},
    { name: "Colombia", population:50930663},
    { name: "España", population:47363807},
    { name: "Estados Unidos", population: 335942004},
    { name: "Rusia", population:145617329 },
    ];

    const order = input.map((input) => input.population)
    order.sort((a, b) => {
        if(a == b) {
            return 0; 
          }
          if(a > b) {
            return -1;
          }
          return 1;
        });

    console.log(countries.sort(a,b) => )

