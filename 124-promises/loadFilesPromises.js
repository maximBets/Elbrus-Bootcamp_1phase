const fsPromises = require('fs').promises;
const path = require('path');

//fs.readdir
//fs.stat

function finish(number) {
  console.log('Counted:');
  console.log(number);
}

const readdirPromise = fsPromises.readdir(path.join(__dirname, 'files'));

readdirPromise
  .then((fileNames) => {
    console.log(fileNames);

    const statPromises = fileNames.map((fileName) => {
      const statPromise = fsPromises.stat(
        path.join(__dirname, `files/${fileName}`)
      );
      return statPromise;
    });
    //вот тут только массив промисы
    //если вижу массив промиссов — могу применить Promise.all
    return Promise.all(statPromises); //превращает массив промисов в один промис
  })
  .then((stats) => {
    const sizes = stats.map((element) => element.size);
    return sizes;
  })
  .then((sizes) => {
    const dirSize = sizes.reduce((acc, element) => acc + element, 0);
    return dirSize;
  })
  .then((dirSize) => {
    finish(dirSize);
  })
  .catch((err) => {
    console.log(err.message);
  });
