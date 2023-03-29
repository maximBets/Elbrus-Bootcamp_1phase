const fs = require('fs');
const path = require('path');

const response = [];
let count = 0;

for (let i = 0; i < 5; i += 1) {
  // eslint-disable-next-line no-loop-func
  fs.readFile(path.join(__dirname, `data/${i}.txt`), 'utf-8', (error, data) => {
    if (error) {
      console.error(error);
    } else {
      count += 1;
      response[i] = data;
      if (count === 5) {
        console.log(response.join('\n'));
      }
    }
  });
}
