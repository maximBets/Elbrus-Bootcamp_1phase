const fs = require('fs');
const path = require('path');

for (let i = 0; i < 5; i += 1) {
  fs.writeFile(path.join(__dirname, `data/${i}.txt`), i.toString(), (error) => {
    if (error) console.error(error);
  });
}
