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

// cats.sort((a, b) => a.age - b.age);

cats.sort((a, b) => {
  // нужно вернуть отрицательное число если a < b
  // нужно вернуть положительное число если a > b
  // нужно вернуть 0 если a === b
  if (a.age < b.age) return -1;
  if (a.age > b.age) return 1;
  return 0;
});

console.log(cats);

// если нам нужно отрезать от исходного массива какую-то часть, то используем slice
const juniors = cats.slice(0, 3);
console.log(juniors);
