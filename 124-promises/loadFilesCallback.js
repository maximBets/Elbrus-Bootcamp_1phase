const fs = require('fs');
const path = require('path');

//fs.readdir
//fs.stat

let sizeDir = 0;

function finish(number) {
    console.log('Counted:');
    console.log(number);
  }

fs.readdir(path.join(__dirname, 'files'), (err, fileNames) => {
  if (err) {
    console.log(err);
  }
  console.log(fileNames);


  for (let i = 0; i < fileNames.length; ++i) {
    fs.stat(path.join(__dirname, `files/${fileNames[i]}`), (err, fileStat) => {
      if (err) {
        console.log(err.message);
      }
      //console.log(fileStat.size);

      sizeDir += fileStat.size;
      if (i === fileNames.length - 1) {
        finish(sizeDir);
      }
    });
  }
});
