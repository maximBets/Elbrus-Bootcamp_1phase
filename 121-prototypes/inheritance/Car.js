const Vehicle = require('./Vehicle');

// функция-конструктор
function Car(model, fuelConsumption, maxSpeed) {
  Vehicle.call(this, model, maxSpeed);

  this.fuel = 0;
  this.fuelConsumption = fuelConsumption;
}

Object.setPrototypeOf(Car.prototype, Vehicle.prototype);

Car.prototype.refuel = function (fuel) {
  this.fuel += fuel;
};

// перекрываем метод drive из родительского класса Vehicle
Car.prototype.drive = function (km) {
  this.fuel -= (this.fuelConsumption * km) / 100;
  console.log(`Проехали ${km} км`);
};

module.exports = Car;

const toyota = new Car('Toyota', 15, 180);
toyota.refuel(50);
toyota.drive(100);
toyota.beep();
console.log(toyota.fuel);

console.log(toyota instanceof Car);
