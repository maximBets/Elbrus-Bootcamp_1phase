const { fetch } = require('./lib');

console.log(1); // 1

// 2 (запрос отправлен)
fetch(`https://express-figlet.onrender.com/?text=Hello!`, () => {
  console.log(2); // 6
  // освободился
});

// 3 (запрос отправлен)
fetch(`https://express-figlet.onrender.com/?text=World!`, () => {
  console.log(3); // 5
  // освободился
});

// 4
console.log(4);

// освобождается
