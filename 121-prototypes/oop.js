// функция-конструктор
function Car(model, fuelConsumption) {
  const car = {
    model,
    fuel: 0,
    fuelConsumption,
    // метод - это функция, которая принадлежит определённому объекту и работает именно с ним
    // можно задавать методы так
    refuel(fuel) {
      car.fuel += fuel;
    },
  };

  // а можно так
  car.drive = function (km) {
    car.fuel -= (car.fuelConsumption * km) / 100;
  };

  return car;
}

const toyota = Car('Toyota', 15);
toyota.refuel(50);
toyota.drive(100);
console.log(toyota.fuel);

const lexus = Car('Lexus', 25);
lexus.refuel(50);
lexus.drive(100);
console.log(lexus.fuel);
