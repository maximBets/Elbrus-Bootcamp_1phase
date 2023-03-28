// функция-конструктор
function Vehicle(model, maxSpeed) {
  this.model = model;
  this.maxSpeed = maxSpeed;
}



Vehicle.prototype.drive = function (km) {
  console.log(`Проехали ${km} км`);
};

Vehicle.prototype.beep = function () {
  console.log('beep!');
};

module.exports = Vehicle;
