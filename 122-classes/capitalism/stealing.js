const Shop = require('./Shop');
const Thief = require('./Thief');

const milk = { name: 'milk', price: 25 };

const products = [
  { name: 'hleb', price: 15 },
  { name: 'syr', price: 30 },
  { name: 'milk', price: 25 },
];

const jane = new Thief('Jane', 34, 0);
const magnit = new Shop('Magnit u doma', 1000, products);

console.log(magnit);
console.log(jane);

jane.stealMoney(magnit);

console.log(magnit);
console.log(jane);
