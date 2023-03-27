const Vehicle = require('./Vehicle');

// функция-конструктор
function Bicycle(model, maxSpeed, hasBasket) {
  // this = {}
  // call - метод для явной передачи контекста this
  // вызываем функцию Vehicle и передаём туда this
  // там добавятся свойства model и maxSpeed
  Vehicle.call(this, model, maxSpeed);
  // а ещё добавляем в this свойство hasBasket
  this.hasBasket = hasBasket;
}

// добавляем в прототип велосипеда всё что есть в прототипе транспортного средства (один метод)
Object.setPrototypeOf(Bicycle.prototype, Vehicle.prototype);

module.exports = Bicycle;

// вызываем функцию Bicycle через new, создаётся пустой объект this
// const cama = new Bicycle('Cama', 25, false);
// console.log(cama.drive);
