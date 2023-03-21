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

// const str = cats.reduce((acc, el) => {
//   const chunk = `${el.name} (${el.gender})`;
//   if (acc === '') return chunk;
//   return `${acc}, ${chunk}`;
// }, '');

const str = cats.map((cat) => `${cat.name} (${cat.gender})`).join(', ');
console.log(str);
