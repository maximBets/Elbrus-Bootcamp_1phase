/* eslint-disable no-param-reassign */
const toyota = {
  model: 'toyota',
  fuel: 0,
  // 15 l / 100 km
  fuelConsumption: 15,
};

const lexus = {
  model: 'lexus',
  fuel: 0,
  fuelConsumption: 25,
};

const vaz = {
  model: 'vaz',
  fuel: 0,
};

function refuel(car, fuel) {
  car.fuel += fuel;
}

function drive(car, km) {
  car.fuel -= (car.fuelConsumption * km) / 100;
}

refuel(toyota, 50);
drive(toyota, 100);
console.log(toyota.fuel);

refuel(lexus, 50);
drive(lexus, 100);
console.log(lexus.fuel);

refuel(vaz, 50);
drive(vaz, 100);
console.log(vaz.fuel);

// lexus.color = 'black';
// delete lexus.color;
// lexus.model = 'LEXUS';
// lexus['max-speed'] = 200;
// lexus['max-speed'] = 200;

// for (let key in lexus) {
//   console.log(key, lexus[key]);
// }

// Object.entries(lexus).forEach((entry) => console.log(entry));
// Object.values(lexus).forEach((entry) => console.log(entry));
// console.log(Object.keys(lexus));

// console.log(lexus.model);
