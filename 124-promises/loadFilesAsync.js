//async/await

const fsPromises = require('fs').promises;
const path = require('path');

const getStats = async (fileNames) => {

  const statPromises = fileNames.map((fileName) => {
    return fsPromises.stat(path.join(__dirname, `files/${fileName}`));
  });

  // statPromises = массив промисов

  const stats = await Promise.all(statPromises);
  return stats;
};

const countDirSize = (stats) => {
  const sizes = stats.map((element) => element.size);
  const dirSize = sizes.reduce((acc, element) => acc + element, 0);
  return dirSize;
};

function finish(number) {
  console.log('Counted:');
  console.log(number);
}
// или так

const getFileNames = async () => {
  const fileNames = await fsPromises.readdir(path.join(__dirname, 'files'));
  const stats = await getStats(fileNames);
  const dirSize = countDirSize(stats);

  finish(dirSize);
};

/* async function getFileNames() {
  const fileNames = await fsPromises.readdir(path.join(__dirname, 'files'));
  console.log(fileNames);
} */

console.log("Begin to load files") //1

getFileNames(); //3

console.log("End"); //2

