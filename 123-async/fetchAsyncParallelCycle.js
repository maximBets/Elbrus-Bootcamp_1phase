const { fetch } = require('./lib');

// последовательное выполнение асинхронных запросов

const text = ['Hello!', 'World!', 'Privet, Andrey!', 'Privet, Leopards!', 'Gooooooodbye!'];
const response = [];
let count = 0;

for (let i = 0; i < text.length; i += 1) {
  // eslint-disable-next-line no-loop-func
  fetch(`http://localhost:3000/?text=${text[i]}`, (error, data) => {
    if (error) {
      console.error(error);
    } else {
      response[i] = data;
      count += 1;
      if (count === text.length) console.log(response.join('\n'));
    }
  });
}
