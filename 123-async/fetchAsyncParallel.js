const { fetch } = require('./lib');

// последовательное выполнение асинхронных запросов

const response = [];
let count = 0;

fetch(`http://localhost:3000/?text=Hello!`, (error1, data1) => {
  // console.log(data1);
  response[0] = data1;
  count += 1;
  if (count === 5) console.log(response.join('\n'));
});

fetch(`http://localhost:3000/?text=World!`, (error2, data2) => {
  // console.log(data2);
  response[1] = data2;
  count += 1;
  if (count === 5) console.log(response.join('\n'));
});

fetch(`http://localhost:3000/?text=Privet, Andrey!`, (error3, data3) => {
  // console.log(data3);
  response[2] = data3;
  count += 1;
  if (count === 5) console.log(response.join('\n'));
});

fetch(`http://localhost:3000/?text=Privet, Leopards!`, (error4, data4) => {
  // console.log(data4);
  response[3] = data4;
  count += 1;
  if (count === 5) console.log(response.join('\n'));
});

fetch(`http://localhost:3000/?text=Gooooooodbye!`, (error5, data5) => {
  // console.log(data5);
  response[4] = data5;
  count += 1;
  if (count === 5) console.log(response.join('\n'));
});
