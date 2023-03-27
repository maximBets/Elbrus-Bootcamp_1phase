const toyota = {
  model: 'toyota',
  fuel: 50,
  // 15 l / 100 km
  fuelConsumption: 15,
};

const lexus = {
  model: 'lexus',
  fuel: 50,
  fuelConsumption: 25,
};

function drive(km, minutes) {
  // this - это контекст функции
  // this "всегда" равен тому объекту который стоит слева от точки при вызове метода
  this.fuel -= (this.fuelConsumption * km) / 100;
  console.log(`${this.model}: Проехали ${km} км за ${minutes} минут`);
}

// 1
// toyota.drive = drive;
// toyota.drive(100);
// console.log(toyota.fuel);

// lexus.drive = drive;
// lexus.drive(100);
// console.log(lexus.fuel);

// 2
// вызываем функцию drive, а в качестве контекста передаём toyota
// в тойоте не появится метод drive
// drive.call(toyota, 100, 60);

// 3
// drive.apply(toyota, [100, 60]);

// 4
// const driveToyota = drive.bind(toyota, 100, 60);
// driveToyota();
