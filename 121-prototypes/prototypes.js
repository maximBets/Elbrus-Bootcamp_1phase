// функция-конструктор
function Car(model, fuelConsumption) {
  // скрыто от программиста создаётся пустой объект this
  // this = {};

  this.model = model;
  this.fuel = 0;
  this.fuelConsumption = fuelConsumption;

  // return this
}

Car.prototype.refuel = function (fuel) {
  this.fuel += fuel;
};

Car.prototype.drive = function (km) {
  this.fuel -= (this.fuelConsumption * km) / 100;
};

const toyota = new Car('Toyota', 15);
toyota.refuel(50);
toyota.drive(100);
console.log(toyota.fuel);

const lexus = new Car('Lexus', 25);
lexus.refuel(50);
lexus.drive(100);
console.log(lexus.fuel);
