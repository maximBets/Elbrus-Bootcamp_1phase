const fs = require('fs');
const { EOL } = require('os');
const path = require('path');

function getPadawanNames() {
  const data = fs.readFileSync(path.join(__dirname, 'data/padawans.txt'), 'utf-8');
  // console.log(JSON.stringify(data));
  const names = data.split(EOL); // EOL = "\n" для unix, "\r\n" для windows

  // const namesFiltered = [];
  // for (let i = 0; i < names.length; i += 1) {
  //   const name = names[i];
  //   if (name.trim() !== '') namesFiltered.push(name);
  // }
  // for (const name of names) {
  //   if (name.trim() !== '') namesFiltered.push(name);
  // }

  const namesFiltered = names.filter((name) => name !== '');

  return namesFiltered;
}

function getLightsaberScores() {
  // const data = fs.readFileSync(path.join(__dirname, 'data/scores.txt'), 'utf-8');
  // const lines = data.split(EOL);
  // const linesFiltered = lines.filter((name) => name !== '');
  // const scores = linesFiltered.map((str) => parseFloat(str));
  // return scores;
  const scores = fs
    .readFileSync(path.join(__dirname, 'data/scores.txt'), 'utf-8')
    .split(EOL)
    .filter((name) => name !== '')
    .map((str) => parseFloat(str));

  return scores;
}

function getStats() {
  const names = getPadawanNames();
  const scores = getLightsaberScores();

  return names.map((name, index) => [name, scores[index]]);

  // const stats = [];
  // for (let i = 0; i < names.length; i += 1) {
  //   stats.push([names[i], scores[i]]);
  // }

  // return stats;
}

function writeStats(stats) {
  const lines = stats.map((pair) => `${pair[0]} ${pair[1]}`);
  const text = lines.join(EOL);
  fs.writeFileSync(path.join(__dirname, 'data/stats.txt'), text);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
