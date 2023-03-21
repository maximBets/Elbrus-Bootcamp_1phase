const fs = require('fs');
const { EOL } = require('os');
const path = require('path');

const lines = fs.readFileSync(path.join(__dirname, 'cats.txt'), 'utf-8').split(EOL);
const cats = lines.map((line) => {
  const arr = line.split(' ');
  return {
    name: arr[0],
    gender: arr[1],
    age: Number(arr[2]),
  };
});

console.log(cats);

// получить суммарный возраст котят
const sumAge = cats.reduce((acc, el) => acc + el.age, 0);
console.log(sumAge);

// acc = 0

// [
//  el = { name: 'Alisa', gender: 'female', age: 4 },
//  acc = 0
//  return acc + 4 = 4

//  el = { name: 'Lilya', gender: 'female', age: 8 },
//  acc = 4
//  return acc + 8 = 12

//  el = { name: 'Chucha', gender: 'female', age: 2 }
//  acc = 12
//  return 14

// ]

const maxAge = cats.reduce((acc, el) => {
  if (el.age > acc) {
    return el.age;
  }
  return acc;
}, -1);

console.log(maxAge);

// используем reduce -
//  для суммирования
//  для получения минимального или максимального значения
//  для получения строки из массива если нам не подходит join
